<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MoraleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MoraleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MoraleWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs`

## Overview

`MoraleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IncreaseLevel` | `public int IncreaseLevel { get; set; }` |
| `MoralePercentage` | `public int MoralePercentage { get; set; }` |
| `Container` | `public Widget Container { get; set; }` |
| `ItemContainer` | `public Widget ItemContainer { get; set; }` |
| `ItemBrush` | `public Brush ItemBrush { get; set; }` |
| `ItemGlowBrush` | `public Brush ItemGlowBrush { get; set; }` |
| `ItemBackgroundBrush` | `public Brush ItemBackgroundBrush { get; set; }` |
| `TeamColorAsStr` | `public string TeamColorAsStr { get; set; }` |
| `TeamColorAsStrSecondary` | `public string TeamColorAsStrSecondary { get; set; }` |
| `FlowArrowWidget` | `public MoraleArrowBrushWidget FlowArrowWidget { get; set; }` |
| `ExtendToLeft` | `public bool ExtendToLeft { get; set; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; set; }` |
| `ParentWidget` | `public Widget ParentWidget { get; }` |
| `MaskWidget` | `public Widget MaskWidget { get; }` |
| `ItemWidget` | `public BrushWidget ItemWidget { get; }` |
| `ItemGlowWidget` | `public BrushWidget ItemGlowWidget { get; }` |
| `ItemBackgroundWidget` | `public Widget ItemBackgroundWidget { get; }` |

## Key Methods

### SetFillAmount
```csharp
public void SetFillAmount(float fill, int fillMargin)
```

## Usage Example

```csharp
// Typical usage of MoraleWidget (Widget)
// 声明/访问一个 MoraleWidget
var widget = root.GetChild("moraleWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)