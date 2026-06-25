---
title: "FormationArrangementModel"
description: "Auto-generated class reference for FormationArrangementModel."
---
# FormationArrangementModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class FormationArrangementModel : MBGameModel<FormationArrangementModel>`
**Base:** `MBGameModel<FormationArrangementModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/FormationArrangementModel.cs`

## Overview

`FormationArrangementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `FormationArrangementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### GetBannerBearerPositions
`public abstract List<ArrangementPosition> GetBannerBearerPositions(Formation formation, int maxCount)`

**Purpose:** Reads and returns the `banner bearer positions` value held by the current object.

```csharp
// Obtain an instance of FormationArrangementModel from the subsystem API first
FormationArrangementModel formationArrangementModel = ...;
var result = formationArrangementModel.GetBannerBearerPositions(formation, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
FormationArrangementModel instance = ...;
```

## See Also

- [Area Index](../)