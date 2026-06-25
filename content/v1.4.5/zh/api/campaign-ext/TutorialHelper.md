---
title: "TutorialHelper"
description: "TutorialHelper 的自动生成类参考。"
---
# TutorialHelper

**Namespace:** SandBox.GauntletUI.Tutorial
**Module:** SandBox.GauntletUI
**Type:** `public static class TutorialHelper`
**Base:** 无
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Tutorial/TutorialHelper.cs`

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
| `PlayerIsInNonEnemyTown` | `public static bool PlayerIsInNonEnemyTown { get; }` |
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
| `IsCurrentTownHaveDoableCraftingOrder` | `public static bool IsCurrentTownHaveDoableCraftingOrder { get; }` |
| `CurrentInventoryScreenIncludesBannerItem` | `public static bool CurrentInventoryScreenIncludesBannerItem { get; }` |
| `PlayerHasUnassignedRolesAndMember` | `public static bool PlayerHasUnassignedRolesAndMember { get; }` |
| `PlayerCanRecruit` | `public static bool PlayerCanRecruit { get; }` |
| `IsKingdomDecisionPanelActiveAndHasOptions` | `public static bool IsKingdomDecisionPanelActiveAndHasOptions { get; }` |
| `CurrentMissionLocation` | `public static Location CurrentMissionLocation { get; }` |
| `BuyingFoodBaseConditions` | `public static bool BuyingFoodBaseConditions { get; }` |
| `AreTroopUpgradesDisabled` | `public static bool AreTroopUpgradesDisabled { get; }` |
| `PlayerHasAnyUpgradeableTroop` | `public static bool PlayerHasAnyUpgradeableTroop { get; }` |

## 主要方法

### IsThereAvailableCompanionInLocation
`public static bool? IsThereAvailableCompanionInLocation(Location location)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 there available companion in location 状态或条件。

```csharp
// 静态调用，不需要实例
TutorialHelper.IsThereAvailableCompanionInLocation(location);
```

## 使用示例

```csharp
TutorialHelper.Initialize();
```

## 参见

- [本区域目录](../)