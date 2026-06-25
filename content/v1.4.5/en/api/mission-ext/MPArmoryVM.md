---
title: "MPArmoryVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPArmoryVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryVM.cs`

## Overview

`MPArmoryVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsManagingTaunts` | `public bool IsManagingTaunts { get; set; }` |
| `IsTauntAssignmentActive` | `public bool IsTauntAssignmentActive { get; set; }` |
| `CanOpenFacegen` | `public bool CanOpenFacegen { get; set; }` |
| `ClassFilter` | `public MPLobbyClassFilterVM ClassFilter { get; set; }` |
| `HeroPreview` | `public MPArmoryHeroPreviewVM HeroPreview { get; set; }` |
| `ClassStats` | `public MPArmoryClassStatsVM ClassStats { get; set; }` |
| `HeroPerkSelection` | `public MPArmoryHeroPerkSelectionVM HeroPerkSelection { get; set; }` |
| `Cosmetics` | `public MPArmoryCosmeticsVM Cosmetics { get; set; }` |
| `TauntAssignmentClickToCloseText` | `public string TauntAssignmentClickToCloseText { get; set; }` |
| `StatsText` | `public string StatsText { get; set; }` |
| `CustomizationText` | `public string CustomizationText { get; set; }` |
| `FacegenText` | `public string FacegenText { get; set; }` |
| `ManageTauntsText` | `public string ManageTauntsText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**Purpose:** Refreshes the display or cache of `player data`.

### ForceRefreshCharacter
`public void ForceRefreshCharacter()`

**Purpose:** Handles logic related to `force refresh character`.

### SetCanOpenFacegen
`public void SetCanOpenFacegen(bool enabled)`

**Purpose:** Sets the value or state of `can open facegen`.

### ExecuteClearTauntSelection
`public void ExecuteClearTauntSelection()`

**Purpose:** Executes the `clear taunt selection` operation or workflow.

### ExecuteToggleManageTauntsState
`public void ExecuteToggleManageTauntsState()`

**Purpose:** Executes the `toggle manage taunts state` operation or workflow.

### ExecuteSelectFocusedSlot
`public void ExecuteSelectFocusedSlot()`

**Purpose:** Executes the `select focused slot` operation or workflow.

### ExecuteEmptyFocusedSlot
`public void ExecuteEmptyFocusedSlot()`

**Purpose:** Executes the `empty focused slot` operation or workflow.

### ApplyPerkEffectsToEquipment
`public static void ApplyPerkEffectsToEquipment(ref Equipment equipment, List<IReadOnlyPerkObject> selectedPerks)`

**Purpose:** Applies `perk effects to equipment` to the current object.

## Usage Example

```csharp
var value = new MPArmoryVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)