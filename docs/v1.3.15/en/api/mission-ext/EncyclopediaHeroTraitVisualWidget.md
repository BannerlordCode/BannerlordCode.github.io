<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaHeroTraitVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `EncyclopediaHeroTraitVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TraitId` | `public string TraitId { get; set; }` |
| `TraitValue` | `public int TraitValue { get; set; }` |

## Usage Example

```csharp
var widget = new EncyclopediaHeroTraitVisualWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)