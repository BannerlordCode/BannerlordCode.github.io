<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ICampaignMissionManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ICampaignMissionManager

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 接口 interface interface
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ICampaignMissionManager` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个接口 interface。
> 如需了解其属性、方法和开发者用例，请参考
## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static ICampaignMission Current { get; set; }` |


## 主要方法

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

源码或贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)