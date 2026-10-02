---
title: "ModuleInfo"
description: "ModuleInfo — class in TaleWorlds.ModuleManager. 23 public members (0 static)."
---

<!-- v147-skeleton -->
# ModuleInfo

**Namespace:** `TaleWorlds.ModuleManager`  
**Module:** `TaleWorlds.ModuleManager`  
**Type:** `public class ModuleInfo`  
**Source:** `TaleWorlds.ModuleManager/ModuleInfo.cs`

## Overview

`ModuleInfo` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ModuleInfo`.
- **Instance members** (18): `IsSelected`, `Id`, `Name`, `IsOfficial`, `IsDefault`, `IsRequiredOfficial`, ….
- **Data and constants** (4): `SubModules`, `DependedModules`, `ModulesToLoadAfterThis`, `IncompatibleModules`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ActivateModule` | method | Instance entry point. Takes no arguments. |
| `Category` | property | Instance entry point `ModuleCategory` property. Read it for current state; a declared setter writes that state in place. |
| `DeactivateModule` | method | Instance entry point. Takes no arguments. |
| `FolderPath` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `HasMultiplayerCategory` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Id` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IsActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsDefault` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsNative` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsOfficial` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsRequiredOfficial` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsSelected` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LoadWithFullPath` | method | Instance entry point. Takes 1 argument: `string fullPath`. |
| `Name` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `RequiredBaseVersion` | property | Instance entry point `ApplicationVersion` property. Read it for current state; a declared setter writes that state in place. |
| `Type` | property | Instance entry point `ModuleType` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateVersionChangeSet` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Version` | property | Instance entry point `ApplicationVersion` property. Read it for current state; a declared setter writes that state in place. |
| `ModuleInfo` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `DependedModules` | field | Instance entry point `List<DependedModule>` field — direct storage with no validation or notification. |
| `IncompatibleModules` | field | Instance entry point `List<DependedModule>` field — direct storage with no validation or notification. |
| `ModulesToLoadAfterThis` | field | Instance entry point `List<DependedModule>` field — direct storage with no validation or notification. |
| `SubModules` | field | Instance entry point `List<SubModuleInfo>` field — direct storage with no validation or notification. |

- Constructed as `public ModuleInfo()`.

## Usage Example

```csharp
var data = new ModuleInfo
{
    IsSelected = false,
    Id = "",
    Name = "",
    IsOfficial = false,
    IsDefault = false,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.ModuleManager/ModuleInfo.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ModuleCategory](../ModuleCategory/) — `TaleWorlds.ModuleManager`.
- [DependedModule](../DependedModule/) — `TaleWorlds.ModuleManager`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/modulemanager/](../) — the other types in this bucket.
