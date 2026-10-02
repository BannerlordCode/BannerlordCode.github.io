---
title: "BoundingBox"
description: "BoundingBox — struct in TaleWorlds.Engine. 16 public members (3 static)."
---

<!-- v147-skeleton -->
# BoundingBox

**Namespace:** `TaleWorlds.Engine`  
**Module:** `TaleWorlds.Engine`  
**Type:** `public struct BoundingBox`  
**Source:** `TaleWorlds.Engine/BoundingBox.cs`

## Overview

`BoundingBox` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BoundingBox`.
- **Static entry points** (3): `ArrangeWithAnotherBoundingBox`, `GetLongestHalfDimensionOfBoundingBox`, `AreBoundingBoxesIntersecting`.
- **Instance members** (12): `RelaxMinMaxWithPoint`, `RelaxMinMaxWithPointAndRadius`, `RecomputeRadius`, `GetTransformedTipPointsToParent`, `GetTransformedTipPointsToChild`, `RelaxWithBoundingBox`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AreBoundingBoxesIntersecting` | method (static) | Static entry point. Takes 2 arguments: `BoundingBox a`, `BoundingBox b`. Returns `bool`. |
| `ArrangeWithAnotherBoundingBox` | method (static) | Static entry point. Takes 3 arguments: `ref BoundingBox boundingBox`, `BoundingBox otherBoundingBox`, `float changeAmount`. Returns `bool`. |
| `GetLongestHalfDimensionOfBoundingBox` | method (static) | Static entry point. Takes 1 argument: `BoundingBox boundingBox`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `BeginRelaxation` | method | Instance entry point. Takes no arguments. |
| `GetTransformedTipPointsToChild` | method | Instance entry point. Takes 1 argument: `in MatrixFrame childFrame`. Returns `BoundingBox.TransformedBoundingBoxPointsContainer`. Read path: prefer it over reaching for the backing store. |
| `GetTransformedTipPointsToParent` | method | Instance entry point. Takes 1 argument: `in MatrixFrame parentFrame`. Returns `BoundingBox.TransformedBoundingBoxPointsContainer`. Read path: prefer it over reaching for the backing store. |
| `PointInsideBox` | method | Instance entry point. Takes 2 arguments: `Vec3 point`, `float epsilon`. Returns `bool`. |
| `RecomputeRadius` | method | Instance entry point. Takes no arguments. |
| `RelaxMinMaxWithPoint` | method | Instance entry point. Takes 1 argument: `in Vec3 point`. |
| `RelaxMinMaxWithPointAndRadius` | method | Instance entry point. Takes 2 arguments: `in Vec3 point`, `float radius`. |
| `RelaxWithArbitraryBoundingBox` | method | Instance entry point. Takes 3 arguments: `BoundingBox otherBoundingBox`, `MatrixFrame otherGlobalFrame`, `MatrixFrame globalFrameOfThisBoundingBox`. |
| `RelaxWithBoundingBox` | method | Instance entry point. Takes 1 argument: `BoundingBox modifiedBoundingBox`. |
| `RelaxWithChildBoundingBox` | method | Instance entry point. Takes 2 arguments: `BoundingBox childBoundingBox`, `MatrixFrame childFrame`. |
| `RenderBoundingBox` | method | Instance entry point. Takes no arguments. |
| `TransformedBoundingBoxPointsContainer` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `BoundingBox` | ctor | Instance entry point. Takes 1 argument: `in Vec3 point`. Returns ``. |

- Constructed as `public BoundingBox(in Vec3 point)`.

## Usage Example

```csharp
var data = new BoundingBox
{
    TransformedBoundingBoxPointsContainer = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.Engine/BoundingBox.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [CustomEngineStructMemberData](../../core-extra/CustomEngineStructMemberData/) — `TaleWorlds.DotNet`.

Section: [api/engine/](../) — the other types in this bucket.
