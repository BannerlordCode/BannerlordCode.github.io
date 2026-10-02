---
title: "ManagedSelectionOptionData"
description: "ManagedSelectionOptionData — class in TaleWorlds.MountAndBlade.Options.ManagedOptions. 4 public members (1 static)."
---

<!-- v147-skeleton -->
# ManagedSelectionOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options.ManagedOptions`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`  
**Base:** `ManagedOptionData, ISelectionOptionData, IOptionData`  
**Source:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs`

## Overview

`ManagedSelectionOptionData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends ManagedOptionData, ISelectionOptionData, IOptionData, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ManagedSelectionOptionData`.
- **Static entry points** (1): `GetOptionsLimit`.
- **Instance members** (2): `GetSelectableOptionsLimit`, `GetSelectableOptionNames`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetOptionsLimit` | method (static) | Static entry point. Takes 1 argument: `ManagedOptions.ManagedOptionsType optionType`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetSelectableOptionNames` | method | Instance entry point. Takes no arguments. Returns `IEnumerable<SelectionData>`. Read path: prefer it over reaching for the backing store. |
| `GetSelectableOptionsLimit` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `ManagedSelectionOptionData` | ctor | Instance entry point. Takes 1 argument: `ManagedOptions.ManagedOptionsType type`. Returns ``. |

- Constructed as `public ManagedSelectionOptionData(ManagedOptions.ManagedOptionsType type)`.

## Usage Example

```csharp
ManagedSelectionOptionData.GetOptionsLimit(optionType);
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ManagedOptionData](../ManagedOptionData/) — `TaleWorlds.MountAndBlade.Options.ManagedOptions`.
- [ISelectionOptionData](../../engine/ISelectionOptionData/) — `TaleWorlds.Engine.Options`.
- [IOptionData](../../engine/IOptionData/) — `TaleWorlds.Engine.Options`.
- [LocalizedTextManager](../../localization/LocalizedTextManager/) — `TaleWorlds.Localization`.
- [LocalizedVoiceManager](../../localization/LocalizedVoiceManager/) — `TaleWorlds.Localization`.

Section: [api/mission-ext/](../) — the other types in this bucket.
