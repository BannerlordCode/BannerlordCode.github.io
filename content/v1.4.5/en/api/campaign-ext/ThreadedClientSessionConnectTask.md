---
title: "ThreadedClientSessionConnectTask"
description: "Auto-generated class reference for ThreadedClientSessionConnectTask."
---
# ThreadedClientSessionConnectTask

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `internal sealed class ThreadedClientSessionConnectTask : ThreadedClientSessionTask`
**Base:** `ThreadedClientSessionTask`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientSessionConnectTask.cs`

## Overview

`ThreadedClientSessionConnectTask` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BeginJob
`public override void BeginJob()`

**Purpose:** **Purpose:** Executes the BeginJob logic.

```csharp
// Obtain an instance of ThreadedClientSessionConnectTask from the subsystem API first
ThreadedClientSessionConnectTask threadedClientSessionConnectTask = ...;
threadedClientSessionConnectTask.BeginJob();
```

### DoMainThreadJob
`public override void DoMainThreadJob()`

**Purpose:** **Purpose:** Executes the DoMainThreadJob logic.

```csharp
// Obtain an instance of ThreadedClientSessionConnectTask from the subsystem API first
ThreadedClientSessionConnectTask threadedClientSessionConnectTask = ...;
threadedClientSessionConnectTask.DoMainThreadJob();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThreadedClientSessionConnectTask threadedClientSessionConnectTask = ...;
threadedClientSessionConnectTask.BeginJob();
```

## See Also

- [Area Index](../)