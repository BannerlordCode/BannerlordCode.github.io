---
title: "PropertyChangedWithFloatValueEventArgs"
description: "Auto-generated class reference for PropertyChangedWithFloatValueEventArgs."
---
# PropertyChangedWithFloatValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithFloatValueEventArgs`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PropertyChangedWithFloatValueEventArgs.cs`

## Overview

`PropertyChangedWithFloatValueEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public float Value { get; }` |

## Key Methods

### PropertyChangedWithFloatValueEventArgs
`public struct PropertyChangedWithFloatValueEventArgs(string propertyName, float value)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PropertyChangedWithFloatValueEventArgs from the subsystem API first
PropertyChangedWithFloatValueEventArgs propertyChangedWithFloatValueEventArgs = ...;
var result = propertyChangedWithFloatValueEventArgs.PropertyChangedWithFloatValueEventArgs("example", 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PropertyChangedWithFloatValueEventArgs propertyChangedWithFloatValueEventArgs = ...;
propertyChangedWithFloatValueEventArgs.PropertyChangedWithFloatValueEventArgs("example", 0);
```

## See Also

- [Area Index](../)