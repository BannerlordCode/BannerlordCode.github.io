<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestProgressVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestProgressVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QuestProgressVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs`

## Overview

`QuestProgressVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `BarWidget` | `public Widget BarWidget { get; set; }` |
| `SliderWidget` | `public Widget SliderWidget { get; set; }` |
| `CheckboxVisualWidget` | `public Widget CheckboxVisualWidget { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `ProgressStoneWidth` | `public float ProgressStoneWidth { get; set; }` |
| `ProgressStoneHeight` | `public float ProgressStoneHeight { get; set; }` |
| `CurrentProgress` | `public int CurrentProgress { get; set; }` |
| `TargetProgress` | `public int TargetProgress { get; set; }` |
| `HorizontalSpacingBetweenStones` | `public int HorizontalSpacingBetweenStones { get; set; }` |

## Usage Example

```csharp
// Typical usage of QuestProgressVisualWidget (Widget)
// 声明/访问一个 QuestProgressVisualWidget
var widget = root.GetChild("questProgressVisualWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)