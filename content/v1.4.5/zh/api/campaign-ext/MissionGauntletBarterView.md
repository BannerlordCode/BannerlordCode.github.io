---
title: "MissionGauntletBarterView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletBarterView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletBarterView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletBarterView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletBarterView.cs`

## 概述

`MissionGauntletBarterView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletBarterView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 当 `photo mode activated` 事件触发时调用此方法。

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 当 `photo mode deactivated` 事件触发时调用此方法。

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** 处理 `is opening escape menu on focus change allowed` 相关逻辑。

## 使用示例

```csharp
var view = new MissionGauntletBarterView();
```

## 参见

- [完整类目录](../catalog)