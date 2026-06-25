---
title: "TeleportUsePoint"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeleportUsePoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TeleportUsePoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class TeleportUsePoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects/TeleportUsePoint.cs`

## Overview

`TeleportUsePoint` lives in `SandBox.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsAIMovingTo
`public override bool IsAIMovingTo(Agent agent)`

**Purpose:** Handles logic related to `is a i moving to`.

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**Purpose:** Handles logic related to `is usable by agent`.

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Handles logic related to `is disabled for agent`.

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Called when the `use` event is raised.

### Deactivate
`public void Deactivate()`

**Purpose:** Handles logic related to `deactivate`.

### Activate
`public void Activate()`

**Purpose:** Handles logic related to `activate`.

### OnFocusGain
`public override void OnFocusGain(Agent userAgent)`

**Purpose:** Called when the `focus gain` event is raised.

## Usage Example

```csharp
var value = new TeleportUsePoint();
value.IsAIMovingTo(agent);
```

## See Also

- [Complete Class Catalog](../catalog)