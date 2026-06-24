<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ValueComparisonStateChangerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ValueComparisonStateChangerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ValueComparisonStateChangerWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ValueComparisonStateChangerWidget.cs`

## Overview

`ValueComparisonStateChangerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ValueComparisonStateChangerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetWidget` | `public Widget TargetWidget { get; set; }` |
| `WatchType` | `public WatchTypes WatchType { get; set; }` |
| `FirstValueInt` | `public int FirstValueInt { get; set; }` |
| `SecondValueInt` | `public int SecondValueInt { get; set; }` |
| `FirstValueFloat` | `public float FirstValueFloat { get; set; }` |
| `SecondValueFloat` | `public float SecondValueFloat { get; set; }` |
| `TrueState` | `public string TrueState { get; set; }` |
| `FalseState` | `public string FalseState { get; set; }` |

## Usage Example

```csharp
var widget = new ValueComparisonStateChangerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)