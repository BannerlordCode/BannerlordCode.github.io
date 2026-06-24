---
title: v1.4.5 架构总览 / Architecture
description: Bannerlord v1.4.5 的模块结构与开发者入口
---

# v1.4.5 架构总览 / Architecture

## 心智模型

先把 `v1.4.5 架构总览` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

这一版的重点不是 API 名字变化，而是 **源码结构重新变得可见**：`SandBox`、`StoryMode`、`Multiplayer`、`CustomBattle` 等玩法模块重新以源码形式出现，因此阅读路径应当从“模块边界”进入，而不是只从 DLL 名字进入。

## 入口树 / Entry Tree

- [🏠 v1.4.5 首页](../)
- [🗂️ API 目录](../api/)
- [📋 完整类目录](../api/catalog)
- [🔀 跨版本类对比](../../../versions/)
- [⭐ v1.3.15 规范版 SDK 总览](../../../v1.3.15/zh/architecture/sdk-overview)

## 模块心智模型

- `Modules.SandBox` / `Modules.StoryMode`：战役和玩法逻辑的主要入口。
- `Modules.Multiplayer` / `Modules.CustomBattle`：模式特化逻辑，常带独立 View / VM / UI 层。
- `Modules.Native`：GauntletUI/View/Platform.PC 等桥接层。
- `bin/`：仍然是核心 `TaleWorlds.*` 程序集来源，但应与源码模块对照阅读。

## 建议阅读顺序

1. 先看本页和 [v1.4.5 首页](../) 建立模块边界。
2. 进入 [API 目录](../api/) 找到当前子系统。
3. 通过类页 breadcrumb 返回 area / api / version 入口。
4. 若要评估迁移成本，再看 [跨版本类对比](../../../versions/)。
