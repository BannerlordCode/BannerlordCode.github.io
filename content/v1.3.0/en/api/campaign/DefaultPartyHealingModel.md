---
title: "DefaultPartyHealingModel"
description: "Auto-generated class reference for DefaultPartyHealingModel."
---
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

**Purpose:** Reads and returns the surgery chance value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSurgeryChance(party);
```

### GetSiegeBombardmentHitSurgeryChance
`public override float GetSiegeBombardmentHitSurgeryChance(PartyBase party)`

**Purpose:** Reads and returns the siege bombardment hit surgery chance value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSiegeBombardmentHitSurgeryChance(party);
```

### GetSurvivalChance
`public override float GetSurvivalChance(PartyBase party, CharacterObject character, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)`

**Purpose:** Reads and returns the survival chance value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSurvivalChance(party, character, damageType, false, null);
```

### GetSkillXpFromHealingTroop
`public override int GetSkillXpFromHealingTroop(PartyBase party)`

**Purpose:** Reads and returns the skill xp from healing troop value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSkillXpFromHealingTroop(party);
```

### GetDailyHealingForRegulars
`public override ExplainedNumber GetDailyHealingForRegulars(PartyBase party, bool isPrisoners, bool includeDescriptions = false)`

**Purpose:** Reads and returns the daily healing for regulars value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetDailyHealingForRegulars(party, false, false);
```

### GetDailyHealingHpForHeroes
`public override ExplainedNumber GetDailyHealingHpForHeroes(PartyBase party, bool isPrisoners, bool includeDescriptions = false)`

**Purpose:** Reads and returns the daily healing hp for heroes value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetDailyHealingHpForHeroes(party, false, false);
```

### GetHeroesEffectedHealingAmount
`public override int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)`

**Purpose:** Reads and returns the heroes effected healing amount value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetHeroesEffectedHealingAmount(hero, 0);
```

### GetBattleEndHealingAmount
`public override ExplainedNumber GetBattleEndHealingAmount(PartyBase party, Hero hero)`

**Purpose:** Reads and returns the battle end healing amount value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetBattleEndHealingAmount(party, hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyHealingModel>(new MyDefaultPartyHealingModel());
```

## See Also

- [Area Index](../)