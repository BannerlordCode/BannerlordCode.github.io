---
title: "DefaultFormationArrangementModel"
description: "Auto-generated class reference for DefaultFormationArrangementModel."
---
# DefaultFormationArrangementModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationArrangementModel : FormationArrangementModel`
**Base:** `FormationArrangementModel`
**File:** `TaleWorlds.MountAndBlade/DefaultFormationArrangementModel.cs`

## Overview

`DefaultFormationArrangementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultFormationArrangementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBannerBearerPositions
`public override List<FormationArrangementModel.ArrangementPosition> GetBannerBearerPositions(Formation formation, int maxCount)`

**Purpose:** Reads and returns the banner bearer positions value held by the this instance.

```csharp
// Obtain an instance of DefaultFormationArrangementModel from the subsystem API first
DefaultFormationArrangementModel defaultFormationArrangementModel = ...;
var result = defaultFormationArrangementModel.GetBannerBearerPositions(formation, 0);
```

### GetArrangementPosition
`public FormationArrangementModel.ArrangementPosition GetArrangementPosition(int fileCount, int rankCount)`

**Purpose:** Reads and returns the arrangement position value held by the this instance.

```csharp
// Obtain an instance of DefaultFormationArrangementModel from the subsystem API first
DefaultFormationArrangementModel defaultFormationArrangementModel = ...;
var result = defaultFormationArrangementModel.GetArrangementPosition(0, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultFormationArrangementModel>(new MyDefaultFormationArrangementModel());
```

## See Also

- [Area Index](../)