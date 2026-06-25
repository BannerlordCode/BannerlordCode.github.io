---
title: "ClassConfiguration"
description: "Auto-generated class reference for ClassConfiguration."
---
# ClassConfiguration

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ClassConfiguration`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/MissionOrderVM.cs`

## Overview

`ClassConfiguration` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ClassConfiguration
`public struct ClassConfiguration(int formationIndex, DeploymentFormationClass formationClass)`

**Purpose:** Executes the ClassConfiguration logic.

```csharp
// Obtain an instance of ClassConfiguration from the subsystem API first
ClassConfiguration classConfiguration = ...;
var result = classConfiguration.ClassConfiguration(0, formationClass);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClassConfiguration classConfiguration = ...;
classConfiguration.ClassConfiguration(0, formationClass);
```

## See Also

- [Area Index](../)