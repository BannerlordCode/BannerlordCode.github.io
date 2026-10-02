---
title: "DLLCheckDataCollection"
description: "DLLCheckDataCollection — class in TaleWorlds.MountAndBlade.Launcher.Library.UserDatas. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# DLLCheckDataCollection

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`  
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Type:** `public class DLLCheckDataCollection`  
**Source:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/DLLCheckDataCollection.cs`

## Overview

`DLLCheckDataCollection` is a named type in the TaleWorlds.MountAndBlade.Launcher.Library.UserDatas namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DLLCheckDataCollection`.
- **Instance members** (1): `DLLData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DLLData` | property | Instance entry point `List<DLLCheckData>` property. Read it for current state; a declared setter writes that state in place. |
| `DLLCheckDataCollection` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DLLCheckDataCollection()`.

## Usage Example

```csharp
var dLLCheckDataCollection = new DLLCheckDataCollection();
// Read current state through dLLCheckDataCollection.DLLData.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/DLLCheckDataCollection.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DLLCheckData](../DLLCheckData/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.

Section: [api/mission-ext/](../) — the other types in this bucket.
