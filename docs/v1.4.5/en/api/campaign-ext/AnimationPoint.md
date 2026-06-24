<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimationPoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AnimationPoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class AnimationPoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects.AnimationPoints/AnimationPoint.cs`

## Overview

`AnimationPoint` lives in `SandBox.Objects.AnimationPoints` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AnimationPoints` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsArriveActionFinished` | `public bool IsArriveActionFinished { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### RequestResync
`public void RequestResync()`

**Purpose:** Handles logic related to `request resync`.

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Handles logic related to `after mission start`.

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Handles logic related to `is disabled for agent`.

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**Purpose:** Gets the current value of `user frame for agent`.

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**Purpose:** Handles logic related to `is usable by agent`.

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Called when the `use` event is raised.

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Called when the `use stopped` event is raised.

### SimulateTick
`public override void SimulateTick(float dt)`

**Purpose:** Handles logic related to `simulate tick`.

### HasAlternative
`public override bool HasAlternative()`

**Purpose:** Checks whether the current object has/contains `alternative`.

### GetRandomWaitInSeconds
`public float GetRandomWaitInSeconds()`

**Purpose:** Gets the current value of `random wait in seconds`.

### GetAlternatives
`public List<AnimationPoint> GetAlternatives()`

**Purpose:** Gets the current value of `alternatives`.

### IsRotationCorrectDuringUsage
`public bool IsRotationCorrectDuringUsage()`

**Purpose:** Handles logic related to `is rotation correct during usage`.

### OnUserConversationStart
`public override void OnUserConversationStart()`

**Purpose:** Called when the `user conversation start` event is raised.

### OnUserConversationEnd
`public override void OnUserConversationEnd()`

**Purpose:** Called when the `user conversation end` event is raised.

### SetAgentItemsVisibility
`public void SetAgentItemsVisibility(bool isVisible)`

**Purpose:** Sets the value or state of `agent items visibility`.

## Usage Example

```csharp
var value = new AnimationPoint();
value.RequestResync();
```

## See Also

- [Complete Class Catalog](../catalog)