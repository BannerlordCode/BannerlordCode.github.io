<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HitpointsEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HitpointsEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HitpointsEffect : MPOnSpawnPerkEffect`
**Base:** `MPOnSpawnPerkEffect`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/HitpointsEffect.cs`

## Overview

`HitpointsEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetHitpoints
`public override float GetHitpoints(bool isPlayer)`

**Purpose:** Gets the current value of `hitpoints`.

## Usage Example

```csharp
var value = new HitpointsEffect();
value.GetHitpoints(false);
```

## See Also

- [Complete Class Catalog](../catalog)