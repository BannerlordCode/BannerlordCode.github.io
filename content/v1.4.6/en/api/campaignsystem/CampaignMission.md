---
title: "CampaignMission"
description: "CampaignMission: a public class in TaleWorlds.CampaignSystem; 27 exposed members (24 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignMission.cs."
---
# CampaignMission

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class CampaignMission`
**File:** `TaleWorlds.CampaignSystem/CampaignMission.cs`

## Overview

CampaignMission lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignMission.cs. It is a public class; the inheritance chain is CampaignMission. It exposes 27 public/protected members: 24 methods, 2 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignMission is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain CampaignMission. The surface is method-led (methods 24/27, properties 2/27), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignMission.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static ICampaignMission Current` | property |
| `OpenBattleMission` | `public static IMission OpenBattleMission(string scene, bool usesTownDecalAtlas, string sceneLevels = "")` | method |
| `OpenNavalRaidMission` | `public static IMission OpenNavalRaidMission(TroopRoster attackerSideTroops, BattleSideEnum navalSide, List<Ship>allShips)` | method |
| `OpenAlleyFightMission` | `public static IMission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | method |
| `OpenCombatMissionWithDialogue` | `public static IMission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)` | method |
| `OpenBattleMissionWhileEnteringSettlement` | `public static IMission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)` | method |
| `OpenHideoutBattleMission` | `public static IMission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops, bool isTutorial)` | method |
| `OpenSiegeMissionWithDeployment` | `public static IMission OpenSiegeMissionWithDeployment(string scene, float[]wallHitPointsPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon>siegeWeaponsOfAttackers, List<MissionSiegeWeapon>siegeWeaponsOfDefenders, bool isPlayerAttacker, int upgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)` | method |
| `OpenSiegeMissionNoDeployment` | `public static IMission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)` | method |
| `OpenSiegeLordsHallFightMission` | `public static IMission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)` | method |
| `OpenBattleMission` | `public static IMission OpenBattleMission(MissionInitializerRecord rec)` | method |
| `OpenNavalBattleMission` | `public static IMission OpenNavalBattleMission(MissionInitializerRecord rec)` | method |
| `OpenNavalSetPieceBattleMission` | `public static IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin>playerShips, MBList<IShipOrigin>playerAllyShips, MBList<IShipOrigin>enemyShips)` | method |
| `OpenCaravanBattleMission` | `public static IMission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)` | method |
| `OpenTownCenterMission` | `public static IMission OpenTownCenterMission(string scene, Location location, CharacterObject talkToChar, int townUpgradeLevel, string playerSpawnTag)` | method |
| `OpenCastleCourtyardMission` | `public static IMission OpenCastleCourtyardMission(string scene, Location location, CharacterObject talkToChar, int castleUpgradeLevel)` | method |
| `OpenVillageMission` | `public static IMission OpenVillageMission(string scene, Location location, CharacterObject talkToChar)` | method |
| `OpenIndoorMission` | `public static IMission OpenIndoorMission(string scene, int upgradeLevel, Location location, CharacterObject talkToChar)` | method |
| `OpenPrisonBreakMission` | `public static IMission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)` | method |
| `OpenArenaStartMission` | `public static IMission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar)` | method |
| `OpenArenaDuelMission` | `public static IMission OpenArenaDuelMission(string scene, Location location, CharacterObject talkToChar, bool requireCivilianEquipment, bool spawnBothSidesWithHorse, Action<CharacterObject>onDuelEnd, float customAgentHealth)` | method |
| `OpenConversationMission` | `public static IMission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "", bool isMultiAgentConversation = false)` | method |
| `OpenRetirementMission` | `public static IMission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")` | method |
| `OpenHideoutAmbushMission` | `public static IMission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)` | method |
| `OpenDisguiseMission` | `public static IMission OpenDisguiseMission(string scene, bool willSetUpContact, string sceneLevels, Location fromLocation)` | method |
| `ICampaignMissionManager` | `public interface ICampaignMissionManager` | property |
| `ICampaignMissionManager` | `public interface ICampaignMissionManager` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
