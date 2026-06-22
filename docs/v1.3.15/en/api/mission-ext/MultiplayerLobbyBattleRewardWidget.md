<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyBattleRewardWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyBattleRewardWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyBattleRewardWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBattleRewardWidget.cs`

## Overview

`MultiplayerLobbyBattleRewardWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `TextRevealAnimationDuration` | `public float TextRevealAnimationDuration { get; set; }` |
| `AnimationInitialScaleMultiplier` | `public float AnimationInitialScaleMultiplier { get; set; }` |

## Key Methods

### StartAnimation
```csharp
public void StartAnimation()
```

### StartPreAnimation
```csharp
public void StartPreAnimation()
```

### EndAnimation
```csharp
public void EndAnimation()
```

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyBattleRewardWidget (Widget)
// 声明/访问一个 MultiplayerLobbyBattleRewardWidget
var widget = root.GetChild("multiplayerLobbyBattleRewardWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)