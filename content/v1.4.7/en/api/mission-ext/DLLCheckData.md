---
title: "DLLCheckData"
description: "DLLCheckData — class in TaleWorlds.MountAndBlade.Launcher.Library.UserDatas. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# DLLCheckData

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`  
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Type:** `public class DLLCheckData`  
**Source:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/DLLCheckData.cs`

## Overview

`DLLCheckData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `DLLCheckData`, `DLLCheckData`.
- **Instance members** (4): `DLLName`, `DLLVerifyInformation`, `LatestSizeInBytes`, `IsDangerous`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DLLName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `DLLVerifyInformation` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IsDangerous` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LatestSizeInBytes` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `DLLCheckData` | ctor | Instance entry point. Takes 1 argument: `string dllname`. Returns ``. |
| `DLLCheckData` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DLLCheckData(string dllname)`.
- Constructed as `public DLLCheckData()`.

## Usage Example

```csharp
var data = new DLLCheckData
{
    DLLName = "",
    DLLVerifyInformation = "",
    LatestSizeInBytes = default,
    IsDangerous = false,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/DLLCheckData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
