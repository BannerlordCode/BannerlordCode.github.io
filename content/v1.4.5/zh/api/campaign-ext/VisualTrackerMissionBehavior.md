---
title: "VisualTrackerMissionBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualTrackerMissionBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VisualTrackerMissionBehavior

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class VisualTrackerMissionBehavior : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/VisualTrackerMissionBehavior.cs`

## 概述

`VisualTrackerMissionBehavior` 位于 `SandBox.Missions.MissionLogics`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.MissionLogics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**用途 / Purpose:** 当 `agent created` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### RegisterLocalOnlyObject
`public void RegisterLocalOnlyObject(ITrackableBase obj)`

**用途 / Purpose:** 处理 `register local only object` 相关逻辑。

### GetCompassTargets
`public override List<CompassItemUpdateParams> GetCompassTargets()`

**用途 / Purpose:** 获取 `compass targets` 的当前值。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**用途 / Purpose:** 当 `agent deleted` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new VisualTrackerMissionBehavior();
value.OnAgentCreated(agent);
```

## 参见

- [完整类目录](../catalog)