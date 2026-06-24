<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PassageUsePoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PassageUsePoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class PassageUsePoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects/PassageUsePoint.cs`

## Overview

`PassageUsePoint` lives in `SandBox.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MovingAgent` | `public override Agent MovingAgent { get; }` |
| `ToLocation` | `public Location ToLocation { get; }` |

## Key Methods

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Handles logic related to `is disabled for agent`.

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Handles logic related to `after mission start`.

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Called when the `use` event is raised.

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Called when the `use stopped` event is raised.

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**Purpose:** Handles logic related to `is usable by agent`.

### GetMovingAgentCount
`public override int GetMovingAgentCount()`

**Purpose:** Gets the current value of `moving agent count`.

### GetMovingAgentWithIndex
`public override Agent GetMovingAgentWithIndex(int index)`

**Purpose:** Gets the current value of `moving agent with index`.

### AddMovingAgent
`public override void AddMovingAgent(Agent movingAgent)`

**Purpose:** Adds `moving agent` to the current collection or state.

### RemoveMovingAgent
`public override void RemoveMovingAgent(Agent movingAgent)`

**Purpose:** Removes `moving agent` from the current collection or state.

### IsAIMovingTo
`public override bool IsAIMovingTo(Agent agent)`

**Purpose:** Handles logic related to `is a i moving to`.

## Usage Example

```csharp
var value = new PassageUsePoint();
value.IsDisabledForAgent(agent);
```

## See Also

- [Complete Class Catalog](../catalog)