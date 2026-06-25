---
title: "ThreadedClientSessionFunctionTask"
description: "Auto-generated class reference for ThreadedClientSessionFunctionTask."
---
# ThreadedClientSessionFunctionTask

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `internal sealed class ThreadedClientSessionFunctionTask : ThreadedClientSessionTask`
**Base:** `ThreadedClientSessionTask`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientSessionFunctionTask.cs`

## Overview

`ThreadedClientSessionFunctionTask` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FunctionResult` | `public FunctionResult FunctionResult { get; }` |

## Key Methods

### BeginJob
`public override void BeginJob()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ThreadedClientSessionFunctionTask from the subsystem API first
ThreadedClientSessionFunctionTask threadedClientSessionFunctionTask = ...;
threadedClientSessionFunctionTask.BeginJob();
```

### DoMainThreadJob
`public override void DoMainThreadJob()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ThreadedClientSessionFunctionTask from the subsystem API first
ThreadedClientSessionFunctionTask threadedClientSessionFunctionTask = ...;
threadedClientSessionFunctionTask.DoMainThreadJob();
```

### Wait
`public async Task Wait()`

**Purpose:** Pauses the current flow until the `wait` condition is met.

```csharp
// Obtain an instance of ThreadedClientSessionFunctionTask from the subsystem API first
ThreadedClientSessionFunctionTask threadedClientSessionFunctionTask = ...;
var result = threadedClientSessionFunctionTask.Wait();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThreadedClientSessionFunctionTask threadedClientSessionFunctionTask = ...;
threadedClientSessionFunctionTask.BeginJob();
```

## See Also

- [Area Index](../)