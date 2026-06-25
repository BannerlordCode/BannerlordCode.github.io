---
title: "PropertyChangedWithUIntValueEventArgs"
description: "Auto-generated class reference for PropertyChangedWithUIntValueEventArgs."
---
# PropertyChangedWithUIntValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithUIntValueEventArgs`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PropertyChangedWithUIntValueEventArgs.cs`

## Overview

`PropertyChangedWithUIntValueEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public uint Value { get; }` |

## Key Methods

### PropertyChangedWithUIntValueEventArgs
`public struct PropertyChangedWithUIntValueEventArgs(string propertyName, uint value)`

**Purpose:** Executes the PropertyChangedWithUIntValueEventArgs logic.

```csharp
// Obtain an instance of PropertyChangedWithUIntValueEventArgs from the subsystem API first
PropertyChangedWithUIntValueEventArgs propertyChangedWithUIntValueEventArgs = ...;
var result = propertyChangedWithUIntValueEventArgs.PropertyChangedWithUIntValueEventArgs("example", 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PropertyChangedWithUIntValueEventArgs propertyChangedWithUIntValueEventArgs = ...;
propertyChangedWithUIntValueEventArgs.PropertyChangedWithUIntValueEventArgs("example", 0);
```

## See Also

- [Area Index](../)