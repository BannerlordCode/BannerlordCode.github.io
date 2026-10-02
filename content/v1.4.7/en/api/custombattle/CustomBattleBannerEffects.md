---
title: "CustomBattleBannerEffects"
description: "CustomBattleBannerEffects — class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattleObjects. 12 public members (11 static)."
---

<!-- v147-skeleton -->
# CustomBattleBannerEffects

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattleObjects`  
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Type:** `public class CustomBattleBannerEffects`  
**Source:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleObjects/CustomBattleBannerEffects.cs`

## Overview

`CustomBattleBannerEffects` is a named type in the TaleWorlds.MountAndBlade.CustomBattle.CustomBattleObjects namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CustomBattleBannerEffects`.
- **Static entry points** (11): `IncreasedMeleeDamage`, `IncreasedMeleeDamageAgainstMountedTroops`, `IncreasedRangedDamage`, `IncreasedChargeDamage`, `DecreasedRangedWeaponAccuracy`, `DecreasedMoraleShock`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DecreasedMeleeAttackDamage` | property (static) | Static entry point `BannerEffect` property. Read it for current state; a declared setter writes that state in place. |
| `DecreasedMoraleShock` | property (static) | Static entry point `BannerEffect` property. Read it for current state; a declared setter writes that state in place. |
| `DecreasedRangedAttackDamage` | property (static) | Static entry point `BannerEffect` property. Read it for current state; a declared setter writes that state in place. |
| `DecreasedRangedWeaponAccuracy` | property (static) | Static entry point `BannerEffect` property. Read it for current state; a declared setter writes that state in place. |
| `DecreasedShieldDamage` | property (static) | Static entry point `BannerEffect` property. Read it for current state; a declared setter writes that state in place. |
| `IncreasedChargeDamage` | property (static) | Static entry point `BannerEffect` property. Read it for current state; a declared setter writes that state in place. |
| `IncreasedMeleeDamage` | property (static) | Static entry point `BannerEffect` property. Read it for current state; a declared setter writes that state in place. |
| `IncreasedMeleeDamageAgainstMountedTroops` | property (static) | Static entry point `BannerEffect` property. Read it for current state; a declared setter writes that state in place. |
| `IncreasedMountMovementSpeed` | property (static) | Static entry point `BannerEffect` property. Read it for current state; a declared setter writes that state in place. |
| `IncreasedRangedDamage` | property (static) | Static entry point `BannerEffect` property. Read it for current state; a declared setter writes that state in place. |
| `IncreasedTroopMovementSpeed` | property (static) | Static entry point `BannerEffect` property. Read it for current state; a declared setter writes that state in place. |
| `CustomBattleBannerEffects` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public CustomBattleBannerEffects()`.

## Usage Example

```csharp
var customBattleBannerEffects = new CustomBattleBannerEffects();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleObjects/CustomBattleBannerEffects.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/custombattle/](../) — the other types in this bucket.
