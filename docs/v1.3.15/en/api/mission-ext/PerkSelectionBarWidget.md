<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkSelectionBarWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkSelectionBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PerkSelectionBarWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs`

## Overview

`PerkSelectionBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ProgressClip` | `public Widget ProgressClip { get; set; }` |
| `PercentageIndicatorWidget` | `public Widget PercentageIndicatorWidget { get; set; }` |
| `FullLearningRateClip` | `public Widget FullLearningRateClip { get; set; }` |
| `SeperatorContainer` | `public Widget SeperatorContainer { get; set; }` |
| `FullLearningRateClipInnerContent` | `public Widget FullLearningRateClipInnerContent { get; set; }` |
| `PerksList` | `public Widget PerksList { get; set; }` |
| `PercentageIndicatorTextWidget` | `public TextWidget PercentageIndicatorTextWidget { get; set; }` |
| `MaxLevel` | `public int MaxLevel { get; set; }` |
| `FullLearningRateLevel` | `public int FullLearningRateLevel { get; set; }` |
| `Level` | `public int Level { get; set; }` |

## Usage Example

```csharp
// Typical usage of PerkSelectionBarWidget (Widget)
// 声明/访问一个 PerkSelectionBarWidget
var widget = root.GetChild("perkSelectionBarWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)