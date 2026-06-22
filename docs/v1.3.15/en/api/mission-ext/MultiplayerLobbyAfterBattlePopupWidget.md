<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyAfterBattlePopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyAfterBattlePopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAfterBattlePopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs`

## Overview

`MultiplayerLobbyAfterBattlePopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `RewardRevealDuration` | `public float RewardRevealDuration { get; set; }` |
| `ExperiencePanel` | `public MultiplayerLobbyAfterBattleExperiencePanelWidget ExperiencePanel { get; set; }` |
| `ClickToContinueTextWidget` | `public TextWidget ClickToContinueTextWidget { get; set; }` |
| `RewardsListPanel` | `public ListPanel RewardsListPanel { get; set; }` |

## Key Methods

### StartAnimation
```csharp
public void StartAnimation()
```

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyAfterBattlePopupWidget (Widget)
// 声明/访问一个 MultiplayerLobbyAfterBattlePopupWidget
var widget = root.GetChild("multiplayerLobbyAfterBattlePopupWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)