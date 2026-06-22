<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionLeaveBarSliderWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionLeaveBarSliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionLeaveBarSliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionLeaveBarSliderWidget.cs`

## Overview

`MissionLeaveBarSliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `FadeInMultiplier` | `public float FadeInMultiplier { get; set; }` |
| `FadeOutMultiplier` | `public float FadeOutMultiplier { get; set; }` |

## Usage Example

```csharp
// Typical usage of MissionLeaveBarSliderWidget (Widget)
// 声明/访问一个 MissionLeaveBarSliderWidget
var widget = root.GetChild("missionLeaveBarSliderWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)