---
title: "NativeObject"
description: "Auto-generated class reference for NativeObject."
---
# NativeObject

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public abstract class NativeObject`
**Base:** none
**File:** `TaleWorlds.DotNet/NativeObject.cs`

## Overview

`NativeObject` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Pointer` | `public UIntPtr Pointer { get; }` |

## Key Methods

### ManualInvalidate
`public void ManualInvalidate()`

**Purpose:** **Purpose:** Executes the ManualInvalidate logic.

```csharp
// Obtain an instance of NativeObject from the subsystem API first
NativeObject nativeObject = ...;
nativeObject.ManualInvalidate();
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of NativeObject from the subsystem API first
NativeObject nativeObject = ...;
var result = nativeObject.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of NativeObject from the subsystem API first
NativeObject nativeObject = ...;
var result = nativeObject.Equals(obj);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
NativeObject instance = ...;
```

## See Also

- [Area Index](../)