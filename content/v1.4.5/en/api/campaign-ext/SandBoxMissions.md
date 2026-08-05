---
title: "SandBoxMissions"
description: "The SandBox mission factory that builds initializer records, selects mission IDs, and attaches campaign-aware mission behaviors."
---
# SandBoxMissions

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public static class SandBoxMissions`  
**Base:** none  
**Source:** `Modules.SandBox/SandBox/Sandbox/SandBoxMissions.cs`

## Overview

`SandBoxMissions` is the `[MissionManager]` static factory used by the SandBox runtime to turn campaign encounter inputs into live `Mission` instances. Its methods either build a `MissionInitializerRecord` or call `MissionState.OpenNew` with a mission ID, an initializer, and a behavior delegate. The factory is where scene levels, campaign atmosphere, troop suppliers, location logic, battle logic, and [CampaignMissionComponent](../CampaignMissionComponent) are assembled together.

## Mental Model

Think of this class as the last SandBox construction layer in the route `CampaignMission` -> `Campaign.Current.CampaignMissionManager` -> `CampaignMissionManager` -> `SandBoxMissions`. It is not a stateful manager and it does not expose a current mission property. A factory call consumes an encounter-owned scene, location, roster, conversation, or siege state and immediately starts a new mission state.

Most campaign-aware factories add `CampaignMissionComponent` to the behavior array passed to `MissionState.OpenNew`. That component publishes the new mission through `CampaignMission.Current` during creation and clears it at mission end. Omitting the component while copying a factory call changes the lifecycle contract: campaign callbacks, location access, and mission result handoff can stop working even if the scene loads.

## Dependencies

- [CampaignMission](../../campaign/CampaignMission) is the campaign-facing factory route.
- [CampaignMissionManager](../CampaignMissionManager) forwards the campaign contract into this static class.
- [CampaignMissionComponent](../CampaignMissionComponent) bridges the new `Mission` back to `CampaignMission.Current`.
- [Mission](../../mission/Mission) owns the scene and behavior lifetime returned by the factory.

The public methods assume the campaign encounter already owns compatible scenes, locations, rosters, characters, and map-event state. This class supplies construction logic; it does not replace those owners.

## Factory pipeline

1. `CreateSandBoxMissionInitializerRecord` reads the main party or active map event position, difficulty damage multipliers, campaign weather, terrain, scene levels, loading-screen choice, and decal atlas group.
2. A public `Open*` method combines that record with encounter-specific state such as `Location`, `TroopRoster`, `FlattenedTroopRoster`, `ConversationCharacterData`, `MissionSiegeWeapon`, or `CharacterObject`.
3. The method calls `MissionState.OpenNew` with a stable mission ID and a behavior initializer. The delegate creates the mission logic, agent handlers, battle/siege controllers, and usually `CampaignMissionComponent`.
4. The returned `Mission` owns the live scene and behavior lifetime. Reacquire mission-scoped objects after transitions and stop using them at mission end.

## Initializer records

| Method | Source-backed behavior |
| --- | --- |
| `public static MissionInitializerRecord CreateSandBoxMissionInitializerRecord(string sceneName, string sceneLevels, bool doNotUseLoadingScreen, DecalAtlasGroup decalAtlasGroup)` | Uses `MobileParty.MainParty.MapEvent.Position` when an active map event exists, otherwise the main party position; fills difficulty damage multipliers, campaign atmosphere, terrain, scene levels, loading-screen choice, and decal atlas group. |
| `public static MissionInitializerRecord CreateSandBoxTrainingMissionInitializerRecord(string sceneName, string sceneLevels = "", bool doNotUseLoadingScreen = false)` | Creates a training initializer with campaign mode, weather, terrain, scene levels, and training-specific damage defaults. |

These methods create data; they do not open a mission by themselves. `TournamentMissionStarter` and StoryMode mission code use the records as inputs to their own `MissionState.OpenNew` calls.

## Settlement and location missions

| Method | Mission ID and important inputs |
| --- | --- |
| `public static Mission OpenTownCenterMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar, string playerSpawnTag)` | Converts the numeric town level through `LocationModel.GetCivilianUpgradeLevelTag`, then uses the string-level overload for `TownCenter`. |
| `public static Mission OpenTownCenterMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)` | Opens `TownCenter` with settlement preparation, location/spawn logic, conversation, agent, workshop, crime, and campaign mission behaviors. |
| `public static Mission OpenTownCenterShadowATargetMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)` | Opens the same `TownCenter` mission ID with the shadow-a-target behavior composition. |
| `public static Mission OpenCastleCourtyardMission(string scene, int castleUpgradeLevel, Location location, CharacterObject talkToChar)` | Converts the numeric level into a civilian upgrade tag and delegates to the string-level overload. |
| `public static Mission OpenCastleCourtyardMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar)` | Opens `TownCenter` with castle courtyard location and conversation behaviors. |
| `public static Mission OpenIndoorMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar)` | Converts the numeric level and delegates to the location-based indoor overload. |
| `public static Mission OpenIndoorMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")` | Opens `Indoor` and attaches location, conversation, agent, crime, and campaign mission behaviors. |
| `public static Mission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)` | Opens `PrisonBreak` and supplies prison-break logic for the location and prisoner. |
| `public static Mission OpenVillageMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null)` | Opens `Village`, choosing location scene levels and village-specific agent, conversation, and campaign behaviors. |

