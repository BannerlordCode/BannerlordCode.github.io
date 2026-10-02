---
title: "BlendFunction"
description: "BlendFunction — struct in TaleWorlds.TwoDimension.Standalone.Native.Windows. 6 public members (1 static)."
---

<!-- v147-skeleton -->
# BlendFunction

**Namespace:** `TaleWorlds.TwoDimension.Standalone.Native.Windows`  
**Module:** `TaleWorlds.TwoDimension.Standalone`  
**Type:** `public struct BlendFunction`  
**Source:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/BlendFunction.cs`

## Overview

`BlendFunction` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BlendFunction`.
- **Static entry points** (1): `Default`.
- **Data and constants** (4): `BlendOp`, `BlendFlags`, `SourceConstantAlpha`, `AlphaFormat`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Default` | property (static) | Static entry point `BlendFunction` property. Read it for current state; a declared setter writes that state in place. |
| `BlendFunction` | ctor | Instance entry point. Takes 4 arguments: `AlphaFormatFlags op`, `byte flags`, `byte alpha`, `AlphaFormatFlags format`. Returns ``. |
| `AlphaFormat` | field | Instance entry point `byte` field — direct storage with no validation or notification. |
| `BlendFlags` | field | Instance entry point `byte` field — direct storage with no validation or notification. |
| `BlendOp` | field | Instance entry point `byte` field — direct storage with no validation or notification. |
| `SourceConstantAlpha` | field | Instance entry point `byte` field — direct storage with no validation or notification. |

- Constructed as `public BlendFunction(AlphaFormatFlags op, byte flags, byte alpha, AlphaFormatFlags format)`.

## Usage Example

```csharp
var data = new BlendFunction
{
    BlendOp = 0,
    BlendFlags = 0,
    SourceConstantAlpha = 0,
    AlphaFormat = 0,
    Default = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.TwoDimension.Standalone/Native/Windows/BlendFunction.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AlphaFormatFlags](../AlphaFormatFlags/) — `TaleWorlds.TwoDimension.Standalone.Native.Windows`.

Section: [api/gui/](../) — the other types in this bucket.
