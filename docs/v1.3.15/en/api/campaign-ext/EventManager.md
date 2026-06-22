<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EventManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EventManager

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EventManager`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs`

## Overview

`EventManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

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

## Key Methods

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

## Usage Example

```csharp
// Typical usage of EventManager (Manager)
EventManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)