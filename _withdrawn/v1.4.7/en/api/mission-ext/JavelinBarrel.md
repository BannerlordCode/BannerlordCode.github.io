---
title: "JavelinBarrel"
description: "JavelinBarrel — class in TaleWorlds.MountAndBlade.Objects.Usables. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# JavelinBarrel

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class JavelinBarrel : AmmoBarrelBase`  
**Base:** `AmmoBarrelBase`  
**Source:** `TaleWorlds.MountAndBlade/Objects/Usables/JavelinBarrel.cs`

## Overview

`JavelinBarrel` is a named type in the TaleWorlds.MountAndBlade.Objects.Usables namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends AmmoBarrelBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (3): `GetSoundEvent`, `GetRequiredWeaponClasses`, `GetDescriptionText`.
- **Extension points** (3): `GetSoundEvent`, `GetRequiredWeaponClasses`, `GetDescriptionText`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetDescriptionText` | method (override) | Overrides the base member. Takes 1 argument: `WeakGameEntity gameEntity`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetRequiredWeaponClasses` | method (override) | Overrides the base member. Takes no arguments. Returns `WeaponClass[]`. Read path: prefer it over reaching for the backing store. |
| `GetSoundEvent` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// JavelinBarrel exposes no public members in TaleWorlds.MountAndBlade.Objects.Usables.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Objects/Usables/JavelinBarrel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AmmoBarrelBase](../AmmoBarrelBase/) — `TaleWorlds.MountAndBlade.Objects.Usables`.

Section: [api/mission-ext/](../) — the other types in this bucket.
