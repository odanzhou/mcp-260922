/** @type {import('next').NextConfig} */
const nextConfig = {
  // 将 build 输出路径指向根目录下的 dist-web
  distDir: 'dist',
  // 开启 standalone 模式，自动提取 monorepo 中的最小依赖集
  output: 'standalone',
  // emptyOutDir: true,
};

export default nextConfig;
