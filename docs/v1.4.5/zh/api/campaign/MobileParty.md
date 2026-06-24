<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobileParty`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/MobileParty](/versions/MobileParty)
<!-- END BREADCRUMB -->
# MobileParty

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `CampaignObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/MobileParty.cs`

## 概述

`MobileParty` 位于 `TaleWorlds.CampaignSystem.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `LastVisitedSettlement` | `public Settlement LastVisitedSettlement { get; }` |
| `Bearing` | `public Vec2 Bearing { get; }` |
| `HasLandNavigationCapability` | `public bool HasLandNavigationCapability { get; }` |
| `Aggressiveness` | `public float Aggressiveness { get; set; }` |
| `Banner` | `public Banner Banner { get; }` |
| `ArmyPositionAdder` | `public Vec2 ArmyPositionAdder { get; }` |
| `Objective` | `public PartyObjective Objective { get; }` |
| `Ai` | `public MobilePartyAi Ai { get; }` |
| `Party` | `public PartyBase Party { get; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsInRaftState` | `public bool IsInRaftState { get; set; }` |
| `ThinkParamsCache` | `public PartyThinkParams ThinkParamsCache { get; }` |
| `Speed` | `public float Speed { get; }` |
| `SpeedExplained` | `public ExplainedNumber SpeedExplained { get; }` |
| `ShortTermBehavior` | `public AiBehavior ShortTermBehavior { get; }` |
| `IsPartyTradeActive` | `public bool IsPartyTradeActive { get; }` |
| `PartyTradeGold` | `public int PartyTradeGold { get; set; }` |
| `PartyTradeTaxGold` | `public int PartyTradeTaxGold { get; }` |
| `StationaryStartTime` | `public CampaignTime StationaryStartTime { get; }` |
| `VersionNo` | `public int VersionNo { get; }` |
| `ShouldJoinPlayerBattles` | `public bool ShouldJoinPlayerBattles { get; set; }` |
| `IsDisbanding` | `public bool IsDisbanding { get; set; }` |
| `NavigationCapability` | `public NavigationType NavigationCapability { get; }` |
| `IsCurrentlyAtSea` | `public bool IsCurrentlyAtSea { get; set; }` |
| `IsNavalVisualDirty` | `public bool IsNavalVisualDirty { get; }` |
| `IsTargetingPort` | `public bool IsTargetingPort { get; }` |
| `Anchor` | `public AnchorPoint Anchor { get; }` |
| `EndPositionForNavigationTransition` | `public CampaignVec2 EndPositionForNavigationTransition { get; }` |
| `NavigationTransitionStartTime` | `public CampaignTime NavigationTransitionStartTime { get; }` |
| `NavigationTransitionDuration` | `public CampaignTime NavigationTransitionDuration { get; }` |
| `DesiredAiNavigationType` | `public NavigationType DesiredAiNavigationType { get; set; }` |
| `CurrentSettlement` | `public Settlement CurrentSettlement { get; set; }` |
| `HomeSettlement` | `public Settlement HomeSettlement { get; }` |
| `AttachedTo` | `public MobileParty AttachedTo { get; set; }` |
| `Army` | `public Army Army { get; set; }` |
| `BesiegerCamp` | `public BesiegerCamp BesiegerCamp { get; set; }` |
| `DefaultBehavior` | `public AiBehavior DefaultBehavior { get; }` |
| `TargetPosition` | `public CampaignVec2 TargetPosition { get; set; }` |
| `TargetParty` | `public MobileParty TargetParty { get; set; }` |
| `EffectiveScout` | `public Hero EffectiveScout { get; }` |
| `EffectiveQuartermaster` | `public Hero EffectiveQuartermaster { get; }` |
| `EffectiveEngineer` | `public Hero EffectiveEngineer { get; }` |
| `EffectiveSurgeon` | `public Hero EffectiveSurgeon { get; }` |
| `EffectiveFirstMate` | `public Hero EffectiveFirstMate { get; }` |
| `EffectiveNavigator` | `public Hero EffectiveNavigator { get; }` |
| `RecentEventsMorale` | `public float RecentEventsMorale { get; set; }` |
| `TotalWeightCarried` | `public float TotalWeightCarried { get; }` |
| `MapEventSide` | `public MapEventSide MapEventSide { get; set; }` |
| `Morale` | `public float Morale { get; }` |
| `FoodChange` | `public float FoodChange { get; }` |
| `ActualClan` | `public Clan ActualClan { get; set; }` |
| `FoodChangeExplained` | `public ExplainedNumber FoodChangeExplained { get; }` |
| `PathBegin` | `public int PathBegin { get; }` |
| `ForceAiNoPathMode` | `public bool ForceAiNoPathMode { get; set; }` |
| `EventPositionAdder` | `public Vec2 EventPositionAdder { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `Position` | `public CampaignVec2 Position { get; set; }` |
| `IsInspected` | `public bool IsInspected { get; set; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `ArmyName` | `public TextObject ArmyName { get; }` |
| `IsEngaging` | `public bool IsEngaging { get; }` |
| `PartySizeRatio` | `public float PartySizeRatio { get; }` |
| `IsMoving` | `public bool IsMoving { get; }` |
| `ShouldBeIgnored` | `public bool ShouldBeIgnored { get; }` |
| `IsMilitia` | `public bool IsMilitia { get; }` |
| `IsLordParty` | `public bool IsLordParty { get; }` |
| `IsVillager` | `public bool IsVillager { get; }` |
| `IsCaravan` | `public bool IsCaravan { get; }` |
| `IsPatrolParty` | `public bool IsPatrolParty { get; }` |
| `IsGarrison` | `public bool IsGarrison { get; }` |
| `IsCustomParty` | `public bool IsCustomParty { get; }` |
| `IsBandit` | `public bool IsBandit { get; }` |
| `IsBanditBossParty` | `public bool IsBanditBossParty { get; }` |
| `AvoidHostileActions` | `public bool AvoidHostileActions { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### SetLandNavigationAccess
`public void SetLandNavigationAccess(bool access)`

**用途 / Purpose:** 设置 `land navigation access` 的值或状态。

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### HasLimitedWage
`public bool HasLimitedWage()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `limited wage`。

### GetAvailableWageBudget
`public int GetAvailableWageBudget()`

**用途 / Purpose:** 获取 `available wage budget` 的当前值。

### IsWageLimitExceeded
`public bool IsWageLimitExceeded()`

**用途 / Purpose:** 处理 `is wage limit exceeded` 相关逻辑。

### SetWagePaymentLimit
`public void SetWagePaymentLimit(int newLimit)`

**用途 / Purpose:** 设置 `wage payment limit` 的值或状态。

### SetNavalVisualAsDirty
`public void SetNavalVisualAsDirty()`

**用途 / Purpose:** 设置 `naval visual as dirty` 的值或状态。

### OnNavalVisualsUpdated
`public void OnNavalVisualsUpdated()`

**用途 / Purpose:** 当 `naval visuals updated` 事件触发时调用此方法。

### SetSailAtPosition
`public void SetSailAtPosition(CampaignVec2 position)`

**用途 / Purpose:** 设置 `sail at position` 的值或状态。

### DisembarkToPosition
`public void DisembarkToPosition(CampaignVec2 position)`

**用途 / Purpose:** 处理 `disembark to position` 相关逻辑。

### CancelNavigationTransition
`public void CancelNavigationTransition()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel navigation transition`。

### ChangeIsCurrentlyAtSeaCheat
`public void ChangeIsCurrentlyAtSeaCheat()`

**用途 / Purpose:** 处理 `change is currently at sea cheat` 相关逻辑。

### SetCustomHomeSettlement
`public void SetCustomHomeSettlement(Settlement customHomeSettlement)`

**用途 / Purpose:** 设置 `custom home settlement` 的值或状态。

### SetTargetSettlement
`public void SetTargetSettlement(Settlement settlement, bool isTargetingPort)`

**用途 / Purpose:** 设置 `target settlement` 的值或状态。

### SetPartyScout
`public void SetPartyScout(Hero hero)`

**用途 / Purpose:** 设置 `party scout` 的值或状态。

### SetPartyQuartermaster
`public void SetPartyQuartermaster(Hero hero)`

**用途 / Purpose:** 设置 `party quartermaster` 的值或状态。

### SetPartyEngineer
`public void SetPartyEngineer(Hero hero)`

**用途 / Purpose:** 设置 `party engineer` 的值或状态。

### SetPartySurgeon
`public void SetPartySurgeon(Hero hero)`

**用途 / Purpose:** 设置 `party surgeon` 的值或状态。

### SetPartyFirstMate
`public void SetPartyFirstMate(Hero hero)`

**用途 / Purpose:** 设置 `party first mate` 的值或状态。

### SetPartyNavigator
`public void SetPartyNavigator(Hero hero)`

**用途 / Purpose:** 设置 `party navigator` 的值或状态。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ChangePartyLeader
`public void ChangePartyLeader(Hero newLeader)`

**用途 / Purpose:** 处理 `change party leader` 相关逻辑。

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty engagingParty)`

**用途 / Purpose:** 当 `party interaction` 事件触发时调用此方法。

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 设置 `position after map change` 的值或状态。

### RemovePartyLeader
`public void RemovePartyLeader()`

**用途 / Purpose:** 从当前集合/状态中移除 `party leader`。

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** 处理 `check positions for map change and update if needed` 相关逻辑。

### CheckAiForMapChangeAndUpdateIfNeeded
`public void CheckAiForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** 处理 `check ai for map change and update if needed` 相关逻辑。

