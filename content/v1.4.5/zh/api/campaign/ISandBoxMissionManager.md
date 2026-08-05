---
title: "ISandBoxMissionManager"
description: "CampaignSystem 中把锦标赛与战斗挑战任务路由到当前 SandBox 实现的契约。"
---
# ISandBoxMissionManager

**命名空间:** `TaleWorlds.CampaignSystem`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public interface ISandBoxMissionManager`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ISandBoxMissionManager.cs`

## 概述

`ISandBoxMissionManager` 是 CampaignSystem 侧的 SandBox 游戏模式契约，提供四种锦标赛任务和一种战斗挑战任务入口。它返回引擎侧的 `IMission` 抽象；实际的 SandBox 实现负责创建活动任务及其行为，而不是由接口本身保存任务状态。

## 心智模型

把这个接口看成游戏模式边界，而不是任务对象，也不是服务定位器。`SandBoxManager` 持有 `SandBoxMissionManager` 属性，`SandBoxSubModule` 在战役启动或读档后安装具体实现，CampaignSystem 中的小型 `SandBoxMission` 门面再把锦标赛调用转发到该属性。这样锦标赛代码不需要依赖 `SandBox` 程序集中的具体类。

参数本身属于遭遇状态的一部分。调用方提供场景、当前 `TournamentGame`、聚落、文化、玩家是否参赛，或者战斗挑战两侧按优先级排列的英雄列表。实现会把这些值原样交给 `TournamentMissionStarter`，后者调用 `MissionState.OpenNew` 并组装任务行为。打开任务是状态切换，不是取得一个可长期复用的任务句柄。

## 所有权与获取路径

正常调用链是：

`TournamentGame` -> `SandBoxMission` -> `SandBoxManager.Instance.SandBoxMissionManager` -> `SandBox.SandBoxMissionManager` -> `TournamentMissionStarter`。

战役行为不应自行 `new SandBoxMissionManager()`。应使用公开门面，或读取 SandBox 已经安装在属性中的接口实例。只有相关战役/游戏初始化边界完成后，这个契约才有可用的实现。

## 依赖关系

- [SandBoxManager](../SandBoxManager) 持有已经安装的 `SandBoxMissionManager` 属性。
- [SandBoxMission](../SandBoxMission) 是 CampaignSystem 锦标赛代码使用的门面。
- [SandBoxMissionManager](../../campaign-ext/SandBoxMissionManager) 提供 SandBox 具体实现。
- [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) 在 starter 创建任务后发布活动任务。

不需要构造实现类，就可以检查安装边界：

```csharp
Campaign campaign = Campaign.Current;
ISandBoxMissionManager manager = campaign?.SandBoxManager?.SandBoxMissionManager;
if (manager == null)
{
    return;
}
```

## 契约成员

| 成员 | 调用方提供的状态 | SandBox 路由 |
| --- | --- | --- |
| `OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 竞技场场景、锦标赛状态、聚落、文化和玩家参赛状态 | `TournamentMissionStarter.OpenTournamentArcheryMission` |
| `OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 格斗锦标赛状态及其竞技场上下文 | `TournamentMissionStarter.OpenTournamentFightMission` |
| `OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 骑马比赛状态及竞技场上下文 | `TournamentMissionStarter.OpenTournamentHorseRaceMission` |
| `OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 骑枪比赛状态及竞技场上下文 | `TournamentMissionStarter.OpenTournamentJoustingMission` |
| `OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)` | 场景以及进攻、防守双方有序英雄列表 | `TournamentMissionStarter.OpenBattleChallengeMission` |

所有成员都返回 `IMission`。接口不暴露任务 ID、`MissionBehavior` 数组或 `CampaignMissionComponent`；这些属于 SandBox 实现和 factory 层。具体边界见 [SandBoxMissionManager](../../campaign-ext/SandBoxMissionManager) 与 [SandBoxMissions](../../campaign-ext/SandBoxMissions)。

## 真实获取路径

`FightTournamentGame` 根据当前位置及城墙/升级上下文计算竞技场场景，再用自身锦标赛实例调用门面。门面最终会进入本接口，而锦标赛代码不需要知道具体的 SandBox manager：

```csharp
int upgradeLevel = ((!settlement.IsTown) ? 1 : settlement.Town.GetWallLevel());
SandBoxMission.OpenTournamentFightMission(
    LocationComplex.Current.GetScene("arena", upgradeLevel),
    this,
    settlement,
    settlement.Culture,
    isPlayerParticipating);
```

`scene` 必须是当前地点和锦标赛对应的场景。把任意场景与同一个 `TournamentGame` 拼接，并不会得到有效的竞技场任务；返回的任务将接管后续 agent、锦标赛和回调生命周期。

## 生命周期与边界

- `SandBoxSubModule.OnCampaignStart` 和 `OnGameLoaded` 会把 SandBox 实现赋给 `SandBoxManager.SandBoxMissionManager`。
- 锦标赛入口调用 `MissionState.OpenNew`；切换期间，之前活动的任务或游戏状态可能被替换。
- 锦标赛 starter 会把 `CampaignMissionComponent` 放进行为列表，因此只有新任务创建后，[CampaignMission.Current](../CampaignMission) 才具有当前任务语义。
- 接口没有存档契约。需要持久化的战役事实应放在 campaign behavior 中，不要保存 `IMission`、英雄优先级列表或活动引擎引用。

## 风险与失败边界

- **Manager 尚未就绪:** `SandBoxManager.Instance` 或 `SandBoxMissionManager` 为 null，表示战役初始化/读档边界尚未完成。不要缓存上一个游戏状态里的实例。
- **场景和上下文不匹配:** manager 几乎不替调用方校验参数。来自不同上下文的场景、聚落和锦标赛对象，可能在任务设置时失败或产生错误出生点。
- **引用过期:** 打开新任务后，旧的 `Agent`、`Location` 和任务行为引用可能已经释放或不再是当前对象。应观察 [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) 的生命周期回调。
- **实现耦合:** `ISandBoxMissionManager` 不保证每一种游戏模式都支持这些入口。依赖 SandBox 锦标赛行为的代码应先确认当前安装的游戏模式边界。

## 导航

- 父级：[Campaign API](../)
- 同级：[CampaignMission](../CampaignMission) · [SandBoxMission](../SandBoxMission)
- 实现：[SandBoxMissionManager](../../campaign-ext/SandBoxMissionManager) · [SandBoxMissions](../../campaign-ext/SandBoxMissions)
- 生命周期：[CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent)
