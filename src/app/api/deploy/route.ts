import { NextRequest, NextResponse } from "next/server";

// POST /api/deploy — called by Hermes to create a new Vercel preview deployment
// Body: { business_name, phone, suburb, state, services, brand_color, ...optional fields }

interface DeployRequest {
  business_name: string;
  phone: string;
  suburb: string;
  state: string;
  services: { name: string; description: string }[];
  brand_color: string;
  template?: string;
  tagline?: string;
  email?: string;
  year_founded?: string;
  owner_name?: string;
  license_number?: string;
  description?: string;
  about_text?: string;
  service_areas?: string[];
  testimonials?: { name: string; text: string; rating: number; suburb: string }[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function POST(req: NextRequest) {
  try {
    // 1. Validate request
    const body = (await req.json()) as DeployRequest;
    const {
      business_name,
      phone,
      suburb,
      state,
      services,
      brand_color,
      template,
      tagline,
      email,
      year_founded,
      owner_name,
      license_number,
      description,
      about_text,
      service_areas,
      testimonials,
    } = body;

    if (!business_name || !phone || !suburb || !state) {
      return NextResponse.json(
        { error: "Missing required fields: business_name, phone, suburb, state" },
        { status: 400 }
      );
    }

    // 2. Build env vars for the deployment
    const slug = slugify(business_name);
    const envVars: Record<string, string> = {
      NEXT_PUBLIC_BUSINESS_NAME: business_name,
      NEXT_PUBLIC_PHONE: phone,
      NEXT_PUBLIC_SUBURB: suburb,
      NEXT_PUBLIC_STATE: state,
      NEXT_PUBLIC_BRAND_COLOR: brand_color || "#fca12c",
      NEXT_PUBLIC_TEMPLATE: template || "default",
    };

    // Optional fields
    if (tagline) envVars.NEXT_PUBLIC_TAGLINE = tagline;
    if (email) envVars.NEXT_PUBLIC_EMAIL = email;
    if (year_founded) envVars.NEXT_PUBLIC_YEAR_FOUNDED = year_founded;
    if (owner_name) envVars.NEXT_PUBLIC_OWNER_NAME = owner_name;
    if (license_number) envVars.NEXT_PUBLIC_LICENSE_NUMBER = license_number;
    if (description) envVars.NEXT_PUBLIC_DESCRIPTION = description;
    if (about_text) envVars.NEXT_PUBLIC_ABOUT_TEXT = about_text;
    if (services?.length)
      envVars.NEXT_PUBLIC_SERVICES = JSON.stringify(services);
    if (service_areas?.length)
      envVars.NEXT_PUBLIC_SERVICE_AREAS = JSON.stringify(service_areas);
    if (testimonials?.length)
      envVars.NEXT_PUBLIC_TESTIMONIALS = JSON.stringify(testimonials);

    // 3. Call Vercel API to create a new deployment
    const vercelToken = process.env.VERCEL_API_TOKEN;
    const vercelProjectId = process.env.VERCEL_PROJECT_ID;
    const vercelTeamId = process.env.VERCEL_TEAM_ID;

    if (!vercelToken || !vercelProjectId) {
      // Fallback: return the config for manual testing
      return NextResponse.json({
        status: "configured",
        message: "Vercel API not configured. Returning deployment config for manual use.",
        slug,
        envVars,
        deployCommand: `VERCEL_ORG_ID=${process.env.VERCEL_ORG_ID} vercel deploy --yes -e ${Object.entries(envVars)
          .map(([k, v]) => `${k}="${v}"`)
          .join(" -e ")}`,
      });
    }

    // 4. Create Vercel deployment
    const headers: Record<string, string> = {
      Authorization: `Bearer ${vercelToken}`,
      "Content-Type": "application/json",
    };

    // Get project details first
    const projectUrl = vercelTeamId
      ? `https://api.vercel.com/v9/projects/${vercelProjectId}?teamId=${vercelTeamId}`
      : `https://api.vercel.com/v9/projects/${vercelProjectId}`;

    const projectRes = await fetch(projectUrl, { headers });
    if (!projectRes.ok) {
      return NextResponse.json(
        { error: `Failed to fetch Vercel project: ${projectRes.status}` },
        { status: 500 }
      );
    }

    const project = await projectRes.json();
    const repoId = project?.link?.repo?.id;
    const repoBranch = project?.link?.repo?.branch || "main";

    if (!repoId) {
      return NextResponse.json(
        { error: "Project not linked to a Git repository. Please connect the repo on Vercel first." },
        { status: 500 }
      );
    }

    // Create deployment
    const deployBody: Record<string, unknown> = {
      name: vercelProjectId,
      project: vercelProjectId,
      target: "preview",
      gitSource: {
        type: "github",
        repoId: Number(repoId),
        ref: repoBranch,
      },
      projectSettings: {
        framework: "nextjs",
        env: Object.entries(envVars).map(([key, value]) => ({
          key,
          value,
          target: ["preview", "production"],
          type: "plain",
        })),
      },
    };

    if (vercelTeamId) {
      deployBody.teamId = vercelTeamId;
    }

    const deployUrl = vercelTeamId
      ? `https://api.vercel.com/v13/deployments?teamId=${vercelTeamId}`
      : `https://api.vercel.com/v13/deployments`;

    const deployRes = await fetch(deployUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(deployBody),
    });

    if (!deployRes.ok) {
      const errorData = await deployRes.text();
      console.error("Vercel deploy error:", errorData);
      return NextResponse.json(
        { error: `Vercel deployment failed: ${deployRes.status}`, details: errorData },
        { status: 500 }
      );
    }

    const deployment = await deployRes.json();

    return NextResponse.json({
      status: "deploying",
      message: `Creating demo site for ${business_name}`,
      slug,
      deploymentId: deployment.id,
      deploymentUrl: deployment.url,
      previewUrl: `https://${deployment.url}`,
      alias: `${slug}-${deployment.id.slice(0, 8)}.vercel.app`,
      envVars,
    });
  } catch (error) {
    console.error("Deploy error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}

// GET /api/deploy — health check and usage instructions
export async function GET() {
  const isConfigured = !!(process.env.VERCEL_API_TOKEN && process.env.VERCEL_PROJECT_ID);

  return NextResponse.json({
    service: "Prysmn Demo Engine",
    version: "1.0.0",
    status: isConfigured ? "ready" : "not configured",
    vercelProjectConfigured: isConfigured,
    usage: {
      method: "POST",
      url: "/api/deploy",
      contentType: "application/json",
      requiredFields: ["business_name", "phone", "suburb", "state"],
      optionalFields: [
        "template",
        "services",
        "brand_color",
        "tagline",
        "email",
        "year_founded",
        "owner_name",
        "license_number",
        "description",
        "about_text",
        "service_areas",
        "testimonials",
      ],
      example: {
        business_name: "Luke Ginger Plumbing",
        phone: "0402 613 075",
        suburb: "Melton",
        state: "VIC",
        services: [
          { name: "Emergency Plumbing", description: "24/7 emergency callouts" },
          { name: "Hot Water Systems", description: "Installation and repair" },
        ],
        template: "sapruin",
        brand_color: "#fca12c",
        service_areas: ["Melton", "Bacchus Marsh", "Caroline Springs"],
      },
    },
  });
}
