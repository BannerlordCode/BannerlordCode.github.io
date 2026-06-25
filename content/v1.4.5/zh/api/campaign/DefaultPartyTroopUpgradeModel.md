---
title: "DefaultPartyTroopUpgradeModel"
description: "DefaultPartyTroopUpgradeModel 的自动生成类参考。"
---
# DefaultPartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTroopUpgradeModel : PartyTroopUpgradeModel`
**Base:** `PartyTroopUpgradeModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTroopUpgradeModel.cs`

## 概述

`DefaultPartyTroopUpgradeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyTroopUpgradeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanPartyUpgradeTroopToTarget
`public override bool CanPartyUpgradeTroopToTarget(PartyBase upgradingParty, CharacterObject upgradeableCharacter, CharacterObject upgradeTarget)`

**用途 / Purpose:** 检查当前对象是否满足 party upgrade troop to target 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTroopUpgradeModel 实例
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.CanPartyUpgradeTroopToTarget(upgradingParty, upgradeableCharacter, upgradeTarget);
```

### IsTroopUpgradeable
`public override bool IsTroopUpgradeable(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 判断当前对象是否处于 troop upgradeable 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTroopUpgradeModel 实例
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.IsTroopUpgradeable(party, character);
```

### GetXpCostForUpgrade
`public override int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**用途 / Purpose:** 读取并返回当前对象中 xp cost for upgrade 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTroopUpgradeModel 实例
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.GetXpCostForUpgrade(party, characterObject, upgradeTarget);
```

### GetGoldCostForUpgrade
`public override ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**用途 / Purpose:** 读取并返回当前对象中 gold cost for upgrade 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTroopUpgradeModel 实例
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.GetGoldCostForUpgrade(party, characterObject, upgradeTarget);
```

### GetSkillXpFromUpgradingTroops
`public override int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)`

**用途 / Purpose:** 读取并返回当前对象中 skill xp from upgrading troops 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTroopUpgradeModel 实例
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.GetSkillXpFromUpgradingTroops(party, troop, 0);
```

### DoesPartyHaveRequiredItemsForUpgrade
`public override bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)`

**用途 / Purpose:** 判断party have required items for upgrade这一条件在当前对象上是否成立。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTroopUpgradeModel 实例
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.DoesPartyHaveRequiredItemsForUpgrade(party, upgradeTarget);
```

### DoesPartyHaveRequiredPerksForUpgrade
`public override bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)`

**用途 / Purpose:** 判断party have required perks for upgrade这一条件在当前对象上是否成立。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTroopUpgradeModel 实例
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.DoesPartyHaveRequiredPerksForUpgrade(party, character, upgradeTarget, requiredPerk);
```

### GetUpgradeChanceForTroopUpgrade
`public override float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)`

**用途 / Purpose:** 读取并返回当前对象中 upgrade chance for troop upgrade 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTroopUpgradeModel 实例
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.GetUpgradeChanceForTroopUpgrade(party, troop, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyTroopUpgradeModel>(new MyDefaultPartyTroopUpgradeModel());
```

## 参见

- [本区域目录](../)