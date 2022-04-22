/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const nextConfig = {
    reactStrictMode: true,
}

module.exports = nextConfig,
    withImages({
        exclude: path.resolve(__dirname, 'src/public/images'),
        webpack(config, options) {
            return config
        }
    });