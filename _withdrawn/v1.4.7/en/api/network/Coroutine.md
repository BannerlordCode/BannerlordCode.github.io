---
title: "Coroutine"
description: "Coroutine — class in TaleWorlds.Network. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# Coroutine

**Namespace:** `TaleWorlds.Network`  
**Module:** `TaleWorlds.Network`  
**Type:** `public class Coroutine`  
**Source:** `TaleWorlds.Network/Coroutine.cs`

## Overview

`Coroutine` is a named type in the TaleWorlds.Network namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (1): `IsStarted`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsStarted` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |

## Usage Example

```csharp
// Coroutine is read through its properties:
//   IsStarted : bool
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Network/Coroutine.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CoroutineDelegate](../CoroutineDelegate/) — `TaleWorlds.Network`.

Section: [api/network/](../) — the other types in this bucket.
