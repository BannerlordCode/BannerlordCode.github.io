---
title: "LinearFrictionTerm"
description: "Auto-generated class reference for LinearFrictionTerm."
---
# LinearFrictionTerm

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct LinearFrictionTerm`
**Base:** none
**File:** `TaleWorlds.Core/LinearFrictionTerm.cs`

## Overview

`LinearFrictionTerm` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Invalid` | `public static LinearFrictionTerm Invalid { get; }` |
| `One` | `public static LinearFrictionTerm One { get; }` |

## Key Methods

### ElementWiseProduct
`public LinearFrictionTerm ElementWiseProduct(LinearFrictionTerm o)`

**Purpose:** **Purpose:** Executes the ElementWiseProduct logic.

```csharp
// Obtain an instance of LinearFrictionTerm from the subsystem API first
LinearFrictionTerm linearFrictionTerm = ...;
var result = linearFrictionTerm.ElementWiseProduct(o);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LinearFrictionTerm linearFrictionTerm = ...;
linearFrictionTerm.ElementWiseProduct(o);
```

## See Also

- [Area Index](../)