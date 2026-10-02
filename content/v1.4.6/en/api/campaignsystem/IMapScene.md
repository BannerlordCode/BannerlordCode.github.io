---
title: "IMapScene"
description: "IMapScene: a public interface in TaleWorlds.CampaignSystem; 39 exposed members (39 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Map/IMapScene.cs."
---
# IMapScene

**Namespace:** `TaleWorlds.CampaignSystem.Map`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMapScene`
**File:** `TaleWorlds.CampaignSystem/Map/IMapScene.cs`

## Overview

IMapScene lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Map/IMapScene.cs. It is a public interface; the inheritance chain is IMapScene. It exposes 39 public/protected members: 39 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMapScene is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Map) the module directory; inheritance chain IMapScene. The surface is method-led (methods 39/39, properties 0/39), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Map/IMapScene.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Load` | `void Load();` | method |
| `AfterLoad` | `void AfterLoad();` | method |
| `Destroy` | `void Destroy();` | method |
| `GetFaceIndex` | `PathFaceRecord GetFaceIndex(in CampaignVec2 vec2);` | method |
| `GetTerrainTypeAtPosition` | `TerrainType GetTerrainTypeAtPosition(in CampaignVec2 vec2);` | method |
| `List` | `List<TerrainType>GetEnvironmentTerrainTypes(in CampaignVec2 vec2);` | method |
| `List` | `List<TerrainType>GetEnvironmentTerrainTypesCount(in CampaignVec2 vec2, out TerrainType currentPositionTerrainType);` | method |
| `GetMapPatchAtPosition` | `MapPatchData GetMapPatchAtPosition(in CampaignVec2 position);` | method |
| `GetFaceTerrainType` | `TerrainType GetFaceTerrainType(PathFaceRecord faceIndex);` | method |
| `GetNearestFaceCenterForPosition` | `CampaignVec2 GetNearestFaceCenterForPosition(in CampaignVec2 vec2, int[]excludedFaceIds);` | method |
| `GetNearestFaceCenterForPositionWithPath` | `CampaignVec2 GetNearestFaceCenterForPositionWithPath(PathFaceRecord pathFaceRecord, bool targetIsLand, float maxDist, int[]excludedFaceIds);` | method |
| `GetAccessiblePointNearPosition` | `CampaignVec2 GetAccessiblePointNearPosition(in CampaignVec2 vec2, float radius);` | method |
| `GetPathBetweenAIFaces` | `bool GetPathBetweenAIFaces(PathFaceRecord startingFace, PathFaceRecord endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds, float extraCostMultiplier, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand);` | method |
| `GetPathDistanceBetweenAIFaces` | `bool GetPathDistanceBetweenAIFaces(PathFaceRecord startingAiFace, PathFaceRecord endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int[]excludedFaceIds, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand);` | method |
| `IsLineToPointClear` | `bool IsLineToPointClear(PathFaceRecord startingFace, Vec2 position, Vec2 destination, float agentRadius);` | method |
| `GetLastPointOnNavigationMeshFromPositionToDestination` | `Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(PathFaceRecord startingFace, Vec2 position, Vec2 destination, int[]excludedFaceIds = null);` | method |
| `GetLastPositionOnNavMeshFaceForPointAndDirection` | `Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord startingFace, Vec2 position, Vec2 destination);` | method |
| `GetNavigationMeshCenterPosition` | `Vec2 GetNavigationMeshCenterPosition(PathFaceRecord face);` | method |
| `GetNavigationMeshCenterPosition` | `Vec2 GetNavigationMeshCenterPosition(int faceIndex);` | method |
| `GetFaceAtIndex` | `PathFaceRecord GetFaceAtIndex(int faceIndex);` | method |
| `GetNumberOfNavigationMeshFaces` | `int GetNumberOfNavigationMeshFaces();` | method |
| `GetHeightAtPoint` | `bool GetHeightAtPoint(in CampaignVec2 point, ref float height);` | method |
| `GetWinterTimeFactor` | `float GetWinterTimeFactor();` | method |
| `GetTerrainHeightAndNormal` | `void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal);` | method |
| `GetFaceVertexZ` | `float GetFaceVertexZ(PathFaceRecord navMeshFace);` | method |
| `GetGroundNormal` | `Vec3 GetGroundNormal(Vec2 position);` | method |
| `GetSiegeCampFrames` | `void GetSiegeCampFrames(Settlement settlement, out List<MatrixFrame>siegeCamp1GlobalFrames, out List<MatrixFrame>siegeCamp2GlobalFrames);` | method |
| `GetTerrainTypeName` | `string GetTerrainTypeName(TerrainType type);` | method |
| `GetTerrainSize` | `Vec2 GetTerrainSize();` | method |
| `GetSceneLevel` | `uint GetSceneLevel(string name);` | method |
| `SetSceneLevels` | `void SetSceneLevels(List<string>levels);` | method |
| `List` | `List<AtmosphereState>GetAtmosphereStates();` | method |
| `SetAtmosphereColorgrade` | `void SetAtmosphereColorgrade(TerrainType terrainType);` | method |
| `AddNewEntityToMapScene` | `void AddNewEntityToMapScene(string entityId, in CampaignVec2 position);` | method |
| `GetMapBorders` | `void GetMapBorders(out Vec2 minimumPosition, out Vec2 maximumPosition, out float maximumHeight);` | method |
| `GetSceneXmlCrc` | `uint GetSceneXmlCrc();` | method |
| `GetSceneNavigationMeshCrc` | `uint GetSceneNavigationMeshCrc();` | method |
| `GetSnowAmountAtPosition` | `float GetSnowAmountAtPosition(Vec2 position);` | method |
| `GetRainAmountAtPosition` | `float GetRainAmountAtPosition(Vec2 position);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace IInteractablePoint](../IInteractablePoint)
- [same namespace IMapPoint](../IMapPoint)
- [same namespace IMapSceneCreator](../IMapSceneCreator)
- [same namespace LocatableSearchData](../LocatableSearchData__1)
