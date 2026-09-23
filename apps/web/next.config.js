/** @type {import('next').NextConfig} */
const nextConfig = {
  // 将 build 输出路径指向根目录下的 dist-web
  distDir: '../../dist/web',
  // 开启 standalone 模式，自动提取 monorepo 中的最小依赖集
  output: 'standalone',
  // # 过滤掉 git 和开发依赖，但**保留 .next 构建产物**
  EXCLUDE: "/.git/, /.github/, /node_modules/, /src/, /cache"
  // emptyOutDir: true,
};

export default nextConfig;
