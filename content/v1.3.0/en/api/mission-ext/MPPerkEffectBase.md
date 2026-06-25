---
title: "MPPerkEffectBase"
description: "Auto-generated class reference for MPPerkEffectBase."
---
# MPPerkEffectBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkEffectBase`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MPPerkEffectBase.cs`

## Overview

`MPPerkEffectBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTickRequired` | `public virtual bool IsTickRequired { get; set; }` |
| `IsDisabledInWarmup` | `public bool IsDisabledInWarmup { get; set; }` |

## Key Methods

### OnUpdate
`public virtual void OnUpdate(Agent agent, bool newState)`

**Purpose:** **Purpose:** Invoked when the update event is raised.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
mPPerkEffectBase.OnUpdate(agent, false);
```

### OnTick
`public virtual void OnTick(MissionPeer peer, int tickCount)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
mPPerkEffectBase.OnTick(peer, 0);
```

### OnTick
`public virtual void OnTick(Agent agent, int tickCount)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
mPPerkEffectBase.OnTick(agent, 0);
```

### GetDamage
`public virtual float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**Purpose:** **Purpose:** Reads and returns the damage value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetDamage(attackerWeapon, damageType, false);
```

### GetMountDamage
`public virtual float GetMountDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**Purpose:** **Purpose:** Reads and returns the mount damage value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetMountDamage(attackerWeapon, damageType, false);
```

### GetDamageTaken
`public virtual float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** **Purpose:** Reads and returns the damage taken value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetDamageTaken(attackerWeapon, damageType);
```

### GetMountDamageTaken
`public virtual float GetMountDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** **Purpose:** Reads and returns the mount damage taken value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetMountDamageTaken(attackerWeapon, damageType);
```

### GetSpeedBonusEffectiveness
`public virtual float GetSpeedBonusEffectiveness(Agent attacker, WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** **Purpose:** Reads and returns the speed bonus effectiveness value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetSpeedBonusEffectiveness(attacker, attackerWeapon, damageType);
```

### GetShieldDamage
`public virtual float GetShieldDamage(bool isCorrectSideBlock)`

**Purpose:** **Purpose:** Reads and returns the shield damage value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetShieldDamage(false);
```

### GetShieldDamageTaken
`public virtual float GetShieldDamageTaken(bool isCorrectSideBlock)`

**Purpose:** **Purpose:** Reads and returns the shield damage taken value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetShieldDamageTaken(false);
```

### GetRangedAccuracy
`public virtual float GetRangedAccuracy()`

**Purpose:** **Purpose:** Reads and returns the ranged accuracy value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetRangedAccuracy();
```

### GetThrowingWeaponSpeed
`public virtual float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)`

**Purpose:** **Purpose:** Reads and returns the throwing weapon speed value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetThrowingWeaponSpeed(attackerWeapon);
```

### GetDamageInterruptionThreshold
`public virtual float GetDamageInterruptionThreshold()`

**Purpose:** **Purpose:** Reads and returns the damage interruption threshold value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetDamageInterruptionThreshold();
```

### GetMountManeuver
`public virtual float GetMountManeuver()`

**Purpose:** **Purpose:** Reads and returns the mount maneuver value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetMountManeuver();
```

### GetMountSpeed
`public virtual float GetMountSpeed()`

**Purpose:** **Purpose:** Reads and returns the mount speed value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetMountSpeed();
```

### GetRangedHeadShotDamage
`public virtual float GetRangedHeadShotDamage()`

**Purpose:** **Purpose:** Reads and returns the ranged head shot damage value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetRangedHeadShotDamage();
```

### GetGoldOnKill
`public virtual int GetGoldOnKill(float attackerValue, float victimValue)`

**Purpose:** **Purpose:** Reads and returns the gold on kill value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetGoldOnKill(0, 0);
```

### GetGoldOnAssist
`public virtual int GetGoldOnAssist()`

**Purpose:** **Purpose:** Reads and returns the gold on assist value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetGoldOnAssist();
```

### GetRewardedGoldOnAssist
`public virtual int GetRewardedGoldOnAssist()`

**Purpose:** **Purpose:** Reads and returns the rewarded gold on assist value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetRewardedGoldOnAssist();
```

### GetIsTeamRewardedOnDeath
`public virtual bool GetIsTeamRewardedOnDeath()`

**Purpose:** **Purpose:** Reads and returns the is team rewarded on death value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetIsTeamRewardedOnDeath();
```

### CalculateRewardedGoldOnDeath
`public virtual void CalculateRewardedGoldOnDeath(Agent agent, List<ValueTuple<MissionPeer, int>> teamMembers)`

**Purpose:** **Purpose:** Calculates the current value or result of rewarded gold on death.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
mPPerkEffectBase.CalculateRewardedGoldOnDeath(agent, list<ValueTuple<MissionPeer, 0);
```

### GetDrivenPropertyBonus
`public virtual float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)`

**Purpose:** **Purpose:** Reads and returns the driven property bonus value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetDrivenPropertyBonus(drivenProperty, 0);
```

### GetEncumbrance
`public virtual float GetEncumbrance(bool isOnBody)`

**Purpose:** **Purpose:** Reads and returns the encumbrance value held by the this instance.

```csharp
// Obtain an instance of MPPerkEffectBase from the subsystem API first
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetEncumbrance(false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MPPerkEffectBase instance = ...;
```

## See Also

- [Area Index](../)