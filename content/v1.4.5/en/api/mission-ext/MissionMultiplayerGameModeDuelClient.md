---
title: "MissionMultiplayerGameModeDuelClient"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerGameModeDuelClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeDuelClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerGameModeDuelClient : MissionMultiplayerGameModeBaseClient`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerGameModeDuelClient.cs`

## Overview

`MissionMultiplayerGameModeDuelClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MyRepresentative` | `public DuelMissionRepresentative MyRepresentative { get; }` |

## Key Methods

### GetGoldAmount
`public override int GetGoldAmount()`

**Purpose:** Gets the current value of `gold amount`.

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**Purpose:** Called when the `gold amount changed for representative` event is raised.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### CanRequestCultureChange
`public override bool CanRequestCultureChange()`

**Purpose:** Checks whether the current object can `request culture change`.

### CanRequestTroopChange
`public override bool CanRequestTroopChange()`

**Purpose:** Checks whether the current object can `request troop change`.

## Usage Example

```csharp
var value = new MissionMultiplayerGameModeDuelClient();
value.GetGoldAmount();
```

## See Also

- [Complete Class Catalog](../catalog)