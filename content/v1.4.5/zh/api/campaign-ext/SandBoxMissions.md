---
title: "SandBoxMissions"
description: "SandBox 中构建 initializer record、选择任务 ID 并附加战役任务行为的任务 factory。"
---
# SandBoxMissions

**命名空间:** `SandBox`  
**模块:** `SandBox`  
**类型:** `public static class SandBoxMissions`  
**基类:** 无  
**源文件:** `Modules.SandBox/SandBox/Sandbox/SandBoxMissions.cs`

## 概述

`SandBoxMissions` 是 SandBox runtime 使用的 `[MissionManager]` 静态 factory，负责把战役遭遇输入转换成活动的 `Mission`。它的成员要么构建 `MissionInitializerRecord`，要么用任务 ID、initializer 和行为 delegate 调用 `MissionState.OpenNew`。场景等级、战役天气、地形、部队供应器、地点逻辑、战斗/攻城逻辑以及 [CampaignMissionComponent](../CampaignMissionComponent) 都是在这一层组合起来的。

## 心智模型

把它看成 `CampaignMission` -> `Campaign.Current.CampaignMissionManager` -> `CampaignMissionManager` -> `SandBoxMissions` 这条链的最后一个 SandBox 构建层。它不是有状态 manager，也没有当前任务属性。factory 调用消耗遭遇方提供的场景、地点、编队、对话或攻城状态，并立即开启新的任务状态。

大多数战役任务 factory 都会把 `CampaignMissionComponent` 放入传给 `MissionState.OpenNew` 的行为数组。该组件在创建时通过 `CampaignMission.Current` 发布新任务，在任务结束时清理它。复制某个 factory 调用却省略组件，会改变生命周期契约：战役回调、地点访问和任务结果传递可能失效，即使场景本身仍能加载。

## 依赖关系

- [CampaignMission](../../campaign/CampaignMission) 是战役侧的 factory 路由。
- [CampaignMissionManager](../CampaignMissionManager) 把战役契约转发到这个静态类。
- [CampaignMissionComponent](../CampaignMissionComponent) 把新建的 `Mission` 连接回 `CampaignMission.Current`。
- [Mission](../../mission/Mission) 持有 factory 返回的场景和行为生命周期。

这些公共方法假设战役遭遇已经拥有相互兼容的场景、地点、roster、角色和地图事件状态。本类负责构建，不替代这些状态的所有者。

## Factory 流程

1. `CreateSandBoxMissionInitializerRecord` 读取主队或当前地图事件的位置、难度伤害倍率、战役天气、地形、场景等级、加载屏幕选择和 decal atlas 组。
2. 公共 `Open*` 方法把这个 record 与 `Location`、`TroopRoster`、`FlattenedTroopRoster`、`ConversationCharacterData`、`MissionSiegeWeapon` 或 `CharacterObject` 等遭遇状态组合起来。
3. 方法用稳定的任务 ID 和行为 initializer 调用 `MissionState.OpenNew`。delegate 创建任务逻辑、agent 处理器、战斗/攻城控制器，并通常添加 `CampaignMissionComponent`。
4. 返回的 `Mission` 持有活动场景和行为生命周期。切换后应从当前任务重新获取任务对象，并在任务结束时停止使用旧引用。

## Initializer record

| 方法 | 源码中的行为 |
| --- | --- |
| `public static MissionInitializerRecord CreateSandBoxMissionInitializerRecord(string sceneName, string sceneLevels, bool doNotUseLoadingScreen, DecalAtlasGroup decalAtlasGroup)` | 当前地图事件存在时使用 `MobileParty.MainParty.MapEvent.Position`，否则使用主队位置；填入难度伤害倍率、战役气氛、地形、场景等级、加载屏幕选项和 decal atlas 组。 |
| `public static MissionInitializerRecord CreateSandBoxTrainingMissionInitializerRecord(string sceneName, string sceneLevels = "", bool doNotUseLoadingScreen = false)` | 创建训练任务 initializer，填入游戏模式、天气、地形、场景等级和训练专用伤害默认值。 |

