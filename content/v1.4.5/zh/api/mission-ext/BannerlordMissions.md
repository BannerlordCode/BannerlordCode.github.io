---
title: "BannerlordMissions"
description: "v1.4.5 用于自定义战斗、围城、领主大厅战斗和任务氛围记录的任务工厂。"
---
# BannerlordMissions

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public static class BannerlordMissions`  
**Base:** 无  
**Attributes:** `[MissionManager]`；三个开启任务的方法还带有 `[MissionMethod]`  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordMissions.cs`

## 一句话职责

`BannerlordMissions` 是游戏持有的任务组装边界：把准备好的自定义战斗输入转换成新的 `Mission`、`MissionInitializerRecord`，以及完整的战斗或围城 `MissionBehavior` 集合。

## 心智模型

这是静态任务编排入口，不是持有可变状态的服务，也不是 `MissionBehavior` 的替代品。每个 `Open*` 方法都会组装任务名称、场景记录、队伍供应器和固定的行为列表，然后委托给 [`MissionState.OpenNew`](../../campaign-ext/MissionState)。`OpenNew` 创建 `Mission`，调用行为初始化委托，压入新的 `MissionState`，最后返回 `Mission`。因此返回值是新任务的宿主，不是脱离运行时的配置对象。

源码中的正常路径是 `CustomBattleVM.ExecuteStart` → `CustomBattleHelper.PrepareBattleData` → `CustomBattleHelper.StartGame` → 其中一个工厂。工厂假定 `CustomBattleData` 已经包含有效的阵营、角色、场景、攻城器械和氛围参数；它不会在索引双方队伍供应器数组或打开场景前替你验证这些关系。

`CreateAtmosphereInfoForMission` 是自定义战斗和多人练习任务使用的小型值构建器。它只把四个字面季节 ID 和五个支持的时间值映射成引擎氛围数据，不会查询战役时钟，也不会计算天气。

## 何时用，何时不用

**适合使用：**

- 使用 `OpenCustomBattleMission` 启动 Custom Battle 野战路径。
- 使用 `OpenSiegeMissionWithDeployment` 启动自定义围城、突围或援军攻击路径。
- 使用 `OpenCustomBattleLordsHallMission` 启动领主大厅自定义战斗路径。
- 为遵循同一源码契约的任务初始化过程构造 [`MissionInitializerRecord`](../../core-extra/MissionInitializerRecord) 的氛围值。

**不适合使用：**

- 向已经运行的任务添加逻辑。应在任务自己的行为边界添加真实的 [`MissionBehavior`](../../mission/MissionBehavior)，不要重新打开全局 `MissionState`。
- 启动战役遭遇、城镇任务或剧情任务。应使用所属 Campaign 或模块的任务工厂，例如 [`CampaignMission`](../../campaign/CampaignMission)；因为这里的自定义战斗记录会硬编码 `PlayingInCampaignMode = false`。
- 修改战役数据、存档数据、队伍所有权或战斗结果。这些属于战役 Action、Behavior 和存档契约，不属于场景工厂。
- 传入占位队伍或目标游戏模式未加载的场景。方法会通过 `MissionState.OpenNew` 立即建立原生场景和 Agent 系统。

## 依赖图

**上游：**

- [`CustomBattleCombatant`](../CustomBattleCombatant) 提供队伍供应器所需的玩家方和敌方阵营。
- [`BasicCharacterObject`](../../core-extra/BasicCharacterObject) 提供玩家和将领角色。
- `CustomBattleData` 由 `CustomBattleHelper.PrepareBattleData` 组装；`CustomBattleHelper.StartGame` 决定进入野战还是围城工厂。
- [`MissionInitializerRecord`](../../core-extra/MissionInitializerRecord) 把场景、氛围、场景等级和 decal atlas 输入带入任务状态。

**下游：**

- [`MissionState`](../../campaign-ext/MissionState) 创建并压入新的任务状态。
- [`Mission`](../../mission/Mission) 持有返回的任务和行为集合。
- 工厂中的 [`MissionBehavior`](../../mission/MissionBehavior) 派生类负责出生、部署、战斗双方、AI、士气、边界、攻城器械和战斗结束处理。
- [`MissionObject`](../MissionObject) 及其场景派生对象会在场景进入任务生命周期后注册；工厂本身不手动注册它们。

## 真实获取路径

