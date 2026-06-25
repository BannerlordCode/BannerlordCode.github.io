---
title: "EquipmentSelectionModel"
description: "Auto-generated class reference for EquipmentSelectionModel."
---
# EquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**Base:** `MBGameModel<EquipmentSelectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs`

## Overview

`EquipmentSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `EquipmentSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEquipmentRostersForHeroComeOfAge
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForHeroComeOfAge(Hero hero, bool isCivilian)`

**Purpose:** **Purpose:** Reads and returns the equipment rosters for hero come of age value held by the this instance.

```csharp
// Obtain an instance of EquipmentSelectionModel from the subsystem API first
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentRostersForHeroComeOfAge(hero, false);
```

### GetEquipmentRostersForHeroReachesTeenAge
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForHeroReachesTeenAge(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the equipment rosters for hero reaches teen age value held by the this instance.

```csharp
// Obtain an instance of EquipmentSelectionModel from the subsystem API first
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentRostersForHeroReachesTeenAge(hero);
```

### GetEquipmentRostersForInitialChildrenGeneration
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForInitialChildrenGeneration(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the equipment rosters for initial children generation value held by the this instance.

```csharp
// Obtain an instance of EquipmentSelectionModel from the subsystem API first
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentRostersForInitialChildrenGeneration(hero);
```

### GetEquipmentRostersForDeliveredOffspring
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForDeliveredOffspring(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the equipment rosters for delivered offspring value held by the this instance.

```csharp
// Obtain an instance of EquipmentSelectionModel from the subsystem API first
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentRostersForDeliveredOffspring(hero);
```

### GetEquipmentRostersForCompanion
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForCompanion(Hero companionHero, bool isCivilian)`

**Purpose:** **Purpose:** Reads and returns the equipment rosters for companion value held by the this instance.

```csharp
// Obtain an instance of EquipmentSelectionModel from the subsystem API first
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentRostersForCompanion(companionHero, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EquipmentSelectionModel instance = ...;
```

## See Also

- [Area Index](../)