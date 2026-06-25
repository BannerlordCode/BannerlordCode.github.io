---
title: "EquipmentSelectionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EquipmentSelectionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**Base:** `MBGameModel<EquipmentSelectionModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/EquipmentSelectionModel.cs`

## Overview

`EquipmentSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `EquipmentSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEquipmentForHeroComeOfAge
`public abstract Equipment GetEquipmentForHeroComeOfAge(Hero hero, Equipment.EquipmentType equipmentType)`

**Purpose:** Gets the current value of `equipment for hero come of age`.

### GetEquipmentForHeroReachesTeenAge
`public abstract Equipment GetEquipmentForHeroReachesTeenAge(Hero hero)`

**Purpose:** Gets the current value of `equipment for hero reaches teen age`.

### GetEquipmentForInitialChildrenGeneration
`public abstract Equipment GetEquipmentForInitialChildrenGeneration(Hero hero)`

**Purpose:** Gets the current value of `equipment for initial children generation`.

### GetEquipmentForDeliveredOffspring
`public abstract Equipment GetEquipmentForDeliveredOffspring(Hero hero)`

**Purpose:** Gets the current value of `equipment for delivered offspring`.

### GetEquipmentForCompanionWhenTurningToLord
`public abstract Equipment GetEquipmentForCompanionWhenTurningToLord(Hero companionHero, Equipment.EquipmentType equipmentType)`

**Purpose:** Gets the current value of `equipment for companion when turning to lord`.

## Usage Example

```csharp
var implementation = new CustomEquipmentSelectionModel();
```

## See Also

- [Complete Class Catalog](../catalog)