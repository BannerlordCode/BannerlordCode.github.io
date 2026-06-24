<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletOrderUIHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GauntletOrderUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs`

## 概述

`GauntletOrderUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `GauntletOrderUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDeployment` | `public abstract bool IsDeployment { get; }` |
| `IsSiegeDeployment` | `public abstract bool IsSiegeDeployment { get; }` |
| `IsValidForTick` | `public abstract bool IsValidForTick { get; }` |
| `CursorState` | `public MissionOrderVM.CursorStates CursorState { get; }` |
| `IsOrderMenuActive` | `public bool IsOrderMenuActive { get; }` |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive { get; }` |
| `IsViewCreated` | `public bool IsViewCreated { get; }` |

## 主要方法

### SelectFormationAtIndex
`public virtual void SelectFormationAtIndex(int index)`

**用途 / Purpose:** 处理 `select formation at index` 相关逻辑。

### DeselectFormationAtIndex
`public virtual void DeselectFormationAtIndex(int index)`

**用途 / Purpose:** 处理 `deselect formation at index` 相关逻辑。

### OnMissionScreenActivate
`public override void OnMissionScreenActivate()`

**用途 / Purpose:** 当 `mission screen activate` 事件触发时调用此方法。

### OnMissionScreenDeactivate
`public override void OnMissionScreenDeactivate()`

**用途 / Purpose:** 当 `mission screen deactivate` 事件触发时调用此方法。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnEscape
`public override bool OnEscape()`

**用途 / Purpose:** 当 `escape` 事件触发时调用此方法。

### IsReady
`public override bool IsReady()`

**用途 / Purpose:** 处理 `is ready` 相关逻辑。

### OnActivateToggleOrder
`public void OnActivateToggleOrder()`

**用途 / Purpose:** 当 `activate toggle order` 事件触发时调用此方法。

### OnDeactivateToggleOrder
`public void OnDeactivateToggleOrder()`

**用途 / Purpose:** 当 `deactivate toggle order` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomGauntletOrderUIHandler();
```

## 参见

- [完整类目录](../catalog)