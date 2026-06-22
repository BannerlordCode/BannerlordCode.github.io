<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BesiegerCamp`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BesiegerCamp

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BesiegerCamp` is a class in the `TaleWorlds.CampaignSystem.Siege` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)