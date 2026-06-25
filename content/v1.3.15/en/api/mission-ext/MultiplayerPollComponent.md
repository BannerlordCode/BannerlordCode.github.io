---
title: "MultiplayerPollComponent"
description: "Auto-generated class reference for MultiplayerPollComponent."
---
# MultiplayerPollComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPollComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs`

## Overview

`MultiplayerPollComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerPollComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PollType` | `public MultiplayerPollComponent.MultiplayerPoll.Type PollType { get; }` |
| `IsOpen` | `public bool IsOpen { get; }` |
| `ParticipantsToVote` | `public List<NetworkCommunicator> ParticipantsToVote { get; }` |
| `TargetPeer` | `public NetworkCommunicator TargetPeer { get; }` |
| `TargetPeer` | `public NetworkCommunicator TargetPeer { get; }` |
| `GameType` | `public string GameType { get; }` |
| `MapName` | `public string MapName { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.OnMissionTick(0);
```

### Vote
`public void Vote(bool accepted)`

**Purpose:** Executes the Vote logic.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.Vote(false);
```

### RequestKickPlayerPoll
`public void RequestKickPlayerPoll(NetworkCommunicator peer, bool banPlayer)`

**Purpose:** Executes the RequestKickPlayerPoll logic.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.RequestKickPlayerPoll(peer, false);
```

### IsCancelled
`public virtual bool IsCancelled()`

**Purpose:** Determines whether the this instance is in the cancelled state or condition.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.IsCancelled();
```

### GetPollProgressReceivers
`public virtual List<NetworkCommunicator> GetPollProgressReceivers()`

**Purpose:** Reads and returns the poll progress receivers value held by the this instance.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.GetPollProgressReceivers();
```

### Tick
`public void Tick()`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.Tick();
```

### Close
`public void Close()`

**Purpose:** Closes the resource or UI represented by the this instance.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.Close();
```

### Cancel
`public void Cancel()`

**Purpose:** Checks whether the this instance meets the preconditions for cel.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.Cancel();
```

### ApplyVote
`public bool ApplyVote(NetworkCommunicator peer, bool accepted)`

**Purpose:** Applies the effect of vote to the this instance.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.ApplyVote(peer, false);
```

### GotEnoughAcceptVotesToEnd
`public bool GotEnoughAcceptVotesToEnd()`

**Purpose:** Executes the GotEnoughAcceptVotesToEnd logic.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.GotEnoughAcceptVotesToEnd();
```

### IsCancelled
`public override bool IsCancelled()`

**Purpose:** Determines whether the this instance is in the cancelled state or condition.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.IsCancelled();
```

### GetPollProgressReceivers
`public override List<NetworkCommunicator> GetPollProgressReceivers()`

**Purpose:** Reads and returns the poll progress receivers value held by the this instance.

```csharp
// Obtain an instance of MultiplayerPollComponent from the subsystem API first
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.GetPollProgressReceivers();
```

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerPollComponent>();
```

## See Also

- [Area Index](../)