### MovePartyToTheClosestLand
`public void MovePartyToTheClosestLand()`

**用途 / Purpose:** 处理 `move party to the closest land` 相关逻辑。

### GetBehaviorText
`public TextObject GetBehaviorText()`

**用途 / Purpose:** 获取 `behavior text` 的当前值。

### Initialize
`public override void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(CampaignVec2 position)`

**用途 / Purpose:** 初始化 `mobile party at position` 的状态、资源或绑定。

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(TroopRoster memberRoster, TroopRoster prisonerRoster, CampaignVec2 position, bool isNaval = false)`

**用途 / Purpose:** 初始化 `mobile party at position` 的状态、资源或绑定。

### InitializeMobilePartyAroundPosition
`public void InitializeMobilePartyAroundPosition(TroopRoster memberRoster, TroopRoster prisonerRoster, CampaignVec2 position, float spawnRadius, float minSpawnRadius = 0f, bool isNaval = false)`

**用途 / Purpose:** 初始化 `mobile party around position` 的状态、资源或绑定。

### InitializeMobilePartyAtPosition
`public void InitializeMobilePartyAtPosition(PartyTemplateObject pt, CampaignVec2 position)`

**用途 / Purpose:** 初始化 `mobile party at position` 的状态、资源或绑定。

### InitializeMobilePartyAroundPosition
`public void InitializeMobilePartyAroundPosition(PartyTemplateObject pt, CampaignVec2 position, float spawnRadius, float minSpawnRadius = 0f)`

**用途 / Purpose:** 初始化 `mobile party around position` 的状态、资源或绑定。

### SetDisorganized
`public void SetDisorganized(bool isDisorganized)`

**用途 / Purpose:** 设置 `disorganized` 的值或状态。

### RecalculateShortTermBehavior
`public void RecalculateShortTermBehavior()`

**用途 / Purpose:** 处理 `recalculate short term behavior` 相关逻辑。

### IsFleeBehavior
`public static bool IsFleeBehavior(AiBehavior aiBehavior)`

**用途 / Purpose:** 处理 `is flee behavior` 相关逻辑。

### IsFleeing
`public bool IsFleeing()`

**用途 / Purpose:** 处理 `is fleeing` 相关逻辑。

### SetPartyUsedByQuest
`public void SetPartyUsedByQuest(bool isActivelyUsed)`

**用途 / Purpose:** 设置 `party used by quest` 的值或状态。

### IgnoreForHours
`public void IgnoreForHours(float hours)`

**用途 / Purpose:** 处理 `ignore for hours` 相关逻辑。

### IgnoreByOtherPartiesTill
`public void IgnoreByOtherPartiesTill(CampaignTime time)`

**用途 / Purpose:** 处理 `ignore by other parties till` 相关逻辑。

### SetAnchor
`public void SetAnchor(AnchorPoint anchor)`

**用途 / Purpose:** 设置 `anchor` 的值或状态。

### SetPartyObjective
`public void SetPartyObjective(PartyObjective objective)`

**用途 / Purpose:** 设置 `party objective` 的值或状态。

### UpdateVersionNo
`public void UpdateVersionNo()`

**用途 / Purpose:** 更新 `version no` 的状态或数据。

### IsSpotted
`public bool IsSpotted()`

**用途 / Purpose:** 处理 `is spotted` 相关逻辑。

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `element to member roster`。

### AddPrisoner
`public int AddPrisoner(CharacterObject element, int numberToAdd)`

**用途 / Purpose:** 向当前集合/状态中添加 `prisoner`。

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**用途 / Purpose:** 获取 `position as vec3` 的当前值。

### GetTotalLandStrengthWithFollowers
`public float GetTotalLandStrengthWithFollowers(bool includeNonAttachedArmyMembers = true)`

**用途 / Purpose:** 获取 `total land strength with followers` 的当前值。

### HasPerk
`public bool HasPerk(PerkObject perk, bool checkSecondaryRole = false)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `perk`。

