---
title: "CombatXpModel"
description: "CombatXpModel 的自动生成类参考。"
---
# CombatXpModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatXpModel : MBGameModel<CombatXpModel>`
**Base:** `MBGameModel<CombatXpModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CombatXpModel.cs`

## 概述

`CombatXpModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CombatXpModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public abstract float CaptainRadius { get; }` |

## 主要方法

### GetSkillForWeapon
`public abstract SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill for weapon 的结果。

```csharp
// 先通过子系统 API 拿到 CombatXpModel 实例
CombatXpModel combatXpModel = ...;
var result = combatXpModel.GetSkillForWeapon(weapon, false);
```

### GetXpFromHit
`public abstract ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, MissionTypeEnum missionType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 xp from hit 的结果。

```csharp
// 先通过子系统 API 拿到 CombatXpModel 实例
CombatXpModel combatXpModel = ...;
var result = combatXpModel.GetXpFromHit(attackerTroop, captain, attackedTroop, attackerParty, 0, false, missionType);
```

### GetXpMultiplierFromShotDifficulty
`public abstract float GetXpMultiplierFromShotDifficulty(float shotDifficulty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 xp multiplier from shot difficulty 的结果。

```csharp
// 先通过子系统 API 拿到 CombatXpModel 实例
CombatXpModel combatXpModel = ...;
var result = combatXpModel.GetXpMultiplierFromShotDifficulty(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CombatXpModel instance = ...;
```

## 参见

- [本区域目录](../)