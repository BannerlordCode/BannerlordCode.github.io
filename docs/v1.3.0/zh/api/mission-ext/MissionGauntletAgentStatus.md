<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletAgentStatus`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletAgentStatus

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletAgentStatus : MissionAgentStatusUIHandler`
**Base:** `MissionAgentStatusUIHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletAgentStatus.cs`

## 概述

`MissionGauntletAgentStatus` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Mission`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DataSource` | `public MissionAgentStatusVM DataSource { get; }` |

## 主要方法

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

**用途 / Purpose:** 当 `mission state activated` 事件触发时调用此方法。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnFocusGained
`public override void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 当 `focus gained` 事件触发时调用此方法。

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `agent interaction` 事件触发时调用此方法。

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 当 `focus lost` 事件触发时调用此方法。

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**用途 / Purpose:** 当 `agent deleted` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 当 `photo mode activated` 事件触发时调用此方法。

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 当 `photo mode deactivated` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionGauntletAgentStatus();
value.OnMissionStateActivated();
```

## 参见

- [完整类目录](../catalog)