# mcp-260922
学习mcp开发

### 整体架构
turborepo、pnpm、vite、typescript

### 生成配置


### pnpm catalog
做统一的版本管理

#### 安装到根目录还是项目目录
pnpm add -w -D turbo husky prettier
// -w 是小写不是大写

### 遇到的一些问题
#### pnpm i 报错
macbook m1 pro 27 版本
Cannot run @pnpm/exe@11.25.0 on this host: it ships no native binary for darwin-x64.
[Corepack 新一代 Node.js 包管理器](https://zhuanlan.zhihu.com/p/10844568867)
查看node的架构 node -p "process.arch" // arm64 或 x64（我电脑应该返回 arm64）
##### 处理

1. 先删除老版本

2. 指定 --arch arm64 安装最新的 LTS 版本的 Node.js
fnm install --arch arm64 lts/latest

3. 设置为默认版本
fnm use lts/latest
fnm default lts/latest

4. 重新安装pnpm
npm install -g pnpm@latest

### 把一些软件下载到公共区域，而不是某个用户下
如 nvm
sudo mkdir -p /usr/local/nvm
sudo NVM_DIR=/usr/local/nvm bash -c "$(curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh)"


### TODO

#### 企业级加速：配置远程缓存（Remote Caching）
当在团队协作或 CI/CD 环境中使用时，开启远程缓存可以实现“同事/CI 构建过一次，其他人拉取代码后 0 秒完成构建”。

##### 方案 A：使用 Vercel 免费远程缓存
  Bash
  登录并关联 Vercel 账号
##### npx turbo login
  npx turbo link
  方案 B：自建/私有化远程缓存（如 S3 / Redis / Docker）
  如果你不想依赖 Vercel，可以配合开源的第三方 Remote Cache Server（如 duo-labs/turborepo-remote-cache 或 duckling）：
  ```
    # 通过环境变量指定私有 Cache 地址
  DUO_TURBO_TOKEN="your-token" turbo run build --api="http://your-cache-server.com" --team="your-team"
  ```