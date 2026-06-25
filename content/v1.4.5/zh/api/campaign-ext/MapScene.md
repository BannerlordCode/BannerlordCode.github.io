---
title: "MapScene"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapScene`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapScene

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class MapScene : IMapScene`
**Base:** `IMapScene`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/Sandbox/MapScene.cs`

## 概述

`MapScene` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTerrainSize
`public Vec2 GetTerrainSize()`

**用途 / Purpose:** 获取 `terrain size` 的当前值。

### GetSceneLevel
`public uint GetSceneLevel(string name)`

**用途 / Purpose:** 获取 `scene level` 的当前值。

### SetSceneLevels
`public void SetSceneLevels(List<string> levels)`

**用途 / Purpose:** 设置 `scene levels` 的值或状态。

### GetAtmosphereStates
`public List<AtmosphereState> GetAtmosphereStates()`

**用途 / Purpose:** 获取 `atmosphere states` 的当前值。

### ValidateAgentVisualsReseted
`public void ValidateAgentVisualsReseted()`

**用途 / Purpose:** 处理 `validate agent visuals reseted` 相关逻辑。

### SetAtmosphereColorgrade
`public void SetAtmosphereColorgrade(TerrainType terrainType)`

**用途 / Purpose:** 设置 `atmosphere colorgrade` 的值或状态。

### AddNewEntityToMapScene
`public void AddNewEntityToMapScene(string entityId, in CampaignVec2 position)`

**用途 / Purpose:** 向当前集合/状态中添加 `new entity to map scene`。

### GetMapBorders
`public void GetMapBorders(out Vec2 minimumPosition, out Vec2 maximumPosition, out float maximumHeight)`

**用途 / Purpose:** 获取 `map borders` 的当前值。

### Load
`public void Load()`

**用途 / Purpose:** 加载 `load` 数据。

### SetSnowAndRainDataWithDimension
`public void SetSnowAndRainDataWithDimension(Texture snowRainTexture, int weatherNodeGridWidthAndHeight)`

**用途 / Purpose:** 设置 `snow and rain data with dimension` 的值或状态。

### AfterLoad
`public void AfterLoad()`

**用途 / Purpose:** 处理 `after load` 相关逻辑。

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理 `destroy` 相关逻辑。

### DisableUnwalkableNavigationMeshes
`public void DisableUnwalkableNavigationMeshes()`

**用途 / Purpose:** 处理 `disable unwalkable navigation meshes` 相关逻辑。

### GetFaceIndex
`public PathFaceRecord GetFaceIndex(in CampaignVec2 vec2)`

**用途 / Purpose:** 获取 `face index` 的当前值。

### GetTerrainTypeAtPosition
`public TerrainType GetTerrainTypeAtPosition(in CampaignVec2 position)`

**用途 / Purpose:** 获取 `terrain type at position` 的当前值。

### GetFaceTerrainType
`public TerrainType GetFaceTerrainType(PathFaceRecord navMeshFace)`

**用途 / Purpose:** 获取 `face terrain type` 的当前值。

### GetNearestFaceCenterForPosition
`public CampaignVec2 GetNearestFaceCenterForPosition(in CampaignVec2 position, int excludedFaceIds)`

**用途 / Purpose:** 获取 `nearest face center for position` 的当前值。

### GetNearestFaceCenterForPositionWithPath
`public CampaignVec2 GetNearestFaceCenterForPositionWithPath(PathFaceRecord pathFaceRecord, bool targetIsLand, float maxDist, int excludedFaceIds)`

**用途 / Purpose:** 获取 `nearest face center for position with path` 的当前值。

### GetEnvironmentTerrainTypes
`public List<TerrainType> GetEnvironmentTerrainTypes(in CampaignVec2 originPosition)`

**用途 / Purpose:** 获取 `environment terrain types` 的当前值。

### GetEnvironmentTerrainTypesCount
`public List<TerrainType> GetEnvironmentTerrainTypesCount(in CampaignVec2 originPosition, out TerrainType currentPositionTerrainType)`

**用途 / Purpose:** 获取 `environment terrain types count` 的当前值。

### GetMapPatchAtPosition
`public MapPatchData GetMapPatchAtPosition(in CampaignVec2 position)`

**用途 / Purpose:** 获取 `map patch at position` 的当前值。

### GetAccessiblePointNearPosition
`public CampaignVec2 GetAccessiblePointNearPosition(in CampaignVec2 pos, float radius)`

**用途 / Purpose:** 获取 `accessible point near position` 的当前值。

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(PathFaceRecord startingFace, PathFaceRecord endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)`

