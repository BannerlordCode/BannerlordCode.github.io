<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPollComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### Vote
`public void Vote(bool accepted)`

**Purpose:** Handles logic related to `vote`.

### RequestKickPlayerPoll
`public void RequestKickPlayerPoll(NetworkCommunicator peer, bool banPlayer)`

**Purpose:** Handles logic related to `request kick player poll`.

### IsCancelled
`public virtual bool IsCancelled()`

**Purpose:** Handles logic related to `is cancelled`.

### GetPollProgressReceivers
`public virtual List<NetworkCommunicator> GetPollProgressReceivers()`

**Purpose:** Gets the current value of `poll progress receivers`.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### Close
`public void Close()`

**Purpose:** Handles logic related to `close`.

### Cancel
`public void Cancel()`

**Purpose:** Checks whether the current object can `cel`.

### ApplyVote
`public bool ApplyVote(NetworkCommunicator peer, bool accepted)`

**Purpose:** Applies `vote` to the current object.

### GotEnoughAcceptVotesToEnd
`public bool GotEnoughAcceptVotesToEnd()`

**Purpose:** Handles logic related to `got enough accept votes to end`.

### IsCancelled
`public override bool IsCancelled()`

**Purpose:** Handles logic related to `is cancelled`.

### GetPollProgressReceivers
`public override List<NetworkCommunicator> GetPollProgressReceivers()`

**Purpose:** Gets the current value of `poll progress receivers`.

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerPollComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)