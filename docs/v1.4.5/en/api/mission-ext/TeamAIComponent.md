<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamAIComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TeamAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAIComponent`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## Overview

`TeamAIComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `TeamAIComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Tactic` | `public Lazy<TacticComponent> Tactic { get; }` |
| `Weight` | `public float Weight { get; set; }` |
| `IsDefenseApplicable` | `public bool IsDefenseApplicable { get; }` |
| `GetIsFirstTacticChosen` | `public bool GetIsFirstTacticChosen { get; }` |

## Key Methods

### TacticalDecisionDelegate
`public delegate void TacticalDecisionDelegate(in TacticalDecision decision)`

**Purpose:** Handles logic related to `tactical decision delegate`.

### AddStrategicArea
`public void AddStrategicArea(StrategicArea strategicArea)`

**Purpose:** Adds `strategic area` to the current collection or state.

### RemoveStrategicArea
`public void RemoveStrategicArea(StrategicArea strategicArea)`

**Purpose:** Removes `strategic area` from the current collection or state.

### RemoveAllStrategicAreas
`public void RemoveAllStrategicAreas()`

**Purpose:** Removes `all strategic areas` from the current collection or state.

### AddTacticOption
`public void AddTacticOption(TacticComponent tacticOption)`

**Purpose:** Adds `tactic option` to the current collection or state.

### RemoveTacticOption
`public void RemoveTacticOption(Type tacticType)`

**Purpose:** Removes `tactic option` from the current collection or state.

### ClearTacticOptions
`public void ClearTacticOptions()`

**Purpose:** Handles logic related to `clear tactic options`.

### AssertTeam
`public void AssertTeam(Team team)`

**Purpose:** Handles logic related to `assert team`.

### NotifyTacticalDecision
`public void NotifyTacticalDecision(in TacticalDecision decision)`

**Purpose:** Handles logic related to `notify tactical decision`.

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### OnFormationFrameChanged
`public virtual void OnFormationFrameChanged(Agent agent, bool isFrameEnabled, WorldPosition frame)`

**Purpose:** Called when the `formation frame changed` event is raised.

### OnMissionEnded
`public virtual void OnMissionEnded()`

**Purpose:** Called when the `mission ended` event is raised.

### ResetTacticalPositions
`public void ResetTacticalPositions()`

**Purpose:** Resets `tactical positions` to its initial state.

### ResetTactic
`public void ResetTactic(bool keepCurrentTactic = true)`

**Purpose:** Resets `tactic` to its initial state.

### CheckIsDefenseApplicable
`public void CheckIsDefenseApplicable()`

**Purpose:** Handles logic related to `check is defense applicable`.

### OnTacticAppliedForFirstTime
`public void OnTacticAppliedForFirstTime()`

**Purpose:** Called when the `tactic applied for first time` event is raised.

### TickOccasionally
`public virtual void TickOccasionally()`

**Purpose:** Handles logic related to `tick occasionally`.

### IsCurrentTactic
`public bool IsCurrentTactic(TacticComponent tactic)`

**Purpose:** Handles logic related to `is current tactic`.

### OnUnitAddedToFormationForTheFirstTime
`public abstract void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

**Purpose:** Called when the `unit added to formation for the first time` event is raised.

## Usage Example

```csharp
var implementation = new CustomTeamAIComponent();
```

## See Also

- [Complete Class Catalog](../catalog)