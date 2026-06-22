<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GamepadCursorWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GamepadCursorWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadCursorWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs`

## 概述

`GamepadCursorWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CursorParentWidget` | `public GamepadCursorParentWidget CursorParentWidget { get; set; }` |
| `TopLeftMarker` | `public GamepadCursorMarkerWidget TopLeftMarker { get; set; }` |
| `TopRightMarker` | `public GamepadCursorMarkerWidget TopRightMarker { get; set; }` |
| `BottomLeftMarker` | `public GamepadCursorMarkerWidget BottomLeftMarker { get; set; }` |
| `BottomRightMarker` | `public GamepadCursorMarkerWidget BottomRightMarker { get; set; }` |
| `HasTarget` | `public bool HasTarget { get; set; }` |
| `TargetHasAction` | `public bool TargetHasAction { get; set; }` |
| `DefaultOffset` | `public float DefaultOffset { get; set; }` |
| `HoverOffset` | `public float HoverOffset { get; set; }` |
| `DefaultTargetlessOffset` | `public float DefaultTargetlessOffset { get; set; }` |
| `PressOffset` | `public float PressOffset { get; set; }` |
| `DefaultSizeX` | `public float DefaultSizeX { get; set; }` |
| `DefaultSizeY` | `public float DefaultSizeY { get; set; }` |
| `ActionAnimationTime` | `public float ActionAnimationTime { get; set; }` |

## 使用示例

```csharp
// GamepadCursorWidget (Widget) 的典型用法
// 声明/访问一个 GamepadCursorWidget
var widget = root.GetChild("gamepadCursorWidget");;
```

## 参见

- [完整类目录](../catalog)