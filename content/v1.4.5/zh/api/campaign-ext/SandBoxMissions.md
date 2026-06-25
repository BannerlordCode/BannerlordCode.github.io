---
title: "SandBoxMissions"
description: "SandBoxMissions 的自动生成类参考。"
---
# SandBoxMissions

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class SandBoxMissions`
**Base:** 无
**File:** `Modules.SandBox/SandBox/Sandbox/SandBoxMissions.cs`

## 概述

`SandBoxMissions` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateSandBoxMissionInitializerRecord
`public static MissionInitializerRecord CreateSandBoxMissionInitializerRecord(string sceneName, string sceneLevels, bool doNotUseLoadingScreen, DecalAtlasGroup decalAtlasGroup)`

**用途 / Purpose:** 构建一个新的 sand box mission initializer record 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxMissions.CreateSandBoxMissionInitializerRecord("example", "example", false, decalAtlasGroup);
```

### CreateSandBoxTrainingMissionInitializerRecord
`public static MissionInitializerRecord CreateSandBoxTrainingMissionInitializerRecord(string sceneName, string sceneLevels = "", bool doNotUseLoadingScreen = false)`

**用途 / Purpose:** 构建一个新的 sand box training mission initializer record 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SandBoxMissions.CreateSandBoxTrainingMissionInitializerRecord("example", "example", false);
```

### OpenTownCenterMission
`public static Mission OpenTownCenterMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**用途 / Purpose:** 打开town center mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenTownCenterMission("example", 0, location, talkToChar, "example");
```

### OpenTownCenterMission
`public static Mission OpenTownCenterMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**用途 / Purpose:** 打开town center mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenTownCenterMission("example", "example", location, talkToChar, "example");
```

### OpenTownCenterShadowATargetMission
`public static Mission OpenTownCenterShadowATargetMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)`

**用途 / Purpose:** 打开town center shadow a target mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenTownCenterShadowATargetMission("example", "example", location, talkToChar, "example");
```

### OpenCastleCourtyardMission
`public static Mission OpenCastleCourtyardMission(string scene, int castleUpgradeLevel, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** 打开castle courtyard mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenCastleCourtyardMission("example", 0, location, talkToChar);
```

### OpenCastleCourtyardMission
`public static Mission OpenCastleCourtyardMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** 打开castle courtyard mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenCastleCourtyardMission("example", "example", location, talkToChar);
```

### OpenIndoorMission
`public static Mission OpenIndoorMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** 打开indoor mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenIndoorMission("example", 0, location, talkToChar);
```

### OpenIndoorMission
`public static Mission OpenIndoorMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")`

**用途 / Purpose:** 打开indoor mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenIndoorMission("example", location, null, "example");
```

### OpenPrisonBreakMission
`public static Mission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)`

**用途 / Purpose:** 打开prison break mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenPrisonBreakMission("example", location, prisonerCharacter);
```

### OpenVillageMission
`public static Mission OpenVillageMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null)`

**用途 / Purpose:** 打开village mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenVillageMission("example", location, null, "example");
```

### OpenArenaStartMission
`public static Mission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")`

**用途 / Purpose:** 打开arena start mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenArenaStartMission("example", location, null, "example");
```

### OpenRetirementMission
`public static Mission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")`

**用途 / Purpose:** 打开retirement mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenRetirementMission("example", location, null, "example", "example");
```

### OpenArenaDuelMission
`public static Mission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject> onDuelEnd, float customAgentHealth, string sceneLevels = "")`

**用途 / Purpose:** 打开arena duel mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenArenaDuelMission("example", location, duelCharacter, false, false, onDuelEnd, 0, "example");
```

### OpenArenaDuelMission
`public static Mission OpenArenaDuelMission(string scene, Location location)`

**用途 / Purpose:** 打开arena duel mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenArenaDuelMission("example", location);
```

### OpenBattleMission
`public static Mission OpenBattleMission(MissionInitializerRecord rec)`

**用途 / Purpose:** 打开battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenBattleMission(rec);
```

