---
title: "SettlementHelper"
description: "SettlementHelper 的自动生成类参考。"
---
# SettlementHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class SettlementHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/SettlementHelper.cs`

## 概述

`SettlementHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `SettlementHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRandomStuff
`public static string GetRandomStuff(bool isFemale)`

**用途 / Purpose:** 读取并返回当前对象中 random stuff 的结果。

```csharp
// 静态调用，不需要实例
SettlementHelper.GetRandomStuff(false);
```

### FindNearestSettlementToSettlement
`public static Settlement FindNearestSettlementToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest settlement to settlement。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestSettlementToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestSettlementToMobileParty
`public static Settlement FindNearestSettlementToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest settlement to mobile party。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestSettlementToMobileParty(mobileParty, navCapabilities, func<Settlement, false);
```

### FindNearestSettlementToPoint
`public static Settlement FindNearestSettlementToPoint(in CampaignVec2 point, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest settlement to point。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestSettlementToPoint(point, func<Settlement, false);
```

### FindNearestHideoutToSettlement
`public static Hideout FindNearestHideoutToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest hideout to settlement。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestHideoutToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestHideoutToMobileParty
`public static Hideout FindNearestHideoutToMobileParty(MobileParty fromMobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest hideout to mobile party。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestHideoutToMobileParty(fromMobileParty, navCapabilities, func<Settlement, false);
```

### FindNearestTownToSettlement
`public static Town FindNearestTownToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest town to settlement。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestTownToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestTownToMobileParty
`public static Town FindNearestTownToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest town to mobile party。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestTownToMobileParty(mobileParty, navCapabilities, func<Settlement, false);
```

### FindNextSettlementAroundMobileParty
`public static int FindNextSettlementAroundMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, float maxDistance, int lastIndex, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的next settlement around mobile party。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNextSettlementAroundMobileParty(mobileParty, navCapabilities, 0, 0, func<Settlement, false);
```

### FindNearestCastleToSettlement
`public static Settlement FindNearestCastleToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest castle to settlement。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestCastleToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestCastleToMobileParty
`public static Settlement FindNearestCastleToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest castle to mobile party。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestCastleToMobileParty(mobileParty, navCapabilities, func<Settlement, false);
```

### FindNearestFortificationToSettlement
`public static Settlement FindNearestFortificationToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest fortification to settlement。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestFortificationToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestFortificationToMobileParty
`public static Settlement FindNearestFortificationToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest fortification to mobile party。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestFortificationToMobileParty(mobileParty, navCapabilities, func<Settlement, false);
```

### FindFurthestFortificationToSettlement
`public static Settlement FindFurthestFortificationToSettlement(MBReadOnlyList<Town> candidates, MobileParty.NavigationType navCapabilities, Settlement fromSettlement, out float furthestDistance)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的furthest fortification to settlement。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindFurthestFortificationToSettlement(candidates, navCapabilities, fromSettlement, furthestDistance);
```

### FindNearestVillageToSettlement
`public static Village FindNearestVillageToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest village to settlement。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestVillageToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestVillageToMobileParty
`public static Village FindNearestVillageToMobileParty(MobileParty fromParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的nearest village to mobile party。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindNearestVillageToMobileParty(fromParty, navCapabilities, func<Settlement, false);
```

### FindRandomSettlement
`public static Settlement FindRandomSettlement(Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的random settlement。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindRandomSettlement(func<Settlement, false);
```

### FindRandomHideout
`public static Settlement FindRandomHideout(Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的random hideout。

```csharp
// 静态调用，不需要实例
SettlementHelper.FindRandomHideout(func<Settlement, false);
```

### TakeEnemyVillagersOutsideSettlements
`public static void TakeEnemyVillagersOutsideSettlements(Settlement settlementWhichChangedFaction)`

**用途 / Purpose:** 调用 TakeEnemyVillagersOutsideSettlements 对应的操作。

```csharp
// 静态调用，不需要实例
SettlementHelper.TakeEnemyVillagersOutsideSettlements(settlementWhichChangedFaction);
```

### GetRandomTown
`public static Settlement GetRandomTown(Clan fromFaction = null)`

**用途 / Purpose:** 读取并返回当前对象中 random town 的结果。

```csharp
// 静态调用，不需要实例
SettlementHelper.GetRandomTown(null);
```

### GetBestSettlementToSpawnAround
`public static Settlement GetBestSettlementToSpawnAround(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 best settlement to spawn around 的结果。

```csharp
// 静态调用，不需要实例
SettlementHelper.GetBestSettlementToSpawnAround(hero);
```

### GetAllHeroesOfSettlement
`public static IEnumerable<Hero> GetAllHeroesOfSettlement(Settlement settlement, bool includePrisoners)`

**用途 / Purpose:** 读取并返回当前对象中 all heroes of settlement 的结果。

```csharp
// 静态调用，不需要实例
SettlementHelper.GetAllHeroesOfSettlement(settlement, false);
```

### IsGarrisonStarving
`public static bool IsGarrisonStarving(Settlement settlement)`

**用途 / Purpose:** 判断当前对象是否处于 garrison starving 状态或条件。

```csharp
// 静态调用，不需要实例
SettlementHelper.IsGarrisonStarving(settlement);
```

### SpawnNotablesIfNeeded
`public static void SpawnNotablesIfNeeded(Settlement settlement)`

**用途 / Purpose:** 调用 SpawnNotablesIfNeeded 对应的操作。

```csharp
// 静态调用，不需要实例
SettlementHelper.SpawnNotablesIfNeeded(settlement);
```

### GetGarrisonChangeExplainedNumber
`public static ExplainedNumber GetGarrisonChangeExplainedNumber(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 garrison change explained number 的结果。

```csharp
// 静态调用，不需要实例
SettlementHelper.GetGarrisonChangeExplainedNumber(town);
```

### GetNeighborScoreForConsideringClan
`public static float GetNeighborScoreForConsideringClan(Settlement settlement, Clan consideringClan)`

**用途 / Purpose:** 读取并返回当前对象中 neighbor score for considering clan 的结果。

```csharp
// 静态调用，不需要实例
SettlementHelper.GetNeighborScoreForConsideringClan(settlement, consideringClan);
```

## 使用示例

```csharp
SettlementHelper.Initialize();
```

## 参见

- [本区域目录](../)