源码中的 Custom Battle 入口是现有的 `CustomBattleVM.ExecuteStart`。它先准备完整的数据对象，再由 `CustomBattleHelper.StartGame` 选择工厂：

```csharp
public void ExecuteStart()
{
    CustomBattleHelper.StartGame(PrepareBattleData());
}
```

`CustomBattleHelper.StartGame` 的分支也是源码中真实存在的调用路径，使用的是准备好的对象字段：

```csharp
public static void StartGame(CustomBattleData data)
{
    Game.Current.PlayerTroop = data.PlayerCharacter;
    if (data.GameTypeStringId == "Siege")
    {
        BannerlordMissions.OpenSiegeMissionWithDeployment(
            data.SceneId, data.PlayerCharacter, data.PlayerParty, data.EnemyParty,
            data.IsPlayerGeneral, data.WallHitpointPercentages,
            data.HasAnySiegeTower, data.AttackerMachines, data.DefenderMachines,
            data.IsPlayerAttacker, data.SceneUpgradeLevel, data.SeasonId,
            data.IsSallyOut, data.IsReliefAttack, data.TimeOfDay);
    }
    else
    {
        BannerlordMissions.OpenCustomBattleMission(
            data.SceneId, data.PlayerCharacter, data.PlayerParty, data.EnemyParty,
            data.IsPlayerGeneral, data.PlayerSideGeneralCharacter,
            data.SceneLevel, data.SeasonId, data.TimeOfDay);
    }
}
```

这是模块中已存在的调用路径，不是建议读者自行编造 `CustomBattleData` 字段。若 mod 需要另一种任务，也应保持同样的所有权顺序：先准备有效的任务输入，再通过所属工厂打开任务，最后只附加对该任务生命周期安全的具体 Behavior。

## 关键成员与时机

### CreateAtmosphereInfoForMission

`public static AtmosphereInfo CreateAtmosphereInfoForMission(string seasonId, int timeOfDay)`

返回包含季节整数和时段氛围名称的 [`AtmosphereInfo`](../../core-extra/AtmosphereInfo)。支持的季节是 `spring`、`summer`、`fall`、`winter`；支持的时间是 `6`、`12`、`15`、`18`、`22`。未知季节不会抛异常，而是保留 `0`；未知时间会保留空的氛围名称。

多人练习任务构造初始化记录时也走同一个辅助方法：

```csharp
MissionInitializerRecord record = new MissionInitializerRecord(scene);
record.AtmosphereOnCampaign =
    BannerlordMissions.CreateAtmosphereInfoForMission(seasonString, (int)timeOfDay);
record.SceneLevels = sceneLevels;
```

应在打开任务记录前调用它。不要传入战役季节名称或任意时钟值后再假定方法会自动归一化。

### OpenCustomBattleMission

`public static Mission OpenCustomBattleMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", string seasonString = "", float timeOfDay = 6f)`

打开非战役模式的 `CustomBattle` 任务。它创建两个 `CustomBattleTroopSupplier`，构造 `PlayingInCampaignMode = false`、`DecalAtlasGroup = 2` 的 `MissionInitializerRecord`，并加入野战出生、战斗、AI、部署、边界、Highlights 和目标行为；玩家控制的 Agent 死亡后还允许转而控制另一名 Agent。

方法使用 `playerParty.Side` 和 `enemyParty.Side` 作为两个元素供应器数组的索引。因此调用前双方必须是预期的攻方/守方值，并且不能占用同一方。

源码调用者的非围城分支会把准备好的 `CustomBattleData` 字段直接传入：

```csharp
if (data.GameTypeStringId != "Siege")
{
    BannerlordMissions.OpenCustomBattleMission(
        data.SceneId, data.PlayerCharacter, data.PlayerParty, data.EnemyParty,
        data.IsPlayerGeneral, data.PlayerSideGeneralCharacter,
        data.SceneLevel, data.SeasonId, data.TimeOfDay);
}
```

### OpenSiegeMissionWithDeployment

`public static Mission OpenSiegeMissionWithDeployment(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, float[] wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, string seasonString = "", bool isSallyOut = false, bool isReliefForceAttack = false, float timeOfDay = 6f)`

