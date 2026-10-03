---
title: Bannerlord v1.4.6
description: Bannerlord v1.4.6 文档入口 — 当前覆盖范围与阅读顺序 / Documentation entry point for v1.4.6
---

# Bannerlord v1.4.6

> **这一版的内容全部是手写、正在生长。** v1.4.6 的源码结构特殊（顶层目录名就是程序集名），模块地图和 SDK 分层两篇散文已经写完；类页目前只有 **40 张中文手写页**，`mission-ext/`、`viewmodel/`、`system/`、`modulemanager/`、`sandbox/`、`storymode/`、`custombattle/`、`network/`、`achievementsystem/`、`activitysystem/` 这些桶还没有页。
>
> 某个类型暂时查不到时，先读 [模块地图](zh/architecture/module-map/) 确认它归哪个桶，再回 `bannerlord-1.4.6/` 源码核实；需要 1.4.5 上的同一类型时看 [逐类 API 对比](../versions/)。
>
> Everything under v1.4.6 is hand-written and still growing. Class pages exist only in Chinese so far; the English tree has the full architecture prose.

## 选择语言 / Pick a language

| | 架构 prose | 类页 class pages |
| --- | --- | --- |
| [中文 / Chinese](zh/) | 全 3 篇 | 40 张 |
| [English](en/) | 全 3 篇 | 暂未手写 / none yet |

## 本版本怎么用

**定位：1.4 系列的中间增量版，架构散文写完了、类页刚开始。**

- **modder 的第一步**：进 [中文落地页](zh/) → [SDK 分层](zh/architecture/sdk-overview/) → [模块地图](zh/architecture/module-map/) → [API 参考](zh/api/)。
- **这一版特有的坑**（实测，非推测）：
  - **类页少。** 中文侧 83 篇、英文侧 3 篇。`mission-ext/`、`viewmodel/`、`system/`、
    `modulemanager/`、`sandbox/`、`storymode/`、`custombattle/`、`network/`、
    `achievementsystem/`、`activitysystem/` 这些桶还没有页。查不到不等于不存在 ——
    先去 [模块地图](zh/architecture/module-map/) 确认它归哪个桶，再回 `bannerlord-1.4.6/` 源码核实。
  - **英文树没有任何桶目录**，只有 `api/_index.md`。要英文内容先去中文树。
  - **它的页面自己就写着「要一个能用的 v1.4.x 文档 → v1.4.5」**（见上方「现在该读哪一版」）。
    也就是说这一版自己也承认覆盖不如 1.4.5 —— 别在它身上耗太久。
  - **顶层目录名就是程序集名**，所以它的模块地图比别的版本好读，但也因此与其它版本的
    桶划分对不上。跨版本查差异走 [跨版本类对比](../versions/) 或本版的 [版本差异](zh/architecture/version-delta/)。

## 从哪里开始读 / Where to start

- 中文：[版本落地页](zh/) → [SDK 分层](zh/architecture/sdk-overview/) → [模块地图](zh/architecture/module-map/) → [API 参考](zh/api/)
- English: [version landing page](en/) → [SDK layering](en/architecture/sdk-overview/) → [module map](en/architecture/module-map/) → [API reference status](en/api/)

## 现在该读哪一版 / Which version to read

| 你想做什么 | 建议 |
| --- | --- |
| 要一个能用的 v1.4.x 文档 | [v1.4.5](../v1.4.5/) — 覆盖最完整的一版 |
| 要最新稳定版 | [v1.3.15](../v1.3.15/) |
| 要从旧版迁上来 | [跨版本类对比](../versions/) |
| 只想知道 1.4.5 → 1.4.6 变了什么 | [版本差异](zh/architecture/version-delta/) |

## 上级导航 / Up

- [站点首页 / Site home](../)
- ↔ [中文文档](./zh/) · [English documentation](./en/)
- ↘ [架构](./zh/architecture/) · [API 参考](./zh/api/) · [跨版本类对比](../versions/)
- ↘ [按任务进入](../versions/) · [v1.5.3](../v1.5.3/) · [v1.4.5](../v1.4.5/)
- ⚠ 这一版没有 `guide/` 域 —— 教程散文只在 v1.3.15 与 v1.4.5 两棵树上。