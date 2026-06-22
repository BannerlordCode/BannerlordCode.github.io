<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyMaskedIntTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyMaskedIntTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyMaskedIntTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyMaskedIntTextWidget.cs`

## Overview

`MultiplayerLobbyMaskedIntTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IntValue` | `public int IntValue { get; set; }` |
| `MaskedIntValue` | `public int MaskedIntValue { get; set; }` |
| `MaskText` | `public string MaskText { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyMaskedIntTextWidget (Widget)
// 声明/访问一个 MultiplayerLobbyMaskedIntTextWidget
var widget = root.GetChild("multiplayerLobbyMaskedIntTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)