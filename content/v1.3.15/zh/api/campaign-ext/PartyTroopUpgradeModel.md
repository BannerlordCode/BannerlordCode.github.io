---
title: "PartyTroopUpgradeModel"
description: "PartyTroopUpgradeModel 的自动生成类参考。"
---
# PartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTroopUpgradeModel : MBGameModel<PartyTroopUpgradeModel>`
**Base:** `MBGameModel<PartyTroopUpgradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs`

## 概述

`PartyTroopUpgradeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyTroopUpgradeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanPartyUpgradeTroopToTarget
`public abstract bool CanPartyUpgradeTroopToTarget(PartyBase party, CharacterObject character, CharacterObject target)`

**用途 / Purpose:** 检查当前对象是否满足 「party upgrade troop to target」 的前置条件。

```csharp
// 先通过子系统 API 拿到 PartyTroopUpgradeModel 实例
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.CanPartyUpgradeTroopToTarget(party, character, target);
```

### IsTroopUpgradeable
`public abstract bool IsTroopUpgradeable(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 判断当前对象是否处于 「troop upgradeable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 PartyTroopUpgradeModel 实例
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.IsTroopUpgradeable(party, character);
```

### DoesPartyHaveRequiredItemsForUpgrade
`public abstract bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)`

**用途 / Purpose:** 返回「party have required items for upgrade」对当前对象是否成立的布尔结果。

```csharp
// 先通过子系统 API 拿到 PartyTroopUpgradeModel 实例
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.DoesPartyHaveRequiredItemsForUpgrade(party, upgradeTarget);
```

### DoesPartyHaveRequiredPerksForUpgrade
`public abstract bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)`

**用途 / Purpose:** 返回「party have required perks for upgrade」对当前对象是否成立的布尔结果。

```csharp
// 先通过子系统 API 拿到 PartyTroopUpgradeModel 实例
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.DoesPartyHaveRequiredPerksForUpgrade(party, character, upgradeTarget, requiredPerk);
```

### GetGoldCostForUpgrade
`public abstract ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**用途 / Purpose:** 读取并返回当前对象中 「gold cost for upgrade」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyTroopUpgradeModel 实例
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.GetGoldCostForUpgrade(party, characterObject, upgradeTarget);
```

### GetXpCostForUpgrade
`public abstract int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**用途 / Purpose:** 读取并返回当前对象中 「xp cost for upgrade」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyTroopUpgradeModel 实例
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.GetXpCostForUpgrade(party, characterObject, upgradeTarget);
```

### GetSkillXpFromUpgradingTroops
`public abstract int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)`

**用途 / Purpose:** 读取并返回当前对象中 「skill xp from upgrading troops」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyTroopUpgradeModel 实例
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.GetSkillXpFromUpgradingTroops(party, troop, 0);
```

### GetUpgradeChanceForTroopUpgrade
`public abstract float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「upgrade chance for troop upgrade」 的结果。

```csharp
// 先通过子系统 API 拿到 PartyTroopUpgradeModel 实例
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.GetUpgradeChanceForTroopUpgrade(party, troop, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyTroopUpgradeModel instance = ...;
```

## 参见

- [本区域目录](../)