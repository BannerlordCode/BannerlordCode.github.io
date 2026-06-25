---
title: "Give10GrainCheat"
description: "Auto-generated class reference for Give10GrainCheat."
---
# Give10GrainCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class Give10GrainCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**File:** `Modules.SandBox/SandBox/Sandbox/Give10GrainCheat.cs`

## Overview

`Give10GrainCheat` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteCheat
`public override void ExecuteCheat()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cheat.

```csharp
// Obtain an instance of Give10GrainCheat from the subsystem API first
Give10GrainCheat give10GrainCheat = ...;
give10GrainCheat.ExecuteCheat();
```

### GetName
`public override TextObject GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of Give10GrainCheat from the subsystem API first
Give10GrainCheat give10GrainCheat = ...;
var result = give10GrainCheat.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Give10GrainCheat give10GrainCheat = ...;
give10GrainCheat.ExecuteCheat();
```

## See Also

- [Area Index](../)