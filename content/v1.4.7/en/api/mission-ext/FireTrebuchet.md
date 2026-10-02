---
title: "FireTrebuchet"
description: "FireTrebuchet — class in TaleWorlds.MountAndBlade.Objects.Siege. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# FireTrebuchet

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class FireTrebuchet : Trebuchet`  
**Base:** `Trebuchet`  
**Source:** `TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs`

## Overview

`FireTrebuchet` is a named type in the TaleWorlds.MountAndBlade.Objects.Siege namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends Trebuchet, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (2): `GetSiegeEngineType`, `ProcessTargetValue`.
- **Extension points** (2): `GetSiegeEngineType`, `ProcessTargetValue`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetSiegeEngineType` | method (override) | Overrides the base member. Takes no arguments. Returns `SiegeEngineType`. Read path: prefer it over reaching for the backing store. |
| `ProcessTargetValue` | method (override) | Overrides the base member. Takes 2 arguments: `float baseValue`, `TargetFlags flags`. Returns `float`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// FireTrebuchet exposes no public members in TaleWorlds.MountAndBlade.Objects.Siege.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
