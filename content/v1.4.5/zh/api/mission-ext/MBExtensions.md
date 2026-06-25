---
title: "MBExtensions"
description: "MBExtensions 的自动生成类参考。"
---
# MBExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBExtensions.cs`

## 概述

`MBExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetGlobalOrganicDirection
`public static Vec2 GetGlobalOrganicDirection(this ColumnFormation columnFormation)`

**用途 / Purpose:** 读取并返回当前对象中 global organic direction 的结果。

```csharp
// 静态调用，不需要实例
MBExtensions.GetGlobalOrganicDirection(columnFormation);
```

### GetGlobalHeadDirection
`public static Vec2 GetGlobalHeadDirection(this ColumnFormation columnFormation)`

**用途 / Purpose:** 读取并返回当前对象中 global head direction 的结果。

```csharp
// 静态调用，不需要实例
MBExtensions.GetGlobalHeadDirection(columnFormation);
```

### FindAllWithCompatibleType
`public static List<GameEntity> FindAllWithCompatibleType(this IEnumerable<GameEntity> sceneProps, params Type types)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的all with compatible type。

```csharp
// 静态调用，不需要实例
MBExtensions.FindAllWithCompatibleType(sceneProps, types);
```

### FindAllWithCompatibleType
`public static List<MissionObject> FindAllWithCompatibleType(this IEnumerable<MissionObject> missionObjects, params Type types)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的all with compatible type。

```csharp
// 静态调用，不需要实例
MBExtensions.FindAllWithCompatibleType(missionObjects, types);
```

### CollectChildrenEntitiesWithTag
`public static List<GameEntity> CollectChildrenEntitiesWithTag(this GameEntity entity, string tag)`

**用途 / Purpose:** 调用 CollectChildrenEntitiesWithTag 对应的操作。

```csharp
// 静态调用，不需要实例
MBExtensions.CollectChildrenEntitiesWithTag(entity, "example");
```

### CollectChildrenEntitiesWithTag
`public static List<WeakGameEntity> CollectChildrenEntitiesWithTag(this WeakGameEntity entity, string tag)`

**用途 / Purpose:** 调用 CollectChildrenEntitiesWithTag 对应的操作。

```csharp
// 静态调用，不需要实例
MBExtensions.CollectChildrenEntitiesWithTag(entity, "example");
```

### GetFirstChildEntityWithName
`public static WeakGameEntity GetFirstChildEntityWithName(this WeakGameEntity entity, string name)`

**用途 / Purpose:** 读取并返回当前对象中 first child entity with name 的结果。

```csharp
// 静态调用，不需要实例
MBExtensions.GetFirstChildEntityWithName(entity, "example");
```

### IsOpponentOf
`public static bool IsOpponentOf(this BattleSideEnum s, BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 opponent of 状态或条件。

```csharp
// 静态调用，不需要实例
MBExtensions.IsOpponentOf(s, side);
```

## 使用示例

```csharp
MBExtensions.GetGlobalOrganicDirection(columnFormation);
```

## 参见

- [本区域目录](../)