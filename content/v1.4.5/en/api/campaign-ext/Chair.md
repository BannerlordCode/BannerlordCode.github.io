---
title: "Chair"
description: "Auto-generated class reference for Chair."
---
# Chair

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class Chair : UsableMachine`
**Base:** `UsableMachine`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.Usables/Chair.cs`

## Overview

`Chair` lives in `SandBox.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsAgentFullySitting
`public bool IsAgentFullySitting(Agent usingAgent)`

**Purpose:** Determines whether the this instance is in the agent fully sitting state or condition.

```csharp
// Obtain an instance of Chair from the subsystem API first
Chair chair = ...;
var result = chair.IsAgentFullySitting(usingAgent);
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Constructs a new a i behavior object entity and returns it to the caller.

```csharp
// Obtain an instance of Chair from the subsystem API first
Chair chair = ...;
var result = chair.CreateAIBehaviorObject();
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of Chair from the subsystem API first
Chair chair = ...;
var result = chair.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of Chair from the subsystem API first
Chair chair = ...;
var result = chair.GetDescriptionText(gameEntity);
```

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**Purpose:** Reads and returns the best point alternative to value held by the this instance.

```csharp
// Obtain an instance of Chair from the subsystem API first
Chair chair = ...;
var result = chair.GetBestPointAlternativeTo(standingPoint, agent);
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Reads and returns the order value held by the this instance.

```csharp
// Obtain an instance of Chair from the subsystem API first
Chair chair = ...;
var result = chair.GetOrder(side);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Chair chair = ...;
chair.IsAgentFullySitting(usingAgent);
```

## See Also

- [Area Index](../)