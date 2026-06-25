---
title: "PatrolPoint"
description: "Auto-generated class reference for PatrolPoint."
---
# PatrolPoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class PatrolPoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `Modules.SandBox/SandBox/SandBox.Objects/PatrolPoint.cs`

## Overview

`PatrolPoint` lives in `SandBox.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetAgentItemsVisibility
`public void SetAgentItemsVisibility(bool isVisible)`

**Purpose:** Assigns a new value to `agent items visibility` and updates the object's internal state.

```csharp
// Obtain an instance of PatrolPoint from the subsystem API first
PatrolPoint patrolPoint = ...;
patrolPoint.SetAgentItemsVisibility(false);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the `use` event is raised.

```csharp
// Obtain an instance of PatrolPoint from the subsystem API first
PatrolPoint patrolPoint = ...;
patrolPoint.OnUse(userAgent, 0);
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Invoked when the `use stopped` event is raised.

```csharp
// Obtain an instance of PatrolPoint from the subsystem API first
PatrolPoint patrolPoint = ...;
patrolPoint.OnUseStopped(userAgent, false, 0);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of PatrolPoint from the subsystem API first
PatrolPoint patrolPoint = ...;
var result = patrolPoint.GetDescriptionText(gameEntity);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PatrolPoint patrolPoint = ...;
patrolPoint.SetAgentItemsVisibility(false);
```

## See Also

- [Area Index](../)