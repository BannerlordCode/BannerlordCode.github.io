<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPOnSpawnPerkHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPOnSpawnPerkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class MPOnSpawnPerkHandler`
**Area:** mission-ext

## Overview

`MPOnSpawnPerkHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MPOnSpawnPerkHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MPOnSpawnPerkHandler());
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
