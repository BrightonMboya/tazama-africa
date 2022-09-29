const { config } = require('process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com'
    ],
  },
  
  // webpack: (config, {isServer}) => {
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty'
  //     }
  //   }
  //   return config
  // }
}

module.exports = nextConfig