### SetHeroPartyRole
`public void SetHeroPartyRole(Hero hero, PartyRole partyRole)`

**用途 / Purpose:** 设置 `hero party role` 的值或状态。

### RemoveAllPartyRolesOfHero
`public void RemoveAllPartyRolesOfHero(Hero hero)`

**用途 / Purpose:** 从当前集合/状态中移除 `all party roles of hero`。

### GetHeroPartyRoles
`public List<PartyRole> GetHeroPartyRoles(Hero hero)`

**用途 / Purpose:** 获取 `hero party roles` 的当前值。

### RemovePartyRoleOfHero
`public void RemovePartyRoleOfHero(Hero hero, PartyRole partyRole)`

**用途 / Purpose:** 从当前集合/状态中移除 `party role of hero`。

### RemoveOnePartyRoleOfHero
`public void RemoveOnePartyRoleOfHero(Hero hero)`

**用途 / Purpose:** 从当前集合/状态中移除 `one party role of hero`。

### GetRoleHolder
`public Hero GetRoleHolder(PartyRole partyRole)`

**用途 / Purpose:** 获取 `role holder` 的当前值。

### GetEffectiveRoleHolder
`public Hero GetEffectiveRoleHolder(PartyRole partyRole)`

**用途 / Purpose:** 获取 `effective role holder` 的当前值。

