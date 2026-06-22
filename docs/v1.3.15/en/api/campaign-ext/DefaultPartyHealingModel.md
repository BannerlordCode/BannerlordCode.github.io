<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyHealingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyHealingModel : PartyHealingModel`
**Base:** `PartyHealingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs`

## Overview

`DefaultPartyHealingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPartyHealingModel>(new MyDefaultPartyHealingModel())` to change how it computes.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of DefaultPartyHealingModel (Model)
Game.Current.ReplaceModel<DefaultPartyHealingModel>(new MyDefaultPartyHealingModel());
```

## See Also

- [Complete Class Catalog](../catalog)