---
title: "MissionView"
description: "MissionView 的自动生成类参考。"
---
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

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnMissionScreenTick(0);
```

### OnEscape
`public virtual bool OnEscape()`

**用途 / Purpose:** 在 「escape」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
var result = missionView.OnEscape();
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public virtual bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** 判断当前对象是否处于 「opening escape menu on focus change allowed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
var result = missionView.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

### OnFocusChangeOnGameWindow
`public virtual void OnFocusChangeOnGameWindow(bool focusGained)`

**用途 / Purpose:** 在 「focus change on game window」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnFocusChangeOnGameWindow(false);
```

### OnSceneRenderingStarted
`public virtual void OnSceneRenderingStarted()`

**用途 / Purpose:** 在 「scene rendering started」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnSceneRenderingStarted();
```

### OnMissionScreenInitialize
`public virtual void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 「mission screen initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public virtual void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnMissionScreenFinalize();
```

### OnMissionScreenActivate
`public virtual void OnMissionScreenActivate()`

**用途 / Purpose:** 在 「mission screen activate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnMissionScreenActivate();
```

### OnMissionScreenDeactivate
`public virtual void OnMissionScreenDeactivate()`

**用途 / Purpose:** 在 「mission screen deactivate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnMissionScreenDeactivate();
```

### UpdateOverridenCamera
`public virtual bool UpdateOverridenCamera(float dt)`

**用途 / Purpose:** 重新计算并更新 「overriden camera」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
var result = missionView.UpdateOverridenCamera(0);
```

### IsReady
`public virtual bool IsReady()`

**用途 / Purpose:** 判断当前对象是否处于 「ready」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
var result = missionView.IsReady();
```

### OnPhotoModeActivated
`public virtual void OnPhotoModeActivated()`

**用途 / Purpose:** 在 「photo mode activated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public virtual void OnPhotoModeDeactivated()`

**用途 / Purpose:** 在 「photo mode deactivated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnPhotoModeDeactivated();
```

### OnConversationBegin
`public virtual void OnConversationBegin()`

**用途 / Purpose:** 在 「conversation begin」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnConversationBegin();
```

### OnConversationEnd
`public virtual void OnConversationEnd()`

**用途 / Purpose:** 在 「conversation end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnConversationEnd();
```

### OnDeploymentPlanMade
`public virtual void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**用途 / Purpose:** 在 「deployment plan made」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnDeploymentPlanMade(team, false);
```

### SuspendView
`public void SuspendView()`

**用途 / Purpose:** 处理与 「suspend view」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.SuspendView();
```

### ResumeView
`public void ResumeView()`

**用途 / Purpose:** 处理与 「resume view」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.ResumeView();
```

### OnEndMissionInternal
`public sealed override void OnEndMissionInternal()`

**用途 / Purpose:** 在 「end mission internal」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnEndMissionInternal();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionView 实例
MissionView missionView = ...;
missionView.OnRemoveBehavior();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionView instance = ...;
```

## 参见

- [本区域目录](../)