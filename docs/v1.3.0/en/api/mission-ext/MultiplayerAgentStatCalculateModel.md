<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerAgentStatCalculateModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerAgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs`

## Overview

`MultiplayerAgentStatCalculateModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MultiplayerAgentStatCalculateModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

### GetWeaponInaccuracy
`public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**Purpose:** Gets the current value of `weapon inaccuracy`.

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
`public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)`

**Purpose:** Gets the current value of `knock down resistance`.

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

**Purpose:** Gets the current value of `dismount resistance`.

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**Purpose:** Gets the current value of `breathe hold max duration`.

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**Purpose:** Updates the state or data of `agent stats`.

### GetEffectiveSkillForWeapon
`public override int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)`

**Purpose:** Gets the current value of `effective skill for weapon`.

### CalculateMaximumSpeedMultiplier
`public static float CalculateMaximumSpeedMultiplier(Agent agent)`

**Purpose:** Handles logic related to `calculate maximum speed multiplier`.

## Usage Example

```csharp
Game.Current.ReplaceModel<MultiplayerAgentStatCalculateModel>(new MyMultiplayerAgentStatCalculateModel());
```

## See Also

- [Complete Class Catalog](../catalog)