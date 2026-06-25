---
title: "TutorialHelper"
description: "Auto-generated class reference for TutorialHelper."
---
# TutorialHelper

**Namespace:** SandBox.GauntletUI.Tutorial
**Module:** SandBox.GauntletUI
**Type:** `public static class TutorialHelper`
**Base:** none
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Tutorial/TutorialHelper.cs`

## Overview

`TutorialHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `TutorialHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

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

## Key Methods

### IsThereAvailableCompanionInLocation
`public static bool? IsThereAvailableCompanionInLocation(Location location)`

**Purpose:** Determines whether the current object is in the `there available companion in location` state or condition.

```csharp
// Static call; no instance required
TutorialHelper.IsThereAvailableCompanionInLocation(location);
```

## Usage Example

```csharp
TutorialHelper.Initialize();
```

## See Also

- [Area Index](../)