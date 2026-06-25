---
title: "MultiplayerBattleResultColorizedWidget"
description: "Auto-generated class reference for MultiplayerBattleResultColorizedWidget."
---
# MultiplayerBattleResultColorizedWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleResultColorizedWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer/MultiplayerBattleResultColorizedWidget.cs`

## Overview

`MultiplayerBattleResultColorizedWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerBattleResultColorizedWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResult` | `public int BattleResult { get; set; }` |
| `DrawColor` | `public Color DrawColor { get; set; }` |
| `VictoryColor` | `public Color VictoryColor { get; set; }` |
| `DefeatColor` | `public Color DefeatColor { get; set; }` |

## Key Methods

### MultiplayerBattleResultColorizedWidget
`public class MultiplayerBattleResultColorizedWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerBattleResultColorizedWidget from the subsystem API first
MultiplayerBattleResultColorizedWidget multiplayerBattleResultColorizedWidget = ...;
var result = multiplayerBattleResultColorizedWidget.MultiplayerBattleResultColorizedWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerBattleResultColorizedWidget widget = ...;
```

## See Also

- [Area Index](../)