### GetNumDaysForFoodToLast
`public int GetNumDaysForFoodToLast()`

**用途 / Purpose:** 获取 `num days for food to last` 的当前值。

### RecalculateLongTermPath
`public bool RecalculateLongTermPath()`

**用途 / Purpose:** 处理 `recalculate long term path` 相关逻辑。

### GetRegionSwitchCostFromLandToSea
`public int GetRegionSwitchCostFromLandToSea()`

**用途 / Purpose:** 获取 `region switch cost from land to sea` 的当前值。

### GetRegionSwitchCostFromSeaToLand
`public int GetRegionSwitchCostFromSeaToLand()`

**用途 / Purpose:** 获取 `region switch cost from sea to land` 的当前值。

### SetMoveModeHold
`public void SetMoveModeHold()`

**用途 / Purpose:** 设置 `move mode hold` 的值或状态。

### SetMoveEngageParty
`public void SetMoveEngageParty(MobileParty party, NavigationType navigationType)`

**用途 / Purpose:** 设置 `move engage party` 的值或状态。

### SetMoveGoAroundParty
`public void SetMoveGoAroundParty(MobileParty party, NavigationType navigationType)`

**用途 / Purpose:** 设置 `move go around party` 的值或状态。

### SetMoveGoToSettlement
`public void SetMoveGoToSettlement(Settlement settlement, NavigationType navigationType, bool isTargetingThePort)`

