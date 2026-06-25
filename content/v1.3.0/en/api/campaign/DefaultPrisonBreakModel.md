---
title: "DefaultPrisonBreakModel"
description: "Auto-generated class reference for DefaultPrisonBreakModel."
---
# DefaultPrisonBreakModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonBreakModel : PrisonBreakModel`
**Base:** `PrisonBreakModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs`

## Overview

`DefaultPrisonBreakModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPrisonBreakModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetNumberOfGuardsToSpawn
`public override int GetNumberOfGuardsToSpawn(Settlement settlement)`

**Purpose:** Reads and returns the number of guards to spawn value held by the this instance.

```csharp
// Obtain an instance of DefaultPrisonBreakModel from the subsystem API first
DefaultPrisonBreakModel defaultPrisonBreakModel = ...;
var result = defaultPrisonBreakModel.GetNumberOfGuardsToSpawn(settlement);
```

### CanPlayerStagePrisonBreak
`public override bool CanPlayerStagePrisonBreak(Settlement settlement)`

**Purpose:** Checks whether the this instance meets the preconditions for player stage prison break.

```csharp
// Obtain an instance of DefaultPrisonBreakModel from the subsystem API first
DefaultPrisonBreakModel defaultPrisonBreakModel = ...;
var result = defaultPrisonBreakModel.CanPlayerStagePrisonBreak(settlement);
```

### GetPrisonBreakStartCost
`public override int GetPrisonBreakStartCost(Hero prisonerHero)`

**Purpose:** Reads and returns the prison break start cost value held by the this instance.

```csharp
// Obtain an instance of DefaultPrisonBreakModel from the subsystem API first
DefaultPrisonBreakModel defaultPrisonBreakModel = ...;
var result = defaultPrisonBreakModel.GetPrisonBreakStartCost(prisonerHero);
```

### GetRelationRewardOnPrisonBreak
`public override int GetRelationRewardOnPrisonBreak(Hero prisonerHero)`

**Purpose:** Reads and returns the relation reward on prison break value held by the this instance.

```csharp
// Obtain an instance of DefaultPrisonBreakModel from the subsystem API first
DefaultPrisonBreakModel defaultPrisonBreakModel = ...;
var result = defaultPrisonBreakModel.GetRelationRewardOnPrisonBreak(prisonerHero);
```

### GetRogueryRewardOnPrisonBreak
`public override float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)`

**Purpose:** Reads and returns the roguery reward on prison break value held by the this instance.

```csharp
// Obtain an instance of DefaultPrisonBreakModel from the subsystem API first
DefaultPrisonBreakModel defaultPrisonBreakModel = ...;
var result = defaultPrisonBreakModel.GetRogueryRewardOnPrisonBreak(prisonerHero, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPrisonBreakModel>(new MyDefaultPrisonBreakModel());
```

## See Also

- [Area Index](../)