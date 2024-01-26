/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "images.unsplash.com"},
            { hostname: "lh3.googleusercontent.com"},
            { hostname: "storage.googleapis.com"}
        ]
    },
    experimental: {
        serverActions: true
    }
};

export default nextConfig;
