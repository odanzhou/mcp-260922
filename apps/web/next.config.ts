import type { NextConfig } from 'next';

/*
 * @type {import('next').NextConfig}
 * 
 */
const nextConfig: NextConfig = {
  // 开启 standalone 模式，自动提取 monorepo 中的最小依赖集
  output: 'standalone',
  // emptyOutDir: true,
};

export default nextConfig;
