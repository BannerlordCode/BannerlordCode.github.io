---
title: "AwaitableAsyncRunner"
description: "Auto-generated class reference for AwaitableAsyncRunner."
---
# AwaitableAsyncRunner

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class AwaitableAsyncRunner`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/AwaitableAsyncRunner.cs`

## Overview

`AwaitableAsyncRunner` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RunAsync
`public abstract Task RunAsync()`

**Purpose:** Executes the RunAsync logic.

```csharp
// Obtain an instance of AwaitableAsyncRunner from the subsystem API first
AwaitableAsyncRunner awaitableAsyncRunner = ...;
var result = awaitableAsyncRunner.RunAsync();
```

### OnTick
`public abstract void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of AwaitableAsyncRunner from the subsystem API first
AwaitableAsyncRunner awaitableAsyncRunner = ...;
awaitableAsyncRunner.OnTick(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AwaitableAsyncRunner instance = ...;
```

## See Also

- [Area Index](../)