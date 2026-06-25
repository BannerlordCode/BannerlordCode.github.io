---
title: "SettlementHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class SettlementHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/SettlementHelper.cs`

## 概述

`SettlementHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `SettlementHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRandomStuff
`public static string GetRandomStuff(bool isFemale)`

**用途 / Purpose:** 获取 `random stuff` 的当前值。

### FindNearestSettlementToSettlement
`public static Settlement FindNearestSettlementToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest settlement to settlement` 相关逻辑。

### FindNearestSettlementToMobileParty
`public static Settlement FindNearestSettlementToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest settlement to mobile party` 相关逻辑。

### FindNearestSettlementToPoint
`public static Settlement FindNearestSettlementToPoint(in CampaignVec2 point, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest settlement to point` 相关逻辑。

### FindNearestHideoutToSettlement
`public static Hideout FindNearestHideoutToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest hideout to settlement` 相关逻辑。

### FindNearestHideoutToMobileParty
`public static Hideout FindNearestHideoutToMobileParty(MobileParty fromMobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest hideout to mobile party` 相关逻辑。

### FindNearestTownToSettlement
`public static Town FindNearestTownToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest town to settlement` 相关逻辑。

### FindNearestTownToMobileParty
`public static Town FindNearestTownToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest town to mobile party` 相关逻辑。

### FindNextSettlementAroundMobileParty
`public static int FindNextSettlementAroundMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, float maxDistance, int lastIndex, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find next settlement around mobile party` 相关逻辑。

### FindNearestCastleToSettlement
`public static Settlement FindNearestCastleToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest castle to settlement` 相关逻辑。

### FindNearestCastleToMobileParty
`public static Settlement FindNearestCastleToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest castle to mobile party` 相关逻辑。

### FindNearestFortificationToSettlement
`public static Settlement FindNearestFortificationToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest fortification to settlement` 相关逻辑。

### FindNearestFortificationToMobileParty
`public static Settlement FindNearestFortificationToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest fortification to mobile party` 相关逻辑。

### FindFurthestFortificationToSettlement
`public static Settlement FindFurthestFortificationToSettlement(MBReadOnlyList<Town> candidates, MobileParty.NavigationType navCapabilities, Settlement fromSettlement, out float furthestDistance)`

**用途 / Purpose:** 处理 `find furthest fortification to settlement` 相关逻辑。

### FindNearestVillageToSettlement
`public static Village FindNearestVillageToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest village to settlement` 相关逻辑。

### FindNearestVillageToMobileParty
`public static Village FindNearestVillageToMobileParty(MobileParty fromParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find nearest village to mobile party` 相关逻辑。

### FindRandomSettlement
`public static Settlement FindRandomSettlement(Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find random settlement` 相关逻辑。

### FindRandomHideout
`public static Settlement FindRandomHideout(Func<Settlement, bool> condition = null)`

**用途 / Purpose:** 处理 `find random hideout` 相关逻辑。

### TakeEnemyVillagersOutsideSettlements
`public static void TakeEnemyVillagersOutsideSettlements(Settlement settlementWhichChangedFaction)`

**用途 / Purpose:** 处理 `take enemy villagers outside settlements` 相关逻辑。

### GetRandomTown
`public static Settlement GetRandomTown(Clan fromFaction = null)`

**用途 / Purpose:** 获取 `random town` 的当前值。

### GetBestSettlementToSpawnAround
`public static Settlement GetBestSettlementToSpawnAround(Hero hero)`

**用途 / Purpose:** 获取 `best settlement to spawn around` 的当前值。

### GetAllHeroesOfSettlement
`public static IEnumerable<Hero> GetAllHeroesOfSettlement(Settlement settlement, bool includePrisoners)`

**用途 / Purpose:** 获取 `all heroes of settlement` 的当前值。

### IsGarrisonStarving
`public static bool IsGarrisonStarving(Settlement settlement)`

**用途 / Purpose:** 处理 `is garrison starving` 相关逻辑。

### SpawnNotablesIfNeeded
`public static void SpawnNotablesIfNeeded(Settlement settlement)`

**用途 / Purpose:** 处理 `spawn notables if needed` 相关逻辑。

### GetGarrisonChangeExplainedNumber
`public static ExplainedNumber GetGarrisonChangeExplainedNumber(Town town)`

**用途 / Purpose:** 获取 `garrison change explained number` 的当前值。

### GetNeighborScoreForConsideringClan
`public static float GetNeighborScoreForConsideringClan(Settlement settlement, Clan consideringClan)`

**用途 / Purpose:** 获取 `neighbor score for considering clan` 的当前值。

## 使用示例

```csharp
SettlementHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)