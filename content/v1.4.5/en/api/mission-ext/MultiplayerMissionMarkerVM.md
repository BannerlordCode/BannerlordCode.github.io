---
title: "MultiplayerMissionMarkerVM"
description: "Auto-generated class reference for MultiplayerMissionMarkerVM."
---
# MultiplayerMissionMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker/MultiplayerMissionMarkerVM.cs`

## Overview

`MultiplayerMissionMarkerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FlagTargets` | `public MBBindingList<MissionFlagMarkerTargetVM> FlagTargets { get; set; }` |
| `PeerTargets` | `public MBBindingList<MissionPeerMarkerTargetVM> PeerTargets { get; set; }` |
| `SiegeEngineTargets` | `public MBBindingList<MissionSiegeEngineMarkerTargetVM> SiegeEngineTargets { get; set; }` |
| `AlwaysVisibleTargets` | `public MBBindingList<MissionAlwaysVisibleMarkerTargetVM> AlwaysVisibleTargets { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## Key Methods

### Compare
`public int Compare(MissionMarkerTargetVM x, MissionMarkerTargetVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MultiplayerMissionMarkerVM from the subsystem API first
MultiplayerMissionMarkerVM multiplayerMissionMarkerVM = ...;
var result = multiplayerMissionMarkerVM.Compare(x, y);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MultiplayerMissionMarkerVM from the subsystem API first
MultiplayerMissionMarkerVM multiplayerMissionMarkerVM = ...;
multiplayerMissionMarkerVM.OnFinalize();
```

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MultiplayerMissionMarkerVM from the subsystem API first
MultiplayerMissionMarkerVM multiplayerMissionMarkerVM = ...;
multiplayerMissionMarkerVM.Tick(0);
```

### OnRemoveAlwaysVisibleMarker
`public void OnRemoveAlwaysVisibleMarker(MissionAlwaysVisibleMarkerTargetVM marker)`

**Purpose:** **Purpose:** Invoked when the remove always visible marker event is raised.

```csharp
// Obtain an instance of MultiplayerMissionMarkerVM from the subsystem API first
MultiplayerMissionMarkerVM multiplayerMissionMarkerVM = ...;
multiplayerMissionMarkerVM.OnRemoveAlwaysVisibleMarker(marker);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerMissionMarkerVM multiplayerMissionMarkerVM = ...;
multiplayerMissionMarkerVM.Compare(x, y);
```

## See Also

- [Area Index](../)