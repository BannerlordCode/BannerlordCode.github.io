---
title: "HeroCreationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroCreationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroCreationModel : MBGameModel<HeroCreationModel>`
**Base:** `MBGameModel<HeroCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs`

## Overview

`HeroCreationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `HeroCreationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBirthAndDeathDay
`public abstract ValueTuple<CampaignTime, CampaignTime> GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)`

**Purpose:** Gets the current value of `birth and death day`.

### GetBornSettlement
`public abstract Settlement GetBornSettlement(Hero character)`

**Purpose:** Gets the current value of `born settlement`.

### GetStaticBodyProperties
`public abstract StaticBodyProperties GetStaticBodyProperties(Hero character, bool isOffspring, float variationAmount = 0.35f)`

**Purpose:** Gets the current value of `static body properties`.

### GetPreferredUpgradeFormation
`public abstract FormationClass GetPreferredUpgradeFormation(Hero character)`

**Purpose:** Gets the current value of `preferred upgrade formation`.

### GetClan
`public abstract Clan GetClan(Hero character)`

**Purpose:** Gets the current value of `clan`.

### GetCulture
`public abstract CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)`

**Purpose:** Gets the current value of `culture`.

### GetRandomTemplateByOccupation
`public abstract CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)`

**Purpose:** Gets the current value of `random template by occupation`.

### GetTraitsForHero
`public abstract List<ValueTuple<TraitObject, int>> GetTraitsForHero(Hero hero)`

**Purpose:** Gets the current value of `traits for hero`.

### GetCivilianEquipment
`public abstract Equipment GetCivilianEquipment(Hero hero)`

**Purpose:** Gets the current value of `civilian equipment`.

### GetBattleEquipment
`public abstract Equipment GetBattleEquipment(Hero hero)`

**Purpose:** Gets the current value of `battle equipment`.

### GetCharacterTemplateForOffspring
`public abstract CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)`

**Purpose:** Gets the current value of `character template for offspring`.

### GenerateFirstAndFullName
`public abstract ValueTuple<TextObject, TextObject> GenerateFirstAndFullName(Hero hero)`

**Purpose:** Handles logic related to `generate first and full name`.

### GetDefaultSkillsForHero
`public abstract List<ValueTuple<SkillObject, int>> GetDefaultSkillsForHero(Hero hero)`

**Purpose:** Gets the current value of `default skills for hero`.

### GetInheritedSkillsForHero
`public abstract List<ValueTuple<SkillObject, int>> GetInheritedSkillsForHero(Hero hero)`

**Purpose:** Gets the current value of `inherited skills for hero`.

### IsHeroCombatant
`public abstract bool IsHeroCombatant(Hero hero)`

**Purpose:** Handles logic related to `is hero combatant`.

## Usage Example

```csharp
var implementation = new CustomHeroCreationModel();
```

## See Also

- [Complete Class Catalog](../catalog)