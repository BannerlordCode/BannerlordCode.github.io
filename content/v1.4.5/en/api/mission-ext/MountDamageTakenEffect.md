---
title: "MountDamageTakenEffect"
description: "Auto-generated class reference for MountDamageTakenEffect."
---
# MountDamageTakenEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MountDamageTakenEffect : MPCombatPerkEffect`
**Base:** `MPCombatPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/MountDamageTakenEffect.cs`

## Overview

`MountDamageTakenEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetMountDamageTaken
`public override float GetMountDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** Reads and returns the mount damage taken value held by the this instance.

```csharp
// Obtain an instance of MountDamageTakenEffect from the subsystem API first
MountDamageTakenEffect mountDamageTakenEffect = ...;
var result = mountDamageTakenEffect.GetMountDamageTaken(attackerWeapon, damageType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MountDamageTakenEffect mountDamageTakenEffect = ...;
mountDamageTakenEffect.GetMountDamageTaken(attackerWeapon, damageType);
```

## See Also

- [Area Index](../)