/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
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
