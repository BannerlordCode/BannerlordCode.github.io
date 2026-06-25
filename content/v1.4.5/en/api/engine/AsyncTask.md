---
title: "AsyncTask"
description: "Auto-generated class reference for AsyncTask."
---
# AsyncTask

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class AsyncTask : NativeObject, ITask`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/AsyncTask.cs`

## Overview

`AsyncTask` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateWithDelegate
`public static AsyncTask CreateWithDelegate(ManagedDelegate function, bool isBackground)`

**Purpose:** Constructs a new with delegate entity and returns it to the caller.

```csharp
// Static call; no instance required
AsyncTask.CreateWithDelegate(function, false);
```

## Usage Example

```csharp
AsyncTask.CreateWithDelegate(function, false);
```

## See Also

- [Area Index](../)