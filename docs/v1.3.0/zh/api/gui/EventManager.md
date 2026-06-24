<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EventManager`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EventManager

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EventManager`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs`

## 概述

`EventManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `EventManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Time` | `public float Time { get; }` |
| `UsableArea` | `public Vec2 UsableArea { get; }` |
| `LeftUsableAreaStart` | `public float LeftUsableAreaStart { get; }` |
| `TopUsableAreaStart` | `public float TopUsableAreaStart { get; }` |
| `PageSize` | `public Vector2 PageSize { get; }` |
| `UIEventManager` | `public static EventManager UIEventManager { get; }` |
| `MousePositionInReferenceResolution` | `public Vector2 MousePositionInReferenceResolution { get; }` |
| `IsControllerActive` | `public bool IsControllerActive { get; }` |
| `Context` | `public UIContext Context { get; }` |
| `Root` | `public Widget Root { get; }` |
| `FocusedWidget` | `public Widget FocusedWidget { get; set; }` |
| `HoveredView` | `public Widget HoveredView { get; }` |
| `MouseOveredViews` | `public List<Widget> MouseOveredViews { get; }` |
| `DragHoveredView` | `public Widget DragHoveredView { get; }` |
| `DraggedWidget` | `public Widget DraggedWidget { get; }` |
| `DraggedWidgetPosition` | `public Vector2 DraggedWidgetPosition { get; }` |
| `LatestMouseDownWidget` | `public Widget LatestMouseDownWidget { get; }` |
| `LatestMouseUpWidget` | `public Widget LatestMouseUpWidget { get; }` |
| `LatestMouseAlternateDownWidget` | `public Widget LatestMouseAlternateDownWidget { get; }` |
| `LatestMouseAlternateUpWidget` | `public Widget LatestMouseAlternateUpWidget { get; }` |
| `MousePosition` | `public Vector2 MousePosition { get; }` |
| `LocalFrameNumber` | `public ulong LocalFrameNumber { get; }` |
| `DeltaMouseScroll` | `public float DeltaMouseScroll { get; }` |
| `RightStickVerticalScrollAmount` | `public float RightStickVerticalScrollAmount { get; }` |
| `RightStickHorizontalScrollAmount` | `public float RightStickHorizontalScrollAmount { get; }` |

## 主要方法

### AddAfterFinalizedCallback
`public void AddAfterFinalizedCallback(Action callback)`

**用途 / Purpose:** 向当前集合/状态中添加 `after finalized callback`。

### ClearFocus
`public void ClearFocus()`

**用途 / Purpose:** 处理 `clear focus` 相关逻辑。

### IsPointInsideUsableArea
`public bool IsPointInsideUsableArea(Vector2 p)`

**用途 / Purpose:** 处理 `is point inside usable area` 相关逻辑。

### HitTest
`public static bool HitTest(Widget widget, Vector2 position)`

**用途 / Purpose:** 处理 `hit test` 相关逻辑。

### FocusTest
`public bool FocusTest(Widget root)`

**用途 / Purpose:** 处理 `focus test` 相关逻辑。

### AddLateUpdateAction
`public void AddLateUpdateAction(Widget owner, Action<float> action, int order)`

**用途 / Purpose:** 向当前集合/状态中添加 `late update action`。

### SetHoveredView
`public void SetHoveredView(Widget view)`

**用途 / Purpose:** 设置 `hovered view` 的值或状态。

### UpdateLayout
`public void UpdateLayout()`

**用途 / Purpose:** 更新 `layout` 的状态或数据。

### GetIsHitThisFrame
`public bool GetIsHitThisFrame()`

**用途 / Purpose:** 获取 `is hit this frame` 的当前值。

## 使用示例

```csharp
var manager = EventManager.Current;
```

## 参见

- [完整类目录](../catalog)