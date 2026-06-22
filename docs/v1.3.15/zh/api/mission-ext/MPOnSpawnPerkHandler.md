<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPOnSpawnPerkHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPOnSpawnPerkHandler

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MPOnSpawnPerkHandler` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)