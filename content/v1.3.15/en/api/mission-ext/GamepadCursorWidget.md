---
title: "GamepadCursorWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GamepadCursorWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GamepadCursorWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadCursorWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs`

## Overview

`GamepadCursorWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GamepadCursorWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

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

## Usage Example

```csharp
var widget = new GamepadCursorWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)