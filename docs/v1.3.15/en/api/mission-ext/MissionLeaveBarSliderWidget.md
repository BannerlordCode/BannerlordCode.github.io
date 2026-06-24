<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionLeaveBarSliderWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `MissionLeaveBarSliderWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FadeInMultiplier` | `public float FadeInMultiplier { get; set; }` |
| `FadeOutMultiplier` | `public float FadeOutMultiplier { get; set; }` |

## Usage Example

```csharp
var widget = new MissionLeaveBarSliderWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)