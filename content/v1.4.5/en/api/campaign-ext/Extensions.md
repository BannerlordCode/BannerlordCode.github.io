---
title: "Extensions"
description: "Auto-generated class reference for Extensions."
---
# Extensions

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public static class Extensions`
**Base:** none
**File:** `bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/Extensions.cs`

## Overview

`Extensions` lives in `TaleWorlds.ModuleManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ModuleManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetActiveReferencingGameAssembliesSafe
`public static Assembly GetActiveReferencingGameAssembliesSafe(this Assembly assembly)`

**Purpose:** **Purpose:** Reads and returns the active referencing game assemblies safe value held by the this instance.

```csharp
// Static call; no instance required
Extensions.GetActiveReferencingGameAssembliesSafe(assembly);
```

## Usage Example

```csharp
Extensions.GetActiveReferencingGameAssembliesSafe(assembly);
```

## See Also

- [Area Index](../)