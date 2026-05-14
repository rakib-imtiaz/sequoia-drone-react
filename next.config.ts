import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactCompiler disabled: its Babel pass strips the styled-jsx transform from
  // the client bundle (server keeps it via SWC), causing scoped-className
  // hydration mismatches on every component that uses <style jsx>.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
