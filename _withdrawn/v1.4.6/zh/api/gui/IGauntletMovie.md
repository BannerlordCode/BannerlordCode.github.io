---
title: "IGauntletMovie"
description: "IGauntletMovie：TaleWorlds.GauntletUI.Data 的 public 接口；公开成员 7 个（方法 3、属性 4、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI.Data/IGauntletMovie.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IGauntletMovie

**Namespace:** `TaleWorlds.GauntletUI.Data`
**Module:** `TaleWorlds.GauntletUI.Data`
**Type:** `public interface IGauntletMovie`
**File:** `TaleWorlds.GauntletUI.Data/IGauntletMovie.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

IGauntletMovie 位于 TaleWorlds.GauntletUI.Data 模块，源文件 TaleWorlds.GauntletUI.Data/IGauntletMovie.cs。它是一个 public 接口，继承链为 IGauntletMovie。public/protected 成员共 7 个：3 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IGauntletMovie 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.Data`，继承链 IGauntletMovie。成员构成以属性为主（属性 4/7，方法 3/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.Data/IGauntletMovie.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RootWidget` | `Widget RootWidget` | 属性 |
| `MovieName` | `string MovieName` | 属性 |
| `IsLoaded` | `bool IsLoaded` | 属性 |
| `IsReleased` | `bool IsReleased` | 属性 |
| `Update` | `void Update();` | 方法 |
| `Release` | `void Release();` | 方法 |
| `RefreshBindingWithChildren` | `void RefreshBindingWithChildren();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 GauntletMovie](../GauntletMovie/)
- [同命名空间 GauntletView](../GauntletView/)
- [同命名空间 GeneratedGauntletMovie](../GeneratedGauntletMovie/)
- [同命名空间 GeneratedWidgetData](../GeneratedWidgetData/)
