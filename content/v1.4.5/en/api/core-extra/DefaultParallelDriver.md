---
title: "DefaultParallelDriver"
description: "Auto-generated class reference for DefaultParallelDriver."
---
# DefaultParallelDriver

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public sealed class DefaultParallelDriver : IParallelDriver`
**Base:** `IParallelDriver`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/DefaultParallelDriver.cs`

## Overview

`DefaultParallelDriver` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### For
`public void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize)`

**Purpose:** Executes the For logic.

```csharp
// Obtain an instance of DefaultParallelDriver from the subsystem API first
DefaultParallelDriver defaultParallelDriver = ...;
defaultParallelDriver.For(0, 0, body, 0);
```

### ForWithoutRenderThread
`public void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize)`

**Purpose:** Executes the ForWithoutRenderThread logic.

```csharp
// Obtain an instance of DefaultParallelDriver from the subsystem API first
DefaultParallelDriver defaultParallelDriver = ...;
defaultParallelDriver.ForWithoutRenderThread(0, 0, body, 0);
```

### ForWithoutRenderThreadDt
`public void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize)`

**Purpose:** Executes the ForWithoutRenderThreadDt logic.

```csharp
// Obtain an instance of DefaultParallelDriver from the subsystem API first
DefaultParallelDriver defaultParallelDriver = ...;
defaultParallelDriver.ForWithoutRenderThreadDt(0, 0, 0, body, 0);
```

### For
`public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize)`

**Purpose:** Executes the For logic.

```csharp
// Obtain an instance of DefaultParallelDriver from the subsystem API first
DefaultParallelDriver defaultParallelDriver = ...;
defaultParallelDriver.For(0, 0, 0, body, 0);
```

### GetMainThreadId
`public ulong GetMainThreadId()`

**Purpose:** Reads and returns the main thread id value held by the this instance.

```csharp
// Obtain an instance of DefaultParallelDriver from the subsystem API first
DefaultParallelDriver defaultParallelDriver = ...;
var result = defaultParallelDriver.GetMainThreadId();
```

### GetCurrentThreadId
`public ulong GetCurrentThreadId()`

**Purpose:** Reads and returns the current thread id value held by the this instance.

```csharp
// Obtain an instance of DefaultParallelDriver from the subsystem API first
DefaultParallelDriver defaultParallelDriver = ...;
var result = defaultParallelDriver.GetCurrentThreadId();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultParallelDriver defaultParallelDriver = ...;
defaultParallelDriver.For(0, 0, body, 0);
```

## See Also

- [Area Index](../)