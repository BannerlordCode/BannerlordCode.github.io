<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapScene`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapScene

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class MapScene : IMapScene`
**Base:** `IMapScene`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/Sandbox/MapScene.cs`

## Overview

`MapScene` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTerrainSize
`public Vec2 GetTerrainSize()`

**Purpose:** Gets the current value of `terrain size`.

### GetSceneLevel
`public uint GetSceneLevel(string name)`

**Purpose:** Gets the current value of `scene level`.

### SetSceneLevels
`public void SetSceneLevels(List<string> levels)`

**Purpose:** Sets the value or state of `scene levels`.

### GetAtmosphereStates
`public List<AtmosphereState> GetAtmosphereStates()`

**Purpose:** Gets the current value of `atmosphere states`.

### ValidateAgentVisualsReseted
`public void ValidateAgentVisualsReseted()`

**Purpose:** Handles logic related to `validate agent visuals reseted`.

### SetAtmosphereColorgrade
`public void SetAtmosphereColorgrade(TerrainType terrainType)`

**Purpose:** Sets the value or state of `atmosphere colorgrade`.

### AddNewEntityToMapScene
`public void AddNewEntityToMapScene(string entityId, in CampaignVec2 position)`

**Purpose:** Adds `new entity to map scene` to the current collection or state.

### GetMapBorders
`public void GetMapBorders(out Vec2 minimumPosition, out Vec2 maximumPosition, out float maximumHeight)`

**Purpose:** Gets the current value of `map borders`.

### Load
`public void Load()`

**Purpose:** Loads `load` data.

### SetSnowAndRainDataWithDimension
`public void SetSnowAndRainDataWithDimension(Texture snowRainTexture, int weatherNodeGridWidthAndHeight)`

**Purpose:** Sets the value or state of `snow and rain data with dimension`.

### AfterLoad
`public void AfterLoad()`

**Purpose:** Handles logic related to `after load`.

### Destroy
`public void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### DisableUnwalkableNavigationMeshes
`public void DisableUnwalkableNavigationMeshes()`

**Purpose:** Handles logic related to `disable unwalkable navigation meshes`.

### GetFaceIndex
`public PathFaceRecord GetFaceIndex(in CampaignVec2 vec2)`

**Purpose:** Gets the current value of `face index`.

### GetTerrainTypeAtPosition
`public TerrainType GetTerrainTypeAtPosition(in CampaignVec2 position)`

**Purpose:** Gets the current value of `terrain type at position`.

### GetFaceTerrainType
`public TerrainType GetFaceTerrainType(PathFaceRecord navMeshFace)`

**Purpose:** Gets the current value of `face terrain type`.

### GetNearestFaceCenterForPosition
`public CampaignVec2 GetNearestFaceCenterForPosition(in CampaignVec2 position, int excludedFaceIds)`

**Purpose:** Gets the current value of `nearest face center for position`.

### GetNearestFaceCenterForPositionWithPath
`public CampaignVec2 GetNearestFaceCenterForPositionWithPath(PathFaceRecord pathFaceRecord, bool targetIsLand, float maxDist, int excludedFaceIds)`

**Purpose:** Gets the current value of `nearest face center for position with path`.

### GetEnvironmentTerrainTypes
`public List<TerrainType> GetEnvironmentTerrainTypes(in CampaignVec2 originPosition)`

**Purpose:** Gets the current value of `environment terrain types`.

### GetEnvironmentTerrainTypesCount
`public List<TerrainType> GetEnvironmentTerrainTypesCount(in CampaignVec2 originPosition, out TerrainType currentPositionTerrainType)`

**Purpose:** Gets the current value of `environment terrain types count`.

### GetMapPatchAtPosition
`public MapPatchData GetMapPatchAtPosition(in CampaignVec2 position)`

**Purpose:** Gets the current value of `map patch at position`.

### GetAccessiblePointNearPosition
`public CampaignVec2 GetAccessiblePointNearPosition(in CampaignVec2 pos, float radius)`

