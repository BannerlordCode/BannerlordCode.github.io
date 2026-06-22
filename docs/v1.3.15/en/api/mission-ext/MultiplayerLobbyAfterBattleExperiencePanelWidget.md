<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyAfterBattleExperiencePanelWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyAfterBattleExperiencePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAfterBattleExperiencePanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs`

## Overview

`MultiplayerLobbyAfterBattleExperiencePanelWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `GainedExperience` | `public int GainedExperience { get; set; }` |
| `ExperienceFillBar` | `public MultiplayerScoreboardAnimatedFillBarWidget ExperienceFillBar { get; set; }` |
| `EarnedExperienceCounterTextWidget` | `public CounterTextBrushWidget EarnedExperienceCounterTextWidget { get; set; }` |
| `CurrentLevelTextWidget` | `public TextWidget CurrentLevelTextWidget { get; set; }` |
| `NextLevelTextWidget` | `public TextWidget NextLevelTextWidget { get; set; }` |

## Key Methods

### StartAnimation
```csharp
public void StartAnimation()
```

### Reset
```csharp
public void Reset()
```

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyAfterBattleExperiencePanelWidget (Widget)
// 声明/访问一个 MultiplayerLobbyAfterBattleExperiencePanelWidget
var widget = root.GetChild("multiplayerLobbyAfterBattleExperiencePanelWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)