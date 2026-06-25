---
title: "Settlement"
description: "Settlement 的自动生成类参考。"
---
# Settlement

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Settlement : MBObjectBase, ILocatable<Settlement>, IMapPoint, ITrackableCampaignObject, ITrackableBase, ISiegeEventSide, IRandomOwner, ISettlementDataHolder`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/Settlement.cs`

## 概述

`Settlement` 位于 `TaleWorlds.CampaignSystem.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Party` | `public PartyBase Party { get; }` |
| `NumberOfLordPartiesAt` | `public int NumberOfLordPartiesAt { get; set; }` |
| `BribePaid` | `public int BribePaid { get; set; }` |
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `Owner` | `public Hero Owner { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsInspected` | `public bool IsInspected { get; set; }` |
| `WallSectionCount` | `public int WallSectionCount { get; set; }` |
| `NearbyLandThreatIntensity` | `public float NearbyLandThreatIntensity { get; set; }` |
| `NearbyNavalThreatIntensity` | `public float NearbyNavalThreatIntensity { get; set; }` |
| `NearbyLandAllyIntensity` | `public float NearbyLandAllyIntensity { get; set; }` |
| `NearbyNavalAllyIntensity` | `public float NearbyNavalAllyIntensity { get; set; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `GetPosition2D` | `public Vec2 GetPosition2D { get; }` |
| `Militia` | `public float Militia { get; }` |
| `SettlementWallSectionHitPointsRatioList` | `public MBReadOnlyList<float> SettlementWallSectionHitPointsRatioList { get; }` |
| `SettlementTotalWallHitPoints` | `public float SettlementTotalWallHitPoints { get; }` |
| `MaxHitPointsOfOneWallSection` | `public float MaxHitPointsOfOneWallSection { get; }` |
| `SettlementHitPoints` | `public float SettlementHitPoints { get; set; }` |
| `MaxWallHitPoints` | `public float MaxWallHitPoints { get; }` |
| `Parties` | `public MBReadOnlyList<MobileParty> Parties { get; }` |
| `PatrolParty` | `public PatrolPartyComponent PatrolParty { get; }` |
| `HeroesWithoutParty` | `public MBReadOnlyList<Hero> HeroesWithoutParty { get; }` |
| `Notables` | `public MBReadOnlyList<Hero> Notables { get; }` |
| `SettlementComponent` | `public SettlementComponent SettlementComponent { get; }` |
| `GatePosition` | `public CampaignVec2 GatePosition { get; }` |
| `PortPosition` | `public CampaignVec2 PortPosition { get; }` |
| `CurrentNavigationFace` | `public PathFaceRecord CurrentNavigationFace { get; }` |
| `Position` | `public CampaignVec2 Position { get; }` |
| `HasPort` | `public bool HasPort { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |
| `GarrisonWagePaymentLimit` | `public int GarrisonWagePaymentLimit { get; }` |
| `ItemRoster` | `public ItemRoster ItemRoster { get; }` |
| `BoundVillages` | `public MBReadOnlyList<Village> BoundVillages { get; set; }` |
| `LastAttackerParty` | `public MobileParty LastAttackerParty { get; set; }` |
| `LastThreatTime` | `public CampaignTime LastThreatTime { get; }` |
| `SiegeEngines` | `public SiegeEvent.SiegeEnginesContainer SiegeEngines { get; }` |
| `SiegeEngineMissiles` | `public MBReadOnlyList<SiegeEvent.SiegeEngineMissile> SiegeEngineMissiles { get; }` |
| `BattleSide` | `public BattleSideEnum BattleSide { get; }` |
| `NumberOfTroopsKilledOnSide` | `public int NumberOfTroopsKilledOnSide { get; }` |
| `SiegeStrategy` | `public SiegeStrategy SiegeStrategy { get; }` |
| `Alleys` | `public List<Alley> Alleys { get; }` |
| `IsTown` | `public bool IsTown { get; }` |
| `IsCastle` | `public bool IsCastle { get; }` |
| `IsFortification` | `public bool IsFortification { get; }` |
| `IsVillage` | `public bool IsVillage { get; }` |
| `IsHideout` | `public bool IsHideout { get; }` |
| `IsStarving` | `public bool IsStarving { get; }` |
| `IsRaided` | `public bool IsRaided { get; }` |
| `InRebelliousState` | `public bool InRebelliousState { get; }` |
| `IsUnderRaid` | `public bool IsUnderRaid { get; }` |
| `IsUnderSiege` | `public bool IsUnderSiege { get; }` |
| `LocationComplex` | `public LocationComplex LocationComplex { get; }` |
| `CurrentSettlement` | `public static Settlement CurrentSettlement { get; }` |
| `All` | `public static MBReadOnlyList<Settlement> All { get; }` |
| `GetFirst` | `public static Settlement GetFirst { get; }` |
| `CurrentSiegeState` | `public Settlement.SiegeState CurrentSiegeState { get; }` |
| `OwnerClan` | `public Clan OwnerClan { get; }` |

## 主要方法

### SetWallSectionHitPointsRatioAtIndex
`public void SetWallSectionHitPointsRatioAtIndex(int index, float hitPointsRatio)`

**用途 / Purpose:** **用途 / Purpose:** 为 wall section hit points ratio at index 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.SetWallSectionHitPointsRatioAtIndex(0, 0);
```

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 position as vec3 的结果。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.GetPositionAsVec3();
```

### SetGarrisonWagePaymentLimit
`public void SetGarrisonWagePaymentLimit(int limit)`

**用途 / Purpose:** **用途 / Purpose:** 为 garrison wage payment limit 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.SetGarrisonWagePaymentLimit(0);
```

### GetInvolvedPartiesForEventType
`public IEnumerable<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 involved parties for event type 的结果。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.GetInvolvedPartiesForEventType(mapEvent.BattleTypes.Siege);
```

### GetNextInvolvedPartyForEventType
`public PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 next involved party for event type 的结果。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.GetNextInvolvedPartyForEventType(partyIndex, mapEvent.BattleTypes.Siege);
```

### HasInvolvedPartyForEventType
`public bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 involved party for event type。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.HasInvolvedPartyForEventType(party, mapEvent.BattleTypes.Siege);
```

### IsUnderRebellionAttack
`public bool IsUnderRebellionAttack()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 under rebellion attack 状态或条件。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.IsUnderRebellionAttack();
```

### GetSettlementValueForEnemyHero
`public float GetSettlementValueForEnemyHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 settlement value for enemy hero 的结果。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.GetSettlementValueForEnemyHero(hero);
```

### IsSettlementBusy
`public bool IsSettlementBusy(object asker)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 settlement busy 状态或条件。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.IsSettlementBusy(asker);
```

### IsSettlementBusy
`public bool IsSettlementBusy(object asker, int limitingPriority)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 settlement busy 状态或条件。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.IsSettlementBusy(asker, 0);
```

### GetSettlementBusynessPriority
`public int GetSettlementBusynessPriority(object asker)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 settlement busyness priority 的结果。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.GetSettlementBusynessPriority(asker);
```

### GetValue
`public float GetValue(Hero hero = null, bool countAlsoBoundedSettlements = true)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 value 的结果。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.GetValue(null, false);
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.GetName();
```

### GetSettlementValueForFaction
`public float GetSettlementValueForFaction(IFaction faction)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 settlement value for faction 的结果。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.GetSettlementValueForFaction(faction);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.ToString();
```

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty engagingParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 party interaction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.OnPartyInteraction(engagingParty);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.Deserialize(objectManager, node);
```

### OnFinishLoadState
`public void OnFinishLoadState()`

**用途 / Purpose:** **用途 / Purpose:** 在 finish load state 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.OnFinishLoadState();
```

### OnGameCreated
`public void OnGameCreated()`

**用途 / Purpose:** **用途 / Purpose:** 在 game created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.OnGameCreated();
```

### OnSessionStart
`public void OnSessionStart()`

**用途 / Purpose:** **用途 / Purpose:** 在 session start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.OnSessionStart();
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** **用途 / Purpose:** 检查positions for map change and update if needed在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

### Find
`public static Settlement Find(string idString)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找匹配项。

```csharp
// 静态调用，不需要实例
Settlement.Find("example");
```

### FindFirst
`public static Settlement FindFirst(Func<Settlement, bool> predicate)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的first。

```csharp
// 静态调用，不需要实例
Settlement.FindFirst(func<Settlement, false);
```

### FindAll
`public static IEnumerable<Settlement> FindAll(Func<Settlement, bool> predicate)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的all。

```csharp
// 静态调用，不需要实例
Settlement.FindAll(func<Settlement, false);
```

### StartFindingLocatablesAroundPosition
`public static LocatableSearchData<Settlement> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`

**用途 / Purpose:** **用途 / Purpose:** 启动finding locatables around position流程或状态机。

```csharp
// 静态调用，不需要实例
Settlement.StartFindingLocatablesAroundPosition(position, 0);
```

### FindNextLocatable
`public static Settlement FindNextLocatable(ref LocatableSearchData<Settlement> data)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的next locatable。

```csharp
// 静态调用，不需要实例
Settlement.FindNextLocatable(data);
```

### OnPlayerEncounterFinish
`public void OnPlayerEncounterFinish()`

**用途 / Purpose:** **用途 / Purpose:** 在 player encounter finish 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.OnPlayerEncounterFinish();
```

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 position 的结果。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
var result = settlement.GetPosition();
```

### SetNextSiegeState
`public void SetNextSiegeState()`

**用途 / Purpose:** **用途 / Purpose:** 为 next siege state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.SetNextSiegeState();
```

### ResetSiegeState
`public void ResetSiegeState()`

**用途 / Purpose:** **用途 / Purpose:** 将 siege state 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.ResetSiegeState();
```

### AddGarrisonParty
`public void AddGarrisonParty()`

**用途 / Purpose:** **用途 / Purpose:** 将 garrison party 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.AddGarrisonParty();
```

### SetSiegeStrategy
`public void SetSiegeStrategy(SiegeStrategy strategy)`

**用途 / Purpose:** **用途 / Purpose:** 为 siege strategy 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.SetSiegeStrategy(strategy);
```

### InitializeSiegeEventSide
`public void InitializeSiegeEventSide()`

**用途 / Purpose:** **用途 / Purpose:** 为 siege event side 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.InitializeSiegeEventSide();
```

### OnTroopsKilledOnSide
`public void OnTroopsKilledOnSide(int killCount)`

**用途 / Purpose:** **用途 / Purpose:** 在 troops killed on side 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.OnTroopsKilledOnSide(0);
```

### AddSiegeEngineMissile
`public void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile)`

**用途 / Purpose:** **用途 / Purpose:** 将 siege engine missile 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.AddSiegeEngineMissile(missile);
```

### RemoveDeprecatedMissiles
`public void RemoveDeprecatedMissiles()`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 deprecated missiles。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.RemoveDeprecatedMissiles();
```

### GetAttackTarget
`public void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 attack target 的结果。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.GetAttackTarget(siegeEventSide, siegeEngine, 0, targetType, targetIndex);
```

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**用途 / Purpose:** **用途 / Purpose:** 调用 FinalizeSiegeEvent 对应的操作。

```csharp
// 先通过子系统 API 拿到 Settlement 实例
Settlement settlement = ...;
settlement.FinalizeSiegeEvent();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Settlement settlement = ...;
settlement.SetWallSectionHitPointsRatioAtIndex(0, 0);
```

## 参见

- [本区域目录](../)