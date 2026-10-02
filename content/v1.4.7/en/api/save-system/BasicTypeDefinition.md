---
title: "BasicTypeDefinition"
description: "BasicTypeDefinition — class in TaleWorlds.SaveSystem.Definition. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# BasicTypeDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `internal class BasicTypeDefinition : TypeDefinitionBase`  
**Base:** `TypeDefinitionBase`  
**Source:** `TaleWorlds.SaveSystem/Definition/BasicTypeDefinition.cs`

## Overview

`BasicTypeDefinition` is an internal class in TaleWorlds.SaveSystem.Definition. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`BasicTypeDefinition` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends TypeDefinitionBase, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BasicTypeDefinition`.
- **Instance members** (1): `Serializer`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Serializer` | property | Instance entry point `IBasicTypeSerializer` property. Read it for current state; a declared setter writes that state in place. |
| `BasicTypeDefinition` | ctor | Instance entry point. Takes 3 arguments: `Type type`, `int saveId`, `IBasicTypeSerializer serializer`. Returns ``. |

- Constructed as `public BasicTypeDefinition(Type type, int saveId, IBasicTypeSerializer serializer)`.

## Usage Example

```csharp
// BasicTypeDefinition is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   Serializer
//     IBasicTypeSerializer
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.SaveSystem/Definition/BasicTypeDefinition.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/save-system/](../) — the other types in this bucket.
