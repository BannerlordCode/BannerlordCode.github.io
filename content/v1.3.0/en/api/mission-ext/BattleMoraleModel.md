---
title: "BattleMoraleModel"
description: "Auto-generated class reference for BattleMoraleModel."
---
# BattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel>`
**Base:** `MBGameModel<BattleMoraleModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`

## Overview

`BattleMoraleModel` is the rule model behind battlefield morale: who loses nerve when a comrade dies, who gains heart when an enemy falls, whether a formation breaks, and what each agent's starting morale actually is. It is an abstract `MBGameModel<BattleMoraleModel>` (`BattleMoraleModel.cs:8`) resolved once by `MissionGameModels` from the registered model list (`MissionGameModels.cs:105`) — a process-wide singleton, not a per-mission object. Shipped implementations are `CustomBattleMoraleModel`, `SandboxBattleMoraleModel` (`SandBoxSubModule.cs:41`) and `MultiplayerBattleMoraleModel`.

Nine abstract methods cover the whole surface, and they split into two very different shapes. Two of them return a *pair* of floats — `CalculateMaxMoraleChangeDueToAgentIncapacitated` (`BattleMoraleModel.cs:16`) and `CalculateMaxMoraleChangeDueToAgentPanicked` (`BattleMoraleModel.cs:24`) — and the attribute `[return: TupleElementNames("affectedSideMaxMoraleLoss", "affectorSideMaxMoraleGain")]` names the two slots: first the maximum loss the affected agent's own side can suffer, second the maximum gain the affector's side can receive. The other seven are single floats or a bool: per-character scaling (`CalculateMoraleChangeToCharacter`, `BattleMoraleModel.cs:27`), the effective starting value (`GetEffectiveInitialMorale`, `BattleMoraleModel.cs:30`), the panic gate (`CanPanicDueToMorale`, `BattleMoraleModel.cs:33`), the per-side casualties multiplier (`CalculateCasualtiesFactor`, `BattleMoraleModel.cs:36`), formation averages (`GetAverageMorale`, `BattleMoraleModel.cs:39`) and the two naval hooks (`BattleMoraleModel.cs:42`, `BattleMoraleModel.cs:45`).

The consumer is `AgentMoraleInteractionLogic`, which asks for the pair and then applies it in a 4-unit radius (`AgentMoraleInteractionLogic.cs:34`), and `CommonAIComponent`, which asks for the starting value and whether the agent may panic at all (`CommonAIComponent.cs:84`, `CommonAIComponent.cs:194`).

## Mental Model

Read the two-float returns as *caps*, not as applied deltas. `AgentMoraleInteractionLogic` takes the pair, and if either component is positive it calls `ApplyMoraleEffectOnAgentIncapacitated(affectedAgent, affectorAgent, loss, gain, 4f)` (`AgentMoraleInteractionLogic.cs:34`) — the model returns "up to this much", and the behaviour decides who inside the radius actually feels it.

The panic path discards the second slot. `OnAgentFleeing` calls `CalculateMaxMoraleChangeDueToAgentPanicked(affectedAgent)` and then applies it with `affectorAgent: null` (`AgentMoraleInteractionLogic.cs:50`), so whatever you return as `affectorSideMaxMoraleGain` on the panic method is thrown away by construction. Return a sensible value anyway — a custom caller outside this behaviour may use it — but do not design around it being honoured here.

The panic method is also gated before it is ever asked. `CommonAIComponent` checks `CanPanicDueToMorale(agent)` first (`CommonAIComponent.cs:194`) and returns early if it is false, so a `false` from your model means `CalculateMaxMoraleChangeDueToAgentPanicked` is never consulted for that agent. The vanilla implementation answers `true` unconditionally (`CustomBattleMoraleModel.cs:102`) — i.e. vanilla never gates panic by morale at all.

