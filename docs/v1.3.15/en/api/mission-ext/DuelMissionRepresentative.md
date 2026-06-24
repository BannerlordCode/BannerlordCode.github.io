<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DuelMissionRepresentative`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DuelMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs`

## Overview

`DuelMissionRepresentative` lives in `TaleWorlds.MountAndBlade.MissionRepresentatives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.MissionRepresentatives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Bounty` | `public int Bounty { get; }` |
| `Score` | `public int Score { get; }` |
| `NumberOfWins` | `public int NumberOfWins { get; }` |

## Key Methods

### Initialize
`public override void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### AddRemoveMessageHandlers
`public void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)`

**Purpose:** Adds `remove message handlers` to the current collection or state.

### OnInteraction
`public void OnInteraction()`

**Purpose:** Called when the `interaction` event is raised.

### DuelRequested
`public void DuelRequested(Agent requesterAgent, TroopType selectedAreaTroopType)`

**Purpose:** Handles logic related to `duel requested`.

### CheckHasRequestFromAndRemoveRequestIfNeeded
`public bool CheckHasRequestFromAndRemoveRequestIfNeeded(MissionPeer requestOwner)`

**Purpose:** Handles logic related to `check has request from and remove request if needed`.

### OnDuelPreparation
`public void OnDuelPreparation(MissionPeer requesterPeer, MissionPeer requesteePeer)`

**Purpose:** Called when the `duel preparation` event is raised.

### OnObjectFocused
`public void OnObjectFocused(IFocusable focusedObject)`

**Purpose:** Called when the `object focused` event is raised.

### OnObjectFocusLost
`public void OnObjectFocusLost()`

**Purpose:** Called when the `object focus lost` event is raised.

### OnAgentSpawned
`public override void OnAgentSpawned()`

**Purpose:** Called when the `agent spawned` event is raised.

### ResetBountyAndNumberOfWins
`public void ResetBountyAndNumberOfWins()`

**Purpose:** Resets `bounty and number of wins` to its initial state.

### OnDuelWon
`public void OnDuelWon(float gainedScore)`

**Purpose:** Called when the `duel won` event is raised.

## Usage Example

```csharp
var value = new DuelMissionRepresentative();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)