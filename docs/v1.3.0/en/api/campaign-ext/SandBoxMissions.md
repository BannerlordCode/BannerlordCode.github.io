<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxMissions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxMissions

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class SandBoxMissions`
**Base:** none
**File:** `SandBox/SandBoxMissions.cs`

## Overview

`SandBoxMissions` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateSandBoxMissionInitializerRecord
`public static MissionInitializerRecord CreateSandBoxMissionInitializerRecord(string sceneName, string sceneLevels = "", bool doNotUseLoadingScreen = false, DecalAtlasGroup decalAtlasGroup = 0)`

**Purpose:** Creates a new `sand box mission initializer record` instance or object.

### CreateSandBoxTrainingMissionInitializerRecord
`public static MissionInitializerRecord CreateSandBoxTrainingMissionInitializerRecord(string sceneName, string sceneLevels = "", bool doNotUseLoadingScreen = false)`

**Purpose:** Creates a new `sand box training mission initializer record` instance or object.

### OpenTownCenterMission
`public static Mission OpenTownCenterMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**Purpose:** Handles logic related to `open town center mission`.

### OpenTownCenterMission
`public static Mission OpenTownCenterMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**Purpose:** Handles logic related to `open town center mission`.

### OpenTownCenterShadowATargetMission
`public static Mission OpenTownCenterShadowATargetMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**Purpose:** Handles logic related to `open town center shadow a target mission`.

### OpenCastleCourtyardMission
`public static Mission OpenCastleCourtyardMission(string scene, int castleUpgradeLevel, Location location, CharacterObject talkToChar)`

**Purpose:** Handles logic related to `open castle courtyard mission`.

### OpenCastleCourtyardMission
`public static Mission OpenCastleCourtyardMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar)`

**Purpose:** Handles logic related to `open castle courtyard mission`.

### OpenIndoorMission
`public static Mission OpenIndoorMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar)`

**Purpose:** Handles logic related to `open indoor mission`.

### OpenIndoorMission
`public static Mission OpenIndoorMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")`

**Purpose:** Handles logic related to `open indoor mission`.

### OpenPrisonBreakMission
`public static Mission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)`

**Purpose:** Handles logic related to `open prison break mission`.

### OpenVillageMission
`public static Mission OpenVillageMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null)`

**Purpose:** Handles logic related to `open village mission`.

### OpenArenaStartMission
`public static Mission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")`

**Purpose:** Handles logic related to `open arena start mission`.

### OpenRetirementMission
`public static Mission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")`

**Purpose:** Handles logic related to `open retirement mission`.

### OpenArenaDuelMission
`public static Mission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject> onDuelEnd, float customAgentHealth, string sceneLevels = "")`

**Purpose:** Handles logic related to `open arena duel mission`.

### OpenArenaDuelMission
`public static Mission OpenArenaDuelMission(string scene, Location location)`

**Purpose:** Handles logic related to `open arena duel mission`.

### OpenBattleMission
`public static Mission OpenBattleMission(MissionInitializerRecord rec)`

**Purpose:** Handles logic related to `open battle mission`.

### OpenCaravanBattleMission
`public static Mission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)`

**Purpose:** Handles logic related to `open caravan battle mission`.

### OpenAlleyFightMission
`public static Mission OpenAlleyFightMission(MissionInitializerRecord rec, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**Purpose:** Handles logic related to `open alley fight mission`.

### OpenCombatMissionWithDialogue
`public static Mission OpenCombatMissionWithDialogue(MissionInitializerRecord rec, CharacterObject characterToTalkTo)`

**Purpose:** Handles logic related to `open combat mission with dialogue`.

### OpenBattleMissionWhileEnteringSettlement
`public static Mission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)`

**Purpose:** Handles logic related to `open battle mission while entering settlement`.

### OpenBattleMission
`public static Mission OpenBattleMission(string scene, bool usesTownDecalAtlas)`

**Purpose:** Handles logic related to `open battle mission`.

### OpenAlleyFightMission
`public static Mission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**Purpose:** Handles logic related to `open alley fight mission`.

### OpenCombatMissionWithDialogue
`public static Mission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)`

**Purpose:** Handles logic related to `open combat mission with dialogue`.

### OpenHideoutBattleMission
`public static Mission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops)`

**Purpose:** Handles logic related to `open hideout battle mission`.

### OpenHideoutAmbushMission
`public static Mission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)`

**Purpose:** Handles logic related to `open hideout ambush mission`.

### OpenCampMission
`public static Mission OpenCampMission(string scene)`

**Purpose:** Handles logic related to `open camp mission`.

### OpenSiegeMissionWithDeployment
`public static Mission OpenSiegeMissionWithDeployment(string scene, float wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)`

**Purpose:** Handles logic related to `open siege mission with deployment`.

### OpenSiegeMissionNoDeployment
`public static Mission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)`

**Purpose:** Handles logic related to `open siege mission no deployment`.

### OpenSiegeLordsHallFightMission
`public static Mission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)`

**Purpose:** Handles logic related to `open siege lords hall fight mission`.

### OpenVillageBattleMission
`public static Mission OpenVillageBattleMission(string scene)`

**Purpose:** Handles logic related to `open village battle mission`.

### OpenConversationMission
`public static Mission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "")`

**Purpose:** Handles logic related to `open conversation mission`.

### OpenMeetingMission
`public static Mission OpenMeetingMission(string scene, CharacterObject character)`

**Purpose:** Handles logic related to `open meeting mission`.

### OpenDisguiseMission
`public static Mission OpenDisguiseMission(string scene, bool willSetUpContact, Location fromLocation, string sceneLevels = null)`

**Purpose:** Handles logic related to `open disguise mission`.

## Usage Example

```csharp
SandBoxMissions.CreateSandBoxMissionInitializerRecord("example", "example", false, 0);
```

## See Also

- [Complete Class Catalog](../catalog)