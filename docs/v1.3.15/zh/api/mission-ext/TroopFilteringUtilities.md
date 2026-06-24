<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopFilteringUtilities`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopFilteringUtilities

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class TroopFilteringUtilities`
**领域:** mission-ext

## 概述

`TroopFilteringUtilities` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetFilter
`public static TroopTraitsMask GetFilter(bool isMounted, bool isRanged, bool isMelee, bool hasHeavyArmor, bool hasThrown, bool hasSpear, bool hasShield)`

**用途 / Purpose:** 获取 `filter` 的当前值。

### GetFilter
`public static TroopTraitsMask GetFilter(params FormationClass formationClasses)`

**用途 / Purpose:** 获取 `filter` 的当前值。

### GetFilter
`public static TroopTraitsMask GetFilter(params FormationFilterType filterTypes)`

**用途 / Purpose:** 获取 `filter` 的当前值。

### GetPriorityFunction
`public static void GetPriorityFunction(TroopTraitsMask filter, out Func<Agent, int> priorityFunc)`

**用途 / Purpose:** 获取 `priority function` 的当前值。

### GetPriorityFunction
`public static void GetPriorityFunction(TroopTraitsMask filter, out Func<IAgentOriginBase, int> priorityFunc)`

**用途 / Purpose:** 获取 `priority function` 的当前值。

### GetTroopPriority
`public static int GetTroopPriority(TroopTraitsMask troopMask, int battleTier, TroopTraitsMask filter)`

**用途 / Purpose:** 获取 `troop priority` 的当前值。

### GetMaxPriority
`public static int GetMaxPriority(TroopTraitsMask filter)`

**用途 / Purpose:** 获取 `max priority` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
TroopFilteringUtilities.GetFilter(false, false, false, false, false, false, false);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
