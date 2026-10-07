---
title: "AgentVictoryLogic"
description: "胜利与撤退时的欢呼调度器：按战损比自动选低/中/高欢呼动作组，给存活 AI 挂 VictoryComponent 随机计时器，并在每帧决定谁在喊、谁该停。"
---

# AgentVictoryLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentVictoryLogic : MissionLogic`
**Base:** `TaleWorlds.MountAndBlade.MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`

## 概述

`AgentVictoryLogic` 管的是战斗结束时那几秒的「欢呼表演」。429 行里它做三件事：**选动作组**（根据战损比在低/中/高三档欢呼动作里挑一组，共 22 个预置 `ActionIndexCache`）；**登记参演者**（给符合条件的 Agent 挂 [VictoryComponent](../VictoryComponent/)，其构造器里带一个 `RandomTimer` 决定这个人什么时候开始喊）；**每帧裁决**（`OnMissionTick` → `CheckAnimationAndVoice`，逐个检查这人还在不在、水里 / 爬梯 / 拿着物件 / 正在撤退 —— 满足任一条就暂停欢呼）。

它还顺手把整个任务的对局时长上限设成 60 秒：`AfterStart` 里一句 `base.Mission.MissionCloseTimeAfterFinish = 60f`。三个公开的 `SetTimersOfVictoryReactions*` 方法分别对应**战斗胜利**、**撤退**、**比武胜利（单人对决）**三种触发场景。

## 心智模型

把它当成**「一场表演的调度器」而不是「一个状态的持有者」**，四个推论：

第一，**真正的演出状态在 [VictoryComponent](../VictoryComponent/) 里**，本类只持有一个 `List<CheeringAgent>` 做调度索引（`CheeringAgent` 是 `private class`，存 `Agent` / `IsCheeringOnRetreat` / `GotOrderRecently` / `IsCheeringPaused`）。`AfterStart` 会订阅 `Mission.Current.IsBattleInRetreatEvent`，并在 `base.Mission.PlayerTeam.PlayerOrderController.OnOrderIssued` 上挂一个 handler——**玩家下达新命令时，正在欢呼的人会被标记 `GotOrderRecently = true`，从而中断欢呼**。

第二，**动作组是自动选的，但可被覆盖**。`SelectVictoryCondition(side)` 先看 `_cheerActionGroup != None`，**已经选过就直接 return**。否则问 [BattleObserverMissionLogic](../BattleObserverMissionLogic/) 要 `GetDeathToBuiltAgentRatioForSide(side)`，按 `< 0.25` / `< 0.75` / 其余映射到高/中/低档；问不到（没有该 behavior）就默认中档。想固定档位要先调 `SetCheerActionGroup`。

第三，**登记条件比想象严格**。`SetTimersOfVictoryReactionsOnBattleEnd` 要求 `agent.IsHuman && agent.IsAIControlled && agent.Team != null && side == agent.Team.Side && agent.CurrentWatchState == Agent.WatchState.Alarmed` 且尚未挂 VictoryComponent。撤退版本更狠：只取该方 AI 的一半（`list.Count * 0.5f`），并且逐个排除在水里 / 拿着会被动作丢弃的武器 / 正在移动物件 / 爬梯的人，最后还有一轮基于相对速度差的 `ClampFloat` 筛选——**「谁喊」不是随机的，是按「离敌人越近越不该喊」筛过的**。

