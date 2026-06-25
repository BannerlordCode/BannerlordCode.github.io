---
title: "EngineManaged"
description: "Auto-generated class reference for EngineManaged."
---
# EngineManaged

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal class EngineManaged : IManagedComponent`
**Base:** `IManagedComponent`
**File:** `TaleWorlds.Engine/EngineManaged.cs`

## Overview

`EngineManaged` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ManagedCallbacksDll` | `public string ManagedCallbacksDll { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
EngineManaged instance = ...;
```

## See Also

- [Area Index](../)