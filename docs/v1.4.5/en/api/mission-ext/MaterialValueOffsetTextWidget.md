<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MaterialValueOffsetTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MaterialValueOffsetTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MaterialValueOffsetTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer/MaterialValueOffsetTextWidget.cs`

## Overview

`MaterialValueOffsetTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MaterialValueOffsetTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ValueOffset` | `public float ValueOffset { get; set; }` |
| `SaturationOffset` | `public float SaturationOffset { get; set; }` |
| `HueOffset` | `public float HueOffset { get; set; }` |

## Usage Example

```csharp
var widget = new MaterialValueOffsetTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)