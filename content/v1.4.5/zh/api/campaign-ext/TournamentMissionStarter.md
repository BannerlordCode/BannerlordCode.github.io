---
title: "TournamentMissionStarter"
description: "v1.4.5 SandBox 中负责打开锦标赛回合、分配任务 ID 和安装任务行为的工厂。"
---
# TournamentMissionStarter

**命名空间:** `SandBox.Tournaments`  
**模块:** `SandBox.Tournaments`  
**类型:** `public static class TournamentMissionStarter`  
**特性:** `[MissionManager]`  
**源码:** `Modules.SandBox/SandBox/SandBox.Tournaments/TournamentMissionStarter.cs`

## 职责

`TournamentMissionStarter` 是 SandBox 的锦标赛回合工厂层。每个受支持的方法都会创建 `MissionInitializerRecord`，调用 `MissionState.OpenNew`，并提供包含回合控制器、`TournamentBehavior`、竞技场逻辑和 `CampaignMissionComponent` 的行为数组。它不是锦标赛 Model，也不决定谁参赛。

## 心智模型

把它看作从战役到任务的最后一层：

```text
TournamentGame.OpenMission
  -> SandBoxMission.OpenTournamentFightMission（或其他回合）
  -> SandBoxMissionManager
  -> TournamentMissionStarter
  -> MissionState.OpenNew
```

调用方负责提供同一次遭遇中的真实场景名、当前 `TournamentGame`、它所属的 `Settlement`、聚落的 `CultureObject` 和参赛标志。本类负责任务 ID 与行为组合。返回的 `Mission` 是正在运行的任务，不是存档对象；切换任务后必须重新获取 Agent、控制器和地点引用。

## 支持的工厂

| 方法 | 任务 ID | 控制器与关键行为 |
| --- | --- | --- |
| `OpenTournamentArcheryMission` | `TournamentArchery` | `TournamentArcheryMissionController`、`TournamentBehavior`、`CampaignMissionComponent`、竞技场/边界逻辑和 `BasicLeaveMissionLogic(true)` |
| `OpenTournamentFightMission` | `TournamentFight` | `TournamentFightMissionController`、`TournamentBehavior`、`CampaignMissionComponent`、竞技场逻辑、Highlights 和边界逻辑 |
| `OpenTournamentHorseRaceMission` | `TournamentHorseRace` | `TownHorseRaceMissionController`、`TournamentBehavior`、`CampaignMissionComponent`、竞技场和边界逻辑 |
| `OpenTournamentJoustingMission` | `TournamentJousting` | `TournamentJoustingMissionController`、`TournamentBehavior`、`CampaignMissionComponent`、竞技场逻辑、`MissionBoundaryCrossingHandler(10f)` 和边界逻辑 |

四个签名的共同形式如下：

```csharp
public static Mission OpenTournamentFightMission(
    string scene,
    TournamentGame tournamentGame,
    Settlement settlement,
    CultureObject culture,
    bool isPlayerParticipating);
```

另外三个方法使用完全相同的参数，只替换回合控制器和任务 ID。四个工厂都用传入的 `scene`、第二个场景参数的空字符串、`doNotUseLoadingScreen: false` 和 decal atlas group `3` 创建 initializer，并将末尾的 `true, true` 传给 `MissionState.OpenNew`。

## 战役中的真实调用点

`FightTournamentGame.OpenMission` 不会猜场景，也不会自己拼装控制器。它根据聚落得到竞技场升级等级，从 `LocationComplex.Current` 获取竞技场场景，再通过 CampaignSystem 门面进入：

```csharp
public override void OpenMission(Settlement settlement, bool isPlayerParticipating)
{
    int upgradeLevel = !settlement.IsTown ? 1 : settlement.Town.GetWallLevel();
    SandBoxMission.OpenTournamentFightMission(
        LocationComplex.Current.GetScene("arena", upgradeLevel),
        this,
        settlement,
        settlement.Culture,
        isPlayerParticipating);
}
```

这是已有锦标赛流程应保持的形状：场景、`TournamentGame`、聚落、文化和参赛标志必须来自同一个遭遇。只需要打开标准回合时，mod 通常应调用 [SandBoxMission](../../campaign/SandBoxMission) 或已安装的 [SandBoxMissionManager](../SandBoxMissionManager)，不要绕过路由自行调用 `MissionState.OpenNew`。

## 生命周期与依赖

- [SandBoxSubModule](../SandBoxSubModule) 在战役启动和读档后安装到达本工厂的 manager。
- [SandBoxMissionManager](../SandBoxMissionManager) 转发四个公开锦标赛调用和显式的战斗挑战接口调用。
- 四个受支持的行为列表都包含 `CampaignMissionComponent`。它通过 [CampaignMission](../../campaign/CampaignMission) 暴露活动中的战役任务，并在任务结束时清理这个临时上下文。
- [Mission](../../mission/Mission) 持有活动中的 Agent 和任务行为。工厂返回并不表示锦标赛结果已经提交到战役状态。

## 不受支持的入口

下面的公开方法虽然存在于任务契约中，但 v1.4.5 源码直接返回 `null`：

```csharp
public static Mission OpenBattleChallengeMission(
    string scene,
    IList<Hero> priorityCharsAttacker,
    IList<Hero> priorityCharsDefender)
{
    return null;
}
```

不要把它当成可用的战斗工厂。使用它时必须检查返回值，也不要猜测任务 ID 或把普通锦标赛回合拿来替代。`SandBoxMissionManager` 的显式实现和 `SandBoxMission` 门面也保留了同一边界。

## 风险与存档边界

- 打开新任务会改变活动任务状态。不要跨切换继续保存旧的 `Agent`、`MissionBehavior`、`Location` 或 `CampaignMission.Current` 引用。
- 即使签名可以接受，来自其他聚落或升级等级的场景也可能在任务初始化后段失败。应保留源码调用点中的上下文组合。
- `CampaignMissionComponent` 不是可有可无的装饰。删除它可能使战役任务事件和静态活动上下文不同步。
- starter 负责创建任务行为，不负责存储锦标赛状态。需要保存的战役数据应使用 campaign behavior 的存档契约，而不是保存活动中的 `Mission` 引用。

## 版本说明

本文依据 v1.4.5 反编译源码。面向其他版本时，应重新核对任务 ID、initializer 字段和行为顺序；同名方法不证明场景或生命周期契约相同。

## 导航

- 父级：[Campaign extension API](../)
- 兄弟页：[SandBoxSubModule](../SandBoxSubModule) · [SandBoxGameManager](../SandBoxGameManager) · [SandBoxSaveManager](../SandBoxSaveManager)
- 相关：[SandBoxMission](../../campaign/SandBoxMission) · [SandBoxMissionManager](../SandBoxMissionManager) · [SandBoxMissions](../SandBoxMissions) · [CampaignMission](../../campaign/CampaignMission) · [Mission](../../mission/Mission)
- English: [TournamentMissionStarter](../../../../en/api/campaign-ext/TournamentMissionStarter)
