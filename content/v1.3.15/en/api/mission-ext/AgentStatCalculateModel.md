---
title: "AgentStatCalculateModel"
description: "Auto-generated class reference for AgentStatCalculateModel."
---
# AgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**Base:** `MBGameModel<AgentStatCalculateModel>`
**File:** `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`

## Overview

`AgentStatCalculateModel` is the abstract `MBGameModel` that turns an agent's character, skills and equipment
into the numeric driving properties the mission simulation reads. Its public surface splits into four
abstract members — `InitializeAgentStats`, `UpdateAgentStats`, `GetDifficultyModifier`,
`CanAgentRideMount` — plus a dozen abstract combat constants such as `GetWeaponDamageMultiplier` and
`GetKnockBackResistance` (`AgentStatCalculateModel.cs:33`), and a long tail of `virtual` members that ship
with usable defaults.

The class does not store the results. It writes them into the `AgentDrivenProperties` instance it is
handed and the engine reads them back through `SetStat`/`GetStat`. The lifecycle is fixed by the engine:
`Agent.Build` calls `InitializeMissionEquipment` first (`Agent.cs:5530`) and only then runs
`InitializeAgentProperties`, which reaches `AgentDrivenProperties.InitializeDrivenProperties` and calls
`InitializeAgentStats` immediately followed by `UpdateAgentStats` (`AgentDrivenProperties.cs:1481`).

Access is through `MissionGameModels.Current.AgentStatCalculateModel`, resolved once per mission from the
game starter. The stock registration is `CustomBattleAgentStatCalculateModel`
(`EditorGame.cs:48`), not a "default" class — battle behaviour comes from the subclass.

## Mental Model

Treat it as a *stat compiler*, not a stat store: your job is to fill an `AgentDrivenProperties` bag, and
the bag outlives your call. Three things decide whether your numbers take effect:

- **Order is fixed by the engine, not by you.** `InitializeMissionEquipment` runs before
  `InitializeAgentStats`, and `InitializeAgentStats` is always immediately followed by
  `UpdateAgentStats` on the first build. Anything you write in `InitializeAgentStats` that `UpdateAgentStats`
  recomputes will simply be overwritten on the same frame.
- **The shared AI tuning is one wall of `SetAiRelatedProperties` (`AgentStatCalculateModel.cs:211`), and it
  is not virtual.** Every value there — from `AiShootFreq` to `AIParryOnAttackAbility` — is derived from a
  single per-agent "AI level" (`CalculateAILevel`, `AgentStatCalculateModel.cs:204`) which is itself
  `meleeSkill / 300` scaled by a difficulty bucket. A subclass that wants different melee AI must call
  `SetAiRelatedProperties` and then overwrite the individual properties it cares about; overriding
  `GetDifficultyModifier` alone shifts the whole table uniformly, which is usually not what you want.
- **That AI level is globally scaled by a mutable multiplier.** `SetAILevelMultiplier` writes a private
  field defaulting to `1f` (`AgentStatCalculateModel.cs:175`, `AgentStatCalculateModel.cs:291`) which every
  AI property is multiplied by. Nothing in the 1.3.15 tree calls either it or `ResetAILevelMultiplier`, so
  it is a hook that only exists for mods — and because it lives on the per-mission model instance, it
  affects every agent in the mission, not one agent.

Two smaller traps: `GetWeaponInaccuracy` (`AgentStatCalculateModel.cs:86`) clamps at zero, so an agent
with high enough skill and a low-accuracy weapon gets an *exact* shot, not a negative error; and
`SetAiRelatedProperties` forces `UseRealisticBlocking` to `1f` only when
`agent.Controller != AgentControllerType.Player` (`AgentStatCalculateModel.cs:270`), so the player never
gets realistic blocking regardless of the difficulty setting.

## How to use

**Getting one.** Register a subclass at game start where `EditorGame` registers the stock one, then read
it per mission from `MissionGameModels.Current`. Do not `new` it and expect the mission to see it.

