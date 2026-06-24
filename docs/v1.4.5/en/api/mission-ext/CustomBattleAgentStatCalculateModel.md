<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleAgentStatCalculateModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleAgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleAgentStatCalculateModel.cs`

## Overview

`CustomBattleAgentStatCalculateModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CustomBattleAgentStatCalculateModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**Purpose:** Updates the state or data of `agent stats`.

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

### GetWeaponInaccuracy
`public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**Purpose:** Gets the current value of `weapon inaccuracy`.

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**Purpose:** Gets the current value of `breathe hold max duration`.

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleAgentStatCalculateModel>(new MyCustomBattleAgentStatCalculateModel());
```

## See Also

- [Complete Class Catalog](../catalog)