---
title: "MissionSpectatorControlVM"
description: "Auto-generated class reference for MissionSpectatorControlVM."
---
# MissionSpectatorControlVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSpectatorControlVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionSpectatorControlVM.cs`

## Overview

`MissionSpectatorControlVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `PrevCharacterText` | `public string PrevCharacterText { get; set; }` |
| `NextCharacterText` | `public string NextCharacterText { get; set; }` |
| `TakeControlText` | `public string TakeControlText { get; set; }` |
| `StatusText` | `public string StatusText { get; set; }` |
| `IsTakeControlRelevant` | `public bool IsTakeControlRelevant { get; set; }` |
| `IsTakeControlEnabled` | `public bool IsTakeControlEnabled { get; set; }` |
| `SpectatedAgentName` | `public string SpectatedAgentName { get; set; }` |
| `PrevCharacterKey` | `public InputKeyItemVM PrevCharacterKey { get; set; }` |
| `NextCharacterKey` | `public InputKeyItemVM NextCharacterKey { get; set; }` |
| `TakeControlKey` | `public InputKeyItemVM TakeControlKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionSpectatorControlVM from the subsystem API first
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.RefreshValues();
```

### OnSpectatedAgentFocusIn
`public void OnSpectatedAgentFocusIn(Agent followedAgent)`

**Purpose:** Invoked when the spectated agent focus in event is raised.

```csharp
// Obtain an instance of MissionSpectatorControlVM from the subsystem API first
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.OnSpectatedAgentFocusIn(followedAgent);
```

### OnSpectatedAgentFocusOut
`public void OnSpectatedAgentFocusOut(Agent followedAgent)`

**Purpose:** Invoked when the spectated agent focus out event is raised.

```csharp
// Obtain an instance of MissionSpectatorControlVM from the subsystem API first
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.OnSpectatedAgentFocusOut(followedAgent);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionSpectatorControlVM from the subsystem API first
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.OnFinalize();
```

### SetMainAgentStatus
`public void SetMainAgentStatus(bool isDead)`

**Purpose:** Assigns a new value to main agent status and updates the object's internal state.

```csharp
// Obtain an instance of MissionSpectatorControlVM from the subsystem API first
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.SetMainAgentStatus(false);
```

### SetPrevCharacterInputKey
`public void SetPrevCharacterInputKey(GameKey gameKey)`

**Purpose:** Assigns a new value to prev character input key and updates the object's internal state.

```csharp
// Obtain an instance of MissionSpectatorControlVM from the subsystem API first
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.SetPrevCharacterInputKey(gameKey);
```

### SetNextCharacterInputKey
`public void SetNextCharacterInputKey(GameKey gameKey)`

**Purpose:** Assigns a new value to next character input key and updates the object's internal state.

```csharp
// Obtain an instance of MissionSpectatorControlVM from the subsystem API first
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.SetNextCharacterInputKey(gameKey);
```

### SetTakeControlInputKey
`public void SetTakeControlInputKey(GameKey gameKey)`

**Purpose:** Assigns a new value to take control input key and updates the object's internal state.

```csharp
// Obtain an instance of MissionSpectatorControlVM from the subsystem API first
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.SetTakeControlInputKey(gameKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.RefreshValues();
```

## See Also

- [Area Index](../)