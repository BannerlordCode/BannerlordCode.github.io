---
title: "Rectangle2D"
description: "Rectangle2D — struct in TaleWorlds.TwoDimension. 12 public members (1 static)."
---

<!-- v147-skeleton -->
# Rectangle2D

**Namespace:** `TaleWorlds.TwoDimension`  
**Module:** `TaleWorlds.TwoDimension`  
**Type:** `public struct Rectangle2D`  
**Source:** `TaleWorlds.TwoDimension/Rectangle2D.cs`

## Overview

`Rectangle2D` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `Invalid`.
- **Instance members** (2): `DrawBoundingBox`, `DrawCorners`.
- **Data and constants** (9): `IsValid`, `TopLeft`, `TopRight`, `BottomRight`, `BottomLeft`, `LocalPosition`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Invalid` | property (static) | Static entry point `Rectangle2D` property. Read it for current state; a declared setter writes that state in place. |
| `DrawBoundingBox` | method | Instance entry point. Takes no arguments. |
| `DrawCorners` | method | Instance entry point. Takes no arguments. |
| `BottomLeft` | field | Instance entry point `Vector2` field — direct storage with no validation or notification. |
| `BottomRight` | field | Instance entry point `Vector2` field — direct storage with no validation or notification. |
| `IsValid` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `LocalPivot` | field | Instance entry point `Vector2` field — direct storage with no validation or notification. |
| `LocalPosition` | field | Instance entry point `Vector2` field — direct storage with no validation or notification. |
| `LocalRotation` | field | Instance entry point `float` field — direct storage with no validation or notification. |
| `LocalScale` | field | Instance entry point `Vector2` field — direct storage with no validation or notification. |
| `TopLeft` | field | Instance entry point `Vector2` field — direct storage with no validation or notification. |
| `TopRight` | field | Instance entry point `Vector2` field — direct storage with no validation or notification. |

## Usage Example

```csharp
var data = new Rectangle2D
{
    Invalid = default,
    IsValid = false,
    TopLeft = default,
    TopRight = default,
    BottomRight = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.TwoDimension/Rectangle2D.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/gui/](../) — the other types in this bucket.
