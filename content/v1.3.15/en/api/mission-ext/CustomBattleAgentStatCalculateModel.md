---
title: "CustomBattleAgentStatCalculateModel"
description: "Auto-generated class reference for CustomBattleAgentStatCalculateModel."
---
# CustomBattleAgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentStatCalculateModel.cs`

## Overview

`CustomBattleAgentStatCalculateModel` is the stock implementation of
[`AgentStatCalculateModel`](../AgentStatCalculateModel) — it supplies the eleven abstract members with the
base game's numbers and adds three large private helpers (`UpdateHumanStats`, `UpdateHorseStats`,
`SetBannerEffectsOnAgent`) that write the rest of the `AgentDrivenProperties` bag. `EditorGame` registers it
at `EditorGame.cs:48`.

Reading it tells you the actual battle tuning. `GetDifficultyModifier` returns `1f`
(`CustomBattleAgentStatCalculateModel.cs:14`) — the hardest bucket — which puts every AI property from the
base class's `SetAiRelatedProperties` at its `0.96` ceiling. `GetWeaponDamageMultiplier` adds a
skill-scaled bonus per weapon skill, largest for two-handeded (`0.0016` per point) and smallest for
throwing (`0.0006`) (`CustomBattleAgentStatCalculateModel.cs:86`, `CustomBattleAgentStatCalculateModel.cs:98`).

The three human/horse branches are where most of the numbers live. `InitializeAgentStats` splits cleanly on
`agent.IsHuman`: humans get head/torso/legs/arms armour sums, mounts get a species index taken from
`spawnEquipment[EquipmentIndex.ArmorItemEndSlot].Item.Id.InternalValue` plus a riding attribute of `0.8f`,
rising to `1.0f` when a horse harness is fitted (`CustomBattleAgentStatCalculateModel.cs:38`).

Banner effects are threaded through here too. `SetBannerEffectsOnAgent` reads the formation's active banner
and applies `IncreasedTroopMovementSpeed` to `MaxSpeedMultiplier` and — only for a ranged weapon —
`DecreasedRangedAccuracyPenalty` to `WeaponInaccuracy` (`CustomBattleAgentStatCalculateModel.cs:401`,
`CustomBattleAgentStatCalculateModel.cs:411`).

## Mental Model

Read it as a tuned constants table with a human/horse fork, and mind the human/non-human boundary. The
boundaries:

- **Non-humans are immovable, not merely strong.** `GetKnockBackResistance`, `GetKnockDownResistance` and
  `GetDismountResistance` all return `float.MaxValue` for anything that is not `IsHuman`
  (`CustomBattleAgentStatCalculateModel.cs:140`, `CustomBattleAgentStatCalculateModel.cs:160`,
  `CustomBattleAgentStatCalculateModel.cs:172`). A horse cannot be knocked back, knocked down or
  dismounted by any amount of force; the resistance is a hard wall, not a large number.
- **`GetEquipmentStealthBonus` returns `0f`** (`CustomBattleAgentStatCalculateModel.cs:107`) and
  `GetBreatheHoldMaxDuration` returns its input unchanged
  (`CustomBattleAgentStatCalculateModel.cs:178`). Those two are stubs.
- **Knockdown and dismount resistance use *different* skills.** Knockdown and knockback use
  `DefaultSkills.Athletics` (`CustomBattleAgentStatCalculateModel.cs:148`); dismount uses
  `DefaultSkills.Riding` (`CustomBattleAgentStatCalculateModel.cs:168`).
- **Knockdown resistance has a mounted/unmounted and a thrust/swing fork**
  (`CustomBattleAgentStatCalculateModel.cs:150`, `CustomBattleAgentStatCalculateModel.cs:154`) — mounted
  adds `0.1`, an unmounted victim hit by a thrust adds `0.15`, and the two are mutually exclusive
  `else if`s.
- **Sneak attack is a flat `+0.5` plus skill, then a weapon-class multiplier**
  (`CustomBattleAgentStatCalculateModel.cs:118`): a dagger triples the result, a throwing knife doubles it.
  A high-Roguery agent with a dagger is over four times the base multiplier before any other factor.
- **`GetWeaponDamageMultiplier` self-references the model** — it calls
  `MissionGameModels.Current.AgentStatCalculateModel.GetEffectiveSkill` rather than `this`
  (`CustomBattleAgentStatCalculateModel.cs:79`). If you replace the stat model and that replacement
  returns a different effective skill, the damage multiplier changes too, even though this class supplied
  the constant.
