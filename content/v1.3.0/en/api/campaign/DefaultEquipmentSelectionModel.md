---
title: "DefaultEquipmentSelectionModel"
description: "Auto-generated class reference for DefaultEquipmentSelectionModel."
---
# DefaultEquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEquipmentSelectionModel : EquipmentSelectionModel`
**Base:** `EquipmentSelectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEquipmentSelectionModel.cs`

## Overview

`DefaultEquipmentSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEquipmentSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEquipmentRostersForHeroComeOfAge
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForHeroComeOfAge(Hero hero, bool isCivilian)`

**Purpose:** Reads and returns the equipment rosters for hero come of age value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForHeroComeOfAge(hero, false);
```

### GetEquipmentRostersForHeroReachesTeenAge
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForHeroReachesTeenAge(Hero hero)`

**Purpose:** Reads and returns the equipment rosters for hero reaches teen age value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForHeroReachesTeenAge(hero);
```

### GetEquipmentRostersForInitialChildrenGeneration
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForInitialChildrenGeneration(Hero hero)`

**Purpose:** Reads and returns the equipment rosters for initial children generation value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForInitialChildrenGeneration(hero);
```

### GetEquipmentRostersForDeliveredOffspring
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForDeliveredOffspring(Hero hero)`

**Purpose:** Reads and returns the equipment rosters for delivered offspring value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForDeliveredOffspring(hero);
```

### GetEquipmentRostersForCompanion
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForCompanion(Hero hero, bool isCivilian)`

**Purpose:** Reads and returns the equipment rosters for companion value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForCompanion(hero, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultEquipmentSelectionModel>(new MyDefaultEquipmentSelectionModel());
```

## See Also

- [Area Index](../)