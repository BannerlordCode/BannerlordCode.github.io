<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MaterialValueOffsetImageWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MaterialValueOffsetImageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MaterialValueOffsetImageWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MaterialValueOffsetImageWidget.cs`

## Overview

`MaterialValueOffsetImageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ValueOffset` | `public float ValueOffset { get; set; }` |
| `SaturationOffset` | `public float SaturationOffset { get; set; }` |
| `HueOffset` | `public float HueOffset { get; set; }` |

## Usage Example

```csharp
// Typical usage of MaterialValueOffsetImageWidget (Widget)
// 声明/访问一个 MaterialValueOffsetImageWidget
var widget = root.GetChild("materialValueOffsetImageWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)