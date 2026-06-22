<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MoraleArrowBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MoraleArrowBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MoraleArrowBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleArrowBrushWidget.cs`

## Overview

`MoraleArrowBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeftSideArrow` | `public bool LeftSideArrow { get; set; }` |
| `BaseHorizontalExtendRange` | `public float BaseHorizontalExtendRange { get; set; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; set; }` |

## Key Methods

### SetFlowLevel
```csharp
public void SetFlowLevel(int flow)
```

## Usage Example

```csharp
// Typical usage of MoraleArrowBrushWidget (Widget)
// 声明/访问一个 MoraleArrowBrushWidget
var widget = root.GetChild("moraleArrowBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)