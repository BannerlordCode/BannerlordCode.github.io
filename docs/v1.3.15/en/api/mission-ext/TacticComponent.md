<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TacticComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TacticComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TacticComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/TacticComponent.cs`

## Overview

`TacticComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<TacticComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `Team` | `public Team Team { get; protected set; }` |

## Key Methods

### TickOccasionally
```csharp
public virtual void TickOccasionally()
```

### ResetTactic
```csharp
public void ResetTactic()
```

### SetDefaultBehaviorWeights
```csharp
public static void SetDefaultBehaviorWeights(Formation f)
```

## Usage Example

```csharp
// Typical usage of TacticComponent (Component)
agent.GetComponent<TacticComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)