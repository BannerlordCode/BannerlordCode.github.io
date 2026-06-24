<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EavesdroppingMissionCameraView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EavesdroppingMissionCameraView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class EavesdroppingMissionCameraView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/EavesdroppingMissionCameraView.cs`

## 概述

`EavesdroppingMissionCameraView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `EavesdroppingMissionCameraView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

## 使用示例

```csharp
var view = new EavesdroppingMissionCameraView();
```

## 参见

- [完整类目录](../catalog)