---
title: "ManagedObject"
description: "Auto-generated class reference for ManagedObject."
---
# ManagedObject

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public abstract class ManagedObject`
**Base:** none
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/ManagedObject.cs`

## Overview

`ManagedObject` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetManagedId
`public int GetManagedId()`

**Purpose:** **Purpose:** Reads and returns the managed id value held by the this instance.

```csharp
// Obtain an instance of ManagedObject from the subsystem API first
ManagedObject managedObject = ...;
var result = managedObject.GetManagedId();
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of ManagedObject from the subsystem API first
ManagedObject managedObject = ...;
var result = managedObject.GetHashCode();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ManagedObject instance = ...;
```

## See Also

- [Area Index](../)