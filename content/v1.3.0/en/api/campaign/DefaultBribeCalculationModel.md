---
title: "DefaultBribeCalculationModel"
description: "Auto-generated class reference for DefaultBribeCalculationModel."
---
# DefaultBribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBribeCalculationModel : BribeCalculationModel`
**Base:** `BribeCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs`

## Overview

`DefaultBribeCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBribeCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsBribeNotNeededToEnterKeep
`public override bool IsBribeNotNeededToEnterKeep(Settlement settlement)`

**Purpose:** **Purpose:** Determines whether the this instance is in the bribe not needed to enter keep state or condition.

```csharp
// Obtain an instance of DefaultBribeCalculationModel from the subsystem API first
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.IsBribeNotNeededToEnterKeep(settlement);
```

### IsBribeNotNeededToEnterDungeon
`public override bool IsBribeNotNeededToEnterDungeon(Settlement settlement)`

**Purpose:** **Purpose:** Determines whether the this instance is in the bribe not needed to enter dungeon state or condition.

```csharp
// Obtain an instance of DefaultBribeCalculationModel from the subsystem API first
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.IsBribeNotNeededToEnterDungeon(settlement);
```

### GetBribeToEnterLordsHall
`public override int GetBribeToEnterLordsHall(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the bribe to enter lords hall value held by the this instance.

```csharp
// Obtain an instance of DefaultBribeCalculationModel from the subsystem API first
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.GetBribeToEnterLordsHall(settlement);
```

### GetBribeToEnterDungeon
`public override int GetBribeToEnterDungeon(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the bribe to enter dungeon value held by the this instance.

```csharp
// Obtain an instance of DefaultBribeCalculationModel from the subsystem API first
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.GetBribeToEnterDungeon(settlement);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBribeCalculationModel>(new MyDefaultBribeCalculationModel());
```

## See Also

- [Area Index](../)