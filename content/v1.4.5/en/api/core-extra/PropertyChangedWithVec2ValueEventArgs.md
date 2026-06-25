---
title: "PropertyChangedWithVec2ValueEventArgs"
description: "Auto-generated class reference for PropertyChangedWithVec2ValueEventArgs."
---
# PropertyChangedWithVec2ValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithVec2ValueEventArgs`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PropertyChangedWithVec2ValueEventArgs.cs`

## Overview

`PropertyChangedWithVec2ValueEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public Vec2 Value { get; }` |

## Key Methods

### PropertyChangedWithVec2ValueEventArgs
`public struct PropertyChangedWithVec2ValueEventArgs(string propertyName, Vec2 value)`

**Purpose:** Executes the PropertyChangedWithVec2ValueEventArgs logic.

```csharp
// Obtain an instance of PropertyChangedWithVec2ValueEventArgs from the subsystem API first
PropertyChangedWithVec2ValueEventArgs propertyChangedWithVec2ValueEventArgs = ...;
var result = propertyChangedWithVec2ValueEventArgs.PropertyChangedWithVec2ValueEventArgs("example", value);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PropertyChangedWithVec2ValueEventArgs propertyChangedWithVec2ValueEventArgs = ...;
propertyChangedWithVec2ValueEventArgs.PropertyChangedWithVec2ValueEventArgs("example", value);
```

## See Also

- [Area Index](../)