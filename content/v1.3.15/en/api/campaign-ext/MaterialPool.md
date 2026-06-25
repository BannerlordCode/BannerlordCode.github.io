---
title: "MaterialPool"
description: "Auto-generated class reference for MaterialPool."
---
# MaterialPool

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class MaterialPool<T>`
**Base:** none
**File:** `TaleWorlds.TwoDimension/MaterialPool.cs`

## Overview

`MaterialPool` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### New
`public T New()`

**Purpose:** Executes the New logic.

```csharp
// Obtain an instance of MaterialPool from the subsystem API first
MaterialPool materialPool = ...;
var result = materialPool.New();
```

### ResetAll
`public void ResetAll()`

**Purpose:** Returns all to its default or initial condition.

```csharp
// Obtain an instance of MaterialPool from the subsystem API first
MaterialPool materialPool = ...;
materialPool.ResetAll();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MaterialPool materialPool = ...;
materialPool.New();
```

## See Also

- [Area Index](../)