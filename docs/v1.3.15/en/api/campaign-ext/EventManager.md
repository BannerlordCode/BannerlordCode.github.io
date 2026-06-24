<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EventManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EventManager

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EventManager`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs`

## Overview

`EventManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `EventManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

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

## Key Methods

### AddAfterFinalizedCallback
`public void AddAfterFinalizedCallback(Action callback)`

**Purpose:** Adds `after finalized callback` to the current collection or state.

### ClearFocus
`public void ClearFocus()`

**Purpose:** Handles logic related to `clear focus`.

### IsPointInsideUsableArea
`public bool IsPointInsideUsableArea(Vector2 p)`

**Purpose:** Handles logic related to `is point inside usable area`.

### HitTest
`public static bool HitTest(Widget widget, Vector2 position)`

**Purpose:** Handles logic related to `hit test`.

### FocusTest
`public bool FocusTest(Widget root)`

**Purpose:** Handles logic related to `focus test`.

### AddLateUpdateAction
`public void AddLateUpdateAction(Widget owner, Action<float> action, int order)`

**Purpose:** Adds `late update action` to the current collection or state.

### SetHoveredView
`public void SetHoveredView(Widget view)`

**Purpose:** Sets the value or state of `hovered view`.

### UpdateLayout
`public void UpdateLayout()`

**Purpose:** Updates the state or data of `layout`.

### GetIsHitThisFrame
`public bool GetIsHitThisFrame()`

**Purpose:** Gets the current value of `is hit this frame`.

## Usage Example

```csharp
var manager = EventManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)