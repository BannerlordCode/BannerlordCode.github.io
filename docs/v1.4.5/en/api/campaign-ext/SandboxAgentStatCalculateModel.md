<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxAgentStatCalculateModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxAgentStatCalculateModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.GameComponents/SandboxAgentStatCalculateModel.cs`

## Overview

`SandboxAgentStatCalculateModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxAgentStatCalculateModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDifficultyModifier
`public override float GetDifficultyModifier()`

**Purpose:** Gets the current value of `difficulty modifier`.

### CanAgentRideMount
`public override bool CanAgentRideMount(Agent agent, Agent targetMount)`

**Purpose:** Checks whether the current object can `agent ride mount`.

### InitializeAgentStats
`public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**Purpose:** Initializes the state, resources, or bindings for `agent stats`.

### InitializeMissionEquipment
`public override void InitializeMissionEquipment(Agent agent)`

**Purpose:** Initializes the state, resources, or bindings for `mission equipment`.

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**Purpose:** Updates the state or data of `agent stats`.

### GetEffectiveSkill
`public override int GetEffectiveSkill(Agent agent, SkillObject skill)`

**Purpose:** Gets the current value of `effective skill`.

### GetWeaponDamageMultiplier
`public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Gets the current value of `weapon damage multiplier`.

### GetEquipmentStealthBonus
`public override float GetEquipmentStealthBonus(Agent agent)`

**Purpose:** Gets the current value of `equipment stealth bonus`.

### GetSneakAttackMultiplier
`public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Gets the current value of `sneak attack multiplier`.

### GetKnockBackResistance
`public override float GetKnockBackResistance(Agent agent)`

**Purpose:** Gets the current value of `knock back resistance`.

### GetKnockDownResistance
`public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = (StrikeType)(-1))`

**Purpose:** Gets the current value of `knock down resistance`.

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

**Purpose:** Gets the current value of `dismount resistance`.

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**Purpose:** Gets the current value of `breathe hold max duration`.

### GetWeaponInaccuracy
`public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**Purpose:** Gets the current value of `weapon inaccuracy`.

### GetInteractionDistance
`public override float GetInteractionDistance(Agent agent)`

**Purpose:** Gets the current value of `interaction distance`.

### GetMaxCameraZoom
`public override float GetMaxCameraZoom(Agent agent)`

**Purpose:** Gets the current value of `max camera zoom`.

### GetPerksOfAgent
`public List<PerkObject> GetPerksOfAgent(CharacterObject agentCharacter, SkillObject skill = null, bool filterPartyRole = false, PartyRole partyRole = (PartyRole)12)`

**Purpose:** Gets the current value of `perks of agent`.

### GetMissionDebugInfoForAgent
`public override string GetMissionDebugInfoForAgent(Agent agent)`

**Purpose:** Gets the current value of `mission debug info for agent`.

### GetEffectiveArmorEncumbrance
`public override float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)`

**Purpose:** Gets the current value of `effective armor encumbrance`.

### GetEffectiveMaxHealth
`public override float GetEffectiveMaxHealth(Agent agent)`

**Purpose:** Gets the current value of `effective max health`.

### GetEnvironmentSpeedFactor
`public override float GetEnvironmentSpeedFactor(Agent agent)`

**Purpose:** Gets the current value of `environment speed factor`.

### CalculateMaximumSpeedMultiplier
`public static float CalculateMaximumSpeedMultiplier(int athletics, float baseWeight, float totalEncumbrance)`

**Purpose:** Handles logic related to `calculate maximum speed multiplier`.

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxAgentStatCalculateModel>(new MySandboxAgentStatCalculateModel());
```

## See Also

- [Complete Class Catalog](../catalog)