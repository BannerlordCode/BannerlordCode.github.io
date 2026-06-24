<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPollProgressVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerPollProgressVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPollProgressVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerPollProgressVM.cs`

## Overview

`MultiplayerPollProgressVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasOngoingPoll` | `public bool HasOngoingPoll { get; set; }` |
| `AreKeysEnabled` | `public bool AreKeysEnabled { get; set; }` |
| `VotesAccepted` | `public int VotesAccepted { get; set; }` |
| `VotesRejected` | `public int VotesRejected { get; set; }` |
| `PollInitiatorName` | `public string PollInitiatorName { get; set; }` |
| `PollDescription` | `public string PollDescription { get; set; }` |
| `TargetPlayer` | `public MPPlayerVM TargetPlayer { get; set; }` |
| `Keys` | `public MBBindingList<InputKeyItemVM> Keys { get; set; }` |

## Key Methods

### OnKickPollOpened
`public void OnKickPollOpened(MissionPeer initiatorPeer, MissionPeer targetPeer, bool isBanRequested)`

**Purpose:** Called when the `kick poll opened` event is raised.

### OnPollUpdated
`public void OnPollUpdated(int votesAccepted, int votesRejected)`

**Purpose:** Called when the `poll updated` event is raised.

### OnPollClosed
`public void OnPollClosed()`

**Purpose:** Called when the `poll closed` event is raised.

### OnPollOptionPicked
`public void OnPollOptionPicked()`

**Purpose:** Called when the `poll option picked` event is raised.

### AddKey
`public void AddKey(GameKey key)`

**Purpose:** Adds `key` to the current collection or state.

## Usage Example

```csharp
var value = new MultiplayerPollProgressVM();
value.OnKickPollOpened(initiatorPeer, targetPeer, false);
```

## See Also

- [Complete Class Catalog](../catalog)