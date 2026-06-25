---
title: "PropertyChangedWithValueEventArgs"
description: "Auto-generated class reference for PropertyChangedWithValueEventArgs."
---
# PropertyChangedWithValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithValueEventArgs`
**Base:** none
**File:** `TaleWorlds.Library/PropertyChangedWithValueEventArgs.cs`

## Overview

`PropertyChangedWithValueEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public object Value { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
PropertyChangedWithValueEventArgs instance = ...;
```

## See Also

- [Area Index](../)