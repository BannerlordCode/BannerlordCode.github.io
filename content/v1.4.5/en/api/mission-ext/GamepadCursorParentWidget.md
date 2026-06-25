---
title: "GamepadCursorParentWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GamepadCursorParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GamepadCursorParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadCursorParentWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorParentWidget.cs`

## Overview

`GamepadCursorParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GamepadCursorParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `XOffset` | `public float XOffset { get; set; }` |
| `YOffset` | `public float YOffset { get; set; }` |
| `HasTarget` | `public bool HasTarget { get; set; }` |
| `CenterWidget` | `public BrushWidget CenterWidget { get; set; }` |

## Usage Example

```csharp
var widget = new GamepadCursorParentWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)