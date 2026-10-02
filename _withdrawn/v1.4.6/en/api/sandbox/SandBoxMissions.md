---
title: "SandBoxMissions"
description: "SandBoxMissions: a public class in SandBox; 33 exposed members (33 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/SandBoxMissions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxMissions

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public static class SandBoxMissions`
**File:** `SandBox/SandBoxMissions.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandBoxMissions lives in the SandBox module, source file SandBox/SandBoxMissions.cs. It is a public class; the inheritance chain is SandBoxMissions. It exposes 33 public/protected members: 33 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxMissions lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox`, inheritance chain SandBoxMissions. The surface is method-led (methods 33/33, properties 0/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/SandBoxMissions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateSandBoxMissionInitializerRecord` | `public static MissionInitializerRecord CreateSandBoxMissionInitializerRecord(string sceneName, string sceneLevels, bool doNotUseLoadingScreen, DecalAtlasGroup decalAtlasGroup)` | method |
| `CreateSandBoxTrainingMissionInitializerRecord` | `public static MissionInitializerRecord CreateSandBoxTrainingMissionInitializerRecord(string sceneName, string sceneLevels = "", bool doNotUseLoadingScreen = false)` | method |
| `OpenTownCenterMission` | `public static Mission OpenTownCenterMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar, string playerSpawnTag)` | method |
| `OpenTownCenterMission` | `public static Mission OpenTownCenterMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)` | method |
| `OpenTownCenterShadowATargetMission` | `public static Mission OpenTownCenterShadowATargetMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)` | method |
| `OpenCastleCourtyardMission` | `public static Mission OpenCastleCourtyardMission(string scene, int castleUpgradeLevel, Location location, CharacterObject talkToChar)` | method |
| `OpenCastleCourtyardMission` | `public static Mission OpenCastleCourtyardMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar)` | method |
| `OpenIndoorMission` | `public static Mission OpenIndoorMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar)` | method |
| `OpenIndoorMission` | `public static Mission OpenIndoorMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")` | method |
| `OpenPrisonBreakMission` | `public static Mission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)` | method |
| `OpenVillageMission` | `public static Mission OpenVillageMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null)` | method |
| `OpenArenaStartMission` | `public static Mission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")` | method |
| `OpenRetirementMission` | `public static Mission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")` | method |
| `OpenArenaDuelMission` | `public static Mission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject>onDuelEnd, float customAgentHealth, string sceneLevels = "")` | method |
| `OpenArenaDuelMission` | `public static Mission OpenArenaDuelMission(string scene, Location location)` | method |
| `OpenBattleMission` | `public static Mission OpenBattleMission(MissionInitializerRecord rec)` | method |
| `OpenCaravanBattleMission` | `public static Mission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)` | method |
| `OpenAlleyFightMission` | `public static Mission OpenAlleyFightMission(MissionInitializerRecord rec, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | method |
| `OpenCombatMissionWithDialogue` | `public static Mission OpenCombatMissionWithDialogue(MissionInitializerRecord rec, CharacterObject characterToTalkTo)` | method |
| `OpenBattleMissionWhileEnteringSettlement` | `public static Mission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)` | method |
| `OpenBattleMission` | `public static Mission OpenBattleMission(string scene, bool usesTownDecalAtlas, string sceneLevels)` | method |
| `OpenAlleyFightMission` | `public static Mission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | method |
| `OpenCombatMissionWithDialogue` | `public static Mission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)` | method |
| `OpenHideoutBattleMission` | `public static Mission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops, bool isTutorial)` | method |
| `OpenHideoutAmbushMission` | `public static Mission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)` | method |
| `OpenCampMission` | `public static Mission OpenCampMission(string scene)` | method |
| `OpenSiegeMissionWithDeployment` | `public static Mission OpenSiegeMissionWithDeployment(string scene, float[]wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon>siegeWeaponsOfAttackers, List<MissionSiegeWeapon>siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)` | method |
| `OpenSiegeMissionNoDeployment` | `public static Mission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)` | method |
| `OpenSiegeLordsHallFightMission` | `public static Mission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)` | method |
| `OpenConversationMission` | `public static Mission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "", bool isMultiAgentConversation = false)` | method |
| `OpenMeetingMission` | `public static Mission OpenMeetingMission(string scene, CharacterObject character)` | method |
| `OpenDisguiseMission` | `public static Mission OpenDisguiseMission(string scene, bool willSetUpContact, Location fromLocation, string sceneLevels = null)` | method |
| `OpenSimpleMountedPlayerMission` | `public static Mission OpenSimpleMountedPlayerMission(string scene, string sceneLevels)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Add1000GoldCheat](../Add1000GoldCheat/)
- [same namespace Add100InfluenceCheat](../Add100InfluenceCheat/)
- [same namespace Add100RenownCheat](../Add100RenownCheat/)
- [same namespace AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
