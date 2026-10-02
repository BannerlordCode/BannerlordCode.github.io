---
title: "CampaignMission"
description: "CampaignMission：TaleWorlds.CampaignSystem 的 public 类；公开成员 27 个（方法 24、属性 2、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/CampaignMission.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignMission

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class CampaignMission`
**File:** `TaleWorlds.CampaignSystem/CampaignMission.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

CampaignMission 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignMission.cs。它是一个 public 类，继承链为 CampaignMission。public/protected 成员共 27 个：24 方法、2 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignMission 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem`，继承链 CampaignMission。成员构成以方法为主（方法 24/27，属性 2/27），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignMission.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static ICampaignMission Current` | 属性 |
| `OpenBattleMission` | `public static IMission OpenBattleMission(string scene, bool usesTownDecalAtlas, string sceneLevels = "")` | 方法 |
| `OpenNavalRaidMission` | `public static IMission OpenNavalRaidMission(TroopRoster attackerSideTroops, BattleSideEnum navalSide, List<Ship>allShips)` | 方法 |
| `OpenAlleyFightMission` | `public static IMission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | 方法 |
| `OpenCombatMissionWithDialogue` | `public static IMission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)` | 方法 |
| `OpenBattleMissionWhileEnteringSettlement` | `public static IMission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)` | 方法 |
| `OpenHideoutBattleMission` | `public static IMission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops, bool isTutorial)` | 方法 |
| `OpenSiegeMissionWithDeployment` | `public static IMission OpenSiegeMissionWithDeployment(string scene, float[]wallHitPointsPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon>siegeWeaponsOfAttackers, List<MissionSiegeWeapon>siegeWeaponsOfDefenders, bool isPlayerAttacker, int upgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)` | 方法 |
| `OpenSiegeMissionNoDeployment` | `public static IMission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)` | 方法 |
| `OpenSiegeLordsHallFightMission` | `public static IMission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)` | 方法 |
| `OpenBattleMission` | `public static IMission OpenBattleMission(MissionInitializerRecord rec)` | 方法 |
| `OpenNavalBattleMission` | `public static IMission OpenNavalBattleMission(MissionInitializerRecord rec)` | 方法 |
| `OpenNavalSetPieceBattleMission` | `public static IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin>playerShips, MBList<IShipOrigin>playerAllyShips, MBList<IShipOrigin>enemyShips)` | 方法 |
| `OpenCaravanBattleMission` | `public static IMission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)` | 方法 |
| `OpenTownCenterMission` | `public static IMission OpenTownCenterMission(string scene, Location location, CharacterObject talkToChar, int townUpgradeLevel, string playerSpawnTag)` | 方法 |
| `OpenCastleCourtyardMission` | `public static IMission OpenCastleCourtyardMission(string scene, Location location, CharacterObject talkToChar, int castleUpgradeLevel)` | 方法 |
| `OpenVillageMission` | `public static IMission OpenVillageMission(string scene, Location location, CharacterObject talkToChar)` | 方法 |
| `OpenIndoorMission` | `public static IMission OpenIndoorMission(string scene, int upgradeLevel, Location location, CharacterObject talkToChar)` | 方法 |
| `OpenPrisonBreakMission` | `public static IMission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)` | 方法 |
| `OpenArenaStartMission` | `public static IMission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar)` | 方法 |
| `OpenArenaDuelMission` | `public static IMission OpenArenaDuelMission(string scene, Location location, CharacterObject talkToChar, bool requireCivilianEquipment, bool spawnBothSidesWithHorse, Action<CharacterObject>onDuelEnd, float customAgentHealth)` | 方法 |
| `OpenConversationMission` | `public static IMission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "", bool isMultiAgentConversation = false)` | 方法 |
| `OpenRetirementMission` | `public static IMission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")` | 方法 |
| `OpenHideoutAmbushMission` | `public static IMission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)` | 方法 |
| `OpenDisguiseMission` | `public static IMission OpenDisguiseMission(string scene, bool willSetUpContact, string sceneLevels, Location fromLocation)` | 方法 |
| `ICampaignMissionManager` | `public interface ICampaignMissionManager` | 属性 |
| `ICampaignMissionManager` | `public interface ICampaignMissionManager` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionNotes](../ActionNotes/)
- [同命名空间 AIBehaviorData](../AIBehaviorData/)
- [同命名空间 Army](../Army/)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid/)
