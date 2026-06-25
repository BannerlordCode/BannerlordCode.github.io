---
title: "SingleThreadedSynchronizationContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleThreadedSynchronizationContext`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SingleThreadedSynchronizationContext

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public sealed class SingleThreadedSynchronizationContext : SynchronizationContext`
**Base:** `SynchronizationContext`
**File:** `TaleWorlds.Library/SingleThreadedSynchronizationContext.cs`

## Overview

`SingleThreadedSynchronizationContext` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Send
`public override void Send(SendOrPostCallback callback, object state)`

**Purpose:** Handles logic related to `send`.

### Post
`public override void Post(SendOrPostCallback callback, object state)`

**Purpose:** Handles logic related to `post`.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### Invoke
`public void Invoke()`

**Purpose:** Handles logic related to `invoke`.

## Usage Example

```csharp
var value = new SingleThreadedSynchronizationContext();
value.Send(callback, state);
```

## See Also

- [Complete Class Catalog](../catalog)