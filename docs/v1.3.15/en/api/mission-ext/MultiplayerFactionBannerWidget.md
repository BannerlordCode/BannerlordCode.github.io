<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerFactionBannerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerFactionBannerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerFactionBannerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerFactionBannerWidget.cs`

## Overview

`MultiplayerFactionBannerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `FactionCode` | `public string FactionCode { get; set; }` |
| `BannerWidget` | `public Widget BannerWidget { get; set; }` |
| `IconWidget` | `public Widget IconWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerFactionBannerWidget (Widget)
// 声明/访问一个 MultiplayerFactionBannerWidget
var widget = root.GetChild("multiplayerFactionBannerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)