The location overloads assume that the caller selected a `Location` belonging to the scene. A `Location` from another settlement is not made valid by passing its name to an `Open*` method.

## Arena and special character missions

| Method | Mission ID and important inputs |
| --- | --- |
| `public static Mission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")` | Opens `ArenaPracticeFight` with arena mission logic and the optional conversation character. |
| `public static Mission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")` | Opens `Retirement` and preserves the location, conversation, and unconscious-menu context. |
| `public static Mission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject> onDuelEnd, float customAgentHealth, string sceneLevels = "")` | Opens `ArenaDuelMission`; the equipment, horse, callback, and custom health flags affect the duel behavior composition. |
| `public static Mission OpenArenaDuelMission(string scene, Location location)` | Opens the simpler `ArenaDuel` composition for the location. |
| `public static Mission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "", bool isMultiAgentConversation = false)` | Selects a conversation scene when `specialScene` is empty, then opens `Conversation` with `CampaignMissionComponent` and conversation logic. |
| `public static Mission OpenMeetingMission(string scene, CharacterObject character)` | Calls a failed assertion stating that the mission was broken, then opens a conversation-shaped mission. Treat it as unsupported in this source snapshot. |
| `public static Mission OpenDisguiseMission(string scene, bool willSetUpContact, Location fromLocation, string sceneLevels = null)` | Opens `DisguiseMission`, resolves `disguise_contractor_character`, and attaches stealth, checkpoint, conversation, crime, location, and campaign mission logic. |
| `public static Mission OpenSimpleMountedPlayerMission(string scene, string sceneLevels)` | Editor-usable factory that opens `SimpleMountedPlayer` with only simple mounted-player, options, and equipment-leave behaviors; it does not add `CampaignMissionComponent`. |

## Battle and hideout missions

| Method | Mission ID and important inputs |
| --- | --- |
| `public static Mission OpenBattleMission(MissionInitializerRecord rec)` | Opens `Battle` from a caller-prepared initializer and builds campaign combatants, troop suppliers, battle end, agent, morale, highlight, and campaign mission behaviors. |
| `public static Mission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)` | Opens `Battle` while deriving caravan-specific side and troop-count behavior from the active map event. |
| `public static Mission OpenAlleyFightMission(MissionInitializerRecord rec, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | Opens `AlleyFight` with the two supplied rosters and location/alley logic. |
| `public static Mission OpenCombatMissionWithDialogue(MissionInitializerRecord rec, CharacterObject characterToTalkTo)` | Opens `CombatWithDialogue` with combat and conversation behavior for the supplied character. |
| `public static Mission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)` | Builds a civilian-level initializer and opens `EnteringSettlementBattle` with explicit spawn caps. |
| `public static Mission OpenBattleMission(string scene, bool usesTownDecalAtlas, string sceneLevels)` | Builds an initializer with the requested scene levels and decal choice, then delegates to the record overload. |
| `public static Mission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | Converts the level to a civilian tag and delegates to the record overload. |
| `public static Mission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)` | Converts the level to a civilian tag and delegates to the record overload. |
| `public static Mission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops, bool isTutorial)` | Opens `HideoutBattle`, selecting `level_1` for tutorial and `level_2` otherwise; a null player roster is replaced by strongest/prioritized main-party troops. |
| `public static Mission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)` | Opens `HideoutAmbushMission`, removes the player character from prior ally troops, and attaches stealth, cinematic, location, supplier, and campaign mission logic. |
| `public static Mission OpenCampMission(string scene)` | Opens `Camp` with campaign combatants, battle end, mission boundaries, and `CampaignMissionComponent`. |

The record overloads are useful when an encounter has already assembled map-event state. Rebuilding a record from only a scene can lose weather, terrain, damage, or map-event context.

## Siege missions

