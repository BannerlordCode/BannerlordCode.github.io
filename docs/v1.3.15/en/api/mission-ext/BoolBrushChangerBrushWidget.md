<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoolBrushChangerBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoolBrushChangerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoolBrushChangerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BoolBrushChangerBrushWidget.cs`

## Overview

`BoolBrushChangerBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `BooleanCheck` | `public bool BooleanCheck { get; set; }` |
| `TrueBrush` | `public string TrueBrush { get; set; }` |
| `FalseBrush` | `public string FalseBrush { get; set; }` |
| `TargetWidget` | `public BrushWidget TargetWidget { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |

## Usage Example

```csharp
// Typical usage of BoolBrushChangerBrushWidget (Widget)
// 声明/访问一个 BoolBrushChangerBrushWidget
var widget = root.GetChild("boolBrushChangerBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)