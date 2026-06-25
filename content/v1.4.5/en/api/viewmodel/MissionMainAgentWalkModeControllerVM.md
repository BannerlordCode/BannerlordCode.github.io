---
title: "MissionMainAgentWalkModeControllerVM"
description: "Auto-generated class reference for MissionMainAgentWalkModeControllerVM."
---
# MissionMainAgentWalkModeControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentWalkModeControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode/MissionMainAgentWalkModeControllerVM.cs`

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

**Purpose:** **Purpose:** Reads and returns the is walk mode activated delegate value held by the this instance.

```csharp
// Obtain an instance of MissionMainAgentWalkModeControllerVM from the subsystem API first
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
var result = missionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate();
```

### SetIsWalkModeActivatedDelegate
`public delegate void SetIsWalkModeActivatedDelegate(bool value)`

**Purpose:** **Purpose:** Assigns a new value to is walk mode activated delegate and updates the object's internal state.

```csharp
// Obtain an instance of MissionMainAgentWalkModeControllerVM from the subsystem API first
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate(false);
```

### GetCanChangeWalkModeActivatedDelegate
`public delegate bool GetCanChangeWalkModeActivatedDelegate()`

**Purpose:** **Purpose:** Reads and returns the can change walk mode activated delegate value held by the this instance.

```csharp
// Obtain an instance of MissionMainAgentWalkModeControllerVM from the subsystem API first
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
var result = missionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionMainAgentWalkModeControllerVM from the subsystem API first
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.OnFinalize();
```

### AddWalkMode
`public void AddWalkMode(string typeId, TextObject name, GetIsWalkModeActivatedDelegate getIsActive, SetIsWalkModeActivatedDelegate setIsActive, GetCanChangeWalkModeActivatedDelegate canChangeActive, HotKey hotKey, bool isHotkeyConsoleOnly)`

**Purpose:** **Purpose:** Adds walk mode to the current collection or state.

```csharp
// Obtain an instance of MissionMainAgentWalkModeControllerVM from the subsystem API first
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.AddWalkMode("example", name, getIsActive, setIsActive, canChangeActive, hotKey, false);
```

### AddWalkMode
`public void AddWalkMode(string typeId, TextObject name, GetIsWalkModeActivatedDelegate getIsActive, SetIsWalkModeActivatedDelegate setIsActive, GetCanChangeWalkModeActivatedDelegate canChangeActive, GameKey hotKey, bool isHotkeyConsoleOnly)`

**Purpose:** **Purpose:** Adds walk mode to the current collection or state.

```csharp
// Obtain an instance of MissionMainAgentWalkModeControllerVM from the subsystem API first
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.AddWalkMode("example", name, getIsActive, setIsActive, canChangeActive, hotKey, false);
```

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**Purpose:** **Purpose:** Assigns a new value to enabled and updates the object's internal state.

```csharp
// Obtain an instance of MissionMainAgentWalkModeControllerVM from the subsystem API first
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.SetEnabled(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate();
```

## See Also

- [Area Index](../)