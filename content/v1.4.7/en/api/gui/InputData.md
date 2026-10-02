---
title: "InputData"
description: "InputData — class in TaleWorlds.TwoDimension.Standalone. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# InputData

**Namespace:** `TaleWorlds.TwoDimension.Standalone`  
**Module:** `TaleWorlds.TwoDimension.Standalone`  
**Type:** `public class InputData`  
**Source:** `TaleWorlds.TwoDimension.Standalone/InputData.cs`

## Overview

`InputData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `InputData`.
- **Instance members** (9): `KeyData`, `LeftMouse`, `RightMouse`, `CursorX`, `CursorY`, `MouseMove`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CursorX` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `CursorY` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `FillFrom` | method | Instance entry point. Takes 1 argument: `InputData inputData`. |
| `KeyData` | property | Instance entry point `bool[]` property. Read it for current state; a declared setter writes that state in place. |
| `LeftMouse` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `MouseMove` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `MouseScrollDelta` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `Reset` | method | Instance entry point. Takes no arguments. |
| `RightMouse` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `InputData` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public InputData()`.

## Usage Example

```csharp
var data = new InputData
{
    KeyData = false,
    LeftMouse = false,
    RightMouse = false,
    CursorX = 0,
    CursorY = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.TwoDimension.Standalone/InputData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
