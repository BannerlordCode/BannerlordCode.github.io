---
title: "MultiplayerMissionMarkerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerMissionMarkerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMissionMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker/MultiplayerMissionMarkerVM.cs`

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

**Purpose:** Handles logic related to `compare`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnRemoveAlwaysVisibleMarker
`public void OnRemoveAlwaysVisibleMarker(MissionAlwaysVisibleMarkerTargetVM marker)`

**Purpose:** Called when the `remove always visible marker` event is raised.

## Usage Example

```csharp
var value = new MultiplayerMissionMarkerVM();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)