<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultHeroCreationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel`
**Base:** `HeroCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs`

## Overview

`DefaultHeroCreationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultHeroCreationModel>(new MyDefaultHeroCreationModel())` to change how it computes.

## Key Methods

### GetBirthAndDeathDay
```csharp
public override ValueTuple<CampaignTime, CampaignTime> GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)
```

### GetBornSettlement
```csharp
public override Settlement GetBornSettlement(Hero hero)
```

### GetStaticBodyProperties
```csharp
public override StaticBodyProperties GetStaticBodyProperties(Hero hero, bool isOffspring, float variationAmount = 0.35f)
```

### GetPreferredUpgradeFormation
```csharp
public override FormationClass GetPreferredUpgradeFormation(Hero hero)
```

### GetClan
```csharp
public override Clan GetClan(Hero hero)
```

### GetCulture
```csharp
public override CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)
```

### GetRandomTemplateByOccupation
```csharp
public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)
```

### GetTraitsForHero
```csharp
public override List<ValueTuple<TraitObject, int>> GetTraitsForHero(Hero hero)
```

### GetCivilianEquipment
```csharp
public override Equipment GetCivilianEquipment(Hero hero)
```

### GetBattleEquipment
```csharp
public override Equipment GetBattleEquipment(Hero hero)
```

### GetCharacterTemplateForOffspring
```csharp
public override CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)
```

### GenerateFirstAndFullName
```csharp
public override ValueTuple<TextObject, TextObject> GenerateFirstAndFullName(Hero hero)
```

### GetDefaultSkillsForHero
```csharp
public override List<ValueTuple<SkillObject, int>> GetDefaultSkillsForHero(Hero hero)
```

### GetInheritedSkillsForHero
```csharp
public override List<ValueTuple<SkillObject, int>> GetInheritedSkillsForHero(Hero hero)
```

### IsHeroCombatant
```csharp
public override bool IsHeroCombatant(Hero hero)
```

## Usage Example

```csharp
// Typical usage of DefaultHeroCreationModel (Model)
Game.Current.ReplaceModel<DefaultHeroCreationModel>(new MyDefaultHeroCreationModel());
```

## See Also

- [Complete Class Catalog](../catalog)