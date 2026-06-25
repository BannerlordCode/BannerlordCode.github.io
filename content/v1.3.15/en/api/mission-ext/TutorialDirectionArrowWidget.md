---
title: "TutorialDirectionArrowWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialDirectionArrowWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialDirectionArrowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialDirectionArrowWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialDirectionArrowWidget.cs`

## Overview

`TutorialDirectionArrowWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TutorialDirectionArrowWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArrowState` | `public string ArrowState { get; set; }` |
| `HorizontalArrowWidget` | `public BrushWidget HorizontalArrowWidget { get; set; }` |
| `VerticalArrowWidget` | `public BrushWidget VerticalArrowWidget { get; set; }` |

## Usage Example

```csharp
var widget = new TutorialDirectionArrowWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)