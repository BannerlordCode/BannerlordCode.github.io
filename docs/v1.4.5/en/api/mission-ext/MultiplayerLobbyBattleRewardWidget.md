<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyBattleRewardWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyBattleRewardWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyBattleRewardWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby/MultiplayerLobbyBattleRewardWidget.cs`

## Overview

`MultiplayerLobbyBattleRewardWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyBattleRewardWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `TextRevealAnimationDuration` | `public float TextRevealAnimationDuration { get; set; }` |
| `AnimationInitialScaleMultiplier` | `public float AnimationInitialScaleMultiplier { get; set; }` |

## Key Methods

### StartAnimation
`public void StartAnimation()`

**Purpose:** Handles logic related to `start animation`.

### StartPreAnimation
`public void StartPreAnimation()`

**Purpose:** Handles logic related to `start pre animation`.

### EndAnimation
`public void EndAnimation()`

**Purpose:** Handles logic related to `end animation`.

## Usage Example

```csharp
var widget = new MultiplayerLobbyBattleRewardWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)