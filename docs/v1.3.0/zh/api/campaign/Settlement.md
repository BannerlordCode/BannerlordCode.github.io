<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Settlement`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/Settlement](/versions/Settlement)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `wall section hit points ratio at index` 的值或状态。

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**用途 / Purpose:** 获取 `position as vec3` 的当前值。

### SetGarrisonWagePaymentLimit
`public void SetGarrisonWagePaymentLimit(int limit)`

**用途 / Purpose:** 设置 `garrison wage payment limit` 的值或状态。

### GetInvolvedPartiesForEventType
`public IEnumerable<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** 获取 `involved parties for event type` 的当前值。

### GetNextInvolvedPartyForEventType
`public PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** 获取 `next involved party for event type` 的当前值。

### HasInvolvedPartyForEventType
`public bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `involved party for event type`。

### IsUnderRebellionAttack
`public bool IsUnderRebellionAttack()`

**用途 / Purpose:** 处理 `is under rebellion attack` 相关逻辑。

### GetSettlementValueForEnemyHero
`public float GetSettlementValueForEnemyHero(Hero hero)`

**用途 / Purpose:** 获取 `settlement value for enemy hero` 的当前值。

### IsSettlementBusy
`public bool IsSettlementBusy(object asker)`

**用途 / Purpose:** 处理 `is settlement busy` 相关逻辑。

### IsSettlementBusy
`public bool IsSettlementBusy(object asker, int limitingPriority)`

**用途 / Purpose:** 处理 `is settlement busy` 相关逻辑。

### GetSettlementBusynessPriority
`public int GetSettlementBusynessPriority(object asker)`

**用途 / Purpose:** 获取 `settlement busyness priority` 的当前值。

### GetValue
`public float GetValue(Hero hero = null, bool countAlsoBoundedSettlements = true)`

**用途 / Purpose:** 获取 `value` 的当前值。

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetSettlementValueForFaction
`public float GetSettlementValueForFaction(IFaction faction)`

**用途 / Purpose:** 获取 `settlement value for faction` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty engagingParty)`

**用途 / Purpose:** 当 `party interaction` 事件触发时调用此方法。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### OnFinishLoadState
`public void OnFinishLoadState()`

**用途 / Purpose:** 当 `finish load state` 事件触发时调用此方法。

### OnGameCreated
`public void OnGameCreated()`

**用途 / Purpose:** 当 `game created` 事件触发时调用此方法。

### OnSessionStart
`public void OnSessionStart()`

**用途 / Purpose:** 当 `session start` 事件触发时调用此方法。

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** 处理 `check positions for map change and update if needed` 相关逻辑。

### Find
`public static Settlement Find(string idString)`

**用途 / Purpose:** 处理 `find` 相关逻辑。

### FindFirst
`public static Settlement FindFirst(Func<Settlement, bool> predicate)`

**用途 / Purpose:** 处理 `find first` 相关逻辑。

### FindAll
`public static IEnumerable<Settlement> FindAll(Func<Settlement, bool> predicate)`

**用途 / Purpose:** 处理 `find all` 相关逻辑。

### StartFindingLocatablesAroundPosition
`public static LocatableSearchData<Settlement> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`

**用途 / Purpose:** 处理 `start finding locatables around position` 相关逻辑。

### FindNextLocatable
`public static Settlement FindNextLocatable(ref LocatableSearchData<Settlement> data)`

**用途 / Purpose:** 处理 `find next locatable` 相关逻辑。

### OnPlayerEncounterFinish
`public void OnPlayerEncounterFinish()`

**用途 / Purpose:** 当 `player encounter finish` 事件触发时调用此方法。

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** 获取 `position` 的当前值。

### SetNextSiegeState
`public void SetNextSiegeState()`

**用途 / Purpose:** 设置 `next siege state` 的值或状态。

### ResetSiegeState
`public void ResetSiegeState()`

**用途 / Purpose:** 将 `siege state` 重置为初始状态。

### AddGarrisonParty
`public void AddGarrisonParty()`

**用途 / Purpose:** 向当前集合/状态中添加 `garrison party`。

### SetSiegeStrategy
`public void SetSiegeStrategy(SiegeStrategy strategy)`

**用途 / Purpose:** 设置 `siege strategy` 的值或状态。

### InitializeSiegeEventSide
`public void InitializeSiegeEventSide()`

**用途 / Purpose:** 初始化 `siege event side` 的状态、资源或绑定。

### OnTroopsKilledOnSide
`public void OnTroopsKilledOnSide(int killCount)`

**用途 / Purpose:** 当 `troops killed on side` 事件触发时调用此方法。

### AddSiegeEngineMissile
`public void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile)`

**用途 / Purpose:** 向当前集合/状态中添加 `siege engine missile`。

### RemoveDeprecatedMissiles
`public void RemoveDeprecatedMissiles()`

**用途 / Purpose:** 从当前集合/状态中移除 `deprecated missiles`。

### GetAttackTarget
`public void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)`

**用途 / Purpose:** 获取 `attack target` 的当前值。

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**用途 / Purpose:** 处理 `finalize siege event` 相关逻辑。

## 使用示例

```csharp
var value = new Settlement();
value.SetWallSectionHitPointsRatioAtIndex(0, 0);
```

## 参见

- [完整类目录](../catalog)