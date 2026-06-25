---
title: "ManagedDelegate"
description: "Auto-generated class reference for ManagedDelegate."
---
# ManagedDelegate

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class ManagedDelegate : DotNetObject`
**Base:** `DotNetObject`
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/ManagedDelegate.cs`

## Overview

`ManagedDelegate` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public DelegateDefinition Instance { get; set; }` |

## Key Methods

### DelegateDefinition
`public delegate void DelegateDefinition()`

**Purpose:** **Purpose:** Executes the DelegateDefinition logic.

```csharp
// Obtain an instance of ManagedDelegate from the subsystem API first
ManagedDelegate managedDelegate = ...;
managedDelegate.DelegateDefinition();
```

### InvokeAux
`public void InvokeAux()`

**Purpose:** **Purpose:** Executes the InvokeAux logic.

```csharp
// Obtain an instance of ManagedDelegate from the subsystem API first
ManagedDelegate managedDelegate = ...;
managedDelegate.InvokeAux();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ManagedDelegate managedDelegate = ...;
managedDelegate.DelegateDefinition();
```

## See Also

- [Area Index](../)