**用途 / Purpose:** 设置 `move go to settlement` 的值或状态。

### SetMoveGoToPoint
`public void SetMoveGoToPoint(CampaignVec2 point, NavigationType navigationType)`

**用途 / Purpose:** 设置 `move go to point` 的值或状态。

### SetMoveToNearestLand
`public void SetMoveToNearestLand(Settlement settlement)`

**用途 / Purpose:** 设置 `move to nearest land` 的值或状态。

### SetMoveGoToInteractablePoint
`public void SetMoveGoToInteractablePoint(IInteractablePoint point, NavigationType navigationType)`

**用途 / Purpose:** 设置 `move go to interactable point` 的值或状态。

### SetMoveEscortParty
`public void SetMoveEscortParty(MobileParty mobileParty, NavigationType navigationType, bool isTargetingPort)`

**用途 / Purpose:** 设置 `move escort party` 的值或状态。

### SetMovePatrolAroundPoint
`public void SetMovePatrolAroundPoint(CampaignVec2 point, NavigationType navigationType)`

**用途 / Purpose:** 设置 `move patrol around point` 的值或状态。

### SetMovePatrolAroundSettlement
`public void SetMovePatrolAroundSettlement(Settlement settlement, NavigationType navigationType, bool isTargetingPort)`

**用途 / Purpose:** 设置 `move patrol around settlement` 的值或状态。

### SetMoveRaidSettlement
`public void SetMoveRaidSettlement(Settlement settlement, NavigationType navigationType, bool isTargetingPort)`

**用途 / Purpose:** 设置 `move raid settlement` 的值或状态。

### SetMoveBesiegeSettlement
`public void SetMoveBesiegeSettlement(Settlement settlement, NavigationType navigationType)`

**用途 / Purpose:** 设置 `move besiege settlement` 的值或状态。

### SetMoveDefendSettlement
`public void SetMoveDefendSettlement(Settlement settlement, bool isTargetingPort, NavigationType navigationType)`

**用途 / Purpose:** 设置 `move defend settlement` 的值或状态。

### StartFindingLocatablesAroundPosition
`public static LocatableSearchData<MobileParty> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`

**用途 / Purpose:** 处理 `start finding locatables around position` 相关逻辑。

### FindNextLocatable
`public static MobileParty FindNextLocatable(ref LocatableSearchData<MobileParty> data)`

**用途 / Purpose:** 处理 `find next locatable` 相关逻辑。

### UpdateLocator
`public static void UpdateLocator(MobileParty party)`

**用途 / Purpose:** 更新 `locator` 的状态或数据。

### ComputeIsWaiting
`public bool ComputeIsWaiting()`

**用途 / Purpose:** 处理 `compute is waiting` 相关逻辑。

### InitializePartyTrade
`public void InitializePartyTrade(int initialGold)`

**用途 / Purpose:** 初始化 `party trade` 的状态、资源或绑定。

### AddTaxGold
`public void AddTaxGold(int amount)`

**用途 / Purpose:** 向当前集合/状态中添加 `tax gold`。

### CreateParty
`public static MobileParty CreateParty(string stringId, PartyComponent component)`

**用途 / Purpose:** 创建一个 `party` 实例或对象。

### SetPartyComponent
`public void SetPartyComponent(PartyComponent partyComponent, bool firstTimePartyComponentCreation = true)`

**用途 / Purpose:** 设置 `party component` 的值或状态。

### UpdatePartyComponentFlags
`public void UpdatePartyComponentFlags()`

**用途 / Purpose:** 更新 `party component flags` 的状态或数据。

## 使用示例

```csharp
var value = new MobileParty();
value.ToString();
```

## 参见

- [完整类目录](../catalog)