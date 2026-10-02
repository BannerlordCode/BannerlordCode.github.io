---
title: "ManagedOptionData"
description: "ManagedOptionData — class in TaleWorlds.MountAndBlade.Options.ManagedOptions. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# ManagedOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options.ManagedOptions`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class ManagedOptionData : IOptionData`  
**Base:** `IOptionData`  
**Source:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs`

## Overview

`ManagedOptionData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends IOptionData, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ManagedOptionData`.
- **Instance members** (8): `GetDefaultValue`, `Commit`, `GetValue`, `SetValue`, `GetOptionType`, `IsNative`, ….
- **Extension points** (1): `GetDefaultValue`.
- **Data and constants** (1): `Type`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetDefaultValue` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `Commit` | method | Instance entry point. Takes no arguments. |
| `GetIsDisabledAndReasonID` | method | Instance entry point. Takes no arguments. Returns `ValueTuple<string, bool>`. Read path: prefer it over reaching for the backing store. |
| `GetOptionType` | method | Instance entry point. Takes no arguments. Returns `object`. Read path: prefer it over reaching for the backing store. |
| `GetValue` | method | Instance entry point. Takes 1 argument: `bool forceRefresh`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `IsAction` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsNative` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SetValue` | method | Instance entry point. Takes 1 argument: `float value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Type` | field | Instance entry point `ManagedOptions.ManagedOptionsType` field — direct storage with no validation or notification. |
| `ManagedOptionData` | ctor | Protected — for subclasses only. Takes 1 argument: `ManagedOptions.ManagedOptionsType type`. Returns ``. |

- Constructed as `protected ManagedOptionData(ManagedOptions.ManagedOptionsType type)`.

## Usage Example

```csharp
var data = new ManagedOptionData
{
    Type = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IOptionData](../../engine/IOptionData/) — `TaleWorlds.Engine.Options`.

Section: [api/mission-ext/](../) — the other types in this bucket.
