---
title: "MPPerkObject"
description: "Auto-generated class reference for MPPerkObject."
---
# MPPerkObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkObject : IReadOnlyPerkObject`
**Base:** `IReadOnlyPerkObject`
**File:** `TaleWorlds.MountAndBlade/MPPerkObject.cs`

## Overview

`MPPerkObject` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `HasBannerBearer` | `public bool HasBannerBearer { get; }` |
| `GameModes` | `public List<string> GameModes { get; }` |
| `PerkListIndex` | `public int PerkListIndex { get; }` |
| `IconId` | `public string IconId { get; }` |
| `HeroIdleAnimOverride` | `public string HeroIdleAnimOverride { get; }` |
| `HeroMountIdleAnimOverride` | `public string HeroMountIdleAnimOverride { get; }` |
| `TroopIdleAnimOverride` | `public string TroopIdleAnimOverride { get; }` |
| `TroopMountIdleAnimOverride` | `public string TroopMountIdleAnimOverride { get; }` |
| `IsWarmup` | `public bool IsWarmup { get; }` |
| `IsWarmup` | `public bool IsWarmup { get; }` |
| `IsWarmup` | `public bool IsWarmup { get; }` |

## Key Methods

### Clone
`public MPPerkObject Clone(MissionPeer peer)`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.Clone(peer);
```

### Reset
`public void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
mPPerkObject.Reset();
```

### GetExtraTroopCount
`public int GetExtraTroopCount(bool isWarmup)`

**Purpose:** Reads and returns the extra troop count value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetExtraTroopCount(false);
```

### GetAlternativeEquipments
`public List<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isWarmup, bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>> alternativeEquipments, bool getAllEquipments = false)`

**Purpose:** Reads and returns the alternative equipments value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetAlternativeEquipments(false, false, list<ValueTuple<EquipmentIndex, alternativeEquipments, false);
```

### GetDrivenPropertyBonusOnSpawn
`public float GetDrivenPropertyBonusOnSpawn(bool isWarmup, bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**Purpose:** Reads and returns the driven property bonus on spawn value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDrivenPropertyBonusOnSpawn(false, false, drivenProperty, 0);
```

### GetHitpoints
`public float GetHitpoints(bool isWarmup, bool isPlayer)`

**Purpose:** Reads and returns the hitpoints value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetHitpoints(false, false);
```

### GetTroopCount
`public static int GetTroopCount(MultiplayerClassDivisions.MPHeroClass heroClass, int botsPerFormation, MPPerkObject.MPOnSpawnPerkHandler onSpawnPerkHandler)`

**Purpose:** Reads and returns the troop count value held by the this instance.

```csharp
// Static call; no instance required
MPPerkObject.GetTroopCount(heroClass, 0, onSpawnPerkHandler);
```

### Deserialize
`public static IReadOnlyPerkObject Deserialize(XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Static call; no instance required
MPPerkObject.Deserialize(node);
```

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(Agent agent)`

**Purpose:** Reads and returns the perk handler value held by the this instance.

```csharp
// Static call; no instance required
MPPerkObject.GetPerkHandler(agent);
```

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(MissionPeer peer)`

**Purpose:** Reads and returns the perk handler value held by the this instance.

```csharp
// Static call; no instance required
MPPerkObject.GetPerkHandler(peer);
```

### GetCombatPerkHandler
`public static MPPerkObject.MPCombatPerkHandler GetCombatPerkHandler(Agent attacker, Agent defender)`

**Purpose:** Reads and returns the combat perk handler value held by the this instance.

```csharp
// Static call; no instance required
MPPerkObject.GetCombatPerkHandler(attacker, defender);
```

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(MissionPeer peer)`

**Purpose:** Reads and returns the on spawn perk handler value held by the this instance.

```csharp
// Static call; no instance required
MPPerkObject.GetOnSpawnPerkHandler(peer);
```

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(IEnumerable<IReadOnlyPerkObject> perks)`

**Purpose:** Reads and returns the on spawn perk handler value held by the this instance.

```csharp
// Static call; no instance required
MPPerkObject.GetOnSpawnPerkHandler(perks);
```

### RaiseEventForAllPeers
`public static void RaiseEventForAllPeers(MPPerkCondition.PerkEventFlags flags)`

**Purpose:** Raises or triggers the event/exception related to event for all peers.

```csharp
// Static call; no instance required
MPPerkObject.RaiseEventForAllPeers(flags);
```

### RaiseEventForAllPeersOnTeam
`public static void RaiseEventForAllPeersOnTeam(Team side, MPPerkCondition.PerkEventFlags flags)`

**Purpose:** Raises or triggers the event/exception related to event for all peers on team.

```csharp
// Static call; no instance required
MPPerkObject.RaiseEventForAllPeersOnTeam(side, flags);
```

### TickAllPeerPerks
`public static void TickAllPeerPerks(int tickCount)`

**Purpose:** Advances the all peer perks state each frame or update cycle.

```csharp
// Static call; no instance required
MPPerkObject.TickAllPeerPerks(0);
```

### RaiseEventForAllPeersCommand
`public static string RaiseEventForAllPeersCommand(List<string> strings)`

**Purpose:** Raises or triggers the event/exception related to event for all peers command.

```csharp
// Static call; no instance required
MPPerkObject.RaiseEventForAllPeersCommand(strings);
```

### TickAllPeerPerksCommand
`public static string TickAllPeerPerksCommand(List<string> strings)`

**Purpose:** Advances the all peer perks command state each frame or update cycle.

```csharp
// Static call; no instance required
MPPerkObject.TickAllPeerPerksCommand(strings);
```

### GetExtraTroopCount
`public float GetExtraTroopCount()`

**Purpose:** Reads and returns the extra troop count value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetExtraTroopCount();
```

### GetAlternativeEquipments
`public IEnumerable<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isPlayer)`

**Purpose:** Reads and returns the alternative equipments value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetAlternativeEquipments(false);
```

