<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DevelopmentItemVisualButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `DevelopmentItemVisualButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `UseSmallVariant` | `public bool UseSmallVariant { get; set; }` |
| `IsDaily` | `public bool IsDaily { get; set; }` |
| `SpriteCode` | `public string SpriteCode { get; set; }` |
| `DevelopmentFrontVisualWidget` | `public Widget DevelopmentFrontVisualWidget { get; set; }` |

## Usage Example

```csharp
var widget = new DevelopmentItemVisualButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)