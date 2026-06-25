---
title: "ThreadedClientSessionTask"
description: "Auto-generated class reference for ThreadedClientSessionTask."
---
# ThreadedClientSessionTask

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `internal abstract class ThreadedClientSessionTask`
**Base:** none
**File:** `TaleWorlds.Diamond/ThreadedClientSessionTask.cs`

## Overview

`ThreadedClientSessionTask` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Session` | `public IClientSession Session { get; }` |
| `Finished` | `public bool Finished { get; set; }` |

## Key Methods

### BeginJob
`public abstract void BeginJob()`

**Purpose:** Executes the BeginJob logic.

```csharp
// Obtain an instance of ThreadedClientSessionTask from the subsystem API first
ThreadedClientSessionTask threadedClientSessionTask = ...;
threadedClientSessionTask.BeginJob();
```

### DoMainThreadJob
`public abstract void DoMainThreadJob()`

**Purpose:** Executes the DoMainThreadJob logic.

```csharp
// Obtain an instance of ThreadedClientSessionTask from the subsystem API first
ThreadedClientSessionTask threadedClientSessionTask = ...;
threadedClientSessionTask.DoMainThreadJob();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ThreadedClientSessionTask instance = ...;
```

## See Also

- [Area Index](../)