---
title: "DefaultCombatXpModel"
description: "DefaultCombatXpModel 的自动生成类参考。"
---
# DefaultCombatXpModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatXpModel : CombatXpModel`
**Base:** `CombatXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs`

## 概述

`DefaultCombatXpModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCombatXpModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public override float CaptainRadius { get; }` |

## 主要方法

### GetSkillForWeapon
`public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`

**用途 / Purpose:** 读取并返回当前对象中 skill for weapon 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCombatXpModel 实例
DefaultCombatXpModel defaultCombatXpModel = ...;
var result = defaultCombatXpModel.GetSkillForWeapon(weapon, false);
```

### GetXpFromHit
`public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)`

**用途 / Purpose:** 读取并返回当前对象中 xp from hit 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCombatXpModel 实例
DefaultCombatXpModel defaultCombatXpModel = ...;
var result = defaultCombatXpModel.GetXpFromHit(attackerTroop, captain, attackedTroop, attackerParty, 0, false, missionType);
```

### GetXpMultiplierFromShotDifficulty
`public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)`

**用途 / Purpose:** 读取并返回当前对象中 xp multiplier from shot difficulty 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCombatXpModel 实例
DefaultCombatXpModel defaultCombatXpModel = ...;
var result = defaultCombatXpModel.GetXpMultiplierFromShotDifficulty(0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCombatXpModel>(new MyDefaultCombatXpModel());
```

## 参见

- [本区域目录](../)