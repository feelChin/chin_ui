# 📦 chin-ui

> 常见原生 js ui 库
> 如消息提示弹窗按钮等

---

## ✨ 特性

- ✅ 原生 js
- 💡 零依赖 / 体积小 / 易上手
- 🚀 快速上手，适用于任意 Web 项目

---

## 📦 安装

使用 NPM：

```bash
npm install chin-ui

import { Button } from 'chin-ui'
import 'chin-ui/index.css'

const btn = new Button({
  el: '.App',
  text: '按钮'
})

btn.loading = true  //展示loading加载状态
btn.loading = false  //关闭loading

```
