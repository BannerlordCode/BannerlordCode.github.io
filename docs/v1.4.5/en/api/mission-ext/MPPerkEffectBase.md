<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPerkEffectBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPPerkEffectBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkEffectBase`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerkEffectBase.cs`

## Overview

`MPPerkEffectBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDisabledInWarmup` | `public bool IsDisabledInWarmup { get; set; }` |

## Key Methods

### OnUpdate
`public virtual void OnUpdate(Agent agent, bool newState)`

**Purpose:** Called when the `update` event is raised.

### OnTick
`public virtual void OnTick(MissionPeer peer, int tickCount)`

**Purpose:** Called when the `tick` event is raised.

### OnTick
`public virtual void OnTick(Agent agent, int tickCount)`

**Purpose:** Called when the `tick` event is raised.

### GetDamage
`public virtual float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**Purpose:** Gets the current value of `damage`.

### GetMountDamage
`public virtual float GetMountDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**Purpose:** Gets the current value of `mount damage`.

### GetDamageTaken
`public virtual float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** Gets the current value of `damage taken`.

### GetMountDamageTaken
`public virtual float GetMountDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** Gets the current value of `mount damage taken`.

### GetSpeedBonusEffectiveness
`public virtual float GetSpeedBonusEffectiveness(Agent attacker, WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** Gets the current value of `speed bonus effectiveness`.

### GetShieldDamage
`public virtual float GetShieldDamage(bool isCorrectSideBlock)`

**Purpose:** Gets the current value of `shield damage`.

### GetShieldDamageTaken
`public virtual float GetShieldDamageTaken(bool isCorrectSideBlock)`

**Purpose:** Gets the current value of `shield damage taken`.

### GetRangedAccuracy
`public virtual float GetRangedAccuracy()`

**Purpose:** Gets the current value of `ranged accuracy`.

### GetThrowingWeaponSpeed
`public virtual float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)`

**Purpose:** Gets the current value of `throwing weapon speed`.

### GetDamageInterruptionThreshold
`public virtual float GetDamageInterruptionThreshold()`

**Purpose:** Gets the current value of `damage interruption threshold`.

### GetMountManeuver
`public virtual float GetMountManeuver()`

**Purpose:** Gets the current value of `mount maneuver`.

### GetMountSpeed
`public virtual float GetMountSpeed()`

**Purpose:** Gets the current value of `mount speed`.

### GetRangedHeadShotDamage
`public virtual float GetRangedHeadShotDamage()`

**Purpose:** Gets the current value of `ranged head shot damage`.

### GetGoldOnKill
`public virtual int GetGoldOnKill(float attackerValue, float victimValue)`

**Purpose:** Gets the current value of `gold on kill`.

### GetGoldOnAssist
`public virtual int GetGoldOnAssist()`

**Purpose:** Gets the current value of `gold on assist`.

### GetRewardedGoldOnAssist
`public virtual int GetRewardedGoldOnAssist()`

**Purpose:** Gets the current value of `rewarded gold on assist`.

### GetIsTeamRewardedOnDeath
`public virtual bool GetIsTeamRewardedOnDeath()`

**Purpose:** Gets the current value of `is team rewarded on death`.

### CalculateRewardedGoldOnDeath
`public virtual void CalculateRewardedGoldOnDeath(Agent agent, List<(MissionPeer, int)> teamMembers)`

**Purpose:** Handles logic related to `calculate rewarded gold on death`.

### GetDrivenPropertyBonus
`public virtual float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)`

**Purpose:** Gets the current value of `driven property bonus`.

### GetEncumbrance
`public virtual float GetEncumbrance(bool isOnBody)`

**Purpose:** Gets the current value of `encumbrance`.

## Usage Example

```csharp
var implementation = new CustomMPPerkEffectBase();
```

## See Also

- [Complete Class Catalog](../catalog)