打开 `CustomSiegeBattle`，组装围城准备、部署、出生、士气、边界和攻城器械行为链。`sceneUpgradeLevel` 为 `1` 时映射 `level_1`，为 `2` 时映射 `level_2`，其他值都映射 `level_3`，随后追加 ` siege`。`isSallyOut` 会改变战斗规模类型和出生/控制器路径；不走突围分支时，`isReliefForceAttack` 会选择援军攻击控制器。

两个 `List<MissionSiegeWeapon>` 参数具有方向性：突围任务与普通围城会以不同顺序传给攻方和守方攻城逻辑。应保持准备好的 `CustomBattleData` 所有权，不要只为改变界面标签而互换列表。

源码调用者的围城分支会从同一个准备好的数据对象提供双方攻城列表和城墙状态：

```csharp
if (data.GameTypeStringId == "Siege")
{
    BannerlordMissions.OpenSiegeMissionWithDeployment(
        data.SceneId, data.PlayerCharacter, data.PlayerParty, data.EnemyParty,
        data.IsPlayerGeneral, data.WallHitpointPercentages,
        data.HasAnySiegeTower, data.AttackerMachines, data.DefenderMachines,
        data.IsPlayerAttacker, data.SceneUpgradeLevel, data.SeasonId,
        data.IsSallyOut, data.IsReliefAttack, data.TimeOfDay);
}
```

### OpenCustomBattleLordsHallMission

`public static Mission OpenCustomBattleLordsHallMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", int sceneUpgradeLevel = 0, string seasonString = "")`

打开 `CustomBattleLordsHall`，固定玩家为攻方，使用 `siege` 场景等级和 decal atlas group `3`，并加入领主大厅战斗控制器。工厂通过局部计数限制守方远程 Agent，使用无 Team AI 的战斗，并比野战和普通围城安装更小的行为集合。签名虽然保留 `sceneUpgradeLevel` 和 `seasonString`，但 v1.4.5 实现使用固定的 `siege` 场景等级，也没有把氛围值放进初始化记录。

在检查到的 v1.4.5 源码快照中，没有找到这个入口的内部调用者。公开签名就是源码契约；不要照抄野战或围城调用者，假装它们能提供领主大厅配置。

```csharp
public static Mission OpenCustomBattleLordsHallMission(
    string scene,
    BasicCharacterObject playerCharacter,
    CustomBattleCombatant playerParty,
    CustomBattleCombatant enemyParty,
    BasicCharacterObject playerSideGeneralCharacter,
    string sceneLevels = "",
    int sceneUpgradeLevel = 0,
    string seasonString = "")
```

## 风险与崩溃边界

- `MissionState.OpenNew` 会改变全局游戏状态。在另一个任务正在加载或结束时调用 `Open*`，可能让调用者持有一个已经不再是活动状态的任务。
- `scene`、队伍、角色、攻城器械列表和城墙生命数组会直接进入原生任务初始化与行为构造，没有友好的验证层。场景缺失或阵营数据不匹配，可能在任务启动时才失败。
- `CreateAtmosphereInfoForMission` 对未知输入使用回退值而不是抛异常；调用看似成功，实际却可能产生空的或错误的氛围记录。
- 工厂创建的行为列表带有顺序契约。不要只复制其中一部分或随意重排；出生、部署、战斗和结束逻辑之间存在依赖。
- 三个开启任务的方法都是非战役路径。把它们从 Campaign 代码当快捷方式使用，可能跳过战役遭遇的所有权，让战役状态与任务结果脱节。
- 返回的 `Mission` 只适合任务生命周期操作，不是存档持久化对象。自定义引用应在 Mission behavior 的结束回调中释放，任务结束后不要继续持有它。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 相关工厂宿主：[MissionState](../../campaign-ext/MissionState) · [Mission](../../mission/Mission)
- Behavior 边界：[MissionBehavior](../../mission/MissionBehavior) · [MissionLogic](../MissionLogic)
- 输入：[CustomBattleCombatant](../CustomBattleCombatant) · [MissionSiegeWeapon](../../core-extra/MissionSiegeWeapon) · [MissionInitializerRecord](../../core-extra/MissionInitializerRecord)
- 相关任务对象：[MissionObject](../MissionObject) · [BasicMissionHandler](../BasicMissionHandler)
- 文档契约：[Doc Contract](../../../architecture/doc-contract)
- 中文/English：[BannerlordMissions](../../../../en/api/mission-ext/BannerlordMissions)
