---
title: "MapScene"
description: "MapScene: a public class in SandBox, inheriting IMapScene; 47 exposed members (44 methods, 1 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/MapScene.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapScene

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class MapScene : IMapScene`
**File:** `SandBox/MapScene.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapScene lives in the SandBox module, source file SandBox/MapScene.cs. It is a public class, implementing/inheriting IMapScene; the inheritance chain is MapScene → IMapScene. It exposes 47 public/protected members: 44 methods, 1 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapScene lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox`, inheritance chain MapScene → IMapScene. The surface is method-led (methods 44/47, properties 1/47), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/MapScene.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Scene` | `public Scene Scene` | property |
| `MapScene` | `public MapScene()` | constructor |
| `GetTerrainSize` | `public Vec2 GetTerrainSize()` | method |
| `GetSceneLevel` | `public uint GetSceneLevel(string name)` | method |
| `SetSceneLevels` | `public void SetSceneLevels(List<string>levels)` | method |
| `List` | `public List<AtmosphereState>GetAtmosphereStates()` | method |
| `ValidateAgentVisualsReseted` | `public void ValidateAgentVisualsReseted()` | method |
| `SetAtmosphereColorgrade` | `public void SetAtmosphereColorgrade(TerrainType terrainType)` | method |
| `AddNewEntityToMapScene` | `public void AddNewEntityToMapScene(string entityId, in CampaignVec2 position)` | method |
| `GetMapBorders` | `public void GetMapBorders(out Vec2 minimumPosition, out Vec2 maximumPosition, out float maximumHeight)` | method |
| `Load` | `public void Load()` | method |
| `SetSnowAndRainDataWithDimension` | `public void SetSnowAndRainDataWithDimension(Texture snowRainTexture, int weatherNodeGridWidthAndHeight)` | method |
| `AfterLoad` | `public void AfterLoad()` | method |
| `Destroy` | `public void Destroy()` | method |
| `DisableUnwalkableNavigationMeshes` | `public void DisableUnwalkableNavigationMeshes()` | method |
| `GetFaceIndex` | `public PathFaceRecord GetFaceIndex(in CampaignVec2 vec2)` | method |
| `GetTerrainTypeAtPosition` | `public TerrainType GetTerrainTypeAtPosition(in CampaignVec2 position)` | method |
| `GetFaceTerrainType` | `public TerrainType GetFaceTerrainType(PathFaceRecord navMeshFace)` | method |
| `GetNearestFaceCenterForPosition` | `public CampaignVec2 GetNearestFaceCenterForPosition(in CampaignVec2 position, int[]excludedFaceIds)` | method |
| `GetNearestFaceCenterForPositionWithPath` | `public CampaignVec2 GetNearestFaceCenterForPositionWithPath(PathFaceRecord pathFaceRecord, bool targetIsLand, float maxDist, int[]excludedFaceIds)` | method |
| `List` | `public List<TerrainType>GetEnvironmentTerrainTypes(in CampaignVec2 originPosition)` | method |
| `List` | `public List<TerrainType>GetEnvironmentTerrainTypesCount(in CampaignVec2 originPosition, out TerrainType currentPositionTerrainType)` | method |
| `GetMapPatchAtPosition` | `public MapPatchData GetMapPatchAtPosition(in CampaignVec2 position)` | method |
| `GetAccessiblePointNearPosition` | `public CampaignVec2 GetAccessiblePointNearPosition(in CampaignVec2 pos, float radius)` | method |
| `GetPathBetweenAIFaces` | `public bool GetPathBetweenAIFaces(PathFaceRecord startingFace, PathFaceRecord endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds, float extraCostMultiplier, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)` | method |
| `GetPathDistanceBetweenAIFaces` | `public bool GetPathDistanceBetweenAIFaces(PathFaceRecord startingAiFace, PathFaceRecord endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int[]excludedFaceIds, int regionSwitchCostFromLandToSea, int regionSwitchCostFromSeaToLand)` | method |
| `IsLineToPointClear` | `public bool IsLineToPointClear(PathFaceRecord startingFace, Vec2 position, Vec2 destination, float agentRadius)` | method |
| `GetLastPointOnNavigationMeshFromPositionToDestination` | `public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(PathFaceRecord startingFace, Vec2 position, Vec2 destination, int[]excludedFaceIds = null)` | method |
| `GetLastPositionOnNavMeshFaceForPointAndDirection` | `public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord startingFace, Vec2 position, Vec2 destination)` | method |
| `GetNavigationMeshCenterPosition` | `public Vec2 GetNavigationMeshCenterPosition(PathFaceRecord face)` | method |
| `GetNavigationMeshCenterPosition` | `public Vec2 GetNavigationMeshCenterPosition(int faceIndex)` | method |
| `GetNumberOfNavigationMeshFaces` | `public int GetNumberOfNavigationMeshFaces()` | method |
| `GetFaceAtIndex` | `public PathFaceRecord GetFaceAtIndex(int faceIndex)` | method |
| `GetHeightAtPoint` | `public bool GetHeightAtPoint(in CampaignVec2 point, ref float height)` | method |
| `GetWinterTimeFactor` | `public float GetWinterTimeFactor()` | method |
| `GetFaceVertexZ` | `public float GetFaceVertexZ(PathFaceRecord navMeshFace)` | method |
| `GetGroundNormal` | `public Vec3 GetGroundNormal(Vec2 position)` | method |
| `GetSiegeCampFrames` | `public void GetSiegeCampFrames(Settlement settlement, out List<MatrixFrame>siegeCamp1GlobalFrames, out List<MatrixFrame>siegeCamp2GlobalFrames)` | method |
| `GetTerrainHeightAndNormal` | `public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)` | method |
| `GetTerrainTypeName` | `public string GetTerrainTypeName(TerrainType type)` | method |
| `GetSceneXmlCrc` | `public uint GetSceneXmlCrc()` | method |
| `GetSceneNavigationMeshCrc` | `public uint GetSceneNavigationMeshCrc()` | method |
| `GetWindAtPosition` | `public Vec2 GetWindAtPosition(Vec2 position)` | method |
| `GetSnowAmountAtPosition` | `public float GetSnowAmountAtPosition(Vec2 position)` | method |
| `GetRainAmountAtPosition` | `public float GetRainAmountAtPosition(Vec2 position)` | method |
| `SetupWaterWake` | `public void SetupWaterWake(float wakeWorldSize, float wakeCameraOffset)` | method |
| `FlowMapTextureDimension` | `public const int FlowMapTextureDimension` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMapScene](../../campaign/IMapScene/)
- [same namespace Add1000GoldCheat](../Add1000GoldCheat/)
- [same namespace Add100InfluenceCheat](../Add100InfluenceCheat/)
- [same namespace Add100RenownCheat](../Add100RenownCheat/)
- [same namespace AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
