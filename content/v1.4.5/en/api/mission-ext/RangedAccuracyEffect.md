---
title: "RangedAccuracyEffect"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RangedAccuracyEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RangedAccuracyEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RangedAccuracyEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/RangedAccuracyEffect.cs`

## Overview

`RangedAccuracyEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUpdate
`public override void OnUpdate(Agent agent, bool newState)`

**Purpose:** Called when the `update` event is raised.

### GetRangedAccuracy
`public override float GetRangedAccuracy()`

**Purpose:** Gets the current value of `ranged accuracy`.

## Usage Example

```csharp
var value = new RangedAccuracyEffect();
value.OnUpdate(agent, false);
```

## See Also

- [Complete Class Catalog](../catalog)