这两个方法只创建数据，不会自行打开任务。`TournamentMissionStarter` 和 StoryMode 任务代码会把 record 作为自己的 `MissionState.OpenNew` 输入。

## 聚落与地点任务

| 方法 | 任务 ID 与关键输入 |
| --- | --- |
| `public static Mission OpenTownCenterMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar, string playerSpawnTag)` | 通过 `LocationModel.GetCivilianUpgradeLevelTag` 转换城镇等级，再调用字符串等级重载，最终任务 ID 为 `TownCenter`。 |
| `public static Mission OpenTownCenterMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)` | 打开 `TownCenter`，附加聚落准备、地点/出生点、对话、agent、工坊、犯罪和战役任务行为。 |
| `public static Mission OpenTownCenterShadowATargetMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar, string playerSpawnTag)` | 使用 `TownCenter` 任务 ID，但采用 shadow-a-target 的行为组合。 |
| `public static Mission OpenCastleCourtyardMission(string scene, int castleUpgradeLevel, Location location, CharacterObject talkToChar)` | 转换数值等级，再委托字符串等级重载。 |
| `public static Mission OpenCastleCourtyardMission(string scene, string sceneLevels, Location location, CharacterObject talkToChar)` | 使用城堡庭院地点和对话行为打开 `TownCenter`。 |
| `public static Mission OpenIndoorMission(string scene, int townUpgradeLevel, Location location, CharacterObject talkToChar)` | 转换数值等级，再委托地点版 indoor 重载。 |
| `public static Mission OpenIndoorMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")` | 打开 `Indoor`，附加地点、对话、agent、犯罪和战役任务行为。 |
| `public static Mission OpenPrisonBreakMission(string scene, Location location, CharacterObject prisonerCharacter)` | 打开 `PrisonBreak`，把地点和囚犯交给越狱逻辑。 |
| `public static Mission OpenVillageMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null)` | 打开 `Village`，选择地点场景等级并附加村庄专用 agent、对话和战役任务行为。 |

地点重载要求调用方选择的 `Location` 本来就属于该场景。把另一个聚落的 `Location` 和一个场景名一起传入，不会让二者自动匹配。

## 竞技场与特殊角色任务

| 方法 | 任务 ID 与关键输入 |
| --- | --- |
| `public static Mission OpenArenaStartMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = "")` | 打开 `ArenaPracticeFight`，附加竞技场逻辑和可选对话角色。 |
| `public static Mission OpenRetirementMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null, string unconsciousMenuId = "")` | 打开 `Retirement`，保留地点、对话和失去意识菜单上下文。 |
| `public static Mission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject> onDuelEnd, float customAgentHealth, string sceneLevels = "")` | 打开 `ArenaDuelMission`；装备、马匹、回调和自定义生命值参数会影响决斗行为组合。 |
| `public static Mission OpenArenaDuelMission(string scene, Location location)` | 为该地点打开较简单的 `ArenaDuel` 行为组合。 |
| `public static Mission OpenConversationMission(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, string specialScene = "", string sceneLevels = "", bool isMultiAgentConversation = false)` | 当 `specialScene` 为空时选择对话场景，再打开 `Conversation`，并附加 `CampaignMissionComponent` 和对话逻辑。 |
| `public static Mission OpenMeetingMission(string scene, CharacterObject character)` | 先执行“该任务已损坏”的 failed assert，再打开一个对话形状的任务；在本源码快照中应视为不受支持。 |
| `public static Mission OpenDisguiseMission(string scene, bool willSetUpContact, Location fromLocation, string sceneLevels = null)` | 解析 `disguise_contractor_character`，打开 `DisguiseMission`，并附加潜行、检查点、对话、犯罪、地点和战役任务逻辑。 |
| `public static Mission OpenSimpleMountedPlayerMission(string scene, string sceneLevels)` | 可供 editor 使用，打开 `SimpleMountedPlayer`，只附加简单骑乘玩家、选项和离场装备行为；它不会添加 `CampaignMissionComponent`。 |

## 战斗与藏身处任务

