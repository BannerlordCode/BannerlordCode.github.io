---
title: "RangedHeadShotDamageEffect"
description: "Auto-generated class reference for RangedHeadShotDamageEffect."
---
# RangedHeadShotDamageEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RangedHeadShotDamageEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/RangedHeadShotDamageEffect.cs`

## Overview

`RangedHeadShotDamageEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetRangedHeadShotDamage
`public override float GetRangedHeadShotDamage()`

**Purpose:** Reads and returns the ranged head shot damage value held by the this instance.

```csharp
// Obtain an instance of RangedHeadShotDamageEffect from the subsystem API first
RangedHeadShotDamageEffect rangedHeadShotDamageEffect = ...;
var result = rangedHeadShotDamageEffect.GetRangedHeadShotDamage();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RangedHeadShotDamageEffect rangedHeadShotDamageEffect = ...;
rangedHeadShotDamageEffect.GetRangedHeadShotDamage();
```

## See Also

- [Area Index](../)