---
title: "SingleThreadedSynchronizationContext"
description: "Auto-generated class reference for SingleThreadedSynchronizationContext."
---
# SingleThreadedSynchronizationContext

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public sealed class SingleThreadedSynchronizationContext : SynchronizationContext`
**Base:** `SynchronizationContext`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/SingleThreadedSynchronizationContext.cs`

## Overview

`SingleThreadedSynchronizationContext` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Invoke
`public void Invoke()`

**Purpose:** **Purpose:** Executes the Invoke logic.

```csharp
// Obtain an instance of SingleThreadedSynchronizationContext from the subsystem API first
SingleThreadedSynchronizationContext singleThreadedSynchronizationContext = ...;
singleThreadedSynchronizationContext.Invoke();
```

### Send
`public override void Send(SendOrPostCallback callback, object state)`

**Purpose:** **Purpose:** Executes the Send logic.

```csharp
// Obtain an instance of SingleThreadedSynchronizationContext from the subsystem API first
SingleThreadedSynchronizationContext singleThreadedSynchronizationContext = ...;
singleThreadedSynchronizationContext.Send(callback, state);
```

### Post
`public override void Post(SendOrPostCallback callback, object state)`

**Purpose:** **Purpose:** Executes the Post logic.

```csharp
// Obtain an instance of SingleThreadedSynchronizationContext from the subsystem API first
SingleThreadedSynchronizationContext singleThreadedSynchronizationContext = ...;
singleThreadedSynchronizationContext.Post(callback, state);
```

### Tick
`public void Tick()`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of SingleThreadedSynchronizationContext from the subsystem API first
SingleThreadedSynchronizationContext singleThreadedSynchronizationContext = ...;
singleThreadedSynchronizationContext.Tick();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SingleThreadedSynchronizationContext singleThreadedSynchronizationContext = ...;
singleThreadedSynchronizationContext.Invoke();
```

## See Also

- [Area Index](../)