```csharp
// Once, at game start - replaces CustomBattleAgentStatCalculateModel (EditorGame.cs:48).
basicGameStarter.AddModel<AgentStatCalculateModel>(new MyBattleAgentStatCalculateModel());

public class MyBattleAgentStatCalculateModel : AgentStatCalculateModel
{
    // AI-level scale factor; 0.32 is the "hard" bucket (AgentStatCalculateModel.cs:207).
    public override float GetDifficultyModifier() { return 0.4f; }

    public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment,
        AgentDrivenProperties driven, AgentBuildData agentBuildData)
    {
        // 1f matches the stock implementation (CustomBattleAgentStatCalculateModel.cs:12).
        driven.ArmorEncumbrance = spawnEquipment.GetTotalWeightOfArmor(agent.IsHuman);

        // mount / AI tuning lives in the non-virtual helper - call it, then patch what you want.
        // WieldedWeapon is MissionWeapon (Agent.cs:555); CurrentUsageItem is the WeaponComponentData.
        MissionWeapon wielded = agent.WieldedWeapon;
        SetAiRelatedProperties(agent, driven, wielded.CurrentUsageItem, null);
        driven.AiShootFreq *= 0.5f;
    }

    public override void UpdateAgentStats(Agent agent, AgentDrivenProperties driven)
    {
        // Runs immediately after InitializeAgentStats on first build (AgentDrivenProperties.cs:1482).
    }
}
```

**The mistake that bites.** Overriding `GetDifficultyModifier` and expecting it to tune melee AI
selectively. It feeds `CalculateAILevel`, which drives roughly forty properties through one linear
expression, so raising it from `1f` to `2f` does not make AI twice as good — it saturates at `1f` under
`MBMath.ClampFloat` (`AgentStatCalculateModel.cs:207`) and dumps the entire AI table into its hardest
bucket at once, shooting, blocking and parrying all at maximum.



## Key Methods

### InitializeAgentStats
`public abstract void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**Purpose:** Prepares the resources, state, or bindings required by agent stats.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
```

### InitializeMissionEquipment
`public virtual void InitializeMissionEquipment(Agent agent)`

**Purpose:** Prepares the resources, state, or bindings required by mission equipment.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.InitializeMissionEquipment(agent);
```

### InitializeAgentStatsAfterDeploymentFinished
`public virtual void InitializeAgentStatsAfterDeploymentFinished(Agent agent)`

**Purpose:** Prepares the resources, state, or bindings required by agent stats after deployment finished.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.InitializeAgentStatsAfterDeploymentFinished(agent);
```

### InitializeMissionEquipmentAfterDeploymentFinished
`public virtual void InitializeMissionEquipmentAfterDeploymentFinished(Agent agent)`

**Purpose:** Prepares the resources, state, or bindings required by mission equipment after deployment finished.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.InitializeMissionEquipmentAfterDeploymentFinished(agent);
```

### UpdateAgentStats
`public abstract void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**Purpose:** Recalculates and stores the latest representation of agent stats.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.UpdateAgentStats(agent, agentDrivenProperties);
```

### GetDifficultyModifier
`public abstract float GetDifficultyModifier()`

**Purpose:** Reads and returns the difficulty modifier value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetDifficultyModifier();
```

### CanAgentRideMount
`public abstract bool CanAgentRideMount(Agent agent, Agent targetMount)`

**Purpose:** Checks whether the this instance meets the preconditions for agent ride mount.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.CanAgentRideMount(agent, targetMount);
```

### HasHeavyArmor
`public virtual bool HasHeavyArmor(Agent agent)`

**Purpose:** Determines whether the this instance already holds heavy armor.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.HasHeavyArmor(agent);
```

### GetEffectiveArmorEncumbrance
`public virtual float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)`

**Purpose:** Reads and returns the effective armor encumbrance value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEffectiveArmorEncumbrance(agent, equipment);
```

### GetEffectiveMaxHealth
`public virtual float GetEffectiveMaxHealth(Agent agent)`

**Purpose:** Reads and returns the effective max health value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEffectiveMaxHealth(agent);
```

### GetEnvironmentSpeedFactor
`public virtual float GetEnvironmentSpeedFactor(Agent agent)`