第四，**动作通道是 1 号通道**。`agent.SetActionChannel(1, in ActionIndexCache.act_none, ...)` 与 `agent.GetCurrentActionType(1)` / `GetCurrentAnimationFlag(1)` 说明欢呼占的是**副手动作通道**，这正是「换一把举得起来的武器再喊」那段逻辑存在的原因。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | 任务开始。设 `Mission.MissionCloseTimeAfterFinish = 60f`、初始化 `_cheeringAgents` 与欢呼时长设置、**订阅玩家的命令事件**与 `Mission.Current.IsBattleInRetreatEvent`。`PlayerTeam` 为 null 时不订阅。 |
| `CheerActionGroup` | `public CheerActionGroupEnum CheerActionGroup => _cheerActionGroup`（只读） | 当前生效的动作组。**只读**——真正切换走 `SetCheerActionGroup`，它同时会把 `_selectedCheerActions` 指向对应的 10 / 4 / 8 项数组（`None` 时置 null）。 |
| `SetCheerActionGroup` | `public void SetCheerActionGroup(CheerActionGroupEnum cheerActionGroup = CheerActionGroupEnum.None)` | 手动指定动作组。**默认实参是 `None`**——不传参等于「清空选择」，会让后续 `SelectVictoryCondition` 重新自动判一次。 |
| `CheerReactionTimerData` | `public CheerReactionTimeSettings CheerReactionTimerData => _cheerReactionTimerData`（只读） | 当前欢呼反应时长窗口（最小 / 最大秒）。三个 `SetTimersOfVictoryReactions*` 都用它给 `RandomTimer` 定范围。 |
| `SetCheerReactionTimerSettings` | `public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)` | 改时长窗口。`AfterStart` 也会用默认值调一次。默认 1–8 秒。 |
| `SetTimersOfVictoryReactionsOnBattleEnd` | `public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)` | **战斗胜利**的登记入口。`_isInRetreat = false` → `SelectVictoryCondition` → 胜方所有阵型 `SetMovementOrder(MovementOrderStop)`（**让所有人先站定再喊**）→ 逐个 Agent 过登记条件。调用方是 [BattleEndLogic](../BattleEndLogic/)（`:156` 一带）与 `MissionMultiplayerFlagDomination`（`:696`）。 |
| `SetTimersOfVictoryReactionsOnRetreat` | `public void SetTimersOfVictoryReactionsOnBattleEnd` 之外的独立入口 `public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)` | **撤退**的登记入口，条件最严：只取一半人、排除水里 / 爬梯 / 持物 / 拿「会被动作丢弃」的武器的人，并按与敌人的相对速度差再做一次筛选。设置 `_isInRetreat = true`，这会让 `CheckIfIsInRetreat()` 变真，进而改变 `OnMissionTick` 的行为。 |
| `SetTimersOfVictoryReactionsOnTournamentVictoryForAgent` | `public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)` | **比武/单人对决**里只给某一个 Agent 欢呼。强制把 `_selectedCheerActions` 设为中档（`_midCheerActions`），不调用 `SelectVictoryCondition`（比武没有战损比概念）。 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 每帧裁决。`if (_cheeringAgents.Count > 0) CheckAnimationAndVoice();`。**注意 `dt` 未被使用**——调度靠每个 `VictoryComponent` 自己的 `RandomTimer`，不是靠累积时间。 |
| `OnClearScene` | `public override void OnClearScene()` | 场景清理。`_cheeringAgents.Clear()`。**只清列表不摘组件**——`VictoryComponent` 还挂在 Agent 上，随 Agent 一起销毁。 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | Agent 被移除。摘掉它的 `VictoryComponent` 并从 `_cheeringAgents` 里删掉那一条。**注意用的是 `RemoveAt(i)` 后立刻 `break`**，列表内同一 Agent 只会删一次。 |
| `OnEndMission` | `protected override void OnEndMission()` | 任务结束。**退订** `Mission.Current.IsBattleInRetreatEvent -= CheckIfIsInRetreat`。**只退订这一个**——`AfterStart` 里订阅的 `OnOrderIssued` 没有对应的退订（任务结束时行为整体销毁，所以不泄漏）。 |
| `CheerActionGroupEnum` | `public enum CheerActionGroupEnum { None, LowCheerActions, MidCheerActions, HighCheerActions }` | 动作组档位。`None` 是「未指定，让引擎按战损自动选」的哨兵值，不是「不喊」。 |
| `CheerReactionTimeSettings` | `public struct CheerReactionTimeSettings(float minDuration, float maxDuration)` | 两个 `readonly float` 字段 `MinDuration` / `MaxDuration` 的 `readonly struct`，带主构造器。用于传给 `new RandomTimer(Mission.CurrentTime, minReactionTime, maxReactionTime)`。 |

## 死成员与陷阱

本页 14 个字段 / 属性里，9 个被清单报成「调用点 0」，实测全部有活跃引用 —— 这是工具口径盲区，不是死代码。剩下的 5 个复核不出引用，但按规则不下结论。

