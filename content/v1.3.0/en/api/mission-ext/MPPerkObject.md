---
title: "MPPerkObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPerkObject`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `clone`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### GetExtraTroopCount
`public int GetExtraTroopCount(bool isWarmup)`

**Purpose:** Gets the current value of `extra troop count`.

### GetAlternativeEquipments
`public List<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isWarmup, bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>> alternativeEquipments, bool getAllEquipments = false)`

**Purpose:** Gets the current value of `alternative equipments`.

### GetDrivenPropertyBonusOnSpawn
`public float GetDrivenPropertyBonusOnSpawn(bool isWarmup, bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**Purpose:** Gets the current value of `driven property bonus on spawn`.

### GetHitpoints
`public float GetHitpoints(bool isWarmup, bool isPlayer)`

**Purpose:** Gets the current value of `hitpoints`.

### GetTroopCount
`public static int GetTroopCount(MultiplayerClassDivisions.MPHeroClass heroClass, int botsPerFormation, MPPerkObject.MPOnSpawnPerkHandler onSpawnPerkHandler)`

**Purpose:** Gets the current value of `troop count`.

### Deserialize
`public static IReadOnlyPerkObject Deserialize(XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(Agent agent)`

**Purpose:** Gets the current value of `perk handler`.

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(MissionPeer peer)`

**Purpose:** Gets the current value of `perk handler`.

### GetCombatPerkHandler
`public static MPPerkObject.MPCombatPerkHandler GetCombatPerkHandler(Agent attacker, Agent defender)`

**Purpose:** Gets the current value of `combat perk handler`.

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(MissionPeer peer)`

**Purpose:** Gets the current value of `on spawn perk handler`.

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(IEnumerable<IReadOnlyPerkObject> perks)`

**Purpose:** Gets the current value of `on spawn perk handler`.

### RaiseEventForAllPeers
`public static void RaiseEventForAllPeers(MPPerkCondition.PerkEventFlags flags)`

**Purpose:** Handles logic related to `raise event for all peers`.

### RaiseEventForAllPeersOnTeam
`public static void RaiseEventForAllPeersOnTeam(Team side, MPPerkCondition.PerkEventFlags flags)`

**Purpose:** Handles logic related to `raise event for all peers on team`.

### TickAllPeerPerks
`public static void TickAllPeerPerks(int tickCount)`

**Purpose:** Handles logic related to `tick all peer perks`.

### RaiseEventForAllPeersCommand
`public static string RaiseEventForAllPeersCommand(List<string> strings)`

**Purpose:** Handles logic related to `raise event for all peers command`.

### TickAllPeerPerksCommand
`public static string TickAllPeerPerksCommand(List<string> strings)`

**Purpose:** Handles logic related to `tick all peer perks command`.

### GetExtraTroopCount
`public float GetExtraTroopCount()`

**Purpose:** Gets the current value of `extra troop count`.

### GetAlternativeEquipments
`public IEnumerable<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isPlayer)`

**Purpose:** Gets the current value of `alternative equipments`.

### GetDrivenPropertyBonusOnSpawn
`public float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**Purpose:** Gets the current value of `driven property bonus on spawn`.

### GetHitpoints
`public float GetHitpoints(bool isPlayer)`

**Purpose:** Gets the current value of `hitpoints`.

### OnEvent
`public void OnEvent(MPPerkCondition.PerkEventFlags flags)`

**Purpose:** Called when the `event` event is raised.

### OnEvent
`public void OnEvent(Agent agent, MPPerkCondition.PerkEventFlags flags)`

**Purpose:** Called when the `event` event is raised.

### OnTick
`public void OnTick(int tickCount)`

**Purpose:** Called when the `tick` event is raised.

### GetDrivenPropertyBonus
`public float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)`

**Purpose:** Gets the current value of `driven property bonus`.

### GetRangedAccuracy
`public float GetRangedAccuracy()`

**Purpose:** Gets the current value of `ranged accuracy`.

### GetThrowingWeaponSpeed
`public float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)`

**Purpose:** Gets the current value of `throwing weapon speed`.

### GetDamageInterruptionThreshold
`public float GetDamageInterruptionThreshold()`

**Purpose:** Gets the current value of `damage interruption threshold`.

### GetMountManeuver
`public float GetMountManeuver()`

**Purpose:** Gets the current value of `mount maneuver`.

### GetMountSpeed
`public float GetMountSpeed()`

**Purpose:** Gets the current value of `mount speed`.

### GetGoldOnKill
`public int GetGoldOnKill(float attackerValue, float victimValue)`

**Purpose:** Gets the current value of `gold on kill`.

### GetGoldOnAssist
`public int GetGoldOnAssist()`

**Purpose:** Gets the current value of `gold on assist`.

### GetRewardedGoldOnAssist
`public int GetRewardedGoldOnAssist()`

**Purpose:** Gets the current value of `rewarded gold on assist`.

### GetIsTeamRewardedOnDeath
`public bool GetIsTeamRewardedOnDeath()`

**Purpose:** Gets the current value of `is team rewarded on death`.

### GetTeamGoldRewardsOnDeath
`public IEnumerable<ValueTuple<MissionPeer, int>> GetTeamGoldRewardsOnDeath()`

**Purpose:** Gets the current value of `team gold rewards on death`.

### GetEncumbrance
`public float GetEncumbrance(bool isOnBody)`

**Purpose:** Gets the current value of `encumbrance`.

### GetDamage
`public float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**Purpose:** Gets the current value of `damage`.

### GetDamageTaken
`public float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** Gets the current value of `damage taken`.

### GetSpeedBonusEffectiveness
`public float GetSpeedBonusEffectiveness(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**Purpose:** Gets the current value of `speed bonus effectiveness`.

### GetShieldDamage
`public float GetShieldDamage(bool isCorrectSideBlock)`

**Purpose:** Gets the current value of `shield damage`.

### GetShieldDamageTaken
`public float GetShieldDamageTaken(bool isCorrectSideBlock)`

**Purpose:** Gets the current value of `shield damage taken`.

### GetRangedHeadShotDamage
`public float GetRangedHeadShotDamage()`

**Purpose:** Gets the current value of `ranged head shot damage`.

## Usage Example

```csharp
var value = new MPPerkObject();
value.Clone(peer);
```

## See Also

- [Complete Class Catalog](../catalog)