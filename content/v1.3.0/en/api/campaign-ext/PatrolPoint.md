---
title: "PatrolPoint"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PatrolPoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PatrolPoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class PatrolPoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `SandBox/Objects/PatrolPoint.cs`

## Overview

`PatrolPoint` lives in `SandBox.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetAgentItemsVisibility
`public void SetAgentItemsVisibility(bool isVisible)`

**Purpose:** Sets the value or state of `agent items visibility`.

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Called when the `use` event is raised.

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Called when the `use stopped` event is raised.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

## Usage Example

```csharp
var value = new PatrolPoint();
value.SetAgentItemsVisibility(false);
```

## See Also

- [Complete Class Catalog](../catalog)