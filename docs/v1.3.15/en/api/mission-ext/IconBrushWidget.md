<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IconBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class IconBrushWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/IconBrushWidget.cs`

## Overview

`IconBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IconBrush` | `public Brush IconBrush { get; set; }` |
| `IconID` | `public string IconID { get; set; }` |
| `UseStylesFromSourceIcon` | `public bool UseStylesFromSourceIcon { get; set; }` |
| `UseIconSize` | `public bool UseIconSize { get; set; }` |

## Usage Example

```csharp
// Typical usage of IconBrushWidget (Widget)
// 声明/访问一个 IconBrushWidget
var widget = root.GetChild("iconBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)