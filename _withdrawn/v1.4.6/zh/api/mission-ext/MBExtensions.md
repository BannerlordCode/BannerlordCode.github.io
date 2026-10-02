---
title: "MBExtensions"
description: "MBExtensions：TaleWorlds.MountAndBlade 的 public 类；公开成员 17 个（方法 17、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MBExtensions.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBExtensions`
**File:** `TaleWorlds.MountAndBlade/MBExtensions.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MBExtensions 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBExtensions.cs。它是一个 public 类，继承链为 MBExtensions。public/protected 成员共 17 个：17 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBExtensions 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MBExtensions。成员构成以方法为主（方法 17/17，属性 0/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBExtensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetGlobalOrganicDirection` | `public static Vec2 GetGlobalOrganicDirection(this ColumnFormation columnFormation)` | 方法 |
| `GetGlobalHeadDirection` | `public static Vec2 GetGlobalHeadDirection(this ColumnFormation columnFormation)` | 方法 |
| `IEnumerable` | `public static IEnumerable<T>FindAllWithType<T>(this IEnumerable<GameEntity>entities) where T : ScriptComponentBehavior` | 方法 |
| `IEnumerable` | `public static IEnumerable<T>FindAllWithType<T>(this IEnumerable<MissionObject>missionObjects) where T : MissionObject` | 方法 |
| `List` | `public static List<GameEntity>FindAllWithCompatibleType(this IEnumerable<GameEntity>sceneProps, params Type[]types)` | 方法 |
| `List` | `public static List<MissionObject>FindAllWithCompatibleType(this IEnumerable<MissionObject>missionObjects, params Type[]types)` | 方法 |
| `MBList` | `public static MBList<T>CollectScriptComponentsIncludingChildrenRecursive<T>(this GameEntity entity) where T : ScriptComponentBehavior` | 方法 |
| `MBList` | `public static MBList<T>CollectScriptComponentsIncludingChildrenRecursive<T>(this WeakGameEntity entity) where T : ScriptComponentBehavior` | 方法 |
| `List` | `public static List<T>CollectScriptComponentsWithTagIncludingChildrenRecursive<T>(this GameEntity entity, string tag) where T : ScriptComponentBehavior` | 方法 |
| `List` | `public static List<T>CollectScriptComponentsWithTagIncludingChildrenRecursive<T>(this WeakGameEntity entity, string tag) where T : ScriptComponentBehavior` | 方法 |
| `List` | `public static List<GameEntity>CollectChildrenEntitiesWithTag(this GameEntity entity, string tag)` | 方法 |
| `List` | `public static List<WeakGameEntity>CollectChildrenEntitiesWithTag(this WeakGameEntity entity, string tag)` | 方法 |
| `GetFirstChildEntityWithName` | `public static WeakGameEntity GetFirstChildEntityWithName(this WeakGameEntity entity, string name)` | 方法 |
| `GetFirstScriptInFamilyDescending` | `public static T GetFirstScriptInFamilyDescending<T>(this GameEntity entity) where T : ScriptComponentBehavior` | 方法 |
| `GetFirstScriptInFamilyDescending` | `public static T GetFirstScriptInFamilyDescending<T>(this WeakGameEntity entity) where T : ScriptComponentBehavior` | 方法 |
| `ElementAtOrValue` | `public static TSource ElementAtOrValue<TSource>(this IEnumerable<TSource>source, int index, TSource value)` | 方法 |
| `IsOpponentOf` | `public static bool IsOpponentOf(this BattleSideEnum s, BattleSideEnum side)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
