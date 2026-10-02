---
title: "DiamondClientApplicationObject"
description: "DiamondClientApplicationObject — class in TaleWorlds.Diamond.ClientApplication. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# DiamondClientApplicationObject

**Namespace:** `TaleWorlds.Diamond.ClientApplication`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `public abstract class DiamondClientApplicationObject`  
**Source:** `TaleWorlds.Diamond/ClientApplication/DiamondClientApplicationObject.cs`

## Overview

`DiamondClientApplicationObject` is a named type in the TaleWorlds.Diamond.ClientApplication namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DiamondClientApplicationObject`.
- **Instance members** (2): `Application`, `ApplicationVersion`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Application` | property | Instance entry point `DiamondClientApplication` property. Read it for current state; a declared setter writes that state in place. |
| `ApplicationVersion` | property | Instance entry point `ApplicationVersion` property. Read it for current state; a declared setter writes that state in place. |
| `DiamondClientApplicationObject` | ctor | Protected — for subclasses only. Takes 1 argument: `DiamondClientApplication application`. Returns ``. |

- Constructed as `protected DiamondClientApplicationObject(DiamondClientApplication application)`.

## Usage Example

```csharp
// DiamondClientApplicationObject is read through its properties:
//   Application : DiamondClientApplication
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Diamond/ClientApplication/DiamondClientApplicationObject.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DiamondClientApplication](../DiamondClientApplication/) — `TaleWorlds.Diamond.ClientApplication`.

Section: [api/engine/](../) — the other types in this bucket.
