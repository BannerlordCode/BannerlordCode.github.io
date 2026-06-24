<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSuspicionFillerBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `MissionSuspicionFillerBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentSuspicionRatio` | `public float CurrentSuspicionRatio { get; set; }` |
| `ExclamationMark` | `public BrushWidget ExclamationMark { get; set; }` |
| `DetectionFillContainer` | `public Widget DetectionFillContainer { get; set; }` |
| `CircleIcon` | `public BrushWidget CircleIcon { get; set; }` |

## Usage Example

```csharp
var widget = new MissionSuspicionFillerBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)