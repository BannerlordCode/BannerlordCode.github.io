---
title: "TutorialPanelImageWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialPanelImageWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialPanelImageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialPanelImageWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial/TutorialPanelImageWidget.cs`

## Overview

`TutorialPanelImageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TutorialPanelImageWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TutorialPanel` | `public BrushListPanel TutorialPanel { get; set; }` |

## Usage Example

```csharp
var widget = new TutorialPanelImageWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)