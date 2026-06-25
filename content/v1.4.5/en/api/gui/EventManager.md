---
title: "EventManager"
description: "Auto-generated class reference for EventManager."
---
# EventManager

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EventManager`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/EventManager.cs`

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

**Purpose:** Adds after finalized callback to the current collection or state.

```csharp
// Obtain an instance of EventManager from the subsystem API first
EventManager eventManager = ...;
eventManager.AddAfterFinalizedCallback(callback);
```

### ClearFocus
`public void ClearFocus()`

**Purpose:** Removes all focus from the this instance.

```csharp
// Obtain an instance of EventManager from the subsystem API first
EventManager eventManager = ...;
eventManager.ClearFocus();
```

### IsPointInsideUsableArea
`public bool IsPointInsideUsableArea(Vector2 p)`

**Purpose:** Determines whether the this instance is in the point inside usable area state or condition.

```csharp
// Obtain an instance of EventManager from the subsystem API first
EventManager eventManager = ...;
var result = eventManager.IsPointInsideUsableArea(p);
```

### HitTest
`public static bool HitTest(Widget widget, Vector2 position)`

**Purpose:** Executes the HitTest logic.

```csharp
// Static call; no instance required
EventManager.HitTest(widget, position);
```

### FocusTest
`public bool FocusTest(Widget root)`

**Purpose:** Executes the FocusTest logic.

```csharp
// Obtain an instance of EventManager from the subsystem API first
EventManager eventManager = ...;
var result = eventManager.FocusTest(root);
```

### AddLateUpdateAction
`public void AddLateUpdateAction(Widget owner, Action<float> action, int order)`

**Purpose:** Adds late update action to the current collection or state.

```csharp
// Obtain an instance of EventManager from the subsystem API first
EventManager eventManager = ...;
eventManager.AddLateUpdateAction(owner, action, 0);
```

### UpdateLayout
`public void UpdateLayout()`

**Purpose:** Recalculates and stores the latest representation of layout.

```csharp
// Obtain an instance of EventManager from the subsystem API first
EventManager eventManager = ...;
eventManager.UpdateLayout();
```

### GetIsHitThisFrame
`public bool GetIsHitThisFrame()`

**Purpose:** Reads and returns the is hit this frame value held by the this instance.

```csharp
// Obtain an instance of EventManager from the subsystem API first
EventManager eventManager = ...;
var result = eventManager.GetIsHitThisFrame();
```

## Usage Example

```csharp
var manager = EventManager.Current;
```

## See Also

- [Area Index](../)