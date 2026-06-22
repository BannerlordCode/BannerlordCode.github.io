<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScriptedMovementComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScriptedMovementComponent

**Namespace:** TaleWorlds.MountAndBlade.AI.AgentComponents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScriptedMovementComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/AI/AgentComponents/ScriptedMovementComponent.cs`

## Overview

`ScriptedMovementComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<ScriptedMovementComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### SetTargetAgent
```csharp
public void SetTargetAgent(Agent targetAgent)
```

### OnTick
```csharp
public override void OnTick(float dt)
```

### ShouldConversationStartWithAgent
```csharp
public bool ShouldConversationStartWithAgent()
```

### Reset
```csharp
public void Reset()
```

## Usage Example

```csharp
// Typical usage of ScriptedMovementComponent (Component)
agent.GetComponent<ScriptedMovementComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)