| 方法 | 任务 ID 与关键输入 |
| --- | --- |
| `public static Mission OpenBattleMission(MissionInitializerRecord rec)` | 使用调用方准备的 initializer 打开 `Battle`，构建战役 combatant、部队供应器、战斗结束、agent、士气、高亮和战役任务行为。 |
| `public static Mission OpenCaravanBattleMission(MissionInitializerRecord rec, bool isCaravan)` | 打开 `Battle`，并根据当前地图事件推导商队专用双方和部队数量行为。 |
| `public static Mission OpenAlleyFightMission(MissionInitializerRecord rec, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | 使用两方 roster 和地点逻辑打开 `AlleyFight`。 |
| `public static Mission OpenCombatMissionWithDialogue(MissionInitializerRecord rec, CharacterObject characterToTalkTo)` | 使用指定角色的战斗与对话行为打开 `CombatWithDialogue`。 |
| `public static Mission OpenBattleMissionWhileEnteringSettlement(string scene, int upgradeLevel, int numberOfMaxTroopToBeSpawnedForPlayer, int numberOfMaxTroopToBeSpawnedForOpponent)` | 构建 civilian 等级 initializer，以明确的双方出生上限打开 `EnteringSettlementBattle`。 |
| `public static Mission OpenBattleMission(string scene, bool usesTownDecalAtlas, string sceneLevels)` | 根据场景等级和 decal 选择构建 initializer，再委托 record 重载。 |
| `public static Mission OpenAlleyFightMission(string scene, int upgradeLevel, Location location, TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | 将等级转换为 civilian tag，再委托 record 重载。 |
| `public static Mission OpenCombatMissionWithDialogue(string scene, CharacterObject characterToTalkTo, int upgradeLevel)` | 将等级转换为 civilian tag，再委托 record 重载。 |
| `public static Mission OpenHideoutBattleMission(string scene, FlattenedTroopRoster playerTroops, bool isTutorial)` | 打开 `HideoutBattle`；tutorial 使用 `level_1`，否则使用 `level_2`，空的玩家 roster 会替换为主队最强/优先部队。 |
| `public static Mission OpenHideoutAmbushMission(string sceneName, FlattenedTroopRoster playerTroops, Location location)` | 打开 `HideoutAmbushMission`，从先前盟友部队中移除玩家角色，并附加潜行、cinematic、地点、供应器和战役任务逻辑。 |
| `public static Mission OpenCampMission(string scene)` | 打开 `Camp`，附加战役 combatant、战斗结束、任务边界和 `CampaignMissionComponent`。 |

当遭遇已经组装好地图事件状态时，应使用 record 重载。只用场景重新构建 record，可能丢失天气、地形、伤害倍率或地图事件上下文。

## 攻城任务

| 方法 | 任务 ID 与关键输入 |
| --- | --- |
| `public static Mission OpenSiegeMissionWithDeployment(string scene, float[] wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, bool isSallyOut = false, bool isReliefForceAttack = false)` | 打开 `SiegeMissionWithDeployment`，计算攻城场景等级，并同时保留城墙比例、攻城塔、已准备器械、进攻方状态、出城和援军攻击状态。 |
| `public static Mission OpenSiegeMissionNoDeployment(string scene, bool isSallyOut = false, bool isReliefForceAttack = false)` | 使用对应攻城场景等级打开 `SiegeMissionNoDeployment`，不进入部署阶段。 |
| `public static Mission OpenSiegeLordsHallFightMission(string scene, FlattenedTroopRoster attackerPriorityList)` | 根据 `SiegeLordsHallFightModel` 计算防守优先级，并使用攻方优先级、部队供应器和战役攻城状态打开 `SiegeLordsHallFightMission`。 |

## 真实调用示例

### 在任务 starter 中构建 initializer

源码中的锦标赛和 StoryMode starter 会把真实场景值传给 initializer factory，再自行打开任务：

```csharp
MissionInitializerRecord initializer =
    SandBoxMissions.CreateSandBoxTrainingMissionInitializerRecord(
        scene,
        sceneLevels,
        doNotUseLoadingScreen: false);
```

返回的 record 只是数据。它仍需要调用方提供行为 delegate 和 `MissionState.OpenNew`；factory 不会从场景名推断这些内容。

### 从遭遇选择藏身处路线

`HideoutCampaignBehavior` 在保留地点场景和可选的先前部队 roster 的同时，通过战役门面在直接突袭和伏击之间选择：

```csharp
if (isDirectAssault)
{
    CampaignMission.OpenHideoutBattleMission(
        locationWithId.GetSceneName(0),
        hideoutTroops?.ToFlattenedRoster(),
        isTutorial: false);
}
else
{
    CampaignMission.OpenHideoutAmbushMission(
        locationWithId.GetSceneName(0),
        hideoutTroops?.ToFlattenedRoster(),
        locationWithId);
}
```

门面会通过 `CampaignMissionManager` 到达本 factory；mod 通常应保留这个边界，而不是复制静态 factory 调用并漏掉它的行为列表。

### 保留攻城状态

`PlayerSiege` 把部署 factory 需要的城墙比例和已准备器械一起传入：

```csharp
CampaignMission.OpenSiegeMissionWithDeployment(
    besiegedSettlement.LocationComplex.GetLocationWithId("center").GetSceneName(wallLevel),
    besiegedSettlement.SettlementWallSectionHitPointsRatioList.ToArray(),
    hasAnySiegeTower,
    preparedAndActiveSiegeEngines,
    preparedAndActiveSiegeEngines2,
    PlayerEncounter.Current.PlayerSide == BattleSideEnum.Attacker,
    wallLevel);
```

丢弃城墙比例或准备好的器械列表会改变部署模型。`isSallyOut` 和 `isReliefForceAttack` 同样必须与选择该任务的遭遇分支保持一致。

### 使用真实角色数据打开对话

`ParleyCampaignBehavior` 构造两个对话 record，并通过战役门面传入选定场景和等级：

```csharp
ConversationCharacterData playerCharacterData =
    new ConversationCharacterData(Hero.MainHero.CharacterObject, PartyBase.MainParty);
ConversationCharacterData conversationPartnerData =
    new ConversationCharacterData(hero.CharacterObject, hero.PartyBelongedTo?.Party, noHorse: true);
CampaignMission.OpenConversationMission(
    playerCharacterData,
    conversationPartnerData,
    meetingScene,
    sceneLevel);
```

只有 `specialScene` 为空时 factory 才会自行选择对话场景。对话数据和场景必须描述同一个活动遭遇。

## 风险与边界

- **不受支持的 meeting 路线:** v1.4.5 源码中 `OpenMeetingMission` 会先执行带有 `This mission was broken` 消息的 `Debug.FailedAssert`，然后才打开 `Conversation` 任务。不要把它描述成对话或遭遇代码的可靠替代方案。
- **缺少组件:** 大多数战役 factory 都添加 `CampaignMissionComponent`，而面向 editor 的 `OpenSimpleMountedPlayerMission` 是明显例外。复制行为列表时可能丢失 `CampaignMission.Current` 和战役回调。
- **上下文无效:** 场景名、地点 ID、升级等级、地图事件、roster 和攻城器械不能互换。factory 假设调用方已经选择了相互兼容的对象。
- **状态切换:** 所有调用 `MissionState.OpenNew` 的 `Open*` 方法都可能替换活动任务状态。调用之后不要保留任务范围内的引擎引用。
- **不拥有存档:** initializer record 和任务行为是 runtime 对象。只有稳定战役数据才应通过战役存档契约持久化。

## 导航

- 父级：[Campaign extension API](../)
- 契约与路由：[ISandBoxMissionManager](../../campaign/ISandBoxMissionManager) · [CampaignMission](../../campaign/CampaignMission) · [CampaignMissionManager](../CampaignMissionManager)
- 生命周期：[CampaignMissionComponent](../CampaignMissionComponent) · [Mission](../../mission/Mission)
- 相关数据：`MissionInitializerRecord` · [SandBoxMission](../../campaign/SandBoxMission)
