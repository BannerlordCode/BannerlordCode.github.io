---
title: "Campaign"
description: "Auto-generated class reference for Campaign."
---
# Campaign

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Campaign : GameType`
**Base:** `GameType`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Campaign.cs`

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
| `EnabledCheatsBefore` | `public bool EnabledCheatsBefore { get; }` |
| `PlatformID` | `public string PlatformID { get; }` |
| `UniqueGameId` | `public string UniqueGameId { get; }` |
| `SaveHandler` | `public SaveHandler SaveHandler { get; }` |
| `CampaignObjectManager` | `public CampaignObjectManager CampaignObjectManager { get; }` |
| `IsCraftingEnabled` | `public bool IsCraftingEnabled { get; set; }` |
| `IsBannerEditorEnabled` | `public bool IsBannerEditorEnabled { get; set; }` |
| `IsFaceGenEnabled` | `public bool IsFaceGenEnabled { get; }` |
| `QuestManager` | `public QuestManager QuestManager { get; }` |
| `IssueManager` | `public IssueManager IssueManager { get; }` |
| `FactionManager` | `public FactionManager FactionManager { get; }` |
| `CharacterRelationManager` | `public CharacterRelationManager CharacterRelationManager { get; }` |
| `Romance` | `public Romance Romance { get; }` |
| `PlayerCaptivity` | `public PlayerCaptivity PlayerCaptivity { get; }` |
| `CampaignMissionManager` | `public CampaignMission.ICampaignMissionManager CampaignMissionManager { get; set; }` |
| `SkillLevelingManager` | `public ISkillLevelingManager SkillLevelingManager { get; set; }` |
| `MapSceneCreator` | `public IMapSceneCreator MapSceneCreator { get; set; }` |
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
| `TrueSight` | `public bool TrueSight { get; }` |
| `Current` | `public static Campaign Current { get; }` |
| `GameMode` | `public CampaignGameMode GameMode { get; }` |
| `PlayerProgress` | `public float PlayerProgress { get; }` |
| `GameMenuManager` | `public GameMenuManager GameMenuManager { get; }` |
| `SandBoxManager` | `public SandBoxManager SandBoxManager { get; }` |
| `SiegeEventManager` | `public SiegeEventManager SiegeEventManager { get; set; }` |
| `MapEventManager` | `public MapEventManager MapEventManager { get; }` |
| `MapMarkerManager` | `public MapMarkerManager MapMarkerManager { get; }` |
| `CurrentMenuContext` | `public MenuContext CurrentMenuContext { get; }` |
| `IsMainPartyWaiting` | `public bool IsMainPartyWaiting { get; }` |
| `PlayerEncounter` | `public PlayerEncounter PlayerEncounter { get; }` |
| `BarterManager` | `public BarterManager BarterManager { get; }` |
| `IsMainHeroDisguised` | `public bool IsMainHeroDisguised { get; set; }` |
| `DeadBattleEquipment` | `public Equipment DeadBattleEquipment { get; }` |
| `DeadCivilianEquipment` | `public Equipment DeadCivilianEquipment { get; }` |
| `DefaultStealthEquipment` | `public Equipment DefaultStealthEquipment { get; }` |
| `MainParty` | `public MobileParty MainParty { get; }` |
| `CameraFollowParty` | `public PartyBase CameraFollowParty { get; set; }` |
| `CampaignInformationManager` | `public CampaignInformationManager CampaignInformationManager { get; set; }` |
| `VisualTrackerManager` | `public VisualTrackerManager VisualTrackerManager { get; }` |
| `EncyclopediaManager` | `public EncyclopediaManager EncyclopediaManager { get; }` |
| `ConversationManager` | `public ConversationManager ConversationManager { get; }` |
| `PlayerTraitDeveloper` | `public PropertyOwner<PropertyObject> PlayerTraitDeveloper { get; }` |

## Key Methods

### GetAverageDistanceBetweenClosestTwoTownsWithNavigationType
`public float GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(MobileParty.NavigationType navigationType)`

