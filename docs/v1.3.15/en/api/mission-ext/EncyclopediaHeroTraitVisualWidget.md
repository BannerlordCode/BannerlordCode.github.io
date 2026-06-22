<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaHeroTraitVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaHeroTraitVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaHeroTraitVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaHeroTraitVisualWidget.cs`

## Overview

`EncyclopediaHeroTraitVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `TraitId` | `public string TraitId { get; set; }` |
| `TraitValue` | `public int TraitValue { get; set; }` |

## Usage Example

```csharp
// Typical usage of EncyclopediaHeroTraitVisualWidget (Widget)
// 声明/访问一个 EncyclopediaHeroTraitVisualWidget
var widget = root.GetChild("encyclopediaHeroTraitVisualWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)