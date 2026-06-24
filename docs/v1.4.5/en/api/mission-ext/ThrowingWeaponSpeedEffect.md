<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ThrowingWeaponSpeedEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ThrowingWeaponSpeedEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ThrowingWeaponSpeedEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/ThrowingWeaponSpeedEffect.cs`

## Overview

`ThrowingWeaponSpeedEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetThrowingWeaponSpeed
`public override float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)`

**Purpose:** Gets the current value of `throwing weapon speed`.

## Usage Example

```csharp
var value = new ThrowingWeaponSpeedEffect();
value.GetThrowingWeaponSpeed(attackerWeapon);
```

## See Also

- [Complete Class Catalog](../catalog)