---
title: "MPMatchmakingSelectionInfoVM"
description: "Auto-generated class reference for MPMatchmakingSelectionInfoVM."
---
# MPMatchmakingSelectionInfoVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingSelectionInfoVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame/MPMatchmakingSelectionInfoVM.cs`

## Overview

`MPMatchmakingSelectionInfoVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `ExtraInfos` | `public MBBindingList<StringPairItemVM> ExtraInfos { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPMatchmakingSelectionInfoVM from the subsystem API first
MPMatchmakingSelectionInfoVM mPMatchmakingSelectionInfoVM = ...;
mPMatchmakingSelectionInfoVM.RefreshValues();
```

### UpdateForGameType
`public void UpdateForGameType(string gameTypeStr)`

**Purpose:** Recalculates and stores the latest representation of for game type.

```csharp
// Obtain an instance of MPMatchmakingSelectionInfoVM from the subsystem API first
MPMatchmakingSelectionInfoVM mPMatchmakingSelectionInfoVM = ...;
mPMatchmakingSelectionInfoVM.UpdateForGameType("example");
```

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**Purpose:** Assigns a new value to enabled and updates the object's internal state.

```csharp
// Obtain an instance of MPMatchmakingSelectionInfoVM from the subsystem API first
MPMatchmakingSelectionInfoVM mPMatchmakingSelectionInfoVM = ...;
mPMatchmakingSelectionInfoVM.SetEnabled(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPMatchmakingSelectionInfoVM mPMatchmakingSelectionInfoVM = ...;
mPMatchmakingSelectionInfoVM.RefreshValues();
```

## See Also

- [Area Index](../)