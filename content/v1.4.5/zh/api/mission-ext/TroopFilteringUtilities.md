---
title: "TroopFilteringUtilities"
description: "TroopFilteringUtilities 的自动生成类参考。"
---
# TroopFilteringUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class TroopFilteringUtilities`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs`

## 概述

`TroopFilteringUtilities` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetFilter
`public static TroopTraitsMask GetFilter(bool isMounted, bool isRanged, bool isMelee, bool hasHeavyArmor, bool hasThrown, bool hasSpear, bool hasShield)`

**用途 / Purpose:** 读取并返回当前对象中 「filter」 的结果。

```csharp
// 静态调用，不需要实例
TroopFilteringUtilities.GetFilter(false, false, false, false, false, false, false);
```

### GetFilter
`public static TroopTraitsMask GetFilter(params FormationClass formationClasses)`

**用途 / Purpose:** 读取并返回当前对象中 「filter」 的结果。

```csharp
// 静态调用，不需要实例
TroopFilteringUtilities.GetFilter(formationClasses);
```

### GetFilter
`public static TroopTraitsMask GetFilter(params FormationFilterType filterTypes)`

**用途 / Purpose:** 读取并返回当前对象中 「filter」 的结果。

```csharp
// 静态调用，不需要实例
TroopFilteringUtilities.GetFilter(filterTypes);
```

### GetPriorityFunction
`public static void GetPriorityFunction(TroopTraitsMask filter, out Func<Agent, int> priorityFunc)`

**用途 / Purpose:** 读取并返回当前对象中 「priority function」 的结果。

```csharp
// 静态调用，不需要实例
TroopFilteringUtilities.GetPriorityFunction(filter, func<Agent, 0);
```

### GetPriorityFunction
`public static void GetPriorityFunction(TroopTraitsMask filter, out Func<IAgentOriginBase, int> priorityFunc)`

**用途 / Purpose:** 读取并返回当前对象中 「priority function」 的结果。

```csharp
// 静态调用，不需要实例
TroopFilteringUtilities.GetPriorityFunction(filter, func<IAgentOriginBase, 0);
```

### GetTroopPriority
`public static int GetTroopPriority(TroopTraitsMask troopMask, int battleTier, TroopTraitsMask filter)`

**用途 / Purpose:** 读取并返回当前对象中 「troop priority」 的结果。

```csharp
// 静态调用，不需要实例
TroopFilteringUtilities.GetTroopPriority(troopMask, 0, filter);
```

### GetMaxPriority
`public static int GetMaxPriority(TroopTraitsMask filter)`

**用途 / Purpose:** 读取并返回当前对象中 「max priority」 的结果。

```csharp
// 静态调用，不需要实例
TroopFilteringUtilities.GetMaxPriority(filter);
```

## 使用示例

```csharp
TroopFilteringUtilities.GetFilter(false, false, false, false, false, false, false);
```

## 参见

- [本区域目录](../)