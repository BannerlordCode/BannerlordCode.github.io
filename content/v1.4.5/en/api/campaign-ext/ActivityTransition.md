---
title: "ActivityTransition"
description: "Auto-generated class reference for ActivityTransition."
---
# ActivityTransition

**Namespace:** TaleWorlds.ActivitySystem
**Module:** TaleWorlds.ActivitySystem
**Type:** `public enum ActivityTransition`
**Base:** none
**File:** `bin/TaleWorlds.ActivitySystem/TaleWorlds.ActivitySystem/ActivityTransition.cs`

## Overview

`ActivityTransition` lives in `TaleWorlds.ActivitySystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ActivitySystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ActivityTransition instance = ...;
```

## See Also

- [Area Index](../)