<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyCosmeticAnimationControllerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyCosmeticAnimationControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyCosmeticAnimationControllerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyCosmeticAnimationControllerWidget.cs`

## Overview

`MultiplayerLobbyCosmeticAnimationControllerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CosmeticRarity` | `public int CosmeticRarity { get; set; }` |
| `MinAlphaChangeDuration` | `public float MinAlphaChangeDuration { get; set; }` |
| `MaxAlphaChangeDuration` | `public float MaxAlphaChangeDuration { get; set; }` |
| `MinAlphaLowerBound` | `public float MinAlphaLowerBound { get; set; }` |
| `MinAlphaUpperBound` | `public float MinAlphaUpperBound { get; set; }` |
| `MaxAlphaLowerBound` | `public float MaxAlphaLowerBound { get; set; }` |
| `MaxAlphaUpperBound` | `public float MaxAlphaUpperBound { get; set; }` |
| `RarityCommonColor` | `public Color RarityCommonColor { get; set; }` |
| `RarityRareColor` | `public Color RarityRareColor { get; set; }` |
| `RarityUniqueColor` | `public Color RarityUniqueColor { get; set; }` |
| `AnimationPartContainer` | `public BasicContainer AnimationPartContainer { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyCosmeticAnimationControllerWidget (Widget)
// 声明/访问一个 MultiplayerLobbyCosmeticAnimationControllerWidget
var widget = root.GetChild("multiplayerLobbyCosmeticAnimationControllerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)