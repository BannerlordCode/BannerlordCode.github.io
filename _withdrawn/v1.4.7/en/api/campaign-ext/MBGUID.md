---
title: "MBGUID"
description: "MBGUID — struct in TaleWorlds.ObjectSystem. 11 public members (2 static)."
---

<!-- v147-skeleton -->
# MBGUID

**Namespace:** `TaleWorlds.ObjectSystem`  
**Module:** `TaleWorlds.ObjectSystem`  
**Type:** `public struct MBGUID : IComparable, IEquatable<MBGUID>`  
**Base:** `IComparable, IEquatable`  
**Source:** `TaleWorlds.ObjectSystem/MBGUID.cs`

## Overview

`MBGUID` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends IComparable, IEquatable, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `MBGUID`, `MBGUID`.
- **Static entry points** (2): `operator`, `GetHash2`.
- **Instance members** (7): `InternalValue`, `SubId`, `CompareTo`, `GetTypeIndex`, `GetHashCode`, `ToString`, ….
- **Extension points** (3): `GetHashCode`, `ToString`, `Equals`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Equals` | method (override) | Overrides the base member. Takes 1 argument: `object obj`. Returns `bool`. |
| `GetHash2` | method (static) | Static entry point. Takes 2 arguments: `MBGUID id1`, `MBGUID id2`. Returns `long`. Read path: prefer it over reaching for the backing store. |
| `GetHashCode` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `operator` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `CompareTo` | method | Instance entry point. Takes 1 argument: `object a`. Returns `int`. |
| `GetTypeIndex` | method | Instance entry point. Takes no arguments. Returns `uint`. Read path: prefer it over reaching for the backing store. |
| `InternalValue` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `SubId` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `MBGUID` | ctor | Instance entry point. Takes 1 argument: `uint id`. Returns ``. |
| `MBGUID` | ctor | Instance entry point. Takes 2 arguments: `uint objType`, `uint subId`. Returns ``. |

- Constructed as `public MBGUID(uint id)`.
- Constructed as `public MBGUID(uint objType, uint subId)`.

## Usage Example

```csharp
var data = new MBGUID
{
    InternalValue = default,
    SubId = default,
    operator = false,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.ObjectSystem/MBGUID.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign-ext/](../) — the other types in this bucket.
