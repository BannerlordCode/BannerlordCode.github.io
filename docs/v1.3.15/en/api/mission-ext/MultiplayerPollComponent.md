<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPollComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPollComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPollComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs`

## Overview

`MultiplayerPollComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MultiplayerPollComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `PollType` | `public MultiplayerPollComponent.MultiplayerPoll.Type PollType { get; }` |
| `ParticipantsToVote` | `public List<NetworkCommunicator> ParticipantsToVote { get { return this._participantsToVote; }` |
| `TargetPeer` | `public NetworkCommunicator TargetPeer { get; }` |
| `TargetPeer` | `public NetworkCommunicator TargetPeer { get; }` |
| `GameType` | `public string GameType { get; }` |
| `MapName` | `public string MapName { get; }` |

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### Vote
```csharp
public void Vote(bool accepted)
```

### RequestKickPlayerPoll
```csharp
public void RequestKickPlayerPoll(NetworkCommunicator peer, bool banPlayer)
```

### IsCancelled
```csharp
public virtual bool IsCancelled()
```

### GetPollProgressReceivers
```csharp
public virtual List<NetworkCommunicator> GetPollProgressReceivers()
```

### Tick
```csharp
public void Tick()
```

### Close
```csharp
public void Close()
```

### Cancel
```csharp
public void Cancel()
```

### ApplyVote
```csharp
public bool ApplyVote(NetworkCommunicator peer, bool accepted)
```

### GotEnoughAcceptVotesToEnd
```csharp
public bool GotEnoughAcceptVotesToEnd()
```

### IsCancelled
```csharp
public override bool IsCancelled()
```

### GetPollProgressReceivers
```csharp
public override List<NetworkCommunicator> GetPollProgressReceivers()
```

## Usage Example

```csharp
// Typical usage of MultiplayerPollComponent (Component)
agent.GetComponent<MultiplayerPollComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)