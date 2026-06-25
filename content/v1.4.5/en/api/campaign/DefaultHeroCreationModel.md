---
title: "DefaultHeroCreationModel"
description: "Auto-generated class reference for DefaultHeroCreationModel."
---
# DefaultHeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel`
**Base:** `HeroCreationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHeroCreationModel.cs`

## Overview

`DefaultHeroCreationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeroCreationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBornSettlement
`public override Settlement GetBornSettlement(Hero hero)`

**Purpose:** Reads and returns the `born settlement` value held by the current object.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetBornSettlement(hero);
```

### GetStaticBodyProperties
`public override StaticBodyProperties GetStaticBodyProperties(Hero hero, bool isOffspring, float variationAmount = 0.35f)`

**Purpose:** Reads and returns the `static body properties` value held by the current object.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetStaticBodyProperties(hero, false, 0);
```

### GetPreferredUpgradeFormation
`public override FormationClass GetPreferredUpgradeFormation(Hero hero)`

**Purpose:** Reads and returns the `preferred upgrade formation` value held by the current object.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetPreferredUpgradeFormation(hero);
```

### GetClan
`public override Clan GetClan(Hero hero)`

**Purpose:** Reads and returns the `clan` value held by the current object.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetClan(hero);
```

### GetCulture
`public override CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)`

**Purpose:** Reads and returns the `culture` value held by the current object.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetCulture(hero, bornSettlement, clan);
```

### GetRandomTemplateByOccupation
`public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)`

**Purpose:** Reads and returns the `random template by occupation` value held by the current object.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetRandomTemplateByOccupation(occupation, null);
```

### GetCivilianEquipment
`public override Equipment GetCivilianEquipment(Hero hero)`

**Purpose:** Reads and returns the `civilian equipment` value held by the current object.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetCivilianEquipment(hero);
```

### GetBattleEquipment
`public override Equipment GetBattleEquipment(Hero hero)`

**Purpose:** Reads and returns the `battle equipment` value held by the current object.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetBattleEquipment(hero);
```

### GetCharacterTemplateForOffspring
`public override CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)`

**Purpose:** Reads and returns the `character template for offspring` value held by the current object.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetCharacterTemplateForOffspring(mother, father, false);
```

### IsHeroCombatant
`public override bool IsHeroCombatant(Hero hero)`

**Purpose:** Determines whether the current object is in the `hero combatant` state or condition.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.IsHeroCombatant(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultHeroCreationModel>(new MyDefaultHeroCreationModel());
```

## See Also

- [Area Index](../)