**Purpose:** Reads and returns the environment speed factor value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEnvironmentSpeedFactor(agent);
```

### CalculateAIAttackOnDecideMaxValue
`public float CalculateAIAttackOnDecideMaxValue()`

**Purpose:** Calculates the current value or result of a i attack on decide max value.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.CalculateAIAttackOnDecideMaxValue();
```

### GetWeaponInaccuracy
`public virtual float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**Purpose:** Reads and returns the weapon inaccuracy value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetWeaponInaccuracy(agent, weapon, 0);
```

### GetDetachmentCostMultiplierOfAgent
`public virtual float GetDetachmentCostMultiplierOfAgent(Agent agent, IDetachment detachment)`

**Purpose:** Reads and returns the detachment cost multiplier of agent value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetDetachmentCostMultiplierOfAgent(agent, detachment);
```

### GetInteractionDistance
`public virtual float GetInteractionDistance(Agent agent)`

**Purpose:** Reads and returns the interaction distance value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetInteractionDistance(agent);
```

### GetMaxCameraZoom
`public virtual float GetMaxCameraZoom(Agent agent)`

**Purpose:** Reads and returns the max camera zoom value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetMaxCameraZoom(agent);
```

### GetEffectiveSkill
`public virtual int GetEffectiveSkill(Agent agent, SkillObject skill)`

**Purpose:** Reads and returns the effective skill value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEffectiveSkill(agent, skill);
```

### GetEffectiveSkillForWeapon
`public virtual int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)`

**Purpose:** Reads and returns the effective skill for weapon value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEffectiveSkillForWeapon(agent, weapon);
```

### GetWeaponDamageMultiplier
`public abstract float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Reads and returns the weapon damage multiplier value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetWeaponDamageMultiplier(agent, weapon);
```

### GetEquipmentStealthBonus
`public abstract float GetEquipmentStealthBonus(Agent agent)`

**Purpose:** Reads and returns the equipment stealth bonus value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEquipmentStealthBonus(agent);
```

### GetSneakAttackMultiplier
`public abstract float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Reads and returns the sneak attack multiplier value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetSneakAttackMultiplier(agent, weapon);
```

### GetKnockBackResistance
`public abstract float GetKnockBackResistance(Agent agent)`

**Purpose:** Reads and returns the knock back resistance value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetKnockBackResistance(agent);
```

### GetKnockDownResistance
`public abstract float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)`

**Purpose:** Reads and returns the knock down resistance value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetKnockDownResistance(agent, strikeType.Invalid);
```

### GetDismountResistance
`public abstract float GetDismountResistance(Agent agent)`

**Purpose:** Reads and returns the dismount resistance value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetDismountResistance(agent);
```

### GetBreatheHoldMaxDuration
`public abstract float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**Purpose:** Reads and returns the breathe hold max duration value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetBreatheHoldMaxDuration(agent, 0);
```

### GetMissionDebugInfoForAgent
`public virtual string GetMissionDebugInfoForAgent(Agent agent)`

**Purpose:** Reads and returns the mission debug info for agent value held by the this instance.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetMissionDebugInfoForAgent(agent);
```

### ResetAILevelMultiplier
`public void ResetAILevelMultiplier()`

**Purpose:** Returns a i level multiplier to its default or initial condition.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.ResetAILevelMultiplier();
```

### SetAILevelMultiplier
`public void SetAILevelMultiplier(float multiplier)`

**Purpose:** Assigns a new value to a i level multiplier and updates the object's internal state.

```csharp
// Obtain an instance of AgentStatCalculateModel from the subsystem API first
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.SetAILevelMultiplier(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AgentStatCalculateModel instance = ...;
```

## See Also

- [Area Index](../)
- [CustomBattleAgentStatCalculateModel](../CustomBattleAgentStatCalculateModel)
- [AgentDrivenProperties](../AgentDrivenProperties)
- [AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [CustomBattleMoraleModel](../CustomBattleMoraleModel)
- [中文页面](../../../../zh/api/mission-ext/AgentStatCalculateModel)