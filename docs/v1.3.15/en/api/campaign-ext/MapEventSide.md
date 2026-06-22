<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventSide`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventSide

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MapEventSide` is a class in the `TaleWorlds.CampaignSystem.MapEvents` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)