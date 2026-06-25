---
title: "Campaign"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Campaign`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Campaign

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Campaign : GameType`
**Base:** `GameType`
**File:** `TaleWorlds.CampaignSystem/Campaign.cs`

## 概述

`Campaign` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapDiagonal` | `public static float MapDiagonal { get; }` |
| `MapDiagonalSquared` | `public static float MapDiagonalSquared { get; }` |
| `MapMinimumPosition` | `public static Vec2 MapMinimumPosition { get; }` |
| `MapMaximumPosition` | `public static Vec2 MapMaximumPosition { get; }` |
| `MapMaximumHeight` | `public static float MapMaximumHeight { get; }` |
| `AverageWage` | `public float AverageWage { get; }` |
| `NewGameVersion` | `public string NewGameVersion { get; }` |
| `PreviouslyUsedModules` | `public MBReadOnlyList<string> PreviouslyUsedModules { get; }` |
| `UsedGameVersions` | `public MBReadOnlyList<string> UsedGameVersions { get; }` |
| `EnabledCheatsBefore` | `public bool EnabledCheatsBefore { get; }` |
| `PlatformID` | `public string PlatformID { get; }` |
| `UniqueGameId` | `public string UniqueGameId { get; }` |
| `SaveHandler` | `public SaveHandler SaveHandler { get; }` |
| `SupportsSaving` | `public override bool SupportsSaving { get; }` |
| `CampaignObjectManager` | `public CampaignObjectManager CampaignObjectManager { get; }` |
| `IsDevelopment` | `public override bool IsDevelopment { get; set; }` |
| `IsCraftingEnabled` | `public bool IsCraftingEnabled { get; set; }` |
| `IsBannerEditorEnabled` | `public bool IsBannerEditorEnabled { get; set; }` |
| `IsFaceGenEnabled` | `public bool IsFaceGenEnabled { get; set; }` |
| `CampaignBehaviorManager` | `public ICampaignBehaviorManager CampaignBehaviorManager { get; }` |
| `QuestManager` | `public QuestManager QuestManager { get; }` |
| `IssueManager` | `public IssueManager IssueManager { get; }` |
| `FactionManager` | `public FactionManager FactionManager { get; }` |
| `CharacterRelationManager` | `public CharacterRelationManager CharacterRelationManager { get; }` |
| `Romance` | `public Romance Romance { get; }` |
| `PlayerCaptivity` | `public PlayerCaptivity PlayerCaptivity { get; }` |
| `CampaignMissionManager` | `public CampaignMission.ICampaignMissionManager CampaignMissionManager { get; set; }` |
| `SkillLevelingManager` | `public ISkillLevelingManager SkillLevelingManager { get; set; }` |
| `MapSceneCreator` | `public IMapSceneCreator MapSceneCreator { get; set; }` |
| `IsInventoryAccessibleAtMission` | `public override bool IsInventoryAccessibleAtMission { get; }` |
| `GameMenuCallbackManager` | `public GameMenuCallbackManager GameMenuCallbackManager { get; }` |
| `VisualCreator` | `public VisualCreator VisualCreator { get; }` |
| `MapStateData` | `public MapStateData MapStateData { get; }` |
| `DefaultPerks` | `public DefaultPerks DefaultPerks { get; }` |
| `DefaultTraits` | `public DefaultTraits DefaultTraits { get; }` |
| `DefaultPolicies` | `public DefaultPolicies DefaultPolicies { get; }` |
| `DefaultBuildingTypes` | `public DefaultBuildingTypes DefaultBuildingTypes { get; }` |
| `DefaultIssueEffects` | `public DefaultIssueEffects DefaultIssueEffects { get; }` |
| `DefaultItems` | `public DefaultItems DefaultItems { get; }` |
| `DefaultFigureheads` | `public DefaultFigureheads DefaultFigureheads { get; }` |
| `DefaultSiegeStrategies` | `public DefaultSiegeStrategies DefaultSiegeStrategies { get; }` |
| `DefaultSkillEffects` | `public DefaultSkillEffects DefaultSkillEffects { get; }` |
| `DefaultVillageTypes` | `public DefaultVillageTypes DefaultVillageTypes { get; }` |
| `DefaultFeats` | `public DefaultCulturalFeats DefaultFeats { get; }` |
| `EstimatedMaximumLordPartySpeedExceptPlayer` | `public float EstimatedMaximumLordPartySpeedExceptPlayer { get; set; }` |
| `EstimatedAverageLordPartySpeed` | `public float EstimatedAverageLordPartySpeed { get; set; }` |
| `EstimatedAverageCaravanPartySpeed` | `public float EstimatedAverageCaravanPartySpeed { get; set; }` |
| `EstimatedAverageVillagerPartySpeed` | `public float EstimatedAverageVillagerPartySpeed { get; set; }` |
| `EstimatedAverageBanditPartySpeed` | `public float EstimatedAverageBanditPartySpeed { get; set; }` |
| `EstimatedAverageLordPartyNavalSpeed` | `public float EstimatedAverageLordPartyNavalSpeed { get; set; }` |
| `EstimatedAverageCaravanPartyNavalSpeed` | `public float EstimatedAverageCaravanPartyNavalSpeed { get; set; }` |
| `EstimatedAverageVillagerPartyNavalSpeed` | `public float EstimatedAverageVillagerPartyNavalSpeed { get; }` |
| `EstimatedAverageBanditPartyNavalSpeed` | `public float EstimatedAverageBanditPartyNavalSpeed { get; }` |
| `TimeControlModeLock` | `public bool TimeControlModeLock { get; }` |
| `TimeControlMode` | `public CampaignTimeControlMode TimeControlMode { get; set; }` |
| `IsMapTooltipLongForm` | `public bool IsMapTooltipLongForm { get; set; }` |
| `SpeedUpMultiplier` | `public float SpeedUpMultiplier { get; }` |
| `CampaignDt` | `public float CampaignDt { get; }` |
| `TrueSight` | `public bool TrueSight { get; }` |
| `Current` | `public static Campaign Current { get; }` |
| `GameMode` | `public CampaignGameMode GameMode { get; }` |
| `PlayerProgress` | `public float PlayerProgress { get; }` |
| `GameMenuManager` | `public GameMenuManager GameMenuManager { get; }` |
| `Models` | `public GameModels Models { get; }` |
| `SandBoxManager` | `public SandBoxManager SandBoxManager { get; }` |
| `CampaignGameLoadingType` | `public Campaign.GameLoadingType CampaignGameLoadingType { get; }` |
| `SiegeEventManager` | `public SiegeEventManager SiegeEventManager { get; set; }` |
| `MapEventManager` | `public MapEventManager MapEventManager { get; set; }` |
| `MapMarkerManager` | `public MapMarkerManager MapMarkerManager { get; set; }` |
| `CurrentMenuContext` | `public MenuContext CurrentMenuContext { get; }` |
| `IsMainPartyWaiting` | `public bool IsMainPartyWaiting { get; }` |
| `MapSceneWrapper` | `public IMapScene MapSceneWrapper { get; set; }` |
| `PlayerEncounter` | `public PlayerEncounter PlayerEncounter { get; }` |
| `BarterManager` | `public BarterManager BarterManager { get; }` |
| `IsMainHeroDisguised` | `public bool IsMainHeroDisguised { get; set; }` |
| `DeadBattleEquipment` | `public Equipment DeadBattleEquipment { get; }` |
| `DeadCivilianEquipment` | `public Equipment DeadCivilianEquipment { get; }` |
| `DefaultStealthEquipment` | `public Equipment DefaultStealthEquipment { get; }` |
| `CurrentTime` | `public static float CurrentTime { get; }` |
| `CampaignEntityComponents` | `public MBReadOnlyList<CampaignEntityComponent> CampaignEntityComponents { get; }` |
| `AliveHeroes` | `public MBReadOnlyList<Hero> AliveHeroes { get; }` |
| `DeadOrDisabledHeroes` | `public MBReadOnlyList<Hero> DeadOrDisabledHeroes { get; }` |
| `MobileParties` | `public MBReadOnlyList<MobileParty> MobileParties { get; }` |
| `CaravanParties` | `public MBReadOnlyList<MobileParty> CaravanParties { get; }` |
| `PatrolParties` | `public MBReadOnlyList<MobileParty> PatrolParties { get; }` |
| `VillagerParties` | `public MBReadOnlyList<MobileParty> VillagerParties { get; }` |
| `MilitiaParties` | `public MBReadOnlyList<MobileParty> MilitiaParties { get; }` |
| `GarrisonParties` | `public MBReadOnlyList<MobileParty> GarrisonParties { get; }` |
| `CustomParties` | `public MBReadOnlyList<MobileParty> CustomParties { get; }` |
| `LordParties` | `public MBReadOnlyList<MobileParty> LordParties { get; }` |
| `BanditParties` | `public MBReadOnlyList<MobileParty> BanditParties { get; }` |
| `PartiesWithoutPartyComponent` | `public MBReadOnlyList<MobileParty> PartiesWithoutPartyComponent { get; }` |
| `Settlements` | `public MBReadOnlyList<Settlement> Settlements { get; }` |
| `Factions` | `public IEnumerable<IFaction> Factions { get; }` |
| `Kingdoms` | `public MBReadOnlyList<Kingdom> Kingdoms { get; }` |
| `Clans` | `public MBReadOnlyList<Clan> Clans { get; }` |
| `Characters` | `public MBReadOnlyList<CharacterObject> Characters { get; }` |
| `Workshops` | `public MBReadOnlyList<WorkshopType> Workshops { get; }` |
| `ItemModifiers` | `public MBReadOnlyList<ItemModifier> ItemModifiers { get; }` |
| `ItemModifierGroups` | `public MBReadOnlyList<ItemModifierGroup> ItemModifierGroups { get; }` |
| `Concepts` | `public MBReadOnlyList<Concept> Concepts { get; }` |
| `MainParty` | `public MobileParty MainParty { get; }` |
| `CameraFollowParty` | `public PartyBase CameraFollowParty { get; set; }` |
| `CampaignInformationManager` | `public CampaignInformationManager CampaignInformationManager { get; set; }` |
| `VisualTrackerManager` | `public VisualTrackerManager VisualTrackerManager { get; set; }` |
| `LogEntryHistory` | `public LogEntryHistory LogEntryHistory { get; }` |
| `EncyclopediaManager` | `public EncyclopediaManager EncyclopediaManager { get; }` |
| `ConversationManager` | `public ConversationManager ConversationManager { get; }` |
| `IsDay` | `public bool IsDay { get; }` |
| `IsNight` | `public bool IsNight { get; }` |
| `IsPartyWindowAccessibleAtMission` | `public override bool IsPartyWindowAccessibleAtMission { get; }` |
| `PlayerTraitDeveloper` | `public PropertyOwner<PropertyObject> PlayerTraitDeveloper { get; }` |

## 主要方法

### GetAverageDistanceBetweenClosestTwoTownsWithNavigationType
`public float GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 获取 `average distance between closest two towns with navigation type` 的当前值。

