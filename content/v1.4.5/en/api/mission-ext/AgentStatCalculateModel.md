---
title: "AgentStatCalculateModel"
description: "Auto-generated class reference for AgentStatCalculateModel."
---
# AgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**Base:** `MBGameModel<AgentStatCalculateModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`

## Overview

`AgentStatCalculateModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `AgentStatCalculateModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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