Now the constants: all ten on this class are dead. `BaseMoraleGainOnKill`, `BaseMoraleLossOnKill`, `BaseMoraleGainOnPanic`, `BaseMoraleLossOnPanic`, `MeleeWeaponMoraleMultiplier`, `RangedWeaponMoraleMultiplier`, `SiegeWeaponMoraleMultiplier`, `BurningSiegeWeaponMoraleBonus` and `CasualtyFactorRate` (`BattleMoraleModel.cs:48` through `BattleMoraleModel.cs:72`) are not referenced anywhere else in the tree — not by the shipped implementations, not by the game. `CustomBattleMoraleModel` writes the numbers inline instead: `0.75f` for melee (`CustomBattleMoraleModel.cs:30`), `0.25f` for area weapons (`CustomBattleMoraleModel.cs:33`), `0.5f` for bows (`CustomBattleMoraleModel.cs:41`), `battleImportance * 3f` for the gain side (`CustomBattleMoraleModel.cs:44`), `battleImportance * 4f` for the loss side (`CustomBattleMoraleModel.cs:45`), and `removedAgentRatioForSide * 2f` in the casualties factor (`CustomBattleMoraleModel.cs:114`). Editing a constant here changes no gameplay value anywhere.

`CalculateCasualtiesFactor` starts at `1f` and scales up with how many of that side's agents have already been removed, then clamps at zero (`CustomBattleMoraleModel.cs:110`). It is a multiplier, not a delta — the more of your side is dead, the further every subsequent morale swing is amplified.

## How to use

**Getting one.** Register it in your module's `OnGameInitialization` with `gameStarter.AddModel<BattleMoraleModel>(new MyBattleMoraleModel())` — the same call the editor game uses (`EditorGame.cs:51`) and the same shape as the sandbox registration (`SandBoxSubModule.cs:41`). Read it back as `MissionGameModels.Current.BattleMoraleModel`.

**Typical use:**

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MyBattleMoraleModel : BattleMoraleModel
{
    public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(
        Agent affectedAgent, AgentState affectedAgentState,
        Agent affectorAgent, in KillingBlow killingBlow)
    {
        // Slot 1: cap on the affected side's loss. Slot 2: cap on the affector side's gain.
        float battleImportance = affectedAgent.GetBattleImportance();
        float affectedSideMaxMoraleLoss = battleImportance * 2.5f;
        float affectorSideMaxMoraleGain = battleImportance * 1.5f;

        return new ValueTuple<float, float>(affectedSideMaxMoraleLoss, affectorSideMaxMoraleGain);
    }

    public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)
    {
        // Slot 2 is discarded on this path: AgentMoraleInteractionLogic passes
        // affectorAgent: null when applying it.
        return new ValueTuple<float, float>(agent.GetBattleImportance() * 1f, 0f);
    }

    public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)
    {
        // Scale the cap by who is receiving it.
        return maxMoraleChange * (agent.IsAIControlled ? 1f : 0.5f);
    }

    public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)
    {
        return baseMorale;
    }

    public override bool CanPanicDueToMorale(Agent agent)
    {
        // Checked BEFORE CalculateMaxMoraleChangeDueToAgentPanicked is asked.
        return agent.GetBattleImportance() < 0.5f;
    }

    public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)
    {
        if (Mission.Current == null || battleSide == BattleSideEnum.None)
        {
            return 1f;
        }

        float ratio = Mission.Current.GetRemovedAgentRatioForSide(battleSide);
        return MathF.Max(0f, 1f + ratio * 1.25f);
    }

    public override float GetAverageMorale(Formation formation)
    {
        // Iterate the arrangement's units, the way the vanilla model does.
        float total = 0f;
        int counted = 0;

        if (formation != null)
        {
            foreach (IFormationUnit unit in formation.Arrangement.GetAllUnits())
            {
                Agent agent = unit.Agent;
                if (agent != null && agent.IsActive())
                {
                    total += agent.GetMorale();
                    counted++;
                }
            }
        }

        return counted == 0 ? 0f : total / counted;
    }

    public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)
    {
        return -4f;
    }

    public override float CalculateMoraleOnRamming(Agent agent)
    {
        return 1f;
    }
}
```

`Agent.GetBattleImportance()` is what the vanilla model multiplies its constants by (`CustomBattleMoraleModel.cs:22`), and `Mission.GetRemovedAgentRatioForSide(BattleSideEnum)` is what feeds the casualties factor (`CustomBattleMoraleModel.cs:113`). The vanilla `GetAverageMorale` walks `formation.Arrangement.GetAllUnits()` (`CustomBattleMoraleModel.cs:127`) rather than reading a cached property, because 1.3.0 has no aggregate morale field on `Formation`.

**Most common mistake:** tuning the constants and shipping the build.

```csharp
// Edited in your fork of the model — has no effect on any morale value.
public const float BaseMoraleLossOnKill = 12f;
```

Because the shipped implementations never read these constants, the battle feels exactly the same and the change is invisible. Worse, on the panic path a "fix" to `BaseMoraleGainOnPanic` looks like it should raise the killer's morale and does nothing at all, because that path passes `affectorAgent: null` (`AgentMoraleInteractionLogic.cs:50`). Put your numbers in the method bodies, as above, and override `CanPanicDueToMorale` if you actually want to stop agents breaking.

## Key Methods

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public abstract ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)`

