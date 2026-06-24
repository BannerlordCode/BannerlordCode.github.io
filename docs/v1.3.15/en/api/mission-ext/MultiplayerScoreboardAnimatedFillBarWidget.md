<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerScoreboardAnimatedFillBarWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardAnimatedFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardAnimatedFillBarWidget : FillBarWidget`
**Base:** `FillBarWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs`

## Overview

`MultiplayerScoreboardAnimatedFillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerScoreboardAnimatedFillBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsStartRequested` | `public bool IsStartRequested { get; set; }` |
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `TimesOfFullFill` | `public int TimesOfFullFill { get; set; }` |
| `ChangeOverlayWidget` | `public Widget ChangeOverlayWidget { get; set; }` |

## Key Methods

### StartAnimation
`public void StartAnimation()`

**Purpose:** Handles logic related to `start animation`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### FullFillFinishedHandler
`public delegate void FullFillFinishedHandler()`

**Purpose:** Handles logic related to `full fill finished handler`.

## Usage Example

```csharp
var widget = new MultiplayerScoreboardAnimatedFillBarWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)