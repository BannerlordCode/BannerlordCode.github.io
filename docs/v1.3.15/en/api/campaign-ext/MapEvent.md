<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MapEvent` is a class in the `TaleWorlds.CampaignSystem.MapEvents` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)