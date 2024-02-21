/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'placehold.it',
            port: '',
            pathname: '/300x300/999/CCC',
          },
        ],
    },
};

export default nextConfig;
