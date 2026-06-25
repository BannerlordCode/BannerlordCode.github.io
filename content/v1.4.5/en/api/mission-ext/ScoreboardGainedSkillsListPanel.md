---
title: "ScoreboardGainedSkillsListPanel"
description: "Auto-generated class reference for ScoreboardGainedSkillsListPanel."
---
# ScoreboardGainedSkillsListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardGainedSkillsListPanel`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard/ScoreboardGainedSkillsListPanel.cs`

## Overview

`ScoreboardGainedSkillsListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ScoreboardGainedSkillsListPanel
`public class ScoreboardGainedSkillsListPanel(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ScoreboardGainedSkillsListPanel from the subsystem API first
ScoreboardGainedSkillsListPanel scoreboardGainedSkillsListPanel = ...;
var result = scoreboardGainedSkillsListPanel.ScoreboardGainedSkillsListPanel(context);
```

### SetCurrentUnit
`public void SetCurrentUnit(ScoreboardSkillItemHoverToggleWidget unit)`

**Purpose:** Assigns a new value to `current unit` and updates the object's internal state.

```csharp
// Obtain an instance of ScoreboardGainedSkillsListPanel from the subsystem API first
ScoreboardGainedSkillsListPanel scoreboardGainedSkillsListPanel = ...;
scoreboardGainedSkillsListPanel.SetCurrentUnit(unit);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ScoreboardGainedSkillsListPanel scoreboardGainedSkillsListPanel = ...;
scoreboardGainedSkillsListPanel.ScoreboardGainedSkillsListPanel(context);
```

## See Also

- [Area Index](../)