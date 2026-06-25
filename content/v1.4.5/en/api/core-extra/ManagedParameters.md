---
title: "ManagedParameters"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedParameters`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedParameters

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**Base:** `IManagedParametersInitializer`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ManagedParameters.cs`

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

**Purpose:** Gets the current value of `parameter`.

### SetParameter
`public static void SetParameter(ManagedParametersEnum managedParameterType, float newValue)`

**Purpose:** Sets the value or state of `parameter`.

### Initialize
`public void Initialize(string relativeXmlPath)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetManagedParameter
`public float GetManagedParameter(ManagedParametersEnum managedParameterEnum)`

**Purpose:** Gets the current value of `managed parameter`.

## Usage Example

```csharp
ManagedParameters.GetParameter(managedParameterType);
```

## See Also

- [Complete Class Catalog](../catalog)