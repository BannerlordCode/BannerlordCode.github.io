---
title: "LinQuick"
description: "LinQuick — class in TaleWorlds.LinQuick. 2 public members (2 static)."
---

<!-- v147-skeleton -->
# LinQuick

**Namespace:** `TaleWorlds.LinQuick`  
**Module:** `TaleWorlds.LinQuick`  
**Type:** `public static class LinQuick`  
**Source:** `TaleWorlds.LinQuick/LinQuick.cs`

## Overview

`LinQuick` is a named type in the TaleWorlds.LinQuick namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `AverageQ`, `MaxQ`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AverageQ` | method (static) | Static entry point. Takes 1 argument: `this float[] source`. Returns `float`. |
| `MaxQ` | method (static) | Static entry point. Takes 1 argument: `this int[] source`. Returns `int`. |

## Usage Example

```csharp
// Static entry points on LinQuick:
LinQuick.AverageQ(theTarget);
LinQuick.MaxQ(theTarget);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.LinQuick/LinQuick.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Error](../Error/) — `TaleWorlds.LinQuick`.

Section: [api/core-extra/](../) — the other types in this bucket.
