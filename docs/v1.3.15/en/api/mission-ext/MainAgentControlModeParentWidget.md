<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MainAgentControlModeParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MainAgentControlModeParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.MainAgentControlMode
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MainAgentControlModeParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MainAgentControlMode/MainAgentControlModeParentWidget.cs`

## Overview

`MainAgentControlModeParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `AnimationFirstStepDuration` | `public float AnimationFirstStepDuration { get; set; }` |
| `AnimationSecondStepDuration` | `public float AnimationSecondStepDuration { get; set; }` |
| `ChildItemId` | `public string ChildItemId { get; set; }` |
| `ControlModesList` | `public ListPanel ControlModesList { get; set; }` |
| `SelectionIndicatorWidget` | `public Widget SelectionIndicatorWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of MainAgentControlModeParentWidget (Widget)
// 声明/访问一个 MainAgentControlModeParentWidget
var widget = root.GetChild("mainAgentControlModeParentWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)