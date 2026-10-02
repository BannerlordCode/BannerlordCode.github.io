---
title: "SaveContext"
description: "SaveContext：TaleWorlds.SaveSystem.Save 的 public 类，继承 ISaveContext；公开成员 14 个（方法 7、属性 5、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Save/SaveContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveContext

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveContext : ISaveContext`
**File:** `TaleWorlds.SaveSystem/Save/SaveContext.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

SaveContext 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Save/SaveContext.cs。它是一个 public 类，实现/继承 ISaveContext，继承链为 SaveContext → ISaveContext。public/protected 成员共 14 个：7 方法、5 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveContext 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Save`，继承链 SaveContext → ISaveContext。成员构成以方法为主（方法 7/14，属性 5/14），对外主要以操作入口暴露。继承链上的 ISaveContext 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Save/SaveContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RootObject` | `public object RootObject` | 属性 |
| `SaveData` | `public GameData SaveData` | 属性 |
| `DefinitionContext` | `public DefinitionContext DefinitionContext` | 属性 |
| `GetStatistics` | `public static SaveContext.SaveStatistics GetStatistics()` | 方法 |
| `EnableSaveStatistics` | `public static bool EnableSaveStatistics` | 属性 |
| `SaveContext` | `public SaveContext(DefinitionContext definitionContext)` | 构造函数 |
| `AddOrGetStringId` | `public int AddOrGetStringId(string text)` | 方法 |
| `GetObjectId` | `public int GetObjectId(object target)` | 方法 |
| `GetContainerId` | `public int GetContainerId(object target)` | 方法 |
| `GetStringId` | `public int GetStringId(string target)` | 方法 |
| `GetStringSizeInBytes` | `public static int GetStringSizeInBytes(string text)` | 方法 |
| `Save` | `public bool Save(object target, MetaData metaData, out string errorMessage)` | 方法 |
| `SaveStatistics` | `public struct SaveStatistics` | 属性 |
| `SaveStatistics` | `public struct SaveStatistics` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 LegacySaveContext](../LegacySaveContext/)
- [同命名空间 SaveError](../SaveError/)
- [同命名空间 SaveOutput](../SaveOutput/)
