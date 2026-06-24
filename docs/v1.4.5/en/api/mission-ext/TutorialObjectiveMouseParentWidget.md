<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialObjectiveMouseParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialObjectiveMouseParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialObjectiveMouseParentWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial/TutorialObjectiveMouseParentWidget.cs`

## Overview

`TutorialObjectiveMouseParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TutorialObjectiveMouseParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MouseBodyWidget` | `public BrushWidget MouseBodyWidget { get; set; }` |
| `MouseLeftClickWidget` | `public BrushWidget MouseLeftClickWidget { get; set; }` |
| `MouseRightClickWidget` | `public BrushWidget MouseRightClickWidget { get; set; }` |
| `MouseMiddleClickWidget` | `public BrushWidget MouseMiddleClickWidget { get; set; }` |
| `KeyId` | `public string KeyId { get; set; }` |
| `MovementType` | `public int MovementType { get; set; }` |

## Usage Example

```csharp
var widget = new TutorialObjectiveMouseParentWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)