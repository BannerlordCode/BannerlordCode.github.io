---
title: "SandBoxMissions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxMissions`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxMissions

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class SandBoxMissions`
**Base:** 无
**File:** `SandBox/SandBoxMissions.cs`

## 概述

`SandBoxMissions` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateSandBoxMissionInitializerRecord
`public static MissionInitializerRecord CreateSandBoxMissionInitializerRecord(string sceneName, string sceneLevels = "", bool doNotUseLoadingScreen = false, DecalAtlasGroup decalAtlasGroup = 0)`

**用途 / Purpose:** 创建一个 `sand box mission initializer record` 实例或对象。

### CreateSandBoxTrainingMissionInitializerRecord
`public static MissionInitializerRecord CreateSandBoxTrainingMissionInitializerRecord(string sceneName, string sceneLevels = "", bool doNotUseLoadingScreen = false)`

**用途 / Purpose:** 创建一个 `sand box training mission initializer record` 实例或对象。

### OpenTownCenterMission
`public static Mission OpenTownCenterMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**用途 / Purpose:** 处理 `open town center mission` 相关逻辑。

### OpenTownCenterMission
`public static Mission OpenTownCenterMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**用途 / Purpose:** 处理 `open town center mission` 相关逻辑。

### OpenTownCenterShadowATargetMission
`public static Mission OpenTownCenterShadowATargetMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**用途 / Purpose:** 处理 `open town center shadow a target mission` 相关逻辑。

### OpenCastleCourtyardMission
`public static Mission OpenCastleCourtyardMission(string scene, int castleUpgradeLevel, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** 处理 `open castle courtyard mission` 相关逻辑。

### OpenCastleCourtyardMission
`public static Mission OpenCastleCourtyardMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** 处理 `open castle courtyard mission` 相关逻辑。

### OpenIndoorMission
`public static Mission OpenIndoorMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** 处理 `open indoor mission` 相关逻辑。

### OpenIndoorMission
`public static Mission OpenIndoorMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")`

**用途 / Purpose:** 处理 `open indoor mission` 相关逻辑。

### OpenPrisonBreakMission
`public static Mission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)`

**用途 / Purpose:** 处理 `open prison break mission` 相关逻辑。

### OpenVillageMission
`public static Mission OpenVillageMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null)`

**用途 / Purpose:** 处理 `open village mission` 相关逻辑。

### OpenArenaStartMission
`public static Mission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")`

**用途 / Purpose:** 处理 `open arena start mission` 相关逻辑。

### OpenRetirementMission
`public static Mission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")`

**用途 / Purpose:** 处理 `open retirement mission` 相关逻辑。

### OpenArenaDuelMission
`public static Mission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject> onDuelEnd, float customAgentHealth, string sceneLevels = "")`

**用途 / Purpose:** 处理 `open arena duel mission` 相关逻辑。

### OpenArenaDuelMission
`public static Mission OpenArenaDuelMission(string scene, Location location)`

**用途 / Purpose:** 处理 `open arena duel mission` 相关逻辑。

### OpenBattleMission
`public static Mission OpenBattleMission(MissionInitializerRecord rec)`

**用途 / Purpose:** 处理 `open battle mission` 相关逻辑。

### OpenCaravanBattleMission
`public static Mission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)`

**用途 / Purpose:** 处理 `open caravan battle mission` 相关逻辑。

### OpenAlleyFightMission
`public static Mission OpenAlleyFightMission(MissionInitializerRecord rec, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**用途 / Purpose:** 处理 `open alley fight mission` 相关逻辑。

### OpenCombatMissionWithDialogue
`public static Mission OpenCombatMissionWithDialogue(MissionInitializerRecord rec, CharacterObject characterToTalkTo)`

**用途 / Purpose:** 处理 `open combat mission with dialogue` 相关逻辑。

### OpenBattleMissionWhileEnteringSettlement
`public static Mission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)`

**用途 / Purpose:** 处理 `open battle mission while entering settlement` 相关逻辑。

### OpenBattleMission
`public static Mission OpenBattleMission(string scene, bool usesTownDecalAtlas)`

**用途 / Purpose:** 处理 `open battle mission` 相关逻辑。

### OpenAlleyFightMission
`public static Mission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**用途 / Purpose:** 处理 `open alley fight mission` 相关逻辑。

### OpenCombatMissionWithDialogue
`public static Mission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)`

**用途 / Purpose:** 处理 `open combat mission with dialogue` 相关逻辑。

### OpenHideoutBattleMission
`public static Mission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops)`

**用途 / Purpose:** 处理 `open hideout battle mission` 相关逻辑。

### OpenHideoutAmbushMission
`public static Mission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)`

**用途 / Purpose:** 处理 `open hideout ambush mission` 相关逻辑。

### OpenCampMission
`public static Mission OpenCampMission(string scene)`

**用途 / Purpose:** 处理 `open camp mission` 相关逻辑。

### OpenSiegeMissionWithDeployment
`public static Mission OpenSiegeMissionWithDeployment(string scene, float wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)`

**用途 / Purpose:** 处理 `open siege mission with deployment` 相关逻辑。

### OpenSiegeMissionNoDeployment
`public static Mission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)`

**用途 / Purpose:** 处理 `open siege mission no deployment` 相关逻辑。

### OpenSiegeLordsHallFightMission
`public static Mission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)`

**用途 / Purpose:** 处理 `open siege lords hall fight mission` 相关逻辑。

### OpenVillageBattleMission
`public static Mission OpenVillageBattleMission(string scene)`

**用途 / Purpose:** 处理 `open village battle mission` 相关逻辑。

### OpenConversationMission
`public static Mission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "")`

**用途 / Purpose:** 处理 `open conversation mission` 相关逻辑。

### OpenMeetingMission
`public static Mission OpenMeetingMission(string scene, CharacterObject character)`

**用途 / Purpose:** 处理 `open meeting mission` 相关逻辑。

### OpenDisguiseMission
`public static Mission OpenDisguiseMission(string scene, bool willSetUpContact, Location fromLocation, string sceneLevels = null)`

**用途 / Purpose:** 处理 `open disguise mission` 相关逻辑。

## 使用示例

```csharp
SandBoxMissions.CreateSandBoxMissionInitializerRecord("example", "example", false, 0);
```

## 参见

- [完整类目录](../catalog)