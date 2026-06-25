---
title: "PrisonBreakModel"
description: "Auto-generated class reference for PrisonBreakModel."
---
# PrisonBreakModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonBreakModel : MBGameModel<PrisonBreakModel>`
**Base:** `MBGameModel<PrisonBreakModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PrisonBreakModel.cs`

## Overview

`PrisonBreakModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PrisonBreakModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetNumberOfGuardsToSpawn
`public abstract int GetNumberOfGuardsToSpawn(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the number of guards to spawn value held by the this instance.

```csharp
// Obtain an instance of PrisonBreakModel from the subsystem API first
PrisonBreakModel prisonBreakModel = ...;
var result = prisonBreakModel.GetNumberOfGuardsToSpawn(settlement);
```

### CanPlayerStagePrisonBreak
`public abstract bool CanPlayerStagePrisonBreak(Settlement settlement)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for player stage prison break.

```csharp
// Obtain an instance of PrisonBreakModel from the subsystem API first
PrisonBreakModel prisonBreakModel = ...;
var result = prisonBreakModel.CanPlayerStagePrisonBreak(settlement);
```

### GetPrisonBreakStartCost
`public abstract int GetPrisonBreakStartCost(Hero prisonerHero)`

**Purpose:** **Purpose:** Reads and returns the prison break start cost value held by the this instance.

```csharp
// Obtain an instance of PrisonBreakModel from the subsystem API first
PrisonBreakModel prisonBreakModel = ...;
var result = prisonBreakModel.GetPrisonBreakStartCost(prisonerHero);
```

### GetRelationRewardOnPrisonBreak
`public abstract int GetRelationRewardOnPrisonBreak(Hero prisonerHero)`

**Purpose:** **Purpose:** Reads and returns the relation reward on prison break value held by the this instance.

```csharp
// Obtain an instance of PrisonBreakModel from the subsystem API first
PrisonBreakModel prisonBreakModel = ...;
var result = prisonBreakModel.GetRelationRewardOnPrisonBreak(prisonerHero);
```

### GetRogueryRewardOnPrisonBreak
`public abstract float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)`

**Purpose:** **Purpose:** Reads and returns the roguery reward on prison break value held by the this instance.

```csharp
// Obtain an instance of PrisonBreakModel from the subsystem API first
PrisonBreakModel prisonBreakModel = ...;
var result = prisonBreakModel.GetRogueryRewardOnPrisonBreak(prisonerHero, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PrisonBreakModel instance = ...;
```

## See Also

- [Area Index](../)