<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentFightMissionController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentFightMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentFightMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs`

## 概述

`TournamentFightMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `TournamentFightMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### PrepareForMatch
`public void PrepareForMatch()`

**用途 / Purpose:** 处理 `prepare for match` 相关逻辑。

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**用途 / Purpose:** 处理 `start match` 相关逻辑。

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**用途 / Purpose:** 处理 `skip match` 相关逻辑。

### IsMatchEnded
`public bool IsMatchEnded()`

**用途 / Purpose:** 处理 `is match ended` 相关逻辑。

### OnMatchResultsReady
`public void OnMatchResultsReady()`

**用途 / Purpose:** 当 `match results ready` 事件触发时调用此方法。

### OnMatchEnded
`public void OnMatchEnded()`

**用途 / Purpose:** 当 `match ended` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### CanAgentRout
`public bool CanAgentRout(Agent agent)`

**用途 / Purpose:** 判断当前对象是否可以执行 `agent rout`。

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 当 `score hit` 事件触发时调用此方法。

### CheckIfIsThereAnyEnemies
`public bool CheckIfIsThereAnyEnemies()`

**用途 / Purpose:** 处理 `check if is there any enemies` 相关逻辑。

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TournamentFightMissionController>();
```

## 参见

- [完整类目录](../catalog)