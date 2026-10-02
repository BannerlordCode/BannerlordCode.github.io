---
title: "NativeNumericOptionData"
description: "NativeNumericOptionData — class in TaleWorlds.Engine.Options. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# NativeNumericOptionData

**Namespace:** `TaleWorlds.Engine.Options`  
**Module:** `TaleWorlds.Engine`  
**Type:** `public class NativeNumericOptionData : NativeOptionData, INumericOptionData, IOptionData`  
**Base:** `NativeOptionData, INumericOptionData, IOptionData`  
**Source:** `TaleWorlds.Engine/Options/NativeNumericOptionData.cs`

## Overview

`NativeNumericOptionData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends NativeOptionData, INumericOptionData, IOptionData, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `NativeNumericOptionData`.
- **Instance members** (5): `GetMinValue`, `GetMaxValue`, `GetIsDiscrete`, `GetDiscreteIncrementInterval`, `GetShouldUpdateContinuously`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetDiscreteIncrementInterval` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetIsDiscrete` | method | Instance entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetMaxValue` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMinValue` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetShouldUpdateContinuously` | method | Instance entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `NativeNumericOptionData` | ctor | Instance entry point. Takes 1 argument: `NativeOptions.NativeOptionsType type`. Returns ``. |

- Constructed as `public NativeNumericOptionData(NativeOptions.NativeOptionsType type)`.

## Usage Example

```csharp
NativeNumericOptionData.GetMinValue();
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.Engine/Options/NativeNumericOptionData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [INumericOptionData](../INumericOptionData/) — `TaleWorlds.Engine.Options`.
- [IOptionData](../IOptionData/) — `TaleWorlds.Engine.Options`.

Section: [api/engine/](../) — the other types in this bucket.
