---
title: "DifficultyModel"
description: "DifficultyModel 的自动生成类参考。"
---
# DifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DifficultyModel : MBGameModel<DifficultyModel>`
**Base:** `MBGameModel<DifficultyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DifficultyModel.cs`

## 概述

`DifficultyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DifficultyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPlayerTroopsReceivedDamageMultiplier
`public abstract float GetPlayerTroopsReceivedDamageMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「player troops received damage multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DifficultyModel 实例
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetPlayerTroopsReceivedDamageMultiplier();
```

### GetDamageToPlayerMultiplier
`public abstract float GetDamageToPlayerMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「damage to player multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DifficultyModel 实例
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetDamageToPlayerMultiplier();
```

### GetPlayerRecruitSlotBonus
`public abstract int GetPlayerRecruitSlotBonus()`

**用途 / Purpose:** 读取并返回当前对象中 「player recruit slot bonus」 的结果。

```csharp
// 先通过子系统 API 拿到 DifficultyModel 实例
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetPlayerRecruitSlotBonus();
```

### GetPlayerMapMovementSpeedBonusMultiplier
`public abstract float GetPlayerMapMovementSpeedBonusMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「player map movement speed bonus multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DifficultyModel 实例
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetPlayerMapMovementSpeedBonusMultiplier();
```

### GetCombatAIDifficultyMultiplier
`public abstract float GetCombatAIDifficultyMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「combat a i difficulty multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DifficultyModel 实例
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetCombatAIDifficultyMultiplier();
```

### GetPersuasionBonusChance
`public abstract float GetPersuasionBonusChance()`

**用途 / Purpose:** 读取并返回当前对象中 「persuasion bonus chance」 的结果。

```csharp
// 先通过子系统 API 拿到 DifficultyModel 实例
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetPersuasionBonusChance();
```

### GetClanMemberDeathChanceMultiplier
`public abstract float GetClanMemberDeathChanceMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「clan member death chance multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DifficultyModel 实例
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetClanMemberDeathChanceMultiplier();
```

### GetStealthDifficultyMultiplier
`public abstract float GetStealthDifficultyMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「stealth difficulty multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DifficultyModel 实例
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetStealthDifficultyMultiplier();
```

### GetDisguiseDifficultyMultiplier
`public abstract float GetDisguiseDifficultyMultiplier()`

**用途 / Purpose:** 读取并返回当前对象中 「disguise difficulty multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DifficultyModel 实例
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetDisguiseDifficultyMultiplier();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
DifficultyModel instance = ...;
```

## 参见

- [本区域目录](../)