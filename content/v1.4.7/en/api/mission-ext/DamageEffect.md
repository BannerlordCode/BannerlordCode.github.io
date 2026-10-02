---
title: "DamageEffect"
description: "DamageEffect — class in TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects. 4 public members (1 static)."
---

<!-- v147-skeleton -->
# DamageEffect

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`  
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`  
**Type:** `public class DamageEffect : MPCombatPerkEffect`  
**Base:** `MPCombatPerkEffect`  
**Source:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/DamageEffect.cs`

## Overview

`DamageEffect` is a named type in the TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MPCombatPerkEffect, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DamageEffect`.
- **Static entry points** (1): `StringType`.
- **Instance members** (2): `Deserialize`, `GetDamage`.
- **Extension points** (2): `Deserialize`, `GetDamage`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetDamage` | method (override) | Overrides the base member. Takes 3 arguments: `WeaponComponentData attackerWeapon`, `DamageTypes damageType`, `bool isAlternativeAttack`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `Deserialize` | method (override) | Overrides the base member. Takes 1 argument: `XmlNode node`. |
| `StringType` | property (static) | Protected — for subclasses only `string` property. Read it for current state; a declared setter writes that state in place. |
| `DamageEffect` | ctor | Protected — for subclasses only. Takes no arguments. Returns ``. |

- Constructed as `protected DamageEffect()`.

## Usage Example

```csharp
var damageEffect = new DamageEffect();
damageEffect.Deserialize(node);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Effects/DamageEffect.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/mission-ext/](../) — the other types in this bucket.
