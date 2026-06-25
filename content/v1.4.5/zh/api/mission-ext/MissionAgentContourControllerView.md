---
title: "MissionAgentContourControllerView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentContourControllerView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentContourControllerView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentContourControllerView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionAgentContourControllerView.cs`

## 概述

`MissionAgentContourControllerView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionAgentContourControllerView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnFocusGained
`public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 当 `focus gained` 事件触发时调用此方法。

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 当 `focus lost` 事件触发时调用此方法。

## 使用示例

```csharp
var view = new MissionAgentContourControllerView();
```

## 参见

- [完整类目录](../catalog)