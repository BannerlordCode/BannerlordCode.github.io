<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RangedSiegeEngine`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RangedSiegeEngine

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `RangedSiegeEngine` is a class in the `TaleWorlds.CampaignSystem.Siege` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeWallSeed` | `public int SiegeWallSeed { get; }` |
| `SiegePeopleSeed` | `public int SiegePeopleSeed { get; }` |
| `SiegeStartTime` | `public CampaignTime SiegeStartTime { get; }` |
| `IsPlayerSiegeEvent` | `public bool IsPlayerSiegeEvent { get; }` |
| `BlockadeShouldBeActivated` | `public bool BlockadeShouldBeActivated { get; }` |
| `IsBlockadeActive` | `public bool IsBlockadeActive { get; }` |
| `ReadyToBeRemoved` | `public bool ReadyToBeRemoved { get; }` |
| `NextTimeEngineCanBombard` | `public CampaignTime NextTimeEngineCanBombard { get; }` |
| `AlreadyFired` | `public bool AlreadyFired { get; }` |
| `CurrentTargetType` | `public SiegeBombardTargets CurrentTargetType { get; }` |
| `CurrentTargetIndex` | `public int CurrentTargetIndex { get; }` |
| `PreviousDamagedTargetType` | `public SiegeBombardTargets PreviousDamagedTargetType { get; }` |
| `PreviousTargetIndex` | `public int PreviousTargetIndex { get; }` |
| `LastBombardTime` | `public CampaignTime LastBombardTime { get; }` |
| `NextProjectileCollisionTime` | `public CampaignTime NextProjectileCollisionTime { get; }` |
| `IsReadyToFire` | `public bool IsReadyToFire { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Hitpoints` | `public float Hitpoints { get; }` |
| `Progress` | `public float Progress { get; }` |
| `RangedSiegeEngine` | `public SiegeEvent.RangedSiegeEngine RangedSiegeEngine { get; }` |


## Key Methods

### ActivateBlockade

```csharp
public void ActivateBlockade()
```

### DeactivateBlockade

```csharp
public void DeactivateBlockade()
```

### GetInvolvedPartiesForEventType

```csharp
public List<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes battleType)
```

### GetCurrentBattleType

```csharp
public MapEvent.BattleTypes GetCurrentBattleType()
```

### GetSiegeEventSide

```csharp
public ISiegeEventSide GetSiegeEventSide(BattleSideEnum side)
```

### CanPartyJoinSide

```csharp
public bool CanPartyJoinSide(PartyBase party, BattleSideEnum side)
```

### Tick

```csharp
public void Tick(float dt)
```

### OnAfterLoad

```csharp
public void OnAfterLoad()
```

### OnBeforeSiegeEventEnd

```csharp
public void OnBeforeSiegeEventEnd(BattleState winnerSide, MapEvent.BattleTypes battleType)
```

### FinalizeSiegeEvent

```csharp
public void FinalizeSiegeEvent()
```

### IsPartyInvolved

```csharp
public bool IsPartyInvolved(PartyBase party)
```

### SetPositionAfterMapChange

```csharp
public void SetPositionAfterMapChange(CampaignVec2 newPosition)
```

### DoSiegeAction

```csharp
public void DoSiegeAction(ISiegeEventSide siegeEventSide, SiegeStrategyActionModel.SiegeAction siegeAction, SiegeEngineType siegeEngineType, int deploymentIndex, int reserveIndex)
```

### AdvanceStrategy

```csharp
public void AdvanceStrategy(ISiegeEventSide siegeEventSide)
```

### BreakSiegeEngine

```csharp
public void BreakSiegeEngine(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngineType)
```

### GetPreparedSiegeEnginesAsDictionary

```csharp
public Dictionary<SiegeEngineType, int> GetPreparedSiegeEnginesAsDictionary(ISiegeEventSide siegeEventSide)
```

### GetPreparedAndActiveSiegeEngines

```csharp
public List<MissionSiegeWeapon> GetPreparedAndActiveSiegeEngines(ISiegeEventSide siegeEventSide)
```

### SetSiegeEngineStatesAfterSiegeMission

```csharp
public void SetSiegeEngineStatesAfterSiegeMission(IEnumerable<IMissionSiegeWeapon> attackerMissionSiegeEngineData, IEnumerable<IMissionSiegeWeapon> defenderMissionSiegeEngineData)
```

### CreateSiegeObject

```csharp
public void CreateSiegeObject(SiegeEvent.SiegeEngineConstructionProgress siegeEngineConstructionProgress, ISiegeEventSide siegeSide)
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)