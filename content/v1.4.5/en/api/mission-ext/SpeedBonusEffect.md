---
title: "SpeedBonusEffect"
description: "Auto-generated class reference for SpeedBonusEffect."
---
# SpeedBonusEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpeedBonusEffect : MPCombatPerkEffect`
**Base:** `MPCombatPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/SpeedBonusEffect.cs`

## Overview

`SpeedBonusEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSpeedBonusEffectiveness
`public override float GetSpeedBonusEffectiveness(Agent attacker, WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** Reads and returns the speed bonus effectiveness value held by the this instance.

```csharp
// Obtain an instance of SpeedBonusEffect from the subsystem API first
SpeedBonusEffect speedBonusEffect = ...;
var result = speedBonusEffect.GetSpeedBonusEffectiveness(attacker, attackerWeapon, damageType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SpeedBonusEffect speedBonusEffect = ...;
speedBonusEffect.GetSpeedBonusEffectiveness(attacker, attackerWeapon, damageType);
```

## See Also

- [Area Index](../)