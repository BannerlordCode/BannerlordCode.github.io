---
title: "MBWorkspace"
description: "Auto-generated class reference for MBWorkspace."
---
# MBWorkspace

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBWorkspace<T>`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBWorkspace.cs`

## Overview

`MBWorkspace` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StartUsingWorkspace
`public T StartUsingWorkspace()`

**Purpose:** **Purpose:** Starts the using workspace flow or state machine.

```csharp
// Obtain an instance of MBWorkspace from the subsystem API first
MBWorkspace mBWorkspace = ...;
var result = mBWorkspace.StartUsingWorkspace();
```

### StopUsingWorkspace
`public void StopUsingWorkspace()`

**Purpose:** **Purpose:** Stops the using workspace flow or state machine.

```csharp
// Obtain an instance of MBWorkspace from the subsystem API first
MBWorkspace mBWorkspace = ...;
mBWorkspace.StopUsingWorkspace();
```

### GetWorkspace
`public T GetWorkspace()`

**Purpose:** **Purpose:** Reads and returns the workspace value held by the this instance.

```csharp
// Obtain an instance of MBWorkspace from the subsystem API first
MBWorkspace mBWorkspace = ...;
var result = mBWorkspace.GetWorkspace();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBWorkspace mBWorkspace = ...;
mBWorkspace.StartUsingWorkspace();
```

## See Also

- [Area Index](../)