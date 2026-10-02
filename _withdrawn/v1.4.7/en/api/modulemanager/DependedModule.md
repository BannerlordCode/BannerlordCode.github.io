---
title: "DependedModule"
description: "DependedModule — struct in TaleWorlds.ModuleManager. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# DependedModule

**Namespace:** `TaleWorlds.ModuleManager`  
**Module:** `TaleWorlds.ModuleManager`  
**Type:** `public struct DependedModule`  
**Source:** `TaleWorlds.ModuleManager/DependedModule.cs`

## Overview

`DependedModule` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DependedModule`.
- **Instance members** (4): `ModuleId`, `Version`, `IsOptional`, `UpdateVersionChangeSet`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsOptional` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ModuleId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateVersionChangeSet` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Version` | property | Instance entry point `ApplicationVersion` property. Read it for current state; a declared setter writes that state in place. |
| `DependedModule` | ctor | Instance entry point. Takes 3 arguments: `string moduleId`, `ApplicationVersion version`, `bool isOptional`. Returns ``. |

- Constructed as `public DependedModule(string moduleId, ApplicationVersion version, bool isOptional = false)`.

## Usage Example

```csharp
var data = new DependedModule
{
    ModuleId = "",
    Version = default,
    IsOptional = false,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.ModuleManager/DependedModule.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/modulemanager/](../) — the other types in this bucket.
