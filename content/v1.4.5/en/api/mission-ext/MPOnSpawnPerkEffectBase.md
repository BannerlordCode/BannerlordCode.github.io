---
title: "MPOnSpawnPerkEffectBase"
description: "Auto-generated class reference for MPOnSpawnPerkEffectBase."
---
# MPOnSpawnPerkEffectBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPOnSpawnPerkEffectBase : MPPerkEffectBase, IOnSpawnPerkEffect`
**Base:** `MPPerkEffectBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPOnSpawnPerkEffectBase.cs`

## Overview

`MPOnSpawnPerkEffectBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTroopCountMultiplier
`public virtual float GetTroopCountMultiplier()`

**Purpose:** **Purpose:** Reads and returns the troop count multiplier value held by the this instance.

```csharp
// Obtain an instance of MPOnSpawnPerkEffectBase from the subsystem API first
MPOnSpawnPerkEffectBase mPOnSpawnPerkEffectBase = ...;
var result = mPOnSpawnPerkEffectBase.GetTroopCountMultiplier();
```

### GetExtraTroopCount
`public virtual int GetExtraTroopCount()`

**Purpose:** **Purpose:** Reads and returns the extra troop count value held by the this instance.

```csharp
// Obtain an instance of MPOnSpawnPerkEffectBase from the subsystem API first
MPOnSpawnPerkEffectBase mPOnSpawnPerkEffectBase = ...;
var result = mPOnSpawnPerkEffectBase.GetExtraTroopCount();
```

### GetDrivenPropertyBonusOnSpawn
`public virtual float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**Purpose:** **Purpose:** Reads and returns the driven property bonus on spawn value held by the this instance.

```csharp
// Obtain an instance of MPOnSpawnPerkEffectBase from the subsystem API first
MPOnSpawnPerkEffectBase mPOnSpawnPerkEffectBase = ...;
var result = mPOnSpawnPerkEffectBase.GetDrivenPropertyBonusOnSpawn(false, drivenProperty, 0);
```

### GetHitpoints
`public virtual float GetHitpoints(bool isPlayer)`

**Purpose:** **Purpose:** Reads and returns the hitpoints value held by the this instance.

```csharp
// Obtain an instance of MPOnSpawnPerkEffectBase from the subsystem API first
MPOnSpawnPerkEffectBase mPOnSpawnPerkEffectBase = ...;
var result = mPOnSpawnPerkEffectBase.GetHitpoints(false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MPOnSpawnPerkEffectBase instance = ...;
```

## See Also

- [Area Index](../)