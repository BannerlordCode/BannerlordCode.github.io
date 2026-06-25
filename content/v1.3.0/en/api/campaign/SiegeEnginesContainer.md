---
title: "SiegeEnginesContainer"
description: "Auto-generated class reference for SiegeEnginesContainer."
---
# SiegeEnginesContainer

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEnginesContainer`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs`

## Overview

`SiegeEnginesContainer` lives in `TaleWorlds.CampaignSystem.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeployedSiegeEngines` | `public MBReadOnlyList<SiegeEvent.SiegeEngineConstructionProgress> DeployedSiegeEngines { get; }` |
| `ReservedSiegeEngines` | `public MBReadOnlyList<SiegeEvent.SiegeEngineConstructionProgress> ReservedSiegeEngines { get; }` |
| `DeployedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> DeployedSiegeEngineTypesCount { get; }` |
| `ReservedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> ReservedSiegeEngineTypesCount { get; }` |
| `RemovedSiegeEngines` | `public MBReadOnlyList<SiegeEvent.SiegeEnginesContainer.RemovedSiegeEngine> RemovedSiegeEngines { get; }` |

## Key Methods

### AllSiegeEngines
`public IEnumerable<SiegeEvent.SiegeEngineConstructionProgress> AllSiegeEngines()`

**Purpose:** **Purpose:** Executes the AllSiegeEngines logic.

```csharp
// Obtain an instance of SiegeEnginesContainer from the subsystem API first
SiegeEnginesContainer siegeEnginesContainer = ...;
var result = siegeEnginesContainer.AllSiegeEngines();
```

### AddPrebuiltEngineToReserve
`public void AddPrebuiltEngineToReserve(SiegeEvent.SiegeEngineConstructionProgress siegeEngine)`

**Purpose:** **Purpose:** Adds prebuilt engine to reserve to the current collection or state.

```csharp
// Obtain an instance of SiegeEnginesContainer from the subsystem API first
SiegeEnginesContainer siegeEnginesContainer = ...;
siegeEnginesContainer.AddPrebuiltEngineToReserve(siegeEngine);
```

### DeploySiegeEngineAtIndex
`public void DeploySiegeEngineAtIndex(SiegeEvent.SiegeEngineConstructionProgress siegeEngine, int index)`

**Purpose:** **Purpose:** Executes the DeploySiegeEngineAtIndex logic.

```csharp
// Obtain an instance of SiegeEnginesContainer from the subsystem API first
SiegeEnginesContainer siegeEnginesContainer = ...;
siegeEnginesContainer.DeploySiegeEngineAtIndex(siegeEngine, 0);
```

### RemoveDeployedSiegeEngine
`public void RemoveDeployedSiegeEngine(int index, bool isRanged, bool moveToReserve)`

**Purpose:** **Purpose:** Removes deployed siege engine from the current collection or state.

```csharp
// Obtain an instance of SiegeEnginesContainer from the subsystem API first
SiegeEnginesContainer siegeEnginesContainer = ...;
siegeEnginesContainer.RemoveDeployedSiegeEngine(0, false, false);
```

### RemovedSiegeEngineFromReservedSiegeEngines
`public bool RemovedSiegeEngineFromReservedSiegeEngines(SiegeEvent.SiegeEngineConstructionProgress siegeEngine)`

**Purpose:** **Purpose:** Removes d siege engine from reserved siege engines from the current collection or state.

```csharp
// Obtain an instance of SiegeEnginesContainer from the subsystem API first
SiegeEnginesContainer siegeEnginesContainer = ...;
var result = siegeEnginesContainer.RemovedSiegeEngineFromReservedSiegeEngines(siegeEngine);
```

### FindDeploymentIndexOfDeployedEngine
`public int FindDeploymentIndexOfDeployedEngine(SiegeEvent.SiegeEngineConstructionProgress deployedEngine)`

**Purpose:** **Purpose:** Looks up the matching deployment index of deployed engine in the current collection or scope.

```csharp
// Obtain an instance of SiegeEnginesContainer from the subsystem API first
SiegeEnginesContainer siegeEnginesContainer = ...;
var result = siegeEnginesContainer.FindDeploymentIndexOfDeployedEngine(deployedEngine);
```

### ClearRemovedEnginesIfNecessary
`public bool ClearRemovedEnginesIfNecessary()`

**Purpose:** **Purpose:** Removes all removed engines if necessary from the this instance.

```csharp
// Obtain an instance of SiegeEnginesContainer from the subsystem API first
SiegeEnginesContainer siegeEnginesContainer = ...;
var result = siegeEnginesContainer.ClearRemovedEnginesIfNecessary();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeEnginesContainer siegeEnginesContainer = ...;
siegeEnginesContainer.AllSiegeEngines();
```

## See Also

- [Area Index](../)