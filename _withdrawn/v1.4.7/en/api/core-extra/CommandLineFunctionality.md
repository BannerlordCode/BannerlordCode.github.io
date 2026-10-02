---
title: "CommandLineFunctionality"
description: "CommandLineFunctionality — class in TaleWorlds.Library. 3 public members (3 static)."
---

<!-- v147-skeleton -->
# CommandLineFunctionality

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public static class CommandLineFunctionality`  
**Source:** `TaleWorlds.Library/CommandLineFunctionality.cs`

## Overview

`CommandLineFunctionality` is a named type in the TaleWorlds.Library namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (3): `CollectCommandLineFunctions`, `HasFunctionForCommand`, `CallFunction`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CallFunction` | method (static) | Static entry point. Takes 3 arguments: `string concatName`, `string concatArguments`, `out bool found`. Returns `string`. |
| `CollectCommandLineFunctions` | method (static) | Static entry point. Takes no arguments. Returns `List<string>`. |
| `HasFunctionForCommand` | method (static) | Static entry point. Takes 1 argument: `string command`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |

## Usage Example

```csharp
// Static entry points on CommandLineFunctionality:
CommandLineFunctionality.CollectCommandLineFunctions();
CommandLineFunctionality.HasFunctionForCommand(command);
CommandLineFunctionality.CallFunction(concatName, concatArguments, theTarget);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Library/CommandLineFunctionality.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
