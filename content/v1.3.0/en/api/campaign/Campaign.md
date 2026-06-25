---
title: "Campaign"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Campaign`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Campaign

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Campaign : GameType`
**Base:** `GameType`
**File:** `TaleWorlds.CampaignSystem/Campaign.cs`

## Overview

`Campaign` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### GetAverageDistanceBetweenClosestTwoTownsWithNavigationType
`public float GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(MobileParty.NavigationType navigationType)`

**Purpose:** Gets the current value of `average distance between closest two towns with navigation type`.

### InitializeMainParty
`public void InitializeMainParty()`

**Purpose:** Initializes the state, resources, or bindings for `main party`.

### WaitAsyncTasks
`public void WaitAsyncTasks()`

**Purpose:** Handles logic related to `wait async tasks`.

### GetSimplifiedTimeControlMode
`public CampaignTimeControlMode GetSimplifiedTimeControlMode()`

**Purpose:** Gets the current value of `simplified time control mode`.

### OnGameOver
`public void OnGameOver()`

**Purpose:** Called when the `game over` event is raised.

### SetTimeSpeed
`public void SetTimeSpeed(int speed)`

**Purpose:** Sets the value or state of `time speed`.

### LateAITick
`public static void LateAITick()`

**Purpose:** Handles logic related to `late a i tick`.

### AddCampaignBehaviorManager
`public void AddCampaignBehaviorManager(ICampaignBehaviorManager manager)`

**Purpose:** Adds `campaign behavior manager` to the current collection or state.

### OnDestroy
`public override void OnDestroy()`

**Purpose:** Called when the `destroy` event is raised.

### InitializeSinglePlayerReferences
`public void InitializeSinglePlayerReferences()`

**Purpose:** Initializes the state, resources, or bindings for `single player references`.

### InitializeGamePlayReferences
`public void InitializeGamePlayReferences()`

**Purpose:** Initializes the state, resources, or bindings for `game play references`.

### SetLoadingParameters
`public void SetLoadingParameters(Campaign.GameLoadingType gameLoadingType)`

**Purpose:** Sets the value or state of `loading parameters`.

### AddCampaignEventReceiver
`public void AddCampaignEventReceiver(CampaignEventReceiver receiver)`

**Purpose:** Adds `campaign event receiver` to the current collection or state.

### OnMissionIsStarting
`public override void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`

**Purpose:** Called when the `mission is starting` event is raised.

### InitializeParameters
`public override void InitializeParameters()`

**Purpose:** Initializes the state, resources, or bindings for `parameters`.

### SetTimeControlModeLock
`public void SetTimeControlModeLock(bool isLocked)`

**Purpose:** Sets the value or state of `time control mode lock`.

### OnPlayerCharacterChanged
`public void OnPlayerCharacterChanged(out bool isMainPartyChanged)`

**Purpose:** Called when the `player character changed` event is raised.

### SetPlayerFormationPreference
`public void SetPlayerFormationPreference(CharacterObject character, FormationClass formation)`

**Purpose:** Sets the value or state of `player formation preference`.

### OnStateChanged
`public override void OnStateChanged(GameState oldState)`

**Purpose:** Called when the `state changed` event is raised.

### UnlockFigurehead
`public void UnlockFigurehead(Figurehead figurehead)`

**Purpose:** Handles logic related to `unlock figurehead`.

## Usage Example

```csharp
var value = new Campaign();
value.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(navigationType);
```

## See Also

- [Complete Class Catalog](../catalog)