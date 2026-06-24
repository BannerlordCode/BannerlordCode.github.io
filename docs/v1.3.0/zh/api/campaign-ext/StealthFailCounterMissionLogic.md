<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StealthFailCounterMissionLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StealthFailCounterMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class StealthFailCounterMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/StealthFailCounterMissionLogic.cs`

## 概述

`StealthFailCounterMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `StealthFailCounterMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**用途 / Purpose:** 当 `agent alarmed state changed` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### SetFailTexts
`public void SetFailTexts(TextObject title, TextObject description)`

**用途 / Purpose:** 设置 `fail texts` 的值或状态。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new StealthFailCounterMissionLogic());
```

## 参见

- [完整类目录](../catalog)