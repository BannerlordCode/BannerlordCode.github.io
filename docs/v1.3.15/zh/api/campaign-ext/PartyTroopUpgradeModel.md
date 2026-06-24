<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTroopUpgradeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 判断当前对象是否可以执行 `party upgrade troop to target`。

### IsTroopUpgradeable
`public abstract bool IsTroopUpgradeable(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 处理 `is troop upgradeable` 相关逻辑。

### DoesPartyHaveRequiredItemsForUpgrade
`public abstract bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)`

**用途 / Purpose:** 处理 `does party have required items for upgrade` 相关逻辑。

### DoesPartyHaveRequiredPerksForUpgrade
`public abstract bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)`

**用途 / Purpose:** 处理 `does party have required perks for upgrade` 相关逻辑。

### GetGoldCostForUpgrade
`public abstract ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**用途 / Purpose:** 获取 `gold cost for upgrade` 的当前值。

### GetXpCostForUpgrade
`public abstract int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**用途 / Purpose:** 获取 `xp cost for upgrade` 的当前值。

### GetSkillXpFromUpgradingTroops
`public abstract int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)`

**用途 / Purpose:** 获取 `skill xp from upgrading troops` 的当前值。

### GetUpgradeChanceForTroopUpgrade
`public abstract float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)`

**用途 / Purpose:** 获取 `upgrade chance for troop upgrade` 的当前值。

## 使用示例

```csharp
var implementation = new CustomPartyTroopUpgradeModel();
```

## 参见

- [完整类目录](../catalog)