- Mount speed is a `FactoredNumber` pipeline scaled by the environment factor and `0.22f`
  (`CustomBattleAgentStatCalculateModel.cs:388`), and mount dash acceleration has a hard three-band
  piecewise curve over a 200–300 weight window (`CustomBattleAgentStatCalculateModel.cs:396`).

## How to use

**Getting one.** Already registered — read it with `MissionGameModels.Current.AgentStatCalculateModel`.
To change it, register a subclass where `EditorGame` registers this one; subclassing *this* class keeps the
whole human/horse stat pipeline.

```csharp
using TaleWorlds.MountAndBlade.ComponentInterfaces;

// One, at game start - replaces the stock model (EditorGame.cs:48).
basicGameStarter.AddModel<AgentStatCalculateModel>(new MyBattleAgentStatCalculateModel());

public class MyBattleAgentStatCalculateModel : CustomBattleAgentStatCalculateModel
{
    public override float GetKnockBackResistance(Agent agent)
    {
        // Stock returns float.MaxValue for non-humans (CustomBattleAgentStatCalculateModel.cs:140),
        // so horses can never be knocked back. Keep that unless you mean to change it.
        if (!agent.IsHuman) { return float.MaxValue; }
        return base.GetKnockBackResistance(agent) * 2f;
    }

    public override float GetDifficultyModifier() { return 1f; }   // stock: CustomBattleAgentStatCalculateModel.cs:14
}
```

**The mistake that bites.** Subclassing and forgetting that three members return `float.MaxValue` for
non-humans. `GetKnockBackResistance`, `GetKnockDownResistance` and `GetDismountResistance`
(`CustomBattleAgentStatCalculateModel.cs:140`) hand back `float.MaxValue` for any mount, so a mod that
scales resistance by a factor — `base.GetDismountResistance(agent) * 0.5f` — still gets
`float.MaxValue * 0.5f`, which overflows a `float` to `Infinity`. Every mounted combatant becomes
permanently unshakeable and no formula can bring it back, because the value was never finite to begin with.



## Key Methods

### GetDifficultyModifier
`public override float GetDifficultyModifier()`

**Purpose:** Reads and returns the difficulty modifier value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetDifficultyModifier();
```

### CanAgentRideMount
`public override bool CanAgentRideMount(Agent agent, Agent targetMount)`

**Purpose:** Checks whether the this instance meets the preconditions for agent ride mount.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.CanAgentRideMount(agent, targetMount);
```

### InitializeAgentStats
`public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**Purpose:** Prepares the resources, state, or bindings required by agent stats.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
customBattleAgentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
```

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**Purpose:** Recalculates and stores the latest representation of agent stats.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
customBattleAgentStatCalculateModel.UpdateAgentStats(agent, agentDrivenProperties);
```

### GetWeaponDamageMultiplier
`public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Reads and returns the weapon damage multiplier value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetWeaponDamageMultiplier(agent, weapon);
```

### GetEquipmentStealthBonus
`public override float GetEquipmentStealthBonus(Agent agent)`

**Purpose:** Reads and returns the equipment stealth bonus value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetEquipmentStealthBonus(agent);
```

### GetSneakAttackMultiplier
`public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Reads and returns the sneak attack multiplier value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetSneakAttackMultiplier(agent, weapon);
```

### GetKnockBackResistance
`public override float GetKnockBackResistance(Agent agent)`

**Purpose:** Reads and returns the knock back resistance value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetKnockBackResistance(agent);
```

### GetKnockDownResistance
`public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)`

**Purpose:** Reads and returns the knock down resistance value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetKnockDownResistance(agent, strikeType.Invalid);
```

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

**Purpose:** Reads and returns the dismount resistance value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetDismountResistance(agent);
```

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**Purpose:** Reads and returns the breathe hold max duration value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAgentStatCalculateModel from the subsystem API first
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetBreatheHoldMaxDuration(agent, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleAgentStatCalculateModel>(new MyCustomBattleAgentStatCalculateModel());
```

## See Also

- [Area Index](../)
- [AgentStatCalculateModel](../AgentStatCalculateModel)
- [CustomBattleMoraleModel](../CustomBattleMoraleModel)
- [CustomBattleBannerBearersModel](../CustomBattleBannerBearersModel)
- [中文页面](../../../../zh/api/mission-ext/CustomBattleAgentStatCalculateModel)