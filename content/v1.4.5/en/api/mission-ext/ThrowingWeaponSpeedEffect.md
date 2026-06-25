---
title: "ThrowingWeaponSpeedEffect"
description: "Auto-generated class reference for ThrowingWeaponSpeedEffect."
---
# ThrowingWeaponSpeedEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ThrowingWeaponSpeedEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/ThrowingWeaponSpeedEffect.cs`

## Overview

`ThrowingWeaponSpeedEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetThrowingWeaponSpeed
`public override float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)`

**Purpose:** Reads and returns the `throwing weapon speed` value held by the current object.

```csharp
// Obtain an instance of ThrowingWeaponSpeedEffect from the subsystem API first
ThrowingWeaponSpeedEffect throwingWeaponSpeedEffect = ...;
var result = throwingWeaponSpeedEffect.GetThrowingWeaponSpeed(attackerWeapon);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThrowingWeaponSpeedEffect throwingWeaponSpeedEffect = ...;
throwingWeaponSpeedEffect.GetThrowingWeaponSpeed(attackerWeapon);
```

## See Also

- [Area Index](../)