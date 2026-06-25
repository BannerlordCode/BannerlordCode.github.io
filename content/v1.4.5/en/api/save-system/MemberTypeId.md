---
title: "MemberTypeId"
description: "Auto-generated class reference for MemberTypeId."
---
# MemberTypeId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct MemberTypeId`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/MemberTypeId.cs`

## Overview

`MemberTypeId` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of MemberTypeId from the subsystem API first
MemberTypeId memberTypeId = ...;
var result = memberTypeId.ToString();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of MemberTypeId from the subsystem API first
MemberTypeId memberTypeId = ...;
var result = memberTypeId.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

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