---
title: "EquipmentSelectionModel"
description: "Auto-generated class reference for EquipmentSelectionModel."
---
# EquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**Base:** `MBGameModel<EquipmentSelectionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/EquipmentSelectionModel.cs`

## Overview

`EquipmentSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `EquipmentSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEquipmentForHeroComeOfAge
`public abstract Equipment GetEquipmentForHeroComeOfAge(Hero hero, Equipment.EquipmentType equipmentType)`

**Purpose:** **Purpose:** Reads and returns the equipment for hero come of age value held by the this instance.

```csharp
// Obtain an instance of EquipmentSelectionModel from the subsystem API first
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentForHeroComeOfAge(hero, equipmentType);
```

### GetEquipmentForHeroReachesTeenAge
`public abstract Equipment GetEquipmentForHeroReachesTeenAge(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the equipment for hero reaches teen age value held by the this instance.

```csharp
// Obtain an instance of EquipmentSelectionModel from the subsystem API first
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentForHeroReachesTeenAge(hero);
```

### GetEquipmentForInitialChildrenGeneration
`public abstract Equipment GetEquipmentForInitialChildrenGeneration(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the equipment for initial children generation value held by the this instance.

```csharp
// Obtain an instance of EquipmentSelectionModel from the subsystem API first
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentForInitialChildrenGeneration(hero);
```

### GetEquipmentForDeliveredOffspring
`public abstract Equipment GetEquipmentForDeliveredOffspring(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the equipment for delivered offspring value held by the this instance.

```csharp
// Obtain an instance of EquipmentSelectionModel from the subsystem API first
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentForDeliveredOffspring(hero);
```

### GetEquipmentForCompanionWhenTurningToLord
`public abstract Equipment GetEquipmentForCompanionWhenTurningToLord(Hero companionHero, Equipment.EquipmentType equipmentType)`

**Purpose:** **Purpose:** Reads and returns the equipment for companion when turning to lord value held by the this instance.

```csharp
// Obtain an instance of EquipmentSelectionModel from the subsystem API first
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentForCompanionWhenTurningToLord(companionHero, equipmentType);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EquipmentSelectionModel instance = ...;
```

## See Also

- [Area Index](../)