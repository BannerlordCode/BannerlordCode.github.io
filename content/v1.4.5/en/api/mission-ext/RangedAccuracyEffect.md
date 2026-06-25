---
title: "RangedAccuracyEffect"
description: "Auto-generated class reference for RangedAccuracyEffect."
---
# RangedAccuracyEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RangedAccuracyEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/RangedAccuracyEffect.cs`

## Overview

`RangedAccuracyEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUpdate
`public override void OnUpdate(Agent agent, bool newState)`

**Purpose:** Invoked when the update event is raised.

```csharp
// Obtain an instance of RangedAccuracyEffect from the subsystem API first
RangedAccuracyEffect rangedAccuracyEffect = ...;
rangedAccuracyEffect.OnUpdate(agent, false);
```

### GetRangedAccuracy
`public override float GetRangedAccuracy()`

**Purpose:** Reads and returns the ranged accuracy value held by the this instance.

```csharp
// Obtain an instance of RangedAccuracyEffect from the subsystem API first
RangedAccuracyEffect rangedAccuracyEffect = ...;
var result = rangedAccuracyEffect.GetRangedAccuracy();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RangedAccuracyEffect rangedAccuracyEffect = ...;
rangedAccuracyEffect.OnUpdate(agent, false);
```

## See Also

- [Area Index](../)