---
title: "NavigationPathData"
description: "Auto-generated class reference for NavigationPathData."
---
# NavigationPathData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class NavigationPathData`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`NavigationPathData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `NavigationPathData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ReverseClone
`public NavigationPathData ReverseClone()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of NavigationPathData from the subsystem API first
NavigationPathData navigationPathData = ...;
var result = navigationPathData.ReverseClone();
```

### InitializeUsablePoints
`public void InitializeUsablePoints(List<UsableMachine> allUsableMachines)`

**Purpose:** Prepares the resources, state, or bindings required by `usable points`.

```csharp
// Obtain an instance of NavigationPathData from the subsystem API first
NavigationPathData navigationPathData = ...;
navigationPathData.InitializeUsablePoints(allUsableMachines);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
NavigationPathData entry = ...;
```

## See Also

- [Area Index](../)