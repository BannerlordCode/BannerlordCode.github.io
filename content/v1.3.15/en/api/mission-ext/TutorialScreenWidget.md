---
title: "TutorialScreenWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialScreenWidget.cs`

## Overview

`TutorialScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TutorialScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeftItem` | `public TutorialPanelImageWidget LeftItem { get; set; }` |
| `RightItem` | `public TutorialPanelImageWidget RightItem { get; set; }` |
| `BottomItem` | `public TutorialPanelImageWidget BottomItem { get; set; }` |
| `TopItem` | `public TutorialPanelImageWidget TopItem { get; set; }` |
| `LeftTopItem` | `public TutorialPanelImageWidget LeftTopItem { get; set; }` |
| `RightTopItem` | `public TutorialPanelImageWidget RightTopItem { get; set; }` |
| `LeftBottomItem` | `public TutorialPanelImageWidget LeftBottomItem { get; set; }` |
| `RightBottomItem` | `public TutorialPanelImageWidget RightBottomItem { get; set; }` |
| `CenterItem` | `public TutorialPanelImageWidget CenterItem { get; set; }` |
| `ArrowWidget` | `public TutorialArrowWidget ArrowWidget { get; set; }` |

## Usage Example

```csharp
var widget = new TutorialScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)