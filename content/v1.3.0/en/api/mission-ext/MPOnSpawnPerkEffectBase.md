---
title: "MPOnSpawnPerkEffectBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPOnSpawnPerkEffectBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPOnSpawnPerkEffectBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPOnSpawnPerkEffectBase : MPPerkEffectBase, IOnSpawnPerkEffect`
**Base:** `MPPerkEffectBase`
**File:** `TaleWorlds.MountAndBlade/MPOnSpawnPerkEffectBase.cs`

## Overview

`MPOnSpawnPerkEffectBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTroopCountMultiplier
`public virtual float GetTroopCountMultiplier()`

**Purpose:** Gets the current value of `troop count multiplier`.

### GetExtraTroopCount
`public virtual int GetExtraTroopCount()`

**Purpose:** Gets the current value of `extra troop count`.

### GetAlternativeEquipments
`public virtual List<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>> alternativeEquipments, bool getAll = false)`

**Purpose:** Gets the current value of `alternative equipments`.

### GetDrivenPropertyBonusOnSpawn
`public virtual float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**Purpose:** Gets the current value of `driven property bonus on spawn`.

### GetHitpoints
`public virtual float GetHitpoints(bool isPlayer)`

**Purpose:** Gets the current value of `hitpoints`.

## Usage Example

```csharp
var implementation = new CustomMPOnSpawnPerkEffectBase();
```

## See Also

- [Complete Class Catalog](../catalog)