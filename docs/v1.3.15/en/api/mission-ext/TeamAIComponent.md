<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamAIComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeamAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAIComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## Overview

`TeamAIComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<TeamAIComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `StrategicAreas` | `public MBReadOnlyList<StrategicArea> StrategicAreas { get { return this._strategicAreas; }` |
| `HasStrategicAreas` | `public bool HasStrategicAreas { get { return !this._strategicAreas.IsEmpty<StrategicArea>(); }` |
| `Weight` | `public float Weight { get; set; }` |

## Key Methods

### AddStrategicArea
```csharp
public void AddStrategicArea(StrategicArea strategicArea)
```

### RemoveStrategicArea
```csharp
public void RemoveStrategicArea(StrategicArea strategicArea)
```

### RemoveAllStrategicAreas
```csharp
public void RemoveAllStrategicAreas()
```

### AddTacticOption
```csharp
public void AddTacticOption(TacticComponent tacticOption)
```

### RemoveTacticOption
```csharp
public void RemoveTacticOption(Type tacticType)
```

### ClearTacticOptions
```csharp
public void ClearTacticOptions()
```

### AssertTeam
```csharp
public void AssertTeam(Team team)
```

### NotifyTacticalDecision
```csharp
public void NotifyTacticalDecision(in TacticalDecision decision)
```

### OnDeploymentFinished
```csharp
public virtual void OnDeploymentFinished()
```

### OnFormationFrameChanged
```csharp
public virtual void OnFormationFrameChanged(Agent agent, bool isFrameEnabled, WorldPosition frame)
```

### OnMissionEnded
```csharp
public virtual void OnMissionEnded()
```

### ResetTacticalPositions
```csharp
public void ResetTacticalPositions()
```

### ResetTactic
```csharp
public void ResetTactic(bool keepCurrentTactic = true)
```

### CheckIsDefenseApplicable
```csharp
public void CheckIsDefenseApplicable()
```

### OnTacticAppliedForFirstTime
```csharp
public void OnTacticAppliedForFirstTime()
```

### TickOccasionally
```csharp
public void TickOccasionally()
```

### IsCurrentTactic
```csharp
public bool IsCurrentTactic(TacticComponent tactic)
```

### OnUnitAddedToFormationForTheFirstTime
```csharp
public abstract void OnUnitAddedToFormationForTheFirstTime(Formation formation)
```

### TacticalDecisionDelegate
```csharp
public delegate void TacticalDecisionDelegate(in TacticalDecision decision)
```

## Usage Example

```csharp
// Typical usage of TeamAIComponent (Component)
agent.GetComponent<TeamAIComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)