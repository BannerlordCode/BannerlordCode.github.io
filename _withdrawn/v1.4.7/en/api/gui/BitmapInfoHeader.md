---
title: "BitmapInfoHeader"
description: "BitmapInfoHeader — struct in TaleWorlds.TwoDimension.Standalone.Native.Windows. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# BitmapInfoHeader

**Namespace:** `TaleWorlds.TwoDimension.Standalone.Native.Windows`  
**Module:** `TaleWorlds.TwoDimension.Standalone`  
**Type:** `public struct BitmapInfoHeader`  
**Source:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/BitmapInfoHeader.cs`

## Overview

`BitmapInfoHeader` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Data and constants** (11): `biSize`, `biWidth`, `biHeight`, `biPlanes`, `biBitCount`, `biCompression`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `biBitCount` | field | Instance entry point `ushort` field — direct storage with no validation or notification. |
| `biClrImportant` | field | Instance entry point `uint` field — direct storage with no validation or notification. |
| `biClrUsed` | field | Instance entry point `uint` field — direct storage with no validation or notification. |
| `biCompression` | field | Instance entry point `uint` field — direct storage with no validation or notification. |
| `biHeight` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `biPlanes` | field | Instance entry point `ushort` field — direct storage with no validation or notification. |
| `biSize` | field | Instance entry point `uint` field — direct storage with no validation or notification. |
| `biSizeImage` | field | Instance entry point `uint` field — direct storage with no validation or notification. |
| `biWidth` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `biXPelsPerMeter` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `biYPelsPerMeter` | field | Instance entry point `int` field — direct storage with no validation or notification. |

## Usage Example

```csharp
var data = new BitmapInfoHeader
{
    biSize = default,
    biWidth = 0,
    biHeight = 0,
    biPlanes = default,
    biBitCount = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.TwoDimension.Standalone/Native/Windows/BitmapInfoHeader.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
