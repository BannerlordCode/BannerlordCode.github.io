---
title: "TutorialHighlightItemBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialHighlightItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialHighlightItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialHighlightItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial/TutorialHighlightItemBrushWidget.cs`

## Overview

`TutorialHighlightItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TutorialHighlightItemBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `HighlightFrameWidget` | `public TutorialHighlightItemBrushWidget HighlightFrameWidget { get; }` |
| `CustomSizeSyncTarget` | `public Widget CustomSizeSyncTarget { get; set; }` |
| `DoNotOverrideWidth` | `public bool DoNotOverrideWidth { get; set; }` |
| `DoNotOverrideHeight` | `public bool DoNotOverrideHeight { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |

## Usage Example

```csharp
var widget = new TutorialHighlightItemBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)