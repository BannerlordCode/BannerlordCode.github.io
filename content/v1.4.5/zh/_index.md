---
title: Bannerlord v1.4.5 中文文档 / Bannerlord v1.4.5 Chinese Documentation
description: Bannerlord v1.4.5 模块编辑中文文档入口 — 21 个 API 子系统桶、中文架构与指南散文，以及这一版的反编译来源说明。
---

# Bannerlord v1.4.5 / 骑砍2 v1.4.5（中文）

> **这一版的源码是反编译产物。** `bannerlord-1.4.5/Bannerlord.Source/` 下是转储，
> 个别成员的修饰符与签名可能与原始源码略有出入。**签名表可参考，行为描述请回源码核对。**
>
> 跨版本差异不要靠「两棵树并排读」，走 [跨版本类对比](../../versions/)。

## 心智模型

v1.4.5 是**文档覆盖最大**的一版：中文侧 9 384 个类页、21 个 API 子系统桶，
是六版里唯一有成规模 API 树的版本（其余五版加起来都没它多）。

它的代价是**目录结构不干净** —— 这一版里同一个类型名会出现在两个目录共 2 199 次，
513 个命名空间里有 171 个被拆散到多个目录。v1.4.7 已经把这个改掉了。
所以在这一版里，**「点进去发现是别的地方」是结构造成的，不是内容的问题**。

## 内容导航 / Navigation

- [指南 / Guide](./guide/) — 15 篇上手与子系统散文（上手流程、战役与任务系统、Gauntlet UI、常见模式、排错）
- [API 参考 / API Reference](./api/) — 21 个子系统桶，按命名空间划分
- [架构 / Architecture](./architecture/) — 模块地图、加载流程、存档原理、版本差异、编写契约
- [原生接口 / Native Reference](./native/) — P/Invoke 边界
- [Native 源码参考 / Native Source Reference](./native-1.3.15-src/) — `TaleWorlds.Native.dll` 导出函数与反编译索引
- [XML 参考 / XML Reference](./xml-reference/) — XML 配置字段

## 从哪里开始读 / Where to start

1. [模组工作流](./guide/mod-workflow) — 建工程、产物怎么出来
2. [模块系统](./architecture/module-system) — mod 是怎么被发现和装载的
3. [SDK 分层概览](./architecture/sdk-overview) — 五层依赖模型，先建立大局观
4. [API 参考](./api/) — 按桶找你要碰的类型
5. 要升级？先读 [版本差异](./architecture/version-delta/)

## 版本信息 / Version Info

- **游戏版本**: 1.4.5
- **文档规模**: 中文 9 384 篇类页 / 21 个桶 · 英文 7 129 篇类页 / 14 个桶
- **来源**: 反编译源码（`bannerlord-1.4.5/Bannerlord.Source/`，玩法模块 2 361 cs / 2 523 类型，核心 DLL 在 `bin/`）

> **中英两侧形状不同。** 中文侧有 `boardgames`、`custombattle`、`perks`、`sandbox`、
> `storymode`、`view` 这 6 个桶是英文侧没有的。页数以各桶自己的索引页为准。

## 常见入口 / Quick Links

| 类别 | 描述 |
| --- | --- |
| [Core 核心](./api/core/) | `MBSubModuleBase` · `Module` — 每个 mod 的入口 |
| [Campaign 战役](./api/campaign/) | 战役世界状态：英雄、家族、聚落、王国、部队 |
| [Campaign-Ext](./api/campaign-ext/) | 行为、组件接口、可替换的默认模型 —— mod 的主要扩展面 |
| [Mission 任务](./api/mission/) | `Mission` · `Agent` · `Formation` —— 单场战斗 |
| [Save System](./api/save-system/) | 存档读写与类型定义 |
| [GUI](./api/gui/) | 屏幕栈与控件树 |
| [Native 原生](./native/) | P/Invoke 接口 |
| [跨版本对比](../../versions/) | 逐类 API 差异（覆盖到 1.4.5 为止） |

## 按「我要做的事」进入

| 我要做的事 | 去 |
| --- | --- |
| 让 mod 被加载 | [让 mod 被加载](../../versions/task-mod-bootstrap) |
| 做一个战役动作 | [做一个新的战役动作](../../versions/task-campaign-action) |
| 处理一场战斗 | [处理一场战斗](../../versions/task-mission-action) |
| 替换默认算法 | [接一个 GameModel](../../versions/task-gamemodel) |
| 挂战役行为 | [加一个 CampaignBehavior](../../versions/task-campaign-behavior) |
| 让数据能存档 | [读写存档](../../versions/task-save) |
| 加一个界面 | [挂一个 UI 面板](../../versions/task-ui-screen) |
| 改 AI 决策 | [改 AI 决策](../../versions/task-ai) |

## 上级导航 / Up

- [v1.4.5 版本首页](../) — 六版关系、规模、选版建议
- [站点首页](../../) — 全部版本与「按我要做什么进入」
- [跨版本类对比](../../versions/)

<!-- BEGIN SECTION INDEX -->
> 共 6 个子页

## ↓ 内容导航

- [指南 / Getting Started Guide](./guide/) — 快速上手 Bannerlord 模块开发 / Quick start guide for Bannerlord modding
- [API 参考 / API Reference](./api/) — 21 个子系统桶的目录入口 / 21 subsystem bucket index pages
- [架构总览 / Architecture](./architecture/) — 模块地图、加载流程、存档原理、版本差异
- [原生接口 / Native Reference](./native/) — 与原生 C++ 引擎交互的接口文档 / P/Invoke interface docs
- [Native 源码参考 / Native Source Reference](./native-1.3.15-src/) — TaleWorlds.Native.dll 反编译源码参考
- [XML 参考 / XML Reference](./xml-reference/) — Bannerlord XML 配置文件完整参考 / XML configuration reference

<!-- END SECTION INDEX -->
