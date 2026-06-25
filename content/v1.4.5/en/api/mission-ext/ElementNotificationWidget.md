---
title: "ElementNotificationWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ElementNotificationWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ElementNotificationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ElementNotificationWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial/ElementNotificationWidget.cs`

## Overview

`ElementNotificationWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ElementNotificationWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ElementID` | `public string ElementID { get; set; }` |
| `ElementToHighlight` | `public Widget ElementToHighlight { get; set; }` |
| `TutorialFrameWidget` | `public TutorialHighlightItemBrushWidget TutorialFrameWidget { get; set; }` |

## Usage Example

```csharp
var widget = new ElementNotificationWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)