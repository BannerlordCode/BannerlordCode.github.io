<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardBattleRewardsWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardBattleRewardsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardBattleRewardsWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardBattleRewardsWidget.cs`

## Overview

`ScoreboardBattleRewardsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationInterval` | `public float AnimationInterval { get; set; }` |
| `ItemContainer` | `public Widget ItemContainer { get; set; }` |

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
// Typical usage of ScoreboardBattleRewardsWidget (Widget)
// 声明/访问一个 ScoreboardBattleRewardsWidget
var widget = root.GetChild("scoreboardBattleRewardsWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)