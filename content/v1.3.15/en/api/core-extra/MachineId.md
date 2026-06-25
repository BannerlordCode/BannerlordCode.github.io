---
title: "MachineId"
description: "Auto-generated class reference for MachineId."
---
# MachineId

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MachineId`
**Base:** none
**File:** `TaleWorlds.Library/MachineId.cs`

## Overview

`MachineId` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
MachineId.Initialize();
```

### AsInteger
`public static int AsInteger()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MachineId.AsInteger();
```

## Usage Example

```csharp
MachineId.Initialize();
```

## See Also

- [Area Index](../)