---
title: "ThreadedClientHandleMessageTask"
description: "Auto-generated class reference for ThreadedClientHandleMessageTask."
---
# ThreadedClientHandleMessageTask

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `internal sealed class ThreadedClientHandleMessageTask : ThreadedClientTask`
**Base:** `ThreadedClientTask`
**File:** `TaleWorlds.Diamond/ThreadedClientHandleMessageTask.cs`

## Overview

`ThreadedClientHandleMessageTask` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Message` | `public Message Message { get; }` |

## Key Methods

### DoJob
`public override void DoJob()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ThreadedClientHandleMessageTask from the subsystem API first
ThreadedClientHandleMessageTask threadedClientHandleMessageTask = ...;
threadedClientHandleMessageTask.DoJob();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThreadedClientHandleMessageTask threadedClientHandleMessageTask = ...;
threadedClientHandleMessageTask.DoJob();
```

## See Also

- [Area Index](../)