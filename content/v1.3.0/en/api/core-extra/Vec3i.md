---
title: "Vec3i"
description: "Auto-generated class reference for Vec3i."
---
# Vec3i

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec3i`
**Base:** none
**File:** `TaleWorlds.Library/Vec3i.cs`

## Overview

`Vec3i` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public int this { get; set; }` |

## Key Methods

### ToVec3
`public Vec3 ToVec3()`

**Purpose:** Executes the ToVec3 logic.

```csharp
// Obtain an instance of Vec3i from the subsystem API first
Vec3i vec3i = ...;
var result = vec3i.ToVec3();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of Vec3i from the subsystem API first
Vec3i vec3i = ...;
var result = vec3i.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Vec3i from the subsystem API first
Vec3i vec3i = ...;
var result = vec3i.GetHashCode();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Vec3i from the subsystem API first
Vec3i vec3i = ...;
var result = vec3i.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Vec3i vec3i = ...;
vec3i.ToVec3();
```

## See Also

- [Area Index](../)