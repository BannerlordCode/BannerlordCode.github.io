---
title: "MissionScoreboardPlayerVM"
description: "Auto-generated class reference for MissionScoreboardPlayerVM."
---
# MissionScoreboardPlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardPlayerVM : MPPlayerVM`
**Base:** `MPPlayerVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardPlayerVM.cs`

## Overview

`MissionScoreboardPlayerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; }` |
| `IsBot` | `public bool IsBot { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `IsTeammate` | `public bool IsTeammate { get; set; }` |
| `Ping` | `public int Ping { get; set; }` |
| `IsPlayer` | `public bool IsPlayer { get; set; }` |
| `IsVoiceMuted` | `public bool IsVoiceMuted { get; set; }` |
| `IsTextMuted` | `public bool IsTextMuted { get; set; }` |
| `Stats` | `public MBBindingList<MissionScoreboardStatItemVM> Stats { get; set; }` |
| `MVPBadges` | `public MBBindingList<MissionScoreboardMVPItemVM> MVPBadges { get; set; }` |

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionScoreboardPlayerVM from the subsystem API first
MissionScoreboardPlayerVM missionScoreboardPlayerVM = ...;
missionScoreboardPlayerVM.Tick(0);
```

### UpdateAttributes
`public void UpdateAttributes(string attributes, int score)`

**Purpose:** Recalculates and stores the latest representation of `attributes`.

```csharp
// Obtain an instance of MissionScoreboardPlayerVM from the subsystem API first
MissionScoreboardPlayerVM missionScoreboardPlayerVM = ...;
missionScoreboardPlayerVM.UpdateAttributes("example", 0);
```

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Runs the operation or workflow associated with `selection`.

```csharp
// Obtain an instance of MissionScoreboardPlayerVM from the subsystem API first
MissionScoreboardPlayerVM missionScoreboardPlayerVM = ...;
missionScoreboardPlayerVM.ExecuteSelection();
```

### UpdateIsMuted
`public void UpdateIsMuted()`

**Purpose:** Recalculates and stores the latest representation of `is muted`.

```csharp
// Obtain an instance of MissionScoreboardPlayerVM from the subsystem API first
MissionScoreboardPlayerVM missionScoreboardPlayerVM = ...;
missionScoreboardPlayerVM.UpdateIsMuted();
```

### SetMVPBadgeCount
`public void SetMVPBadgeCount(int badgeCount)`

**Purpose:** Assigns a new value to `m v p badge count` and updates the object's internal state.

```csharp
// Obtain an instance of MissionScoreboardPlayerVM from the subsystem API first
MissionScoreboardPlayerVM missionScoreboardPlayerVM = ...;
missionScoreboardPlayerVM.SetMVPBadgeCount(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionScoreboardPlayerVM missionScoreboardPlayerVM = ...;
missionScoreboardPlayerVM.Tick(0);
```

## See Also

- [Area Index](../)