| Method | Mission ID and important inputs |
| --- | --- |
| `public static Mission OpenSiegeMissionWithDeployment(string scene, float[] wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)` | Opens `SiegeMissionWithDeployment`, derives the siege scene-level tag, and keeps wall ratios, tower availability, prepared engines, attacker state, sally-out state, and relief-force state together. |
| `public static Mission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)` | Opens `SiegeMissionNoDeployment` with the corresponding siege scene level and no deployment phase. |
| `public static Mission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)` | Computes defender priorities from `SiegeLordsHallFightModel` and opens `SiegeLordsHallFightMission` with attacker priorities, troop suppliers, and campaign siege state. |

## Real call-site examples

### Build an initializer in a mission starter

The source's tournament and StoryMode starters pass real scene values into the initializer factory before opening their own mission:

```csharp
MissionInitializerRecord initializer =
    SandBoxMissions.CreateSandBoxTrainingMissionInitializerRecord(
        scene,
        sceneLevels,
        doNotUseLoadingScreen: false);
```

The returned record is data only. It still needs a caller-owned behavior delegate and `MissionState.OpenNew`; the factory does not infer those from a scene name.

### Choose the hideout route from the encounter

`HideoutCampaignBehavior` chooses between the two public campaign facades while preserving the location scene and optional prior troop roster:

```csharp
if (isDirectAssault)
{
    CampaignMission.OpenHideoutBattleMission(
        locationWithId.GetSceneName(0),
        hideoutTroops?.ToFlattenedRoster(),
        isTutorial: false);
}
else
{
    CampaignMission.OpenHideoutAmbushMission(
        locationWithId.GetSceneName(0),
        hideoutTroops?.ToFlattenedRoster(),
        locationWithId);
}
```

The facade reaches this factory through `CampaignMissionManager`; a mod should normally preserve that boundary instead of copying the static factory call and omitting its behavior list.

### Preserve siege state

`PlayerSiege` supplies the wall ratios and prepared engines that the deployment factory needs:

```csharp
CampaignMission.OpenSiegeMissionWithDeployment(
    besiegedSettlement.LocationComplex.GetLocationWithId("center").GetSceneName(wallLevel),
    besiegedSettlement.SettlementWallSectionHitPointsRatioList.ToArray(),
    hasAnySiegeTower,
    preparedAndActiveSiegeEngines,
    preparedAndActiveSiegeEngines2,
    PlayerEncounter.Current.PlayerSide == BattleSideEnum.Attacker,
    wallLevel);
```

Dropping the wall ratio or prepared weapon lists changes the deployment model. `isSallyOut` and `isReliefForceAttack` must likewise remain tied to the encounter branch that selected the mission.

### Open a conversation with real character data

`ParleyCampaignBehavior` constructs the two conversation records and passes the chosen scene and level through the campaign facade:

```csharp
ConversationCharacterData playerCharacterData =
    new ConversationCharacterData(Hero.MainHero.CharacterObject, PartyBase.MainParty);
ConversationCharacterData conversationPartnerData =
    new ConversationCharacterData(hero.CharacterObject, hero.PartyBelongedTo?.Party, noHorse: true);
CampaignMission.OpenConversationMission(
    playerCharacterData,
    conversationPartnerData,
    meetingScene,
    sceneLevel);
```

The factory selects a conversation scene only when `specialScene` is empty. Conversation data and the scene must describe the same live encounter.

## Risks and boundaries

- **Unsupported meeting route:** `OpenMeetingMission` executes the source's `Debug.FailedAssert` with the message `This mission was broken` before opening its `Conversation` mission. Do not present it as a reliable replacement for conversation or encounter code.
- **Missing component:** most campaign factories add `CampaignMissionComponent`; `OpenSimpleMountedPlayerMission` is a notable editor-oriented exception. A copied behavior list can therefore lose `CampaignMission.Current` and campaign callbacks.
- **Invalid context:** scene names, location IDs, upgrade levels, map events, rosters, and siege engines are not interchangeable. The factory assumes the caller has selected compatible objects.
- **State transition:** every `Open*` method that calls `MissionState.OpenNew` can replace the active mission state. Do not retain mission-scoped engine references across the call.
- **No save ownership:** initializer records and mission behaviors are runtime objects. Persist only stable campaign data through the campaign save contract.

## Navigation

- Parent: [Campaign extension API](../)
- Contract and route: [ISandBoxMissionManager](../../campaign/ISandBoxMissionManager) · [CampaignMission](../../campaign/CampaignMission) · [CampaignMissionManager](../CampaignMissionManager)
- Lifecycle: [CampaignMissionComponent](../CampaignMissionComponent) · [Mission](../../mission/Mission)
- Related data: `MissionInitializerRecord` · [SandBoxMission](../../campaign/SandBoxMission)
