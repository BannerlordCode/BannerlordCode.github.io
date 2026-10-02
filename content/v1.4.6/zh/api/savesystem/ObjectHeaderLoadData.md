---
title: "ObjectHeaderLoadData"
description: "ObjectHeaderLoadData：TaleWorlds.SaveSystem 的 public 类；公开成员 13 个（方法 4、属性 8、字段 0）。源文件 TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs。"
---
# ObjectHeaderLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ObjectHeaderLoadData`
**File:** `TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs`

## 概述

ObjectHeaderLoadData 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs。它是一个 public 类，继承链为 ObjectHeaderLoadData。public/protected 成员共 13 个：4 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ObjectHeaderLoadData 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.SaveSystem.Load），继承链 ObjectHeaderLoadData。成员构成以属性为主（属性 8/13，方法 4/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | 属性 |
| `LoadedObject` | `public object LoadedObject` | 属性 |
| `Target` | `public object Target` | 属性 |
| `PropertyCount` | `public short PropertyCount` | 属性 |
| `ChildStructCount` | `public short ChildStructCount` | 属性 |
| `TypeDefinition` | `public TypeDefinition TypeDefinition` | 属性 |
| `Context` | `public LoadContext Context` | 属性 |
| `SaveId` | `public SaveId SaveId` | 属性 |
| `ObjectHeaderLoadData` | `public ObjectHeaderLoadData(LoadContext context, int id)` | 构造函数 |
| `InitialieReaders` | `public void InitialieReaders(SaveEntryFolder saveEntryFolder)` | 方法 |
| `CreateObject` | `public void CreateObject()` | 方法 |
| `AdvancedResolveObject` | `public void AdvancedResolveObject(MetaData metaData, ObjectLoadData objectLoadData)` | 方法 |
| `ResolveObject` | `public void ResolveObject()` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ContainerHeaderLoadData](../ContainerHeaderLoadData)
- [同命名空间 LoadContext](../LoadContext)
- [同命名空间 LoadError](../LoadError)
- [同命名空间 LoadResult](../LoadResult)
