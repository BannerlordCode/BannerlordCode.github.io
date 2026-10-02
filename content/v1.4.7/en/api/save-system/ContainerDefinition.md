---
title: "ContainerDefinition"
description: "ContainerDefinition — class in TaleWorlds.SaveSystem.Definition. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# ContainerDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class ContainerDefinition : TypeDefinitionBase`  
**Base:** `TypeDefinitionBase`  
**Source:** `TaleWorlds.SaveSystem/Definition/ContainerDefinition.cs`

## Overview

`ContainerDefinition` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends TypeDefinitionBase, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ContainerDefinition`.
- **Instance members** (4): `DefinedAssembly`, `CollectObjectsMethod`, `HasNoChildObject`, `InitializeForAutoGeneration`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CollectObjectsMethod` | property | Instance entry point `CollectObjectsDelegate` property. Read it for current state; a declared setter writes that state in place. |
| `DefinedAssembly` | property | Instance entry point `Assembly` property. Read it for current state; a declared setter writes that state in place. |
| `HasNoChildObject` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `InitializeForAutoGeneration` | method | Instance entry point. Takes 2 arguments: `CollectObjectsDelegate collectObjectsDelegate`, `bool hasNoChildObject`. |
| `ContainerDefinition` | ctor | Instance entry point. Takes 3 arguments: `Type type`, `ContainerSaveId saveId`, `Assembly definedAssembly`. Returns ``. |

- Constructed as `public ContainerDefinition(Type type, ContainerSaveId saveId, Assembly definedAssembly)`.

## Usage Example

```csharp
var data = new ContainerDefinition
{
    DefinedAssembly = default,
    CollectObjectsMethod = default,
    HasNoChildObject = false,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.SaveSystem/Definition/ContainerDefinition.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CollectObjectsDelegate](../CollectObjectsDelegate/) — `TaleWorlds.SaveSystem.Definition`.

Section: [api/save-system/](../) — the other types in this bucket.
