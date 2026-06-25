---
title: "MissionDuelMarkersVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionDuelMarkersVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionDuelMarkersVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDuelMarkersVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MissionDuelMarkersVM.cs`

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

**Purpose:** Handles logic related to `compare`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateScreenCenter
`public void UpdateScreenCenter()`

**Purpose:** Updates the state or data of `screen center`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### RegisterEvents
`public void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### UnregisterEvents
`public void UnregisterEvents()`

**Purpose:** Handles logic related to `unregister events`.

### RefreshPeerEquipments
`public void RefreshPeerEquipments()`

**Purpose:** Refreshes the display or cache of `peer equipments`.

### OnAgentSpawnedWithoutDuel
`public void OnAgentSpawnedWithoutDuel()`

**Purpose:** Called when the `agent spawned without duel` event is raised.

### OnAgentBuiltForTheFirstTime
`public void OnAgentBuiltForTheFirstTime()`

**Purpose:** Called when the `agent built for the first time` event is raised.

### OnDuelStarted
`public void OnDuelStarted(MissionPeer firstPeer, MissionPeer secondPeer)`

**Purpose:** Called when the `duel started` event is raised.

### SetMarkerOfPeerEnabled
`public void SetMarkerOfPeerEnabled(MissionPeer peer, bool isEnabled)`

**Purpose:** Sets the value or state of `marker of peer enabled`.

### OnPlayerPreferredZoneChanged
`public void OnPlayerPreferredZoneChanged(int playerPrefferedArenaType)`

**Purpose:** Called when the `player preferred zone changed` event is raised.

### OnFocusGained
`public void OnFocusGained()`

**Purpose:** Called when the `focus gained` event is raised.

### OnFocusLost
`public void OnFocusLost()`

**Purpose:** Called when the `focus lost` event is raised.

### OnPeerEquipmentRefreshed
`public void OnPeerEquipmentRefreshed(MissionPeer peer)`

**Purpose:** Called when the `peer equipment refreshed` event is raised.

## Usage Example

```csharp
var value = new MissionDuelMarkersVM();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)