/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode: false,
    images: {
        remotePatterns:
            [
                {
                    protocol: "https",
                    hostname: "res.cloudinary.com",
                },
                {
                    protocol: "http",
                    hostname: "res.cloudinary.com",
                }
            ],
    },
};

export default nextConfig;
