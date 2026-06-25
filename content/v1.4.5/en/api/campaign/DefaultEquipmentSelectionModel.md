---
title: "DefaultEquipmentSelectionModel"
description: "Auto-generated class reference for DefaultEquipmentSelectionModel."
---
# DefaultEquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEquipmentSelectionModel : EquipmentSelectionModel`
**Base:** `EquipmentSelectionModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultEquipmentSelectionModel.cs`

## Overview

`DefaultEquipmentSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEquipmentSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEquipmentForHeroComeOfAge
`public override Equipment GetEquipmentForHeroComeOfAge(Hero hero, Equipment.EquipmentType equipmentType)`

**Purpose:** **Purpose:** Reads and returns the equipment for hero come of age value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentForHeroComeOfAge(hero, equipmentType);
```

### GetEquipmentForHeroReachesTeenAge
`public override Equipment GetEquipmentForHeroReachesTeenAge(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the equipment for hero reaches teen age value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentForHeroReachesTeenAge(hero);
```

### GetEquipmentForDeliveredOffspring
`public override Equipment GetEquipmentForDeliveredOffspring(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the equipment for delivered offspring value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentForDeliveredOffspring(hero);
```

### GetEquipmentForCompanionWhenTurningToLord
`public override Equipment GetEquipmentForCompanionWhenTurningToLord(Hero companionHero, Equipment.EquipmentType equipmentType)`

**Purpose:** **Purpose:** Reads and returns the equipment for companion when turning to lord value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentForCompanionWhenTurningToLord(companionHero, equipmentType);
```

### GetEquipmentForInitialChildrenGeneration
`public override Equipment GetEquipmentForInitialChildrenGeneration(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the equipment for initial children generation value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentForInitialChildrenGeneration(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultEquipmentSelectionModel>(new MyDefaultEquipmentSelectionModel());
```

## See Also

- [Area Index](../)