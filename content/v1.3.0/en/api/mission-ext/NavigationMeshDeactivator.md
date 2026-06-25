---
title: "NavigationMeshDeactivator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NavigationMeshDeactivator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NavigationMeshDeactivator

**Namespace:** TaleWorlds.MountAndBlade.Source.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NavigationMeshDeactivator : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Source/Objects/NavigationMeshDeactivator.cs`

## Overview

`NavigationMeshDeactivator` lives in `TaleWorlds.MountAndBlade.Source.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Source.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DisableAssignedFaces
`public void DisableAssignedFaces(Scene scene)`

**Purpose:** Handles logic related to `disable assigned faces`.

### EnableAssignedFaces
`public void EnableAssignedFaces(Scene scene)`

**Purpose:** Handles logic related to `enable assigned faces`.

## Usage Example

```csharp
var value = new NavigationMeshDeactivator();
value.DisableAssignedFaces(scene);
```

## See Also

- [Complete Class Catalog](../catalog)