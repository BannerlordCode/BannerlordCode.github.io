<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICampaignMissionManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ICampaignMissionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** interface
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ICampaignMissionManager` is a interface in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static ICampaignMission Current { get; set; }` |


## Key Methods

### OpenBattleMission

```csharp
public static IMission OpenBattleMission(string scene, bool usesTownDecalAtlas)
```

### OpenAlleyFightMission

```csharp
public static IMission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)
```

### OpenCombatMissionWithDialogue

```csharp
public static IMission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)
```

### OpenBattleMissionWhileEnteringSettlement

```csharp
public static IMission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)
```

### OpenHideoutBattleMission

```csharp
public static IMission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops, bool isTutorial)
```

### OpenSiegeMissionWithDeployment

```csharp
public static IMission OpenSiegeMissionWithDeployment(string scene, float wallHitPointsPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int upgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)
```

### OpenSiegeMissionNoDeployment

```csharp
public static IMission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)
```

### OpenSiegeLordsHallFightMission

```csharp
public static IMission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)
```

### OpenBattleMission

```csharp
public static IMission OpenBattleMission(MissionInitializerRecord rec)
```

### OpenNavalBattleMission

```csharp
public static IMission OpenNavalBattleMission(MissionInitializerRecord rec)
```

### OpenNavalSetPieceBattleMission

```csharp
public static IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin> playerShips, MBList<IShipOrigin> playerAllyShips, MBList<IShipOrigin> enemyShips)
```

### OpenCaravanBattleMission

```csharp
public static IMission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)
```

### OpenTownCenterMission

```csharp
public static IMission OpenTownCenterMission(string scene, Location location, CharacterObject talkToChar, int townUpgradeLevel, string playerSpawnTag)
```

### OpenCastleCourtyardMission

```csharp
public static IMission OpenCastleCourtyardMission(string scene, Location location, CharacterObject talkToChar, int castleUpgradeLevel)
```

### OpenVillageMission

```csharp
public static IMission OpenVillageMission(string scene, Location location, CharacterObject talkToChar)
```

### OpenIndoorMission

```csharp
public static IMission OpenIndoorMission(string scene, int upgradeLevel, Location location, CharacterObject talkToChar)
```

### OpenPrisonBreakMission

```csharp
public static IMission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)
```

### OpenArenaStartMission

```csharp
public static IMission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar)
```

### OpenArenaDuelMission

```csharp
public static IMission OpenArenaDuelMission(string scene, Location location, CharacterObject talkToChar, bool requireCivilianEquipment, bool spawnBothSidesWithHorse, Action<CharacterObject> onDuelEnd, float customAgentHealth)
```

### OpenConversationMission

```csharp
public static IMission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "", bool isMultiAgentConversation = false)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)