| 成员 | 声明位置 | override | 调用点 | 判定 | 说明 |
|---|---|---:|---:|---|---|
| `MasterOrderControllerOnOrderIssued` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:119 | 0 | 1 次（1 行） | MEASURED | 清单报「调用点 0」。实测：它在 `AgentVictoryLogic.cs:114` 以 `OnOrderIssued += MasterOrderControllerOnOrderIssued` **已接线**为事件处理器。事件的隐式派发不是调用形，工具计成 0。 |
| `_cheeringAgents` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:99 | 0 | 18 次（18 行） | MEASURED | 欢呼队列主存储，是本类最热的字段。它在 :110 建表、:301 Add、:122-127 倒序遍历、:194-223 每帧更新、:159 Clear。清单报 0 是口径盲区。 |
| `_cheerReactionTimerData` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:61 | 0 | 6 次（4 行） | MEASURED | **本行是 43 条里唯一「次数≠行数」的一条**：:293 与 :358 各出现两次（`…TimerData.MinDuration, …TimerData.MaxDuration`），故 6 次（4 行）。清单报 0 是口径盲区。 |
| `_selectedCheerActions` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:97 | 0 | 6 次（6 行） | MEASURED | 当前选中的欢呼动作数组，由 `_low/mid/highCheerActions` 赋值、在 :414 取出。清单报 0 是口径盲区。 |
| `_cheerActionGroup` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:59 | 0 | 4 次（4 行） | MEASURED | 欢呼动作组枚举的存储字段，由 `SetCheerActionGroup`(:132) 写入、在 :135 与 :244 的 switch/判断里读出。清单报 0 是口径盲区。 |
| `_isInRetreat` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:101 | 0 | 3 次（3 行） | MEASURED | 撤退标志，:306 置 true、:273 置 false、:427 由 `CheckIfIsInRetreat` 读出返回。清单报 0 是口径盲区。 |
| `_midCheerActions` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:77 | 0 | 3 次（3 行） | MEASURED | 中等强度欢呼动作表，被 :141 与 :364 赋给当前选择、:417 取出。清单报 0 是口径盲区。 |
| `_lowCheerActions` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:63 | 0 | 1 次（1 行） | MEASURED | 低强度欢呼动作表，:138 赋给 `_selectedCheerActions`。清单报 0 是口径盲区。 |
| `_highCheerActions` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:85 | 0 | 1 次（1 行） | MEASURED | 高强度欢呼动作表，:144 赋给 `_selectedCheerActions`。清单报 0 是口径盲区。 |
| `CheerActionGroup` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:103 | — | — | UNSUPPORTED | 公开只读属性（→ `_cheerActionGroup`）。**未能复核出引用，按规则不下结论** —— 不是「确认无引用」。 |
| `CheerReactionTimerData` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:105 | — | — | UNSUPPORTED | 公开只读属性（→ `_cheerReactionTimerData`）。**未能复核出引用，按规则不下结论**。 |
| `HighCheerThreshold` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:53 | — | — | UNSUPPORTED | `private const float = 0.25f`。**未能复核出引用，按规则不下结论**。 |
| `MidCheerThreshold` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:55 | — | — | UNSUPPORTED | `private const float = 0.75f`。**未能复核出引用，按规则不下结论**。 |
| `YellIfOrderedInRetreatProbability` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:57 | — | — | UNSUPPORTED | `private const float = 0.25f`。**未能复核出引用，按规则不下结论**。 |

## 真实示例

按官方方式挂进会战行为列表——`AgentVictoryLogic` 不是默认行为，必须自己加：

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade;

public IEnumerable<MissionBehavior> OpenBattleBehaviors(Mission mission)
{
    return new MissionBehavior[]
    {
        new AgentVictoryLogic(),
        new BattleEndLogic(),
    };
}
```

固定欢呼档位并缩短延迟——注意不传参会清空选择触发自动判定，所以要显式传枚举值：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Mission mission = Mission.Current;
AgentVictoryLogic victory = mission.GetMissionBehavior<AgentVictoryLogic>();
if (victory == null)
{
    Debug.Print("AgentVictoryLogic is not attached to this mission", 0);
    return;
}
victory.SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum.HighCheerActions);
victory.SetCheerReactionTimerSettings(0.5f, 3f);
Debug.Print("group=" + victory.CheerActionGroup, 0);
Debug.Print("window=" + victory.CheerReactionTimerData.MinDuration + ".." + victory.CheerReactionTimerData.MaxDuration, 0);
```

战斗结束时手动触发欢呼登记——这是 [BattleEndLogic](../BattleEndLogic/) 内部做的事：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Mission mission = Mission.Current;
AgentVictoryLogic victory = mission.GetMissionBehavior<AgentVictoryLogic>();
if (victory == null || mission.PlayerTeam == null)
{
    return;
}
victory.SetTimersOfVictoryReactionsOnBattleEnd(mission.PlayerTeam.Side);
Debug.Print("victory reactions registered for " + mission.PlayerTeam.Side, 0);
```

给单个人安排欢呼（比武场景）——它会强制切到中档动作组：

```csharp
using TaleWorlds.MountAndBlade;

