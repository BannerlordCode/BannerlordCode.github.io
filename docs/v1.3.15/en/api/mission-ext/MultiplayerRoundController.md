<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerRoundController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerRoundController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerRoundController : MissionNetwork, IRoundComponent, IMissionBehavior`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerRoundController.cs`

## Overview

`MultiplayerRoundController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Properties

| Name | Signature |
|------|-----------|
| `RoundCount` | `public int RoundCount { get { return this._roundCount; }` |
| `RoundWinner` | `public BattleSideEnum RoundWinner { get { return this._roundWinner; }` |
| `RoundEndReason` | `public RoundEndReason RoundEndReason { get { return this._roundEndReason; }` |
| `RemainingRoundTime` | `public float RemainingRoundTime { get { return this._gameModeServer.TimerComponent.GetRemainingTime(false); }` |
| `IsRoundInProgress` | `public bool IsRoundInProgress { get { return this.CurrentRoundState == MultiplayerRoundState.InProgress; }` |

## Key Methods

### EnableEquipmentUpdate
```csharp
public void EnableEquipmentUpdate()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### OnPreDisplayMissionTick
```csharp
public override void OnPreDisplayMissionTick(float dt)
```

### HandleClientEventCultureSelect
```csharp
public bool HandleClientEventCultureSelect(NetworkCommunicator peer, CultureVoteClient message)
```

## Usage Example

```csharp
// Typical usage of MultiplayerRoundController (Controller)
Mission.Current.GetMissionBehavior<MultiplayerRoundController>();
```

## See Also

- [Complete Class Catalog](../catalog)