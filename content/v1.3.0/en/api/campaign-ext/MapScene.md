---
title: "MapScene"
description: "Auto-generated class reference for MapScene."
---
# MapScene

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class MapScene : IMapScene`
**Base:** `IMapScene`
**File:** `SandBox/MapScene.cs`

## Overview

`MapScene` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Scene` | `public Scene Scene { get; }` |

## Key Methods

### GetTerrainSize
`public Vec2 GetTerrainSize()`

**Purpose:** Reads and returns the `terrain size` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetTerrainSize();
```

### GetSceneLevel
`public uint GetSceneLevel(string name)`

**Purpose:** Reads and returns the `scene level` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetSceneLevel("example");
```

### SetSceneLevels
`public void SetSceneLevels(List<string> levels)`

**Purpose:** Assigns a new value to `scene levels` and updates the object's internal state.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.SetSceneLevels(levels);
```

### GetAtmosphereStates
`public List<AtmosphereState> GetAtmosphereStates()`

**Purpose:** Reads and returns the `atmosphere states` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetAtmosphereStates();
```

### ValidateAgentVisualsReseted
`public void ValidateAgentVisualsReseted()`

**Purpose:** Checks whether `agent visuals reseted` satisfies the required constraints, usually returning a boolean.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.ValidateAgentVisualsReseted();
```

### SetAtmosphereColorgrade
`public void SetAtmosphereColorgrade(TerrainType terrainType)`

**Purpose:** Assigns a new value to `atmosphere colorgrade` and updates the object's internal state.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.SetAtmosphereColorgrade(terrainType);
```

### AddNewEntityToMapScene
`public void AddNewEntityToMapScene(string entityId, in CampaignVec2 position)`

**Purpose:** Adds `new entity to map scene` to the current collection or state.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.AddNewEntityToMapScene("example", position);
```

### GetMapBorders
`public void GetMapBorders(out Vec2 minimumPosition, out Vec2 maximumPosition, out float maximumHeight)`

**Purpose:** Reads and returns the `map borders` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.GetMapBorders(minimumPosition, maximumPosition, maximumHeight);
```

### Load
`public void Load()`

**Purpose:** Reads the current object's data from persistent storage or a stream.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.Load();
```

### SetSnowAndRainDataWithDimension
`public void SetSnowAndRainDataWithDimension(Texture snowRainTexture, int weatherNodeGridWidthAndHeight)`

**Purpose:** Assigns a new value to `snow and rain data with dimension` and updates the object's internal state.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.SetSnowAndRainDataWithDimension(snowRainTexture, 0);
```

### AfterLoad
`public void AfterLoad()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.AfterLoad();
```

### Destroy
`public void Destroy()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.Destroy();
```

### DisableUnwalkableNavigationMeshes
`public void DisableUnwalkableNavigationMeshes()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.DisableUnwalkableNavigationMeshes();
```

### GetFaceIndex
`public PathFaceRecord GetFaceIndex(in CampaignVec2 vec2)`

**Purpose:** Reads and returns the `face index` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetFaceIndex(vec2);
```

### AreFacesOnSameIsland
`public bool AreFacesOnSameIsland(PathFaceRecord startingFace, PathFaceRecord endFace, MobileParty.NavigationType navigationType)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.AreFacesOnSameIsland(startingFace, endFace, navigationType);
```

### GetTerrainTypeAtPosition
`public TerrainType GetTerrainTypeAtPosition(in CampaignVec2 position)`

**Purpose:** Reads and returns the `terrain type at position` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetTerrainTypeAtPosition(position);
```

### GetFaceTerrainType
`public TerrainType GetFaceTerrainType(PathFaceRecord navMeshFace)`

**Purpose:** Reads and returns the `face terrain type` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetFaceTerrainType(navMeshFace);
```

### GetNearestFaceCenterForPosition
`public CampaignVec2 GetNearestFaceCenterForPosition(in CampaignVec2 position, int excludedFaceIds)`

**Purpose:** Reads and returns the `nearest face center for position` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetNearestFaceCenterForPosition(position, 0);
```

### GetNearestFaceCenterForPositionWithPath
`public CampaignVec2 GetNearestFaceCenterForPositionWithPath(PathFaceRecord pathFaceRecord, bool targetIsLand, float maxDist, int excludedFaceIds)`

**Purpose:** Reads and returns the `nearest face center for position with path` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetNearestFaceCenterForPositionWithPath(pathFaceRecord, false, 0, 0);
```

### GetEnvironmentTerrainTypes
`public List<TerrainType> GetEnvironmentTerrainTypes(in CampaignVec2 originPosition)`

**Purpose:** Reads and returns the `environment terrain types` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetEnvironmentTerrainTypes(originPosition);
```

### GetEnvironmentTerrainTypesCount
`public List<TerrainType> GetEnvironmentTerrainTypesCount(in CampaignVec2 originPosition, out TerrainType currentPositionTerrainType)`

**Purpose:** Reads and returns the `environment terrain types count` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetEnvironmentTerrainTypesCount(originPosition, currentPositionTerrainType);
```

### GetMapPatchAtPosition
`public MapPatchData GetMapPatchAtPosition(in CampaignVec2 position)`

**Purpose:** Reads and returns the `map patch at position` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetMapPatchAtPosition(position);
```

### GetAccessiblePointNearPosition
`public CampaignVec2 GetAccessiblePointNearPosition(in CampaignVec2 pos, float radius)`

