<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardGainedSkillsListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardGainedSkillsListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardGainedSkillsListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs`

## Overview

`ScoreboardGainedSkillsListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetCurrentUnit
`public void SetCurrentUnit(ScoreboardSkillItemHoverToggleWidget unit)`

**Purpose:** Sets the value or state of `current unit`.

## Usage Example

```csharp
var value = new ScoreboardGainedSkillsListPanel();
value.SetCurrentUnit(unit);
```

## See Also

- [Complete Class Catalog](../catalog)