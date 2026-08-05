---
title: "SandBoxMissionManager"
description: "CampaignSystem 锦标赛与战斗挑战任务契约在 SandBox 中的具体实现。"
---
# SandBoxMissionManager

**命名空间:** `SandBox`  
**模块:** `SandBox`  
**类型:** `public class SandBoxMissionManager : ISandBoxMissionManager`  
**基类:** [ISandBoxMissionManager](../../campaign/ISandBoxMissionManager)  
**源文件:** `Modules.SandBox/SandBox/Sandbox/SandBoxMissionManager.cs`

## 概述

`SandBoxMissionManager` 是一个很薄的适配器。它实现 CampaignSystem 的 [ISandBoxMissionManager](../../campaign/ISandBoxMissionManager) 契约，把四种锦标赛入口和战斗挑战入口转发给 `TournamentMissionStarter`，再返回得到的 `IMission`。它不维护第二个活动任务，不保存锦标赛状态，也不自行组装任务行为列表。

## 心智模型

这个具体 manager 是由游戏安装的基础设施，不是 mod 应该自行构造的单例。`SandBoxSubModule.OnCampaignStart` 和 `OnGameLoaded` 会执行 `new SandBoxMissionManager()`，并把它赋给 `Campaign.Current.SandBoxManager.SandBoxMissionManager`。通常调用方通过 [SandBoxMission](../../campaign/SandBoxMission) 到达它，因为该静态门面会读取 `SandBoxManager.Instance.SandBoxMissionManager`。

适配器真正负责的是选择 SandBox 实现。`TournamentMissionStarter` 才负责 `MissionState.OpenNew`、initializer record、任务 ID 和行为列表。这样 CampaignSystem 的锦标赛代码可以使用接口，而 SandBox 可以控制具体的任务设置。

## 依赖关系

- [ISandBoxMissionManager](../../campaign/ISandBoxMissionManager) 定义五个转发成员。
- [SandBoxManager](../../campaign/SandBoxManager) 持有已安装的接口实例。
- [SandBoxMission](../../campaign/SandBoxMission) 是正常的 CampaignSystem 获取门面。
- [SandBoxMissions](../SandBoxMissions) 是其他战役任务族相邻的 factory 层。

只有所有者 [Campaign](../../campaign/Campaign) 及其 SandBox game handler 仍处于活动状态时，这个 manager 才有意义。

## 安装与所有权

被赋值的属性声明在 [SandBoxManager](../../campaign/SandBoxManager) 上。它会在新战役启动和游戏读档时重新设置，因此跨新游戏或读档缓存引用是有风险的。`CampaignMissionManager` 是另一个适配器，存储在 `Campaign.Current.CampaignMissionManager`；不要把这两个 manager 属性混为一谈。

## 转发面

| 实现成员 | 转发目标 | 必须保持的边界 |
| --- | --- | --- |
| `OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | `TournamentMissionStarter.OpenTournamentFightMission` | 场景和锦标赛状态必须来自同一个竞技场上下文。 |
| `OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | `TournamentMissionStarter.OpenTournamentHorseRaceMission` | 保留锦标赛调用方提供的聚落、文化和参赛标志。 |
| `OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | `TournamentMissionStarter.OpenTournamentJoustingMission` | 骑枪行为由 starter 创建，而不是由本适配器创建。 |
| `OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | `TournamentMissionStarter.OpenTournamentArcheryMission` | 不要用通用场景 record 替换它的 initializer。 |
| 显式 `ISandBoxMissionManager.OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)` | `TournamentMissionStarter.OpenBattleChallengeMission` | 只能通过接口使用；它不会作为具体类的普通公开方法出现。 |

四个锦标赛方法是正常的 public 接口实现。`OpenBattleChallengeMission` 使用显式实现，因此变量类型若是 `SandBoxMissionManager`，就不能直接调用该方法；应把变量保持为接口类型，或使用 [SandBoxMission](../../campaign/SandBoxMission) 门面。

## 真实获取路径

需要确认已安装路由的诊断代码，可以读取所有者属性，而不是创建替代实例：

```csharp
using TaleWorlds.CampaignSystem;

public static bool IsSandBoxMissionRouteReady()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null || campaign.SandBoxManager == null)
    {
        return false;
    }

    ISandBoxMissionManager manager = campaign.SandBoxManager.SandBoxMissionManager;
    return manager != null;
}
```

正常游戏代码随后应使用 CampaignSystem 门面。例如 `FightTournamentGame` 会计算 `LocationComplex.Current.GetScene("arena", upgradeLevel)`，再调用 `SandBoxMission.OpenTournamentFightMission`；门面进入本适配器，适配器把完整的锦标赛参数转发给 `TournamentMissionStarter`。

## 适配器不负责什么

- 它不检查场景是否与 `Settlement`、`CultureObject` 或 `TournamentGame` 匹配。
- 它不添加 `CampaignMissionComponent`；锦标赛 starter 的行为 delegate 在创建任务时负责这一点。
- 它不保存或恢复锦标赛状态。需要存档的战役数据属于 campaign behavior 及其 `SyncData` 契约。
- 它没有 `Current` 属性。安装后的实例应通过 `Campaign.Current.SandBoxManager` 或 `SandBoxManager.Instance` 获取。

## 风险与边界

- **初始化顺序:** 启动、拆除或读档完成前属性为 null 是有意义的状态。不要无条件退回 `new SandBoxMissionManager()`。
- **显式接口调用:** 使用具体类型变量的战斗挑战代码不能直接调用 `OpenBattleChallengeMission`；应保持 `ISandBoxMissionManager` 类型或使用 `SandBoxMission`。
- **薄转发:** 错误的场景/地点组合或过期的锦标赛对象，可能在任务构建更晚阶段失败。应把遭遇上下文作为同一个生命周期单元传递。
- **任务切换:** starter 会打开新任务。切换后不要继续使用旧的 `Agent`、`Location`、`MissionBehavior` 和 UI 引用，除非从当前任务重新获取。
- **游戏模式耦合:** 该实现只属于 SandBox。其他游戏模式可能安装另一个 `ISandBoxMissionManager`，也可能不安装。

## 导航

- 父级：[Campaign extension API](../)
- 契约：[ISandBoxMissionManager](../../campaign/ISandBoxMissionManager) · [SandBoxMission](../../campaign/SandBoxMission)
- Factory：[SandBoxMissions](../SandBoxMissions)
- Campaign 路由：[CampaignMission](../../campaign/CampaignMission) · [CampaignMissionManager](../CampaignMissionManager)
- 生命周期：[CampaignMissionComponent](../CampaignMissionComponent) · [Mission](../../mission/Mission)
