---
title: "ManagedParameters"
description: "Auto-generated class reference for ManagedParameters."
---
# ManagedParameters

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**Base:** `IManagedParametersInitializer`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ManagedParameters.cs`

## Overview

`ManagedParameters` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static ManagedParameters Instance { get; }` |

## Key Methods

### GetParameter
`public static float GetParameter(ManagedParametersEnum managedParameterType)`

**Purpose:** Reads and returns the `parameter` value held by the current object.

```csharp
// Static call; no instance required
ManagedParameters.GetParameter(managedParameterType);
```

### SetParameter
`public static void SetParameter(ManagedParametersEnum managedParameterType, float newValue)`

**Purpose:** Assigns a new value to `parameter` and updates the object's internal state.

```csharp
// Static call; no instance required
ManagedParameters.SetParameter(managedParameterType, 0);
```

### Initialize
`public void Initialize(string relativeXmlPath)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of ManagedParameters from the subsystem API first
ManagedParameters managedParameters = ...;
managedParameters.Initialize("example");
```

### GetManagedParameter
`public float GetManagedParameter(ManagedParametersEnum managedParameterEnum)`

**Purpose:** Reads and returns the `managed parameter` value held by the current object.

```csharp
// Obtain an instance of ManagedParameters from the subsystem API first
ManagedParameters managedParameters = ...;
var result = managedParameters.GetManagedParameter(managedParameterEnum);
```

## Usage Example

```csharp
ManagedParameters.GetParameter(managedParameterType);
```

## See Also

- [Area Index](../)