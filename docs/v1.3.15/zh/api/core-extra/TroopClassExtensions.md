<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopClassExtensions`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopClassExtensions

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public static class TroopClassExtensions`
**领域:** core-extra

## 概述

`TroopClassExtensions` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsRanged
`public static bool IsRanged(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is ranged` 相关逻辑。

### IsMounted
`public static bool IsMounted(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is mounted` 相关逻辑。

### IsMeleeInfantry
`public static bool IsMeleeInfantry(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is melee infantry` 相关逻辑。

### IsMeleeCavalry
`public static bool IsMeleeCavalry(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is melee cavalry` 相关逻辑。

### DefaultClass
`public static FormationClass DefaultClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `default class` 相关逻辑。

### AlternativeClass
`public static FormationClass AlternativeClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `alternative class` 相关逻辑。

### DismountedClass
`public static FormationClass DismountedClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `dismounted class` 相关逻辑。

### IsDefaultTroopClass
`public static bool IsDefaultTroopClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is default troop class` 相关逻辑。

### IsRegularTroopClass
`public static bool IsRegularTroopClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is regular troop class` 相关逻辑。

### GetNextSpawnPrioritizedClass
`public static FormationClass GetNextSpawnPrioritizedClass(this FormationClass troopClass)`

**用途 / Purpose:** 获取 `next spawn prioritized class` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
TroopClassExtensions.IsRanged(troopClass);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
