---
title: "SandBoxMissions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxMissions`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxMissions

**命名空间:** SandBox
**模块:** SandBox
**类型:** `public static class SandBoxMissions`
**领域:** campaign-ext

## 概述

`SandBoxMissions` 位于 `SandBox`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateSandBoxMissionInitializerRecord
`public static MissionInitializerRecord CreateSandBoxMissionInitializerRecord(string sceneName, string sceneLevels, bool doNotUseLoadingScreen, DecalAtlasGroup decalAtlasGroup)`

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

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
SandBoxMissions.CreateSandBoxMissionInitializerRecord("example", "example", false, decalAtlasGroup);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
