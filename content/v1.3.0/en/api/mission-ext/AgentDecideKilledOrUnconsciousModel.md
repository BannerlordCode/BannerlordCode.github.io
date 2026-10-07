---
title: "AgentDecideKilledOrUnconsciousModel"
description: "Auto-generated class reference for AgentDecideKilledOrUnconsciousModel."
---
# AgentDecideKilledOrUnconsciousModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentDecideKilledOrUnconsciousModel : MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**Base:** `MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentDecideKilledOrUnconsciousModel.cs`

## Overview

The single decision point for "did that blow kill the target, or only knock it unconscious?" — a 13-line abstract `MBGameModel` with exactly one abstract method (`AgentDecideKilledOrUnconsciousModel.cs:10`). It is not a rule engine and holds no state; it is one question the mission asks and your model answers.

## Mental Model

The signature carries two answers, not one. `GetAgentStateProbability` returns the probability that the effected agent ends up dead, and simultaneously writes a *separate* probability through the `out useSurgeryProbability` parameter — whether the model wants surgery attempted on the survivor. The engine's call site takes both at once: `Mission.cs:4707` passes `out num` and uses the return value as `agentStateProbability`. So a model that returns a sensible kill probability but leaves `useSurgeryProbability` at zero disables surgery for that blow without changing fatality at all. The two are independent knobs that happen to travel in one call.

## How to use

**Getting one.** Subclass it and register the subclass as a `GameModel`; `MissionGameModels` binds the slot through the same backwards lookup every other model uses, so the last registration of this type wins. Read it with `MissionGameModels.Current.AgentDecideKilledOrUnconsciousModel` (`MissionGameModels.cs:39`).

**Typical use.**

```csharp
public sealed class MyModDeathModel : AgentDecideKilledOrUnconsciousModel
{
    // One abstract member (AgentDecideKilledOrUnconsciousModel.cs:10) - that is the whole contract.
    public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent,
                                                   DamageTypes damageType, WeaponFlags weaponFlags,
                                                   out float useSurgeryProbability)
    {
        useSurgeryProbability = 0.5f;                  // separate answer: attempt surgery?
        return effectedAgent.IsHero ? 0.25f : 1.0f;   // the return value: probability of death
    }
}

// Read back exactly as Mission.cs:4707 does.
float surgery;
float probability = MissionGameModels.Current.AgentDecideKilledOrUnconsciousModel
    .GetAgentStateProbability(attacker, victim, DamageTypes.Blunt, WeaponFlags.None, out surgery);
```

**Watch out.** `useSurgeryProbability` is an `out` parameter, so the only value the engine ever sees is the one you write — and it is independent of the fatality return value. Setting it to `0f` leaves the agent alive but permanently ineligible for surgery, which surfaces to the player as "the surgery skill does nothing" rather than as a bug in a model. Note also that the base type is `MBGameModel<AgentDecideKilledOrUnconsciousModel>` (`AgentDecideKilledOrUnconsciousModel.cs:7`), so `this.BaseModel` is the vanilla implementation to chain to instead of re-deriving a fatality curve from scratch.

## Key Methods

### GetAgentStateProbability
`public abstract float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**Purpose:** Reads and returns the agent state probability value held by the this instance.

```csharp
// Obtain an instance of AgentDecideKilledOrUnconsciousModel from the subsystem API first
AgentDecideKilledOrUnconsciousModel agentDecideKilledOrUnconsciousModel = ...;
var result = agentDecideKilledOrUnconsciousModel.GetAgentStateProbability(affectorAgent, effectedAgent, damageType, weaponFlags, useSurgeryProbability);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AgentDecideKilledOrUnconsciousModel instance = ...;
```

## See Also

- [Area Index](../)
- [Agent](../../mission/Agent)
- [MBGameModel](../../core-extra/MBGameModel)