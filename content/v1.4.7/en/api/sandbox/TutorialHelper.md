---
title: "TutorialHelper"
description: "TutorialHelper — class in SandBox.GauntletUI.Tutorial. 36 public members (36 static)."
---

<!-- v147-skeleton -->
# TutorialHelper

**Namespace:** `SandBox.GauntletUI.Tutorial`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public static class TutorialHelper`  
**Source:** `SandBox.GauntletUI/Tutorial/TutorialHelper.cs`

## Overview

`TutorialHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (36): `PlayerIsInAnySettlement`, `PlayerIsInAnyVillage`, `IsOrderingAvailable`, `IsCharacterPopUpWindowOpen`, `CurrentEncyclopediaPage`, `CurrentContext`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ActiveVillageRaidGameMenuID` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `AreTroopUpgradesDisabled` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `BackStreetMenuIsOpen` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `BuyingFoodBaseConditions` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `CanPlayerAssignHimselfToFormation` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CurrentContext` | property (static) | Static entry point `TutorialContexts` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentEncyclopediaPage` | property (static) | Static entry point `EncyclopediaPages` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentInventoryScreenIncludesBannerItem` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentMissionLocation` | property (static) | Static entry point `Location` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentTime` | property (static) | Static entry point `DateTime` property. Read it for current state; a declared setter writes that state in place. |
| `GetMenuLocations` | property (static) | Static entry point `IList<Location>` property. Read path: prefer it over reaching for the backing store. |
| `IsActiveVillageRaidGameMenuOpen` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsCharacterPopUpWindowOpen` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsCurrentTownHaveDoableCraftingOrder` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsKingdomDecisionPanelActiveAndHasOptions` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsNavalMission` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsOrderingAvailable` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsOrderOfBattleOpenAndReady` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerEncounterLeader` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerInABattleMission` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerInAFight` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerInAHideoutBattleMission` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsThereAvailableCompanionInLocation` | method (static) | Static entry point. Takes 1 argument: `Location location`. Returns `bool?`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MaxCohesionForCohesionTutorial` | property (static) | Static entry point `float` property. Read it for current state; a declared setter writes that state in place. |

12 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on TutorialHelper:
TutorialHelper.IsThereAvailableCompanionInLocation(location);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `SandBox.GauntletUI/Tutorial/TutorialHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Hideout](../../campaign/Hideout/) — `TaleWorlds.CampaignSystem.Settlements`.
- [GauntletTutorialSystem](../GauntletTutorialSystem/) — `SandBox.GauntletUI.Tutorial`.
- [EncyclopediaPages](../../viewmodel/EncyclopediaPages/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [LocationComplex](../../campaign/LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [HideoutMissionController](../HideoutMissionController/) — `SandBox.Missions.MissionLogics.Hideout`.
- [CraftingCampaignBehavior](../../campaign-ext/CraftingCampaignBehavior/) — `TaleWorlds.CampaignSystem.CampaignBehaviors`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/sandbox/](../) — the other types in this bucket.
