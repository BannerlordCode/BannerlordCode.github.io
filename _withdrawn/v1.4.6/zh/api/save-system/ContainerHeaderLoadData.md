---
title: "ContainerHeaderLoadData"
description: "ContainerHeaderLoadData：TaleWorlds.SaveSystem.Load 的 public 类；公开成员 11 个（方法 3、属性 7、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ContainerHeaderLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ContainerHeaderLoadData`
**File:** `TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

ContainerHeaderLoadData 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs。它是一个 public 类，继承链为 ContainerHeaderLoadData。public/protected 成员共 11 个：3 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ContainerHeaderLoadData 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Load`，继承链 ContainerHeaderLoadData。成员构成以属性为主（属性 7/11，方法 3/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | 属性 |
| `Target` | `public object Target` | 属性 |
| `Context` | `public LoadContext Context` | 属性 |
| `TypeDefinition` | `public ContainerDefinition TypeDefinition` | 属性 |
| `SaveId` | `public SaveId SaveId` | 属性 |
| `ElementCount` | `public int ElementCount` | 属性 |
| `ContainerType` | `public ContainerType ContainerType` | 属性 |
| `ContainerHeaderLoadData` | `public ContainerHeaderLoadData(LoadContext context, int id)` | 构造函数 |
| `GetObjectTypeDefinition` | `public bool GetObjectTypeDefinition()` | 方法 |
| `CreateObject` | `public void CreateObject()` | 方法 |
| `InitialieReaders` | `public void InitialieReaders(SaveEntryFolder saveEntryFolder)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 LoadContext](../LoadContext/)
- [同命名空间 LoadError](../LoadError/)
- [同命名空间 LoadResult](../LoadResult/)
- [同命名空间 ObjectHeaderLoadData](../ObjectHeaderLoadData/)
