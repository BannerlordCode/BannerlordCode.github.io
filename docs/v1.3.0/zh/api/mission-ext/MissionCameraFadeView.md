<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionCameraFadeView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionCameraFadeView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCameraFadeView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionCameraFadeView.cs`

## 概述

`MissionCameraFadeView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionCameraFadeView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FadeAlpha` | `public float FadeAlpha { get; }` |
| `FadeState` | `public MissionCameraFadeView.CameraFadeState FadeState { get; }` |
| `IsCameraFading` | `public bool IsCameraFading { get; }` |
| `HasCameraFadeOut` | `public bool HasCameraFadeOut { get; }` |
| `HasCameraFadeIn` | `public bool HasCameraFadeIn { get; }` |

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### BeginFadeOutAndIn
`public void BeginFadeOutAndIn(float fadeOutTime, float blackTime, float fadeInTime)`

**用途 / Purpose:** 处理 `begin fade out and in` 相关逻辑。

### BeginFadeOut
`public void BeginFadeOut(float fadeOutTime)`

**用途 / Purpose:** 处理 `begin fade out` 相关逻辑。

### BeginFadeIn
`public void BeginFadeIn(float fadeInTime)`

**用途 / Purpose:** 处理 `begin fade in` 相关逻辑。

## 使用示例

```csharp
var view = new MissionCameraFadeView();
```

## 参见

- [完整类目录](../catalog)