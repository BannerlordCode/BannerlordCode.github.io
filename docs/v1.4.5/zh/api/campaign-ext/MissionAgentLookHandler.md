<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentLookHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentLookHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAgentLookHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionAgentLookHandler.cs`

## 概述

`MissionAgentLookHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionAgentLookHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### GetScore
`public float GetScore(Agent agent)`

**用途 / Purpose:** 获取 `score` 的当前值。

### GetTargetPosition
`public Vec3 GetTargetPosition()`

**用途 / Purpose:** 获取 `target position` 的当前值。

### GetBasicPosition
`public Vec3 GetBasicPosition()`

**用途 / Purpose:** 获取 `basic position` 的当前值。

### IsVisibleFor
`public bool IsVisibleFor(Agent agent)`

**用途 / Purpose:** 处理 `is visible for` 相关逻辑。

### IsRelevant
`public bool IsRelevant(Agent agent)`

**用途 / Purpose:** 处理 `is relevant` 相关逻辑。

### Reset
`public void Reset(PointOfInterest pointOfInterest, float duration)`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionAgentLookHandler());
```

## 参见

- [完整类目录](../catalog)