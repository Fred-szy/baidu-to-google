# Bing to Google

[![GitHub release](https://img.shields.io/github/v/release/Fred-szy/bing-to-google)](https://github.com/Fred-szy/bing-to-google/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **声明：本项目禁止在中国大陆地区使用、传播或转发。任何在中国大陆境内的使用行为均与本项目无关，作者不承担任何相关责任。**

一个 Tampermonkey 油猴脚本，在 Bing 搜索时自动检测 Google 是否可访问，可访问则自动跳转，不可访问则静默留在 Bing。

---

## 工作原理

每次在 Bing 发起搜索时，脚本会在后台向 Google 发送一个轻量探测请求（图片探针，绕过 CORS 限制）：

- **Google 可达**：自动将当前搜索词跳转到 Google，搜索词原样保留
- **Google 不可达**：1.5 秒超时后静默放弃，停留在 Bing，不影响正常使用
- **无任何 UI**：无弹窗、无按钮、无通知，完全后台运行

```
Bing 搜索 → 探测 Google（1.5s 超时）
              ├─ 可达 → 跳转 Google
              └─ 超时/失败 → 留在 Bing
```

---

## 安装

**前置条件：** 已安装 Chrome 浏览器，并安装 [Tampermonkey](https://www.tampermonkey.net/) 扩展。

**方法一：一键安装（推荐）**

点击此链接直接安装：[baidu-to-google.user.js](https://raw.githubusercontent.com/Fred-szy/bing-to-google/main/baidu-to-google.user.js)

Tampermonkey 会自动识别 `.user.js` 文件并弹出安装确认页面。

**方法二：手动安装**

1. 打开 Tampermonkey → 管理面板 → 新建脚本
2. 将 `baidu-to-google.user.js` 的内容粘贴进去
3. `Ctrl+S` 保存

**安装完成后：**

将 Chrome 默认搜索引擎设置为 **Bing**（设置 → 搜索引擎 → Microsoft Bing）。

---

## 使用

安装后无需任何操作，正常在 Chrome 地址栏搜索即可。

| 场景 | 行为 |
|------|------|
| Google 可访问 | 自动跳转到 Google 搜索结果 |
| Google 不可访问 | 1.5 秒后留在 Bing 搜索结果 |
| 非搜索页面 | 脚本不触发 |

---

## 常见问题

**Q：为什么不直接把默认搜索引擎设成 Google？**
A：Google 不可访问时地址栏搜索会直接报错或超时，体验很差。本脚本以 Bing 为保底，有网时自动升级到 Google。

**Q：探测请求会暴露我的搜索词吗？**
A：不会。探测只请求 `google.com/favicon.ico`，与搜索词无关。搜索词仅在确认跳转时才发送给 Google。

**Q：1.5 秒太长/太短怎么办？**
A：修改脚本第 8 行的 `TIMEOUT_MS` 值即可，单位毫秒。

---

## License

MIT © Fred-szy

本项目仅供学习与个人使用。**禁止在中国大陆地区使用、传播或转发。**
