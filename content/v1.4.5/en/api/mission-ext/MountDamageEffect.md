---
title: "MountDamageEffect"
description: "Auto-generated class reference for MountDamageEffect."
---
# MountDamageEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MountDamageEffect : MPCombatPerkEffect`
**Base:** `MPCombatPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/MountDamageEffect.cs`

## Overview

`MountDamageEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetMountDamage
`public override float GetMountDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**Purpose:** Reads and returns the `mount damage` value held by the current object.

```csharp
// Obtain an instance of MountDamageEffect from the subsystem API first
MountDamageEffect mountDamageEffect = ...;
var result = mountDamageEffect.GetMountDamage(attackerWeapon, damageType, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MountDamageEffect mountDamageEffect = ...;
mountDamageEffect.GetMountDamage(attackerWeapon, damageType, false);
```

## See Also

- [Area Index](../)