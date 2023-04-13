/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {

    USER: "https://dummyjson.com/users",
    POST: "https://dummyjson.com/posts",
    PRODUCT: "https://dummyjson.com/products"

  },
  images: {
    domains: ["i.dummyjson.com", "robohash.org"]

  },
}

module.exports = nextConfig
