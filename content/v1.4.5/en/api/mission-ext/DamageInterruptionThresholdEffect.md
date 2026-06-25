---
title: "DamageInterruptionThresholdEffect"
description: "Auto-generated class reference for DamageInterruptionThresholdEffect."
---
# DamageInterruptionThresholdEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DamageInterruptionThresholdEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/DamageInterruptionThresholdEffect.cs`

## Overview

`DamageInterruptionThresholdEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDamageInterruptionThreshold
`public override float GetDamageInterruptionThreshold()`

**Purpose:** Reads and returns the `damage interruption threshold` value held by the current object.

```csharp
// Obtain an instance of DamageInterruptionThresholdEffect from the subsystem API first
DamageInterruptionThresholdEffect damageInterruptionThresholdEffect = ...;
var result = damageInterruptionThresholdEffect.GetDamageInterruptionThreshold();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DamageInterruptionThresholdEffect damageInterruptionThresholdEffect = ...;
damageInterruptionThresholdEffect.GetDamageInterruptionThreshold();
```

## See Also

- [Area Index](../)