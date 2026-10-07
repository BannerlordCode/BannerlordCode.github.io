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

The rule book for an agent's numbers: how its stats are seeded, how they change, how encumbered and armoured it is, and how hard the AI is allowed to push it. It is an `MBGameModel<AgentStatCalculateModel>` (`AgentStatCalculateModel.cs:9`) with eleven abstract members (`AgentStatCalculateModel.cs:12`-`AgentStatCalculateModel.cs:150`) and about a dozen `virtual` members that ship with working default bodies — so a subclass can override one rule and inherit the rest, rather than reimplementing the model.

## Mental Model

Split it in two. The abstract half is the per-agent lifecycle: `InitializeAgentStats` seeds an agent from its spawn equipment (`AgentStatCalculateModel.cs:12`), `UpdateAgentStats` re-applies it (`AgentStatCalculateModel.cs:20`), and the resistances (`AgentStatCalculateModel.cs:141`, `AgentStatCalculateModel.cs:144`, `AgentStatCalculateModel.cs:147`) and multipliers (`AgentStatCalculateModel.cs:132`, `AgentStatCalculateModel.cs:135`, `AgentStatCalculateModel.cs:138`) are pure queries. The virtual half is where the vanilla numbers actually live, and they are worth reading because they are not neutral: `HasHeavyArmor` is a single-body-part threshold — `GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType.Chest) >= 24f` (`AgentStatCalculateModel.cs:31`) — and `GetEnvironmentSpeedFactor` applies rain and a night penalty multiplicatively (`AgentStatCalculateModel.cs:53`-`AgentStatCalculateModel.cs:60`). `SetAILevelMultiplier` (`AgentStatCalculateModel.cs:165`) and its reset (`AgentStatCalculateModel.cs:159`) write a single field that defaults to `1f` (`AgentStatCalculateModel.cs:277`).

## How to use

**Getting one.** Subclass it and register the subclass as a `GameModel`; read it through `MissionGameModels.Current.AgentStatCalculateModel` (`MissionGameModels.cs:19`). Most of the surface is useful *without* subclassing, because the `virtual` members carry real bodies.

**Typical use.**

```csharp
AgentStatCalculateModel model = MissionGameModels.Current.AgentStatCalculateModel;  // MissionGameModels.cs:19

// Defaults you can rely on without overriding anything.
bool heavy = model.HasHeavyArmor(agent);                                     // AgentStatCalculateModel.cs:29
float encumbrance = model.GetEffectiveArmorEncumbrance(agent, agent.Equipment);  // :35
float maxHealth = model.GetEffectiveMaxHealth(agent);                         // :41
float speedFactor = model.GetEnvironmentSpeedFactor(agent);                    // :47

// Difficulty tuning (AgentStatCalculateModel.cs:165).
model.SetAILevelMultiplier(1.2f);
float aiThreshold = model.CalculateAIAttackOnDecideMaxValue();                 // :66
model.ResetAILevelMultiplier();                                                // :159
```

**Watch out.** `CalculateAIAttackOnDecideMaxValue()` (`AgentStatCalculateModel.cs:66`) is **not virtual** and returns a step function of difficulty: `0.16f` below a difficulty modifier of `0.5f` and `0.48f` at or above it (`AgentStatCalculateModel.cs:68`-`AgentStatCalculateModel.cs:72`) — a threefold jump across the boundary, not a curve. So a mod that nudges `GetDifficultyModifier` from `0.49` to `0.51` to make the AI slightly smarter silently triples its attack-decision threshold, and because the method cannot be overridden there is no way to soften it except by changing `GetDifficultyModifier` itself. The related trap is `HasHeavyArmor`: it inspects the **chest only** (`AgentStatCalculateModel.cs:31`), so an agent in a heavy helmet, greaves and gauntlets with a light cuirass reports `false`, and any behaviour gated on it treats full plate as unarmoured.

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
- [AgentDrivenProperties](../AgentDrivenProperties)
- [Agent](../../mission/Agent)