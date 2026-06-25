---
title: "CheckpointArea"
description: "Auto-generated class reference for CheckpointArea."
---
# CheckpointArea

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class CheckpointArea : VolumeBox`
**Base:** `VolumeBox`
**File:** `SandBox/Objects/CheckpointArea.cs`

## Overview

`CheckpointArea` lives in `SandBox.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpawnPoint` | `public GameEntity SpawnPoint { get; }` |

## Key Methods

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CheckpointArea from the subsystem API first
CheckpointArea checkpointArea = ...;
checkpointArea.AfterMissionStart();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of CheckpointArea from the subsystem API first
CheckpointArea checkpointArea = ...;
var result = checkpointArea.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CheckpointArea checkpointArea = ...;
checkpointArea.AfterMissionStart();
```

## See Also

- [Area Index](../)