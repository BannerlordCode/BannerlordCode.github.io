---
title: AgentVictoryLogic
description: AgentVictoryLogic - 战斗胜利欢呼逻辑，管?Agent 的胜利动画与欢呼语音
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentVictoryLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentVictoryLogic

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** class（继承自 

`MissionLogic

`?**领域:** 战斗任务 / 胜利表现

## 概述

`AgentVictoryLogic

` 是战斗任务中负责"胜利?AI 欢呼"的逻辑组件。战斗结束或撤退时，它为胜利方的 AI 控制 Agent 注册 

`VictoryComponent

`（含随机延迟定时器），在定时器到期时?Agent 播放欢呼动画、发出胜利语音。欢呼强度根据胜利方伤亡比例分三档：高欢呼（伤亡 &lt;25%）、中欢呼?5%~75%）、低欢呼?75%），对应不同的动画集?
核心设计?) **三档动画?*——`_highCheerActions

`? 个高强度欢呼）、`_midCheerActions

`? 个中强度）、`_lowCheerActions

`?0 个低强度），?

`SelectVictoryCondition

` 根据伤亡比例自动选择?) **撤退时欢?*——`SetTimersOfVictoryReactionsOnRetreat

` 选中?50% 的合?Agent，让它们在撤退路上边走边欢呼；3) **命令中断**——玩家下达命令时通过 

`MasterOrderControllerOnOrderIssued

` 通知正在欢呼?Agent，Agent 会停止欢呼恢复战斗姿态；4) **暂停恢复**——Agent 在水中、使用物品、攀爬梯子、移动游戏对象时暂停欢呼，状态恢复后继续?) **武器选择**——欢呼前 

`ChooseWeaponToCheerWithCheerAndUpdateTimer

` 确保 Agent 手中有不可丢弃的武器（如剑盾），没有则尝试拔出备用武器，都没有则收刀空手欢呼?
## 心智模型

?

`AgentVictoryLogic

` 看作"胜利?AI 的庆祝调度器"。生命周期：

1. 

`AfterStart

`：设置任务关闭延?60 秒，初始化欢?Agent 列表，设置默认反应时间（1~8 秒），注册命令监听与撤退回调?2. 战斗结束时外部调?

`SetTimersOfVictoryReactionsOnBattleEnd(side)

`：选档（`SelectVictoryCondition

`），让胜利方所有阵型停止移动，为所?AI 控制的胜利方 Agent 注册 

`VictoryComponent

` 与定时器?3. 撤退时调?

`SetTimersOfVictoryReactionsOnRetreat(side)

`：选档，筛选约 50% 合格 Agent（排除在水中/使用物品/持可丢弃武器者），让它们朝当前面向方向移动并发注册欢呼定时器?4. 每帧 

`OnMissionTick

` ?

`CheckAnimationAndVoice

`：遍历所有注册的 Agent，检查是否在撤退中收到命令（是则移除 VictoryComponent 停止欢呼）、是否需要暂?恢复、定时器是否到期（到期则 

`ChooseWeaponToCheerWithCheerAndUpdateTimer

` 播放欢呼动画与语音）?5. 

`OnAgentRemoved

`：移除死?离场 Agent ?VictoryComponent 与列表条目?6. 

`OnClearScene

`：清空列表?
`CheeringAgent

` 是内部辅助类，跟踪每个欢?Agent 的状态：

`GotOrderRecently

`（最近是否收到命令）、`IsCheeringPaused

`（是否暂停）、`IsCheeringOnRetreat

`（是否在撤退中欢呼）?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`CheerActionGroup

` \| 

`CheerActionGroupEnum

` \| 当前欢呼档位枚举（None/Low/Mid/High）?\|
\| 

`CheerReactionTimerData

` \| 

`CheerReactionTimeSettings

` \| 反应时间设置（MinDuration/MaxDuration），默认 1~8 秒?\|

## 主要方法

### AfterStart
`

`

`csharp
public override void AfterStart()
`

`

`
初始化。设?

`MissionCloseTimeAfterFinish = 60f

`，创?

`_cheeringAgents

` 列表，设置默认反应时间（1~8 秒），注册玩家队伍的命令监听与撤退回调?
### SetTimersOfVictoryReactionsOnBattleEnd
`

`

`csharp
public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)
`

`

`
战斗结束时调用。流程：1) 

`_isInRetreat = false

`?) 

`SelectVictoryCondition(side)

` 选档?) 胜利方所有阵型设为停止移动；4) 为所?AI 控制的胜利方 Agent（`IsHuman && IsAIControlled && WatchState == Alarmed

`）注?

`VictoryComponent

` 与随机定时器?
### SetTimersOfVictoryReactionsOnRetreat
`

`

