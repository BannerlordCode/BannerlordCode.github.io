<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBExtensions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class MBExtensions`
**领域:** mission-ext

## 概述

`MBExtensions` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

### HasParentOfType
`public static bool HasParentOfType(this GameEntity e, Type t)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `parent of type`。

### HasParentOfType
`public static bool HasParentOfType(this WeakGameEntity e, Type t)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `parent of type`。

### IsOpponentOf
`public static bool IsOpponentOf(this BattleSideEnum s, BattleSideEnum side)`

**用途 / Purpose:** 处理 `is opponent of` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MBExtensions.GetGlobalOrganicDirection(columnFormation);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
