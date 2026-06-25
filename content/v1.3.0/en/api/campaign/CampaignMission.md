---
title: "CampaignMission"
description: "Auto-generated class reference for CampaignMission."
---
# CampaignMission

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignMission`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignMission.cs`

## Overview

`CampaignMission` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static ICampaignMission Current { get; set; }` |

## Key Methods

### OpenBattleMission
`public static IMission OpenBattleMission(string scene, bool usesTownDecalAtlas)`

**Purpose:** Opens the resource or UI associated with battle mission.

```csharp
// Static call; no instance required
CampaignMission.OpenBattleMission("example", false);
```

### OpenAlleyFightMission
`public static IMission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**Purpose:** Opens the resource or UI associated with alley fight mission.

```csharp
// Static call; no instance required
CampaignMission.OpenAlleyFightMission("example", 0, location, playerSideTroops, rivalSideTroops);
```

### OpenCombatMissionWithDialogue
`public static IMission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)`

**Purpose:** Opens the resource or UI associated with combat mission with dialogue.

```csharp
// Static call; no instance required
CampaignMission.OpenCombatMissionWithDialogue("example", characterToTalkTo, 0);
```

### OpenBattleMissionWhileEnteringSettlement
`public static IMission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)`

**Purpose:** Opens the resource or UI associated with battle mission while entering settlement.

```csharp
// Static call; no instance required
CampaignMission.OpenBattleMissionWhileEnteringSettlement("example", 0, 0, 0);
```

### OpenHideoutBattleMission
`public static IMission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops)`

**Purpose:** Opens the resource or UI associated with hideout battle mission.

```csharp
// Static call; no instance required
CampaignMission.OpenHideoutBattleMission("example", playerTroops);
```

### OpenSiegeMissionWithDeployment
`public static IMission OpenSiegeMissionWithDeployment(string scene, float wallHitPointsPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int upgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)`

**Purpose:** Opens the resource or UI associated with siege mission with deployment.

```csharp
// Static call; no instance required
CampaignMission.OpenSiegeMissionWithDeployment("example", 0, false, siegeWeaponsOfAttackers, siegeWeaponsOfDefenders, false, 0, false, false);
```

### OpenSiegeMissionNoDeployment
`public static IMission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)`

**Purpose:** Opens the resource or UI associated with siege mission no deployment.

```csharp
// Static call; no instance required
CampaignMission.OpenSiegeMissionNoDeployment("example", false, false);
```

### OpenSiegeLordsHallFightMission
`public static IMission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)`

**Purpose:** Opens the resource or UI associated with siege lords hall fight mission.

```csharp
// Static call; no instance required
CampaignMission.OpenSiegeLordsHallFightMission("example", attackerPriorityList);
```

### OpenBattleMission
`public static IMission OpenBattleMission(MissionInitializerRecord rec)`

**Purpose:** Opens the resource or UI associated with battle mission.

```csharp
// Static call; no instance required
CampaignMission.OpenBattleMission(rec);
```

### OpenNavalBattleMission
`public static IMission OpenNavalBattleMission(MissionInitializerRecord rec)`

**Purpose:** Opens the resource or UI associated with naval battle mission.

```csharp
// Static call; no instance required
CampaignMission.OpenNavalBattleMission(rec);
```

### OpenNavalSetPieceBattleMission
`public static IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin> playerShips, MBList<IShipOrigin> playerAllyShips, MBList<IShipOrigin> enemyShips)`

**Purpose:** Opens the resource or UI associated with naval set piece battle mission.

```csharp
// Static call; no instance required
CampaignMission.OpenNavalSetPieceBattleMission(rec, playerShips, playerAllyShips, enemyShips);
```

### OpenCaravanBattleMission
`public static IMission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)`

**Purpose:** Opens the resource or UI associated with caravan battle mission.

```csharp
// Static call; no instance required
CampaignMission.OpenCaravanBattleMission(rec, false);
```

### OpenTownCenterMission
`public static IMission OpenTownCenterMission(string scene, Location location, CharacterObject talkToChar, int townUpgradeLevel, string playerSpawnTag)`

**Purpose:** Opens the resource or UI associated with town center mission.

```csharp
// Static call; no instance required
CampaignMission.OpenTownCenterMission("example", location, talkToChar, 0, "example");
```

### OpenCastleCourtyardMission
`public static IMission OpenCastleCourtyardMission(string scene, Location location, CharacterObject talkToChar, int castleUpgradeLevel)`

**Purpose:** Opens the resource or UI associated with castle courtyard mission.

```csharp
// Static call; no instance required
CampaignMission.OpenCastleCourtyardMission("example", location, talkToChar, 0);
```

### OpenVillageMission
`public static IMission OpenVillageMission(string scene, Location location, CharacterObject talkToChar)`

**Purpose:** Opens the resource or UI associated with village mission.

```csharp
// Static call; no instance required
CampaignMission.OpenVillageMission("example", location, talkToChar);
```

### OpenIndoorMission
`public static IMission OpenIndoorMission(string scene, int upgradeLevel, Location location, CharacterObject talkToChar)`

**Purpose:** Opens the resource or UI associated with indoor mission.

```csharp
// Static call; no instance required
CampaignMission.OpenIndoorMission("example", 0, location, talkToChar);
```

### OpenPrisonBreakMission
`public static IMission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)`

**Purpose:** Opens the resource or UI associated with prison break mission.

```csharp
// Static call; no instance required
CampaignMission.OpenPrisonBreakMission("example", location, prisonerCharacter);
```

### OpenArenaStartMission
`public static IMission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar)`

**Purpose:** Opens the resource or UI associated with arena start mission.

```csharp
// Static call; no instance required
CampaignMission.OpenArenaStartMission("example", location, talkToChar);
```

### OpenArenaDuelMission
`public static IMission OpenArenaDuelMission(string scene, Location location, CharacterObject talkToChar, bool requireCivilianEquipment, bool spawnBothSidesWithHorse, Action<CharacterObject> onDuelEnd, float customAgentHealth)`

**Purpose:** Opens the resource or UI associated with arena duel mission.

```csharp
// Static call; no instance required
CampaignMission.OpenArenaDuelMission("example", location, talkToChar, false, false, onDuelEnd, 0);
```

### OpenConversationMission
`public static IMission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "")`

**Purpose:** Opens the resource or UI associated with conversation mission.

```csharp
// Static call; no instance required
CampaignMission.OpenConversationMission(playerCharacterData, conversationPartnerData, "example", "example");
```

### OpenRetirementMission
`public static IMission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")`

**Purpose:** Opens the resource or UI associated with retirement mission.

```csharp
// Static call; no instance required
CampaignMission.OpenRetirementMission("example", location, null, "example", "example");
```

### OpenHideoutAmbushMission
`public static IMission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)`

**Purpose:** Opens the resource or UI associated with hideout ambush mission.

```csharp
// Static call; no instance required
CampaignMission.OpenHideoutAmbushMission("example", playerTroops, location);
```

### OpenDisguiseMission
`public static IMission OpenDisguiseMission(string scene, bool willSetUpContact, string sceneLevels, Location fromLocation)`

**Purpose:** Opens the resource or UI associated with disguise mission.

```csharp
// Static call; no instance required
CampaignMission.OpenDisguiseMission("example", false, "example", fromLocation);
```

## Usage Example

```csharp
CampaignMission.OpenBattleMission("example", false);
```

## See Also

- [Area Index](../)