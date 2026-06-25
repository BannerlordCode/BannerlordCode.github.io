---
title: "BesiegerCamp"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BesiegerCamp`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BesiegerCamp

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BesiegerCamp : ISiegeEventSide`
**Base:** `ISiegeEventSide`
**File:** `TaleWorlds.CampaignSystem/Siege/BesiegerCamp.cs`

## 概述

`BesiegerCamp` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public IEnumerable<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** 获取 `involved parties for event type` 的当前值。

### GetNextInvolvedPartyForEventType
`public PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** 获取 `next involved party for event type` 的当前值。

### HasInvolvedPartyForEventType
`public bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `involved party for event type`。

### IsBesiegerSideParty
`public bool IsBesiegerSideParty(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `is besieger side party` 相关逻辑。

### InitializeSiegeEventSide
`public void InitializeSiegeEventSide()`

**用途 / Purpose:** 初始化 `siege event side` 的状态、资源或绑定。

### OnTroopsKilledOnSide
`public void OnTroopsKilledOnSide(int killCount)`

**用途 / Purpose:** 当 `troops killed on side` 事件触发时调用此方法。

### SetSiegeStrategy
`public void SetSiegeStrategy(SiegeStrategy strategy)`

**用途 / Purpose:** 设置 `siege strategy` 的值或状态。

### RemoveAllSiegeParties
`public void RemoveAllSiegeParties()`

**用途 / Purpose:** 从当前集合/状态中移除 `all siege parties`。

### AddSiegeEngineMissile
`public void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile)`

**用途 / Purpose:** 向当前集合/状态中添加 `siege engine missile`。

### RemoveDeprecatedMissiles
`public void RemoveDeprecatedMissiles()`

**用途 / Purpose:** 从当前集合/状态中移除 `deprecated missiles`。

### BombardHitWalls
`public void BombardHitWalls(SiegeEngineType attackerEngineType, int wallIndex)`

**用途 / Purpose:** 处理 `bombard hit walls` 相关逻辑。

### GetAttackTarget
`public void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)`

**用途 / Purpose:** 获取 `attack target` 的当前值。

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**用途 / Purpose:** 处理 `finalize siege event` 相关逻辑。

### OnAfterLoad
`public void OnAfterLoad()`

**用途 / Purpose:** 当 `after load` 事件触发时调用此方法。

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 设置 `position after map change` 的值或状态。

## 使用示例

```csharp
var value = new BesiegerCamp();
value.GetInvolvedPartiesForEventType(mapEvent.BattleTypes.Siege);
```

## 参见

- [完整类目录](../catalog)