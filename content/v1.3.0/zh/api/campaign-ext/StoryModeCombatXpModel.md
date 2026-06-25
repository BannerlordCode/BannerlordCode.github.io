---
title: "StoryModeCombatXpModel"
description: "StoryModeCombatXpModel 的自动生成类参考。"
---
# StoryModeCombatXpModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCombatXpModel : CombatXpModel`
**Base:** `CombatXpModel`
**File:** `StoryMode/GameComponents/StoryModeCombatXpModel.cs`

## 概述

`StoryModeCombatXpModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeCombatXpModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public override float CaptainRadius { get; }` |

## 主要方法

### GetSkillForWeapon
`public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill for weapon 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeCombatXpModel 实例
StoryModeCombatXpModel storyModeCombatXpModel = ...;
var result = storyModeCombatXpModel.GetSkillForWeapon(weapon, false);
```

### GetXpFromHit
`public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase party, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 xp from hit 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeCombatXpModel 实例
StoryModeCombatXpModel storyModeCombatXpModel = ...;
var result = storyModeCombatXpModel.GetXpFromHit(attackerTroop, captain, attackedTroop, party, 0, false, missionType);
```

### GetXpMultiplierFromShotDifficulty
`public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 xp multiplier from shot difficulty 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeCombatXpModel 实例
StoryModeCombatXpModel storyModeCombatXpModel = ...;
var result = storyModeCombatXpModel.GetXpMultiplierFromShotDifficulty(0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeCombatXpModel>(new MyStoryModeCombatXpModel());
```

## 参见

- [本区域目录](../)