---
title: "Mat2"
description: "Auto-generated class reference for Mat2."
---
# Mat2

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Mat2`
**Base:** none
**File:** `TaleWorlds.Library/Mat2.cs`

## Overview

`Mat2` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RotateCounterClockWise
`public void RotateCounterClockWise(float a)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Mat2 from the subsystem API first
Mat2 mat2 = ...;
mat2.RotateCounterClockWise(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Mat2 mat2 = ...;
mat2.RotateCounterClockWise(0);
```

## See Also

- [Area Index](../)