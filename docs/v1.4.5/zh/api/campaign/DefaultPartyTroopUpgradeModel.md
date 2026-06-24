<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyTroopUpgradeModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTroopUpgradeModel : PartyTroopUpgradeModel`
**Base:** `PartyTroopUpgradeModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTroopUpgradeModel.cs`

## 概述

`DefaultPartyTroopUpgradeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyTroopUpgradeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanPartyUpgradeTroopToTarget
`public override bool CanPartyUpgradeTroopToTarget(PartyBase upgradingParty, CharacterObject upgradeableCharacter, CharacterObject upgradeTarget)`

**用途 / Purpose:** 判断当前对象是否可以执行 `party upgrade troop to target`。

### IsTroopUpgradeable
`public override bool IsTroopUpgradeable(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 处理 `is troop upgradeable` 相关逻辑。

### GetXpCostForUpgrade
`public override int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**用途 / Purpose:** 获取 `xp cost for upgrade` 的当前值。

### GetGoldCostForUpgrade
`public override ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**用途 / Purpose:** 获取 `gold cost for upgrade` 的当前值。

### GetSkillXpFromUpgradingTroops
`public override int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)`

**用途 / Purpose:** 获取 `skill xp from upgrading troops` 的当前值。

### DoesPartyHaveRequiredItemsForUpgrade
`public override bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)`

**用途 / Purpose:** 处理 `does party have required items for upgrade` 相关逻辑。

### DoesPartyHaveRequiredPerksForUpgrade
`public override bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)`

**用途 / Purpose:** 处理 `does party have required perks for upgrade` 相关逻辑。

### GetUpgradeChanceForTroopUpgrade
`public override float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)`

**用途 / Purpose:** 获取 `upgrade chance for troop upgrade` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyTroopUpgradeModel>(new MyDefaultPartyTroopUpgradeModel());
```

## 参见

- [完整类目录](../catalog)