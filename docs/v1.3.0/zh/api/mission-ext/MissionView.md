<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionView : MissionBehavior`
**Base:** `MissionBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs`

## 概述

`MissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MissionScreen` | `public MissionScreen MissionScreen { get; set; }` |
| `Input` | `public IInputContext Input { get; }` |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType { get; set; }` |
| `IsFinalized` | `public bool IsFinalized { get; set; }` |

## 主要方法

### OnMissionScreenTick
`public virtual void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnEscape
`public virtual bool OnEscape()`

**用途 / Purpose:** 当 `escape` 事件触发时调用此方法。

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public virtual bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** 处理 `is opening escape menu on focus change allowed` 相关逻辑。

### OnFocusChangeOnGameWindow
`public virtual void OnFocusChangeOnGameWindow(bool focusGained)`

**用途 / Purpose:** 当 `focus change on game window` 事件触发时调用此方法。

### OnSceneRenderingStarted
`public virtual void OnSceneRenderingStarted()`

**用途 / Purpose:** 当 `scene rendering started` 事件触发时调用此方法。

### OnMissionScreenInitialize
`public virtual void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public virtual void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### OnMissionScreenActivate
`public virtual void OnMissionScreenActivate()`

**用途 / Purpose:** 当 `mission screen activate` 事件触发时调用此方法。

### OnMissionScreenDeactivate
`public virtual void OnMissionScreenDeactivate()`

**用途 / Purpose:** 当 `mission screen deactivate` 事件触发时调用此方法。

### UpdateOverridenCamera
`public virtual bool UpdateOverridenCamera(float dt)`

**用途 / Purpose:** 更新 `overriden camera` 的状态或数据。

### IsReady
`public virtual bool IsReady()`

**用途 / Purpose:** 处理 `is ready` 相关逻辑。

### OnPhotoModeActivated
`public virtual void OnPhotoModeActivated()`

**用途 / Purpose:** 当 `photo mode activated` 事件触发时调用此方法。

### OnPhotoModeDeactivated
`public virtual void OnPhotoModeDeactivated()`

**用途 / Purpose:** 当 `photo mode deactivated` 事件触发时调用此方法。

### OnConversationBegin
`public virtual void OnConversationBegin()`

**用途 / Purpose:** 当 `conversation begin` 事件触发时调用此方法。

### OnConversationEnd
`public virtual void OnConversationEnd()`

**用途 / Purpose:** 当 `conversation end` 事件触发时调用此方法。

### OnDeploymentPlanMade
`public virtual void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**用途 / Purpose:** 当 `deployment plan made` 事件触发时调用此方法。

### SuspendView
`public void SuspendView()`

**用途 / Purpose:** 处理 `suspend view` 相关逻辑。

### ResumeView
`public void ResumeView()`

**用途 / Purpose:** 处理 `resume view` 相关逻辑。

### OnEndMissionInternal
`public sealed override void OnEndMissionInternal()`

**用途 / Purpose:** 当 `end mission internal` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomMissionView();
```

## 参见

- [完整类目录](../catalog)