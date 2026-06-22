<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ColorButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ColorButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ColorButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ColorButtonWidget.cs`

## Overview

`ColorButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ColorToApply` | `public string ColorToApply { get; set; }` |

## Usage Example

```csharp
// Typical usage of ColorButtonWidget (Widget)
// 声明/访问一个 ColorButtonWidget
var widget = root.GetChild("colorButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)