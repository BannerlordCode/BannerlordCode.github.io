---
title: "ScoreboardSkillItemHoverToggleWidget"
description: "Auto-generated class reference for ScoreboardSkillItemHoverToggleWidget."
---
# ScoreboardSkillItemHoverToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardSkillItemHoverToggleWidget : HoverToggleWidget`
**Base:** `HoverToggleWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs`

## Overview

`ScoreboardSkillItemHoverToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScoreboardSkillItemHoverToggleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SkillsShowWidget` | `public ScoreboardGainedSkillsListPanel SkillsShowWidget { get; set; }` |
| `GainedSkillsList` | `public ListPanel GainedSkillsList { get; set; }` |

## Key Methods

### GetAllSkillWidgets
`public List<Widget> GetAllSkillWidgets()`

**Purpose:** **Purpose:** Reads and returns the all skill widgets value held by the this instance.

```csharp
// Obtain an instance of ScoreboardSkillItemHoverToggleWidget from the subsystem API first
ScoreboardSkillItemHoverToggleWidget scoreboardSkillItemHoverToggleWidget = ...;
var result = scoreboardSkillItemHoverToggleWidget.GetAllSkillWidgets();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ScoreboardSkillItemHoverToggleWidget widget = ...;
```

## See Also

- [Area Index](../)