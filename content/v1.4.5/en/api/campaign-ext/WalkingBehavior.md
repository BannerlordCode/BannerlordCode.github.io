---
title: "WalkingBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WalkingBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WalkingBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class WalkingBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/WalkingBehavior.cs`

## Overview

`WalkingBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetIndoorWandering
`public void SetIndoorWandering(bool isActive)`

**Purpose:** Sets the value or state of `indoor wandering`.

### SetOutdoorWandering
`public void SetOutdoorWandering(bool isActive)`

**Purpose:** Sets the value or state of `outdoor wandering`.

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Handles logic related to `tick`.

### ConversationTick
`public override void ConversationTick()`

**Purpose:** Handles logic related to `conversation tick`.

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** Gets the current value of `availability`.

### SetCustomWanderTarget
`public override void SetCustomWanderTarget(UsableMachine customUsableMachine)`

**Purpose:** Sets the value or state of `custom wander target`.

### OnSpecialTargetChanged
`public override void OnSpecialTargetChanged()`

**Purpose:** Called when the `special target changed` event is raised.

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** Gets the current value of `debug info`.

## Usage Example

```csharp
var value = new WalkingBehavior();
value.SetIndoorWandering(false);
```

## See Also

- [Complete Class Catalog](../catalog)