---
title: "MapScene"
description: "MapScene 的自动生成类参考。"
---
# MapScene

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class MapScene : IMapScene`
**Base:** `IMapScene`
**File:** `SandBox/MapScene.cs`

## 概述

`MapScene` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Scene` | `public Scene Scene { get; }` |

## 主要方法

### GetTerrainSize
`public Vec2 GetTerrainSize()`

**用途 / Purpose:** 读取并返回当前对象中 terrain size 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetTerrainSize();
```

### GetSceneLevel
`public uint GetSceneLevel(string name)`

**用途 / Purpose:** 读取并返回当前对象中 scene level 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetSceneLevel("example");
```

### SetSceneLevels
`public void SetSceneLevels(List<string> levels)`

**用途 / Purpose:** 为 scene levels 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.SetSceneLevels(levels);
```

### GetAtmosphereStates
`public List<AtmosphereState> GetAtmosphereStates()`

**用途 / Purpose:** 读取并返回当前对象中 atmosphere states 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetAtmosphereStates();
```

### ValidateAgentVisualsReseted
`public void ValidateAgentVisualsReseted()`

**用途 / Purpose:** 检查agent visuals reseted是否满足约束条件，通常返回布尔值。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.ValidateAgentVisualsReseted();
```

### SetAtmosphereColorgrade
`public void SetAtmosphereColorgrade(TerrainType terrainType)`

**用途 / Purpose:** 为 atmosphere colorgrade 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.SetAtmosphereColorgrade(terrainType);
```

### AddNewEntityToMapScene
`public void AddNewEntityToMapScene(string entityId, in CampaignVec2 position)`

**用途 / Purpose:** 将 new entity to map scene 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.AddNewEntityToMapScene("example", position);
```

### GetMapBorders
`public void GetMapBorders(out Vec2 minimumPosition, out Vec2 maximumPosition, out float maximumHeight)`

**用途 / Purpose:** 读取并返回当前对象中 map borders 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.GetMapBorders(minimumPosition, maximumPosition, maximumHeight);
```

### Load
`public void Load()`

**用途 / Purpose:** 从持久化存储或流中读取当前对象的数据。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.Load();
```

### SetSnowAndRainDataWithDimension
`public void SetSnowAndRainDataWithDimension(Texture snowRainTexture, int weatherNodeGridWidthAndHeight)`

**用途 / Purpose:** 为 snow and rain data with dimension 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.SetSnowAndRainDataWithDimension(snowRainTexture, 0);
```

### AfterLoad
`public void AfterLoad()`

**用途 / Purpose:** 调用 AfterLoad 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.AfterLoad();
```

### Destroy
`public void Destroy()`

**用途 / Purpose:** 调用 Destroy 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.Destroy();
```

### DisableUnwalkableNavigationMeshes
`public void DisableUnwalkableNavigationMeshes()`

**用途 / Purpose:** 调用 DisableUnwalkableNavigationMeshes 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.DisableUnwalkableNavigationMeshes();
```

### GetFaceIndex
`public PathFaceRecord GetFaceIndex(in CampaignVec2 vec2)`

**用途 / Purpose:** 读取并返回当前对象中 face index 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetFaceIndex(vec2);
```

### AreFacesOnSameIsland
`public bool AreFacesOnSameIsland(PathFaceRecord startingFace, PathFaceRecord endFace, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 调用 AreFacesOnSameIsland 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.AreFacesOnSameIsland(startingFace, endFace, navigationType);
```

### GetTerrainTypeAtPosition
`public TerrainType GetTerrainTypeAtPosition(in CampaignVec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 terrain type at position 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetTerrainTypeAtPosition(position);
```

### GetFaceTerrainType
`public TerrainType GetFaceTerrainType(PathFaceRecord navMeshFace)`

**用途 / Purpose:** 读取并返回当前对象中 face terrain type 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetFaceTerrainType(navMeshFace);
```

### GetNearestFaceCenterForPosition
`public CampaignVec2 GetNearestFaceCenterForPosition(in CampaignVec2 position, int excludedFaceIds)`

**用途 / Purpose:** 读取并返回当前对象中 nearest face center for position 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetNearestFaceCenterForPosition(position, 0);
```

### GetNearestFaceCenterForPositionWithPath
`public CampaignVec2 GetNearestFaceCenterForPositionWithPath(PathFaceRecord pathFaceRecord, bool targetIsLand, float maxDist, int excludedFaceIds)`

**用途 / Purpose:** 读取并返回当前对象中 nearest face center for position with path 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetNearestFaceCenterForPositionWithPath(pathFaceRecord, false, 0, 0);
```

### GetEnvironmentTerrainTypes
`public List<TerrainType> GetEnvironmentTerrainTypes(in CampaignVec2 originPosition)`

**用途 / Purpose:** 读取并返回当前对象中 environment terrain types 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetEnvironmentTerrainTypes(originPosition);
```

### GetEnvironmentTerrainTypesCount
`public List<TerrainType> GetEnvironmentTerrainTypesCount(in CampaignVec2 originPosition, out TerrainType currentPositionTerrainType)`

