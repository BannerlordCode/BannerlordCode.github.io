---
title: "CreateItemTask"
description: "CreateItemTask — class in TaleWorlds.MountAndBlade.SteamWorkshop. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# CreateItemTask

**Namespace:** `TaleWorlds.MountAndBlade.SteamWorkshop`  
**Module:** `TaleWorlds.MountAndBlade.SteamWorkshop`  
**Type:** `public class CreateItemTask : ToolTask`  
**Base:** `ToolTask`  
**Source:** `TaleWorlds.MountAndBlade.SteamWorkshop/CreateItemTask.cs`

## Overview

`CreateItemTask` is a named type in the TaleWorlds.MountAndBlade.SteamWorkshop namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ToolTask, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (2): `LoadFrom`, `DoJob`.
- **Extension points** (2): `LoadFrom`, `DoJob`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DoJob` | method (override) | Overrides the base member. Takes no arguments. |
| `LoadFrom` | method (override) | Overrides the base member. Takes 1 argument: `XmlNode xmlNode`. |

## Usage Example

```csharp
// CreateItemTask exposes no public members in TaleWorlds.MountAndBlade.SteamWorkshop.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.SteamWorkshop/CreateItemTask.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ToolTask](../ToolTask/) — `TaleWorlds.MountAndBlade.SteamWorkshop`.
- [Program](../../core-extra/Program/) — `TaleWorlds.Starter.Library`.

Section: [api/mission-ext/](../) — the other types in this bucket.
