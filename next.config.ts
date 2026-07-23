import type { NextConfig } from "next";

const isGitHubPages = process.env.BUILD_TARGET === "github-pages";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const pagesBasePath = isGitHubPages && repositoryName ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath: pagesBasePath,
        assetPrefix: pagesBasePath || undefined,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
