---
title: "TutorialHelper"
description: "TutorialHelper：SandBox.GauntletUI.Tutorial 的 public 类；公开成员 36 个（方法 1、属性 35、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/Tutorial/TutorialHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialHelper

**Namespace:** `SandBox.GauntletUI.Tutorial`
**Module:** `SandBox.GauntletUI`
**Type:** `public static class TutorialHelper`
**File:** `SandBox.GauntletUI/Tutorial/TutorialHelper.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

TutorialHelper 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Tutorial/TutorialHelper.cs。它是一个 public 类，继承链为 TutorialHelper。public/protected 成员共 36 个：1 方法、35 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TutorialHelper 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI.Tutorial`，继承链 TutorialHelper。成员构成以属性为主（属性 35/36，方法 1/36），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Tutorial/TutorialHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerIsInAnySettlement` | `public static bool PlayerIsInAnySettlement` | 属性 |
| `PlayerIsInAnyVillage` | `public static bool PlayerIsInAnyVillage` | 属性 |
| `IsOrderingAvailable` | `public static bool IsOrderingAvailable` | 属性 |
| `IsCharacterPopUpWindowOpen` | `public static bool IsCharacterPopUpWindowOpen` | 属性 |
| `CurrentEncyclopediaPage` | `public static EncyclopediaPages CurrentEncyclopediaPage` | 属性 |
| `CurrentContext` | `public static TutorialContexts CurrentContext` | 属性 |
| `PlayerIsInNonEnemyTown` | `public static bool PlayerIsInNonEnemyTown` | 属性 |
| `ActiveVillageRaidGameMenuID` | `public static string ActiveVillageRaidGameMenuID` | 属性 |
| `IsActiveVillageRaidGameMenuOpen` | `public static bool IsActiveVillageRaidGameMenuOpen` | 属性 |
| `TownMenuIsOpen` | `public static bool TownMenuIsOpen` | 属性 |
| `VillageMenuIsOpen` | `public static bool VillageMenuIsOpen` | 属性 |
| `BackStreetMenuIsOpen` | `public static bool BackStreetMenuIsOpen` | 属性 |
| `IsPlayerInABattleMission` | `public static bool IsPlayerInABattleMission` | 属性 |
| `IsOrderOfBattleOpenAndReady` | `public static bool IsOrderOfBattleOpenAndReady` | 属性 |
| `IsNavalMission` | `public static bool IsNavalMission` | 属性 |
| `CanPlayerAssignHimselfToFormation` | `public static bool CanPlayerAssignHimselfToFormation` | 属性 |
| `IsPlayerInAFight` | `public static bool IsPlayerInAFight` | 属性 |
| `IsPlayerEncounterLeader` | `public static bool IsPlayerEncounterLeader` | 属性 |
| `IsPlayerInAHideoutBattleMission` | `public static bool IsPlayerInAHideoutBattleMission` | 属性 |
| `IList` | `public static IList<Location>GetMenuLocations` | 属性 |
| `PlayerIsSafeOnMap` | `public static bool PlayerIsSafeOnMap` | 属性 |
| `IsCurrentTownHaveDoableCraftingOrder` | `public static bool IsCurrentTownHaveDoableCraftingOrder` | 属性 |
| `CurrentInventoryScreenIncludesBannerItem` | `public static bool CurrentInventoryScreenIncludesBannerItem` | 属性 |
| `PlayerHasUnassignedRolesAndMember` | `public static bool PlayerHasUnassignedRolesAndMember` | 属性 |
| `PlayerCanRecruit` | `public static bool PlayerCanRecruit` | 属性 |
| `IsKingdomDecisionPanelActiveAndHasOptions` | `public static bool IsKingdomDecisionPanelActiveAndHasOptions` | 属性 |
| `CurrentMissionLocation` | `public static Location CurrentMissionLocation` | 属性 |
| `BuyingFoodBaseConditions` | `public static bool BuyingFoodBaseConditions` | 属性 |
| `AreTroopUpgradesDisabled` | `public static bool AreTroopUpgradesDisabled` | 属性 |
| `PlayerHasAnyUpgradeableTroop` | `public static bool PlayerHasAnyUpgradeableTroop` | 属性 |
| `PlayerIsInAConversation` | `public static bool PlayerIsInAConversation` | 属性 |
| `IsThereAvailableCompanionInLocation` | `public static bool? IsThereAvailableCompanionInLocation(Location location)` | 方法 |
| `CurrentTime` | `public static DateTime CurrentTime` | 属性 |
| `MinimumGoldForCompanion` | `public static int MinimumGoldForCompanion` | 属性 |
| `MaximumSpeedForPartyForSpeedTutorial` | `public static float MaximumSpeedForPartyForSpeedTutorial` | 属性 |
| `MaxCohesionForCohesionTutorial` | `public static float MaxCohesionForCohesionTutorial` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 GauntletTutorialSystem](../GauntletTutorialSystem/)
- [同命名空间 TutorialAttribute](../TutorialAttribute/)
- [同命名空间 TutorialItemBase](../TutorialItemBase/)
