---
title: "ThreadedClientSessionLoginTask"
description: "Auto-generated class reference for ThreadedClientSessionLoginTask."
---
# ThreadedClientSessionLoginTask

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `internal sealed class ThreadedClientSessionLoginTask : ThreadedClientSessionTask`
**Base:** `ThreadedClientSessionTask`
**File:** `TaleWorlds.Diamond/ThreadedClientSessionLoginTask.cs`

## Overview

`ThreadedClientSessionLoginTask` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LoginResult` | `public LoginResult LoginResult { get; }` |

## Key Methods

### BeginJob
`public override void BeginJob()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ThreadedClientSessionLoginTask from the subsystem API first
ThreadedClientSessionLoginTask threadedClientSessionLoginTask = ...;
threadedClientSessionLoginTask.BeginJob();
```

### DoMainThreadJob
`public override void DoMainThreadJob()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ThreadedClientSessionLoginTask from the subsystem API first
ThreadedClientSessionLoginTask threadedClientSessionLoginTask = ...;
threadedClientSessionLoginTask.DoMainThreadJob();
```

### Wait
`public Task Wait()`

**Purpose:** Pauses the current flow until the `wait` condition is met.

```csharp
// Obtain an instance of ThreadedClientSessionLoginTask from the subsystem API first
ThreadedClientSessionLoginTask threadedClientSessionLoginTask = ...;
var result = threadedClientSessionLoginTask.Wait();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThreadedClientSessionLoginTask threadedClientSessionLoginTask = ...;
threadedClientSessionLoginTask.BeginJob();
```

## See Also

- [Area Index](../)