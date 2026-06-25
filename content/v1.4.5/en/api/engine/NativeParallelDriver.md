---
title: "NativeParallelDriver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeParallelDriver`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NativeParallelDriver

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class NativeParallelDriver : IParallelDriver`
**Base:** `IParallelDriver`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/NativeParallelDriver.cs`

## Overview

`NativeParallelDriver` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### For
`public void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)`

**Purpose:** Handles logic related to `for`.

### ForWithoutRenderThread
`public void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)`

**Purpose:** Handles logic related to `for without render thread`.

### ForWithoutRenderThreadDt
`public void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate loopBody, int grainSize)`

**Purpose:** Handles logic related to `for without render thread dt`.

### For
`public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate loopBody, int grainSize)`

**Purpose:** Handles logic related to `for`.

### GetMainThreadId
`public ulong GetMainThreadId()`

**Purpose:** Gets the current value of `main thread id`.

### GetCurrentThreadId
`public ulong GetCurrentThreadId()`

**Purpose:** Gets the current value of `current thread id`.

## Usage Example

```csharp
var value = new NativeParallelDriver();
value.For(0, 0, loopBody, 0);
```

## See Also

- [Complete Class Catalog](../catalog)