---
title: "NativeParallelDriver"
description: "Auto-generated class reference for NativeParallelDriver."
---
# NativeParallelDriver

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class NativeParallelDriver : IParallelDriver`
**Base:** `IParallelDriver`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/NativeParallelDriver.cs`

## Overview

`NativeParallelDriver` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### For
`public void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)`

**Purpose:** Executes the For logic.

```csharp
// Obtain an instance of NativeParallelDriver from the subsystem API first
NativeParallelDriver nativeParallelDriver = ...;
nativeParallelDriver.For(0, 0, loopBody, 0);
```

### ForWithoutRenderThread
`public void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)`

**Purpose:** Executes the ForWithoutRenderThread logic.

```csharp
// Obtain an instance of NativeParallelDriver from the subsystem API first
NativeParallelDriver nativeParallelDriver = ...;
nativeParallelDriver.ForWithoutRenderThread(0, 0, loopBody, 0);
```

### ForWithoutRenderThreadDt
`public void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate loopBody, int grainSize)`

**Purpose:** Executes the ForWithoutRenderThreadDt logic.

```csharp
// Obtain an instance of NativeParallelDriver from the subsystem API first
NativeParallelDriver nativeParallelDriver = ...;
nativeParallelDriver.ForWithoutRenderThreadDt(0, 0, 0, loopBody, 0);
```

### For
`public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate loopBody, int grainSize)`

**Purpose:** Executes the For logic.

```csharp
// Obtain an instance of NativeParallelDriver from the subsystem API first
NativeParallelDriver nativeParallelDriver = ...;
nativeParallelDriver.For(0, 0, 0, loopBody, 0);
```

### GetMainThreadId
`public ulong GetMainThreadId()`

**Purpose:** Reads and returns the main thread id value held by the this instance.

```csharp
// Obtain an instance of NativeParallelDriver from the subsystem API first
NativeParallelDriver nativeParallelDriver = ...;
var result = nativeParallelDriver.GetMainThreadId();
```

### GetCurrentThreadId
`public ulong GetCurrentThreadId()`

**Purpose:** Reads and returns the current thread id value held by the this instance.

```csharp
// Obtain an instance of NativeParallelDriver from the subsystem API first
NativeParallelDriver nativeParallelDriver = ...;
var result = nativeParallelDriver.GetCurrentThreadId();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NativeParallelDriver nativeParallelDriver = ...;
nativeParallelDriver.For(0, 0, loopBody, 0);
```

## See Also

- [Area Index](../)