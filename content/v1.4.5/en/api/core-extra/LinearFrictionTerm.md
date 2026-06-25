---
title: "LinearFrictionTerm"
description: "Auto-generated class reference for LinearFrictionTerm."
---
# LinearFrictionTerm

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct LinearFrictionTerm`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/LinearFrictionTerm.cs`

## Overview

`LinearFrictionTerm` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### ElementWiseProduct
`public LinearFrictionTerm ElementWiseProduct(LinearFrictionTerm o)`

**Purpose:** Executes the ElementWiseProduct logic.

```csharp
// Obtain an instance of LinearFrictionTerm from the subsystem API first
LinearFrictionTerm linearFrictionTerm = ...;
var result = linearFrictionTerm.ElementWiseProduct(o);
```

### NearlyEquals
`public bool NearlyEquals(in LinearFrictionTerm o, float epsilon = 1E-05f)`

**Purpose:** Executes the NearlyEquals logic.

```csharp
// Obtain an instance of LinearFrictionTerm from the subsystem API first
LinearFrictionTerm linearFrictionTerm = ...;
var result = linearFrictionTerm.NearlyEquals(o, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LinearFrictionTerm linearFrictionTerm = ...;
linearFrictionTerm.ElementWiseProduct(o);
```

## See Also

- [Area Index](../)