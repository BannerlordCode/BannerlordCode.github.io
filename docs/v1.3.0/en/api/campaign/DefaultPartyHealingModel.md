<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyHealingModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyHealingModel : PartyHealingModel`
**Base:** `PartyHealingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs`

## Overview

`DefaultPartyHealingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyHealingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSurgeryChance
`public override float GetSurgeryChance(PartyBase party)`

**Purpose:** Gets the current value of `surgery chance`.

### GetSiegeBombardmentHitSurgeryChance
`public override float GetSiegeBombardmentHitSurgeryChance(PartyBase party)`

**Purpose:** Gets the current value of `siege bombardment hit surgery chance`.

### GetSurvivalChance
`public override float GetSurvivalChance(PartyBase party, CharacterObject character, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)`

**Purpose:** Gets the current value of `survival chance`.

### GetSkillXpFromHealingTroop
`public override int GetSkillXpFromHealingTroop(PartyBase party)`

**Purpose:** Gets the current value of `skill xp from healing troop`.

### GetDailyHealingForRegulars
`public override ExplainedNumber GetDailyHealingForRegulars(PartyBase party, bool isPrisoners, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `daily healing for regulars`.

### GetDailyHealingHpForHeroes
`public override ExplainedNumber GetDailyHealingHpForHeroes(PartyBase party, bool isPrisoners, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `daily healing hp for heroes`.

### GetHeroesEffectedHealingAmount
`public override int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)`

**Purpose:** Gets the current value of `heroes effected healing amount`.

### GetBattleEndHealingAmount
`public override ExplainedNumber GetBattleEndHealingAmount(PartyBase party, Hero hero)`

**Purpose:** Gets the current value of `battle end healing amount`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyHealingModel>(new MyDefaultPartyHealingModel());
```

## See Also

- [Complete Class Catalog](../catalog)