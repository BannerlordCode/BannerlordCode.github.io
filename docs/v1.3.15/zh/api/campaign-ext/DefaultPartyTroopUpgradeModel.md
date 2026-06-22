<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyTroopUpgradeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTroopUpgradeModel : PartyTroopUpgradeModel`
**Base:** `PartyTroopUpgradeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs`

## 概述

`DefaultPartyTroopUpgradeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartyTroopUpgradeModel>(new MyDefaultPartyTroopUpgradeModel())` 注册，以改变其计算逻辑。

## 主要方法

### CanPartyUpgradeTroopToTarget
```csharp
public override bool CanPartyUpgradeTroopToTarget(PartyBase upgradingParty, CharacterObject upgradeableCharacter, CharacterObject upgradeTarget)
```

### IsTroopUpgradeable
```csharp
public override bool IsTroopUpgradeable(PartyBase party, CharacterObject character)
```

### GetXpCostForUpgrade
```csharp
public override int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)
```

### GetGoldCostForUpgrade
```csharp
public override ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)
```

### GetSkillXpFromUpgradingTroops
```csharp
public override int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)
```

### DoesPartyHaveRequiredItemsForUpgrade
```csharp
public override bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)
```

### DoesPartyHaveRequiredPerksForUpgrade
```csharp
public override bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)
```

### GetUpgradeChanceForTroopUpgrade
```csharp
public override float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)
```

## 使用示例

```csharp
// DefaultPartyTroopUpgradeModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartyTroopUpgradeModel>(new MyDefaultPartyTroopUpgradeModel());
```

## 参见

- [完整类目录](../catalog)