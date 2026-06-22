<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerScoreboardAnimatedFillBarWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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
```csharp
public void StartAnimation()
```

### Reset
```csharp
public void Reset()
```

### FullFillFinishedHandler
```csharp
public delegate void FullFillFinishedHandler()
```

## Usage Example

```csharp
// Typical usage of MultiplayerScoreboardAnimatedFillBarWidget (Widget)
// 声明/访问一个 MultiplayerScoreboardAnimatedFillBarWidget
var widget = root.GetChild("multiplayerScoreboardAnimatedFillBarWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)