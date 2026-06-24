<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerScoreboardAnimatedFillBarWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardAnimatedFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardAnimatedFillBarWidget : FillBarWidget`
**Base:** `FillBarWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs`

## Overview

`MultiplayerScoreboardAnimatedFillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerScoreboardAnimatedFillBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsStartRequested` | `public bool IsStartRequested { get; set; }` |
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationFillSpeed` | `public float AnimationFillSpeed { get; set; }` |
| `TimesOfFullFill` | `public int TimesOfFullFill { get; set; }` |

## Key Methods

### FullFillFinishedHandler
`public delegate void FullFillFinishedHandler(bool isPositive)`

**Purpose:** Handles logic related to `full fill finished handler`.

### StartAnimation
`public void StartAnimation(float animationDelay = 0f)`

**Purpose:** Handles logic related to `start animation`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var widget = new MultiplayerScoreboardAnimatedFillBarWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)