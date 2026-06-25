---
title: "MultiplayerGameNotificationsComponent"
description: "Auto-generated class reference for MultiplayerGameNotificationsComponent."
---
# MultiplayerGameNotificationsComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameNotificationsComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs`

## Overview

`MultiplayerGameNotificationsComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerGameNotificationsComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### WarmupEnding
`public void WarmupEnding()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.WarmupEnding();
```

### GameOver
`public void GameOver(Team winnerTeam)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.GameOver(winnerTeam);
```

### PreparationStarted
`public void PreparationStarted()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PreparationStarted();
```

### FlagsXRemoved
`public void FlagsXRemoved(FlagCapturePoint removedFlag)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagsXRemoved(removedFlag);
```

### FlagXRemaining
`public void FlagXRemaining(FlagCapturePoint remainingFlag)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagXRemaining(remainingFlag);
```

### FlagsWillBeRemovedInXSeconds
`public void FlagsWillBeRemovedInXSeconds(int timeLeft)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagsWillBeRemovedInXSeconds(0);
```

### FlagXCapturedByTeamX
`public void FlagXCapturedByTeamX(SynchedMissionObject flag, Team capturingTeam)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagXCapturedByTeamX(flag, capturingTeam);
```

### GoldCarriedFromPreviousRound
`public void GoldCarriedFromPreviousRound(int carriedGoldAmount, NetworkCommunicator syncToPeer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.GoldCarriedFromPreviousRound(0, syncToPeer);
```

### PlayerIsInactive
`public void PlayerIsInactive(NetworkCommunicator peer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PlayerIsInactive(peer);
```

### FormationAutoFollowEnforced
`public void FormationAutoFollowEnforced(NetworkCommunicator peer)`

**Purpose:** Formats `ion auto follow enforced` into a string suitable for display or storage.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FormationAutoFollowEnforced(peer);
```

### PollRejected
`public void PollRejected(MultiplayerPollRejectReason reason)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PollRejected(reason);
```

### PlayerKicked
`public void PlayerKicked(NetworkCommunicator kickedPeer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PlayerKicked(kickedPeer);
```

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerGameNotificationsComponent>();
```

## See Also

- [Area Index](../)