---
title: "MBGUID"
description: "Auto-generated class reference for MBGUID."
---
# MBGUID

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public struct MBGUID : IComparable, IEquatable<MBGUID>`
**Base:** `IComparable`
**File:** `TaleWorlds.ObjectSystem/MBGUID.cs`

## Overview

`MBGUID` lives in `TaleWorlds.ObjectSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InternalValue` | `public uint InternalValue { get; }` |
| `SubId` | `public uint SubId { get; }` |

## Key Methods

### GetHash2
`public static long GetHash2(MBGUID id1, MBGUID id2)`

**Purpose:** Reads and returns the hash2 value held by the this instance.

```csharp
// Static call; no instance required
MBGUID.GetHash2(id1, id2);
```

### CompareTo
`public int CompareTo(object a)`

**Purpose:** Compares the this instance with the supplied instance for ordering.

```csharp
// Obtain an instance of MBGUID from the subsystem API first
MBGUID mBGUID = ...;
var result = mBGUID.CompareTo(a);
```

### GetTypeIndex
`public uint GetTypeIndex()`

**Purpose:** Reads and returns the type index value held by the this instance.

```csharp
// Obtain an instance of MBGUID from the subsystem API first
MBGUID mBGUID = ...;
var result = mBGUID.GetTypeIndex();
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MBGUID from the subsystem API first
MBGUID mBGUID = ...;
var result = mBGUID.GetHashCode();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MBGUID from the subsystem API first
MBGUID mBGUID = ...;
var result = mBGUID.ToString();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MBGUID from the subsystem API first
MBGUID mBGUID = ...;
var result = mBGUID.Equals(obj);
```

### Equals
`public bool Equals(MBGUID other)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MBGUID from the subsystem API first
MBGUID mBGUID = ...;
var result = mBGUID.Equals(other);
```

## Usage Example

```csharp
MBGUID.GetHash2(id1, id2);
```

## See Also

- [Area Index](../)