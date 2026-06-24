<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerPreloadView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerPreloadView

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerPreloadView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MissionMultiplayerPreloadView.cs`

## 概述

`MissionMultiplayerPreloadView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionMultiplayerPreloadView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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

## 使用示例

```csharp
var view = new MissionMultiplayerPreloadView();
```

## 参见

- [完整类目录](../catalog)