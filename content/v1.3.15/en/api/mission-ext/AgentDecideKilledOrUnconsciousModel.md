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

`AgentDecideKilledOrUnconsciousModel` is the abstract `MBGameModel` that answers one question for the
engine: given an attacker, a victim, a damage type and a weapon, what is the chance the victim dies
instead of going unconscious. It declares exactly one method,
`GetAgentStateProbability(Agent, Agent, DamageTypes, WeaponFlags, out float)`
(`AgentDecideKilledOrUnconsciousModel.cs:10`), and the second `out` value is a second, independent
probability for the limb-damage ("surgery") roll.

The caller is `Mission.GetAgentState` (`Mission.cs:4767`), and it is the *mission* — not the model — that
turns your number into a decision: it draws `MBRandom.RandomFloat`, and a roll below your value gives
`AgentState.Killed`, anything else gives `AgentState.Unconscious` (`Mission.cs:4788`). So the return value
is literally a probability of death, and anything you return above 1 or below 0 simply never fires.

Stock registration lives in `EditorGame` (`EditorGame.cs:54`), which installs
`DefaultAgentDecideKilledOrUnconsciousModel`. That default returns `1f` with `useSurgeryProbability`
set to `0f` (`DefaultAgentDecideKilledOrUnconsciousModel.cs:11`) — every lethal hit is a guaranteed kill
and the surgery roll never fires. Any variation you see in a real battle comes from an implementation
that replaced it.

## Mental Model

Think of it as a probability *provider*, not a decision maker. Three boundaries define its authority:

- The second output is only consulted when the victim survived. The engine applies
  `useSurgeryProbability` as `randomFloat > 1f - useSurgeryProbability` inside the *unconscious* branch
  (`Mission.cs:4796`), so returning `0.5` there means "half the time a survivor gets a wound", never
  "half the time a killed agent gets one".
- The `out` flag is then suppressed for friendly fire: if attacker and victim share a team the engine
  forces it back to `false` (`Mission.cs:4802`). Any surgery chance your model reports is discarded on
  same-team hits no matter what you return.
- Any `MissionBehavior` that also implements `IAgentStateDecider` short-circuits the engine entirely
  before the coin flip. The mission walks its behaviour list, takes the *first* decider it finds, and
  hands it your probability plus the surgery roll as an `out bool` (`Mission.cs:4778`,
  `IAgentStateDecider.cs:10`). Once such a behaviour exists your return value is advisory input, not the
  outcome.

Access goes through the per-mission `MissionGameModels.Current`
(`MissionGameModels.cs:39`), resolved once at mission start from the game starter's registered model
(`MissionGameModels.cs:103`) — so it is a singleton per mission, shared by every agent in it.

## How to use

**Getting one.** Register an implementation with the game starter, exactly where `EditorGame` registers
the default, and read it back per mission from `MissionGameModels.Current`. There is no constructor path
a modder calls at runtime.

```csharp
// Once, at game start — replaces the default that EditorGame.cs:54 installs.
basicGameStarter.AddModel<AgentDecideKilledOrUnconsciousModel>(new MyDecideKilledOrUnconsciousModel());

public class MyDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel
{
    public override float GetAgentStateProbability(
        Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags,
        out float useSurgeryProbability)
    {
        // Head hits on an unhelmeted head kill far more often than body hits.
        bool headshot = weaponFlags.HasFlag(WeaponFlags.CanHitHead);
        float deathChance = headshot ? 0.85f : 0.12f;

        // Only ever consulted for survivors (Mission.cs:4796), and only off same-team hits.
        useSurgeryProbability = damageType == DamageTypes.Blunt ? 0.4f : 0.1f;
        return deathChance;
    }
}
```

**The mistake that bites.** Reading `useSurgeryProbability` as "probability of a wound on the agent I just
hit". It is not consulted at all when your return value wins the coin flip — the agent is dead and no roll
happens (`Mission.cs:4788`) — so a model tuned to make wounds dramatic on a heavy weapon can look like it
does nothing on a normal hit where the victim happened to survive, and looks perfect on the same weapon
when the victim happened not to.



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
- [DefaultAgentDecideKilledOrUnconsciousModel](../DefaultAgentDecideKilledOrUnconsciousModel)
- [AgentApplyDamageModel](../AgentApplyDamageModel)
- [CustomBattleMoraleModel](../CustomBattleMoraleModel)
- [CasualtyHandler](../CasualtyHandler)
- [中文页面](../../../../zh/api/mission-ext/AgentDecideKilledOrUnconsciousModel)