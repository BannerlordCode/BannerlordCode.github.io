---
title: "SandBoxMissions"
description: "Auto-generated class reference for SandBoxMissions."
---
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

**Purpose:** **Purpose:** Constructs a new sand box mission initializer record entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxMissions.CreateSandBoxMissionInitializerRecord("example", "example", false, 0);
```

### CreateSandBoxTrainingMissionInitializerRecord
`public static MissionInitializerRecord CreateSandBoxTrainingMissionInitializerRecord(string sceneName, string sceneLevels = "", bool doNotUseLoadingScreen = false)`

**Purpose:** **Purpose:** Constructs a new sand box training mission initializer record entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxMissions.CreateSandBoxTrainingMissionInitializerRecord("example", "example", false);
```

### OpenTownCenterMission
`public static Mission OpenTownCenterMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**Purpose:** **Purpose:** Opens the resource or UI associated with town center mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenTownCenterMission("example", 0, location, talkToChar, "example");
```

### OpenTownCenterMission
`public static Mission OpenTownCenterMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**Purpose:** **Purpose:** Opens the resource or UI associated with town center mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenTownCenterMission("example", "example", location, talkToChar, "example");
```

### OpenTownCenterShadowATargetMission
`public static Mission OpenTownCenterShadowATargetMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**Purpose:** **Purpose:** Opens the resource or UI associated with town center shadow a target mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenTownCenterShadowATargetMission("example", "example", location, talkToChar, "example");
```

### OpenCastleCourtyardMission
`public static Mission OpenCastleCourtyardMission(string scene, int castleUpgradeLevel, Location location, CharacterObject talkToChar)`

**Purpose:** **Purpose:** Opens the resource or UI associated with castle courtyard mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenCastleCourtyardMission("example", 0, location, talkToChar);
```

### OpenCastleCourtyardMission
`public static Mission OpenCastleCourtyardMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar)`

**Purpose:** **Purpose:** Opens the resource or UI associated with castle courtyard mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenCastleCourtyardMission("example", "example", location, talkToChar);
```

### OpenIndoorMission
`public static Mission OpenIndoorMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar)`

**Purpose:** **Purpose:** Opens the resource or UI associated with indoor mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenIndoorMission("example", 0, location, talkToChar);
```

### OpenIndoorMission
`public static Mission OpenIndoorMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")`

**Purpose:** **Purpose:** Opens the resource or UI associated with indoor mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenIndoorMission("example", location, null, "example");
```

### OpenPrisonBreakMission
`public static Mission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)`

**Purpose:** **Purpose:** Opens the resource or UI associated with prison break mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenPrisonBreakMission("example", location, prisonerCharacter);
```

### OpenVillageMission
`public static Mission OpenVillageMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null)`

**Purpose:** **Purpose:** Opens the resource or UI associated with village mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenVillageMission("example", location, null, "example");
```

### OpenArenaStartMission
`public static Mission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")`

**Purpose:** **Purpose:** Opens the resource or UI associated with arena start mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenArenaStartMission("example", location, null, "example");
```

### OpenRetirementMission
`public static Mission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")`

**Purpose:** **Purpose:** Opens the resource or UI associated with retirement mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenRetirementMission("example", location, null, "example", "example");
```

### OpenArenaDuelMission
`public static Mission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject> onDuelEnd, float customAgentHealth, string sceneLevels = "")`

**Purpose:** **Purpose:** Opens the resource or UI associated with arena duel mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenArenaDuelMission("example", location, duelCharacter, false, false, onDuelEnd, 0, "example");
```

### OpenArenaDuelMission
`public static Mission OpenArenaDuelMission(string scene, Location location)`

**Purpose:** **Purpose:** Opens the resource or UI associated with arena duel mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenArenaDuelMission("example", location);
```

### OpenBattleMission
`public static Mission OpenBattleMission(MissionInitializerRecord rec)`

**Purpose:** **Purpose:** Opens the resource or UI associated with battle mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenBattleMission(rec);
```

### OpenCaravanBattleMission
`public static Mission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)`

