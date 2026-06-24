<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveLoadHeroTableauWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveLoadHeroTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SaveLoadHeroTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs`

## Overview

`SaveLoadHeroTableauWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SaveLoadHeroTableauWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVersionCompatible` | `public bool IsVersionCompatible { get; }` |
| `HeroVisualCode` | `public string HeroVisualCode { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |

## Usage Example

```csharp
var widget = new SaveLoadHeroTableauWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)