**Purpose:** Calculates the current value or result of max morale change due to agent incapacitated.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMaxMoraleChangeDueToAgentIncapacitated(affectedAgent, affectedAgentState, affectorAgent, killingBlow);
```

### CalculateMaxMoraleChangeDueToAgentPanicked
`public abstract ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

**Purpose:** Calculates the current value or result of max morale change due to agent panicked.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMaxMoraleChangeDueToAgentPanicked(agent);
```

### CalculateMoraleChangeToCharacter
`public abstract float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**Purpose:** Calculates the current value or result of morale change to character.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMoraleChangeToCharacter(agent, 0);
```

### GetEffectiveInitialMorale
`public abstract float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**Purpose:** Reads and returns the effective initial morale value held by the this instance.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.GetEffectiveInitialMorale(agent, 0);
```

### CanPanicDueToMorale
`public abstract bool CanPanicDueToMorale(Agent agent)`

**Purpose:** Checks whether the this instance meets the preconditions for panic due to morale.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CanPanicDueToMorale(agent);
```

### CalculateCasualtiesFactor
`public abstract float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**Purpose:** Calculates the current value or result of casualties factor.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateCasualtiesFactor(battleSide);
```

### GetAverageMorale
`public abstract float GetAverageMorale(Formation formation)`

**Purpose:** Reads and returns the average morale value held by the this instance.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.GetAverageMorale(formation);
```

### CalculateMoraleChangeOnShipSunk
`public abstract float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**Purpose:** Calculates the current value or result of morale change on ship sunk.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMoraleChangeOnShipSunk(shipOrigin);
```

### CalculateMoraleOnRamming
`public abstract float CalculateMoraleOnRamming(Agent agent)`

**Purpose:** Calculates the current value or result of morale on ramming.

```csharp
// Obtain an instance of BattleMoraleModel from the subsystem API first
BattleMoraleModel battleMoraleModel = ...;
var result = battleMoraleModel.CalculateMoraleOnRamming(agent);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleMoraleModel instance = ...;
```

## See Also

- [Area Index](../)
- [CustomBattleMoraleModel — the shipped implementation you are replacing](../CustomBattleMoraleModel)
- [MissionGameModels — resolves and publishes the instance](../MissionGameModels)
- [AgentMoraleInteractionLogic — the consumer that applies the pair](../AgentMoraleInteractionLogic)
- [CommonAIComponent — the consumer for starting morale and the panic gate](../CommonAIComponent)
- [中文页面](../../../../zh/api/mission-ext/BattleMoraleModel)