<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BaseBattleMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BaseBattleMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BaseBattleMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/BaseBattleMissionController.cs`

## 概述

`BaseBattleMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `BaseBattleMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### GetTeamAI
`public virtual TeamAIComponent GetTeamAI(Team team, float thinkTimerTime = 5f, float applyTimerTime = 1f)`

**用途 / Purpose:** 获取 `team a i` 的当前值。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** 处理 `mission ended` 相关逻辑。

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomBaseBattleMissionController();
```

## 参见

- [完整类目录](../catalog)