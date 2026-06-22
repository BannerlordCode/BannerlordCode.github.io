<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BesiegerCamp`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BesiegerCamp

**命名空间:** TaleWorlds.CampaignSystem.Siege
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`BesiegerCamp` 是 `TaleWorlds.CampaignSystem.Siege` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; }` |
| `SiegeEngines` | `public SiegeEvent.SiegeEnginesContainer SiegeEngines { get; }` |
| `LeaderParty` | `public MobileParty LeaderParty { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `BattleSide` | `public BattleSideEnum BattleSide { get; }` |
| `SiegeEngineMissiles` | `public MBReadOnlyList<SiegeEvent.SiegeEngineMissile> SiegeEngineMissiles { get; }` |
| `SiegeStrategy` | `public SiegeStrategy SiegeStrategy { get; }` |
| `NumberOfTroopsKilledOnSide` | `public int NumberOfTroopsKilledOnSide { get; }` |
| `IsPreparationComplete` | `public bool IsPreparationComplete { get; }` |
| `IsReadyToBesiege` | `public bool IsReadyToBesiege { get; }` |


## 主要方法

### GetInvolvedPartiesForEventType

```csharp
public IEnumerable<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)
```

### GetNextInvolvedPartyForEventType

```csharp
public PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)
```

### HasInvolvedPartyForEventType

```csharp
public bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)
```

### IsBesiegerSideParty

```csharp
public bool IsBesiegerSideParty(MobileParty mobileParty)
```

### InitializeSiegeEventSide

```csharp
public void InitializeSiegeEventSide()
```

### OnTroopsKilledOnSide

```csharp
public void OnTroopsKilledOnSide(int killCount)
```

### SetSiegeStrategy

```csharp
public void SetSiegeStrategy(SiegeStrategy strategy)
```

### RemoveAllSiegeParties

```csharp
public void RemoveAllSiegeParties()
```

### AddSiegeEngineMissile

```csharp
public void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile)
```

### RemoveDeprecatedMissiles

```csharp
public void RemoveDeprecatedMissiles()
```

### BombardHitWalls

```csharp
public void BombardHitWalls(SiegeEngineType attackerEngineType, int wallIndex)
```

### GetAttackTarget

```csharp
public void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)
```

### FinalizeSiegeEvent

```csharp
public void FinalizeSiegeEvent()
```

### OnAfterLoad

```csharp
public void OnAfterLoad()
```

### SetPositionAfterMapChange

```csharp
public void SetPositionAfterMapChange(CampaignVec2 newPosition)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)