**Purpose:** Reads and returns the `average distance between closest two towns with navigation type` value held by the current object.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
var result = campaign.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(navigationType);
```

### InitializeMainParty
`public void InitializeMainParty()`

**Purpose:** Prepares the resources, state, or bindings required by `main party`.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.InitializeMainParty();
```

### WaitAsyncTasks
`public void WaitAsyncTasks()`

**Purpose:** Pauses the current flow until the `async tasks` condition is met.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.WaitAsyncTasks();
```

### GetSimplifiedTimeControlMode
`public CampaignTimeControlMode GetSimplifiedTimeControlMode()`

**Purpose:** Reads and returns the `simplified time control mode` value held by the current object.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
var result = campaign.GetSimplifiedTimeControlMode();
```

### OnGameOver
`public void OnGameOver()`

**Purpose:** Invoked when the `game over` event is raised.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.OnGameOver();
```

### SetTimeSpeed
`public void SetTimeSpeed(int speed)`

**Purpose:** Assigns a new value to `time speed` and updates the object's internal state.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.SetTimeSpeed(0);
```

### LateAITick
`public static void LateAITick()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Campaign.LateAITick();
```

### AddCampaignBehaviorManager
`public void AddCampaignBehaviorManager(ICampaignBehaviorManager manager)`

**Purpose:** Adds `campaign behavior manager` to the current collection or state.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.AddCampaignBehaviorManager(manager);
```

### OnDestroy
`public override void OnDestroy()`

**Purpose:** Invoked when the `destroy` event is raised.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.OnDestroy();
```

### InitializeSinglePlayerReferences
`public void InitializeSinglePlayerReferences()`

**Purpose:** Prepares the resources, state, or bindings required by `single player references`.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.InitializeSinglePlayerReferences();
```

### InitializeGamePlayReferences
`public void InitializeGamePlayReferences()`

**Purpose:** Prepares the resources, state, or bindings required by `game play references`.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.InitializeGamePlayReferences();
```

### SetLoadingParameters
`public void SetLoadingParameters(GameLoadingType gameLoadingType)`

**Purpose:** Assigns a new value to `loading parameters` and updates the object's internal state.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.SetLoadingParameters(gameLoadingType);
```

### AddCampaignEventReceiver
`public void AddCampaignEventReceiver(CampaignEventReceiver receiver)`

**Purpose:** Adds `campaign event receiver` to the current collection or state.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.AddCampaignEventReceiver(receiver);
```

### OnMissionIsStarting
`public override void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`

**Purpose:** Invoked when the `mission is starting` event is raised.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.OnMissionIsStarting("example", rec);
```

### InitializeParameters
`public override void InitializeParameters()`

**Purpose:** Prepares the resources, state, or bindings required by `parameters`.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.InitializeParameters();
```

### SetTimeControlModeLock
`public void SetTimeControlModeLock(bool isLocked)`

**Purpose:** Assigns a new value to `time control mode lock` and updates the object's internal state.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.SetTimeControlModeLock(false);
```

### OnPlayerCharacterChanged
`public void OnPlayerCharacterChanged(out bool isMainPartyChanged)`

**Purpose:** Invoked when the `player character changed` event is raised.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.OnPlayerCharacterChanged(isMainPartyChanged);
```

### SetPlayerFormationPreference
`public void SetPlayerFormationPreference(CharacterObject character, FormationClass formation)`

**Purpose:** Assigns a new value to `player formation preference` and updates the object's internal state.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.SetPlayerFormationPreference(character, formation);
```

### OnStateChanged
`public override void OnStateChanged(TaleWorlds.Core.GameState oldState)`

**Purpose:** Invoked when the `state changed` event is raised.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.OnStateChanged(oldState);
```

### UnlockFigurehead
`public void UnlockFigurehead(Figurehead figurehead)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Campaign from the subsystem API first
Campaign campaign = ...;
campaign.UnlockFigurehead(figurehead);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Campaign campaign = ...;
campaign.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(navigationType);
```

## See Also

- [Area Index](../)