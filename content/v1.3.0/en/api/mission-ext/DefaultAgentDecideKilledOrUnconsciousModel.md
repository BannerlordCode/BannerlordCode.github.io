---
title: "DefaultAgentDecideKilledOrUnconsciousModel"
description: "Auto-generated class reference for DefaultAgentDecideKilledOrUnconsciousModel."
---
# DefaultAgentDecideKilledOrUnconsciousModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`
**File:** `TaleWorlds.MountAndBlade/DefaultAgentDecideKilledOrUnconsciousModel.cs`

## Overview

`DefaultAgentDecideKilledOrUnconsciousModel` is the shipped implementation of `AgentDecideKilledOrUnconsciousModel` (`DefaultAgentDecideKilledOrUnconsciousModel.cs:8`) — the coin-flip the engine uses to decide whether an incapacitated agent dies or survives unconscious. It is five lines long and its entire body is:

```csharp
useSurgeryProbability = 0f;
return 1f;
```

That means two things about vanilla behaviour. The return value is the probability of *being killed*, and it is always `1f`, so every agent that reaches this point dies — there is no chance of an unconscious survivor. The `out useSurgeryProbability` is always `0f`, so the surgery branch is never taken either. Whatever the base class does with these two numbers — sampling, clamping, combining with other rules — the model contributes certainty.

It is reached through `MissionGameModels.Current.AgentDecideKilledOrUnconsciousModel` like every other game model, and it is a singleton, so replacing it changes the rule for every agent in the current process.

## Mental Model

Understand the parameter order and the parameter meanings before you touch it, because the signature is the trap.

`GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)` — the *affector* is the attacker, the *effected* is the victim, and the ordering is attacker-first. It returns a float, not a bool, so an implementation is expected to express a *probability*, and the shipped one uses `1f` to mean "certainly killed" rather than "certainly something".

The `in`-free signature takes both agents but the shipped implementation reads neither of them, and ignores `damageType` and `weaponFlags`. That is why it can be five lines: nothing about the situation changes the answer. If you write a subclass that *does* use these arguments, you are adding behaviour the vanilla game has never had, not tuning something existing — which is a fair thing to do but a different kind of change, and worth doing via a new `AgentDecideKilledOrUnconsciousModel` rather than by editing this class.

Note also that this v1.3.0 model returns `1f` for *everything*. Because `useSurgeryProbability` is `0f` as well, the surgery outcome is unreachable in this version's vanilla path. A later version's model is a different class in a different file; do not read this one's behaviour as a statement about the mechanic in general.

## How to use

**Getting it.** Read it off `MissionGameModels`:

```csharp
AgentDecideKilledOrUnconsciousModel model =
    MissionGameModels.Current.AgentDecideKilledOrUnconsciousModel;
```

**Typical use** — making downed agents survivable, which requires overriding the model (there is no tuning knob on this class):

```csharp
public class SurvivorModel : DefaultAgentDecideKilledOrUnconsciousModel
{
    public override float GetAgentStateProbability(
        Agent affectorAgent, Agent effectedAgent,
        DamageTypes damageType, WeaponFlags weaponFlags,
        out float useSurgeryProbability)
    {
        useSurgeryProbability = 0f;

        // Only the very wounded survive, and never from a killing blow class.
        if (effectedAgent.Health < 20 && damageType != DamageTypes.Bite)
            return 0.35f;

        return 1f;
    }
}
```

Register it before the mission starts:

```csharp
MissionGameModels.Current.AgentDecideKilledOrUnconsciousModel = new SurvivorModel();
```

**Typical use** — checking what the current model would decide, without disturbing it:

```csharp
float killChance = model.GetAgentStateProbability(
    killer, victim, DamageTypes.Cut, WeaponFlags.None, out float surgery);
MBDebug.Print("kill chance " + killChance + ", surgery " + surgery);
```

**Most common mistake, and what it costs.** Writing an override that returns a probability for the *unconscious* outcome on the assumption that the return value describes survival. It does not — it is the kill probability, and vanilla pins it at `1f` (`DefaultAgentDecideKilledOrUnconsciousModel.cs:14`). Returning `0.35f` on the theory that this creates 35% survivors happens to work, but returning `0f` to mean "nobody dies" produces total invulnerability rather than total survival, because the caller reads the same number with the opposite meaning. If your intent is "most agents die", express it as `return 1f`; if it is "some survive", return a value strictly between 0 and 1. Getting the sense backwards turns a difficulty tweak into a broken battle.

## Key Methods

### GetAgentStateProbability
`public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**Purpose:** Reads and returns the agent state probability value held by the this instance.

```csharp
// Obtain an instance of DefaultAgentDecideKilledOrUnconsciousModel from the subsystem API first
DefaultAgentDecideKilledOrUnconsciousModel defaultAgentDecideKilledOrUnconsciousModel = ...;
var result = defaultAgentDecideKilledOrUnconsciousModel.GetAgentStateProbability(affectorAgent, effectedAgent, damageType, weaponFlags, useSurgeryProbability);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultAgentDecideKilledOrUnconsciousModel>(new MyDefaultAgentDecideKilledOrUnconsciousModel());
```

## See Also

- [Area Index](../)
- [Agent](../../mission/Agent)
- [MBGameManager](../MBGameManager)
- [DefaultAgentDecideKilledOrUnconsciousModel (中文页面)](../../../../zh/api/mission-ext/DefaultAgentDecideKilledOrUnconsciousModel)
- [AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [MissionGameModels](../MissionGameModels)