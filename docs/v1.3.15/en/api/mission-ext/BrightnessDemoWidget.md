<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrightnessDemoWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrightnessDemoWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BrightnessDemoWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BrightnessDemoWidget.cs`

## Overview

`BrightnessDemoWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DemoType` | `public BrightnessDemoWidget.DemoTypes DemoType { get; set; }` |

## Usage Example

```csharp
// Typical usage of BrightnessDemoWidget (Widget)
// 声明/访问一个 BrightnessDemoWidget
var widget = root.GetChild("brightnessDemoWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)