---
title: "MultiplayerScoreboardEndOfBattlePanelWidget"
description: "Auto-generated class reference for MultiplayerScoreboardEndOfBattlePanelWidget."
---
# MultiplayerScoreboardEndOfBattlePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardEndOfBattlePanelWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard/MultiplayerScoreboardEndOfBattlePanelWidget.cs`

## Overview

`MultiplayerScoreboardEndOfBattlePanelWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerScoreboardEndOfBattlePanelWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `FirstDelay` | `public float FirstDelay { get; set; }` |
| `SecondDelay` | `public float SecondDelay { get; set; }` |

## Key Methods

### MultiplayerScoreboardEndOfBattlePanelWidget
`public class MultiplayerScoreboardEndOfBattlePanelWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the MultiplayerScoreboardEndOfBattlePanelWidget logic.

```csharp
// Obtain an instance of MultiplayerScoreboardEndOfBattlePanelWidget from the subsystem API first
MultiplayerScoreboardEndOfBattlePanelWidget multiplayerScoreboardEndOfBattlePanelWidget = ...;
var result = multiplayerScoreboardEndOfBattlePanelWidget.MultiplayerScoreboardEndOfBattlePanelWidget(context);
```

### StartAnimation
`public void StartAnimation()`

**Purpose:** **Purpose:** Starts the animation flow or state machine.

```csharp
// Obtain an instance of MultiplayerScoreboardEndOfBattlePanelWidget from the subsystem API first
MultiplayerScoreboardEndOfBattlePanelWidget multiplayerScoreboardEndOfBattlePanelWidget = ...;
multiplayerScoreboardEndOfBattlePanelWidget.StartAnimation();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerScoreboardEndOfBattlePanelWidget widget = ...;
```

## See Also

- [Area Index](../)