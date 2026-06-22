<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TakenDamageItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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
// Typical usage of TakenDamageItemBrushWidget (Widget)
// 声明/访问一个 TakenDamageItemBrushWidget
var widget = root.GetChild("takenDamageItemBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)