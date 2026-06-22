<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialObjectiveMouseParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialObjectiveMouseParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialObjectiveMouseParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveMouseParentWidget.cs`

## Overview

`TutorialObjectiveMouseParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

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
// Typical usage of TutorialObjectiveMouseParentWidget (Widget)
// 声明/访问一个 TutorialObjectiveMouseParentWidget
var widget = root.GetChild("tutorialObjectiveMouseParentWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)