---
title: "ScoreboardSideMoraleListPanel"
description: "Auto-generated class reference for ScoreboardSideMoraleListPanel."
---
# ScoreboardSideMoraleListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardSideMoraleListPanel`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard/ScoreboardSideMoraleListPanel.cs`

## Overview

`ScoreboardSideMoraleListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Morale` | `public float Morale { get; set; }` |
| `MaxMorale` | `public float MaxMorale { get; set; }` |

## Key Methods

### ScoreboardSideMoraleListPanel
`public class ScoreboardSideMoraleListPanel(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ScoreboardSideMoraleListPanel from the subsystem API first
ScoreboardSideMoraleListPanel scoreboardSideMoraleListPanel = ...;
var result = scoreboardSideMoraleListPanel.ScoreboardSideMoraleListPanel(context);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ScoreboardSideMoraleListPanel scoreboardSideMoraleListPanel = ...;
scoreboardSideMoraleListPanel.ScoreboardSideMoraleListPanel(context);
```

## See Also

- [Area Index](../)