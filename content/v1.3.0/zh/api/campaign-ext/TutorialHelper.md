---
title: "TutorialHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialHelper

**Namespace:** SandBox.GauntletUI.Tutorial
**Module:** SandBox.GauntletUI
**Type:** `public static class TutorialHelper`
**Base:** 无
**File:** `SandBox.GauntletUI/Tutorial/TutorialHelper.cs`

## 概述

`TutorialHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `TutorialHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerIsInAnySettlement` | `public static bool PlayerIsInAnySettlement { get; }` |
| `PlayerIsInAnyVillage` | `public static bool PlayerIsInAnyVillage { get; }` |
| `IsOrderingAvailable` | `public static bool IsOrderingAvailable { get; }` |
| `IsCharacterPopUpWindowOpen` | `public static bool IsCharacterPopUpWindowOpen { get; }` |
| `CurrentEncyclopediaPage` | `public static EncyclopediaPages CurrentEncyclopediaPage { get; }` |
| `CurrentContext` | `public static TutorialContexts CurrentContext { get; }` |
| `PlayerIsInNonEnemyTown` | `public static bool PlayerIsInNonEnemyTown { get; }` |
| `ActiveVillageRaidGameMenuID` | `public static string ActiveVillageRaidGameMenuID { get; }` |
| `IsActiveVillageRaidGameMenuOpen` | `public static bool IsActiveVillageRaidGameMenuOpen { get; }` |
| `TownMenuIsOpen` | `public static bool TownMenuIsOpen { get; }` |
| `VillageMenuIsOpen` | `public static bool VillageMenuIsOpen { get; }` |
| `BackStreetMenuIsOpen` | `public static bool BackStreetMenuIsOpen { get; }` |
| `IsPlayerInABattleMission` | `public static bool IsPlayerInABattleMission { get; }` |
| `IsOrderOfBattleOpenAndReady` | `public static bool IsOrderOfBattleOpenAndReady { get; }` |
| `IsNavalMission` | `public static bool IsNavalMission { get; }` |
| `CanPlayerAssignHimselfToFormation` | `public static bool CanPlayerAssignHimselfToFormation { get; }` |
| `IsPlayerInAFight` | `public static bool IsPlayerInAFight { get; }` |
| `IsPlayerEncounterLeader` | `public static bool IsPlayerEncounterLeader { get; }` |
| `IsPlayerInAHideoutBattleMission` | `public static bool IsPlayerInAHideoutBattleMission { get; }` |
| `GetMenuLocations` | `public static IList<Location> GetMenuLocations { get; }` |
| `PlayerIsSafeOnMap` | `public static bool PlayerIsSafeOnMap { get; }` |
| `IsCurrentTownHaveDoableCraftingOrder` | `public static bool IsCurrentTownHaveDoableCraftingOrder { get; }` |
| `CurrentInventoryScreenIncludesBannerItem` | `public static bool CurrentInventoryScreenIncludesBannerItem { get; }` |
| `PlayerHasUnassignedRolesAndMember` | `public static bool PlayerHasUnassignedRolesAndMember { get; }` |
| `PlayerCanRecruit` | `public static bool PlayerCanRecruit { get; }` |
| `IsKingdomDecisionPanelActiveAndHasOptions` | `public static bool IsKingdomDecisionPanelActiveAndHasOptions { get; }` |
| `CurrentMissionLocation` | `public static Location CurrentMissionLocation { get; }` |
| `BuyingFoodBaseConditions` | `public static bool BuyingFoodBaseConditions { get; }` |
| `AreTroopUpgradesDisabled` | `public static bool AreTroopUpgradesDisabled { get; }` |
| `PlayerHasAnyUpgradeableTroop` | `public static bool PlayerHasAnyUpgradeableTroop { get; }` |
| `PlayerIsInAConversation` | `public static bool PlayerIsInAConversation { get; }` |
| `CurrentTime` | `public static DateTime CurrentTime { get; }` |
| `MinimumGoldForCompanion` | `public static int MinimumGoldForCompanion { get; }` |
| `MaximumSpeedForPartyForSpeedTutorial` | `public static float MaximumSpeedForPartyForSpeedTutorial { get; }` |
| `MaxCohesionForCohesionTutorial` | `public static float MaxCohesionForCohesionTutorial { get; }` |

## 主要方法

### IsThereAvailableCompanionInLocation
`public static bool? IsThereAvailableCompanionInLocation(Location location)`

**用途 / Purpose:** 处理 `is there available companion in location` 相关逻辑。

## 使用示例

```csharp
TutorialHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)