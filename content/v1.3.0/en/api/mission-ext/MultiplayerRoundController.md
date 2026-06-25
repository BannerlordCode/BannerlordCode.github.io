---
title: "MultiplayerRoundController"
description: "Auto-generated class reference for MultiplayerRoundController."
---
# MultiplayerRoundController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerRoundController : MissionNetwork, IRoundComponent, IMissionBehavior`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerRoundController.cs`

## Overview

`MultiplayerRoundController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `MultiplayerRoundController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RoundCount` | `public int RoundCount { get; set; }` |
| `RoundWinner` | `public BattleSideEnum RoundWinner { get; set; }` |
| `RoundEndReason` | `public RoundEndReason RoundEndReason { get; set; }` |
| `IsMatchEnding` | `public bool IsMatchEnding { get; }` |
| `LastRoundEndRemainingTime` | `public float LastRoundEndRemainingTime { get; }` |
| `RemainingRoundTime` | `public float RemainingRoundTime { get; }` |
| `CurrentRoundState` | `public MultiplayerRoundState CurrentRoundState { get; }` |
| `IsRoundInProgress` | `public bool IsRoundInProgress { get; }` |

## Key Methods

### EnableEquipmentUpdate
`public void EnableEquipmentUpdate()`

**Purpose:** Executes the EnableEquipmentUpdate logic.

```csharp
// Obtain an instance of MultiplayerRoundController from the subsystem API first
MultiplayerRoundController multiplayerRoundController = ...;
multiplayerRoundController.EnableEquipmentUpdate();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MultiplayerRoundController from the subsystem API first
MultiplayerRoundController multiplayerRoundController = ...;
multiplayerRoundController.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MultiplayerRoundController from the subsystem API first
MultiplayerRoundController multiplayerRoundController = ...;
multiplayerRoundController.OnRemoveBehavior();
```

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**Purpose:** Invoked when the pre display mission tick event is raised.

```csharp
// Obtain an instance of MultiplayerRoundController from the subsystem API first
MultiplayerRoundController multiplayerRoundController = ...;
multiplayerRoundController.OnPreDisplayMissionTick(0);
```

### HandleClientEventCultureSelect
`public bool HandleClientEventCultureSelect(NetworkCommunicator peer, CultureVoteClient message)`

**Purpose:** Executes the response logic associated with client event culture select.

```csharp
// Obtain an instance of MultiplayerRoundController from the subsystem API first
MultiplayerRoundController multiplayerRoundController = ...;
var result = multiplayerRoundController.HandleClientEventCultureSelect(peer, message);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<MultiplayerRoundController>();
```

## See Also

- [Area Index](../)