**用途 / Purpose:** 获取 `path between a i faces` 的当前值。

### GetPathDistanceBetweenAIFaces
`public bool GetPathDistanceBetweenAIFaces(PathFaceRecord startingAiFace, PathFaceRecord endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int excludedFaceIds, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)`

**用途 / Purpose:** 获取 `path distance between a i faces` 的当前值。

### IsLineToPointClear
`public bool IsLineToPointClear(PathFaceRecord startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**用途 / Purpose:** 处理 `is line to point clear` 相关逻辑。

### GetLastPointOnNavigationMeshFromPositionToDestination
`public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(PathFaceRecord startingFace, Vec2 position, Vec2 destination, int excludedFaceIds = null)`

**用途 / Purpose:** 获取 `last point on navigation mesh from position to destination` 的当前值。

### GetLastPositionOnNavMeshFaceForPointAndDirection
`public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord startingFace, Vec2 position, Vec2 destination)`

**用途 / Purpose:** 获取 `last position on nav mesh face for point and direction` 的当前值。

### GetNavigationMeshCenterPosition
`public Vec2 GetNavigationMeshCenterPosition(PathFaceRecord face)`

**用途 / Purpose:** 获取 `navigation mesh center position` 的当前值。

### GetNavigationMeshCenterPosition
`public Vec2 GetNavigationMeshCenterPosition(int faceIndex)`

**用途 / Purpose:** 获取 `navigation mesh center position` 的当前值。

### GetNumberOfNavigationMeshFaces
`public int GetNumberOfNavigationMeshFaces()`

**用途 / Purpose:** 获取 `number of navigation mesh faces` 的当前值。

### GetFaceAtIndex
`public PathFaceRecord GetFaceAtIndex(int faceIndex)`

**用途 / Purpose:** 获取 `face at index` 的当前值。

### GetHeightAtPoint
`public bool GetHeightAtPoint(in CampaignVec2 point, ref float height)`

**用途 / Purpose:** 获取 `height at point` 的当前值。

### GetWinterTimeFactor
`public float GetWinterTimeFactor()`

**用途 / Purpose:** 获取 `winter time factor` 的当前值。

### GetFaceVertexZ
`public float GetFaceVertexZ(PathFaceRecord navMeshFace)`

**用途 / Purpose:** 获取 `face vertex z` 的当前值。

### GetGroundNormal
`public Vec3 GetGroundNormal(Vec2 position)`

**用途 / Purpose:** 获取 `ground normal` 的当前值。

### GetSiegeCampFrames
`public void GetSiegeCampFrames(Settlement settlement, out List<MatrixFrame> siegeCamp1GlobalFrames, out List<MatrixFrame> siegeCamp2GlobalFrames)`

**用途 / Purpose:** 获取 `siege camp frames` 的当前值。

### GetTerrainHeightAndNormal
`public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)`

**用途 / Purpose:** 获取 `terrain height and normal` 的当前值。

### GetTerrainTypeName
`public string GetTerrainTypeName(TerrainType type)`

**用途 / Purpose:** 获取 `terrain type name` 的当前值。

### GetSceneXmlCrc
`public uint GetSceneXmlCrc()`

**用途 / Purpose:** 获取 `scene xml crc` 的当前值。

### GetSceneNavigationMeshCrc
`public uint GetSceneNavigationMeshCrc()`

**用途 / Purpose:** 获取 `scene navigation mesh crc` 的当前值。

### GetWindAtPosition
`public Vec2 GetWindAtPosition(Vec2 position)`

**用途 / Purpose:** 获取 `wind at position` 的当前值。

### GetSnowAmountAtPosition
`public float GetSnowAmountAtPosition(Vec2 position)`

**用途 / Purpose:** 获取 `snow amount at position` 的当前值。

### GetRainAmountAtPosition
`public float GetRainAmountAtPosition(Vec2 position)`

**用途 / Purpose:** 获取 `rain amount at position` 的当前值。

### SetupWaterWake
`public void SetupWaterWake(float wakeWorldSize, float wakeCameraOffset)`

**用途 / Purpose:** 设置 `up water wake` 的值或状态。

## 使用示例

```csharp
var value = new MapScene();
value.GetTerrainSize();
```

## 参见

- [完整类目录](../catalog)