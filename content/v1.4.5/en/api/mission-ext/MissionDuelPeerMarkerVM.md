---
title: "MissionDuelPeerMarkerVM"
description: "Auto-generated class reference for MissionDuelPeerMarkerVM."
---
# MissionDuelPeerMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDuelPeerMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MissionDuelPeerMarkerVM.cs`

## Overview

`MissionDuelPeerMarkerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetPeer` | `public MissionPeer TargetPeer { get; }` |
| `Distance` | `public float Distance { get; }` |
| `IsInDuel` | `public bool IsInDuel { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `ShouldShowInformation` | `public bool ShouldShowInformation { get; set; }` |
| `IsAgentInScreenBoundaries` | `public bool IsAgentInScreenBoundaries { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `HasDuelRequestForPlayer` | `public bool HasDuelRequestForPlayer { get; set; }` |
| `HasSentDuelRequest` | `public bool HasSentDuelRequest { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ActionDescriptionText` | `public string ActionDescriptionText { get; set; }` |
| `Bounty` | `public int Bounty { get; set; }` |
| `PreferredArenaType` | `public int PreferredArenaType { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `CompassElement` | `public MPTeammateCompassTargetVM CompassElement { get; set; }` |
| `SelectedPerks` | `public MBBindingList<MPPerkVM> SelectedPerks { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionDuelPeerMarkerVM from the subsystem API first
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.RefreshValues();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MissionDuelPeerMarkerVM from the subsystem API first
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.OnTick(0);
```

### UpdateScreenPosition
`public void UpdateScreenPosition(Camera missionCamera)`

**Purpose:** Recalculates and stores the latest representation of screen position.

```csharp
// Obtain an instance of MissionDuelPeerMarkerVM from the subsystem API first
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.UpdateScreenPosition(missionCamera);
```

### UpdateBounty
`public void UpdateBounty()`

**Purpose:** Recalculates and stores the latest representation of bounty.

```csharp
// Obtain an instance of MissionDuelPeerMarkerVM from the subsystem API first
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.UpdateBounty();
```

### OnDuelStarted
`public void OnDuelStarted()`

**Purpose:** Invoked when the duel started event is raised.

```csharp
// Obtain an instance of MissionDuelPeerMarkerVM from the subsystem API first
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.OnDuelStarted();
```

### OnDuelEnded
`public void OnDuelEnded()`

**Purpose:** Invoked when the duel ended event is raised.

```csharp
// Obtain an instance of MissionDuelPeerMarkerVM from the subsystem API first
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.OnDuelEnded();
```

### UpdateCurentDuelStatus
`public void UpdateCurentDuelStatus(bool isInDuel)`

**Purpose:** Recalculates and stores the latest representation of curent duel status.

```csharp
// Obtain an instance of MissionDuelPeerMarkerVM from the subsystem API first
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.UpdateCurentDuelStatus(false);
```

### RefreshPerkSelection
`public void RefreshPerkSelection()`

**Purpose:** Keeps the display or cache of perk selection in sync with the underlying state.

```csharp
// Obtain an instance of MissionDuelPeerMarkerVM from the subsystem API first
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.RefreshPerkSelection();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionDuelPeerMarkerVM missionDuelPeerMarkerVM = ...;
missionDuelPeerMarkerVM.RefreshValues();
```

## See Also

- [Area Index](../)