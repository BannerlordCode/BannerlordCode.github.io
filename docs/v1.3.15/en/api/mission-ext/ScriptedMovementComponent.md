<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScriptedMovementComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScriptedMovementComponent

**Namespace:** TaleWorlds.MountAndBlade.AI.AgentComponents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScriptedMovementComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/AI/AgentComponents/ScriptedMovementComponent.cs`

## Overview

`ScriptedMovementComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ScriptedMovementComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetTargetAgent
`public void SetTargetAgent(Agent targetAgent)`

**Purpose:** Sets the value or state of `target agent`.

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### ShouldConversationStartWithAgent
`public bool ShouldConversationStartWithAgent()`

**Purpose:** Handles logic related to `should conversation start with agent`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var component = agent.GetComponent<ScriptedMovementComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)