---
title: "FightAreaMarker"
description: "FightAreaMarker — class in TaleWorlds.MountAndBlade.Objects. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# FightAreaMarker

**Namespace:** `TaleWorlds.MountAndBlade.Objects`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class FightAreaMarker : AreaMarker`  
**Base:** `AreaMarker`  
**Source:** `TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs`

## Overview

`FightAreaMarker` is a named type in the TaleWorlds.MountAndBlade.Objects namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends AreaMarker, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (2): `GetAgentsInRange`, `SubAreaIndex`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetAgentsInRange` | method | Instance entry point. Takes 2 arguments: `Team team`, `bool humanOnly`. Returns `IEnumerable<Agent>`. Read path: prefer it over reaching for the backing store. |
| `SubAreaIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// FightAreaMarker is read through its properties:
//   SubAreaIndex : int
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AreaMarker](../AreaMarker/) — `TaleWorlds.MountAndBlade.Objects`.

Section: [api/mission-ext/](../) — the other types in this bucket.
