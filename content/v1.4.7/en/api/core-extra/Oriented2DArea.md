---
title: "Oriented2DArea"
description: "Oriented2DArea — struct in TaleWorlds.Library. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# Oriented2DArea

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public struct Oriented2DArea`  
**Source:** `TaleWorlds.Library/Oriented2DArea.cs`

## Overview

`Oriented2DArea` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Oriented2DArea`.
- **Instance members** (9): `GlobalCenter`, `GlobalForward`, `LocalDimensions`, `SetGlobalCenter`, `SetLocalDimensions`, `Overlaps`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Corners` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `GetCorners` | method | Instance entry point. Takes no arguments. Returns `Oriented2DArea.Corners`. Read path: prefer it over reaching for the backing store. |
| `GlobalCenter` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `GlobalForward` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `Intersects` | method | Instance entry point. Takes 2 arguments: `in LineSegment2D line`, `float clearanceMargin`. Returns `bool`. |
| `LocalDimensions` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `Overlaps` | method | Instance entry point. Takes 2 arguments: `in Oriented2DArea otherArea`, `float clearanceMargin`. Returns `bool`. |
| `SetGlobalCenter` | method | Instance entry point. Takes 1 argument: `in Vec2 globalCenter`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetLocalDimensions` | method | Instance entry point. Takes 1 argument: `in Vec2 localDimensions`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Oriented2DArea` | ctor | Instance entry point. Takes 3 arguments: `in Vec2 globalCenter`, `in Vec2 globalForward`, `in Vec2 localDimensions`. Returns ``. |

- Constructed as `public Oriented2DArea(in Vec2 globalCenter, in Vec2 globalForward, in Vec2 localDimensions)`.

## Usage Example

```csharp
var data = new Oriented2DArea
{
    GlobalCenter = default,
    GlobalForward = default,
    LocalDimensions = default,
    Corners = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.Library/Oriented2DArea.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Min](../Min/) — `TaleWorlds.LinQuick`.

Section: [api/core-extra/](../) — the other types in this bucket.
