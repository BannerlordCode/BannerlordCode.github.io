---
title: "GenericComparer"
description: "Auto-generated class reference for GenericComparer."
---
# GenericComparer

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class GenericComparer<T> : Comparer<T> where T : IComparable<T>`
**Base:** `Comparer<T> where T : IComparable<T>`
**File:** `TaleWorlds.Library/GenericComparer.cs`

## Overview

`GenericComparer` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(T x, T y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of GenericComparer from the subsystem API first
GenericComparer genericComparer = ...;
var result = genericComparer.Compare(x, y);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of GenericComparer from the subsystem API first
GenericComparer genericComparer = ...;
var result = genericComparer.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of GenericComparer from the subsystem API first
GenericComparer genericComparer = ...;
var result = genericComparer.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GenericComparer genericComparer = ...;
genericComparer.Compare(x, y);
```

## See Also

- [Area Index](../)