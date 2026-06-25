---
title: "MissionDuelMarkersVM"
description: "Auto-generated class reference for MissionDuelMarkersVM."
---
# MissionDuelMarkersVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDuelMarkersVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MissionDuelMarkersVM.cs`

## Overview

`MissionDuelMarkersVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Targets` | `public MBBindingList<MissionDuelPeerMarkerVM> Targets { get; set; }` |
| `Landmarks` | `public MBBindingList<MissionDuelLandmarkMarkerVM> Landmarks { get; set; }` |

## Key Methods

### Compare
`public int Compare(MissionDuelPeerMarkerVM x, MissionDuelPeerMarkerVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
var result = missionDuelMarkersVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.RefreshValues();
```

### UpdateScreenCenter
`public void UpdateScreenCenter()`

**Purpose:** Recalculates and stores the latest representation of `screen center`.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.UpdateScreenCenter();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.Tick(0);
```

### RegisterEvents
`public void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.RegisterEvents();
```

### UnregisterEvents
`public void UnregisterEvents()`

**Purpose:** Unregisters `events` from the current system.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.UnregisterEvents();
```

### RefreshPeerEquipments
`public void RefreshPeerEquipments()`

**Purpose:** Keeps the display or cache of `peer equipments` in sync with the underlying state.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.RefreshPeerEquipments();
```

### OnAgentSpawnedWithoutDuel
`public void OnAgentSpawnedWithoutDuel()`

**Purpose:** Invoked when the `agent spawned without duel` event is raised.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnAgentSpawnedWithoutDuel();
```

### OnAgentBuiltForTheFirstTime
`public void OnAgentBuiltForTheFirstTime()`

**Purpose:** Invoked when the `agent built for the first time` event is raised.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnAgentBuiltForTheFirstTime();
```

### OnDuelStarted
`public void OnDuelStarted(MissionPeer firstPeer, MissionPeer secondPeer)`

**Purpose:** Invoked when the `duel started` event is raised.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnDuelStarted(firstPeer, secondPeer);
```

### SetMarkerOfPeerEnabled
`public void SetMarkerOfPeerEnabled(MissionPeer peer, bool isEnabled)`

**Purpose:** Assigns a new value to `marker of peer enabled` and updates the object's internal state.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.SetMarkerOfPeerEnabled(peer, false);
```

### OnPlayerPreferredZoneChanged
`public void OnPlayerPreferredZoneChanged(int playerPrefferedArenaType)`

**Purpose:** Invoked when the `player preferred zone changed` event is raised.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnPlayerPreferredZoneChanged(0);
```

### OnFocusGained
`public void OnFocusGained()`

**Purpose:** Invoked when the `focus gained` event is raised.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnFocusGained();
```

### OnFocusLost
`public void OnFocusLost()`

**Purpose:** Invoked when the `focus lost` event is raised.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnFocusLost();
```

### OnPeerEquipmentRefreshed
`public void OnPeerEquipmentRefreshed(MissionPeer peer)`

**Purpose:** Invoked when the `peer equipment refreshed` event is raised.

```csharp
// Obtain an instance of MissionDuelMarkersVM from the subsystem API first
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.OnPeerEquipmentRefreshed(peer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionDuelMarkersVM missionDuelMarkersVM = ...;
missionDuelMarkersVM.Compare(x, y);
```

## See Also

- [Area Index](../)