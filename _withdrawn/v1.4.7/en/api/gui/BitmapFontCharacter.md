---
title: "BitmapFontCharacter"
description: "BitmapFontCharacter — struct in TaleWorlds.TwoDimension. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# BitmapFontCharacter

**Namespace:** `TaleWorlds.TwoDimension`  
**Module:** `TaleWorlds.TwoDimension`  
**Type:** `public struct BitmapFontCharacter`  
**Source:** `TaleWorlds.TwoDimension/BitmapFontCharacter.cs`

## Overview

`BitmapFontCharacter` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Data and constants** (8): `ID`, `X`, `Y`, `Width`, `Height`, `XOffset`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Height` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `ID` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `Width` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `X` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `XAdvance` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `XOffset` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `Y` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `YOffset` | field | Instance entry point `int` field — direct storage with no validation or notification. |

## Usage Example

```csharp
var data = new BitmapFontCharacter
{
    ID = 0,
    X = 0,
    Y = 0,
    Width = 0,
    Height = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.TwoDimension/BitmapFontCharacter.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
