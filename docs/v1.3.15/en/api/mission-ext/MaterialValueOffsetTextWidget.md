<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MaterialValueOffsetTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MaterialValueOffsetTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MaterialValueOffsetTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MaterialValueOffsetTextWidget.cs`

## Overview

`MaterialValueOffsetTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ValueOffset` | `public float ValueOffset { get; set; }` |
| `SaturationOffset` | `public float SaturationOffset { get; set; }` |
| `HueOffset` | `public float HueOffset { get; set; }` |

## Usage Example

```csharp
// Typical usage of MaterialValueOffsetTextWidget (Widget)
// 声明/访问一个 MaterialValueOffsetTextWidget
var widget = root.GetChild("materialValueOffsetTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)