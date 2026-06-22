<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSuspicionFillerBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSuspicionFillerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Disguise
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSuspicionFillerBrushWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/Disguise/MissionSuspicionFillerBrushWidget.cs`

## Overview

`MissionSuspicionFillerBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentSuspicionRatio` | `public float CurrentSuspicionRatio { get; set; }` |
| `ExclamationMark` | `public BrushWidget ExclamationMark { get; set; }` |
| `DetectionFillContainer` | `public Widget DetectionFillContainer { get; set; }` |
| `CircleIcon` | `public BrushWidget CircleIcon { get; set; }` |

## Usage Example

```csharp
// Typical usage of MissionSuspicionFillerBrushWidget (Widget)
// 声明/访问一个 MissionSuspicionFillerBrushWidget
var widget = root.GetChild("missionSuspicionFillerBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)