---
title: "UsablePlace"
description: "Auto-generated class reference for UsablePlace."
---
# UsablePlace

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class UsablePlace : UsableMachine`
**Base:** `UsableMachine`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.Usables/UsablePlace.cs`

## Overview

`UsablePlace` lives in `SandBox.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of UsablePlace from the subsystem API first
UsablePlace usablePlace = ...;
var result = usablePlace.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the `action text for standing point` value held by the current object.

```csharp
// Obtain an instance of UsablePlace from the subsystem API first
UsablePlace usablePlace = ...;
var result = usablePlace.GetActionTextForStandingPoint(usableGameObject);
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Constructs a new `a i behavior object` entity and returns it to the caller.

```csharp
// Obtain an instance of UsablePlace from the subsystem API first
UsablePlace usablePlace = ...;
var result = usablePlace.CreateAIBehaviorObject();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
UsablePlace usablePlace = ...;
usablePlace.GetDescriptionText(gameEntity);
```

## See Also

- [Area Index](../)