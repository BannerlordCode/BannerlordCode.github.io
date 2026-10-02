---
title: "AccessObjectResult"
description: "AccessObjectResult — class in TaleWorlds.Diamond. 5 public members (2 static)."
---

<!-- v147-skeleton -->
# AccessObjectResult

**Namespace:** `TaleWorlds.Diamond`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `public class AccessObjectResult`  
**Source:** `TaleWorlds.Diamond/AccessObjectResult.cs`

## Overview

`AccessObjectResult` is a named type in the TaleWorlds.Diamond namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `CreateSuccess`, `CreateFailed`.
- **Instance members** (3): `AccessObject`, `Success`, `FailReason`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateFailed` | method (static) | Static entry point. Takes 1 argument: `TextObject failReason`. Returns `AccessObjectResult`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateSuccess` | method (static) | Static entry point. Takes 1 argument: `AccessObject accessObject`. Returns `AccessObjectResult`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `AccessObject` | property | Instance entry point `AccessObject` property. Read it for current state; a declared setter writes that state in place. |
| `FailReason` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `Success` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Static entry points on AccessObjectResult:
AccessObjectResult.CreateSuccess(accessObject);
AccessObjectResult.CreateFailed(failReason);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Diamond/AccessObjectResult.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AccessObject](../AccessObject/) — `TaleWorlds.Diamond`.

Section: [api/engine/](../) — the other types in this bucket.
