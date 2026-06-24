<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InterruptingBehaviorGroup`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InterruptingBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class InterruptingBehaviorGroup : AgentBehaviorGroup`
**Base:** `AgentBehaviorGroup`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/InterruptingBehaviorGroup.cs`

## Overview

`InterruptingBehaviorGroup` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Handles logic related to `tick`.

### GetScore
`public override float GetScore(bool isSimulation)`

**Purpose:** Gets the current value of `score`.

### ForceThink
`public override void ForceThink(float inSeconds)`

**Purpose:** Handles logic related to `force think`.

### ConversationTick
`public override void ConversationTick()`

**Purpose:** Handles logic related to `conversation tick`.

## Usage Example

```csharp
var value = new InterruptingBehaviorGroup();
value.Tick(0, false);
```

## See Also

- [Complete Class Catalog](../catalog)