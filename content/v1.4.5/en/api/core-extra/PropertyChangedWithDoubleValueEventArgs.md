---
title: "PropertyChangedWithDoubleValueEventArgs"
description: "Auto-generated class reference for PropertyChangedWithDoubleValueEventArgs."
---
# PropertyChangedWithDoubleValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithDoubleValueEventArgs`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PropertyChangedWithDoubleValueEventArgs.cs`

## Overview

`PropertyChangedWithDoubleValueEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public double Value { get; }` |

## Key Methods

### PropertyChangedWithDoubleValueEventArgs
`public struct PropertyChangedWithDoubleValueEventArgs(string propertyName, double value)`

**Purpose:** Executes the PropertyChangedWithDoubleValueEventArgs logic.

```csharp
// Obtain an instance of PropertyChangedWithDoubleValueEventArgs from the subsystem API first
PropertyChangedWithDoubleValueEventArgs propertyChangedWithDoubleValueEventArgs = ...;
var result = propertyChangedWithDoubleValueEventArgs.PropertyChangedWithDoubleValueEventArgs("example", 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PropertyChangedWithDoubleValueEventArgs propertyChangedWithDoubleValueEventArgs = ...;
propertyChangedWithDoubleValueEventArgs.PropertyChangedWithDoubleValueEventArgs("example", 0);
```

## See Also

- [Area Index](../)