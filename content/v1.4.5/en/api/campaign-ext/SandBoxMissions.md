---
title: "SandBoxMissions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxMissions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxMissions

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class SandBoxMissions`
**Area:** campaign-ext

## Overview

`SandBoxMissions` lives in `SandBox`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateSandBoxMissionInitializerRecord
`public static MissionInitializerRecord CreateSandBoxMissionInitializerRecord(string sceneName, string sceneLevels, bool doNotUseLoadingScreen, DecalAtlasGroup decalAtlasGroup)`

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

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
SandBoxMissions.CreateSandBoxMissionInitializerRecord("example", "example", false, decalAtlasGroup);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