**Purpose:** **Purpose:** Opens the resource or UI associated with caravan battle mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenCaravanBattleMission(rec, false);
```

### OpenAlleyFightMission
`public static Mission OpenAlleyFightMission(MissionInitializerRecord rec, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**Purpose:** **Purpose:** Opens the resource or UI associated with alley fight mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenAlleyFightMission(rec, location, playerSideTroops, rivalSideTroops);
```

### OpenCombatMissionWithDialogue
`public static Mission OpenCombatMissionWithDialogue(MissionInitializerRecord rec, CharacterObject characterToTalkTo)`

**Purpose:** **Purpose:** Opens the resource or UI associated with combat mission with dialogue.

```csharp
// Static call; no instance required
SandBoxMissions.OpenCombatMissionWithDialogue(rec, characterToTalkTo);
```

### OpenBattleMissionWhileEnteringSettlement
`public static Mission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)`

**Purpose:** **Purpose:** Opens the resource or UI associated with battle mission while entering settlement.

```csharp
// Static call; no instance required
SandBoxMissions.OpenBattleMissionWhileEnteringSettlement("example", 0, 0, 0);
```

### OpenBattleMission
`public static Mission OpenBattleMission(string scene, bool usesTownDecalAtlas)`

**Purpose:** **Purpose:** Opens the resource or UI associated with battle mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenBattleMission("example", false);
```

### OpenAlleyFightMission
`public static Mission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**Purpose:** **Purpose:** Opens the resource or UI associated with alley fight mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenAlleyFightMission("example", 0, location, playerSideTroops, rivalSideTroops);
```

### OpenCombatMissionWithDialogue
`public static Mission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)`

**Purpose:** **Purpose:** Opens the resource or UI associated with combat mission with dialogue.

```csharp
// Static call; no instance required
SandBoxMissions.OpenCombatMissionWithDialogue("example", characterToTalkTo, 0);
```

### OpenHideoutBattleMission
`public static Mission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops)`

**Purpose:** **Purpose:** Opens the resource or UI associated with hideout battle mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenHideoutBattleMission("example", playerTroops);
```

### OpenHideoutAmbushMission
`public static Mission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)`

**Purpose:** **Purpose:** Opens the resource or UI associated with hideout ambush mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenHideoutAmbushMission("example", playerTroops, location);
```

### OpenCampMission
`public static Mission OpenCampMission(string scene)`

**Purpose:** **Purpose:** Opens the resource or UI associated with camp mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenCampMission("example");
```

### OpenSiegeMissionWithDeployment
`public static Mission OpenSiegeMissionWithDeployment(string scene, float wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)`

**Purpose:** **Purpose:** Opens the resource or UI associated with siege mission with deployment.

```csharp
// Static call; no instance required
SandBoxMissions.OpenSiegeMissionWithDeployment("example", 0, false, siegeWeaponsOfAttackers, siegeWeaponsOfDefenders, false, 0, false, false);
```

### OpenSiegeMissionNoDeployment
`public static Mission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)`

**Purpose:** **Purpose:** Opens the resource or UI associated with siege mission no deployment.

```csharp
// Static call; no instance required
SandBoxMissions.OpenSiegeMissionNoDeployment("example", false, false);
```

### OpenSiegeLordsHallFightMission
`public static Mission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)`

**Purpose:** **Purpose:** Opens the resource or UI associated with siege lords hall fight mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenSiegeLordsHallFightMission("example", attackerPriorityList);
```

### OpenVillageBattleMission
`public static Mission OpenVillageBattleMission(string scene)`

**Purpose:** **Purpose:** Opens the resource or UI associated with village battle mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenVillageBattleMission("example");
```

### OpenConversationMission
`public static Mission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "")`

**Purpose:** **Purpose:** Opens the resource or UI associated with conversation mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenConversationMission(playerCharacterData, conversationPartnerData, "example", "example");
```

### OpenMeetingMission
`public static Mission OpenMeetingMission(string scene, CharacterObject character)`

**Purpose:** **Purpose:** Opens the resource or UI associated with meeting mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenMeetingMission("example", character);
```

### OpenDisguiseMission
`public static Mission OpenDisguiseMission(string scene, bool willSetUpContact, Location fromLocation, string sceneLevels = null)`

**Purpose:** **Purpose:** Opens the resource or UI associated with disguise mission.

```csharp
// Static call; no instance required
SandBoxMissions.OpenDisguiseMission("example", false, fromLocation, "example");
```

## Usage Example

```csharp
SandBoxMissions.CreateSandBoxMissionInitializerRecord("example", "example", false, 0);
```

## See Also

- [Area Index](../)