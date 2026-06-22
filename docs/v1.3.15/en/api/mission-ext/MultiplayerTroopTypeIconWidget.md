<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerTroopTypeIconWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerTroopTypeIconWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTroopTypeIconWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerTroopTypeIconWidget.cs`

## Overview

`MultiplayerTroopTypeIconWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ScaleFactor` | `public float ScaleFactor { get; set; }` |
| `BackgroundWidget` | `public Widget BackgroundWidget { get; set; }` |
| `ForegroundWidget` | `public Widget ForegroundWidget { get; set; }` |
| `IconSpriteType` | `public string IconSpriteType { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerTroopTypeIconWidget (Widget)
// 声明/访问一个 MultiplayerTroopTypeIconWidget
var widget = root.GetChild("multiplayerTroopTypeIconWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)