**用途 / Purpose:** 读取并返回当前对象中 environment terrain types count 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetEnvironmentTerrainTypesCount(originPosition, currentPositionTerrainType);
```

### GetMapPatchAtPosition
`public MapPatchData GetMapPatchAtPosition(in CampaignVec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 map patch at position 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetMapPatchAtPosition(position);
```

### GetAccessiblePointNearPosition
`public CampaignVec2 GetAccessiblePointNearPosition(in CampaignVec2 pos, float radius)`

**用途 / Purpose:** 读取并返回当前对象中 accessible point near position 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetAccessiblePointNearPosition(pos, 0);
```

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(PathFaceRecord startingFace, PathFaceRecord endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)`

**用途 / Purpose:** 读取并返回当前对象中 path between a i faces 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetPathBetweenAIFaces(startingFace, endingFace, startingPosition, endingPosition, 0, path, 0, 0, 0, 0);
```

### GetPathDistanceBetweenAIFaces
`public bool GetPathDistanceBetweenAIFaces(PathFaceRecord startingAiFace, PathFaceRecord endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int excludedFaceIds, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)`

**用途 / Purpose:** 读取并返回当前对象中 path distance between a i faces 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetPathDistanceBetweenAIFaces(startingAiFace, endingAiFace, startingPosition, endingPosition, 0, 0, distance, 0, 0, 0);
```

### IsLineToPointClear
`public bool IsLineToPointClear(PathFaceRecord startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**用途 / Purpose:** 判断当前对象是否处于 line to point clear 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.IsLineToPointClear(startingFace, position, destination, 0);
```

### GetLastPointOnNavigationMeshFromPositionToDestination
`public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(PathFaceRecord startingFace, Vec2 position, Vec2 destination, int excludedFaceIds = null)`

**用途 / Purpose:** 读取并返回当前对象中 last point on navigation mesh from position to destination 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetLastPointOnNavigationMeshFromPositionToDestination(startingFace, position, destination, 0);
```

### GetLastPositionOnNavMeshFaceForPointAndDirection
`public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord startingFace, Vec2 position, Vec2 destination)`

**用途 / Purpose:** 读取并返回当前对象中 last position on nav mesh face for point and direction 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetLastPositionOnNavMeshFaceForPointAndDirection(startingFace, position, destination);
```

### GetNavigationMeshCenterPosition
`public Vec2 GetNavigationMeshCenterPosition(PathFaceRecord face)`

**用途 / Purpose:** 读取并返回当前对象中 navigation mesh center position 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetNavigationMeshCenterPosition(face);
```

### GetNavigationMeshCenterPosition
`public Vec2 GetNavigationMeshCenterPosition(int faceIndex)`

**用途 / Purpose:** 读取并返回当前对象中 navigation mesh center position 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetNavigationMeshCenterPosition(0);
```

### GetNumberOfNavigationMeshFaces
`public int GetNumberOfNavigationMeshFaces()`

**用途 / Purpose:** 读取并返回当前对象中 number of navigation mesh faces 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetNumberOfNavigationMeshFaces();
```

### GetFaceAtIndex
`public PathFaceRecord GetFaceAtIndex(int faceIndex)`

**用途 / Purpose:** 读取并返回当前对象中 face at index 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetFaceAtIndex(0);
```

### GetHeightAtPoint
`public bool GetHeightAtPoint(in CampaignVec2 point, ref float height)`

**用途 / Purpose:** 读取并返回当前对象中 height at point 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetHeightAtPoint(point, height);
```

### GetWinterTimeFactor
`public float GetWinterTimeFactor()`

**用途 / Purpose:** 读取并返回当前对象中 winter time factor 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetWinterTimeFactor();
```

### GetFaceVertexZ
`public float GetFaceVertexZ(PathFaceRecord navMeshFace)`

**用途 / Purpose:** 读取并返回当前对象中 face vertex z 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetFaceVertexZ(navMeshFace);
```

### GetGroundNormal
`public Vec3 GetGroundNormal(Vec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 ground normal 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetGroundNormal(position);
```

### GetSiegeCampFrames
`public void GetSiegeCampFrames(Settlement settlement, out List<MatrixFrame> siegeCamp1GlobalFrames, out List<MatrixFrame> siegeCamp2GlobalFrames)`

**用途 / Purpose:** 读取并返回当前对象中 siege camp frames 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.GetSiegeCampFrames(settlement, siegeCamp1GlobalFrames, siegeCamp2GlobalFrames);
```

### GetTerrainHeightAndNormal
`public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)`

**用途 / Purpose:** 读取并返回当前对象中 terrain height and normal 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
mapScene.GetTerrainHeightAndNormal(position, height, normal);
```

### GetTerrainTypeName
`public string GetTerrainTypeName(TerrainType type)`

**用途 / Purpose:** 读取并返回当前对象中 terrain type name 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetTerrainTypeName(type);
```

### GetSceneXmlCrc
`public uint GetSceneXmlCrc()`

**用途 / Purpose:** 读取并返回当前对象中 scene xml crc 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetSceneXmlCrc();
```

### GetSceneNavigationMeshCrc
`public uint GetSceneNavigationMeshCrc()`

**用途 / Purpose:** 读取并返回当前对象中 scene navigation mesh crc 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetSceneNavigationMeshCrc();
```

### GetWindAtPosition
`public Vec2 GetWindAtPosition(Vec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 wind at position 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetWindAtPosition(position);
```

### GetSnowAmountAtPosition
`public float GetSnowAmountAtPosition(Vec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 snow amount at position 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetSnowAmountAtPosition(position);
```

### GetRainAmountAtPosition
`public float GetRainAmountAtPosition(Vec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 rain amount at position 的结果。

```csharp
// 先通过子系统 API 拿到 MapScene 实例
MapScene mapScene = ...;
var result = mapScene.GetRainAmountAtPosition(position);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapScene mapScene = ...;
mapScene.GetTerrainSize();
```

## 参见

- [本区域目录](../)