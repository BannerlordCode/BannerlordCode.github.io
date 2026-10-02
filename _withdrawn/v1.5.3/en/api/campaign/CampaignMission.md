---
title: "CampaignMission"
description: "Auto-generated class reference for CampaignMission."
---
# CampaignMission

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignMission `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/CampaignMission.cs

## Overview

Auto-generated stub for `CampaignMission`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OpenBattleMission
`public static IMission OpenBattleMission(string scene,bool usesTownDecalAtlas,string sceneLevels = "")`

### OpenNavalRaidMission
`public static IMission OpenNavalRaidMission(TroopRoster attackerSideTroops,BattleSideEnum navalSide,List<Ship> allShips)`

### OpenAlleyFightMission
`public static IMission OpenAlleyFightMission(string scene,int upgradeLevel,Location location,TroopRoster playerSideTroops,TroopRoster rivalSideTroops)`

### OpenCombatMissionWithDialogue
`public static IMission OpenCombatMissionWithDialogue(string scene,CharacterObject characterToTalkTo,int upgradeLevel)`

### OpenBattleMissionWhileEnteringSettlement
`public static IMission OpenBattleMissionWhileEnteringSettlement(string scene,int upgradeLevel,int numberOfMaxTroopToBeSpawnedForPlayer,int numberOfMaxTroopToBeSpawnedForOpponent)`

### OpenHideoutBattleMission
`public static IMission OpenHideoutBattleMission(string scene,FlattenedTroopRoster playerTroops,bool isTutorial)`

### OpenSiegeMissionWithDeployment
`public static IMission OpenSiegeMissionWithDeployment(string scene,float[] wallHitPointsPercentages,bool hasAnySiegeTower,List<MissionSiegeWeapon> siegeWeaponsOfAttackers,List<MissionSiegeWeapon> siegeWeaponsOfDefenders,bool isPlayerAttacker,int upgradeLevel = 0,bool isSallyOut = false,bool isReliefForceAttack = false)`

### OpenSiegeMissionNoDeployment
`public static IMission OpenSiegeMissionNoDeployment(string scene,bool isSallyOut = false,bool isReliefForceAttack = false)`

### OpenSiegeLordsHallFightMission
`public static IMission OpenSiegeLordsHallFightMission(string scene,FlattenedTroopRoster attackerPriorityList)`

### OpenNavalBattleMission
`public static IMission OpenNavalBattleMission(MissionInitializerRecord rec)`

### OpenNavalSetPieceBattleMission
`public static IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec,MBList<IShipOrigin> playerShips,MBList<IShipOrigin> playerAllyShips,MBList<IShipOrigin> enemyShips)`

### OpenCaravanBattleMission
`public static IMission OpenCaravanBattleMission(MissionInitializerRecord rec,bool isCaravan)`

### OpenTownCenterMission
`public static IMission OpenTownCenterMission(string scene,Location location,CharacterObject talkToChar,int townUpgradeLevel,string playerSpawnTag)`

### OpenCastleCourtyardMission
`public static IMission OpenCastleCourtyardMission(string scene,Location location,CharacterObject talkToChar,int castleUpgradeLevel)`

### OpenVillageMission
`public static IMission OpenVillageMission(string scene,Location location,CharacterObject talkToChar)`

### OpenIndoorMission
`public static IMission OpenIndoorMission(string scene,int upgradeLevel,Location location,CharacterObject talkToChar)`

### OpenPrisonBreakMission
`public static IMission OpenPrisonBreakMission(string scene,Location location,CharacterObject prisonerCharacter)`

### OpenArenaStartMission
`public static IMission OpenArenaStartMission(string scene,Location location,CharacterObject talkToChar)`

### OpenArenaDuelMission
`public static IMission OpenArenaDuelMission(string scene,Location location,CharacterObject talkToChar,bool requireCivilianEquipment,bool spawnBothSidesWithHorse,Action<CharacterObject> onDuelEnd,float customAgentHealth)`

### OpenConversationMission
`public static IMission OpenConversationMission(ConversationCharacterData playerCharacterData,ConversationCharacterData conversationPartnerData,string specialScene = "",string sceneLevels = "",bool isMultiAgentConversation = false)`

### OpenRetirementMission
`public static IMission OpenRetirementMission(string scene,Location location,CharacterObject talkToChar = null,string sceneLevels = null,string unconsciousMenuId = "")`

### OpenHideoutAmbushMission
`public static IMission OpenHideoutAmbushMission(string sceneName,FlattenedTroopRoster playerTroops,Location location)`

### OpenDisguiseMission
`public static IMission OpenDisguiseMission(string scene,bool willSetUpContact,string sceneLevels,Location fromLocation)`

## See Also

- [Section index](../)
