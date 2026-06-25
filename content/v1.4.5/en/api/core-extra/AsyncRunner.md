---
title: "AsyncRunner"
description: "Auto-generated class reference for AsyncRunner."
---
# AsyncRunner

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class AsyncRunner`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/AsyncRunner.cs`

## Overview

`AsyncRunner` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Run
`public abstract void Run()`

**Purpose:** Executes the Run logic.

```csharp
// Obtain an instance of AsyncRunner from the subsystem API first
AsyncRunner asyncRunner = ...;
asyncRunner.Run();
```

### SyncTick
`public abstract void SyncTick()`

**Purpose:** Synchronizes tick across the relevant contexts or systems.

```csharp
// Obtain an instance of AsyncRunner from the subsystem API first
AsyncRunner asyncRunner = ...;
asyncRunner.SyncTick();
```

### OnRemove
`public abstract void OnRemove()`

**Purpose:** Invoked when the remove event is raised.

```csharp
// Obtain an instance of AsyncRunner from the subsystem API first
AsyncRunner asyncRunner = ...;
asyncRunner.OnRemove();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AsyncRunner instance = ...;
```

## See Also

- [Area Index](../)