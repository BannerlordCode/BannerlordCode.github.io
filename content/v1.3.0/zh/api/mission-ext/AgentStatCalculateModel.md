---
title: "AgentStatCalculateModel"
description: "AgentStatCalculateModel 的自动生成类参考。"
---
# AgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**Base:** `MBGameModel<AgentStatCalculateModel>`
**File:** `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`

## 概述

`AgentStatCalculateModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `AgentStatCalculateModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### InitializeAgentStats
`public abstract void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**用途 / Purpose:** 为 agent stats 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
```

### InitializeMissionEquipment
`public virtual void InitializeMissionEquipment(Agent agent)`

**用途 / Purpose:** 为 mission equipment 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.InitializeMissionEquipment(agent);
```

### UpdateAgentStats
`public abstract void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**用途 / Purpose:** 重新计算并更新 agent stats 的最新表示。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.UpdateAgentStats(agent, agentDrivenProperties);
```

### GetDifficultyModifier
`public abstract float GetDifficultyModifier()`

**用途 / Purpose:** 读取并返回当前对象中 difficulty modifier 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetDifficultyModifier();
```

### CanAgentRideMount
`public abstract bool CanAgentRideMount(Agent agent, Agent targetMount)`

**用途 / Purpose:** 检查当前对象是否满足 agent ride mount 的前置条件。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.CanAgentRideMount(agent, targetMount);
```

### HasHeavyArmor
`public virtual bool HasHeavyArmor(Agent agent)`

**用途 / Purpose:** 判断当前对象是否已经持有 heavy armor。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.HasHeavyArmor(agent);
```

### GetEffectiveArmorEncumbrance
`public virtual float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)`

**用途 / Purpose:** 读取并返回当前对象中 effective armor encumbrance 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEffectiveArmorEncumbrance(agent, equipment);
```

### GetEffectiveMaxHealth
`public virtual float GetEffectiveMaxHealth(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 effective max health 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEffectiveMaxHealth(agent);
```

### GetEnvironmentSpeedFactor
`public virtual float GetEnvironmentSpeedFactor(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 environment speed factor 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEnvironmentSpeedFactor(agent);
```

### CalculateAIAttackOnDecideMaxValue
`public float CalculateAIAttackOnDecideMaxValue()`

**用途 / Purpose:** 计算a i attack on decide max value的当前值或结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.CalculateAIAttackOnDecideMaxValue();
```

### GetWeaponInaccuracy
`public virtual float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**用途 / Purpose:** 读取并返回当前对象中 weapon inaccuracy 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetWeaponInaccuracy(agent, weapon, 0);
```

### GetDetachmentCostMultiplierOfAgent
`public virtual float GetDetachmentCostMultiplierOfAgent(Agent agent, IDetachment detachment)`

**用途 / Purpose:** 读取并返回当前对象中 detachment cost multiplier of agent 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetDetachmentCostMultiplierOfAgent(agent, detachment);
```

### GetInteractionDistance
`public virtual float GetInteractionDistance(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 interaction distance 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetInteractionDistance(agent);
```

### GetMaxCameraZoom
`public virtual float GetMaxCameraZoom(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 max camera zoom 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetMaxCameraZoom(agent);
```

### GetEffectiveSkill
`public virtual int GetEffectiveSkill(Agent agent, SkillObject skill)`

**用途 / Purpose:** 读取并返回当前对象中 effective skill 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEffectiveSkill(agent, skill);
```

### GetEffectiveSkillForWeapon
`public virtual int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 读取并返回当前对象中 effective skill for weapon 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEffectiveSkillForWeapon(agent, weapon);
```

### GetWeaponDamageMultiplier
`public abstract float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 读取并返回当前对象中 weapon damage multiplier 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetWeaponDamageMultiplier(agent, weapon);
```

### GetEquipmentStealthBonus
`public abstract float GetEquipmentStealthBonus(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 equipment stealth bonus 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetEquipmentStealthBonus(agent);
```

### GetSneakAttackMultiplier
`public abstract float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 读取并返回当前对象中 sneak attack multiplier 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetSneakAttackMultiplier(agent, weapon);
```

### GetKnockBackResistance
`public abstract float GetKnockBackResistance(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 knock back resistance 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetKnockBackResistance(agent);
```

### GetKnockDownResistance
`public abstract float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)`

**用途 / Purpose:** 读取并返回当前对象中 knock down resistance 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetKnockDownResistance(agent, strikeType.Invalid);
```

### GetDismountResistance
`public abstract float GetDismountResistance(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 dismount resistance 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetDismountResistance(agent);
```

### GetBreatheHoldMaxDuration
`public abstract float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**用途 / Purpose:** 读取并返回当前对象中 breathe hold max duration 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetBreatheHoldMaxDuration(agent, 0);
```

### GetMissionDebugInfoForAgent
`public virtual string GetMissionDebugInfoForAgent(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 mission debug info for agent 的结果。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
var result = agentStatCalculateModel.GetMissionDebugInfoForAgent(agent);
```

### ResetAILevelMultiplier
`public void ResetAILevelMultiplier()`

**用途 / Purpose:** 将 a i level multiplier 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.ResetAILevelMultiplier();
```

### SetAILevelMultiplier
`public void SetAILevelMultiplier(float multiplier)`

**用途 / Purpose:** 为 a i level multiplier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentStatCalculateModel 实例
AgentStatCalculateModel agentStatCalculateModel = ...;
agentStatCalculateModel.SetAILevelMultiplier(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
AgentStatCalculateModel instance = ...;
```

## 参见

- [本区域目录](../)