<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentJoustingMissionController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentJoustingMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentJoustingMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TournamentJoustingMissionController.cs`

## 概述

`TournamentJoustingMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `TournamentJoustingMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### JoustingEventDelegate
`public delegate void JoustingEventDelegate(Agent affectedAgent, Agent affectorAgent)`

**用途 / Purpose:** 处理 `jousting event delegate` 相关逻辑。

### JoustingAgentStateChangedEventDelegate
`public delegate void JoustingAgentStateChangedEventDelegate(Agent agent, JoustingAgentController.JoustingAgentState state)`

**用途 / Purpose:** 处理 `jousting agent state changed event delegate` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**用途 / Purpose:** 处理 `start match` 相关逻辑。

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**用途 / Purpose:** 处理 `skip match` 相关逻辑。

### IsMatchEnded
`public bool IsMatchEnded()`

**用途 / Purpose:** 处理 `is match ended` 相关逻辑。

### OnMatchEnded
`public void OnMatchEnded()`

**用途 / Purpose:** 当 `match ended` 事件触发时调用此方法。

### IsAgentInTheTrack
`public bool IsAgentInTheTrack(Agent agent, bool inCurrentTrack = true)`

**用途 / Purpose:** 处理 `is agent in the track` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 当 `agent hit` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnJoustingAgentStateChanged
`public void OnJoustingAgentStateChanged(Agent agent, JoustingAgentController.JoustingAgentState state)`

**用途 / Purpose:** 当 `jousting agent state changed` 事件触发时调用此方法。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TournamentJoustingMissionController>();
```

## 参见

- [完整类目录](../catalog)