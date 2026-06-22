<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyHealingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`
**Base:** `MBGameModel<PartyHealingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs`

## 概述

`PartyHealingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartyHealingModel>(new MyPartyHealingModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSurgeryChance
```csharp
public abstract float GetSurgeryChance(PartyBase party)
```

### GetSurvivalChance
```csharp
public abstract float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)
```

### GetSkillXpFromHealingTroop
```csharp
public abstract int GetSkillXpFromHealingTroop(PartyBase party)
```

### GetDailyHealingForRegulars
```csharp
public abstract ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)
```

### GetDailyHealingHpForHeroes
```csharp
public abstract ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false)
```

### GetHeroesEffectedHealingAmount
```csharp
public abstract int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)
```

### GetSiegeBombardmentHitSurgeryChance
```csharp
public abstract float GetSiegeBombardmentHitSurgeryChance(PartyBase party)
```

### GetBattleEndHealingAmount
```csharp
public abstract ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero)
```

## 使用示例

```csharp
// PartyHealingModel (Model) 的典型用法
Game.Current.ReplaceModel<PartyHealingModel>(new MyPartyHealingModel());
```

## 参见

- [完整类目录](../catalog)