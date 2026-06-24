<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEventSide`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventSide

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventSide`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEventSide.cs`

## 概述

`MapEventSide` 位于 `TaleWorlds.CampaignSystem.MapEvents`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.MapEvents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### CountTroops
`public int CountTroops(Func<FlattenedTroopRosterElement, bool> pred)`

**用途 / Purpose:** 处理 `count troops` 相关逻辑。

### GetTotalHealthyTroopCountOfSide
`public int GetTotalHealthyTroopCountOfSide()`

**用途 / Purpose:** 获取 `total healthy troop count of side` 的当前值。

### GetTotalHealthyHeroCountOfSide
`public int GetTotalHealthyHeroCountOfSide()`

**用途 / Purpose:** 获取 `total healthy hero count of side` 的当前值。

### RecalculateMemberCountOfSide
`public int RecalculateMemberCountOfSide()`

**用途 / Purpose:** 处理 `recalculate member count of side` 相关逻辑。

### RecalculateStrengthOfSide
`public float RecalculateStrengthOfSide()`

**用途 / Purpose:** 处理 `recalculate strength of side` 相关逻辑。

### IsMainPartyAmongParties
`public bool IsMainPartyAmongParties()`

**用途 / Purpose:** 处理 `is main party among parties` 相关逻辑。

### GetPlayerPartyContributionRate
`public float GetPlayerPartyContributionRate()`

**用途 / Purpose:** 获取 `player party contribution rate` 的当前值。

### CalculateRenownAndInfluenceValues
`public void CalculateRenownAndInfluenceValues(float strengthOfSide)`

**用途 / Purpose:** 处理 `calculate renown and influence values` 相关逻辑。

### DistributeRenownAndInfluence
`public virtual void DistributeRenownAndInfluence(MapEventResultExplainer resultExplainers = null)`

**用途 / Purpose:** 处理 `distribute renown and influence` 相关逻辑。

### ApplyRenownAndInfluenceChanges
`public void ApplyRenownAndInfluenceChanges()`

**用途 / Purpose:** 将 `renown and influence changes` 应用到当前对象。

### GetSideMorale
`public float GetSideMorale()`

**用途 / Purpose:** 获取 `side morale` 的当前值。

### ApplyFinalRewardsAndChanges
`public void ApplyFinalRewardsAndChanges()`

**用途 / Purpose:** 将 `final rewards and changes` 应用到当前对象。

### HandleMapEventEnd
`public void HandleMapEventEnd()`

**用途 / Purpose:** 处理 `map event end` 事件或回调。

### AddHeroDamage
`public static void AddHeroDamage(Hero character, int damage)`

**用途 / Purpose:** 向当前集合/状态中添加 `hero damage`。

### AllocateShips
`public void AllocateShips()`

**用途 / Purpose:** 处理 `allocate ships` 相关逻辑。

### AllocateSiegeEngines
`public void AllocateSiegeEngines()`

**用途 / Purpose:** 处理 `allocate siege engines` 相关逻辑。

### AllocateTroops
`public void AllocateTroops(ref List<UniqueTroopDescriptor> troopsList, int number = -1, Func<UniqueTroopDescriptor, MapEventParty, bool> customAllocationConditions = null)`

**用途 / Purpose:** 处理 `allocate troops` 相关逻辑。

### GetAllTroops
`public void GetAllTroops(ref List<UniqueTroopDescriptor> troopsList)`

**用途 / Purpose:** 获取 `all troops` 的当前值。

### GetAllocatedTroop
`public CharacterObject GetAllocatedTroop(UniqueTroopDescriptor troopDesc0)`

**用途 / Purpose:** 获取 `allocated troop` 的当前值。

### GetReadyTroop
`public CharacterObject GetReadyTroop(UniqueTroopDescriptor troopDesc0)`

**用途 / Purpose:** 获取 `ready troop` 的当前值。

### GetAllocatedTroopParty
`public PartyBase GetAllocatedTroopParty(UniqueTroopDescriptor troopDescriptor)`

**用途 / Purpose:** 获取 `allocated troop party` 的当前值。

### GetReadyTroopParty
`public PartyBase GetReadyTroopParty(UniqueTroopDescriptor troopDescriptor)`

**用途 / Purpose:** 获取 `ready troop party` 的当前值。

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopDesc1)`

**用途 / Purpose:** 当 `troop wounded` 事件触发时调用此方法。

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopDesc1)`

**用途 / Purpose:** 当 `troop killed` 事件触发时调用此方法。

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopDesc1, bool isOrderRetreat)`

**用途 / Purpose:** 当 `troop routed` 事件触发时调用此方法。

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor troopDesc1, CharacterObject attackedTroop, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon, bool isSimulatedHit)`

**用途 / Purpose:** 当 `troop score hit` 事件触发时调用此方法。

### OnShipScoreHit
`public void OnShipScoreHit(Ship strikerShip, Ship struckShip, SiegeEngineType siegeEngine, int damage, bool isFinishingStrike)`

**用途 / Purpose:** 当 `ship score hit` 事件触发时调用此方法。

### OnShipDamaged
`public void OnShipDamaged(Ship struckShip, SiegeEngineType siegeEngine, int damage)`

**用途 / Purpose:** 当 `ship damaged` 事件触发时调用此方法。

### MakeReadyForSimulation
`public void MakeReadyForSimulation(FlattenedTroopRoster priorTroops, int sizeOfSide = -1)`

**用途 / Purpose:** 处理 `make ready for simulation` 相关逻辑。

### MakeReadyForMission
`public void MakeReadyForMission(FlattenedTroopRoster priorTroops)`

**用途 / Purpose:** 处理 `make ready for mission` 相关逻辑。

### EndSimulation
`public void EndSimulation()`

**用途 / Purpose:** 处理 `end simulation` 相关逻辑。

### ItemRosterForPlayerLootShare
`public ItemRoster ItemRosterForPlayerLootShare(PartyBase playerParty)`

**用途 / Purpose:** 处理 `item roster for player loot share` 相关逻辑。

### MemberRosterForPlayerLootShare
`public TroopRoster MemberRosterForPlayerLootShare(PartyBase playerParty)`

**用途 / Purpose:** 处理 `member roster for player loot share` 相关逻辑。

### PrisonerRosterForPlayerLootShare
`public TroopRoster PrisonerRosterForPlayerLootShare(PartyBase playerParty)`

**用途 / Purpose:** 处理 `prisoner roster for player loot share` 相关逻辑。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### SelectRandomSimulationTroop
`public UniqueTroopDescriptor SelectRandomSimulationTroop()`

**用途 / Purpose:** 处理 `select random simulation troop` 相关逻辑。

### GetRandomSimulationSiegeEngine
`public ValueTuple<SiegeEngineType, Ship> GetRandomSimulationSiegeEngine()`

**用途 / Purpose:** 获取 `random simulation siege engine` 的当前值。

### GetRandomSimulationShip
`public Ship GetRandomSimulationShip()`

**用途 / Purpose:** 获取 `random simulation ship` 的当前值。

### Surrender
`public void Surrender()`

**用途 / Purpose:** 处理 `surrender` 相关逻辑。

### Route
`public void Route()`

**用途 / Purpose:** 处理 `route` 相关逻辑。

## 使用示例

```csharp
var value = new MapEventSide();
value.CountTroops(func<FlattenedTroopRosterElement, false);
```

## 参见

- [完整类目录](../catalog)