**Purpose:** Gets the current value of `accessible point near position`.

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(PathFaceRecord startingFace, PathFaceRecord endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)`

**Purpose:** Gets the current value of `path between a i faces`.

### GetPathDistanceBetweenAIFaces
`public bool GetPathDistanceBetweenAIFaces(PathFaceRecord startingAiFace, PathFaceRecord endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int excludedFaceIds, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)`

**Purpose:** Gets the current value of `path distance between a i faces`.

### IsLineToPointClear
`public bool IsLineToPointClear(PathFaceRecord startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**Purpose:** Handles logic related to `is line to point clear`.

### GetLastPointOnNavigationMeshFromPositionToDestination
`public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(PathFaceRecord startingFace, Vec2 position, Vec2 destination, int excludedFaceIds = null)`

**Purpose:** Gets the current value of `last point on navigation mesh from position to destination`.

### GetLastPositionOnNavMeshFaceForPointAndDirection
`public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord startingFace, Vec2 position, Vec2 destination)`

**Purpose:** Gets the current value of `last position on nav mesh face for point and direction`.

### GetNavigationMeshCenterPosition
`public Vec2 GetNavigationMeshCenterPosition(PathFaceRecord face)`

**Purpose:** Gets the current value of `navigation mesh center position`.

### GetNavigationMeshCenterPosition
`public Vec2 GetNavigationMeshCenterPosition(int faceIndex)`

**Purpose:** Gets the current value of `navigation mesh center position`.

### GetNumberOfNavigationMeshFaces
`public int GetNumberOfNavigationMeshFaces()`

**Purpose:** Gets the current value of `number of navigation mesh faces`.

### GetFaceAtIndex
`public PathFaceRecord GetFaceAtIndex(int faceIndex)`

**Purpose:** Gets the current value of `face at index`.

### GetHeightAtPoint
`public bool GetHeightAtPoint(in CampaignVec2 point, ref float height)`

**Purpose:** Gets the current value of `height at point`.

### GetWinterTimeFactor
`public float GetWinterTimeFactor()`

**Purpose:** Gets the current value of `winter time factor`.

### GetFaceVertexZ
`public float GetFaceVertexZ(PathFaceRecord navMeshFace)`

**Purpose:** Gets the current value of `face vertex z`.

### GetGroundNormal
`public Vec3 GetGroundNormal(Vec2 position)`

**Purpose:** Gets the current value of `ground normal`.

### GetSiegeCampFrames
`public void GetSiegeCampFrames(Settlement settlement, out List<MatrixFrame> siegeCamp1GlobalFrames, out List<MatrixFrame> siegeCamp2GlobalFrames)`

**Purpose:** Gets the current value of `siege camp frames`.

### GetTerrainHeightAndNormal
`public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)`

**Purpose:** Gets the current value of `terrain height and normal`.

### GetTerrainTypeName
`public string GetTerrainTypeName(TerrainType type)`

**Purpose:** Gets the current value of `terrain type name`.

### GetSceneXmlCrc
`public uint GetSceneXmlCrc()`

**Purpose:** Gets the current value of `scene xml crc`.

### GetSceneNavigationMeshCrc
`public uint GetSceneNavigationMeshCrc()`

**Purpose:** Gets the current value of `scene navigation mesh crc`.

### GetWindAtPosition
`public Vec2 GetWindAtPosition(Vec2 position)`

**Purpose:** Gets the current value of `wind at position`.

### GetSnowAmountAtPosition
`public float GetSnowAmountAtPosition(Vec2 position)`

**Purpose:** Gets the current value of `snow amount at position`.

### GetRainAmountAtPosition
`public float GetRainAmountAtPosition(Vec2 position)`

**Purpose:** Gets the current value of `rain amount at position`.

### SetupWaterWake
`public void SetupWaterWake(float wakeWorldSize, float wakeCameraOffset)`

**Purpose:** Sets the value or state of `up water wake`.

## Usage Example

```csharp
var value = new MapScene();
value.GetTerrainSize();
```

## See Also

- [Complete Class Catalog](../catalog)