---
title: "ManagedParameters"
description: "Auto-generated class reference for ManagedParameters."
---
# ManagedParameters

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**Base:** `IManagedParametersInitializer`
**File:** `TaleWorlds.CampaignSystem/ManagedParameters.cs`

## Overview

`ManagedParameters` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static ManagedParameters Instance { get; }` |

## Key Methods

### Initialize
`public void Initialize(string relativeXmlPath)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of ManagedParameters from the subsystem API first
ManagedParameters managedParameters = ...;
managedParameters.Initialize("example");
```

### GetManagedParameter
`public bool GetManagedParameter(ManagedParametersEnum _managedParametersEnum)`

**Purpose:** Reads and returns the managed parameter value held by the this instance.

```csharp
// Obtain an instance of ManagedParameters from the subsystem API first
ManagedParameters managedParameters = ...;
var result = managedParameters.GetManagedParameter(_managedParametersEnum);
```

### SetManagedParameter
`public bool SetManagedParameter(ManagedParametersEnum _managedParametersEnum, bool value)`

**Purpose:** Assigns a new value to managed parameter and updates the object's internal state.

```csharp
// Obtain an instance of ManagedParameters from the subsystem API first
ManagedParameters managedParameters = ...;
var result = managedParameters.SetManagedParameter(_managedParametersEnum, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ManagedParameters managedParameters = ...;
managedParameters.Initialize("example");
```

## See Also

- [Area Index](../)