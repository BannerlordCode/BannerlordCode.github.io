---
title: "LauncherDLLData"
description: "LauncherDLLData — class in TaleWorlds.MountAndBlade.Launcher.Library. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# LauncherDLLData

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Type:** `public class LauncherDLLData`  
**Source:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs`

## Overview

`LauncherDLLData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LauncherDLLData`.
- **Instance members** (7): `SubModule`, `IsDangerous`, `VerifyInformation`, `Size`, `SetIsDLLDangerous`, `SetDLLSize`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsDangerous` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SetDLLSize` | method | Instance entry point. Takes 1 argument: `uint size`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDLLVerifyInformation` | method | Instance entry point. Takes 1 argument: `string info`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetIsDLLDangerous` | method | Instance entry point. Takes 1 argument: `bool isDangerous`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Size` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `SubModule` | property | Instance entry point `SubModuleInfo` property. Read it for current state; a declared setter writes that state in place. |
| `VerifyInformation` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `LauncherDLLData` | ctor | Instance entry point. Takes 4 arguments: `SubModuleInfo subModule`, `bool isDangerous`, `string verifyInformation`, `uint size`. Returns ``. |

- Constructed as `public LauncherDLLData(SubModuleInfo subModule, bool isDangerous, string verifyInformation, uint size)`.

## Usage Example

```csharp
var data = new LauncherDLLData
{
    SubModule = default,
    IsDangerous = false,
    VerifyInformation = "",
    Size = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
