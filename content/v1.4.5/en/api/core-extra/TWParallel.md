---
title: "TWParallel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TWParallel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TWParallel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class TWParallel`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/TWParallel.cs`

## Overview

`TWParallel` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ParallelForAuxPredicate
`public delegate void ParallelForAuxPredicate(int localStartIndex, int localEndIndex)`

**Purpose:** Handles logic related to `parallel for aux predicate`.

### ParallelForWithDtAuxPredicate
`public delegate void ParallelForWithDtAuxPredicate(int localStartIndex, int localEndIndex, float dt)`

**Purpose:** Handles logic related to `parallel for with dt aux predicate`.

### InitializeAndSetImplementation
`public static void InitializeAndSetImplementation(IParallelDriver parallelDriver)`

**Purpose:** Initializes the state, resources, or bindings for `and set implementation`.

### For
`public static void For(int fromInclusive, int toExclusive, ParallelForAuxPredicate body, int grainSize = 16)`

**Purpose:** Handles logic related to `for`.

### ForWithoutRenderThread
`public static void ForWithoutRenderThread(int fromInclusive, int toExclusive, ParallelForAuxPredicate body, int grainSize = 16)`

**Purpose:** Handles logic related to `for without render thread`.

### ForWithoutRenderThreadDt
`public static void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, ParallelForWithDtAuxPredicate body, int grainSize = 16)`

**Purpose:** Handles logic related to `for without render thread dt`.

### For
`public static void For(int fromInclusive, int toExclusive, float deltaTime, ParallelForWithDtAuxPredicate body, int grainSize = 16)`

**Purpose:** Handles logic related to `for`.

### AssertIsMainThread
`public static void AssertIsMainThread()`

**Purpose:** Handles logic related to `assert is main thread`.

### IsMainThread
`public static bool IsMainThread()`

**Purpose:** Handles logic related to `is main thread`.

## Usage Example

```csharp
var value = new TWParallel();
value.ParallelForAuxPredicate(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)