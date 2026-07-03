# 视觉传达设计作品集网站

视觉传达设计应届毕业生个人品牌作品集网站。
技术栈：Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion。

## 快速开始

1. 安装依赖：`npm install`
2. 本地运行：`npm run dev`，打开 http://localhost:3000
3. 构建检查：`npm run build`

## 如何替换项目图片

图片放在 `public/images/projects/项目文件夹/` 下，路径在
`src/data/projects.ts` 的 `cover` 和 `gallery` 字段配置。
图片未放入时页面显示占位块，不会报错。

建议尺寸：封面 1600×1200（4:3）、大图 1920×1080（16:9）、细节图 1200×1200（1:1）。

## 如何修改个人信息

打开 `src/data/site.ts`，修改姓名、介绍、邮箱、电话、社交链接、微信二维码路径。

## 如何新增作品项目

1. 打开 `src/data/projects.ts`，复制一个项目对象
2. 修改 `slug`（将成为网址 `/work/你的slug`）及各内容字段
3. 在 `public/images/projects/` 下新建对应图片文件夹
4. `featured: true` 的项目会出现在首页精选区

## 如何替换简历 PDF

放入 `public/resume/`，文件名与 `src/data/resume.ts` 中 `downloads` 一致：

- resume-brand-marketing.pdf（品牌市场执行版）
- resume-packaging-visual.pdf（包装视觉设计版）
- resume-ad-project.pdf（广告项目执行版）
- portfolio.pdf（完整作品集）

## 部署到 Vercel

1. 代码推送到 GitHub
2. 在 https://vercel.com 用 GitHub 登录，Add New Project 选择该仓库
3. 保持默认设置，点击 Deploy
4. 之后每次 push 自动重新部署
