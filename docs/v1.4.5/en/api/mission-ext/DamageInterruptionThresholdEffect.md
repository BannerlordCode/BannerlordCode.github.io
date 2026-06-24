<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DamageInterruptionThresholdEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DamageInterruptionThresholdEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DamageInterruptionThresholdEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/DamageInterruptionThresholdEffect.cs`

## Overview

`DamageInterruptionThresholdEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDamageInterruptionThreshold
`public override float GetDamageInterruptionThreshold()`

**Purpose:** Gets the current value of `damage interruption threshold`.

## Usage Example

```csharp
var value = new DamageInterruptionThresholdEffect();
value.GetDamageInterruptionThreshold();
```

## See Also

- [Complete Class Catalog](../catalog)