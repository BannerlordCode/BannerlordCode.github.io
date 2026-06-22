<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationFocusedMarkerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationFocusedMarkerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationFocusedMarkerWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationFocusedMarkerWidget.cs`

## Overview

`FormationFocusedMarkerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `NormalSize` | `public int NormalSize { get; set; }` |
| `FocusedSize` | `public int FocusedSize { get; set; }` |
| `IsCenterOfFocus` | `public bool IsCenterOfFocus { get; set; }` |
| `IsFormationTargetRelevant` | `public bool IsFormationTargetRelevant { get; set; }` |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation { get; set; }` |

## Usage Example

```csharp
// Typical usage of FormationFocusedMarkerWidget (Widget)
// 声明/访问一个 FormationFocusedMarkerWidget
var widget = root.GetChild("formationFocusedMarkerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)