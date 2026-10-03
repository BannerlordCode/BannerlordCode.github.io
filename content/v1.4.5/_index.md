---
title: Bannerlord v1.4.5
description: Bannerlord v1.4.5 modding docs landing
---
# Bannerlord v1.4.5

## Mental Model

Treat `Bannerlord v1.4.5` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

> **源码已就绪 / Source now available**
> v1.4.5 反编译源码已整理在 `bannerlord-1.4.5/Bannerlord.Source/`（玩法模块 2361 cs / 2523 类型，核心 DLL 在 `bin/`）。
> Decompiled v1.4.5 source is organized in `bannerlord-1.4.5/Bannerlord.Source/` (gameplay modules: 2361 cs / 2523 types; core DLLs in `bin/`).

## 选择语言 / Select Language

- [🇨🇳 中文](./zh/)
- [🇬🇧 English](./en/)

## 本版本怎么用

**定位：站内 API 树最大、对标最全的一版。**
zh 树 9 384 个类页、en 树 7 129 个，是六版里唯一有成规模 API 树的。
要「查得到某个类的页面」，先来这一版。

**modder 的第一步**：
① [模组工作流](./zh/guide/mod-workflow) →
② [模块系统](./zh/architecture/module-system) →
③ 进 [API 参考](./zh/api/) 找你要碰的类型。

**这一版特有的坑**（实测，非推测）：

- **它是反编译产物。** `bannerlord-1.4.5/Bannerlord.Source/` 是转储，
  个别成员的修饰符/签名可能与原始源码略有出入。签名表可参考，行为描述要回源码核对。
- **同一个类型名会出现在两个目录里。** 这一版的文档树里重复了 **2 199 次**，
  513 个命名空间里有 171 个被拆散到多个目录。这就是「点进去发现是别的地方、
  再也回不来」的结构性原因。v1.4.7 已把这个改掉。
- **桶名集合与其它版本都不同**（zh 侧 20 个桶，含 `boardgames`、`perks`、`view` 等
  其它版本没有的）。按别的版本的路径直觉找会扑空。
- **`view` 桶下面还有一层子桶**（`MissionViews` / `Screens` / `Scripts` / `Tableaus`），
  各有自己的索引页。子桶的子页写 `./Foo`，不写桶名。
- **少数英文桶索引页尚未撰写**，英文侧的类页数量明显少于中文侧。
  各桶页数以该桶自己的索引页为准。

## 导航

- ↑ [站点首页](../) —— 全部版本与「按我要做什么进入」
- ↔ [中文文档](./zh/) · [English documentation](./en/)
- ↘ [指南](./zh/guide/) · [API 参考](./zh/api/) · [架构](./zh/architecture/)
- ↘ [跨版本类对比](../versions/)（本页对比工具的覆盖上界就是这一版）


## 快速跳转 / Quick Links

- [v1.3.15 文档（推荐）/ v1.3.15 docs (recommended)](../v1.3.15/)
- [SDK 总览 / SDK Overview](../v1.3.15/zh/architecture/sdk-overview)
- [版本差异 / Version Delta](../v1.3.15/zh/architecture/version-delta)

## Usage Example

```csharp
// Use the navigation below to explore guides, API reference, and architecture.
```

<!-- BEGIN SECTION INDEX -->

## 语言选择 / Select Language

- [English Documentation](./en/)
- [中文文档 / Chinese Documentation](./zh/)

<!-- END SECTION INDEX -->
