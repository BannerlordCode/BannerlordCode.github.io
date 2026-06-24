<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGameNotificationsComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerGameNotificationsComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameNotificationsComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs`

## Overview

`MultiplayerGameNotificationsComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerGameNotificationsComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationCount` | `public static int NotificationCount { get; }` |

## Key Methods

### WarmupEnding
`public void WarmupEnding()`

**Purpose:** Handles logic related to `warmup ending`.

### GameOver
`public void GameOver(Team winnerTeam)`

**Purpose:** Handles logic related to `game over`.

### PreparationStarted
`public void PreparationStarted()`

**Purpose:** Handles logic related to `preparation started`.

### FlagsXRemoved
`public void FlagsXRemoved(FlagCapturePoint removedFlag)`

**Purpose:** Handles logic related to `flags x removed`.

### FlagXRemaining
`public void FlagXRemaining(FlagCapturePoint remainingFlag)`

**Purpose:** Handles logic related to `flag x remaining`.

### FlagsWillBeRemovedInXSeconds
`public void FlagsWillBeRemovedInXSeconds(int timeLeft)`

**Purpose:** Handles logic related to `flags will be removed in x seconds`.

### FlagXCapturedByTeamX
`public void FlagXCapturedByTeamX(SynchedMissionObject flag, Team capturingTeam)`

**Purpose:** Handles logic related to `flag x captured by team x`.

### GoldCarriedFromPreviousRound
`public void GoldCarriedFromPreviousRound(int carriedGoldAmount, NetworkCommunicator syncToPeer)`

**Purpose:** Handles logic related to `gold carried from previous round`.

### PlayerIsInactive
`public void PlayerIsInactive(NetworkCommunicator peer)`

**Purpose:** Handles logic related to `player is inactive`.

### FormationAutoFollowEnforced
`public void FormationAutoFollowEnforced(NetworkCommunicator peer)`

**Purpose:** Handles logic related to `formation auto follow enforced`.

### PollRejected
`public void PollRejected(MultiplayerPollRejectReason reason)`

**Purpose:** Handles logic related to `poll rejected`.

### PlayerKicked
`public void PlayerKicked(NetworkCommunicator kickedPeer)`

**Purpose:** Handles logic related to `player kicked`.

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerGameNotificationsComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)