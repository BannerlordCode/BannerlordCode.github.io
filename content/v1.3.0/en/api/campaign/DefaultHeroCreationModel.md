---
title: "DefaultHeroCreationModel"
description: "Auto-generated class reference for DefaultHeroCreationModel."
---
# DefaultHeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel`
**Base:** `HeroCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs`

## Overview

`DefaultHeroCreationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeroCreationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultHeroCreationModel` is the shipped answer, not the extension point. The abstract `HeroCreationModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `HeroCreationModel` is declared `MBGameModel<HeroCreationModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs:12`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<HeroCreationModel>(new DefaultHeroCreationModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:348`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyHeroCreationModel : HeroCreationModel
{
    // All fifteen members on the base are abstract, so delegating is the whole job.
    // The return is a (birth, death) tuple, not a single date.
    private readonly DefaultHeroCreationModel _stock = new DefaultHeroCreationModel();

    public override ValueTuple<CampaignTime, CampaignTime> GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)
    {
        return _stock.GetBirthAndDeathDay(character, createAlive, age);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<HeroCreationModel>(new MyHeroCreationModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultHeroCreationModel>(new DefaultHeroCreationModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultHeroCreationModel` is an `MBGameModel<HeroCreationModel>`, not an `MBGameModel<DefaultHeroCreationModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:745`, `GetGameModel<HeroCreationModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### GetBirthAndDeathDay
`public override ValueTuple<CampaignTime, CampaignTime> GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)`

**Purpose:** Reads and returns the birth and death day value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetBirthAndDeathDay(character, false, 0);
```

### GetBornSettlement
`public override Settlement GetBornSettlement(Hero hero)`

**Purpose:** Reads and returns the born settlement value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetBornSettlement(hero);
```

### GetStaticBodyProperties
`public override StaticBodyProperties GetStaticBodyProperties(Hero hero, bool isOffspring, float variationAmount = 0.35f)`

**Purpose:** Reads and returns the static body properties value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetStaticBodyProperties(hero, false, 0);
```

### GetPreferredUpgradeFormation
`public override FormationClass GetPreferredUpgradeFormation(Hero hero)`

**Purpose:** Reads and returns the preferred upgrade formation value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetPreferredUpgradeFormation(hero);
```

### GetClan
`public override Clan GetClan(Hero hero)`

**Purpose:** Reads and returns the clan value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetClan(hero);
```

### GetCulture
`public override CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)`

**Purpose:** Reads and returns the culture value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetCulture(hero, bornSettlement, clan);
```

### GetRandomTemplateByOccupation
`public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)`

**Purpose:** Reads and returns the random template by occupation value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetRandomTemplateByOccupation(occupation, null);
```

### GetTraitsForHero
`public override List<ValueTuple<TraitObject, int>> GetTraitsForHero(Hero hero)`

**Purpose:** Reads and returns the traits for hero value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetTraitsForHero(hero);
```

### GetCivilianEquipment
`public override Equipment GetCivilianEquipment(Hero hero)`

**Purpose:** Reads and returns the civilian equipment value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetCivilianEquipment(hero);
```

### GetBattleEquipment
`public override Equipment GetBattleEquipment(Hero hero)`

**Purpose:** Reads and returns the battle equipment value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetBattleEquipment(hero);
```

### GetCharacterTemplateForOffspring
`public override CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)`

**Purpose:** Reads and returns the character template for offspring value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetCharacterTemplateForOffspring(mother, father, false);
```

### GenerateFirstAndFullName
`public override ValueTuple<TextObject, TextObject> GenerateFirstAndFullName(Hero hero)`

**Purpose:** Generates an instance, data, or representation of first and full name.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GenerateFirstAndFullName(hero);
```

### GetDefaultSkillsForHero
`public override List<ValueTuple<SkillObject, int>> GetDefaultSkillsForHero(Hero hero)`

**Purpose:** Reads and returns the default skills for hero value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetDefaultSkillsForHero(hero);
```

### GetInheritedSkillsForHero
`public override List<ValueTuple<SkillObject, int>> GetInheritedSkillsForHero(Hero hero)`

**Purpose:** Reads and returns the inherited skills for hero value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetInheritedSkillsForHero(hero);
```

### IsHeroCombatant
`public override bool IsHeroCombatant(Hero hero)`

**Purpose:** Determines whether the this instance is in the hero combatant state or condition.

```csharp
// Obtain an instance of DefaultHeroCreationModel from the subsystem API first
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.IsHeroCombatant(hero);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultHeroCreationModel` for it at `SandBoxManager.cs:348`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyHeroCreationModel : HeroCreationModel, so it is already an MBGameModel<HeroCreationModel>
        gameStarter.AddModel<HeroCreationModel>(new MyHeroCreationModel());
    }
}
```

## See Also

- [Area Index](../)