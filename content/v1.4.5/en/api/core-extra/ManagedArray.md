---
title: "ManagedArray"
description: "Auto-generated class reference for ManagedArray."
---
# ManagedArray

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct ManagedArray`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ManagedArray.cs`

## Overview

`ManagedArray` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ManagedArray
`public struct ManagedArray(IntPtr array, int length)`

**Purpose:** Executes the ManagedArray logic.

```csharp
// Obtain an instance of ManagedArray from the subsystem API first
ManagedArray managedArray = ...;
var result = managedArray.ManagedArray(array, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ManagedArray managedArray = ...;
managedArray.ManagedArray(array, 0);
```

## See Also

- [Area Index](../)