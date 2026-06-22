<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialObjectiveItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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
// Typical usage of TutorialObjectiveItemWidget (Widget)
// 声明/访问一个 TutorialObjectiveItemWidget
var widget = root.GetChild("tutorialObjectiveItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)