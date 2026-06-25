---
title: "AssemblyLoader"
description: "Auto-generated class reference for AssemblyLoader."
---
# AssemblyLoader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class AssemblyLoader`
**Base:** none
**File:** `TaleWorlds.Library/AssemblyLoader.cs`

## Overview

`AssemblyLoader` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
AssemblyLoader.Initialize();
```

### LoadFrom
`public static Assembly LoadFrom(string assemblyFile, bool show_error = true)`

**Purpose:** Reads from from persistent storage or a stream.

```csharp
// Static call; no instance required
AssemblyLoader.LoadFrom("example", false);
```

## Usage Example

```csharp
AssemblyLoader.Initialize();
```

## See Also

- [Area Index](../)