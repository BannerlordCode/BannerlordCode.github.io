---
title: "TeamAIComponent"
description: "Auto-generated class reference for TeamAIComponent."
---
# TeamAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAIComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## Overview

`TeamAIComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `TeamAIComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `StrategicAreas` | `public MBReadOnlyList<StrategicArea> StrategicAreas { get; }` |
| `HasStrategicAreas` | `public bool HasStrategicAreas { get; }` |
| `IsDefenseApplicable` | `public bool IsDefenseApplicable { get; }` |
| `GetIsFirstTacticChosen` | `public bool GetIsFirstTacticChosen { get; }` |
| `Id` | `public string Id { get; }` |
| `Tactic` | `public Lazy<TacticComponent> Tactic { get; }` |
| `Weight` | `public float Weight { get; set; }` |

## Key Methods

### AddStrategicArea
`public void AddStrategicArea(StrategicArea strategicArea)`

**Purpose:** Adds strategic area to the current collection or state.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.AddStrategicArea(strategicArea);
```

### RemoveStrategicArea
`public void RemoveStrategicArea(StrategicArea strategicArea)`

**Purpose:** Removes strategic area from the current collection or state.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.RemoveStrategicArea(strategicArea);
```

### RemoveAllStrategicAreas
`public void RemoveAllStrategicAreas()`

**Purpose:** Removes all strategic areas from the current collection or state.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.RemoveAllStrategicAreas();
```

### AddTacticOption
`public void AddTacticOption(TacticComponent tacticOption)`

**Purpose:** Adds tactic option to the current collection or state.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.AddTacticOption(tacticOption);
```

### RemoveTacticOption
`public void RemoveTacticOption(Type tacticType)`

**Purpose:** Removes tactic option from the current collection or state.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.RemoveTacticOption(tacticType);
```

### ClearTacticOptions
`public void ClearTacticOptions()`

**Purpose:** Removes all tactic options from the this instance.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.ClearTacticOptions();
```

### AssertTeam
`public void AssertTeam(Team team)`

**Purpose:** Executes the AssertTeam logic.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.AssertTeam(team);
```

### NotifyTacticalDecision
`public void NotifyTacticalDecision(in TacticalDecision decision)`

**Purpose:** Notifies interested objects that tactical decision has occurred.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.NotifyTacticalDecision(decision);
```

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.OnDeploymentFinished();
```

### OnFormationFrameChanged
`public virtual void OnFormationFrameChanged(Agent agent, bool isFrameEnabled, WorldPosition frame)`

**Purpose:** Invoked when the formation frame changed event is raised.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.OnFormationFrameChanged(agent, false, frame);
```

### OnMissionEnded
`public virtual void OnMissionEnded()`

**Purpose:** Invoked when the mission ended event is raised.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.OnMissionEnded();
```

### ResetTacticalPositions
`public void ResetTacticalPositions()`

**Purpose:** Returns tactical positions to its default or initial condition.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.ResetTacticalPositions();
```

### ResetTactic
`public void ResetTactic(bool keepCurrentTactic = true)`

**Purpose:** Returns tactic to its default or initial condition.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.ResetTactic(false);
```

### CheckIsDefenseApplicable
`public void CheckIsDefenseApplicable()`

**Purpose:** Verifies whether is defense applicable holds true for the this instance.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.CheckIsDefenseApplicable();
```

### OnTacticAppliedForFirstTime
`public void OnTacticAppliedForFirstTime()`

**Purpose:** Invoked when the tactic applied for first time event is raised.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.OnTacticAppliedForFirstTime();
```

### TickOccasionally
`public void TickOccasionally()`

**Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.TickOccasionally();
```

### IsCurrentTactic
`public bool IsCurrentTactic(TacticComponent tactic)`

**Purpose:** Determines whether the this instance is in the current tactic state or condition.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
var result = teamAIComponent.IsCurrentTactic(tactic);
```

### OnUnitAddedToFormationForTheFirstTime
`public abstract void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

**Purpose:** Invoked when the unit added to formation for the first time event is raised.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.OnUnitAddedToFormationForTheFirstTime(formation);
```

### TacticalDecisionDelegate
`public delegate void TacticalDecisionDelegate(in TacticalDecision decision)`

**Purpose:** Executes the TacticalDecisionDelegate logic.

```csharp
// Obtain an instance of TeamAIComponent from the subsystem API first
TeamAIComponent teamAIComponent = ...;
teamAIComponent.TacticalDecisionDelegate(decision);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TeamAIComponent instance = ...;
```

## See Also

- [Area Index](../)