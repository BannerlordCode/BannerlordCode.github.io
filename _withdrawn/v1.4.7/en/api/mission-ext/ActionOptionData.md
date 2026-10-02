---
title: "ActionOptionData"
description: "ActionOptionData — class in TaleWorlds.MountAndBlade.Options. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# ActionOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class ActionOptionData : IOptionData`  
**Base:** `IOptionData`  
**Source:** `TaleWorlds.MountAndBlade/Options/ActionOptionData.cs`

## Overview

`ActionOptionData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends IOptionData, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ActionOptionData`.
- **Instance members** (9): `OnAction`, `Commit`, `GetDefaultValue`, `GetOptionType`, `GetValue`, `IsNative`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Commit` | method | Instance entry point. Takes no arguments. |
| `GetDefaultValue` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetIsDisabledAndReasonID` | method | Instance entry point. Takes no arguments. Returns `ValueTuple<string, bool>`. Read path: prefer it over reaching for the backing store. |
| `GetOptionType` | method | Instance entry point. Takes no arguments. Returns `object`. Read path: prefer it over reaching for the backing store. |
| `GetValue` | method | Instance entry point. Takes 1 argument: `bool forceRefresh`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `IsAction` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsNative` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAction` | property | Instance entry point `Action` property. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetValue` | method | Instance entry point. Takes 1 argument: `float value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ActionOptionData` | ctor | Instance entry point. Takes 2 arguments: `ManagedOptions.ManagedOptionsType managedType`, `Action onAction`. Returns ``. |

- Constructed as `public ActionOptionData(ManagedOptions.ManagedOptionsType managedType, Action onAction)`.

## Usage Example

```csharp
var data = new ActionOptionData
{
    OnAction = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade/Options/ActionOptionData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IOptionData](../../engine/IOptionData/) — `TaleWorlds.Engine.Options`.

Section: [api/mission-ext/](../) — the other types in this bucket.
