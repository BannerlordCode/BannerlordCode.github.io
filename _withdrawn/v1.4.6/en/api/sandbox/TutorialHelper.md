---
title: "TutorialHelper"
description: "TutorialHelper: a public class in SandBox.GauntletUI.Tutorial; 36 exposed members (1 methods, 35 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Tutorial/TutorialHelper.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialHelper

**Namespace:** `SandBox.GauntletUI.Tutorial`
**Module:** `SandBox.GauntletUI`
**Type:** `public static class TutorialHelper`
**File:** `SandBox.GauntletUI/Tutorial/TutorialHelper.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TutorialHelper lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Tutorial/TutorialHelper.cs. It is a public class; the inheritance chain is TutorialHelper. It exposes 36 public/protected members: 1 methods, 35 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialHelper lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Tutorial`, inheritance chain TutorialHelper. The surface is property-led (properties 35/36, methods 1/36), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Tutorial/TutorialHelper.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerIsInAnySettlement` | `public static bool PlayerIsInAnySettlement` | property |
| `PlayerIsInAnyVillage` | `public static bool PlayerIsInAnyVillage` | property |
| `IsOrderingAvailable` | `public static bool IsOrderingAvailable` | property |
| `IsCharacterPopUpWindowOpen` | `public static bool IsCharacterPopUpWindowOpen` | property |
| `CurrentEncyclopediaPage` | `public static EncyclopediaPages CurrentEncyclopediaPage` | property |
| `CurrentContext` | `public static TutorialContexts CurrentContext` | property |
| `PlayerIsInNonEnemyTown` | `public static bool PlayerIsInNonEnemyTown` | property |
| `ActiveVillageRaidGameMenuID` | `public static string ActiveVillageRaidGameMenuID` | property |
| `IsActiveVillageRaidGameMenuOpen` | `public static bool IsActiveVillageRaidGameMenuOpen` | property |
| `TownMenuIsOpen` | `public static bool TownMenuIsOpen` | property |
| `VillageMenuIsOpen` | `public static bool VillageMenuIsOpen` | property |
| `BackStreetMenuIsOpen` | `public static bool BackStreetMenuIsOpen` | property |
| `IsPlayerInABattleMission` | `public static bool IsPlayerInABattleMission` | property |
| `IsOrderOfBattleOpenAndReady` | `public static bool IsOrderOfBattleOpenAndReady` | property |
| `IsNavalMission` | `public static bool IsNavalMission` | property |
| `CanPlayerAssignHimselfToFormation` | `public static bool CanPlayerAssignHimselfToFormation` | property |
| `IsPlayerInAFight` | `public static bool IsPlayerInAFight` | property |
| `IsPlayerEncounterLeader` | `public static bool IsPlayerEncounterLeader` | property |
| `IsPlayerInAHideoutBattleMission` | `public static bool IsPlayerInAHideoutBattleMission` | property |
| `IList` | `public static IList<Location>GetMenuLocations` | property |
| `PlayerIsSafeOnMap` | `public static bool PlayerIsSafeOnMap` | property |
| `IsCurrentTownHaveDoableCraftingOrder` | `public static bool IsCurrentTownHaveDoableCraftingOrder` | property |
| `CurrentInventoryScreenIncludesBannerItem` | `public static bool CurrentInventoryScreenIncludesBannerItem` | property |
| `PlayerHasUnassignedRolesAndMember` | `public static bool PlayerHasUnassignedRolesAndMember` | property |
| `PlayerCanRecruit` | `public static bool PlayerCanRecruit` | property |
| `IsKingdomDecisionPanelActiveAndHasOptions` | `public static bool IsKingdomDecisionPanelActiveAndHasOptions` | property |
| `CurrentMissionLocation` | `public static Location CurrentMissionLocation` | property |
| `BuyingFoodBaseConditions` | `public static bool BuyingFoodBaseConditions` | property |
| `AreTroopUpgradesDisabled` | `public static bool AreTroopUpgradesDisabled` | property |
| `PlayerHasAnyUpgradeableTroop` | `public static bool PlayerHasAnyUpgradeableTroop` | property |
| `PlayerIsInAConversation` | `public static bool PlayerIsInAConversation` | property |
| `IsThereAvailableCompanionInLocation` | `public static bool? IsThereAvailableCompanionInLocation(Location location)` | method |
| `CurrentTime` | `public static DateTime CurrentTime` | property |
| `MinimumGoldForCompanion` | `public static int MinimumGoldForCompanion` | property |
| `MaximumSpeedForPartyForSpeedTutorial` | `public static float MaximumSpeedForPartyForSpeedTutorial` | property |
| `MaxCohesionForCohesionTutorial` | `public static float MaxCohesionForCohesionTutorial` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GauntletTutorialSystem](../GauntletTutorialSystem/)
- [same namespace TutorialAttribute](../TutorialAttribute/)
- [same namespace TutorialItemBase](../TutorialItemBase/)
