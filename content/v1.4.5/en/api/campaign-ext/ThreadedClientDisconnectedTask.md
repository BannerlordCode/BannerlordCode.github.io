---
title: "ThreadedClientDisconnectedTask"
description: "Auto-generated class reference for ThreadedClientDisconnectedTask."
---
# ThreadedClientDisconnectedTask

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `internal sealed class ThreadedClientDisconnectedTask : ThreadedClientTask`
**Base:** `ThreadedClientTask`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientDisconnectedTask.cs`

## Overview

`ThreadedClientDisconnectedTask` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DoJob
`public override void DoJob()`

**Purpose:** **Purpose:** Executes the DoJob logic.

```csharp
// Obtain an instance of ThreadedClientDisconnectedTask from the subsystem API first
ThreadedClientDisconnectedTask threadedClientDisconnectedTask = ...;
threadedClientDisconnectedTask.DoJob();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThreadedClientDisconnectedTask threadedClientDisconnectedTask = ...;
threadedClientDisconnectedTask.DoJob();
```

## See Also

- [Area Index](../)