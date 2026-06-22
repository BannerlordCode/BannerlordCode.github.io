<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPOnSpawnPerkHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPOnSpawnPerkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MPOnSpawnPerkHandler` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public MPPerkObject Clone(MissionPeer peer)
```

### Reset

```csharp
public void Reset()
```

### GetExtraTroopCount

```csharp
public int GetExtraTroopCount(bool isWarmup)
```

### GetAlternativeEquipments

```csharp
public List<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isWarmup, bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>> alternativeEquipments, bool getAllEquipments = false)
```

### GetDrivenPropertyBonusOnSpawn

```csharp
public float GetDrivenPropertyBonusOnSpawn(bool isWarmup, bool isPlayer, DrivenProperty drivenProperty, float baseValue)
```

### GetHitpoints

```csharp
public float GetHitpoints(bool isWarmup, bool isPlayer)
```

### GetTroopCount

```csharp
public static int GetTroopCount(MultiplayerClassDivisions.MPHeroClass heroClass, int botsPerFormation, MPPerkObject.MPOnSpawnPerkHandler onSpawnPerkHandler)
```

### Deserialize

```csharp
public static IReadOnlyPerkObject Deserialize(XmlNode node)
```

### GetPerkHandler

```csharp
public static MPPerkObject.MPPerkHandler GetPerkHandler(Agent agent)
```

### GetPerkHandler

```csharp
public static MPPerkObject.MPPerkHandler GetPerkHandler(MissionPeer peer)
```

### GetCombatPerkHandler

```csharp
public static MPPerkObject.MPCombatPerkHandler GetCombatPerkHandler(Agent attacker, Agent defender)
```

### GetOnSpawnPerkHandler

```csharp
public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(MissionPeer peer)
```

### GetOnSpawnPerkHandler

```csharp
public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(IEnumerable<IReadOnlyPerkObject> perks)
```

### RaiseEventForAllPeers

```csharp
public static void RaiseEventForAllPeers(MPPerkCondition.PerkEventFlags flags)
```

### RaiseEventForAllPeersOnTeam

```csharp
public static void RaiseEventForAllPeersOnTeam(Team side, MPPerkCondition.PerkEventFlags flags)
```

### TickAllPeerPerks

```csharp
public static void TickAllPeerPerks(int tickCount)
```

### RaiseEventForAllPeersCommand

```csharp
public static string RaiseEventForAllPeersCommand(List<string> strings)
```

### TickAllPeerPerksCommand

```csharp
public static string TickAllPeerPerksCommand(List<string> strings)
```

### GetExtraTroopCount

```csharp
public float GetExtraTroopCount()
```

### GetAlternativeEquipments

```csharp
public IEnumerable<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isPlayer)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)