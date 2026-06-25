---
title: "AsyncRunner"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AsyncRunner`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AsyncRunner

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class AsyncRunner`
**Base:** none
**File:** `TaleWorlds.Library/AsyncRunner.cs`

## Overview

`AsyncRunner` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Run
`public abstract void Run()`

**Purpose:** Handles logic related to `run`.

### SyncTick
`public abstract void SyncTick()`

**Purpose:** Handles logic related to `sync tick`.

### OnRemove
`public abstract void OnRemove()`

**Purpose:** Called when the `remove` event is raised.

## Usage Example

```csharp
var implementation = new CustomAsyncRunner();
```

## See Also

- [Complete Class Catalog](../catalog)