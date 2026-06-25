---
title: "MultiplayerAgentStatCalculateModel"
description: "Auto-generated class reference for MultiplayerAgentStatCalculateModel."
---
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

**Purpose:** **Purpose:** Reads and returns the difficulty modifier value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetDifficultyModifier();
```

### CanAgentRideMount
`public override bool CanAgentRideMount(Agent agent, Agent targetMount)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for agent ride mount.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.CanAgentRideMount(agent, targetMount);
```

### InitializeAgentStats
`public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by agent stats.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
multiplayerAgentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
```

### GetWeaponInaccuracy
`public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**Purpose:** **Purpose:** Reads and returns the weapon inaccuracy value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetWeaponInaccuracy(agent, weapon, 0);
```

### GetWeaponDamageMultiplier
`public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** **Purpose:** Reads and returns the weapon damage multiplier value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetWeaponDamageMultiplier(agent, weapon);
```

### GetEquipmentStealthBonus
`public override float GetEquipmentStealthBonus(Agent agent)`

**Purpose:** **Purpose:** Reads and returns the equipment stealth bonus value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetEquipmentStealthBonus(agent);
```

### GetSneakAttackMultiplier
`public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** **Purpose:** Reads and returns the sneak attack multiplier value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetSneakAttackMultiplier(agent, weapon);
```

### GetKnockBackResistance
`public override float GetKnockBackResistance(Agent agent)`

**Purpose:** **Purpose:** Reads and returns the knock back resistance value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetKnockBackResistance(agent);
```

### GetKnockDownResistance
`public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)`

**Purpose:** **Purpose:** Reads and returns the knock down resistance value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetKnockDownResistance(agent, strikeType.Invalid);
```

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

**Purpose:** **Purpose:** Reads and returns the dismount resistance value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetDismountResistance(agent);
```

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**Purpose:** **Purpose:** Reads and returns the breathe hold max duration value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetBreatheHoldMaxDuration(agent, 0);
```

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of agent stats.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
multiplayerAgentStatCalculateModel.UpdateAgentStats(agent, agentDrivenProperties);
```

### GetEffectiveSkillForWeapon
`public override int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)`

**Purpose:** **Purpose:** Reads and returns the effective skill for weapon value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentStatCalculateModel from the subsystem API first
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetEffectiveSkillForWeapon(agent, weapon);
```

### CalculateMaximumSpeedMultiplier
`public static float CalculateMaximumSpeedMultiplier(Agent agent)`

**Purpose:** **Purpose:** Calculates the current value or result of maximum speed multiplier.

```csharp
// Static call; no instance required
MultiplayerAgentStatCalculateModel.CalculateMaximumSpeedMultiplier(agent);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<MultiplayerAgentStatCalculateModel>(new MyMultiplayerAgentStatCalculateModel());
```

## See Also

- [Area Index](../)