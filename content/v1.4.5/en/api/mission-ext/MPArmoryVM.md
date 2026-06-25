---
title: "MPArmoryVM"
description: "Auto-generated class reference for MPArmoryVM."
---
# MPArmoryVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryVM from the subsystem API first
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPArmoryVM from the subsystem API first
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.OnFinalize();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MPArmoryVM from the subsystem API first
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.OnTick(0);
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**Purpose:** Keeps the display or cache of player data in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryVM from the subsystem API first
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.RefreshPlayerData(playerData);
```

### ForceRefreshCharacter
`public void ForceRefreshCharacter()`

**Purpose:** Executes the ForceRefreshCharacter logic.

```csharp
// Obtain an instance of MPArmoryVM from the subsystem API first
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.ForceRefreshCharacter();
```

### SetCanOpenFacegen
`public void SetCanOpenFacegen(bool enabled)`

**Purpose:** Assigns a new value to can open facegen and updates the object's internal state.

```csharp
// Obtain an instance of MPArmoryVM from the subsystem API first
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.SetCanOpenFacegen(false);
```

### ExecuteClearTauntSelection
`public void ExecuteClearTauntSelection()`

**Purpose:** Runs the operation or workflow associated with clear taunt selection.

```csharp
// Obtain an instance of MPArmoryVM from the subsystem API first
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.ExecuteClearTauntSelection();
```

### ExecuteToggleManageTauntsState
`public void ExecuteToggleManageTauntsState()`

**Purpose:** Runs the operation or workflow associated with toggle manage taunts state.

```csharp
// Obtain an instance of MPArmoryVM from the subsystem API first
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.ExecuteToggleManageTauntsState();
```

### ExecuteSelectFocusedSlot
`public void ExecuteSelectFocusedSlot()`

**Purpose:** Runs the operation or workflow associated with select focused slot.

```csharp
// Obtain an instance of MPArmoryVM from the subsystem API first
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.ExecuteSelectFocusedSlot();
```

### ExecuteEmptyFocusedSlot
`public void ExecuteEmptyFocusedSlot()`

**Purpose:** Runs the operation or workflow associated with empty focused slot.

```csharp
// Obtain an instance of MPArmoryVM from the subsystem API first
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.ExecuteEmptyFocusedSlot();
```

### ApplyPerkEffectsToEquipment
`public static void ApplyPerkEffectsToEquipment(ref Equipment equipment, List<IReadOnlyPerkObject> selectedPerks)`

**Purpose:** Applies the effect of perk effects to equipment to the this instance.

```csharp
// Static call; no instance required
MPArmoryVM.ApplyPerkEffectsToEquipment(equipment, selectedPerks);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.RefreshValues();
```

## See Also

- [Area Index](../)