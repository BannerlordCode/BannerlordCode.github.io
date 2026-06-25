---
title: "AgentStatCalculateModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentStatCalculateModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**Base:** `MBGameModel<AgentStatCalculateModel>`
**File:** `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`

## Overview

`AgentStatCalculateModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `AgentStatCalculateModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### InitializeAgentStats
`public abstract void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**Purpose:** Initializes the state, resources, or bindings for `agent stats`.

### InitializeMissionEquipment
`public virtual void InitializeMissionEquipment(Agent agent)`

**Purpose:** Initializes the state, resources, or bindings for `mission equipment`.

### InitializeAgentStatsAfterDeploymentFinished
`public virtual void InitializeAgentStatsAfterDeploymentFinished(Agent agent)`

**Purpose:** Initializes the state, resources, or bindings for `agent stats after deployment finished`.

### InitializeMissionEquipmentAfterDeploymentFinished
`public virtual void InitializeMissionEquipmentAfterDeploymentFinished(Agent agent)`

**Purpose:** Initializes the state, resources, or bindings for `mission equipment after deployment finished`.

### UpdateAgentStats
`public abstract void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**Purpose:** Updates the state or data of `agent stats`.

### GetDifficultyModifier
`public abstract float GetDifficultyModifier()`

**Purpose:** Gets the current value of `difficulty modifier`.

### CanAgentRideMount
`public abstract bool CanAgentRideMount(Agent agent, Agent targetMount)`

**Purpose:** Checks whether the current object can `agent ride mount`.

### HasHeavyArmor
`public virtual bool HasHeavyArmor(Agent agent)`

**Purpose:** Checks whether the current object has/contains `heavy armor`.

### GetEffectiveArmorEncumbrance
`public virtual float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)`

**Purpose:** Gets the current value of `effective armor encumbrance`.

### GetEffectiveMaxHealth
`public virtual float GetEffectiveMaxHealth(Agent agent)`

**Purpose:** Gets the current value of `effective max health`.

### GetEnvironmentSpeedFactor
`public virtual float GetEnvironmentSpeedFactor(Agent agent)`

**Purpose:** Gets the current value of `environment speed factor`.

### CalculateAIAttackOnDecideMaxValue
`public float CalculateAIAttackOnDecideMaxValue()`

**Purpose:** Handles logic related to `calculate a i attack on decide max value`.

### GetWeaponInaccuracy
`public virtual float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**Purpose:** Gets the current value of `weapon inaccuracy`.

### GetDetachmentCostMultiplierOfAgent
`public virtual float GetDetachmentCostMultiplierOfAgent(Agent agent, IDetachment detachment)`

**Purpose:** Gets the current value of `detachment cost multiplier of agent`.

### GetInteractionDistance
`public virtual float GetInteractionDistance(Agent agent)`

**Purpose:** Gets the current value of `interaction distance`.

### GetMaxCameraZoom
`public virtual float GetMaxCameraZoom(Agent agent)`

**Purpose:** Gets the current value of `max camera zoom`.

### GetEffectiveSkill
`public virtual int GetEffectiveSkill(Agent agent, SkillObject skill)`

**Purpose:** Gets the current value of `effective skill`.

### GetEffectiveSkillForWeapon
`public virtual int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)`

**Purpose:** Gets the current value of `effective skill for weapon`.

### GetWeaponDamageMultiplier
`public abstract float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Gets the current value of `weapon damage multiplier`.

### GetEquipmentStealthBonus
`public abstract float GetEquipmentStealthBonus(Agent agent)`

**Purpose:** Gets the current value of `equipment stealth bonus`.

### GetSneakAttackMultiplier
`public abstract float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Gets the current value of `sneak attack multiplier`.

### GetKnockBackResistance
`public abstract float GetKnockBackResistance(Agent agent)`

**Purpose:** Gets the current value of `knock back resistance`.

### GetKnockDownResistance
`public abstract float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)`

**Purpose:** Gets the current value of `knock down resistance`.

### GetDismountResistance
`public abstract float GetDismountResistance(Agent agent)`

**Purpose:** Gets the current value of `dismount resistance`.

### GetBreatheHoldMaxDuration
`public abstract float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**Purpose:** Gets the current value of `breathe hold max duration`.

### GetMissionDebugInfoForAgent
`public virtual string GetMissionDebugInfoForAgent(Agent agent)`

**Purpose:** Gets the current value of `mission debug info for agent`.

### ResetAILevelMultiplier
`public void ResetAILevelMultiplier()`

**Purpose:** Resets `a i level multiplier` to its initial state.

### SetAILevelMultiplier
`public void SetAILevelMultiplier(float multiplier)`

**Purpose:** Sets the value or state of `a i level multiplier`.

## Usage Example

```csharp
var implementation = new CustomAgentStatCalculateModel();
```

## See Also

- [Complete Class Catalog](../catalog)