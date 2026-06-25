---
title: "HeroCreationModel"
description: "Auto-generated class reference for HeroCreationModel."
---
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

**Purpose:** **Purpose:** Reads and returns the birth and death day value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetBirthAndDeathDay(character, false, 0);
```

### GetBornSettlement
`public abstract Settlement GetBornSettlement(Hero character)`

**Purpose:** **Purpose:** Reads and returns the born settlement value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetBornSettlement(character);
```

### GetStaticBodyProperties
`public abstract StaticBodyProperties GetStaticBodyProperties(Hero character, bool isOffspring, float variationAmount = 0.35f)`

**Purpose:** **Purpose:** Reads and returns the static body properties value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetStaticBodyProperties(character, false, 0);
```

### GetPreferredUpgradeFormation
`public abstract FormationClass GetPreferredUpgradeFormation(Hero character)`

**Purpose:** **Purpose:** Reads and returns the preferred upgrade formation value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetPreferredUpgradeFormation(character);
```

### GetClan
`public abstract Clan GetClan(Hero character)`

**Purpose:** **Purpose:** Reads and returns the clan value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetClan(character);
```

### GetCulture
`public abstract CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)`

**Purpose:** **Purpose:** Reads and returns the culture value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetCulture(hero, bornSettlement, clan);
```

### GetRandomTemplateByOccupation
`public abstract CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)`

**Purpose:** **Purpose:** Reads and returns the random template by occupation value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetRandomTemplateByOccupation(occupation, null);
```

### GetTraitsForHero
`public abstract List<ValueTuple<TraitObject, int>> GetTraitsForHero(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the traits for hero value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetTraitsForHero(hero);
```

### GetCivilianEquipment
`public abstract Equipment GetCivilianEquipment(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the civilian equipment value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetCivilianEquipment(hero);
```

### GetBattleEquipment
`public abstract Equipment GetBattleEquipment(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the battle equipment value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetBattleEquipment(hero);
```

### GetCharacterTemplateForOffspring
`public abstract CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)`

**Purpose:** **Purpose:** Reads and returns the character template for offspring value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetCharacterTemplateForOffspring(mother, father, false);
```

### GenerateFirstAndFullName
`public abstract ValueTuple<TextObject, TextObject> GenerateFirstAndFullName(Hero hero)`

**Purpose:** **Purpose:** Generates an instance, data, or representation of first and full name.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GenerateFirstAndFullName(hero);
```

### GetDefaultSkillsForHero
`public abstract List<ValueTuple<SkillObject, int>> GetDefaultSkillsForHero(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the default skills for hero value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetDefaultSkillsForHero(hero);
```

### GetInheritedSkillsForHero
`public abstract List<ValueTuple<SkillObject, int>> GetInheritedSkillsForHero(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the inherited skills for hero value held by the this instance.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetInheritedSkillsForHero(hero);
```

### IsHeroCombatant
`public abstract bool IsHeroCombatant(Hero hero)`

**Purpose:** **Purpose:** Determines whether the this instance is in the hero combatant state or condition.

```csharp
// Obtain an instance of HeroCreationModel from the subsystem API first
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.IsHeroCombatant(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
HeroCreationModel instance = ...;
```

## See Also

- [Area Index](../)