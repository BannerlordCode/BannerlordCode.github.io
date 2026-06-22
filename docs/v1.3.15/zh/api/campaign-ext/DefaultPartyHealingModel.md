<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyHealingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyHealingModel : PartyHealingModel`
**Base:** `PartyHealingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs`

## 概述

`DefaultPartyHealingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartyHealingModel>(new MyDefaultPartyHealingModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSurgeryChance
```csharp
public override float GetSurgeryChance(PartyBase party)
```

### GetSiegeBombardmentHitSurgeryChance
```csharp
public override float GetSiegeBombardmentHitSurgeryChance(PartyBase party)
```

### GetSurvivalChance
```csharp
public override float GetSurvivalChance(PartyBase party, CharacterObject character, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)
```

### GetSkillXpFromHealingTroop
```csharp
public override int GetSkillXpFromHealingTroop(PartyBase party)
```

### GetDailyHealingForRegulars
```csharp
public override ExplainedNumber GetDailyHealingForRegulars(PartyBase party, bool isPrisoners, bool includeDescriptions = false)
```

### GetDailyHealingHpForHeroes
```csharp
public override ExplainedNumber GetDailyHealingHpForHeroes(PartyBase party, bool isPrisoners, bool includeDescriptions = false)
```

### GetHeroesEffectedHealingAmount
```csharp
public override int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)
```

### GetBattleEndHealingAmount
```csharp
public override ExplainedNumber GetBattleEndHealingAmount(PartyBase party, Hero hero)
```

## 使用示例

```csharp
// DefaultPartyHealingModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartyHealingModel>(new MyDefaultPartyHealingModel());
```

## 参见

- [完整类目录](../catalog)