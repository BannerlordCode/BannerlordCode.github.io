---
title: "ScoreboardBattleRewardsWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardBattleRewardsWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScoreboardBattleRewardsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardBattleRewardsWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard/ScoreboardBattleRewardsWidget.cs`

## Overview

`ScoreboardBattleRewardsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScoreboardBattleRewardsWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationInterval` | `public float AnimationInterval { get; set; }` |
| `ItemContainer` | `public Widget ItemContainer { get; set; }` |

## Key Methods

### ScoreboardBattleRewardsWidget
`public class ScoreboardBattleRewardsWidget(UIContext context)`

**Purpose:** Handles logic related to `scoreboard battle rewards widget`.

### StartAnimation
`public void StartAnimation()`

**Purpose:** Handles logic related to `start animation`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var widget = new ScoreboardBattleRewardsWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)