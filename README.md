# resume-web

本项目是一个使用 Vite + React 搭建的 Web 端 简历模板。

简历模板样式参考了：[roife/resume](https://github.com/roife/resume)

相关开发踩坑记录可见博文： [手搓一个简历模板吧！React 实践踩坑记录](https://blog.longlin.tech/posts/resume-develop/)

## 🌟 功能特性

- [x] 基于 React + Tailwind CSS 开发
- [x] 亮色 / 暗色模式
- [x] 支持中文 / English
- [x] 响应式设计
- [x] 支持容器化部署
- [x] 使用 Toml 进行配置导入

## 🌲 项目结构

```sh
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ItemList.jsx
│   │   ├── page.jsx
│   │   ├── buttons  # 存放 Button 组件文件夹
│   │   ├── contexts # 存放 Context
│   │   └── utils
│   ├── config              # Config 配置目录
│   │   ├── config.toml     # 默认中文配置文件
│   │   └── config_en.toml  # 英文配置文件
│   ├── css
│   │   └── output.css
│   ├── index.css
│   └── main.jsx
```

## 🔨 使用方法

1. 克隆本仓库，在 `/src/config` 里的对应文件修改相关配置
2. `docker-compose up` 直接启动
3. 启动成功后可以在 `localhost:5143` 查看网页

## ✏️ TODO

- [x] 修改匹配移动端样式
- [x] 增添 docker-compose
- [x] 修改 skills 模块
- [x] 修改 head-bar 样式
- [x] Loading 动画效果
- [x] 添加暗色主题
- [x] 中英文切换
- [x] 页脚 footer 设计
- [x] PDF Download 按钮
- [ ] 增添 TOC 页面
- [x] 英文界面响应式设计
- [x] 移动端按钮功能
- [ ] 中英文 README
