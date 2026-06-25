---
title: "CheckpointArea"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CheckpointArea`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `after mission start`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
var value = new CheckpointArea();
value.AfterMissionStart();
```

## See Also

- [Complete Class Catalog](../catalog)