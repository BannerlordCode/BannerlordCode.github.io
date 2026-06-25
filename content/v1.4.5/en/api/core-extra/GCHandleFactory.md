---
title: "GCHandleFactory"
description: "Auto-generated class reference for GCHandleFactory."
---
# GCHandleFactory

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `internal static class GCHandleFactory`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/GCHandleFactory.cs`

## Overview

`GCHandleFactory` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetHandle
`public static GCHandle GetHandle()`

**Purpose:** Reads and returns the `handle` value held by the current object.

```csharp
// Static call; no instance required
GCHandleFactory.GetHandle();
```

### ReturnHandle
`public static void ReturnHandle(GCHandle handle)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GCHandleFactory.ReturnHandle(handle);
```

## Usage Example

```csharp
GCHandleFactory.GetHandle();
```

## See Also

- [Area Index](../)