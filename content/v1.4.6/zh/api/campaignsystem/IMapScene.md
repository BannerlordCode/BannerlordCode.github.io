---
title: "IMapScene"
description: "IMapScene：TaleWorlds.CampaignSystem 的 public 接口；公开成员 39 个（方法 39、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/Map/IMapScene.cs。"
---
# IMapScene

**Namespace:** `TaleWorlds.CampaignSystem.Map`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMapScene`
**File:** `TaleWorlds.CampaignSystem/Map/IMapScene.cs`

## 概述

IMapScene 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Map/IMapScene.cs。它是一个 public 接口，继承链为 IMapScene。public/protected 成员共 39 个：39 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMapScene 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Map），继承链 IMapScene。成员构成以方法为主（方法 39/39，属性 0/39），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Map/IMapScene.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Load` | `void Load();` | 方法 |
| `AfterLoad` | `void AfterLoad();` | 方法 |
| `Destroy` | `void Destroy();` | 方法 |
| `GetFaceIndex` | `PathFaceRecord GetFaceIndex(in CampaignVec2 vec2);` | 方法 |
| `GetTerrainTypeAtPosition` | `TerrainType GetTerrainTypeAtPosition(in CampaignVec2 vec2);` | 方法 |
| `List` | `List<TerrainType>GetEnvironmentTerrainTypes(in CampaignVec2 vec2);` | 方法 |
| `List` | `List<TerrainType>GetEnvironmentTerrainTypesCount(in CampaignVec2 vec2, out TerrainType currentPositionTerrainType);` | 方法 |
| `GetMapPatchAtPosition` | `MapPatchData GetMapPatchAtPosition(in CampaignVec2 position);` | 方法 |
| `GetFaceTerrainType` | `TerrainType GetFaceTerrainType(PathFaceRecord faceIndex);` | 方法 |
| `GetNearestFaceCenterForPosition` | `CampaignVec2 GetNearestFaceCenterForPosition(in CampaignVec2 vec2, int[]excludedFaceIds);` | 方法 |
| `GetNearestFaceCenterForPositionWithPath` | `CampaignVec2 GetNearestFaceCenterForPositionWithPath(PathFaceRecord pathFaceRecord, bool targetIsLand, float maxDist, int[]excludedFaceIds);` | 方法 |
| `GetAccessiblePointNearPosition` | `CampaignVec2 GetAccessiblePointNearPosition(in CampaignVec2 vec2, float radius);` | 方法 |
| `GetPathBetweenAIFaces` | `bool GetPathBetweenAIFaces(PathFaceRecord startingFace, PathFaceRecord endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds, float extraCostMultiplier, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand);` | 方法 |
| `GetPathDistanceBetweenAIFaces` | `bool GetPathDistanceBetweenAIFaces(PathFaceRecord startingAiFace, PathFaceRecord endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int[]excludedFaceIds, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand);` | 方法 |
| `IsLineToPointClear` | `bool IsLineToPointClear(PathFaceRecord startingFace, Vec2 position, Vec2 destination, float agentRadius);` | 方法 |
| `GetLastPointOnNavigationMeshFromPositionToDestination` | `Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(PathFaceRecord startingFace, Vec2 position, Vec2 destination, int[]excludedFaceIds = null);` | 方法 |
| `GetLastPositionOnNavMeshFaceForPointAndDirection` | `Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord startingFace, Vec2 position, Vec2 destination);` | 方法 |
| `GetNavigationMeshCenterPosition` | `Vec2 GetNavigationMeshCenterPosition(PathFaceRecord face);` | 方法 |
| `GetNavigationMeshCenterPosition` | `Vec2 GetNavigationMeshCenterPosition(int faceIndex);` | 方法 |
| `GetFaceAtIndex` | `PathFaceRecord GetFaceAtIndex(int faceIndex);` | 方法 |
| `GetNumberOfNavigationMeshFaces` | `int GetNumberOfNavigationMeshFaces();` | 方法 |
| `GetHeightAtPoint` | `bool GetHeightAtPoint(in CampaignVec2 point, ref float height);` | 方法 |
| `GetWinterTimeFactor` | `float GetWinterTimeFactor();` | 方法 |
| `GetTerrainHeightAndNormal` | `void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal);` | 方法 |
| `GetFaceVertexZ` | `float GetFaceVertexZ(PathFaceRecord navMeshFace);` | 方法 |
| `GetGroundNormal` | `Vec3 GetGroundNormal(Vec2 position);` | 方法 |
| `GetSiegeCampFrames` | `void GetSiegeCampFrames(Settlement settlement, out List<MatrixFrame>siegeCamp1GlobalFrames, out List<MatrixFrame>siegeCamp2GlobalFrames);` | 方法 |
| `GetTerrainTypeName` | `string GetTerrainTypeName(TerrainType type);` | 方法 |
| `GetTerrainSize` | `Vec2 GetTerrainSize();` | 方法 |
| `GetSceneLevel` | `uint GetSceneLevel(string name);` | 方法 |
| `SetSceneLevels` | `void SetSceneLevels(List<string>levels);` | 方法 |
| `List` | `List<AtmosphereState>GetAtmosphereStates();` | 方法 |
| `SetAtmosphereColorgrade` | `void SetAtmosphereColorgrade(TerrainType terrainType);` | 方法 |
| `AddNewEntityToMapScene` | `void AddNewEntityToMapScene(string entityId, in CampaignVec2 position);` | 方法 |
| `GetMapBorders` | `void GetMapBorders(out Vec2 minimumPosition, out Vec2 maximumPosition, out float maximumHeight);` | 方法 |
| `GetSceneXmlCrc` | `uint GetSceneXmlCrc();` | 方法 |
| `GetSceneNavigationMeshCrc` | `uint GetSceneNavigationMeshCrc();` | 方法 |
| `GetSnowAmountAtPosition` | `float GetSnowAmountAtPosition(Vec2 position);` | 方法 |
| `GetRainAmountAtPosition` | `float GetRainAmountAtPosition(Vec2 position);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 IInteractablePoint](../IInteractablePoint)
- [同命名空间 IMapPoint](../IMapPoint)
- [同命名空间 IMapSceneCreator](../IMapSceneCreator)
- [同命名空间 LocatableSearchData](../LocatableSearchData__1)
