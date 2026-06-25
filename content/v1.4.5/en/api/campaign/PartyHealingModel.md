---
title: "PartyHealingModel"
description: "Auto-generated class reference for PartyHealingModel."
---
# PartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`
**Base:** `MBGameModel<PartyHealingModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyHealingModel.cs`

## Overview

`PartyHealingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyHealingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSurgeryChance
`public abstract float GetSurgeryChance(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the surgery chance value held by the this instance.

```csharp
// Obtain an instance of PartyHealingModel from the subsystem API first
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetSurgeryChance(party);
```

### GetSurvivalChance
`public abstract float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)`

**Purpose:** **Purpose:** Reads and returns the survival chance value held by the this instance.

```csharp
// Obtain an instance of PartyHealingModel from the subsystem API first
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetSurvivalChance(party, agentCharacter, damageType, false, null);
```

### GetSkillXpFromHealingTroop
`public abstract int GetSkillXpFromHealingTroop(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the skill xp from healing troop value held by the this instance.

```csharp
// Obtain an instance of PartyHealingModel from the subsystem API first
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetSkillXpFromHealingTroop(party);
```

### GetDailyHealingForRegulars
`public abstract ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Reads and returns the daily healing for regulars value held by the this instance.

```csharp
// Obtain an instance of PartyHealingModel from the subsystem API first
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetDailyHealingForRegulars(partyBase, false, false);
```

### GetDailyHealingHpForHeroes
`public abstract ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Reads and returns the daily healing hp for heroes value held by the this instance.

```csharp
// Obtain an instance of PartyHealingModel from the subsystem API first
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetDailyHealingHpForHeroes(partyBase, false, false);
```

### GetHeroesEffectedHealingAmount
`public abstract int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)`

**Purpose:** **Purpose:** Reads and returns the heroes effected healing amount value held by the this instance.

```csharp
// Obtain an instance of PartyHealingModel from the subsystem API first
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetHeroesEffectedHealingAmount(hero, 0);
```

### GetSiegeBombardmentHitSurgeryChance
`public abstract float GetSiegeBombardmentHitSurgeryChance(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the siege bombardment hit surgery chance value held by the this instance.

```csharp
// Obtain an instance of PartyHealingModel from the subsystem API first
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetSiegeBombardmentHitSurgeryChance(party);
```

### GetBattleEndHealingAmount
`public abstract ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero)`

**Purpose:** **Purpose:** Reads and returns the battle end healing amount value held by the this instance.

```csharp
// Obtain an instance of PartyHealingModel from the subsystem API first
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetBattleEndHealingAmount(partyBase, hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyHealingModel instance = ...;
```

## See Also

- [Area Index](../)