<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEvent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEvent

**命名空间:** TaleWorlds.CampaignSystem.MapEvents
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MapEvent` 是 `TaleWorlds.CampaignSystem.MapEvents` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TroopUpgradeTracker` | `public TroopUpgradeTracker TroopUpgradeTracker { get; }` |
| `PlayerMapEvent` | `public static MapEvent PlayerMapEvent { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |
| `Component` | `public MapEventComponent Component { get; }` |
| `State` | `public MapEventState State { get; }` |
| `AttackerSide` | `public MapEventSide AttackerSide { get; }` |
| `DefenderSide` | `public MapEventSide DefenderSide { get; }` |
| `InvolvedParties` | `public IEnumerable<PartyBase> InvolvedParties { get; }` |
| `MapEventSettlement` | `public Settlement MapEventSettlement { get; }` |
| `RetreatingSide` | `public BattleSideEnum RetreatingSide { get; }` |
| `EndedByRetreat` | `public bool EndedByRetreat { get; }` |
| `PursuitRoundNumber` | `public int PursuitRoundNumber { get; }` |
| `UpdateCount` | `public int UpdateCount { get; }` |
| `Position` | `public CampaignVec2 Position { get; }` |
| `EventType` | `public MapEvent.BattleTypes EventType { get; set; }` |
| `EventTerrainType` | `public TerrainType EventTerrainType { get; set; }` |
| `IsInvulnerable` | `public bool IsInvulnerable { get; set; }` |
| `IsFieldBattle` | `public bool IsFieldBattle { get; }` |
| `IsRaid` | `public bool IsRaid { get; }` |
| `IsForcingVolunteers` | `public bool IsForcingVolunteers { get; }` |


## 主要方法

### BeginWait

```csharp
public void BeginWait()
```

### GetMapEventSide

```csharp
public MapEventSide GetMapEventSide(BattleSideEnum side)
```

### PartiesOnSide

```csharp
public MBReadOnlyList<MapEventParty> PartiesOnSide(BattleSideEnum side)
```

### GetBattleRewards

```csharp
public void GetBattleRewards(PartyBase party, out float renownChange, out float influenceChange, out float moraleChange, out float goldChange, out float playerEarnedLootPercentage)
```

### ToString

```csharp
public override string ToString()
```

### GetNumberOfInvolvedMen

```csharp
public int GetNumberOfInvolvedMen()
```

### GetNumberOfInvolvedMen

```csharp
public int GetNumberOfInvolvedMen(BattleSideEnum side)
```

### FinishBattleAndKeepSiegeEvent

```csharp
public void FinishBattleAndKeepSiegeEvent()
```

### SimulateBattleSetup

```csharp
public void SimulateBattleSetup(FlattenedTroopRoster priorTroops)
```

### SimulateBattleRound

```csharp
public void SimulateBattleRound(int simulationTicksDefender, int simulationTicksAttacker)
```

### SetOverrideWinner

```csharp
public void SetOverrideWinner(BattleSideEnum winner)
```

### SetDefenderPulledBack

```csharp
public void SetDefenderPulledBack()
```

### ResetBattleState

```csharp
public void ResetBattleState()
```

### IsPlayerSergeant

```csharp
public bool IsPlayerSergeant()
```

### FinalizeEvent

```csharp
public void FinalizeEvent()
```

### HasTroopsOnBothSides

```csharp
public bool HasTroopsOnBothSides()
```

### GetLeaderParty

```csharp
public PartyBase GetLeaderParty(BattleSideEnum side)
```

### GetRenownValue

```csharp
public float GetRenownValue(BattleSideEnum side)
```

### RecalculateRenownAndInfluenceValues

```csharp
public void RecalculateRenownAndInfluenceValues(PartyBase party)
```

### RecalculateStrengthOfSides

```csharp
public void RecalculateStrengthOfSides()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)