---
title: "BribeCalculationModel"
description: "Auto-generated class reference for BribeCalculationModel."
---
# BribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BribeCalculationModel : MBGameModel<BribeCalculationModel>`
**Base:** `MBGameModel<BribeCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BribeCalculationModel.cs`

## Overview

`BribeCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BribeCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBribeToEnterLordsHall
`public abstract int GetBribeToEnterLordsHall(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the bribe to enter lords hall value held by the this instance.

```csharp
// Obtain an instance of BribeCalculationModel from the subsystem API first
BribeCalculationModel bribeCalculationModel = ...;
var result = bribeCalculationModel.GetBribeToEnterLordsHall(settlement);
```

### GetBribeToEnterDungeon
`public abstract int GetBribeToEnterDungeon(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the bribe to enter dungeon value held by the this instance.

```csharp
// Obtain an instance of BribeCalculationModel from the subsystem API first
BribeCalculationModel bribeCalculationModel = ...;
var result = bribeCalculationModel.GetBribeToEnterDungeon(settlement);
```

### IsBribeNotNeededToEnterKeep
`public abstract bool IsBribeNotNeededToEnterKeep(Settlement settlement)`

**Purpose:** **Purpose:** Determines whether the this instance is in the bribe not needed to enter keep state or condition.

```csharp
// Obtain an instance of BribeCalculationModel from the subsystem API first
BribeCalculationModel bribeCalculationModel = ...;
var result = bribeCalculationModel.IsBribeNotNeededToEnterKeep(settlement);
```

### IsBribeNotNeededToEnterDungeon
`public abstract bool IsBribeNotNeededToEnterDungeon(Settlement settlement)`

**Purpose:** **Purpose:** Determines whether the this instance is in the bribe not needed to enter dungeon state or condition.

```csharp
// Obtain an instance of BribeCalculationModel from the subsystem API first
BribeCalculationModel bribeCalculationModel = ...;
var result = bribeCalculationModel.IsBribeNotNeededToEnterDungeon(settlement);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BribeCalculationModel instance = ...;
```

## See Also

- [Area Index](../)