### InitializeMainParty
`public void InitializeMainParty()`

**用途 / Purpose:** 初始化 `main party` 的状态、资源或绑定。

### WaitAsyncTasks
`public void WaitAsyncTasks()`

**用途 / Purpose:** 处理 `wait async tasks` 相关逻辑。

### GetSimplifiedTimeControlMode
`public CampaignTimeControlMode GetSimplifiedTimeControlMode()`

**用途 / Purpose:** 获取 `simplified time control mode` 的当前值。

### OnGameOver
`public void OnGameOver()`

**用途 / Purpose:** 当 `game over` 事件触发时调用此方法。

### SetTimeSpeed
`public void SetTimeSpeed(int speed)`

**用途 / Purpose:** 设置 `time speed` 的值或状态。

### LateAITick
`public static void LateAITick()`

**用途 / Purpose:** 处理 `late a i tick` 相关逻辑。

### AddCampaignBehaviorManager
`public void AddCampaignBehaviorManager(ICampaignBehaviorManager manager)`

**用途 / Purpose:** 向当前集合/状态中添加 `campaign behavior manager`。

### OnDestroy
`public override void OnDestroy()`

**用途 / Purpose:** 当 `destroy` 事件触发时调用此方法。

### InitializeSinglePlayerReferences
`public void InitializeSinglePlayerReferences()`

