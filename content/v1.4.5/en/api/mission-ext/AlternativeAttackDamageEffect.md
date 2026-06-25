---
title: "AlternativeAttackDamageEffect"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AlternativeAttackDamageEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AlternativeAttackDamageEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AlternativeAttackDamageEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/AlternativeAttackDamageEffect.cs`

## Overview

`AlternativeAttackDamageEffect` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDamage
`public override float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**Purpose:** Gets the current value of `damage`.

## Usage Example

```csharp
var value = new AlternativeAttackDamageEffect();
value.GetDamage(attackerWeapon, damageType, false);
```

## See Also

- [Complete Class Catalog](../catalog)