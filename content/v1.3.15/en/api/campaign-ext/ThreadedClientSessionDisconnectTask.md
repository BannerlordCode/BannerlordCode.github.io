---
title: "ThreadedClientSessionDisconnectTask"
description: "Auto-generated class reference for ThreadedClientSessionDisconnectTask."
---
# ThreadedClientSessionDisconnectTask

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `internal sealed class ThreadedClientSessionDisconnectTask : ThreadedClientSessionTask`
**Base:** `ThreadedClientSessionTask`
**File:** `TaleWorlds.Diamond/ThreadedClientSessionDisconnectTask.cs`

## Overview

`ThreadedClientSessionDisconnectTask` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BeginJob
`public override void BeginJob()`

**Purpose:** Executes the BeginJob logic.

```csharp
// Obtain an instance of ThreadedClientSessionDisconnectTask from the subsystem API first
ThreadedClientSessionDisconnectTask threadedClientSessionDisconnectTask = ...;
threadedClientSessionDisconnectTask.BeginJob();
```

### DoMainThreadJob
`public override void DoMainThreadJob()`

**Purpose:** Executes the DoMainThreadJob logic.

```csharp
// Obtain an instance of ThreadedClientSessionDisconnectTask from the subsystem API first
ThreadedClientSessionDisconnectTask threadedClientSessionDisconnectTask = ...;
threadedClientSessionDisconnectTask.DoMainThreadJob();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThreadedClientSessionDisconnectTask threadedClientSessionDisconnectTask = ...;
threadedClientSessionDisconnectTask.BeginJob();
```

## See Also

- [Area Index](../)