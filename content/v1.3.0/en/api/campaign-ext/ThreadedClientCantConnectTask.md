---
title: "ThreadedClientCantConnectTask"
description: "Auto-generated class reference for ThreadedClientCantConnectTask."
---
# ThreadedClientCantConnectTask

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `internal sealed class ThreadedClientCantConnectTask : ThreadedClientTask`
**Base:** `ThreadedClientTask`
**File:** `TaleWorlds.Diamond/ThreadedClientCantConnectTask.cs`

## Overview

`ThreadedClientCantConnectTask` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DoJob
`public override void DoJob()`

**Purpose:** **Purpose:** Executes the DoJob logic.

```csharp
// Obtain an instance of ThreadedClientCantConnectTask from the subsystem API first
ThreadedClientCantConnectTask threadedClientCantConnectTask = ...;
threadedClientCantConnectTask.DoJob();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThreadedClientCantConnectTask threadedClientCantConnectTask = ...;
threadedClientCantConnectTask.DoJob();
```

## See Also

- [Area Index](../)