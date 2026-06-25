---
title: "PropertyChangedWithBoolValueEventArgs"
description: "Auto-generated class reference for PropertyChangedWithBoolValueEventArgs."
---
# PropertyChangedWithBoolValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithBoolValueEventArgs`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PropertyChangedWithBoolValueEventArgs.cs`

## Overview

`PropertyChangedWithBoolValueEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public bool Value { get; }` |

## Key Methods

### PropertyChangedWithBoolValueEventArgs
`public struct PropertyChangedWithBoolValueEventArgs(string propertyName, bool value)`

**Purpose:** **Purpose:** Executes the PropertyChangedWithBoolValueEventArgs logic.

```csharp
// Obtain an instance of PropertyChangedWithBoolValueEventArgs from the subsystem API first
PropertyChangedWithBoolValueEventArgs propertyChangedWithBoolValueEventArgs = ...;
var result = propertyChangedWithBoolValueEventArgs.PropertyChangedWithBoolValueEventArgs("example", false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PropertyChangedWithBoolValueEventArgs propertyChangedWithBoolValueEventArgs = ...;
propertyChangedWithBoolValueEventArgs.PropertyChangedWithBoolValueEventArgs("example", false);
```

## See Also

- [Area Index](../)