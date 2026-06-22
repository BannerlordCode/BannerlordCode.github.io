<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveLoadHeroTableauWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVersionCompatible` | `public bool IsVersionCompatible { get; }` |
| `HeroVisualCode` | `public string HeroVisualCode { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |

## Usage Example

```csharp
// Typical usage of SaveLoadHeroTableauWidget (Widget)
// 声明/访问一个 SaveLoadHeroTableauWidget
var widget = root.GetChild("saveLoadHeroTableauWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)