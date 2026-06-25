---
title: "DamageEffect"
description: "Auto-generated class reference for DamageEffect."
---
# DamageEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DamageEffect : MPCombatPerkEffect`
**Base:** `MPCombatPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/DamageEffect.cs`

## Overview

`DamageEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDamage
`public override float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**Purpose:** Reads and returns the damage value held by the this instance.

```csharp
// Obtain an instance of DamageEffect from the subsystem API first
DamageEffect damageEffect = ...;
var result = damageEffect.GetDamage(attackerWeapon, damageType, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DamageEffect damageEffect = ...;
damageEffect.GetDamage(attackerWeapon, damageType, false);
```

## See Also

- [Area Index](../)