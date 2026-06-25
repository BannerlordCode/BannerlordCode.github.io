---
title: "MemberDefinition"
description: "Auto-generated class reference for MemberDefinition."
---
# MemberDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public abstract class MemberDefinition`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/MemberDefinition.cs`

## Overview

`MemberDefinition` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public MemberTypeId Id { get; }` |
| `MemberInfo` | `public MemberInfo MemberInfo { get; }` |

## Key Methods

### GetMemberType
`public abstract Type GetMemberType()`

**Purpose:** Reads and returns the member type value held by the this instance.

```csharp
// Obtain an instance of MemberDefinition from the subsystem API first
MemberDefinition memberDefinition = ...;
var result = memberDefinition.GetMemberType();
```

### GetValue
`public abstract object GetValue(object target)`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of MemberDefinition from the subsystem API first
MemberDefinition memberDefinition = ...;
var result = memberDefinition.GetValue(target);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MemberDefinition instance = ...;
```

## See Also

- [Area Index](../)