<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignMission`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `open battle mission`.

### OpenAlleyFightMission
`public static IMission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**Purpose:** Handles logic related to `open alley fight mission`.

### OpenCombatMissionWithDialogue
`public static IMission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)`

**Purpose:** Handles logic related to `open combat mission with dialogue`.

### OpenBattleMissionWhileEnteringSettlement
`public static IMission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)`

**Purpose:** Handles logic related to `open battle mission while entering settlement`.

### OpenHideoutBattleMission
`public static IMission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops)`

**Purpose:** Handles logic related to `open hideout battle mission`.

### OpenSiegeMissionWithDeployment
`public static IMission OpenSiegeMissionWithDeployment(string scene, float wallHitPointsPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int upgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)`

**Purpose:** Handles logic related to `open siege mission with deployment`.

### OpenSiegeMissionNoDeployment
`public static IMission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)`

**Purpose:** Handles logic related to `open siege mission no deployment`.

### OpenSiegeLordsHallFightMission
`public static IMission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)`

**Purpose:** Handles logic related to `open siege lords hall fight mission`.

### OpenBattleMission
`public static IMission OpenBattleMission(MissionInitializerRecord rec)`

**Purpose:** Handles logic related to `open battle mission`.

### OpenNavalBattleMission
`public static IMission OpenNavalBattleMission(MissionInitializerRecord rec)`

**Purpose:** Handles logic related to `open naval battle mission`.

### OpenNavalSetPieceBattleMission
`public static IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin> playerShips, MBList<IShipOrigin> playerAllyShips, MBList<IShipOrigin> enemyShips)`

**Purpose:** Handles logic related to `open naval set piece battle mission`.

### OpenCaravanBattleMission
`public static IMission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)`

**Purpose:** Handles logic related to `open caravan battle mission`.

### OpenTownCenterMission
`public static IMission OpenTownCenterMission(string scene, Location location, CharacterObject talkToChar, int townUpgradeLevel, string playerSpawnTag)`

**Purpose:** Handles logic related to `open town center mission`.

### OpenCastleCourtyardMission
`public static IMission OpenCastleCourtyardMission(string scene, Location location, CharacterObject talkToChar, int castleUpgradeLevel)`

**Purpose:** Handles logic related to `open castle courtyard mission`.

### OpenVillageMission
`public static IMission OpenVillageMission(string scene, Location location, CharacterObject talkToChar)`

**Purpose:** Handles logic related to `open village mission`.

### OpenIndoorMission
`public static IMission OpenIndoorMission(string scene, int upgradeLevel, Location location, CharacterObject talkToChar)`

**Purpose:** Handles logic related to `open indoor mission`.

### OpenPrisonBreakMission
`public static IMission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)`

**Purpose:** Handles logic related to `open prison break mission`.

### OpenArenaStartMission
`public static IMission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar)`

**Purpose:** Handles logic related to `open arena start mission`.

### OpenArenaDuelMission
`public static IMission OpenArenaDuelMission(string scene, Location location, CharacterObject talkToChar, bool requireCivilianEquipment, bool spawnBothSidesWithHorse, Action<CharacterObject> onDuelEnd, float customAgentHealth)`

**Purpose:** Handles logic related to `open arena duel mission`.

### OpenConversationMission
`public static IMission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "")`

**Purpose:** Handles logic related to `open conversation mission`.

### OpenRetirementMission
`public static IMission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")`

**Purpose:** Handles logic related to `open retirement mission`.

### OpenHideoutAmbushMission
`public static IMission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)`

**Purpose:** Handles logic related to `open hideout ambush mission`.

### OpenDisguiseMission
`public static IMission OpenDisguiseMission(string scene, bool willSetUpContact, string sceneLevels, Location fromLocation)`

**Purpose:** Handles logic related to `open disguise mission`.

## Usage Example

```csharp
CampaignMission.OpenBattleMission("example", false);
```

## See Also

- [Complete Class Catalog](../catalog)