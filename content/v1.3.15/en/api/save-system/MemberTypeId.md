---
title: "MemberTypeId"
description: "Auto-generated class reference for MemberTypeId."
---
# MemberTypeId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct MemberTypeId`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Definition/MemberTypeId.cs`

## Overview

`MemberTypeId` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SaveId` | `public short SaveId { get; }` |
| `Invalid` | `public static MemberTypeId Invalid { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MemberTypeId from the subsystem API first
MemberTypeId memberTypeId = ...;
var result = memberTypeId.ToString();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MemberTypeId from the subsystem API first
MemberTypeId memberTypeId = ...;
var result = memberTypeId.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MemberTypeId from the subsystem API first
MemberTypeId memberTypeId = ...;
var result = memberTypeId.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MemberTypeId memberTypeId = ...;
memberTypeId.ToString();
```

## See Also

- [Area Index](../)