<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEngineMissile`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEngineMissile

**命名空间:** TaleWorlds.CampaignSystem.Siege
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SiegeEngineMissile` 是 `TaleWorlds.CampaignSystem.Siege` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)