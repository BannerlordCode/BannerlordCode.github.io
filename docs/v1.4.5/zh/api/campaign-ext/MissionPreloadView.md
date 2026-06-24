<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionPreloadView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionPreloadView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionPreloadView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionPreloadView.cs`

## 概述

`MissionPreloadView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionPreloadView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 当 `pre mission tick` 事件触发时调用此方法。

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**用途 / Purpose:** 当 `scene rendering started` 事件触发时调用此方法。

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**用途 / Purpose:** 当 `mission state deactivated` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

## 使用示例

```csharp
var view = new MissionPreloadView();
```

## 参见

- [完整类目录](../catalog)