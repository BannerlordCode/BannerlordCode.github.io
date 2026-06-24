<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ICampaignMissionManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ICampaignMissionManager

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** `public interface ICampaignMissionManager`
**领域:** campaign-ext

## 概述

`ICampaignMissionManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ICampaignMissionManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static ICampaignMission Current { get; set; }` |

## 主要方法

### OpenBattleMission
`public static IMission OpenBattleMission(string scene, bool usesTownDecalAtlas)`

**用途 / Purpose:** 处理 `open battle mission` 相关逻辑。

### OpenAlleyFightMission
`public static IMission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`

**用途 / Purpose:** 处理 `open alley fight mission` 相关逻辑。

### OpenCombatMissionWithDialogue
`public static IMission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)`

**用途 / Purpose:** 处理 `open combat mission with dialogue` 相关逻辑。

### OpenBattleMissionWhileEnteringSettlement
`public static IMission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)`

**用途 / Purpose:** 处理 `open battle mission while entering settlement` 相关逻辑。

### OpenHideoutBattleMission
`public static IMission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops, bool isTutorial)`

**用途 / Purpose:** 处理 `open hideout battle mission` 相关逻辑。

### OpenSiegeMissionWithDeployment
`public static IMission OpenSiegeMissionWithDeployment(string scene, float wallHitPointsPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int upgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)`

**用途 / Purpose:** 处理 `open siege mission with deployment` 相关逻辑。

### OpenSiegeMissionNoDeployment
`public static IMission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)`

**用途 / Purpose:** 处理 `open siege mission no deployment` 相关逻辑。

### OpenSiegeLordsHallFightMission
`public static IMission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)`

**用途 / Purpose:** 处理 `open siege lords hall fight mission` 相关逻辑。

### OpenBattleMission
`public static IMission OpenBattleMission(MissionInitializerRecord rec)`

**用途 / Purpose:** 处理 `open battle mission` 相关逻辑。

### OpenNavalBattleMission
`public static IMission OpenNavalBattleMission(MissionInitializerRecord rec)`

**用途 / Purpose:** 处理 `open naval battle mission` 相关逻辑。

### OpenNavalSetPieceBattleMission
`public static IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin> playerShips, MBList<IShipOrigin> playerAllyShips, MBList<IShipOrigin> enemyShips)`

**用途 / Purpose:** 处理 `open naval set piece battle mission` 相关逻辑。

### OpenCaravanBattleMission
`public static IMission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)`

**用途 / Purpose:** 处理 `open caravan battle mission` 相关逻辑。

### OpenTownCenterMission
`public static IMission OpenTownCenterMission(string scene, Location location, CharacterObject talkToChar, int townUpgradeLevel, string playerSpawnTag)`

**用途 / Purpose:** 处理 `open town center mission` 相关逻辑。

### OpenCastleCourtyardMission
`public static IMission OpenCastleCourtyardMission(string scene, Location location, CharacterObject talkToChar, int castleUpgradeLevel)`

**用途 / Purpose:** 处理 `open castle courtyard mission` 相关逻辑。

### OpenVillageMission
`public static IMission OpenVillageMission(string scene, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** 处理 `open village mission` 相关逻辑。

### OpenIndoorMission
`public static IMission OpenIndoorMission(string scene, int upgradeLevel, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** 处理 `open indoor mission` 相关逻辑。

### OpenPrisonBreakMission
`public static IMission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)`

**用途 / Purpose:** 处理 `open prison break mission` 相关逻辑。

### OpenArenaStartMission
`public static IMission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar)`

**用途 / Purpose:** 处理 `open arena start mission` 相关逻辑。

### OpenArenaDuelMission
`public static IMission OpenArenaDuelMission(string scene, Location location, CharacterObject talkToChar, bool requireCivilianEquipment, bool spawnBothSidesWithHorse, Action<CharacterObject> onDuelEnd, float customAgentHealth)`

**用途 / Purpose:** 处理 `open arena duel mission` 相关逻辑。

### OpenConversationMission
`public static IMission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "", bool isMultiAgentConversation = false)`

**用途 / Purpose:** 处理 `open conversation mission` 相关逻辑。

## 使用示例

```csharp
ICampaignMissionManager implementation = GetCampaignMissionManagerImplementation();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
