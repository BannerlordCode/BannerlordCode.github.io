---
title: "ReplayMissionView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ReplayMissionView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ReplayMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayMissionView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayMissionView.cs`

## 概述

`ReplayMissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `ReplayMissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 当 `pre mission tick` 事件触发时调用此方法。

### OverrideInput
`public void OverrideInput(bool isOverridden)`

**用途 / Purpose:** 处理 `override input` 相关逻辑。

### ResetReplay
`public void ResetReplay()`

**用途 / Purpose:** 将 `replay` 重置为初始状态。

### Rewind
`public void Rewind(float time)`

**用途 / Purpose:** 处理 `rewind` 相关逻辑。

### FastForward
`public void FastForward(float time)`

**用途 / Purpose:** 处理 `fast forward` 相关逻辑。

### Pause
`public void Pause()`

**用途 / Purpose:** 处理 `pause` 相关逻辑。

### Resume
`public void Resume()`

**用途 / Purpose:** 处理 `resume` 相关逻辑。

## 使用示例

```csharp
var view = new ReplayMissionView();
```

## 参见

- [完整类目录](../catalog)