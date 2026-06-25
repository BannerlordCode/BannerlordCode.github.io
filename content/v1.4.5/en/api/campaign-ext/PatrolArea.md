---
title: "PatrolArea"
description: "Auto-generated class reference for PatrolArea."
---
# PatrolArea

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class PatrolArea : UsableMachine`
**Base:** `UsableMachine`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.Usables/PatrolArea.cs`

## Overview

`PatrolArea` lives in `SandBox.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of PatrolArea from the subsystem API first
PatrolArea patrolArea = ...;
var result = patrolArea.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of PatrolArea from the subsystem API first
PatrolArea patrolArea = ...;
var result = patrolArea.GetDescriptionText(gameEntity);
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Constructs a new a i behavior object entity and returns it to the caller.

```csharp
// Obtain an instance of PatrolArea from the subsystem API first
PatrolArea patrolArea = ...;
var result = patrolArea.CreateAIBehaviorObject();
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of PatrolArea from the subsystem API first
PatrolArea patrolArea = ...;
var result = patrolArea.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PatrolArea patrolArea = ...;
patrolArea.GetActionTextForStandingPoint(usableGameObject);
```

## See Also

- [Area Index](../)