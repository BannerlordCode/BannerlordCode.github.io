---
title: "CommonAreaMarker"
description: "Auto-generated class reference for CommonAreaMarker."
---
# CommonAreaMarker

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class CommonAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.AreaMarkers/CommonAreaMarker.cs`

## Overview

`CommonAreaMarker` lives in `SandBox.Objects.AreaMarkers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AreaMarkers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HiddenSpawnFrames` | `public List<MatrixFrame> HiddenSpawnFrames { get; }` |
| `Tag` | `public override string Tag { get; }` |

## Key Methods

### GetUsableMachinesInRange
`public override List<UsableMachine> GetUsableMachinesInRange(string excludeTag = null)`

**Purpose:** Reads and returns the `usable machines in range` value held by the current object.

```csharp
// Obtain an instance of CommonAreaMarker from the subsystem API first
CommonAreaMarker commonAreaMarker = ...;
var result = commonAreaMarker.GetUsableMachinesInRange("example");
```

### GetAlley
`public Alley GetAlley()`

**Purpose:** Reads and returns the `alley` value held by the current object.

```csharp
// Obtain an instance of CommonAreaMarker from the subsystem API first
CommonAreaMarker commonAreaMarker = ...;
var result = commonAreaMarker.GetAlley();
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of CommonAreaMarker from the subsystem API first
CommonAreaMarker commonAreaMarker = ...;
var result = commonAreaMarker.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CommonAreaMarker commonAreaMarker = ...;
commonAreaMarker.GetUsableMachinesInRange("example");
```

## See Also

- [Area Index](../)