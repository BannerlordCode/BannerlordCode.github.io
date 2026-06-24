<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TakenDamageItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TakenDamageItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TakenDamageItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs`

## Overview

`TakenDamageItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TakenDamageItemBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `VerticalWidth` | `public float VerticalWidth { get; set; }` |
| `VerticalHeight` | `public float VerticalHeight { get; set; }` |
| `HorizontalWidth` | `public float HorizontalWidth { get; set; }` |
| `HorizontalHeight` | `public float HorizontalHeight { get; set; }` |
| `RangedOnScreenStayTime` | `public float RangedOnScreenStayTime { get; set; }` |
| `MeleeOnScreenStayTime` | `public float MeleeOnScreenStayTime { get; set; }` |
| `DamageAmount` | `public int DamageAmount { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsRanged` | `public bool IsRanged { get; set; }` |
| `ScreenPosOfAffectorAgent` | `public Vec2 ScreenPosOfAffectorAgent { get; set; }` |

## Usage Example

```csharp
var widget = new TakenDamageItemBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)