### OpenCaravanBattleMission
`public static Mission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)`

**用途 / Purpose:** 打开caravan battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenCaravanBattleMission(rec, false);
```

### OpenAlleyFightMission
`public static Mission OpenAlleyFightMission(MissionInitializerRecord rec, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**用途 / Purpose:** 打开alley fight mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenAlleyFightMission(rec, location, playerSideTroops, rivalSideTroops);
```

### OpenCombatMissionWithDialogue
`public static Mission OpenCombatMissionWithDialogue(MissionInitializerRecord rec, CharacterObject characterToTalkTo)`

**用途 / Purpose:** 打开combat mission with dialogue对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenCombatMissionWithDialogue(rec, characterToTalkTo);
```

### OpenBattleMissionWhileEnteringSettlement
`public static Mission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)`

**用途 / Purpose:** 打开battle mission while entering settlement对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenBattleMissionWhileEnteringSettlement("example", 0, 0, 0);
```

### OpenBattleMission
`public static Mission OpenBattleMission(string scene, bool usesTownDecalAtlas, string sceneLevels)`

**用途 / Purpose:** 打开battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenBattleMission("example", false, "example");
```

### OpenAlleyFightMission
`public static Mission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**用途 / Purpose:** 打开alley fight mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenAlleyFightMission("example", 0, location, playerSideTroops, rivalSideTroops);
```

### OpenCombatMissionWithDialogue
`public static Mission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)`

**用途 / Purpose:** 打开combat mission with dialogue对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenCombatMissionWithDialogue("example", characterToTalkTo, 0);
```

### OpenHideoutBattleMission
`public static Mission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops, bool isTutorial)`

**用途 / Purpose:** 打开hideout battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenHideoutBattleMission("example", playerTroops, false);
```

### OpenHideoutAmbushMission
`public static Mission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)`

**用途 / Purpose:** 打开hideout ambush mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenHideoutAmbushMission("example", playerTroops, location);
```

### OpenCampMission
`public static Mission OpenCampMission(string scene)`

**用途 / Purpose:** 打开camp mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenCampMission("example");
```

### OpenSiegeMissionWithDeployment
`public static Mission OpenSiegeMissionWithDeployment(string scene, float wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)`

**用途 / Purpose:** 打开siege mission with deployment对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenSiegeMissionWithDeployment("example", 0, false, siegeWeaponsOfAttackers, siegeWeaponsOfDefenders, false, 0, false, false);
```

### OpenSiegeMissionNoDeployment
`public static Mission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)`

**用途 / Purpose:** 打开siege mission no deployment对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenSiegeMissionNoDeployment("example", false, false);
```

### OpenSiegeLordsHallFightMission
`public static Mission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)`

**用途 / Purpose:** 打开siege lords hall fight mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenSiegeLordsHallFightMission("example", attackerPriorityList);
```

### OpenConversationMission
`public static Mission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "", bool isMultiAgentConversation = false)`

**用途 / Purpose:** 打开conversation mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenConversationMission(playerCharacterData, conversationPartnerData, "example", "example", false);
```

### OpenMeetingMission
`public static Mission OpenMeetingMission(string scene, CharacterObject character)`

**用途 / Purpose:** 打开meeting mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenMeetingMission("example", character);
```

### OpenDisguiseMission
`public static Mission OpenDisguiseMission(string scene, bool willSetUpContact, Location fromLocation, string sceneLevels = null)`

**用途 / Purpose:** 打开disguise mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenDisguiseMission("example", false, fromLocation, "example");
```

### OpenSimpleMountedPlayerMission
`public static Mission OpenSimpleMountedPlayerMission(string scene, string sceneLevels)`

**用途 / Purpose:** 打开simple mounted player mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMissions.OpenSimpleMountedPlayerMission("example", "example");
```

## 使用示例

```csharp
SandBoxMissions.CreateSandBoxMissionInitializerRecord("example", "example", false, decalAtlasGroup);
```

## 参见

- [本区域目录](../)