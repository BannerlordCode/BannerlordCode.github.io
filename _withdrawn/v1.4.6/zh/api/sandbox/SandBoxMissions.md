---
title: "SandBoxMissions"
description: "SandBoxMissions：SandBox 的 public 类；公开成员 33 个（方法 33、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/SandBoxMissions.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxMissions

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public static class SandBoxMissions`
**File:** `SandBox/SandBoxMissions.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandBoxMissions 位于 SandBox 模块，源文件 SandBox/SandBoxMissions.cs。它是一个 public 类，继承链为 SandBoxMissions。public/protected 成员共 33 个：33 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxMissions 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox`，继承链 SandBoxMissions。成员构成以方法为主（方法 33/33，属性 0/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/SandBoxMissions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateSandBoxMissionInitializerRecord` | `public static MissionInitializerRecord CreateSandBoxMissionInitializerRecord(string sceneName, string sceneLevels, bool doNotUseLoadingScreen, DecalAtlasGroup decalAtlasGroup)` | 方法 |
| `CreateSandBoxTrainingMissionInitializerRecord` | `public static MissionInitializerRecord CreateSandBoxTrainingMissionInitializerRecord(string sceneName, string sceneLevels = "", bool doNotUseLoadingScreen = false)` | 方法 |
| `OpenTownCenterMission` | `public static Mission OpenTownCenterMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar, string playerSpawnTag)` | 方法 |
| `OpenTownCenterMission` | `public static Mission OpenTownCenterMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)` | 方法 |
| `OpenTownCenterShadowATargetMission` | `public static Mission OpenTownCenterShadowATargetMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)` | 方法 |
| `OpenCastleCourtyardMission` | `public static Mission OpenCastleCourtyardMission(string scene, int castleUpgradeLevel, Location location, CharacterObject talkToChar)` | 方法 |
| `OpenCastleCourtyardMission` | `public static Mission OpenCastleCourtyardMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar)` | 方法 |
| `OpenIndoorMission` | `public static Mission OpenIndoorMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar)` | 方法 |
| `OpenIndoorMission` | `public static Mission OpenIndoorMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")` | 方法 |
| `OpenPrisonBreakMission` | `public static Mission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)` | 方法 |
| `OpenVillageMission` | `public static Mission OpenVillageMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null)` | 方法 |
| `OpenArenaStartMission` | `public static Mission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")` | 方法 |
| `OpenRetirementMission` | `public static Mission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")` | 方法 |
| `OpenArenaDuelMission` | `public static Mission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject>onDuelEnd, float customAgentHealth, string sceneLevels = "")` | 方法 |
| `OpenArenaDuelMission` | `public static Mission OpenArenaDuelMission(string scene, Location location)` | 方法 |
| `OpenBattleMission` | `public static Mission OpenBattleMission(MissionInitializerRecord rec)` | 方法 |
| `OpenCaravanBattleMission` | `public static Mission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)` | 方法 |
| `OpenAlleyFightMission` | `public static Mission OpenAlleyFightMission(MissionInitializerRecord rec, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | 方法 |
| `OpenCombatMissionWithDialogue` | `public static Mission OpenCombatMissionWithDialogue(MissionInitializerRecord rec, CharacterObject characterToTalkTo)` | 方法 |
| `OpenBattleMissionWhileEnteringSettlement` | `public static Mission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)` | 方法 |
| `OpenBattleMission` | `public static Mission OpenBattleMission(string scene, bool usesTownDecalAtlas, string sceneLevels)` | 方法 |
| `OpenAlleyFightMission` | `public static Mission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | 方法 |
| `OpenCombatMissionWithDialogue` | `public static Mission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)` | 方法 |
| `OpenHideoutBattleMission` | `public static Mission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops, bool isTutorial)` | 方法 |
| `OpenHideoutAmbushMission` | `public static Mission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)` | 方法 |
| `OpenCampMission` | `public static Mission OpenCampMission(string scene)` | 方法 |
| `OpenSiegeMissionWithDeployment` | `public static Mission OpenSiegeMissionWithDeployment(string scene, float[]wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon>siegeWeaponsOfAttackers, List<MissionSiegeWeapon>siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)` | 方法 |
| `OpenSiegeMissionNoDeployment` | `public static Mission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)` | 方法 |
| `OpenSiegeLordsHallFightMission` | `public static Mission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)` | 方法 |
| `OpenConversationMission` | `public static Mission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "", bool isMultiAgentConversation = false)` | 方法 |
| `OpenMeetingMission` | `public static Mission OpenMeetingMission(string scene, CharacterObject character)` | 方法 |
| `OpenDisguiseMission` | `public static Mission OpenDisguiseMission(string scene, bool willSetUpContact, Location fromLocation, string sceneLevels = null)` | 方法 |
| `OpenSimpleMountedPlayerMission` | `public static Mission OpenSimpleMountedPlayerMission(string scene, string sceneLevels)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Add1000GoldCheat](../Add1000GoldCheat/)
- [同命名空间 Add100InfluenceCheat](../Add100InfluenceCheat/)
- [同命名空间 Add100RenownCheat](../Add100RenownCheat/)
- [同命名空间 AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
