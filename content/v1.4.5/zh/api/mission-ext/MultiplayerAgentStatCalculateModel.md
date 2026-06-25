---
title: "MultiplayerAgentStatCalculateModel"
description: "MultiplayerAgentStatCalculateModel 的自动生成类参考。"
---
# MultiplayerAgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs`

## 概述

`MultiplayerAgentStatCalculateModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MultiplayerAgentStatCalculateModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDifficultyModifier
`public override float GetDifficultyModifier()`

**用途 / Purpose:** 读取并返回当前对象中 「difficulty modifier」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetDifficultyModifier();
```

### CanAgentRideMount
`public override bool CanAgentRideMount(Agent agent, Agent targetMount)`

**用途 / Purpose:** 检查当前对象是否满足 「agent ride mount」 的前置条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.CanAgentRideMount(agent, targetMount);
```

### InitializeAgentStats
`public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**用途 / Purpose:** 为 「agent stats」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
multiplayerAgentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
```

### GetWeaponDamageMultiplier
`public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon damage multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetWeaponDamageMultiplier(agent, weapon);
```

### GetEquipmentStealthBonus
`public override float GetEquipmentStealthBonus(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment stealth bonus」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetEquipmentStealthBonus(agent);
```

### GetSneakAttackMultiplier
`public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「sneak attack multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetSneakAttackMultiplier(agent, weapon);
```

### GetKnockBackResistance
`public override float GetKnockBackResistance(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「knock back resistance」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetKnockBackResistance(agent);
```

### GetKnockDownResistance
`public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)`

**用途 / Purpose:** 读取并返回当前对象中 「knock down resistance」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetKnockDownResistance(agent, strikeType.Invalid);
```

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「dismount resistance」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetDismountResistance(agent);
```

### GetWeaponInaccuracy
`public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon inaccuracy」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetWeaponInaccuracy(agent, weapon, 0);
```

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**用途 / Purpose:** 读取并返回当前对象中 「breathe hold max duration」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetBreatheHoldMaxDuration(agent, 0);
```

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**用途 / Purpose:** 重新计算并更新 「agent stats」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
multiplayerAgentStatCalculateModel.UpdateAgentStats(agent, agentDrivenProperties);
```

### GetEffectiveSkillForWeapon
`public override int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「effective skill for weapon」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentStatCalculateModel 实例
MultiplayerAgentStatCalculateModel multiplayerAgentStatCalculateModel = ...;
var result = multiplayerAgentStatCalculateModel.GetEffectiveSkillForWeapon(agent, weapon);
```

### CalculateMaximumSpeedMultiplier
`public static float CalculateMaximumSpeedMultiplier(Agent agent)`

**用途 / Purpose:** 计算「maximum speed multiplier」的当前值或结果。

```csharp
// 静态调用，不需要实例
MultiplayerAgentStatCalculateModel.CalculateMaximumSpeedMultiplier(agent);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<MultiplayerAgentStatCalculateModel>(new MyMultiplayerAgentStatCalculateModel());
```

## 参见

- [本区域目录](../)