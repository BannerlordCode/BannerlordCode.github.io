---
title: "MultiplayerRoundController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerRoundController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerRoundController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerRoundController : MissionNetwork, IRoundComponent, IMissionBehavior`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerRoundController.cs`

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
| `CurrentRoundState` | `public MultiplayerRoundState CurrentRoundState { get; }` |

## Key Methods

### EnableEquipmentUpdate
`public void EnableEquipmentUpdate()`

**Purpose:** Handles logic related to `enable equipment update`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**Purpose:** Called when the `pre display mission tick` event is raised.

### HandleClientEventCultureSelect
`public bool HandleClientEventCultureSelect(NetworkCommunicator peer, CultureVoteClient message)`

**Purpose:** Handles the `client event culture select` event or callback.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<MultiplayerRoundController>();
```

## See Also

- [Complete Class Catalog](../catalog)