AgentVictoryLogic victory = Mission.Current.GetMissionBehavior<AgentVictoryLogic>();
if (victory != null)
{
    victory.SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(target, 1.5f, 4f);
}
```

数一数当前登记了多少欢呼者（`_cheeringAgents` 是私有的，只能从组件侧反推）：

```csharp
using TaleWorlds.MountAndBlade;

Mission mission = Mission.Current;
int registered = 0;
foreach (Agent agent in mission.Agents)
{
    if (agent.GetComponent<VictoryComponent>() != null)
    {
        registered++;
    }
}
Debug.Print("agents with VictoryComponent = " + registered, 0);
```

## 风险与边界

- **不是默认行为。** [MissionState](../MissionState/) 的默认列表里没有它；不加就没有欢呼。
- **`SetCheerActionGroup` 的默认实参是 `None`，不是「保持不变」。** 写 `SetCheerActionGroup()` 等于清空当前选择。
- **`AfterStart` 里订阅了玩家的命令事件但 `OnEndMission` 只退订了 `IsBattleInRetreatEvent`。** 任务结束时行为整体销毁所以不泄漏，但如果在同一个任务里反复 `RemoveMissionBehavior` 再挂新的，旧的 `OnOrderIssued` 订阅会留下悬空 handler。
- **`OnMissionTick` 的 `dt` 未使用。** 调度全靠 `VictoryComponent` 里的 `RandomTimer` 与 `CheckTimer()`，不是逐帧累积。
- **`OnClearScene` 只清列表，不摘 `VictoryComponent`。** 清场后 `GetComponent<VictoryComponent>()` 仍可能返回非 null。
- **`SelectVictoryCondition` 只在 `_cheerActionGroup == None` 时生效。** 一旦被显式设过（或被自动选过一次），后续再调三个 `SetTimersOfVictoryReactions*` 都不会重新评估。
- **`SetTimersOfVictoryReactionsOnRetreat` 只取一半人。** 人越少，被选中的比例误差越大（`list.Count == 1` 时 `num = 0`，一个人都不会喊）。
- **登记条件里 `agent.Team != null` 只在胜利路径有。** 撤退路径直接写 `agent.Team.Side`，Team 为 null 会 NRE。
- **未激活的 Agent 触发 `Debug.FailedAssert`。** `CheckAnimationAndVoice` 里若 `component.CheckTimer()` 通过但 `!agent.IsActive()`，走的是断言 + `Debug.Print`，不是异常。
- **动作通道写死为 1。** 与别的占用副手通道的行为会互相打断。

## 依赖关系

- 基类链：继承 [MissionLogic](../MissionLogic/) → [MissionBehavior](../../mission/MissionBehavior/)，`AfterStart` / `OnMissionTick` / `OnClearScene` / `OnAgentRemoved` 与 `protected OnEndMission` 全部来自基类
- 演出状态：[VictoryComponent](../VictoryComponent/) 持有 `RandomTimer` 与 `CheckTimer()` / `ChangeTimerDuration(min, max)`；`RegisterAgentForCheerCheck` 通过 `agent.AddComponent(new VictoryComponent(agent, new RandomTimer(Mission.CurrentTime, min, max)))` 创建
- 智能体状态：[HumanAIComponent](../HumanAIComponent/) 的 `GetCurrentlyMovingGameObject()` 用于判断「正在移动物件就别喊」；[CommonAIComponent](../CommonAIComponent/) 不直接参与
- 自动分档来源：[BattleObserverMissionLogic](../BattleObserverMissionLogic/) 的 `GetDeathToBuiltAgentRatioForSide(BattleSideEnum)`
- 触发方：[BattleEndLogic](../BattleEndLogic/) 的 `Mission.GetMissionBehavior<AgentVictoryLogic>()` 与 `MissionMultiplayerFlagDomination`（`:696`）是全树仅有的两个外部触发点
- 装配方：`BannerlordMissions.cs:139` / `:215` / `:283`、`Modules.CustomBattle/.../CPUBenchmarkMissionLogic.cs:1299`、`Modules.CustomBattle/.../MultiplayerMissions.cs` 多处
- 动作数据：`ActionIndexCache.act_cheering_low_01..10`、`act_cheer_1..4`、`act_cheering_high_01..08` 三组共 22 个预置常量，全部写死在私有 `readonly` 数组里
- 桶首页：[mission-ext API 分区](../)
