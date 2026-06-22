<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEventSide`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventSide

**命名空间:** TaleWorlds.CampaignSystem.MapEvents
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MapEventSide` 是 `TaleWorlds.CampaignSystem.MapEvents` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `SimulationShipList` | `public MBList<Ship> SimulationShipList { get; }` |
| `WeightedShipCombatFactor` | `public float WeightedShipCombatFactor { get; }` |
| `LeaderParty` | `public PartyBase LeaderParty { get; }` |
| `Parties` | `public MBReadOnlyList<MapEventParty> Parties { get; }` |
| `MissionSide` | `public BattleSideEnum MissionSide { get; }` |
| `TroopCount` | `public int TroopCount { get; }` |
| `HasReadyTroops` | `public bool HasReadyTroops { get; }` |
| `NumRemainingSimulationTroops` | `public int NumRemainingSimulationTroops { get; }` |
| `NumRemainingSimulationShips` | `public int NumRemainingSimulationShips { get; }` |
| `NumRemainingSimulationSiegeEngines` | `public int NumRemainingSimulationSiegeEngines { get; }` |
| `CasualtyStrength` | `public float CasualtyStrength { get; }` |
| `HealthyTroopCountAtMapEventStart` | `public int HealthyTroopCountAtMapEventStart { get; }` |
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `OtherSide` | `public MapEventSide OtherSide { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |


## 主要方法

### CountTroops

```csharp
public int CountTroops(Func<FlattenedTroopRosterElement, bool> pred)
```

### GetTotalHealthyTroopCountOfSide

```csharp
public int GetTotalHealthyTroopCountOfSide()
```

### GetTotalHealthyHeroCountOfSide

```csharp
public int GetTotalHealthyHeroCountOfSide()
```

### RecalculateMemberCountOfSide

```csharp
public int RecalculateMemberCountOfSide()
```

### RecalculateStrengthOfSide

```csharp
public float RecalculateStrengthOfSide()
```

### IsMainPartyAmongParties

```csharp
public bool IsMainPartyAmongParties()
```

### GetPlayerPartyContributionRate

```csharp
public float GetPlayerPartyContributionRate()
```

### CalculateRenownAndInfluenceValues

```csharp
public void CalculateRenownAndInfluenceValues(float strengthOfSide)
```

### DistributeRenownAndInfluence

```csharp
public virtual void DistributeRenownAndInfluence(MapEventResultExplainer resultExplainers = null)
```

### ApplyRenownAndInfluenceChanges

```csharp
public void ApplyRenownAndInfluenceChanges()
```

### GetSideMorale

```csharp
public float GetSideMorale()
```

### ApplyFinalRewardsAndChanges

```csharp
public void ApplyFinalRewardsAndChanges()
```

### HandleMapEventEnd

```csharp
public void HandleMapEventEnd()
```

### AddHeroDamage

```csharp
public static void AddHeroDamage(Hero character, int damage)
```

### AllocateShips

```csharp
public void AllocateShips()
```

### AllocateSiegeEngines

```csharp
public void AllocateSiegeEngines()
```

### AllocateTroops

```csharp
public void AllocateTroops(ref List<UniqueTroopDescriptor> troopsList, int number = -1, Func<UniqueTroopDescriptor, MapEventParty, bool> customAllocationConditions = null)
```

### GetAllTroops

```csharp
public void GetAllTroops(ref List<UniqueTroopDescriptor> troopsList)
```

### GetAllocatedTroop

```csharp
public CharacterObject GetAllocatedTroop(UniqueTroopDescriptor troopDesc0)
```

### GetReadyTroop

```csharp
public CharacterObject GetReadyTroop(UniqueTroopDescriptor troopDesc0)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)