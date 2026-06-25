---
title: "PartyHealingModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyHealingModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`
**Base:** `MBGameModel<PartyHealingModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyHealingModel.cs`

## Overview

`PartyHealingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyHealingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSurgeryChance
`public abstract float GetSurgeryChance(PartyBase party)`

**Purpose:** Gets the current value of `surgery chance`.

### GetSurvivalChance
`public abstract float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)`

**Purpose:** Gets the current value of `survival chance`.

### GetSkillXpFromHealingTroop
`public abstract int GetSkillXpFromHealingTroop(PartyBase party)`

**Purpose:** Gets the current value of `skill xp from healing troop`.

### GetDailyHealingForRegulars
`public abstract ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `daily healing for regulars`.

### GetDailyHealingHpForHeroes
`public abstract ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `daily healing hp for heroes`.

### GetHeroesEffectedHealingAmount
`public abstract int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)`

**Purpose:** Gets the current value of `heroes effected healing amount`.

### GetSiegeBombardmentHitSurgeryChance
`public abstract float GetSiegeBombardmentHitSurgeryChance(PartyBase party)`

**Purpose:** Gets the current value of `siege bombardment hit surgery chance`.

### GetBattleEndHealingAmount
`public abstract ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero)`

**Purpose:** Gets the current value of `battle end healing amount`.

## Usage Example

```csharp
var implementation = new CustomPartyHealingModel();
```

## See Also

- [Complete Class Catalog](../catalog)