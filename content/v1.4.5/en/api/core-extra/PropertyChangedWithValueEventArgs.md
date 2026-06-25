---
title: "PropertyChangedWithValueEventArgs"
description: "Auto-generated class reference for PropertyChangedWithValueEventArgs."
---
# PropertyChangedWithValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithValueEventArgs`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PropertyChangedWithValueEventArgs.cs`

## Overview

`PropertyChangedWithValueEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public object Value { get; }` |

## Key Methods

### PropertyChangedWithValueEventArgs
`public struct PropertyChangedWithValueEventArgs(string propertyName, object value)`

**Purpose:** Executes the PropertyChangedWithValueEventArgs logic.

```csharp
// Obtain an instance of PropertyChangedWithValueEventArgs from the subsystem API first
PropertyChangedWithValueEventArgs propertyChangedWithValueEventArgs = ...;
var result = propertyChangedWithValueEventArgs.PropertyChangedWithValueEventArgs("example", value);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PropertyChangedWithValueEventArgs propertyChangedWithValueEventArgs = ...;
propertyChangedWithValueEventArgs.PropertyChangedWithValueEventArgs("example", value);
```

## See Also

- [Area Index](../)