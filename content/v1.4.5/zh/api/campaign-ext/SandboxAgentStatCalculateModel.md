---
title: "SandboxAgentStatCalculateModel"
description: "SandboxAgentStatCalculateModel 的自动生成类参考。"
---
# SandboxAgentStatCalculateModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `Modules.SandBox/SandBox/SandBox.GameComponents/SandboxAgentStatCalculateModel.cs`

## 概述

`SandboxAgentStatCalculateModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxAgentStatCalculateModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDifficultyModifier
`public override float GetDifficultyModifier()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 difficulty modifier 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetDifficultyModifier();
```

### CanAgentRideMount
`public override bool CanAgentRideMount(Agent agent, Agent targetMount)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 agent ride mount 的前置条件。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.CanAgentRideMount(agent, targetMount);
```

### InitializeAgentStats
`public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**用途 / Purpose:** **用途 / Purpose:** 为 agent stats 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
sandboxAgentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
```

### InitializeMissionEquipment
`public override void InitializeMissionEquipment(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 为 mission equipment 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
sandboxAgentStatCalculateModel.InitializeMissionEquipment(agent);
```

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 agent stats 的最新表示。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
sandboxAgentStatCalculateModel.UpdateAgentStats(agent, agentDrivenProperties);
```

### GetEffectiveSkill
`public override int GetEffectiveSkill(Agent agent, SkillObject skill)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 effective skill 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEffectiveSkill(agent, skill);
```

### GetWeaponDamageMultiplier
`public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 weapon damage multiplier 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetWeaponDamageMultiplier(agent, weapon);
```

### GetEquipmentStealthBonus
`public override float GetEquipmentStealthBonus(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 equipment stealth bonus 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEquipmentStealthBonus(agent);
```

### GetSneakAttackMultiplier
`public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sneak attack multiplier 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetSneakAttackMultiplier(agent, weapon);
```

### GetKnockBackResistance
`public override float GetKnockBackResistance(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 knock back resistance 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetKnockBackResistance(agent);
```

### GetKnockDownResistance
`public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = (StrikeType)(-1))`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 knock down resistance 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetKnockDownResistance(agent, (StrikeType)(-1));
```

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 dismount resistance 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetDismountResistance(agent);
```

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 breathe hold max duration 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetBreatheHoldMaxDuration(agent, 0);
```

### GetWeaponInaccuracy
`public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 weapon inaccuracy 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetWeaponInaccuracy(agent, weapon, 0);
```

### GetInteractionDistance
`public override float GetInteractionDistance(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 interaction distance 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetInteractionDistance(agent);
```

### GetMaxCameraZoom
`public override float GetMaxCameraZoom(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 max camera zoom 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetMaxCameraZoom(agent);
```

### GetPerksOfAgent
`public List<PerkObject> GetPerksOfAgent(CharacterObject agentCharacter, SkillObject skill = null, bool filterPartyRole = false, PartyRole partyRole = (PartyRole)12)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 perks of agent 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetPerksOfAgent(agentCharacter, null, false, (PartyRole)12);
```

### GetMissionDebugInfoForAgent
`public override string GetMissionDebugInfoForAgent(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mission debug info for agent 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetMissionDebugInfoForAgent(agent);
```

### GetEffectiveArmorEncumbrance
`public override float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 effective armor encumbrance 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEffectiveArmorEncumbrance(agent, equipment);
```

### GetEffectiveMaxHealth
`public override float GetEffectiveMaxHealth(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 effective max health 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEffectiveMaxHealth(agent);
```

### GetEnvironmentSpeedFactor
`public override float GetEnvironmentSpeedFactor(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 environment speed factor 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentStatCalculateModel 实例
SandboxAgentStatCalculateModel sandboxAgentStatCalculateModel = ...;
var result = sandboxAgentStatCalculateModel.GetEnvironmentSpeedFactor(agent);
```

### CalculateMaximumSpeedMultiplier
`public static float CalculateMaximumSpeedMultiplier(int athletics, float baseWeight, float totalEncumbrance)`

**用途 / Purpose:** **用途 / Purpose:** 计算maximum speed multiplier的当前值或结果。

```csharp
// 静态调用，不需要实例
SandboxAgentStatCalculateModel.CalculateMaximumSpeedMultiplier(0, 0, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxAgentStatCalculateModel>(new MySandboxAgentStatCalculateModel());
```

## 参见

- [本区域目录](../)