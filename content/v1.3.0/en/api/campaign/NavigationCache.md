---
title: "NavigationCache"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NavigationCache`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NavigationCache

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NavigationCache<T>`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs`

## Overview

`NavigationCache` lives in `TaleWorlds.CampaignSystem.Map.DistanceCache` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Map.DistanceCache` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaximumDistanceBetweenTwoConnectedSettlements` | `public float MaximumDistanceBetweenTwoConnectedSettlements { get; }` |

## Key Methods

### GetNeighbors
`public MBReadOnlyList<T> GetNeighbors(T settlement)`

**Purpose:** Gets the current value of `neighbors`.

### GetClosestSettlementToFaceIndex
`public T GetClosestSettlementToFaceIndex(int faceId, out bool isAtSea)`

**Purpose:** Gets the current value of `closest settlement to face index`.

### GenerateCacheData
`public void GenerateCacheData()`

**Purpose:** Handles logic related to `generate cache data`.

### GetSceneXmlCrcValues
`public abstract void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)`

**Purpose:** Gets the current value of `scene xml crc values`.

### GetSettlementsDistanceCacheFileForCapability
`public bool GetSettlementsDistanceCacheFileForCapability(string moduleId, out string filePath)`

**Purpose:** Gets the current value of `settlements distance cache file for capability`.

### Serialize
`public void Serialize(string path)`

**Purpose:** Handles logic related to `serialize`.

### Deserialize
`public void Deserialize(string path)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var implementation = new CustomNavigationCache();
```

## See Also

- [Complete Class Catalog](../catalog)