<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClassLoadoutAlternativeUsageItemTabButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClassLoadoutAlternativeUsageItemTabButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClassLoadoutAlternativeUsageItemTabButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/ClassLoadoutAlternativeUsageItemTabButtonWidget.cs`

## Overview

`ClassLoadoutAlternativeUsageItemTabButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `UsageType` | `public string UsageType { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of ClassLoadoutAlternativeUsageItemTabButtonWidget (Widget)
// 声明/访问一个 ClassLoadoutAlternativeUsageItemTabButtonWidget
var widget = root.GetChild("classLoadoutAlternativeUsageItemTabButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)