<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroCreationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroCreationModel : MBGameModel<HeroCreationModel>`
**Base:** `MBGameModel<HeroCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs`

## Overview

`HeroCreationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<HeroCreationModel>(new MyHeroCreationModel())` to change how it computes.

## Key Methods

### GetBirthAndDeathDay
```csharp
public abstract ValueTuple<CampaignTime, CampaignTime> GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)
```

### GetBornSettlement
```csharp
public abstract Settlement GetBornSettlement(Hero character)
```

### GetStaticBodyProperties
```csharp
public abstract StaticBodyProperties GetStaticBodyProperties(Hero character, bool isOffspring, float variationAmount = 0.35f)
```

### GetPreferredUpgradeFormation
```csharp
public abstract FormationClass GetPreferredUpgradeFormation(Hero character)
```

### GetClan
```csharp
public abstract Clan GetClan(Hero character)
```

### GetCulture
```csharp
public abstract CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)
```

### GetRandomTemplateByOccupation
```csharp
public abstract CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)
```

### GetTraitsForHero
```csharp
public abstract List<ValueTuple<TraitObject, int>> GetTraitsForHero(Hero hero)
```

### GetCivilianEquipment
```csharp
public abstract Equipment GetCivilianEquipment(Hero hero)
```

### GetBattleEquipment
```csharp
public abstract Equipment GetBattleEquipment(Hero hero)
```

### GetCharacterTemplateForOffspring
```csharp
public abstract CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)
```

### GenerateFirstAndFullName
```csharp
public abstract ValueTuple<TextObject, TextObject> GenerateFirstAndFullName(Hero hero)
```

### GetDefaultSkillsForHero
```csharp
public abstract List<ValueTuple<SkillObject, int>> GetDefaultSkillsForHero(Hero hero)
```

### GetInheritedSkillsForHero
```csharp
public abstract List<ValueTuple<SkillObject, int>> GetInheritedSkillsForHero(Hero hero)
```

### IsHeroCombatant
```csharp
public abstract bool IsHeroCombatant(Hero hero)
```

## Usage Example

```csharp
// Typical usage of HeroCreationModel (Model)
Game.Current.ReplaceModel<HeroCreationModel>(new MyHeroCreationModel());
```

## See Also

- [Complete Class Catalog](../catalog)