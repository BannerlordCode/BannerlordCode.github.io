---
title: "CheckpointUsePoint"
description: "Auto-generated class reference for CheckpointUsePoint."
---
# CheckpointUsePoint

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class CheckpointUsePoint : UsableMachine`
**Base:** `UsableMachine`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.Usables/CheckpointUsePoint.cs`

## Overview

`CheckpointUsePoint` lives in `SandBox.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpawnPoint` | `public GameEntity SpawnPoint { get; }` |

## Key Methods

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Executes the AfterMissionStart logic.

```csharp
// Obtain an instance of CheckpointUsePoint from the subsystem API first
CheckpointUsePoint checkpointUsePoint = ...;
checkpointUsePoint.AfterMissionStart();
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of CheckpointUsePoint from the subsystem API first
CheckpointUsePoint checkpointUsePoint = ...;
var result = checkpointUsePoint.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of CheckpointUsePoint from the subsystem API first
CheckpointUsePoint checkpointUsePoint = ...;
var result = checkpointUsePoint.GetDescriptionText(gameEntity);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CheckpointUsePoint checkpointUsePoint = ...;
checkpointUsePoint.AfterMissionStart();
```

## See Also

- [Area Index](../)