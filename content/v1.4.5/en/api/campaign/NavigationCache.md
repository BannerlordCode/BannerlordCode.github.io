---
title: "NavigationCache"
description: "Auto-generated class reference for NavigationCache."
---
# NavigationCache

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NavigationCache<T>`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map.DistanceCache/NavigationCache.cs`

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

**Purpose:** Reads and returns the `neighbors` value held by the current object.

```csharp
// Obtain an instance of NavigationCache from the subsystem API first
NavigationCache navigationCache = ...;
var result = navigationCache.GetNeighbors(settlement);
```

### GetClosestSettlementToFaceIndex
`public T GetClosestSettlementToFaceIndex(int faceId, out bool isAtSea)`

**Purpose:** Reads and returns the `closest settlement to face index` value held by the current object.

```csharp
// Obtain an instance of NavigationCache from the subsystem API first
NavigationCache navigationCache = ...;
var result = navigationCache.GetClosestSettlementToFaceIndex(0, isAtSea);
```

### GenerateCacheData
`public void GenerateCacheData()`

**Purpose:** Generates an instance, data, or representation of `cache data`.

```csharp
// Obtain an instance of NavigationCache from the subsystem API first
NavigationCache navigationCache = ...;
navigationCache.GenerateCacheData();
```

### GetSceneXmlCrcValues
`public abstract void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)`

**Purpose:** Reads and returns the `scene xml crc values` value held by the current object.

```csharp
// Obtain an instance of NavigationCache from the subsystem API first
NavigationCache navigationCache = ...;
navigationCache.GetSceneXmlCrcValues(sceneXmlCrc, sceneNavigationMeshCrc);
```

### GetSettlementsDistanceCacheFileForCapability
`public bool GetSettlementsDistanceCacheFileForCapability(string moduleId, out string filePath)`

**Purpose:** Reads and returns the `settlements distance cache file for capability` value held by the current object.

```csharp
// Obtain an instance of NavigationCache from the subsystem API first
NavigationCache navigationCache = ...;
var result = navigationCache.GetSettlementsDistanceCacheFileForCapability("example", filePath);
```

### Serialize
`public void Serialize(string path)`

**Purpose:** Serializes the current object into a storable or transmittable format.

```csharp
// Obtain an instance of NavigationCache from the subsystem API first
NavigationCache navigationCache = ...;
navigationCache.Serialize("example");
```

### Deserialize
`public void Deserialize(string path)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of NavigationCache from the subsystem API first
NavigationCache navigationCache = ...;
navigationCache.Deserialize("example");
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
NavigationCache instance = ...;
```

## See Also

- [Area Index](../)