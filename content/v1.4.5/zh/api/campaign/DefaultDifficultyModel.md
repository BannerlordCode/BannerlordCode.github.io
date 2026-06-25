---
title: "DefaultDifficultyModel"
description: "DefaultDifficultyModel 的自动生成类参考。"
---
# DefaultDifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDifficultyModel : DifficultyModel`
**Base:** `DifficultyModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultDifficultyModel.cs`

## 概述

`DefaultDifficultyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultDifficultyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPlayerTroopsReceivedDamageMultiplier
`public override float GetPlayerTroopsReceivedDamageMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「player troops received damage multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDifficultyModel 实例
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPlayerTroopsReceivedDamageMultiplier();
```

### GetPlayerRecruitSlotBonus
`public override int GetPlayerRecruitSlotBonus()`

**用途 / Purpose:** 读取并返回当前对象中 「player recruit slot bonus」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDifficultyModel 实例
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPlayerRecruitSlotBonus();
```

### GetPlayerMapMovementSpeedBonusMultiplier
`public override float GetPlayerMapMovementSpeedBonusMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「player map movement speed bonus multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDifficultyModel 实例
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPlayerMapMovementSpeedBonusMultiplier();
```

### GetStealthDifficultyMultiplier
`public override float GetStealthDifficultyMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「stealth difficulty multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDifficultyModel 实例
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetStealthDifficultyMultiplier();
```

### GetDisguiseDifficultyMultiplier
`public override float GetDisguiseDifficultyMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「disguise difficulty multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDifficultyModel 实例
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetDisguiseDifficultyMultiplier();
```

### GetCombatAIDifficultyMultiplier
`public override float GetCombatAIDifficultyMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「combat a i difficulty multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDifficultyModel 实例
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetCombatAIDifficultyMultiplier();
```

### GetPersuasionBonusChance
`public override float GetPersuasionBonusChance()`

**用途 / Purpose:** 读取并返回当前对象中 「persuasion bonus chance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDifficultyModel 实例
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPersuasionBonusChance();
```

### GetClanMemberDeathChanceMultiplier
`public override float GetClanMemberDeathChanceMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「clan member death chance multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDifficultyModel 实例
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetClanMemberDeathChanceMultiplier();
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDifficultyModel>(new MyDefaultDifficultyModel());
```

## 参见

- [本区域目录](../)