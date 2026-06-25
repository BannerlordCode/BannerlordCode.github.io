---
title: "Vec2i"
description: "Auto-generated class reference for Vec2i."
---
# Vec2i

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec2i : IEquatable<Vec2i>`
**Base:** `IEquatable<Vec2i>`
**File:** `TaleWorlds.Library/Vec2i.cs`

## Overview

`Vec2i` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Item1` | `public int Item1 { get; }` |
| `Item2` | `public int Item2 { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of Vec2i from the subsystem API first
Vec2i vec2i = ...;
var result = vec2i.Equals(obj);
```

### Equals
`public bool Equals(Vec2i value)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of Vec2i from the subsystem API first
Vec2i vec2i = ...;
var result = vec2i.Equals(value);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Vec2i from the subsystem API first
Vec2i vec2i = ...;
var result = vec2i.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Vec2i vec2i = ...;
vec2i.Equals(obj);
```

## See Also

- [Area Index](../)