<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EventManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EventManager

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EventManager`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs`

## 概述

`EventManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `UsableArea` | `public Vec2 UsableArea { get; set; }` |
| `MousePositionInReferenceResolution` | `public Vector2 MousePositionInReferenceResolution { get { return this.MousePosition * this.Context.CustomInverseScale; }` |
| `FocusedWidget` | `public Widget FocusedWidget { get { return this._focusedWidget; }` |
| `HoveredView` | `public Widget HoveredView { get { return this._hoveredView; }` |
| `MouseOveredViews` | `public List<Widget> MouseOveredViews { get { return this._mouseOveredViews; }` |
| `DragHoveredView` | `public Widget DragHoveredView { get { return this._dragHoveredView; }` |
| `LatestMouseDownWidget` | `public Widget LatestMouseDownWidget { get { return this._latestMouseDownWidget; }` |
| `LatestMouseUpWidget` | `public Widget LatestMouseUpWidget { get { return this._latestMouseUpWidget; }` |
| `LatestMouseAlternateDownWidget` | `public Widget LatestMouseAlternateDownWidget { get { return this._latestMouseAlternateDownWidget; }` |
| `LatestMouseAlternateUpWidget` | `public Widget LatestMouseAlternateUpWidget { get { return this._latestMouseAlternateUpWidget; }` |
| `MousePosition` | `public Vector2 MousePosition { get { return this.Context.InputContext.GetMousePosition(); }` |
| `LocalFrameNumber` | `public ulong LocalFrameNumber { get { return this.Context.LocalFrameNumber; }` |
| `DeltaMouseScroll` | `public float DeltaMouseScroll { get { return this.Context.InputContext.GetMouseScrollDelta(); }` |
| `RightStickVerticalScrollAmount` | `public float RightStickVerticalScrollAmount { get { float y = Input.GetKeyState(InputKey.ControllerRStick).Y; return 3000f * y * 0.4f * this.CachedDt; }` |
| `RightStickHorizontalScrollAmount` | `public float RightStickHorizontalScrollAmount { get { float x = Input.GetKeyState(InputKey.ControllerRStick).X; return 3000f * x * 0.4f * this.CachedDt; }` |

## 主要方法

### AddAfterFinalizedCallback
```csharp
public void AddAfterFinalizedCallback(Action callback)
```

### ClearFocus
```csharp
public void ClearFocus()
```

### IsPointInsideUsableArea
```csharp
public bool IsPointInsideUsableArea(Vector2 p)
```

### HitTest
```csharp
public static bool HitTest(Widget widget, Vector2 position)
```

### FocusTest
```csharp
public bool FocusTest(Widget root)
```

### AddLateUpdateAction
```csharp
public void AddLateUpdateAction(Widget owner, Action<float> action, int order)
```

### SetHoveredView
```csharp
public void SetHoveredView(Widget view)
```

### UpdateLayout
```csharp
public void UpdateLayout()
```

### GetIsHitThisFrame
```csharp
public bool GetIsHitThisFrame()
```

## 使用示例

```csharp
// EventManager (Manager) 的典型用法
EventManager.Current;
```

## 参见

- [完整类目录](../catalog)