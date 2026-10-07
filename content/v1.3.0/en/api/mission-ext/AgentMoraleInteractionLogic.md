---
title: "AgentMoraleInteractionLogic"
description: "Auto-generated class reference for AgentMoraleInteractionLogic."
---
# AgentMoraleInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentMoraleInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AgentMoraleInteractionLogic.cs`

## Overview

The mission logic that makes morale contagious around a death or a rout. It listens for two events — `OnAgentRemoved` (`AgentMoraleInteractionLogic.cs:19`) and `OnAgentFleeing` (`AgentMoraleInteractionLogic.cs:39`) — asks the `BattleMoraleModel` how much morale is at stake on each side, and then applies the effect to a **random sample of at most ten agents per side** within a 4-unit radius (`AgentMoraleInteractionLogic.cs:179`). It holds no rules of its own beyond who gets picked; every magnitude comes from `BattleMoraleModel`.

## Mental Model

Read the two events as the same funnel. Both bail out unless the affected agent is a living human (`AgentMoraleInteractionLogic.cs:21`, `AgentMoraleInteractionLogic.cs:41`), both ask the model for a `(loss, gain)` pair (`AgentMoraleInteractionLogic.cs:25`, `AgentMoraleInteractionLogic.cs:45`), and both call the same private `ApplyMoraleEffectOnAgentIncapacitated` with the hardcoded radius `4f` (`AgentMoraleInteractionLogic.cs:34`, `AgentMoraleInteractionLogic.cs:50`). Inside that method the selection is deliberately *bounded and randomised*: nearby allies are drawn through a fast random selector up to ten (`AgentMoraleInteractionLogic.cs:70`), topped up from the dead agent's own formation if fewer than ten were found (`AgentMoraleInteractionLogic.cs:71`-`AgentMoraleInteractionLogic.cs:74`), and the winner's side is seeded with the affector itself if it qualifies (`AgentMoraleInteractionLogic.cs:75`-`AgentMoraleInteractionLogic.cs:78`). The signature has `AgentState` and `KillingBlow` parameters, but this class only passes them through — the decision was already made upstream.

## How to use

**Getting one.** Add it to a mission's logic list; it has a parameterless constructor that just allocates the two scratch `MBList<Agent>` caches (`AgentMoraleInteractionLogic.cs:12`-`AgentMoraleInteractionLogic.cs:16`). To change the magnitudes, replace `BattleMoraleModel`; to change *who* is affected, subclass this logic.

**Typical use.**

```csharp
// The model supplies magnitudes; this logic only picks who feels them.
BattleMoraleModel model = MissionGameModels.Current.BattleMoraleModel;

float loss, gain;
ValueTuple<float, float> pair = model.CalculateMaxMoraleChangeDueToAgentIncapacitated(
    affectedAgent, AgentState.Killed, affectorAgent, killingBlow);   // BattleMoraleModel.cs:16
loss = pair.Item1;   // applied NEGATED, at AgentMoraleInteractionLogic.cs:107
gain = pair.Item2;   // applied as-is,  at AgentMoraleInteractionLogic.cs:112

// Bounded application - at most ten agents per side, within 4 units.
foreach (Agent witness in nearbyAllies)
{
    witness.ChangeMorale(-model.CalculateMoraleChangeToCharacter(witness, loss));
}
```

**Watch out.** The loss side is applied **negated** — `-MissionGameModels.Current.BattleMoraleModel.CalculateMoraleChangeToCharacter(...)` (`AgentMoraleInteractionLogic.cs:107`) — while the gain side is applied unswapped (`AgentMoraleInteractionLogic.cs:112`). That means `CalculateMoraleChangeToCharacter` is contractually a *magnitude*, not a signed delta. A mod that returns an already-negative value for a character who has just lost a comrade has it flipped twice and the affected side ends up **gaining** morale when someone dies, with no exception thrown. Second, all six `private const` fields in this file are dead (`AgentMoraleInteractionLogic.cs:176`-`AgentMoraleInteractionLogic.cs:191`): every call site uses an inline literal instead — `4f` at `AgentMoraleInteractionLogic.cs:34` rather than `MoraleEffectRadius`, `10` at `AgentMoraleInteractionLogic.cs:70` rather than `MaxNumAgentsToLoseMorale`, `0.7f` at `AgentMoraleInteractionLogic.cs:52` rather than `DebacleVoiceChance`. Editing the constants to retune the effect changes nothing and the compiler stays silent.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of AgentMoraleInteractionLogic from the subsystem API first
AgentMoraleInteractionLogic agentMoraleInteractionLogic = ...;
agentMoraleInteractionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**Purpose:** Invoked when the agent fleeing event is raised.

```csharp
// Obtain an instance of AgentMoraleInteractionLogic from the subsystem API first
AgentMoraleInteractionLogic agentMoraleInteractionLogic = ...;
agentMoraleInteractionLogic.OnAgentFleeing(affectedAgent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentMoraleInteractionLogic>();
```

## See Also

- [Area Index](../)
- [BattleMoraleModel](../BattleMoraleModel)
- [Agent](../../mission/Agent)