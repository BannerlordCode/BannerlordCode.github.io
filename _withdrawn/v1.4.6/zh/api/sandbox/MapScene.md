---
title: "MapScene"
description: "MapScene：SandBox 的 public 类，继承 IMapScene；公开成员 47 个（方法 44、属性 1、字段 1）。canonical 桶 sandbox。源文件 SandBox/MapScene.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapScene

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class MapScene : IMapScene`
**File:** `SandBox/MapScene.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapScene 位于 SandBox 模块，源文件 SandBox/MapScene.cs。它是一个 public 类，实现/继承 IMapScene，继承链为 MapScene → IMapScene。public/protected 成员共 47 个：44 方法、1 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapScene 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox`，继承链 MapScene → IMapScene。成员构成以方法为主（方法 44/47，属性 1/47），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/MapScene.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Scene` | `public Scene Scene` | 属性 |
| `MapScene` | `public MapScene()` | 构造函数 |
| `GetTerrainSize` | `public Vec2 GetTerrainSize()` | 方法 |
| `GetSceneLevel` | `public uint GetSceneLevel(string name)` | 方法 |
| `SetSceneLevels` | `public void SetSceneLevels(List<string>levels)` | 方法 |
| `List` | `public List<AtmosphereState>GetAtmosphereStates()` | 方法 |
| `ValidateAgentVisualsReseted` | `public void ValidateAgentVisualsReseted()` | 方法 |
| `SetAtmosphereColorgrade` | `public void SetAtmosphereColorgrade(TerrainType terrainType)` | 方法 |
| `AddNewEntityToMapScene` | `public void AddNewEntityToMapScene(string entityId, in CampaignVec2 position)` | 方法 |
| `GetMapBorders` | `public void GetMapBorders(out Vec2 minimumPosition, out Vec2 maximumPosition, out float maximumHeight)` | 方法 |
| `Load` | `public void Load()` | 方法 |
| `SetSnowAndRainDataWithDimension` | `public void SetSnowAndRainDataWithDimension(Texture snowRainTexture, int weatherNodeGridWidthAndHeight)` | 方法 |
| `AfterLoad` | `public void AfterLoad()` | 方法 |
| `Destroy` | `public void Destroy()` | 方法 |
| `DisableUnwalkableNavigationMeshes` | `public void DisableUnwalkableNavigationMeshes()` | 方法 |
| `GetFaceIndex` | `public PathFaceRecord GetFaceIndex(in CampaignVec2 vec2)` | 方法 |
| `GetTerrainTypeAtPosition` | `public TerrainType GetTerrainTypeAtPosition(in CampaignVec2 position)` | 方法 |
| `GetFaceTerrainType` | `public TerrainType GetFaceTerrainType(PathFaceRecord navMeshFace)` | 方法 |
| `GetNearestFaceCenterForPosition` | `public CampaignVec2 GetNearestFaceCenterForPosition(in CampaignVec2 position, int[]excludedFaceIds)` | 方法 |
| `GetNearestFaceCenterForPositionWithPath` | `public CampaignVec2 GetNearestFaceCenterForPositionWithPath(PathFaceRecord pathFaceRecord, bool targetIsLand, float maxDist, int[]excludedFaceIds)` | 方法 |
| `List` | `public List<TerrainType>GetEnvironmentTerrainTypes(in CampaignVec2 originPosition)` | 方法 |
| `List` | `public List<TerrainType>GetEnvironmentTerrainTypesCount(in CampaignVec2 originPosition, out TerrainType currentPositionTerrainType)` | 方法 |
| `GetMapPatchAtPosition` | `public MapPatchData GetMapPatchAtPosition(in CampaignVec2 position)` | 方法 |
| `GetAccessiblePointNearPosition` | `public CampaignVec2 GetAccessiblePointNearPosition(in CampaignVec2 pos, float radius)` | 方法 |
| `GetPathBetweenAIFaces` | `public bool GetPathBetweenAIFaces(PathFaceRecord startingFace, PathFaceRecord endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds, float extraCostMultiplier, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)` | 方法 |
| `GetPathDistanceBetweenAIFaces` | `public bool GetPathDistanceBetweenAIFaces(PathFaceRecord startingAiFace, PathFaceRecord endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int[]excludedFaceIds, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)` | 方法 |
| `IsLineToPointClear` | `public bool IsLineToPointClear(PathFaceRecord startingFace, Vec2 position, Vec2 destination, float agentRadius)` | 方法 |
| `GetLastPointOnNavigationMeshFromPositionToDestination` | `public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(PathFaceRecord startingFace, Vec2 position, Vec2 destination, int[]excludedFaceIds = null)` | 方法 |
| `GetLastPositionOnNavMeshFaceForPointAndDirection` | `public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord startingFace, Vec2 position, Vec2 destination)` | 方法 |
| `GetNavigationMeshCenterPosition` | `public Vec2 GetNavigationMeshCenterPosition(PathFaceRecord face)` | 方法 |
| `GetNavigationMeshCenterPosition` | `public Vec2 GetNavigationMeshCenterPosition(int faceIndex)` | 方法 |
| `GetNumberOfNavigationMeshFaces` | `public int GetNumberOfNavigationMeshFaces()` | 方法 |
| `GetFaceAtIndex` | `public PathFaceRecord GetFaceAtIndex(int faceIndex)` | 方法 |
| `GetHeightAtPoint` | `public bool GetHeightAtPoint(in CampaignVec2 point, ref float height)` | 方法 |
| `GetWinterTimeFactor` | `public float GetWinterTimeFactor()` | 方法 |
| `GetFaceVertexZ` | `public float GetFaceVertexZ(PathFaceRecord navMeshFace)` | 方法 |
| `GetGroundNormal` | `public Vec3 GetGroundNormal(Vec2 position)` | 方法 |
| `GetSiegeCampFrames` | `public void GetSiegeCampFrames(Settlement settlement, out List<MatrixFrame>siegeCamp1GlobalFrames, out List<MatrixFrame>siegeCamp2GlobalFrames)` | 方法 |
| `GetTerrainHeightAndNormal` | `public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)` | 方法 |
| `GetTerrainTypeName` | `public string GetTerrainTypeName(TerrainType type)` | 方法 |
| `GetSceneXmlCrc` | `public uint GetSceneXmlCrc()` | 方法 |
| `GetSceneNavigationMeshCrc` | `public uint GetSceneNavigationMeshCrc()` | 方法 |
| `GetWindAtPosition` | `public Vec2 GetWindAtPosition(Vec2 position)` | 方法 |
| `GetSnowAmountAtPosition` | `public float GetSnowAmountAtPosition(Vec2 position)` | 方法 |
| `GetRainAmountAtPosition` | `public float GetRainAmountAtPosition(Vec2 position)` | 方法 |
| `SetupWaterWake` | `public void SetupWaterWake(float wakeWorldSize, float wakeCameraOffset)` | 方法 |
| `FlowMapTextureDimension` | `public const int FlowMapTextureDimension` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IMapScene](../../campaign/IMapScene/)
- [同命名空间 Add1000GoldCheat](../Add1000GoldCheat/)
- [同命名空间 Add100InfluenceCheat](../Add100InfluenceCheat/)
- [同命名空间 Add100RenownCheat](../Add100RenownCheat/)
- [同命名空间 AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
