---
title: "ObjectLoadData"
description: "ObjectLoadData：TaleWorlds.SaveSystem 的 public 类；公开成员 18 个（方法 12、属性 4、字段 0）。源文件 TaleWorlds.SaveSystem/Load/ObjectLoadData.cs。"
---
# ObjectLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ObjectLoadData`
**File:** `TaleWorlds.SaveSystem/Load/ObjectLoadData.cs`

## 概述

ObjectLoadData 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Load/ObjectLoadData.cs。它是一个 public 类，继承链为 ObjectLoadData。public/protected 成员共 18 个：12 方法、4 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ObjectLoadData 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.SaveSystem.Load），继承链 ObjectLoadData。成员构成以方法为主（方法 12/18，属性 4/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Load/ObjectLoadData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | 属性 |
| `Target` | `public object Target` | 属性 |
| `Context` | `public LoadContext Context` | 属性 |
| `TypeDefinition` | `public TypeDefinition TypeDefinition` | 属性 |
| `GetDataBySaveId` | `public object GetDataBySaveId(int localSaveId)` | 方法 |
| `GetMemberValueBySaveId` | `public object GetMemberValueBySaveId(int localSaveId, int typeLevel)` | 方法 |
| `GetMemberValueBySaveId` | `public object GetMemberValueBySaveId(int localSaveId)` | 方法 |
| `GetFieldValueBySaveId` | `public object GetFieldValueBySaveId(int localSaveId)` | 方法 |
| `GetPropertyValueBySaveId` | `public object GetPropertyValueBySaveId(int localSaveId)` | 方法 |
| `HasMember` | `public bool HasMember(int localSaveId)` | 方法 |
| `HasMember` | `public bool HasMember(int localSaveId, int typeLevel)` | 方法 |
| `ObjectLoadData` | `public ObjectLoadData(LoadContext context, int id)` | 构造函数 |
| `ObjectLoadData` | `public ObjectLoadData(ObjectHeaderLoadData headerLoadData)` | 构造函数 |
| `InitializeReaders` | `public void InitializeReaders(SaveEntryFolder saveEntryFolder)` | 方法 |
| `CreateStruct` | `public void CreateStruct()` | 方法 |
| `FillCreatedObject` | `public void FillCreatedObject()` | 方法 |
| `Read` | `public void Read()` | 方法 |
| `FillObject` | `public void FillObject()` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ContainerHeaderLoadData](../ContainerHeaderLoadData)
- [同命名空间 LoadContext](../LoadContext)
- [同命名空间 LoadError](../LoadError)
- [同命名空间 LoadResult](../LoadResult)
