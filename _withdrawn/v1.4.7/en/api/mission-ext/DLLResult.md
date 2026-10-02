---
title: "DLLResult"
description: "DLLResult — class in TaleWorlds.MountAndBlade.Launcher.Library. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# DLLResult

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Type:** `public class DLLResult`  
**Source:** `TaleWorlds.MountAndBlade.Launcher.Library/DLLResult.cs`

## Overview

`DLLResult` is a named type in the TaleWorlds.MountAndBlade.Launcher.Library namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `DLLResult`, `DLLResult`.
- **Instance members** (3): `DLLName`, `IsSafe`, `Information`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DLLName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Information` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IsSafe` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DLLResult` | ctor | Instance entry point. Takes 3 arguments: `string dLLName`, `bool isSafe`, `string information`. Returns ``. |
| `DLLResult` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DLLResult(string dLLName, bool isSafe, string information)`.
- Constructed as `public DLLResult()`.

## Usage Example

```csharp
var dLLResult = new DLLResult(dLLName, isSafe, information);
// Read current state through dLLResult.DLLName.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade.Launcher.Library/DLLResult.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
