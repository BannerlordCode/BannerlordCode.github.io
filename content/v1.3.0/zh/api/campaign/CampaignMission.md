---
title: "CampaignMission"
description: "CampaignMission 的自动生成类参考。"
---
# CampaignMission

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignMission`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignMission.cs`

## 概述

`CampaignMission` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static ICampaignMission Current { get; set; }` |

## 主要方法

### OpenBattleMission
`public static IMission OpenBattleMission(string scene, bool usesTownDecalAtlas)`

**用途 / Purpose:** **用途 / Purpose:** 打开battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenBattleMission("example", false);
```

### OpenAlleyFightMission
`public static IMission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**用途 / Purpose:** **用途 / Purpose:** 打开alley fight mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenAlleyFightMission("example", 0, location, playerSideTroops, rivalSideTroops);
```

### OpenCombatMissionWithDialogue
`public static IMission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)`

**用途 / Purpose:** **用途 / Purpose:** 打开combat mission with dialogue对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenCombatMissionWithDialogue("example", characterToTalkTo, 0);
```

### OpenBattleMissionWhileEnteringSettlement
`public static IMission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)`

**用途 / Purpose:** **用途 / Purpose:** 打开battle mission while entering settlement对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenBattleMissionWhileEnteringSettlement("example", 0, 0, 0);
```

### OpenHideoutBattleMission
`public static IMission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops)`

**用途 / Purpose:** **用途 / Purpose:** 打开hideout battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenHideoutBattleMission("example", playerTroops);
```

### OpenSiegeMissionWithDeployment
`public static IMission OpenSiegeMissionWithDeployment(string scene, float wallHitPointsPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int upgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)`

**用途 / Purpose:** **用途 / Purpose:** 打开siege mission with deployment对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenSiegeMissionWithDeployment("example", 0, false, siegeWeaponsOfAttackers, siegeWeaponsOfDefenders, false, 0, false, false);
```

### OpenSiegeMissionNoDeployment
`public static IMission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)`

**用途 / Purpose:** **用途 / Purpose:** 打开siege mission no deployment对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenSiegeMissionNoDeployment("example", false, false);
```

### OpenSiegeLordsHallFightMission
`public static IMission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)`

**用途 / Purpose:** **用途 / Purpose:** 打开siege lords hall fight mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenSiegeLordsHallFightMission("example", attackerPriorityList);
```

### OpenBattleMission
`public static IMission OpenBattleMission(MissionInitializerRecord rec)`

**用途 / Purpose:** **用途 / Purpose:** 打开battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenBattleMission(rec);
```

### OpenNavalBattleMission
`public static IMission OpenNavalBattleMission(MissionInitializerRecord rec)`

**用途 / Purpose:** **用途 / Purpose:** 打开naval battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenNavalBattleMission(rec);
```

### OpenNavalSetPieceBattleMission
`public static IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin> playerShips, MBList<IShipOrigin> playerAllyShips, MBList<IShipOrigin> enemyShips)`

**用途 / Purpose:** **用途 / Purpose:** 打开naval set piece battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenNavalSetPieceBattleMission(rec, playerShips, playerAllyShips, enemyShips);
```

### OpenCaravanBattleMission
`public static IMission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)`

**用途 / Purpose:** **用途 / Purpose:** 打开caravan battle mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenCaravanBattleMission(rec, false);
```

### OpenTownCenterMission
`public static IMission OpenTownCenterMission(string scene, Location location, CharacterObject talkToChar, int townUpgradeLevel, string playerSpawnTag)`

**用途 / Purpose:** **用途 / Purpose:** 打开town center mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenTownCenterMission("example", location, talkToChar, 0, "example");
```

### OpenCastleCourtyardMission
`public static IMission OpenCastleCourtyardMission(string scene, Location location, CharacterObject talkToChar, int castleUpgradeLevel)`

**用途 / Purpose:** **用途 / Purpose:** 打开castle courtyard mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenCastleCourtyardMission("example", location, talkToChar, 0);
```

### OpenVillageMission
`public static IMission OpenVillageMission(string scene, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** **用途 / Purpose:** 打开village mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenVillageMission("example", location, talkToChar);
```

### OpenIndoorMission
`public static IMission OpenIndoorMission(string scene, int upgradeLevel, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** **用途 / Purpose:** 打开indoor mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenIndoorMission("example", 0, location, talkToChar);
```

### OpenPrisonBreakMission
`public static IMission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)`

**用途 / Purpose:** **用途 / Purpose:** 打开prison break mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenPrisonBreakMission("example", location, prisonerCharacter);
```

### OpenArenaStartMission
`public static IMission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** **用途 / Purpose:** 打开arena start mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenArenaStartMission("example", location, talkToChar);
```

### OpenArenaDuelMission
`public static IMission OpenArenaDuelMission(string scene, Location location, CharacterObject talkToChar, bool requireCivilianEquipment, bool spawnBothSidesWithHorse, Action<CharacterObject> onDuelEnd, float customAgentHealth)`

**用途 / Purpose:** **用途 / Purpose:** 打开arena duel mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenArenaDuelMission("example", location, talkToChar, false, false, onDuelEnd, 0);
```

### OpenConversationMission
`public static IMission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "")`

**用途 / Purpose:** **用途 / Purpose:** 打开conversation mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenConversationMission(playerCharacterData, conversationPartnerData, "example", "example");
```

### OpenRetirementMission
`public static IMission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")`

**用途 / Purpose:** **用途 / Purpose:** 打开retirement mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenRetirementMission("example", location, null, "example", "example");
```

### OpenHideoutAmbushMission
`public static IMission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)`

**用途 / Purpose:** **用途 / Purpose:** 打开hideout ambush mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenHideoutAmbushMission("example", playerTroops, location);
```

### OpenDisguiseMission
`public static IMission OpenDisguiseMission(string scene, bool willSetUpContact, string sceneLevels, Location fromLocation)`

**用途 / Purpose:** **用途 / Purpose:** 打开disguise mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMission.OpenDisguiseMission("example", false, "example", fromLocation);
```

## 使用示例

```csharp
CampaignMission.OpenBattleMission("example", false);
```

## 参见

- [本区域目录](../)