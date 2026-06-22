<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationCultureVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationCultureVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Culture
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationCultureVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Culture/CharacterCreationCultureVisualBrushWidget.cs`

## Overview

`CharacterCreationCultureVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `UseSmallVisuals` | `public bool UseSmallVisuals { get; set; }` |
| `Layer1Widget` | `public ParallaxItemBrushWidget Layer1Widget { get; set; }` |
| `Layer2Widget` | `public ParallaxItemBrushWidget Layer2Widget { get; set; }` |
| `Layer3Widget` | `public ParallaxItemBrushWidget Layer3Widget { get; set; }` |
| `Layer4Widget` | `public ParallaxItemBrushWidget Layer4Widget { get; set; }` |
| `CurrentCultureId` | `public string CurrentCultureId { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## Usage Example

```csharp
// Typical usage of CharacterCreationCultureVisualBrushWidget (Widget)
// 声明/访问一个 CharacterCreationCultureVisualBrushWidget
var widget = root.GetChild("characterCreationCultureVisualBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)