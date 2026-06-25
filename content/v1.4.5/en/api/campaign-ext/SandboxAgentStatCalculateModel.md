---
title: "SandboxAgentStatCalculateModel"
description: "Auto-generated class reference for SandboxAgentStatCalculateModel."
---
# SandboxAgentStatCalculateModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `Modules.SandBox/SandBox/SandBox.GameComponents/SandboxAgentStatCalculateModel.cs`

## Overview

`SandboxAgentStatCalculateModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxAgentStatCalculateModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDifficultyModifier
`public override float GetDifficultyModifier()`

**Purpose:** Reads and returns the `difficulty modifier` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetDifficultyModifier();
```

### CanAgentRideMount
`public override bool CanAgentRideMount(Agent agent, Agent targetMount)`

**Purpose:** Checks whether the current object meets the preconditions for `agent ride mount`.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.CanAgentRideMount(agent, targetMount);
```

### InitializeAgentStats
`public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**Purpose:** Prepares the resources, state, or bindings required by `agent stats`.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
sandboxAgentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
```

### InitializeMissionEquipment
`public override void InitializeMissionEquipment(Agent agent)`

**Purpose:** Prepares the resources, state, or bindings required by `mission equipment`.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
sandboxAgentStatCalculateModel.InitializeMissionEquipment(agent);
```

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**Purpose:** Recalculates and stores the latest representation of `agent stats`.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
sandboxAgentStatCalculateModel.UpdateAgentStats(agent, agentDrivenProperties);
```

### GetEffectiveSkill
`public override int GetEffectiveSkill(Agent agent, SkillObject skill)`

**Purpose:** Reads and returns the `effective skill` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEffectiveSkill(agent, skill);
```

### GetWeaponDamageMultiplier
`public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Reads and returns the `weapon damage multiplier` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetWeaponDamageMultiplier(agent, weapon);
```

### GetEquipmentStealthBonus
`public override float GetEquipmentStealthBonus(Agent agent)`

**Purpose:** Reads and returns the `equipment stealth bonus` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEquipmentStealthBonus(agent);
```

### GetSneakAttackMultiplier
`public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Reads and returns the `sneak attack multiplier` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetSneakAttackMultiplier(agent, weapon);
```

### GetKnockBackResistance
`public override float GetKnockBackResistance(Agent agent)`

**Purpose:** Reads and returns the `knock back resistance` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetKnockBackResistance(agent);
```

### GetKnockDownResistance
`public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = (StrikeType)(-1))`

**Purpose:** Reads and returns the `knock down resistance` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetKnockDownResistance(agent, (StrikeType)(-1));
```

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

**Purpose:** Reads and returns the `dismount resistance` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetDismountResistance(agent);
```

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**Purpose:** Reads and returns the `breathe hold max duration` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetBreatheHoldMaxDuration(agent, 0);
```

### GetWeaponInaccuracy
`public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**Purpose:** Reads and returns the `weapon inaccuracy` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetWeaponInaccuracy(agent, weapon, 0);
```

### GetInteractionDistance
`public override float GetInteractionDistance(Agent agent)`

**Purpose:** Reads and returns the `interaction distance` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetInteractionDistance(agent);
```

### GetMaxCameraZoom
`public override float GetMaxCameraZoom(Agent agent)`

**Purpose:** Reads and returns the `max camera zoom` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetMaxCameraZoom(agent);
```

### GetPerksOfAgent
`public List<PerkObject> GetPerksOfAgent(CharacterObject agentCharacter, SkillObject skill = null, bool filterPartyRole = false, PartyRole partyRole = (PartyRole)12)`

**Purpose:** Reads and returns the `perks of agent` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetPerksOfAgent(agentCharacter, null, false, (PartyRole)12);
```

### GetMissionDebugInfoForAgent
`public override string GetMissionDebugInfoForAgent(Agent agent)`

**Purpose:** Reads and returns the `mission debug info for agent` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetMissionDebugInfoForAgent(agent);
```

### GetEffectiveArmorEncumbrance
`public override float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)`

**Purpose:** Reads and returns the `effective armor encumbrance` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEffectiveArmorEncumbrance(agent, equipment);
```

### GetEffectiveMaxHealth
`public override float GetEffectiveMaxHealth(Agent agent)`

**Purpose:** Reads and returns the `effective max health` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEffectiveMaxHealth(agent);
```

### GetEnvironmentSpeedFactor
`public override float GetEnvironmentSpeedFactor(Agent agent)`

**Purpose:** Reads and returns the `environment speed factor` value held by the current object.

```csharp
// Obtain an instance of SandboxAgentStatCalculateModel from the subsystem API first
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEnvironmentSpeedFactor(agent);
```

### CalculateMaximumSpeedMultiplier
`public static float CalculateMaximumSpeedMultiplier(int athletics, float baseWeight, float totalEncumbrance)`

**Purpose:** Calculates the current value or result of `maximum speed multiplier`.

```csharp
// Static call; no instance required
SandboxAgentStatCalculateModel.CalculateMaximumSpeedMultiplier(0, 0, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxAgentStatCalculateModel>(new MySandboxAgentStatCalculateModel());
```

## See Also

- [Area Index](../)