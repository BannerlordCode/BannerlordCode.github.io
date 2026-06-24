<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEnginesContainer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEnginesContainer

**命名空间:** TaleWorlds.CampaignSystem.Siege
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class SiegeEnginesContainer`
**领域:** campaign-ext

## 概述

`SiegeEnginesContainer` 位于 `TaleWorlds.CampaignSystem.Siege`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void ActivateBlockade()`

**用途 / Purpose:** 处理 `activate blockade` 相关逻辑。

### DeactivateBlockade
`public void DeactivateBlockade()`

**用途 / Purpose:** 处理 `deactivate blockade` 相关逻辑。

### GetInvolvedPartiesForEventType
`public List<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 获取 `involved parties for event type` 的当前值。

### GetCurrentBattleType
`public MapEvent.BattleTypes GetCurrentBattleType()`

**用途 / Purpose:** 获取 `current battle type` 的当前值。

### GetSiegeEventSide
`public ISiegeEventSide GetSiegeEventSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `siege event side` 的当前值。

### CanPartyJoinSide
`public bool CanPartyJoinSide(PartyBase party, BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否可以执行 `party join side`。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnAfterLoad
`public void OnAfterLoad()`

**用途 / Purpose:** 当 `after load` 事件触发时调用此方法。

### OnBeforeSiegeEventEnd
`public void OnBeforeSiegeEventEnd(BattleState winnerSide, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 当 `before siege event end` 事件触发时调用此方法。

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**用途 / Purpose:** 处理 `finalize siege event` 相关逻辑。

### IsPartyInvolved
`public bool IsPartyInvolved(PartyBase party)`

**用途 / Purpose:** 处理 `is party involved` 相关逻辑。

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 设置 `position after map change` 的值或状态。

### DoSiegeAction
`public void DoSiegeAction(ISiegeEventSide siegeEventSide, SiegeStrategyActionModel.SiegeAction siegeAction, SiegeEngineType siegeEngineType, int deploymentIndex, int reserveIndex)`

**用途 / Purpose:** 处理 `do siege action` 相关逻辑。

### AdvanceStrategy
`public void AdvanceStrategy(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 处理 `advance strategy` 相关逻辑。

### BreakSiegeEngine
`public void BreakSiegeEngine(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngineType)`

**用途 / Purpose:** 处理 `break siege engine` 相关逻辑。

### GetPreparedSiegeEnginesAsDictionary
`public Dictionary<SiegeEngineType, int> GetPreparedSiegeEnginesAsDictionary(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 获取 `prepared siege engines as dictionary` 的当前值。

### GetPreparedAndActiveSiegeEngines
`public List<MissionSiegeWeapon> GetPreparedAndActiveSiegeEngines(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 获取 `prepared and active siege engines` 的当前值。

### SetSiegeEngineStatesAfterSiegeMission
`public void SetSiegeEngineStatesAfterSiegeMission(IEnumerable<IMissionSiegeWeapon> attackerMissionSiegeEngineData, IEnumerable<IMissionSiegeWeapon> defenderMissionSiegeEngineData)`

**用途 / Purpose:** 设置 `siege engine states after siege mission` 的值或状态。

### CreateSiegeObject
`public void CreateSiegeObject(SiegeEvent.SiegeEngineConstructionProgress siegeEngineConstructionProgress, ISiegeEventSide siegeSide)`

**用途 / Purpose:** 创建一个 `siege object` 实例或对象。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 SiegeEnginesContainer 实例，再调用它的公开方法
var value = new SiegeEnginesContainer();
value.ActivateBlockade();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
