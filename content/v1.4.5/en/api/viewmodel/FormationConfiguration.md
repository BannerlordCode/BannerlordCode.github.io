---
title: "FormationConfiguration"
description: "Auto-generated class reference for FormationConfiguration."
---
# FormationConfiguration

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormationConfiguration`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/MissionOrderVM.cs`

## Overview

`FormationConfiguration` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FormationConfiguration
`public struct FormationConfiguration(int formationIndex, List<FormationFilterType> filters)`

**Purpose:** **Purpose:** Formats ion configuration into a string suitable for display or storage.

```csharp
// Obtain an instance of FormationConfiguration from the subsystem API first
FormationConfiguration formationConfiguration = ...;
var result = formationConfiguration.FormationConfiguration(0, filters);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FormationConfiguration formationConfiguration = ...;
formationConfiguration.FormationConfiguration(0, filters);
```

## See Also

- [Area Index](../)