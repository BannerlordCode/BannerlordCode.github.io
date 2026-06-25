---
title: "Give10WarhorsesCheat"
description: "Auto-generated class reference for Give10WarhorsesCheat."
---
# Give10WarhorsesCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class Give10WarhorsesCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**File:** `SandBox/Give10WarhorsesCheat.cs`

## Overview

`Give10WarhorsesCheat` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteCheat
`public override void ExecuteCheat()`

**Purpose:** Runs the operation or workflow associated with cheat.

```csharp
// Obtain an instance of Give10WarhorsesCheat from the subsystem API first
Give10WarhorsesCheat give10WarhorsesCheat = ...;
give10WarhorsesCheat.ExecuteCheat();
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of Give10WarhorsesCheat from the subsystem API first
Give10WarhorsesCheat give10WarhorsesCheat = ...;
var result = give10WarhorsesCheat.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Give10WarhorsesCheat give10WarhorsesCheat = ...;
give10WarhorsesCheat.ExecuteCheat();
```

## See Also

- [Area Index](../)