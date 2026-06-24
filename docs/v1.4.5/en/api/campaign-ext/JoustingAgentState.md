<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JoustingAgentState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JoustingAgentState

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public enum JoustingAgentState`
**Area:** campaign-ext

## Overview

`JoustingAgentState` lives in `SandBox.Tournaments.AgentControllers`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Tournaments.AgentControllers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `GoingToBackStart` |
| `GoToStartPosition` |
| `WaitInStartPosition` |
| `WaitingOpponent` |
| `Ready` |
| `StartRiding` |
| `Riding` |
| `RidingAtWrongSide` |

## Usage Example

```csharp
JoustingAgentState example = JoustingAgentState.GoingToBackStart;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
