---
title: "SerialTask"
description: "Auto-generated class reference for SerialTask."
---
# SerialTask

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class SerialTask : ITask`
**Base:** `ITask`
**File:** `TaleWorlds.Library/SerialTask.cs`

## Overview

`SerialTask` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DelegateDefinition
`public delegate void DelegateDefinition()`

**Purpose:** Executes the DelegateDefinition logic.

```csharp
// Obtain an instance of SerialTask from the subsystem API first
SerialTask serialTask = ...;
serialTask.DelegateDefinition();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SerialTask serialTask = ...;
serialTask.DelegateDefinition();
```

## See Also

- [Area Index](../)