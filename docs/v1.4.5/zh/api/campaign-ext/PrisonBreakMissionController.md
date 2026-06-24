<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PrisonBreakMissionController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PrisonBreakMissionController

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class PrisonBreakMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Towns/PrisonBreakMissionController.cs`

## 概述

`PrisonBreakMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `PrisonBreakMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `agent interaction` 事件触发时调用此方法。

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 处理 `is there agent action` 相关逻辑。

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**用途 / Purpose:** 当 `agent alarmed state changed` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

### OnStealthMissionCounterFailed
`public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)`

**用途 / Purpose:** 当 `stealth mission counter failed` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<PrisonBreakMissionController>();
```

## 参见

- [完整类目录](../catalog)