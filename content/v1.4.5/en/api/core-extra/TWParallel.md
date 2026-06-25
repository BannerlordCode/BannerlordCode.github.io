---
title: "TWParallel"
description: "Auto-generated class reference for TWParallel."
---
# TWParallel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class TWParallel`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/TWParallel.cs`

## Overview

`TWParallel` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ParallelForAuxPredicate
`public delegate void ParallelForAuxPredicate(int localStartIndex, int localEndIndex)`

**Purpose:** Executes the ParallelForAuxPredicate logic.

```csharp
// Obtain an instance of TWParallel from the subsystem API first
TWParallel tWParallel = ...;
tWParallel.ParallelForAuxPredicate(0, 0);
```

### ParallelForWithDtAuxPredicate
`public delegate void ParallelForWithDtAuxPredicate(int localStartIndex, int localEndIndex, float dt)`

**Purpose:** Executes the ParallelForWithDtAuxPredicate logic.

```csharp
// Obtain an instance of TWParallel from the subsystem API first
TWParallel tWParallel = ...;
tWParallel.ParallelForWithDtAuxPredicate(0, 0, 0);
```

### InitializeAndSetImplementation
`public static void InitializeAndSetImplementation(IParallelDriver parallelDriver)`

**Purpose:** Prepares the resources, state, or bindings required by and set implementation.

```csharp
// Static call; no instance required
TWParallel.InitializeAndSetImplementation(parallelDriver);
```

### For
`public static void For(int fromInclusive, int toExclusive, ParallelForAuxPredicate body, int grainSize = 16)`

**Purpose:** Executes the For logic.

```csharp
// Static call; no instance required
TWParallel.For(0, 0, body, 0);
```

### ForWithoutRenderThread
`public static void ForWithoutRenderThread(int fromInclusive, int toExclusive, ParallelForAuxPredicate body, int grainSize = 16)`

**Purpose:** Executes the ForWithoutRenderThread logic.

```csharp
// Static call; no instance required
TWParallel.ForWithoutRenderThread(0, 0, body, 0);
```

### ForWithoutRenderThreadDt
`public static void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, ParallelForWithDtAuxPredicate body, int grainSize = 16)`

**Purpose:** Executes the ForWithoutRenderThreadDt logic.

```csharp
// Static call; no instance required
TWParallel.ForWithoutRenderThreadDt(0, 0, 0, body, 0);
```

### For
`public static void For(int fromInclusive, int toExclusive, float deltaTime, ParallelForWithDtAuxPredicate body, int grainSize = 16)`

**Purpose:** Executes the For logic.

```csharp
// Static call; no instance required
TWParallel.For(0, 0, 0, body, 0);
```

### AssertIsMainThread
`public static void AssertIsMainThread()`

**Purpose:** Executes the AssertIsMainThread logic.

```csharp
// Static call; no instance required
TWParallel.AssertIsMainThread();
```

### IsMainThread
`public static bool IsMainThread()`

**Purpose:** Determines whether the this instance is in the main thread state or condition.

```csharp
// Static call; no instance required
TWParallel.IsMainThread();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TWParallel tWParallel = ...;
tWParallel.ParallelForAuxPredicate(0, 0);
```

## See Also

- [Area Index](../)