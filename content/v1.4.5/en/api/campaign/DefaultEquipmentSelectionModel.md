---
title: "DefaultEquipmentSelectionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultEquipmentSelectionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultEquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEquipmentSelectionModel : EquipmentSelectionModel`
**Base:** `EquipmentSelectionModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultEquipmentSelectionModel.cs`

## Overview

`DefaultEquipmentSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEquipmentSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEquipmentForHeroComeOfAge
`public override Equipment GetEquipmentForHeroComeOfAge(Hero hero, Equipment.EquipmentType equipmentType)`

**Purpose:** Gets the current value of `equipment for hero come of age`.

### GetEquipmentForHeroReachesTeenAge
`public override Equipment GetEquipmentForHeroReachesTeenAge(Hero hero)`

**Purpose:** Gets the current value of `equipment for hero reaches teen age`.

### GetEquipmentForDeliveredOffspring
`public override Equipment GetEquipmentForDeliveredOffspring(Hero hero)`

**Purpose:** Gets the current value of `equipment for delivered offspring`.

### GetEquipmentForCompanionWhenTurningToLord
`public override Equipment GetEquipmentForCompanionWhenTurningToLord(Hero companionHero, Equipment.EquipmentType equipmentType)`

**Purpose:** Gets the current value of `equipment for companion when turning to lord`.

### GetEquipmentForInitialChildrenGeneration
`public override Equipment GetEquipmentForInitialChildrenGeneration(Hero hero)`

**Purpose:** Gets the current value of `equipment for initial children generation`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultEquipmentSelectionModel>(new MyDefaultEquipmentSelectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)