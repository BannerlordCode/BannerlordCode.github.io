---
title: "StackArray"
description: "StackArray — class in TaleWorlds.Core. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# StackArray

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class StackArray`  
**Source:** `TaleWorlds.Core/StackArray.cs`

## Overview

`StackArray` is a named type in the TaleWorlds.Core namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (14): `StackArray3Float`, `StackArray5Float`, `StackArray3Int`, `StackArray4Int`, `StackArray2Bool`, `StackArray8Int`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `StackArray10FloatFloatTuple` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray2Bool` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray32Bool` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray3Bool` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray3Float` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray3Int` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray4Bool` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray4Int` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray5Bool` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray5Float` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray6Bool` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray7Bool` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray8Bool` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `StackArray8Int` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// StackArray is read through its properties:
//   StackArray3Float : struct
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Core/StackArray.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