**Purpose:** Reads and returns the `accessible point near position` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetAccessiblePointNearPosition(pos, 0);
```

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(PathFaceRecord startingFace, PathFaceRecord endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)`

**Purpose:** Reads and returns the `path between a i faces` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetPathBetweenAIFaces(startingFace, endingFace, startingPosition, endingPosition, 0, path, 0, 0, 0, 0);
```

### GetPathDistanceBetweenAIFaces
`public bool GetPathDistanceBetweenAIFaces(PathFaceRecord startingAiFace, PathFaceRecord endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int excludedFaceIds, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)`

**Purpose:** Reads and returns the `path distance between a i faces` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetPathDistanceBetweenAIFaces(startingAiFace, endingAiFace, startingPosition, endingPosition, 0, 0, distance, 0, 0, 0);
```

### IsLineToPointClear
`public bool IsLineToPointClear(PathFaceRecord startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**Purpose:** Determines whether the current object is in the `line to point clear` state or condition.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.IsLineToPointClear(startingFace, position, destination, 0);
```

### GetLastPointOnNavigationMeshFromPositionToDestination
`public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(PathFaceRecord startingFace, Vec2 position, Vec2 destination, int excludedFaceIds = null)`

**Purpose:** Reads and returns the `last point on navigation mesh from position to destination` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetLastPointOnNavigationMeshFromPositionToDestination(startingFace, position, destination, 0);
```

### GetLastPositionOnNavMeshFaceForPointAndDirection
`public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord startingFace, Vec2 position, Vec2 destination)`

**Purpose:** Reads and returns the `last position on nav mesh face for point and direction` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetLastPositionOnNavMeshFaceForPointAndDirection(startingFace, position, destination);
```

### GetNavigationMeshCenterPosition
`public Vec2 GetNavigationMeshCenterPosition(PathFaceRecord face)`

**Purpose:** Reads and returns the `navigation mesh center position` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetNavigationMeshCenterPosition(face);
```

### GetNavigationMeshCenterPosition
`public Vec2 GetNavigationMeshCenterPosition(int faceIndex)`

**Purpose:** Reads and returns the `navigation mesh center position` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetNavigationMeshCenterPosition(0);
```

### GetNumberOfNavigationMeshFaces
`public int GetNumberOfNavigationMeshFaces()`

**Purpose:** Reads and returns the `number of navigation mesh faces` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetNumberOfNavigationMeshFaces();
```

### GetFaceAtIndex
`public PathFaceRecord GetFaceAtIndex(int faceIndex)`

**Purpose:** Reads and returns the `face at index` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetFaceAtIndex(0);
```

### GetHeightAtPoint
`public bool GetHeightAtPoint(in CampaignVec2 point, ref float height)`

**Purpose:** Reads and returns the `height at point` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetHeightAtPoint(point, height);
```

### GetWinterTimeFactor
`public float GetWinterTimeFactor()`

**Purpose:** Reads and returns the `winter time factor` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetWinterTimeFactor();
```

### GetFaceVertexZ
`public float GetFaceVertexZ(PathFaceRecord navMeshFace)`

**Purpose:** Reads and returns the `face vertex z` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetFaceVertexZ(navMeshFace);
```

### GetGroundNormal
`public Vec3 GetGroundNormal(Vec2 position)`

**Purpose:** Reads and returns the `ground normal` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetGroundNormal(position);
```

### GetSiegeCampFrames
`public void GetSiegeCampFrames(Settlement settlement, out List<MatrixFrame> siegeCamp1GlobalFrames, out List<MatrixFrame> siegeCamp2GlobalFrames)`

**Purpose:** Reads and returns the `siege camp frames` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.GetSiegeCampFrames(settlement, siegeCamp1GlobalFrames, siegeCamp2GlobalFrames);
```

### GetTerrainHeightAndNormal
`public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)`

**Purpose:** Reads and returns the `terrain height and normal` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
mapScene.GetTerrainHeightAndNormal(position, height, normal);
```

### GetTerrainTypeName
`public string GetTerrainTypeName(TerrainType type)`

**Purpose:** Reads and returns the `terrain type name` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetTerrainTypeName(type);
```

### GetSceneXmlCrc
`public uint GetSceneXmlCrc()`

**Purpose:** Reads and returns the `scene xml crc` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetSceneXmlCrc();
```

### GetSceneNavigationMeshCrc
`public uint GetSceneNavigationMeshCrc()`

**Purpose:** Reads and returns the `scene navigation mesh crc` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetSceneNavigationMeshCrc();
```

### GetWindAtPosition
`public Vec2 GetWindAtPosition(Vec2 position)`

**Purpose:** Reads and returns the `wind at position` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetWindAtPosition(position);
```

### GetSnowAmountAtPosition
`public float GetSnowAmountAtPosition(Vec2 position)`

**Purpose:** Reads and returns the `snow amount at position` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetSnowAmountAtPosition(position);
```

### GetRainAmountAtPosition
`public float GetRainAmountAtPosition(Vec2 position)`

**Purpose:** Reads and returns the `rain amount at position` value held by the current object.

```csharp
// Obtain an instance of MapScene from the subsystem API first
MapScene mapScene = ...;
var result = mapScene.GetRainAmountAtPosition(position);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapScene mapScene = ...;
mapScene.GetTerrainSize();
```

## See Also

- [Area Index](../)