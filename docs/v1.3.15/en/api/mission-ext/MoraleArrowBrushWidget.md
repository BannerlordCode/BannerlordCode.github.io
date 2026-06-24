<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MoraleArrowBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `MoraleArrowBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeftSideArrow` | `public bool LeftSideArrow { get; set; }` |
| `BaseHorizontalExtendRange` | `public float BaseHorizontalExtendRange { get; set; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; set; }` |

## Key Methods

### SetFlowLevel
`public void SetFlowLevel(int flow)`

**Purpose:** Sets the value or state of `flow level`.

## Usage Example

```csharp
var widget = new MoraleArrowBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)