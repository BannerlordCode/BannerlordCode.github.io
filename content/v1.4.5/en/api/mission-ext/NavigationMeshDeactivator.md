---
title: "NavigationMeshDeactivator"
description: "Auto-generated class reference for NavigationMeshDeactivator."
---
# NavigationMeshDeactivator

**Namespace:** TaleWorlds.MountAndBlade.Source.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NavigationMeshDeactivator : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Objects/NavigationMeshDeactivator.cs`

## Overview

`NavigationMeshDeactivator` lives in `TaleWorlds.MountAndBlade.Source.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Source.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DisableAssignedFaces
`public void DisableAssignedFaces(Scene scene)`

**Purpose:** **Purpose:** Executes the DisableAssignedFaces logic.

```csharp
// Obtain an instance of NavigationMeshDeactivator from the subsystem API first
NavigationMeshDeactivator navigationMeshDeactivator = ...;
navigationMeshDeactivator.DisableAssignedFaces(scene);
```

### EnableAssignedFaces
`public void EnableAssignedFaces(Scene scene)`

**Purpose:** **Purpose:** Executes the EnableAssignedFaces logic.

```csharp
// Obtain an instance of NavigationMeshDeactivator from the subsystem API first
NavigationMeshDeactivator navigationMeshDeactivator = ...;
navigationMeshDeactivator.EnableAssignedFaces(scene);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NavigationMeshDeactivator navigationMeshDeactivator = ...;
navigationMeshDeactivator.DisableAssignedFaces(scene);
```

## See Also

- [Area Index](../)