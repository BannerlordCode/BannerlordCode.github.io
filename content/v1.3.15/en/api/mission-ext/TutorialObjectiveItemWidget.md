---
title: "TutorialObjectiveItemWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialObjectiveItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialObjectiveItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialObjectiveItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveItemWidget.cs`

## Overview

`TutorialObjectiveItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TutorialObjectiveItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `KeyPressWidget` | `public InputKeyVisualWidget KeyPressWidget { get; set; }` |
| `MouseMoveWidget` | `public TutorialObjectiveMouseParentWidget MouseMoveWidget { get; set; }` |
| `StickMoveWidget` | `public TutorialObjectiveStickParentWidget StickMoveWidget { get; set; }` |
| `MovementType` | `public int MovementType { get; set; }` |
| `InputType` | `public int InputType { get; set; }` |

## Usage Example

```csharp
var widget = new TutorialObjectiveItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)