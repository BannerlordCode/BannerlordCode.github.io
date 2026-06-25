---
title: "CustomBattleAgentStatCalculateModel"
description: "CustomBattleAgentStatCalculateModel 的自动生成类参考。"
---
# CustomBattleAgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentStatCalculateModel : AgentStatCalculateModel`
**Base:** `AgentStatCalculateModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleAgentStatCalculateModel.cs`

## 概述

`CustomBattleAgentStatCalculateModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CustomBattleAgentStatCalculateModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDifficultyModifier
`public override float GetDifficultyModifier()`

**用途 / Purpose:** 读取并返回当前对象中 「difficulty modifier」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetDifficultyModifier();
```

### CanAgentRideMount
`public override bool CanAgentRideMount(Agent agent, Agent targetMount)`

**用途 / Purpose:** 检查当前对象是否满足 「agent ride mount」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.CanAgentRideMount(agent, targetMount);
```

### InitializeAgentStats
`public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`

**用途 / Purpose:** 为 「agent stats」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
customBattleAgentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
```

### UpdateAgentStats
`public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`

**用途 / Purpose:** 重新计算并更新 「agent stats」 的最新表示。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
customBattleAgentStatCalculateModel.UpdateAgentStats(agent, agentDrivenProperties);
```

### GetWeaponDamageMultiplier
`public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon damage multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetWeaponDamageMultiplier(agent, weapon);
```

### GetEquipmentStealthBonus
`public override float GetEquipmentStealthBonus(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment stealth bonus」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetEquipmentStealthBonus(agent);
```

### GetSneakAttackMultiplier
`public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「sneak attack multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetSneakAttackMultiplier(agent, weapon);
```

### GetKnockBackResistance
`public override float GetKnockBackResistance(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「knock back resistance」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetKnockBackResistance(agent);
```

### GetKnockDownResistance
`public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)`

**用途 / Purpose:** 读取并返回当前对象中 「knock down resistance」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetKnockDownResistance(agent, strikeType.Invalid);
```

### GetDismountResistance
`public override float GetDismountResistance(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「dismount resistance」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetDismountResistance(agent);
```

### GetWeaponInaccuracy
`public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon inaccuracy」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetWeaponInaccuracy(agent, weapon, 0);
```

### GetBreatheHoldMaxDuration
`public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`

**用途 / Purpose:** 读取并返回当前对象中 「breathe hold max duration」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentStatCalculateModel 实例
CustomBattleAgentStatCalculateModel customBattleAgentStatCalculateModel = ...;
var result = customBattleAgentStatCalculateModel.GetBreatheHoldMaxDuration(agent, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<CustomBattleAgentStatCalculateModel>(new MyCustomBattleAgentStatCalculateModel());
```

## 参见

- [本区域目录](../)