**用途 / Purpose:** 初始化 `single player references` 的状态、资源或绑定。

### InitializeGamePlayReferences
`public void InitializeGamePlayReferences()`

**用途 / Purpose:** 初始化 `game play references` 的状态、资源或绑定。

### SetLoadingParameters
`public void SetLoadingParameters(Campaign.GameLoadingType gameLoadingType)`

**用途 / Purpose:** 设置 `loading parameters` 的值或状态。

### AddCampaignEventReceiver
`public void AddCampaignEventReceiver(CampaignEventReceiver receiver)`

**用途 / Purpose:** 向当前集合/状态中添加 `campaign event receiver`。

### OnMissionIsStarting
`public override void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`

**用途 / Purpose:** 当 `mission is starting` 事件触发时调用此方法。

### InitializeParameters
`public override void InitializeParameters()`

**用途 / Purpose:** 初始化 `parameters` 的状态、资源或绑定。

### SetTimeControlModeLock
`public void SetTimeControlModeLock(bool isLocked)`

**用途 / Purpose:** 设置 `time control mode lock` 的值或状态。

### OnPlayerCharacterChanged
`public void OnPlayerCharacterChanged(out bool isMainPartyChanged)`

**用途 / Purpose:** 当 `player character changed` 事件触发时调用此方法。

### SetPlayerFormationPreference
`public void SetPlayerFormationPreference(CharacterObject character, FormationClass formation)`

**用途 / Purpose:** 设置 `player formation preference` 的值或状态。

### OnStateChanged
`public override void OnStateChanged(GameState oldState)`

**用途 / Purpose:** 当 `state changed` 事件触发时调用此方法。

### UnlockFigurehead
`public void UnlockFigurehead(Figurehead figurehead)`

**用途 / Purpose:** 处理 `unlock figurehead` 相关逻辑。

## 使用示例

```csharp
var value = new Campaign();
value.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(navigationType);
```

## 参见

- [完整类目录](../catalog)