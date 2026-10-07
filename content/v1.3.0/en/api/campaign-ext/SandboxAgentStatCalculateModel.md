---
title: "SandboxAgentStatCalculateModel"
description: "Auto-generated class reference for SandboxAgentStatCalculateModel."
---
# SandboxAgentStatCalculateModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `SandBox/GameComponents/SandboxAgentStatCalculateModel.cs`

## Overview

`SandboxAgentStatCalculateModel` is the bridge between a campaign character and the physics numbers the engine fights with. It derives an *effective* skill that differs from the character's real one — a formation captain's skills count for the formation, and an infantryman shooting a bow picks up bonuses meant for the ranged role (`SandBox/GameComponents/SandboxAgentStatCalculateModel.cs:197`) — then feeds that derived skill into movement, damage, accuracy and resistance: knockback, knockdown and dismount resistance all read `DefaultSkillEffects.*` through `GetEffectiveSkill` (`:374`, `:385`, `:405`), and non-humans get `float.MaxValue` instead. It also owns the environmental modifiers: rain cuts speed to `0.9`, and a horse at night is cut to `0.9` as well (`:769`), while `GetDifficultyModifier` returns the campaign's `GetCombatAIDifficultyMultiplier()` and falls back to `0.5f` when no campaign exists (`:22`).

## Mental Model

Think of this as a live projection, not a stat: every getter recomputes from the agent's current skills, perks and equipment, so there is no point at which you set a number and it sticks. `Agent.cs:5472` calls `InitializeMissionEquipment` while the agent is being built, and `InitializeAgentStats` ends by pushing the result back through `MissionGameModels.Current.AgentStatCalculateModel.UpdateAgentStats` (`:85`) — the model is re-entered while it is still initialising. Two consequences shape how a mod uses it. First, an override that changes skill *derivation* silently changes damage, accuracy and every resistance downstream, because those consumers all call `GetEffectiveSkill` rather than reading the raw skill. Second, mounts and animals short-circuit: `GetKnockBackResistance` returns `float.MaxValue` for anything that is not human (`:381`), so a mod that wants cavalry to be knockable has to override that branch rather than tune a value.

## Key Methods

### GetDifficultyModifier
`public override float GetDifficultyModifier()`

**Purpose:** Reads and returns the difficulty modifier value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetDifficultyModifier();
```

### CanAgentRideMount
`public override bool CanAgentRideMount(Agent agent, Agent targetMount)`

**Purpose:** Checks whether this instance meets the preconditions for agent ride mount.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.CanAgentRideMount(agent, targetMount);
```

### InitializeAgentStats
`public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**Purpose:** Prepares the resources, state, or bindings required by agent stats.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
sandboxAgentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
```

### InitializeMissionEquipment
`public override void InitializeMissionEquipment(Agent agent)`

**Purpose:** Prepares the resources, state, or bindings required by mission equipment.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
sandboxAgentStatCalculateModel.InitializeMissionEquipment(agent);
```

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**Purpose:** Recalculates and stores the latest representation of agent stats.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
sandboxAgentStatCalculateModel.UpdateAgentStats(agent, agentDrivenProperties);
```

### GetEffectiveSkill
`public override int GetEffectiveSkill(Agent agent, SkillObject skill)`

**Purpose:** Reads and returns the effective skill value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEffectiveSkill(agent, skill);
```

### GetWeaponDamageMultiplier
`public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Reads and returns the weapon damage multiplier value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetWeaponDamageMultiplier(agent, weapon);
```

### GetEquipmentStealthBonus
`public override float GetEquipmentStealthBonus(Agent agent)`

**Purpose:** Reads and returns the equipment stealth bonus value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEquipmentStealthBonus(agent);
```

### GetSneakAttackMultiplier
`public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**Purpose:** Reads and returns the sneak attack multiplier value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetSneakAttackMultiplier(agent, weapon);
```

### GetKnockBackResistance
`public override float GetKnockBackResistance(Agent agent)`

**Purpose:** Reads and returns the knock back resistance value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetKnockBackResistance(agent);
```

### GetKnockDownResistance
`public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = -1)`

**Purpose:** Reads and returns the knock down resistance value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetKnockDownResistance(agent, -1);
```

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

**Purpose:** Reads and returns the dismount resistance value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetDismountResistance(agent);
```

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**Purpose:** Reads and returns the breathe hold max duration value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetBreatheHoldMaxDuration(agent, 0);
```

### GetWeaponInaccuracy
`public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**Purpose:** Reads and returns the weapon inaccuracy value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetWeaponInaccuracy(agent, weapon, 0);
```

### GetInteractionDistance
`public override float GetInteractionDistance(Agent agent)`

**Purpose:** Reads and returns the interaction distance value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetInteractionDistance(agent);
```

### GetMaxCameraZoom
`public override float GetMaxCameraZoom(Agent agent)`

**Purpose:** Reads and returns the max camera zoom value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetMaxCameraZoom(agent);
```

### GetPerksOfAgent
`public List<PerkObject> GetPerksOfAgent(CharacterObject agentCharacter, SkillObject skill = null, bool filterPartyRole = false, PartyRole partyRole = 12)`

**Purpose:** Reads and returns the perks of agent value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetPerksOfAgent(agentCharacter, null, false, 12);
```

### GetMissionDebugInfoForAgent
`public override string GetMissionDebugInfoForAgent(Agent agent)`

**Purpose:** Reads and returns the mission debug info for agent value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetMissionDebugInfoForAgent(agent);
```

### GetEffectiveArmorEncumbrance
`public override float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)`

**Purpose:** Reads and returns the effective armor encumbrance value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEffectiveArmorEncumbrance(agent, equipment);
```

### GetEffectiveMaxHealth
`public override float GetEffectiveMaxHealth(Agent agent)`

**Purpose:** Reads and returns the effective max health value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEffectiveMaxHealth(agent);
```

### GetEnvironmentSpeedFactor
`public override float GetEnvironmentSpeedFactor(Agent agent)`

**Purpose:** Reads and returns the environment speed factor value held by this instance.

```csharp
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEnvironmentSpeedFactor(agent);
```

### CalculateMaximumSpeedMultiplier
`public static float CalculateMaximumSpeedMultiplier(int athletics, float baseWeight, float totalEncumbrance)`

**Purpose:** Calculates the current value or result of maximum speed multiplier.

```csharp
// Static call; no instance required
SandboxAgentStatCalculateModel.CalculateMaximumSpeedMultiplier(0, 0, 0);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<AgentStatCalculateModel>(new SandboxAgentStatCalculateModel());
}
```

`AgentStatCalculateModel` is declared as `MBGameModel<AgentStatCalculateModel>` (`AgentStatCalculateModel.cs:9`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxSubModule.cs:32`.

## See Also

- [Area Index](../)