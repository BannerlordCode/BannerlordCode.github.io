---
title: "LoadCallbackInitializator"
description: "LoadCallbackInitializator — class in TaleWorlds.SaveSystem.Load. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# LoadCallbackInitializator

**Namespace:** `TaleWorlds.SaveSystem.Load`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `internal class LoadCallbackInitializator`  
**Source:** `TaleWorlds.SaveSystem/Load/LoadCallbackInitializator.cs`

## Overview

`LoadCallbackInitializator` is an internal class in TaleWorlds.SaveSystem.Load. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`LoadCallbackInitializator` is a named type in the TaleWorlds.SaveSystem.Load namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LoadCallbackInitializator`.
- **Instance members** (2): `InitializeObjects`, `AfterInitializeObjects`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterInitializeObjects` | method | Instance entry point. Takes no arguments. |
| `InitializeObjects` | method | Instance entry point. Takes no arguments. |
| `LoadCallbackInitializator` | ctor | Instance entry point. Takes 3 arguments: `LoadData loadData`, `ObjectHeaderLoadData[] objectHeaderLoadDatas`, `int objectCount`. Returns ``. |

- Constructed as `public LoadCallbackInitializator(LoadData loadData, ObjectHeaderLoadData[] objectHeaderLoadDatas, int objectCount)`.

## Usage Example

```csharp
// LoadCallbackInitializator is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   InitializeObjects()
//     void
//   AfterInitializeObjects()
//     void
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.SaveSystem/Load/LoadCallbackInitializator.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/save-system/](../) — the other types in this bucket.
