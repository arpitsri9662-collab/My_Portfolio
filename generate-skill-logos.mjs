import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outputDir = path.resolve(process.argv[2] || "src/assets/tech_logo");
await fs.mkdir(outputDir, { recursive: true });

/*
 * Real brand icons are fetched from Simple Icons where available.
 * Conceptual skills (RAG, CI/CD, system design, etc.) get clean initials badges.
 * This script creates PNGs matching the import names used in the portfolio.
 */
const icons = [
  ["viteLogo", "vite", "vite.png", "#646CFF", "V"],
  ["mongooseLogo", "mongoose", "mongoose.png", "#880000", "M"],
  ["redisLogo", "redis", "redis.png", "#DC382D", "R"],
  ["socketIoLogo", "socketdotio", "socketio.png", "#010101", "S"],
  ["jwtLogo", "jsonwebtokens", "jwt.png", "#000000", "JWT"],
  ["passportLogo", "passport", "passport.png", "#34E27A", "P"],

  ["langchainLogo", "langchain", "langchain.png", "#1C3C3C", "LC"],
  ["langgraphLogo", "langgraph", "langgraph.png", "#1C3C3C", "LG"],
  ["ragLogo", null, "rag.png", "#7C3AED", "RAG"],
  ["ollamaLogo", "ollama", "ollama.png", "#111111", "O"],
  ["puppeteerLogo", "puppeteer", "puppeteer.png", "#40B5A4", "P"],

  ["dockerLogo", "docker", "docker.png", "#2496ED", "D"],
  ["kubernetesLogo", "kubernetes", "kubernetes.png", "#326CE5", "K8s"],
  ["awsLogo", "amazonaws", "aws.png", "#232F3E", "AWS"],
  ["nginxLogo", "nginx", "nginx.png", "#009639", "N"],
  ["githubActionsLogo", "githubactions", "githubactions.png", "#2088FF", "GA"],
  ["cicdLogo", null, "cicd.png", "#2563EB", "CI/CD"],

  ["cloudinaryLogo", "cloudinary", "cloudinary.png", "#3448C5", "C"],
  ["renderLogo", "render", "render.png", "#46E3B7", "R"],
  ["razorpayLogo", "razorpay", "razorpay.png", "#0C2451", "RP"],
  ["bullmqLogo", null, "bullmq.png", "#D97706", "BQ"],
  ["nextAuthLogo", "authjs", "nextauth.png", "#111111", "Auth"],

  ["microservicesLogo", null, "microservices.png", "#0F766E", "MS"],
  ["systemDesignLogo", null, "systemdesign.png", "#7C3AED", "SD"],
  ["loadBalancingLogo", null, "loadbalancing.png", "#0369A1", "LB"],
  ["networkingLogo", null, "networking.png", "#475569", "NET"],
  ["sqlLogo", "mysql", "sql.png", "#4479A1", "SQL"],
];

function badgeSvg(label, color) {
  const safe = label.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const fontSize = safe.length > 4 ? 30 : safe.length > 2 ? 38 : 48;
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <rect x="12" y="12" width="232" height="232" rx="48" fill="${color}"/>
      <circle cx="128" cy="92" r="47" fill="#ffffff" fill-opacity=".13"/>
      <text x="128" y="153" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
        font-weight="700" font-size="${fontSize}" fill="#ffffff">${safe}</text>
    </svg>`);
}

let generated = 0;
for (const [variable, slug, filename, color, label] of icons) {
  const destination = path.join(outputDir, filename);
  let pngBuffer;

  if (slug) {
    try {
      const url = `https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${slug}.svg`;
      const response = await fetch(url, { signal: AbortSignal.timeout(12000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const svg = Buffer.from(await response.arrayBuffer());
      pngBuffer = await sharp(svg).resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
      console.log(`Downloaded brand icon: ${filename}`);
    } catch (error) {
      console.warn(`Could not fetch ${slug} for ${filename}; using initials badge (${error.message}).`);
    }
  }

  if (!pngBuffer) {
    pngBuffer = await sharp(badgeSvg(label, color)).png().toBuffer();
    console.log(`Created fallback icon: ${filename}`);
  }

  await fs.writeFile(destination, pngBuffer);
  generated++;
}

console.log(`\nDone: ${generated} PNG files saved to ${outputDir}`);
console.log("If a brand icon was unavailable, the script created a matching initials badge instead.");