### GetDrivenPropertyBonusOnSpawn
`public float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**Purpose:** Reads and returns the driven property bonus on spawn value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDrivenPropertyBonusOnSpawn(false, drivenProperty, 0);
```

### GetHitpoints
`public float GetHitpoints(bool isPlayer)`

**Purpose:** Reads and returns the hitpoints value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetHitpoints(false);
```

### OnEvent
`public void OnEvent(MPPerkCondition.PerkEventFlags flags)`

**Purpose:** Invoked when the event event is raised.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
mPPerkObject.OnEvent(flags);
```

### OnEvent
`public void OnEvent(Agent agent, MPPerkCondition.PerkEventFlags flags)`

**Purpose:** Invoked when the event event is raised.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
mPPerkObject.OnEvent(agent, flags);
```

### OnTick
`public void OnTick(int tickCount)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
mPPerkObject.OnTick(0);
```

### GetDrivenPropertyBonus
`public float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)`

**Purpose:** Reads and returns the driven property bonus value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDrivenPropertyBonus(drivenProperty, 0);
```

### GetRangedAccuracy
`public float GetRangedAccuracy()`

**Purpose:** Reads and returns the ranged accuracy value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetRangedAccuracy();
```

### GetThrowingWeaponSpeed
`public float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)`

**Purpose:** Reads and returns the throwing weapon speed value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetThrowingWeaponSpeed(attackerWeapon);
```

### GetDamageInterruptionThreshold
`public float GetDamageInterruptionThreshold()`

**Purpose:** Reads and returns the damage interruption threshold value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDamageInterruptionThreshold();
```

### GetMountManeuver
`public float GetMountManeuver()`

**Purpose:** Reads and returns the mount maneuver value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetMountManeuver();
```

### GetMountSpeed
`public float GetMountSpeed()`

**Purpose:** Reads and returns the mount speed value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetMountSpeed();
```

### GetGoldOnKill
`public int GetGoldOnKill(float attackerValue, float victimValue)`

**Purpose:** Reads and returns the gold on kill value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetGoldOnKill(0, 0);
```

### GetGoldOnAssist
`public int GetGoldOnAssist()`

**Purpose:** Reads and returns the gold on assist value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetGoldOnAssist();
```

### GetRewardedGoldOnAssist
`public int GetRewardedGoldOnAssist()`

**Purpose:** Reads and returns the rewarded gold on assist value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetRewardedGoldOnAssist();
```

### GetIsTeamRewardedOnDeath
`public bool GetIsTeamRewardedOnDeath()`

**Purpose:** Reads and returns the is team rewarded on death value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetIsTeamRewardedOnDeath();
```

### GetTeamGoldRewardsOnDeath
`public IEnumerable<ValueTuple<MissionPeer, int>> GetTeamGoldRewardsOnDeath()`

**Purpose:** Reads and returns the team gold rewards on death value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetTeamGoldRewardsOnDeath();
```

### GetEncumbrance
`public float GetEncumbrance(bool isOnBody)`

**Purpose:** Reads and returns the encumbrance value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetEncumbrance(false);
```

### GetDamage
`public float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**Purpose:** Reads and returns the damage value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDamage(attackerWeapon, damageType, false);
```

### GetDamageTaken
`public float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** Reads and returns the damage taken value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDamageTaken(attackerWeapon, damageType);
```

### GetSpeedBonusEffectiveness
`public float GetSpeedBonusEffectiveness(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** Reads and returns the speed bonus effectiveness value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetSpeedBonusEffectiveness(attackerWeapon, damageType);
```

### GetShieldDamage
`public float GetShieldDamage(bool isCorrectSideBlock)`

**Purpose:** Reads and returns the shield damage value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetShieldDamage(false);
```

### GetShieldDamageTaken
`public float GetShieldDamageTaken(bool isCorrectSideBlock)`

**Purpose:** Reads and returns the shield damage taken value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetShieldDamageTaken(false);
```

### GetRangedHeadShotDamage
`public float GetRangedHeadShotDamage()`

**Purpose:** Reads and returns the ranged head shot damage value held by the this instance.

```csharp
// Obtain an instance of MPPerkObject from the subsystem API first
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetRangedHeadShotDamage();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPPerkObject mPPerkObject = ...;
mPPerkObject.Clone(peer);
```

## See Also

- [Area Index](../)