---
title: "BoolBasicTypeSerializer"
description: "BoolBasicTypeSerializer — class in TaleWorlds.SaveSystem.Definition. No public members of its own."
---

<!-- v147-skeleton -->
# BoolBasicTypeSerializer

**Namespace:** `TaleWorlds.SaveSystem.Definition`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `internal class BoolBasicTypeSerializer : IBasicTypeSerializer`  
**Base:** `IBasicTypeSerializer`  
**Source:** `TaleWorlds.SaveSystem/Definition/BoolBasicTypeSerializer.cs`

## Overview

`BoolBasicTypeSerializer` is an internal class in TaleWorlds.SaveSystem.Definition. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`BoolBasicTypeSerializer` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends IBasicTypeSerializer, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on BoolBasicTypeSerializer itself in `TaleWorlds.SaveSystem.Definition`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// BoolBasicTypeSerializer is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
// It exposes no public members.
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.SaveSystem/Definition/BoolBasicTypeSerializer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/save-system/](../) — the other types in this bucket.
