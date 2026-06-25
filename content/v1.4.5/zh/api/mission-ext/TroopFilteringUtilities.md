---
title: "TroopFilteringUtilities"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopFilteringUtilities`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TroopFilteringUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class TroopFilteringUtilities`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs`

## 概述

`TroopFilteringUtilities` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
TroopFilteringUtilities.GetFilter(false, false, false, false, false, false, false);
```

## 参见

- [完整类目录](../catalog)