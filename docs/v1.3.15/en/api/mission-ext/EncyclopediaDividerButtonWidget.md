<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaDividerButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaDividerButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaDividerButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaDividerButtonWidget.cs`

## Overview

`EncyclopediaDividerButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemListWidget` | `public Widget ItemListWidget { get; set; }` |
| `CollapseIndicator` | `public Widget CollapseIndicator { get; set; }` |

## Usage Example

```csharp
// Typical usage of EncyclopediaDividerButtonWidget (Widget)
// 声明/访问一个 EncyclopediaDividerButtonWidget
var widget = root.GetChild("encyclopediaDividerButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)