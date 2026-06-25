---
title: "MissionView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionView : MissionBehavior`
**Base:** `MissionBehavior`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionView.cs`

## 概述

`MissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MissionScreen` | `public MissionScreen MissionScreen { get; set; }` |
| `IsFinalized` | `public bool IsFinalized { get; set; }` |

## 主要方法

### OnMissionScreenTick
`public virtual void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 MissionScreen 已经建立后，每帧为这个视图执行 UI 侧更新，适合刷新 HUD、状态条或屏幕覆盖层。

### OnEscape
`public virtual bool OnEscape()`

**用途 / Purpose:** 处理玩家按下 Escape 的时机，决定当前视图是否要消费这次输入、弹出菜单或把控制权继续交给别的视图。

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public virtual bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** 告诉任务界面：当窗口失焦或焦点变化时，当前视图是否允许自动拉起 Escape 菜单。

### IsPhotoModeAllowed
`public virtual bool IsPhotoModeAllowed()`

**用途 / Purpose:** 声明当前任务视图是否允许照片模式；常用于剧情镜头、教程或受限视图里禁用拍照。

### OnFocusChangeOnGameWindow
`public virtual void OnFocusChangeOnGameWindow(bool focusGained)`

**用途 / Purpose:** 响应游戏窗口获得/失去焦点的事件，以便暂停输入、隐藏提示或恢复视图状态。

### OnSceneRenderingStarted
`public virtual void OnSceneRenderingStarted()`

**用途 / Purpose:** 在场景开始渲染后做一次视图初始化，适合挂接材质、标记或屏幕层资源。

### OnMissionScreenInitialize
`public virtual void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 MissionScreen 构建完成时初始化这个视图绑定的 UI、事件订阅和局部状态。

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
