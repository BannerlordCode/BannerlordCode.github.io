<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultHeroCreationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultHeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel`
**Base:** `HeroCreationModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHeroCreationModel.cs`

## Overview

`DefaultHeroCreationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeroCreationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBornSettlement
`public override Settlement GetBornSettlement(Hero hero)`

**Purpose:** Gets the current value of `born settlement`.

### GetStaticBodyProperties
`public override StaticBodyProperties GetStaticBodyProperties(Hero hero, bool isOffspring, float variationAmount = 0.35f)`

**Purpose:** Gets the current value of `static body properties`.

### GetPreferredUpgradeFormation
`public override FormationClass GetPreferredUpgradeFormation(Hero hero)`

**Purpose:** Gets the current value of `preferred upgrade formation`.

### GetClan
`public override Clan GetClan(Hero hero)`

**Purpose:** Gets the current value of `clan`.

### GetCulture
`public override CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)`

**Purpose:** Gets the current value of `culture`.

### GetRandomTemplateByOccupation
`public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)`

**Purpose:** Gets the current value of `random template by occupation`.

### GetCivilianEquipment
`public override Equipment GetCivilianEquipment(Hero hero)`

**Purpose:** Gets the current value of `civilian equipment`.

### GetBattleEquipment
`public override Equipment GetBattleEquipment(Hero hero)`

**Purpose:** Gets the current value of `battle equipment`.

### GetCharacterTemplateForOffspring
`public override CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)`

**Purpose:** Gets the current value of `character template for offspring`.

### IsHeroCombatant
`public override bool IsHeroCombatant(Hero hero)`

**Purpose:** Handles logic related to `is hero combatant`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultHeroCreationModel>(new MyDefaultHeroCreationModel());
```

## See Also

- [Complete Class Catalog](../catalog)