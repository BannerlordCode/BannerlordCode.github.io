---
title: "ThreadedClient"
description: "Auto-generated class reference for ThreadedClient."
---
# ThreadedClient

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class ThreadedClient : IClient`
**Base:** `IClient`
**File:** `TaleWorlds.Diamond/ThreadedClient.cs`

## Overview

`ThreadedClient` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AccessProvider` | `public ILoginAccessProvider AccessProvider { get; }` |
| `IsInCriticalState` | `public bool IsInCriticalState { get; }` |
| `AliveCheckTimeInMiliSeconds` | `public long AliveCheckTimeInMiliSeconds { get; }` |

## Key Methods

### Tick
`public void Tick()`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of ThreadedClient from the subsystem API first
ThreadedClient threadedClient = ...;
threadedClient.Tick();
```

### CheckConnection
`public Task<bool> CheckConnection()`

**Purpose:** Verifies whether connection holds true for the this instance.

```csharp
// Obtain an instance of ThreadedClient from the subsystem API first
ThreadedClient threadedClient = ...;
var result = threadedClient.CheckConnection();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThreadedClient threadedClient = ...;
threadedClient.Tick();
```

## See Also

- [Area Index](../)