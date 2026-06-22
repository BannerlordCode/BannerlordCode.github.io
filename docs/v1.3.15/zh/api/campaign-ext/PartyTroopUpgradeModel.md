<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTroopUpgradeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTroopUpgradeModel : MBGameModel<PartyTroopUpgradeModel>`
**Base:** `MBGameModel<PartyTroopUpgradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs`

## 概述

`PartyTroopUpgradeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartyTroopUpgradeModel>(new MyPartyTroopUpgradeModel())` 注册，以改变其计算逻辑。

## 主要方法

### CanPartyUpgradeTroopToTarget
```csharp
public abstract bool CanPartyUpgradeTroopToTarget(PartyBase party, CharacterObject character, CharacterObject target)
```

### IsTroopUpgradeable
```csharp
public abstract bool IsTroopUpgradeable(PartyBase party, CharacterObject character)
```

### DoesPartyHaveRequiredItemsForUpgrade
```csharp
public abstract bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)
```

### DoesPartyHaveRequiredPerksForUpgrade
```csharp
public abstract bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)
```

### GetGoldCostForUpgrade
```csharp
public abstract ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)
```

### GetXpCostForUpgrade
```csharp
public abstract int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)
```

### GetSkillXpFromUpgradingTroops
```csharp
public abstract int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)
```

### GetUpgradeChanceForTroopUpgrade
```csharp
public abstract float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)
```

## 使用示例

```csharp
// PartyTroopUpgradeModel (Model) 的典型用法
Game.Current.ReplaceModel<PartyTroopUpgradeModel>(new MyPartyTroopUpgradeModel());
```

## 参见

- [完整类目录](../catalog)