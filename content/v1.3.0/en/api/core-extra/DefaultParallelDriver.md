---
title: "DefaultParallelDriver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultParallelDriver`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultParallelDriver

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public sealed class DefaultParallelDriver : IParallelDriver`
**Base:** `IParallelDriver`
**File:** `TaleWorlds.Library/DefaultParallelDriver.cs`

## Overview

`DefaultParallelDriver` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### For
`public void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize)`

**Purpose:** Handles logic related to `for`.

### For
`public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize)`

**Purpose:** Handles logic related to `for`.

### GetMainThreadId
`public ulong GetMainThreadId()`

**Purpose:** Gets the current value of `main thread id`.

### GetCurrentThreadId
`public ulong GetCurrentThreadId()`

**Purpose:** Gets the current value of `current thread id`.

## Usage Example

```csharp
var value = new DefaultParallelDriver();
value.For(0, 0, body, 0);
```

## See Also

- [Complete Class Catalog](../catalog)