---
title: "HitpointsEffect"
description: "Auto-generated class reference for HitpointsEffect."
---
# HitpointsEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HitpointsEffect : MPOnSpawnPerkEffect`
**Base:** `MPOnSpawnPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/HitpointsEffect.cs`

## Overview

`HitpointsEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetHitpoints
`public override float GetHitpoints(bool isPlayer)`

**Purpose:** **Purpose:** Reads and returns the hitpoints value held by the this instance.

```csharp
// Obtain an instance of HitpointsEffect from the subsystem API first
HitpointsEffect hitpointsEffect = ...;
var result = hitpointsEffect.GetHitpoints(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HitpointsEffect hitpointsEffect = ...;
hitpointsEffect.GetHitpoints(false);
```

## See Also

- [Area Index](../)