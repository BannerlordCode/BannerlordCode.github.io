<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameAgentBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameAgentBehavior

**Namespace:** SandBox.Source.Missions.AgentBehaviors
**Module:** SandBox.Source
**Type:** `public class BoardGameAgentBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Source.Missions.AgentBehaviors/BoardGameAgentBehavior.cs`

## Overview

`BoardGameAgentBehavior` lives in `SandBox.Source.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Source.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Handles logic related to `tick`.

### ConversationTick
`public override void ConversationTick()`

**Purpose:** Handles logic related to `conversation tick`.

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** Gets the current value of `debug info`.

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** Gets the current value of `availability`.

### AddTargetChair
`public static void AddTargetChair(Agent ownerAgent, Chair chair)`

**Purpose:** Adds `target chair` to the current collection or state.

### RemoveBoardGameBehaviorOfAgent
`public static void RemoveBoardGameBehaviorOfAgent(Agent ownerAgent)`

**Purpose:** Removes `board game behavior of agent` from the current collection or state.

### IsAgentMovingToChair
`public static bool IsAgentMovingToChair(Agent ownerAgent)`

**Purpose:** Handles logic related to `is agent moving to chair`.

## Usage Example

```csharp
var value = new BoardGameAgentBehavior();
value.Tick(0, false);
```

## See Also

- [Complete Class Catalog](../catalog)