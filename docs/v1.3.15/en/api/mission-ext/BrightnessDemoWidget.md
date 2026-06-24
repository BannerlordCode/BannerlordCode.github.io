<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrightnessDemoWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `BrightnessDemoWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DemoType` | `public BrightnessDemoWidget.DemoTypes DemoType { get; set; }` |

## Usage Example

```csharp
var widget = new BrightnessDemoWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)