`csharp
public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)
`

`

`
撤退时调用。流程：1) 

`_isInRetreat = true

`?) 

`SelectVictoryCondition(side)

` 选档?) 筛选约 50% 合格 Agent（排除水?使用物品/持可丢弃武器/攀爬梯子者）?) 让选中 Agent 朝当前面向方向移动；5) 注册欢呼定时器。筛选概率受附近敌军距离影响——敌军越近，越少 Agent 欢呼?
### SetTimersOfVictoryReactionsOnTournamentVictoryForAgent
`

`

`csharp
public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)
`

`

`
锦标赛胜利专用。强制使?Mid 档动画，为单?Agent 注册欢呼定时器?
### SetCheerActionGroup
`

`

`csharp
public void SetCheerActionGroup(CheerActionGroupEnum cheerActionGroup = CheerActionGroupEnum.None)
`

`

`
手动设置欢呼档位。None 时根?

`SelectVictoryCondition

` 自动选择?
### SetCheerReactionTimerSettings
`

`

`csharp
public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)
`

`

`
设置欢呼反应时间的随机范围?
### OnMissionTick / CheckAnimationAndVoice
`

`

`csharp
public override void OnMissionTick(float dt)
private void CheckAnimationAndVoice()
`

`

`
每帧 tick。若有注册的欢呼 Agent 则调?

`CheckAnimationAndVoice

`：逆序遍历，处理撤退中收到命令的 Agent（移?VictoryComponent 停止欢呼）、暂?恢复状态切换、定时器到期则播放欢呼?
### ChooseWeaponToCheerWithCheerAndUpdateTimer
`

`

`csharp
private void ChooseWeaponToCheerWithCheerAndUpdateTimer(Agent cheerAgent, out bool resetTimer)
`

`

`
欢呼前武器处理。若当前无不可丢弃武器：尝试从装备槽找一把拔出；都没有则收刀空手。有武器后随机选一?

`_selectedCheerActions

` 动画播放（骑乘时强制?Mid 档），并发出 

`VoiceType.Victory

` 语音。`resetTimer = true

` 时延长下次欢呼间隔到 6~12 秒?
### SelectVictoryCondition
`

`

`csharp
private void SelectVictoryCondition(BattleSideEnum side)
`

`

`
根据伤亡比例选档。从 

`BattleObserverMissionLogic

` 获取胜利?

`DeathToBuiltAgentRatio

`?25% ?HighCheerActions?5~75% ?MidCheerActions?75% ?LowCheerActions。无 observer 时默?Mid?
### OnAgentRemoved / OnClearScene / OnEndMission
`

`

`csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
public override void OnClearScene()
protected override void OnEndMission()
`

`

`
清理。`OnAgentRemoved

` 移除死亡 Agent ?VictoryComponent 与列表条目；

`OnClearScene

` 清空列表；`OnEndMission

` 注销撤退回调?
## 使用示例

### 示例: 自定义战斗胜利欢?
**场景**: Mod 想在特定战斗（如领主决斗）结束时让胜利方全部用高欢呼动画，不受伤亡比例影响?
`

`

`csharp
public class DuelMissionController : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        if (_battleEnded) return;

        // 检测决斗是否结束（一方倒下?        if (IsDuelOver())
        {
            _battleEnded = true;
            var victoryLogic = Mission.Current.GetMissionBehavior&lt;AgentVictoryLogic&gt;();
            if (victoryLogic != null)
            {
                // 手动设为高欢呼档?                victoryLogic.SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum.HighCheerActions);
                // 缩短反应时间，让欢呼更快开?                victoryLogic.SetCheerReactionTimerSettings(0.5f, 2f);
                // 触发胜利方欢?                BattleSideEnum winnerSide = GetWinnerSide();
                victoryLogic.SetTimersOfVictoryReactionsOnBattleEnd(winnerSide);
            }
        }
    }

    private bool _battleEnded;
    private bool IsDuelOver() { /* ... */ return false; }
    private BattleSideEnum GetWinnerSide() { /* ... */ return BattleSideEnum.Attacker; }
}
`

`

`

**要点**: 

`SetCheerActionGroup

` 必须?

`SetTimersOfVictoryReactionsOnBattleEnd

` 之前调用，否?

`SelectVictoryCondition

` 会覆盖手动设置；

`SetTimersOfVictoryReactionsOnBattleEnd

` 只注?

`WatchState == Alarmed

` ?Agent，非战斗状态的 Agent 不会欢呼；撤退欢呼?

`SetTimersOfVictoryReactionsOnRetreat

`，只有约 50% Agent 参与欢呼；玩家下达命令会中断正在欢呼?Agent（`MasterOrderControllerOnOrderIssued

`）?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
