---
title: "PlatformPCSubModule"
description: "PlatformPCSubModule — class in TaleWorlds.MountAndBlade.Platform.PC. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# PlatformPCSubModule

**Namespace:** `TaleWorlds.MountAndBlade.Platform.PC`  
**Module:** `TaleWorlds.MountAndBlade.Platform.PC`  
**Type:** `public class PlatformPCSubModule : MBSubModuleBase`  
**Base:** `MBSubModuleBase`  
**Source:** `TaleWorlds.MountAndBlade.Platform.PC/PlatformPCSubModule.cs`

## Overview

`PlatformPCSubModule` is a named type in the TaleWorlds.MountAndBlade.Platform.PC namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MBSubModuleBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (1): `OnMissionBehaviorInitialize`.
- **Extension points** (1): `OnMissionBehaviorInitialize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnMissionBehaviorInitialize` | method (override) | Overrides the base member. Takes 1 argument: `Mission mission`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// PlatformPCSubModule exposes no public members in TaleWorlds.MountAndBlade.Platform.PC.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Platform.PC/PlatformPCSubModule.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
