<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGameNotificationsComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerGameNotificationsComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameNotificationsComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs`

## Overview

`MultiplayerGameNotificationsComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MultiplayerGameNotificationsComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationCount` | `public static int NotificationCount { get { return 18; }` |

## Key Methods

### WarmupEnding
```csharp
public void WarmupEnding()
```

### GameOver
```csharp
public void GameOver(Team winnerTeam)
```

### PreparationStarted
```csharp
public void PreparationStarted()
```

### FlagsXRemoved
```csharp
public void FlagsXRemoved(FlagCapturePoint removedFlag)
```

### FlagXRemaining
```csharp
public void FlagXRemaining(FlagCapturePoint remainingFlag)
```

### FlagsWillBeRemovedInXSeconds
```csharp
public void FlagsWillBeRemovedInXSeconds(int timeLeft)
```

### FlagXCapturedByTeamX
```csharp
public void FlagXCapturedByTeamX(SynchedMissionObject flag, Team capturingTeam)
```

### GoldCarriedFromPreviousRound
```csharp
public void GoldCarriedFromPreviousRound(int carriedGoldAmount, NetworkCommunicator syncToPeer)
```

### PlayerIsInactive
```csharp
public void PlayerIsInactive(NetworkCommunicator peer)
```

### FormationAutoFollowEnforced
```csharp
public void FormationAutoFollowEnforced(NetworkCommunicator peer)
```

### PollRejected
```csharp
public void PollRejected(MultiplayerPollRejectReason reason)
```

### PlayerKicked
```csharp
public void PlayerKicked(NetworkCommunicator kickedPeer)
```

## Usage Example

```csharp
// Typical usage of MultiplayerGameNotificationsComponent (Component)
agent.GetComponent<MultiplayerGameNotificationsComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)