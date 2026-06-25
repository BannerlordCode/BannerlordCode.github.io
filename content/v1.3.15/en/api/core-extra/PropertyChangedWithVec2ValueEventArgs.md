---
title: "PropertyChangedWithVec2ValueEventArgs"
description: "Auto-generated class reference for PropertyChangedWithVec2ValueEventArgs."
---
# PropertyChangedWithVec2ValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithVec2ValueEventArgs`
**Base:** none
**File:** `TaleWorlds.Library/PropertyChangedWithVec2ValueEventArgs.cs`

## Overview

`PropertyChangedWithVec2ValueEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public Vec2 Value { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
PropertyChangedWithVec2ValueEventArgs instance = ...;
```

## See Also

- [Area Index](../)