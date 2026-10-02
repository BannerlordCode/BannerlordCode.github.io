---
title: "LegacySaveContext"
description: "LegacySaveContext：TaleWorlds.SaveSystem 的 public 类，继承 ISaveContext；公开成员 14 个（方法 7、属性 5、字段 0）。源文件 TaleWorlds.SaveSystem/Save/LegacySaveContext.cs。"
---
# LegacySaveContext

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class LegacySaveContext : ISaveContext`
**File:** `TaleWorlds.SaveSystem/Save/LegacySaveContext.cs`

## 概述

LegacySaveContext 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Save/LegacySaveContext.cs。它是一个 public 类，实现/继承 ISaveContext，继承链为 LegacySaveContext → ISaveContext。public/protected 成员共 14 个：7 方法、5 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LegacySaveContext 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.SaveSystem.Save），继承链 LegacySaveContext → ISaveContext。成员构成以方法为主（方法 7/14，属性 5/14），对外主要以操作入口暴露。继承链上的 ISaveContext 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Save/LegacySaveContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RootObject` | `public object RootObject` | 属性 |
| `SaveData` | `public GameData SaveData` | 属性 |
| `DefinitionContext` | `public DefinitionContext DefinitionContext` | 属性 |
| `GetStatistics` | `public static LegacySaveContext.SaveStatistics GetStatistics()` | 方法 |
| `EnableSaveStatistics` | `public static bool EnableSaveStatistics` | 属性 |
| `LegacySaveContext` | `public LegacySaveContext(DefinitionContext definitionContext)` | 构造函数 |
| `AddStrings` | `public void AddStrings(List<string>texts)` | 方法 |
| `AddOrGetStringId` | `public int AddOrGetStringId(string text)` | 方法 |
| `GetObjectId` | `public int GetObjectId(object target)` | 方法 |
| `GetContainerId` | `public int GetContainerId(object target)` | 方法 |
| `GetStringId` | `public int GetStringId(string target)` | 方法 |
| `Save` | `public bool Save(object target, MetaData metaData, out string errorMessage)` | 方法 |
| `SaveStatistics` | `public struct SaveStatistics` | 属性 |
| `SaveStatistics` | `public struct SaveStatistics` | 嵌套类型 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 SaveContext](../SaveContext)
- [同命名空间 SaveError](../SaveError)
- [同命名空间 SaveOutput](../SaveOutput)
