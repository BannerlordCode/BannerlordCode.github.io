---
title: "DamageTakenEffect"
description: "Auto-generated class reference for DamageTakenEffect."
---
# DamageTakenEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DamageTakenEffect : MPCombatPerkEffect`
**Base:** `MPCombatPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/DamageTakenEffect.cs`

## Overview

`DamageTakenEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDamageTaken
`public override float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** Reads and returns the damage taken value held by the this instance.

```csharp
// Obtain an instance of DamageTakenEffect from the subsystem API first
DamageTakenEffect damageTakenEffect = ...;
var result = damageTakenEffect.GetDamageTaken(attackerWeapon, damageType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DamageTakenEffect damageTakenEffect = ...;
damageTakenEffect.GetDamageTaken(attackerWeapon, damageType);
```

## See Also

- [Area Index](../)