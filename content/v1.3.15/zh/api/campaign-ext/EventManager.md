---
title: "EventManager"
description: "EventManager 的自动生成类参考。"
---
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

**用途 / Purpose:** 将 「after finalized callback」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 EventManager 实例
EventManager eventManager = ...;
eventManager.AddAfterFinalizedCallback(callback);
```

### ClearFocus
`public void ClearFocus()`

**用途 / Purpose:** 清空当前对象中的「focus」。

```csharp
// 先通过子系统 API 拿到 EventManager 实例
EventManager eventManager = ...;
eventManager.ClearFocus();
```

### IsPointInsideUsableArea
`public bool IsPointInsideUsableArea(Vector2 p)`

**用途 / Purpose:** 判断当前对象是否处于 「point inside usable area」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EventManager 实例
EventManager eventManager = ...;
var result = eventManager.IsPointInsideUsableArea(p);
```

### HitTest
`public static bool HitTest(Widget widget, Vector2 position)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
EventManager.HitTest(widget, position);
```

### FocusTest
`public bool FocusTest(Widget root)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 EventManager 实例
EventManager eventManager = ...;
var result = eventManager.FocusTest(root);
```

### AddLateUpdateAction
`public void AddLateUpdateAction(Widget owner, Action<float> action, int order)`

**用途 / Purpose:** 将 「late update action」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 EventManager 实例
EventManager eventManager = ...;
eventManager.AddLateUpdateAction(owner, action, 0);
```

### SetHoveredView
`public void SetHoveredView(Widget view)`

**用途 / Purpose:** 为 「hovered view」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EventManager 实例
EventManager eventManager = ...;
eventManager.SetHoveredView(view);
```

### UpdateLayout
`public void UpdateLayout()`

**用途 / Purpose:** 重新计算并更新 「layout」 的最新表示。

```csharp
// 先通过子系统 API 拿到 EventManager 实例
EventManager eventManager = ...;
eventManager.UpdateLayout();
```

### GetIsHitThisFrame
`public bool GetIsHitThisFrame()`

**用途 / Purpose:** 读取并返回当前对象中 「is hit this frame」 的结果。

```csharp
// 先通过子系统 API 拿到 EventManager 实例
EventManager eventManager = ...;
var result = eventManager.GetIsHitThisFrame();
```

## 使用示例

```csharp
var manager = EventManager.Current;
```

## 参见

- [本区域目录](../)