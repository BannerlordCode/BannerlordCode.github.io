---
title: "MBExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBExtensions`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBExtensions.cs`

## 概述

`MBExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetGlobalOrganicDirection
`public static Vec2 GetGlobalOrganicDirection(this ColumnFormation columnFormation)`

**用途 / Purpose:** 获取 `global organic direction` 的当前值。

### GetGlobalHeadDirection
`public static Vec2 GetGlobalHeadDirection(this ColumnFormation columnFormation)`

**用途 / Purpose:** 获取 `global head direction` 的当前值。

### FindAllWithCompatibleType
`public static List<GameEntity> FindAllWithCompatibleType(this IEnumerable<GameEntity> sceneProps, params Type types)`

**用途 / Purpose:** 处理 `find all with compatible type` 相关逻辑。

### FindAllWithCompatibleType
`public static List<MissionObject> FindAllWithCompatibleType(this IEnumerable<MissionObject> missionObjects, params Type types)`

**用途 / Purpose:** 处理 `find all with compatible type` 相关逻辑。

### CollectChildrenEntitiesWithTag
`public static List<GameEntity> CollectChildrenEntitiesWithTag(this GameEntity entity, string tag)`

**用途 / Purpose:** 处理 `collect children entities with tag` 相关逻辑。

### CollectChildrenEntitiesWithTag
`public static List<WeakGameEntity> CollectChildrenEntitiesWithTag(this WeakGameEntity entity, string tag)`

**用途 / Purpose:** 处理 `collect children entities with tag` 相关逻辑。

### GetFirstChildEntityWithName
`public static WeakGameEntity GetFirstChildEntityWithName(this WeakGameEntity entity, string name)`

**用途 / Purpose:** 获取 `first child entity with name` 的当前值。

### IsOpponentOf
`public static bool IsOpponentOf(this BattleSideEnum s, BattleSideEnum side)`

**用途 / Purpose:** 处理 `is opponent of` 相关逻辑。

## 使用示例

```csharp
MBExtensions.GetGlobalOrganicDirection(columnFormation);
```

## 参见

- [完整类目录](../catalog)