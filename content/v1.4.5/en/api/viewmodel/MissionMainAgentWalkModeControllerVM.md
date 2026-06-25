---
title: "MissionMainAgentWalkModeControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMainAgentWalkModeControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentWalkModeControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentWalkModeControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode/MissionMainAgentWalkModeControllerVM.cs`

## Overview

`MissionMainAgentWalkModeControllerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ControlModes` | `public MBBindingList<WalkModeItemVM> ControlModes { get; set; }` |
| `LastUsedItem` | `public WalkModeItemVM LastUsedItem { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## Key Methods

### GetIsWalkModeActivatedDelegate
`public delegate bool GetIsWalkModeActivatedDelegate()`

**Purpose:** Gets the current value of `is walk mode activated delegate`.

### SetIsWalkModeActivatedDelegate
`public delegate void SetIsWalkModeActivatedDelegate(bool value)`

**Purpose:** Sets the value or state of `is walk mode activated delegate`.

### GetCanChangeWalkModeActivatedDelegate
`public delegate bool GetCanChangeWalkModeActivatedDelegate()`

**Purpose:** Gets the current value of `can change walk mode activated delegate`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### AddWalkMode
`public void AddWalkMode(string typeId, TextObject name, GetIsWalkModeActivatedDelegate getIsActive, SetIsWalkModeActivatedDelegate setIsActive, GetCanChangeWalkModeActivatedDelegate canChangeActive, HotKey hotKey, bool isHotkeyConsoleOnly)`

**Purpose:** Adds `walk mode` to the current collection or state.

### AddWalkMode
`public void AddWalkMode(string typeId, TextObject name, GetIsWalkModeActivatedDelegate getIsActive, SetIsWalkModeActivatedDelegate setIsActive, GetCanChangeWalkModeActivatedDelegate canChangeActive, GameKey hotKey, bool isHotkeyConsoleOnly)`

**Purpose:** Adds `walk mode` to the current collection or state.

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**Purpose:** Sets the value or state of `enabled`.

## Usage Example

```csharp
var value = new MissionMainAgentWalkModeControllerVM();
value.GetIsWalkModeActivatedDelegate();
```

## See Also

- [Complete Class Catalog](../catalog)