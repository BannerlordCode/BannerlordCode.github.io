---
title: "EventManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EventManager`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EventManager

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EventManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/EventManager.cs`

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
| `UIEventManager` | `public static TaleWorlds.Library.EventSystem.EventManager UIEventManager { get; }` |
| `IsControllerActive` | `public bool IsControllerActive { get; }` |
| `Context` | `public UIContext Context { get; }` |
| `Root` | `public Widget Root { get; }` |
| `FocusedWidget` | `public Widget FocusedWidget { get; set; }` |
| `HoveredWidget` | `public Widget HoveredWidget { get; set; }` |
| `MouseOveredWidgets` | `public List<Widget> MouseOveredWidgets { get; }` |
| `DragHoveredWidget` | `public Widget DragHoveredWidget { get; }` |
| `DraggedWidget` | `public Widget DraggedWidget { get; }` |
| `DraggedWidgetPosition` | `public Vector2 DraggedWidgetPosition { get; }` |
| `LatestMouseDownWidget` | `public Widget LatestMouseDownWidget { get; }` |
| `LatestMouseUpWidget` | `public Widget LatestMouseUpWidget { get; }` |
| `LatestMouseAlternateDownWidget` | `public Widget LatestMouseAlternateDownWidget { get; }` |
| `LatestMouseAlternateUpWidget` | `public Widget LatestMouseAlternateUpWidget { get; }` |
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