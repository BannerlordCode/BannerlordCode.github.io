---
title: "Passage"
description: "Auto-generated class reference for Passage."
---
# Passage

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class Passage : UsableMachine`
**Base:** `UsableMachine`
**File:** `SandBox/Objects/Usables/Passage.cs`

## Overview

`Passage` lives in `SandBox.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ToLocation` | `public Location ToLocation { get; }` |

## Key Methods

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** **Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of Passage from the subsystem API first
Passage passage = ...;
var result = passage.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** **Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of Passage from the subsystem API first
Passage passage = ...;
var result = passage.GetActionTextForStandingPoint(usableGameObject);
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** **Purpose:** Constructs a new a i behavior object entity and returns it to the caller.

```csharp
// Obtain an instance of Passage from the subsystem API first
Passage passage = ...;
var result = passage.CreateAIBehaviorObject();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Passage passage = ...;
passage.GetDescriptionText(gameEntity);
```

## See Also

- [Area Index](../)