---
title: "DuelMatchVM"
description: "Auto-generated class reference for DuelMatchVM."
---
# DuelMatchVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelMatchVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/DuelMatchVM.cs`

## Overview

`DuelMatchVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FirstPlayerPeer` | `public MissionPeer FirstPlayerPeer { get; }` |
| `SecondPlayerPeer` | `public MissionPeer SecondPlayerPeer { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsPreparing` | `public bool IsPreparing { get; set; }` |
| `CountdownMessage` | `public string CountdownMessage { get; set; }` |
| `Score` | `public string Score { get; set; }` |
| `ArenaType` | `public int ArenaType { get; set; }` |
| `FirstPlayerScore` | `public int FirstPlayerScore { get; set; }` |
| `SecondPlayerScore` | `public int SecondPlayerScore { get; set; }` |
| `FirstPlayer` | `public MPPlayerVM FirstPlayer { get; set; }` |
| `SecondPlayer` | `public MPPlayerVM SecondPlayer { get; set; }` |

## Key Methods

### OnDuelPrepStarted
`public void OnDuelPrepStarted(MissionPeer opponentPeer, int prepDuration)`

**Purpose:** Invoked when the `duel prep started` event is raised.

```csharp
// Obtain an instance of DuelMatchVM from the subsystem API first
DuelMatchVM duelMatchVM = ...;
duelMatchVM.OnDuelPrepStarted(opponentPeer, 0);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of DuelMatchVM from the subsystem API first
DuelMatchVM duelMatchVM = ...;
duelMatchVM.Tick(0);
```

### OnDuelStarted
`public void OnDuelStarted(MissionPeer firstPeer, MissionPeer secondPeer, int arenaType)`

**Purpose:** Invoked when the `duel started` event is raised.

```csharp
// Obtain an instance of DuelMatchVM from the subsystem API first
DuelMatchVM duelMatchVM = ...;
duelMatchVM.OnDuelStarted(firstPeer, secondPeer, 0);
```

### OnDuelEnded
`public void OnDuelEnded()`

**Purpose:** Invoked when the `duel ended` event is raised.

```csharp
// Obtain an instance of DuelMatchVM from the subsystem API first
DuelMatchVM duelMatchVM = ...;
duelMatchVM.OnDuelEnded();
```

### OnPeerScored
`public void OnPeerScored(MissionPeer peer)`

**Purpose:** Invoked when the `peer scored` event is raised.

```csharp
// Obtain an instance of DuelMatchVM from the subsystem API first
DuelMatchVM duelMatchVM = ...;
duelMatchVM.OnPeerScored(peer);
```

### RefreshNames
`public void RefreshNames(bool changeGenericNames = false)`

**Purpose:** Keeps the display or cache of `names` in sync with the underlying state.

```csharp
// Obtain an instance of DuelMatchVM from the subsystem API first
DuelMatchVM duelMatchVM = ...;
duelMatchVM.RefreshNames(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DuelMatchVM duelMatchVM = ...;
duelMatchVM.OnDuelPrepStarted(opponentPeer, 0);
```

## See Also

- [Area Index](../)