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

`CustomBattleAgentStatCalculateModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CustomBattleAgentStatCalculateModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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