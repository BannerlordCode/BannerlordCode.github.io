<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEnginesContainer`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `all siege engines`.

### AddPrebuiltEngineToReserve
`public void AddPrebuiltEngineToReserve(SiegeEvent.SiegeEngineConstructionProgress siegeEngine)`

**Purpose:** Adds `prebuilt engine to reserve` to the current collection or state.

### DeploySiegeEngineAtIndex
`public void DeploySiegeEngineAtIndex(SiegeEvent.SiegeEngineConstructionProgress siegeEngine, int index)`

**Purpose:** Handles logic related to `deploy siege engine at index`.

### RemoveDeployedSiegeEngine
`public void RemoveDeployedSiegeEngine(int index, bool isRanged, bool moveToReserve)`

**Purpose:** Removes `deployed siege engine` from the current collection or state.

### RemovedSiegeEngineFromReservedSiegeEngines
`public bool RemovedSiegeEngineFromReservedSiegeEngines(SiegeEvent.SiegeEngineConstructionProgress siegeEngine)`

**Purpose:** Removes `d siege engine from reserved siege engines` from the current collection or state.

### FindDeploymentIndexOfDeployedEngine
`public int FindDeploymentIndexOfDeployedEngine(SiegeEvent.SiegeEngineConstructionProgress deployedEngine)`

**Purpose:** Handles logic related to `find deployment index of deployed engine`.

### ClearRemovedEnginesIfNecessary
`public bool ClearRemovedEnginesIfNecessary()`

**Purpose:** Handles logic related to `clear removed engines if necessary`.

## Usage Example

```csharp
var value = new SiegeEnginesContainer();
value.AllSiegeEngines();
```

## See Also

- [Complete Class Catalog](../catalog)