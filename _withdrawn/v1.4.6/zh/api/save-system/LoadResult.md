---
title: "LoadResult"
description: "LoadResult：TaleWorlds.SaveSystem.Load 的 public 类；公开成员 6 个（方法 2、属性 4、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Load/LoadResult.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LoadResult

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class LoadResult`
**File:** `TaleWorlds.SaveSystem/Load/LoadResult.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

LoadResult 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Load/LoadResult.cs。它是一个 public 类，继承链为 LoadResult。public/protected 成员共 6 个：2 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LoadResult 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Load`，继承链 LoadResult。成员构成以属性为主（属性 4/6，方法 2/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Load/LoadResult.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Root` | `public object Root` | 属性 |
| `Successful` | `public bool Successful` | 属性 |
| `LoadError[]Errors` | `public LoadError[]Errors` | 属性 |
| `MetaData` | `public MetaData MetaData` | 属性 |
| `InitializeObjects` | `public void InitializeObjects()` | 方法 |
| `AfterInitializeObjects` | `public void AfterInitializeObjects()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ContainerHeaderLoadData](../ContainerHeaderLoadData/)
- [同命名空间 LoadContext](../LoadContext/)
- [同命名空间 LoadError](../LoadError/)
- [同命名空间 ObjectHeaderLoadData](../ObjectHeaderLoadData/)
