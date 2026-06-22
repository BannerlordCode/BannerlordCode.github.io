<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DevelopmentItemVisualButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DevelopmentItemVisualButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentItemVisualButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemVisualButtonWidget.cs`

## Overview

`DevelopmentItemVisualButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `UseSmallVariant` | `public bool UseSmallVariant { get; set; }` |
| `IsDaily` | `public bool IsDaily { get; set; }` |
| `SpriteCode` | `public string SpriteCode { get; set; }` |
| `DevelopmentFrontVisualWidget` | `public Widget DevelopmentFrontVisualWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of DevelopmentItemVisualButtonWidget (Widget)
// 声明/访问一个 DevelopmentItemVisualButtonWidget
var widget = root.GetChild("developmentItemVisualButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)