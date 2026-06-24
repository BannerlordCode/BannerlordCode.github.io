<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DamageTakenEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DamageTakenEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DamageTakenEffect : MPCombatPerkEffect`
**Base:** `MPCombatPerkEffect`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/DamageTakenEffect.cs`

## Overview

`DamageTakenEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDamageTaken
`public override float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** Gets the current value of `damage taken`.

## Usage Example

```csharp
var value = new DamageTakenEffect();
value.GetDamageTaken(attackerWeapon, damageType);
```

## See Also

- [Complete Class Catalog](../catalog)