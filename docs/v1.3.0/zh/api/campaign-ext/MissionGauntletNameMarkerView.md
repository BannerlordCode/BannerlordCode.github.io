<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletNameMarkerView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletNameMarkerView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletNameMarkerView : MissionNameMarkerUIHandler`
**Base:** `MissionNameMarkerUIHandler`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletNameMarkerView.cs`

## 概述

`MissionGauntletNameMarkerView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletNameMarkerView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### SetMarkersDirty
`public override void SetMarkersDirty()`

**用途 / Purpose:** 设置 `markers dirty` 的值或状态。

### OnAgentBuild
`public override void OnAgentBuild(Agent affectedAgent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

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
var view = new MissionGauntletNameMarkerView();
```

## 参见

- [完整类目录](../catalog)