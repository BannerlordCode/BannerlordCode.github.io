---
title: "Scene"
description: "Scene: a public class in TaleWorlds.Engine, inheriting NativeObject; 302 exposed members (287 methods, 9 properties, 6 fields). Source: TaleWorlds.Engine/Scene.cs."
---
# Scene

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Scene : NativeObject`
**File:** `TaleWorlds.Engine/Scene.cs`

## Overview

Scene lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Scene.cs. It is a public class (sealed), implementing/inheriting NativeObject; the inheritance chain is Scene → NativeObject. It exposes 302 public/protected members: 287 methods, 9 properties, 6 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Scene is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain Scene → NativeObject. The surface is method-led (methods 287/302, properties 9/302), so it mostly exposes operations. NativeObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Scene.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDefaultEditorScene` | `public bool IsDefaultEditorScene()` | method |
| `IsMultiplayerScene` | `public bool IsMultiplayerScene()` | method |
| `TakePhotoModePicture` | `public string TakePhotoModePicture(bool saveAmbientOcclusionPass, bool savingObjectIdPass, bool saveShadowPass)` | method |
| `GetAllColorGradeNames` | `public string GetAllColorGradeNames()` | method |
| `GetAllFilterNames` | `public string GetAllFilterNames()` | method |
| `GetPhotoModeRoll` | `public float GetPhotoModeRoll()` | method |
| `GetPhotoModeOrbit` | `public bool GetPhotoModeOrbit()` | method |
| `GetPhotoModeOn` | `public bool GetPhotoModeOn()` | method |
| `GetPhotoModeFocus` | `public void GetPhotoModeFocus(ref float focus, ref float focusStart, ref float focusEnd, ref float exposure, ref bool vignetteOn)` | method |
| `GetSceneColorGradeIndex` | `public int GetSceneColorGradeIndex()` | method |
| `GetSceneFilterIndex` | `public int GetSceneFilterIndex()` | method |
| `EnableFixedTick` | `public void EnableFixedTick()` | method |
| `GetLoadingStateName` | `public string GetLoadingStateName()` | method |
| `IsLoadingFinished` | `public bool IsLoadingFinished()` | method |
| `SetPhotoModeRoll` | `public void SetPhotoModeRoll(float roll)` | method |
| `SetPhotoModeOrbit` | `public void SetPhotoModeOrbit(bool orbit)` | method |
| `GetFallDensity` | `public float GetFallDensity()` | method |
| `SetPhotoModeOn` | `public void SetPhotoModeOn(bool on)` | method |
| `SetPhotoModeFocus` | `public void SetPhotoModeFocus(float focusStart, float focusEnd, float focus, float exposure)` | method |
| `SetPhotoModeFov` | `public void SetPhotoModeFov(float verticalFov)` | method |
| `GetPhotoModeFov` | `public float GetPhotoModeFov()` | method |
| `HasDecalRenderer` | `public bool HasDecalRenderer()` | method |
| `SetPhotoModeVignette` | `public void SetPhotoModeVignette(bool vignetteOn)` | method |
| `SetSceneColorGradeIndex` | `public void SetSceneColorGradeIndex(int index)` | method |
| `SetSceneFilterIndex` | `public int SetSceneFilterIndex(int index)` | method |
| `SetSceneColorGrade` | `public void SetSceneColorGrade(string textureName)` | method |
| `SetUpgradeLevel` | `public void SetUpgradeLevel(int level)` | method |
| `CreateBurstParticle` | `public void CreateBurstParticle(int particleId, MatrixFrame frame)` | method |
| `float[]GetTerrainHeightData` | `public float[]GetTerrainHeightData(int nodeXIndex, int nodeYIndex)` | method |
| `short[]GetTerrainPhysicsMaterialIndexData` | `public short[]GetTerrainPhysicsMaterialIndexData(int nodeXIndex, int nodeYIndex)` | method |
| `GetTerrainData` | `public void GetTerrainData(out Vec2i nodeDimension, out float nodeSize, out int layerCount, out int layerVersion)` | method |
| `GetTerrainNodeData` | `public void GetTerrainNodeData(int xIndex, int yIndex, out int vertexCountAlongAxis, out float quadLength, out float minHeight, out float maxHeight)` | method |
| `GetTerrainPhysicsMaterialAtLayer` | `public PhysicsMaterial GetTerrainPhysicsMaterialAtLayer(int layerIndex)` | method |
| `SetSceneColorGrade` | `public void SetSceneColorGrade(Scene scene, string textureName)` | method |
| `GetWaterLevel` | `public float GetWaterLevel()` | method |
| `GetWaterLevelAtPosition` | `public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)` | method |
| `GetWaterSpeedAtPosition` | `public Vec3 GetWaterSpeedAtPosition(Vec2 position, bool doChoppinessCorrection)` | method |
| `GetBulkWaterLevelAtPositions` | `public void GetBulkWaterLevelAtPositions(Vec2[]waterHeightQueryArray, ref float[]waterHeightsAtVolumes, ref Vec3[]waterSurfaceNormals)` | method |
| `GetInterpolationFactorForBodyWorldTransformSmoothing` | `public void GetInterpolationFactorForBodyWorldTransformSmoothing(out float interpolationFactor, out float fixedDt)` | method |
| `GetBulkWaterLevelAtVolumes` | `public void GetBulkWaterLevelAtVolumes(UIntPtr waterHeightQueryArray, int waterHeightQueryArrayCount, in MatrixFrame globalFrame)` | method |
| `GetWaterStrength` | `public float GetWaterStrength()` | method |
| `DeRegisterShipVisual` | `public void DeRegisterShipVisual(UIntPtr visualPointer)` | method |
| `RegisterShipVisualToWaterRenderer` | `public UIntPtr RegisterShipVisualToWaterRenderer(WeakGameEntity entity, in Vec3 waterEffectBB)` | method |
| `SetWaterStrength` | `public void SetWaterStrength(float newWaterStrength)` | method |
| `AddWaterWakeWithSphere` | `public void AddWaterWakeWithSphere(Vec3 position, float radius, float wakeVisibility, float foamVisibility)` | method |
| `AddWaterWakeWithCapsule` | `public void AddWaterWakeWithCapsule(Vec3 positionA, float radiusA, Vec3 positionB, float radiusB, float wakeVisibility, float foamVisibility)` | method |
| `GetPathBetweenAIFaces` | `public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds)` | method |
| `HasNavmeshFaceUnsharedEdges` | `public bool HasNavmeshFaceUnsharedEdges(in PathFaceRecord faceRecord)` | method |
| `GetNavmeshFaceCountBetweenTwoIds` | `public int GetNavmeshFaceCountBetweenTwoIds(int firstId, int secondId)` | method |
| `GetNavmeshFaceRecordsBetweenTwoIds` | `public void GetNavmeshFaceRecordsBetweenTwoIds(int firstId, int secondId, PathFaceRecord[]faceRecords)` | method |
| `SetFixedTickCallbackActive` | `public void SetFixedTickCallbackActive(bool isActive)` | method |
| `SetOnCollisionFilterCallbackActive` | `public void SetOnCollisionFilterCallbackActive(bool isActive)` | method |
| `GetPathBetweenAIFaces` | `public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)` | method |
| `GetPathBetweenAIFaces` | `public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds, float extraCostMultiplier)` | method |
| `GetPathBetweenAIFaces` | `public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds, float extraCostMultiplier, int regionSwitchCostTo0, int regionSwitchCostTo1)` | method |
| `GetPathDistanceBetweenAIFaces` | `public bool GetPathDistanceBetweenAIFaces(int startingAiFace, int endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int[]excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)` | method |
| `GetNavMeshFaceIndex` | `public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec2 position, bool isRegion1, bool checkIfDisabled, bool ignoreHeight = false)` | method |
| `GetNavMeshFaceIndex` | `public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec3 position, bool checkIfDisabled)` | method |
| `CreateNewScene` | `public static Scene CreateNewScene(bool initialize_physics = true, bool enable_decals = true, DecalAtlasGroup atlasGroup = DecalAtlasGroup.All, string sceneName = " ")` | method |
| `AddAlwaysRenderedSkeleton` | `public void AddAlwaysRenderedSkeleton(Skeleton skeleton)` | method |
| `RemoveAlwaysRenderedSkeleton` | `public void RemoveAlwaysRenderedSkeleton(Skeleton skeleton)` | method |
| `CreatePathMesh` | `public MetaMesh CreatePathMesh(string baseEntityName, bool isWaterPath)` | method |
| `SetActiveVisibilityLevels` | `public void SetActiveVisibilityLevels(List<string>levelsToActivate)` | method |
| `SetDoNotWaitForLoadingStatesToRender` | `public void SetDoNotWaitForLoadingStatesToRender(bool value)` | method |
| `SetDynamicSnowTexture` | `public void SetDynamicSnowTexture(Texture texture)` | method |
| `GetWindFlowMapData` | `public void GetWindFlowMapData(float[]flowMapData)` | method |
| `CreateDynamicRainTexture` | `public void CreateDynamicRainTexture(int w, int h)` | method |
| `CreatePathMesh` | `public MetaMesh CreatePathMesh(IList<GameEntity>pathNodes, bool isWaterPath = false)` | method |
| `GetEntityWithGuid` | `public GameEntity GetEntityWithGuid(string guid)` | method |
| `IsEntityFrameChanged` | `public bool IsEntityFrameChanged(string containsName)` | method |
| `GetTerrainHeightAndNormal` | `public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)` | method |
| `GetFloraInstanceCount` | `public int GetFloraInstanceCount()` | method |
| `GetFloraRendererTextureUsage` | `public int GetFloraRendererTextureUsage()` | method |
| `GetTerrainMemoryUsage` | `public int GetTerrainMemoryUsage()` | method |
| `SetFetchCrcInfoOfScene` | `public void SetFetchCrcInfoOfScene(bool value)` | method |
| `GetSceneXMLCRC` | `public uint GetSceneXMLCRC()` | method |
| `GetNavigationMeshCRC` | `public uint GetNavigationMeshCRC()` | method |
| `SetGlobalWindStrengthVector` | `public void SetGlobalWindStrengthVector(in Vec2 windVector)` | method |
| `GetGlobalWindStrengthVector` | `public Vec2 GetGlobalWindStrengthVector()` | method |
| `GetGlobalWindVelocity` | `public Vec2 GetGlobalWindVelocity()` | method |
| `SetGlobalWindVelocity` | `public void SetGlobalWindVelocity(in Vec2 windVector)` | method |
| `GetEnginePhysicsEnabled` | `public bool GetEnginePhysicsEnabled()` | method |
| `ClearNavMesh` | `public void ClearNavMesh()` | method |
| `StallLoadingRenderingsUntilFurtherNotice` | `public void StallLoadingRenderingsUntilFurtherNotice()` | method |
| `GetNavMeshFaceCount` | `public int GetNavMeshFaceCount()` | method |
| `ResumeLoadingRenderings` | `public void ResumeLoadingRenderings()` | method |
| `GetUpgradeLevelMask` | `public uint GetUpgradeLevelMask()` | method |
| `SetUpgradeLevelVisibility` | `public void SetUpgradeLevelVisibility(uint mask)` | method |
| `SetUpgradeLevelVisibility` | `public void SetUpgradeLevelVisibility(List<string>levels)` | method |
| `GetIdOfNavMeshFace` | `public int GetIdOfNavMeshFace(int faceIndex)` | method |
| `SetClothSimulationState` | `public void SetClothSimulationState(bool state)` | method |
| `GetNavMeshCenterPosition` | `public void GetNavMeshCenterPosition(int faceIndex, ref Vec3 centerPosition)` | method |
| `GetNavMeshPathFaceRecord` | `public PathFaceRecord GetNavMeshPathFaceRecord(int faceIndex)` | method |
| `GetPathFaceRecordFromNavMeshFacePointer` | `public PathFaceRecord GetPathFaceRecordFromNavMeshFacePointer(UIntPtr navMeshFacePointer)` | method |
| `GetAllNavmeshFaceRecords` | `public void GetAllNavmeshFaceRecords(PathFaceRecord[]faceRecords)` | method |
| `GetFirstEntityWithName` | `public GameEntity GetFirstEntityWithName(string name)` | method |
| `GetCampaignEntityWithName` | `public GameEntity GetCampaignEntityWithName(string name)` | method |
| `GetAllEntitiesWithScriptComponent` | `public void GetAllEntitiesWithScriptComponent<T>(ref List<GameEntity>entities) where T : ScriptComponentBehavior` | method |
| `GetFirstEntityWithScriptComponent` | `public GameEntity GetFirstEntityWithScriptComponent<T>() where T : ScriptComponentBehavior` | method |
| `GetFirstEntityWithScriptComponent` | `public GameEntity GetFirstEntityWithScriptComponent(string scriptName)` | method |
| `GetUpgradeLevelMaskOfLevelName` | `public uint GetUpgradeLevelMaskOfLevelName(string levelName)` | method |
| `GetUpgradeLevelNameOfIndex` | `public string GetUpgradeLevelNameOfIndex(int index)` | method |
| `GetUpgradeLevelCount` | `public int GetUpgradeLevelCount()` | method |
| `GetWinterTimeFactor` | `public float GetWinterTimeFactor()` | method |
| `GetNavMeshFaceFirstVertexZ` | `public float GetNavMeshFaceFirstVertexZ(int faceIndex)` | method |
| `SetWinterTimeFactor` | `public void SetWinterTimeFactor(float winterTimeFactor)` | method |
| `SetDrynessFactor` | `public void SetDrynessFactor(float drynessFactor)` | method |
| `GetFog` | `public float GetFog()` | method |
| `SetFog` | `public void SetFog(float fogDensity, ref Vec3 fogColor, float fogFalloff)` | method |
| `SetFogAdvanced` | `public void SetFogAdvanced(float fogFalloffOffset, float fogFalloffMinFog, float fogFalloffStartDist)` | method |
| `SetFogAmbientColor` | `public void SetFogAmbientColor(ref Vec3 fogAmbientColor)` | method |
| `SetTemperature` | `public void SetTemperature(float temperature)` | method |
| `SetHumidity` | `public void SetHumidity(float humidity)` | method |
| `SetDynamicShadowmapCascadesRadiusMultiplier` | `public void SetDynamicShadowmapCascadesRadiusMultiplier(float multiplier)` | method |
| `SetEnvironmentMultiplier` | `public void SetEnvironmentMultiplier(bool useMultiplier, float multiplier)` | method |
| `SetSkyRotation` | `public void SetSkyRotation(float rotation)` | method |
| `SetSkyBrightness` | `public void SetSkyBrightness(float brightness)` | method |
| `SetForcedSnow` | `public void SetForcedSnow(bool value)` | method |
| `SetSunLight` | `public void SetSunLight(ref Vec3 color, ref Vec3 direction)` | method |
| `SetSunDirection` | `public void SetSunDirection(ref Vec3 direction)` | method |
| `SetSun` | `public void SetSun(ref Vec3 color, float altitude, float angle, float intensity)` | method |
| `SetSunAngleAltitude` | `public void SetSunAngleAltitude(float angle, float altitude)` | method |
| `SetSunSize` | `public void SetSunSize(float size)` | method |
| `SetSunShaftStrength` | `public void SetSunShaftStrength(float strength)` | method |
| `GetRainDensity` | `public float GetRainDensity()` | method |
| `SetRainDensity` | `public void SetRainDensity(float density)` | method |
| `GetSnowDensity` | `public float GetSnowDensity()` | method |
| `SetSnowDensity` | `public void SetSnowDensity(float density)` | method |
| `AddDecalInstance` | `public void AddDecalInstance(Decal decal, string decalSetID, bool deletable)` | method |
| `RemoveDecalInstance` | `public void RemoveDecalInstance(Decal decal, string decalSetID)` | method |
| `SetShadow` | `public void SetShadow(bool shadowEnabled)` | method |
| `AddPointLight` | `public int AddPointLight(ref Vec3 position, float radius)` | method |
| `AddDirectionalLight` | `public int AddDirectionalLight(ref Vec3 position, ref Vec3 direction, float radius)` | method |
| `SetLightPosition` | `public void SetLightPosition(int lightIndex, ref Vec3 position)` | method |
| `SetLightDiffuseColor` | `public void SetLightDiffuseColor(int lightIndex, ref Vec3 diffuseColor)` | method |
| `SetLightDirection` | `public void SetLightDirection(int lightIndex, ref Vec3 direction)` | method |
| `SetMieScatterFocus` | `public void SetMieScatterFocus(float strength)` | method |
| `SetMieScatterStrength` | `public void SetMieScatterStrength(float strength)` | method |
| `SetBrightpassThreshold` | `public void SetBrightpassThreshold(float threshold)` | method |
| `SetLensDistortion` | `public void SetLensDistortion(float amount)` | method |
| `SetHexagonVignetteAlpha` | `public void SetHexagonVignetteAlpha(float amount)` | method |
| `SetMinExposure` | `public void SetMinExposure(float minExposure)` | method |
| `SetMaxExposure` | `public void SetMaxExposure(float maxExposure)` | method |
| `SetTargetExposure` | `public void SetTargetExposure(float targetExposure)` | method |
| `SetMiddleGray` | `public void SetMiddleGray(float middleGray)` | method |
| `SetBloomStrength` | `public void SetBloomStrength(float bloomStrength)` | method |
| `SetBloomAmount` | `public void SetBloomAmount(float bloomAmount)` | method |
| `SetGrainAmount` | `public void SetGrainAmount(float grainAmount)` | method |
| `AddItemEntity` | `public GameEntity AddItemEntity(ref MatrixFrame placementFrame, MetaMesh metaMesh)` | method |
| `RemoveEntity` | `public void RemoveEntity(GameEntity entity, int removeReason)` | method |
| `RemoveEntity` | `public void RemoveEntity(WeakGameEntity entity, int removeReason)` | method |
| `AttachEntity` | `public bool AttachEntity(GameEntity entity, bool showWarnings = false)` | method |
| `AttachEntity` | `public bool AttachEntity(WeakGameEntity entity, bool showWarnings = false)` | method |
| `AddEntityWithMesh` | `public void AddEntityWithMesh(Mesh mesh, ref MatrixFrame frame)` | method |
| `AddEntityWithMultiMesh` | `public void AddEntityWithMultiMesh(MetaMesh mesh, ref MatrixFrame frame)` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `ClearAll` | `public void ClearAll()` | method |
| `SetDefaultLighting` | `public void SetDefaultLighting()` | method |
| `CalculateEffectiveLighting` | `public bool CalculateEffectiveLighting()` | method |
| `GetPathDistanceBetweenPositions` | `public bool GetPathDistanceBetweenPositions(ref WorldPosition point0, ref WorldPosition point1, float agentRadius, out float pathDistance)` | method |
| `IsLineToPointClear` | `public bool IsLineToPointClear(ref WorldPosition position, ref WorldPosition destination, float agentRadius)` | method |
| `IsLineToPointClear` | `public bool IsLineToPointClear(UIntPtr startingFace, Vec2 position, Vec2 destination, float agentRadius)` | method |
| `IsLineToPointClear` | `public bool IsLineToPointClear(int startingFace, Vec2 position, Vec2 destination, float agentRadius)` | method |
| `GetLastPointOnNavigationMeshFromPositionToDestination` | `public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(int startingFace, Vec2 position, Vec2 destination, int[]excludedFaceIds)` | method |
| `GetLastPositionOnNavMeshFaceForPointAndDirection` | `public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord record, Vec2 position, Vec2 destination)` | method |
| `GetLastPointOnNavigationMeshFromWorldPositionToDestination` | `public Vec3 GetLastPointOnNavigationMeshFromWorldPositionToDestination(ref WorldPosition position, Vec2 destination)` | method |
| `DoesPathExistBetweenFaces` | `public bool DoesPathExistBetweenFaces(int firstNavMeshFace, int secondNavMeshFace, bool ignoreDisabled)` | method |
| `GetHeightAtPoint` | `public bool GetHeightAtPoint(Vec2 point, BodyFlags excludeBodyFlags, ref float height)` | method |
| `GetNormalAt` | `public Vec3 GetNormalAt(Vec2 position)` | method |
| `GetEntities` | `public void GetEntities(ref List<GameEntity>entities)` | method |
| `GetRootEntities` | `public void GetRootEntities(NativeObjectArray entities)` | method |
| `RootEntityCount` | `public int RootEntityCount` | property |
| `SelectEntitiesInBoxWithScriptComponent` | `public int SelectEntitiesInBoxWithScriptComponent<T>(ref Vec3 boundingBoxMin, ref Vec3 boundingBoxMax, WeakGameEntity[]entitiesOutput, UIntPtr[]entityIds, bool isFixedTick) where T : ScriptComponentBehavior` | method |
| `SelectEntitiesCollidedWith` | `public int SelectEntitiesCollidedWith(ref Ray ray, Intersection[]intersectionsOutput, UIntPtr[]entityIds)` | method |
| `RayCastExcludingTwoEntities` | `public bool RayCastExcludingTwoEntities(BodyFlags flags, in Ray ray, WeakGameEntity entity1, WeakGameEntity entity2)` | method |
| `GenerateContactsWithCapsule` | `public int GenerateContactsWithCapsule(ref CapsuleData capsule, BodyFlags exclude_flags, bool isFixedTick, Intersection[]intersectionsOutput, WeakGameEntity[]gameEntities, UIntPtr[]entityPointers)` | method |
| `GenerateContactsWithCapsuleAgainstEntity` | `public int GenerateContactsWithCapsuleAgainstEntity(ref CapsuleData capsule, BodyFlags excludeFlags, WeakGameEntity entity, Intersection[]intersectionsOutput)` | method |
| `InvalidateTerrainPhysicsMaterials` | `public void InvalidateTerrainPhysicsMaterials()` | method |
| `Read` | `public void Read(string sceneName)` | method |
| `Read` | `public void Read(string sceneName, string moduleId, ref SceneInitializationData initData, string forcedAtmoName = "")` | method |
| `Read` | `public void Read(string sceneName, ref SceneInitializationData initData, string forcedAtmoName = "")` | method |
| `ReadAndCalculateInitialCamera` | `public MatrixFrame ReadAndCalculateInitialCamera()` | method |
| `OptimizeScene` | `public void OptimizeScene(bool optimizeFlora = true, bool optimizeOro = false)` | method |
| `GetTerrainHeight` | `public float GetTerrainHeight(Vec2 position, bool checkHoles = true)` | method |
| `CheckResources` | `public void CheckResources(bool checkInvisibleEntities)` | method |
| `ForceLoadResources` | `public void ForceLoadResources(bool checkInvisibleEntities)` | method |
| `SetDepthOfFieldParameters` | `public void SetDepthOfFieldParameters(float depthOfFieldFocusStart, float depthOfFieldFocusEnd, bool isVignetteOn)` | method |
| `SetDepthOfFieldFocus` | `public void SetDepthOfFieldFocus(float depthOfFieldFocus)` | method |
| `ResetDepthOfFieldParams` | `public void ResetDepthOfFieldParams()` | method |
| `HasTerrainHeightmap` | `public bool HasTerrainHeightmap` | property |
| `ContainsTerrain` | `public bool ContainsTerrain` | property |
| `TimeOfDay` | `public float TimeOfDay` | property |
| `IsDayTime` | `public bool IsDayTime` | property |
| `IsAtmosphereIndoor` | `public bool IsAtmosphereIndoor` | property |
| `PreloadForRendering` | `public void PreloadForRendering()` | method |
| `LastFinalRenderCameraPosition` | `public Vec3 LastFinalRenderCameraPosition` | property |
| `LastFinalRenderCameraFrame` | `public MatrixFrame LastFinalRenderCameraFrame` | property |
| `SetColorGradeBlend` | `public void SetColorGradeBlend(string texture1, string texture2, float alpha)` | method |
| `GetGroundHeightAtPosition` | `public float GetGroundHeightAtPosition(Vec3 position, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)` | method |
| `GetGroundHeightAndBodyFlagsAtPosition` | `public float GetGroundHeightAndBodyFlagsAtPosition(Vec3 position, out BodyFlags contactPointFlags, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)` | method |
| `GetGroundHeightAtPosition` | `public float GetGroundHeightAtPosition(Vec3 position, out Vec3 normal, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)` | method |
| `PauseSceneSounds` | `public void PauseSceneSounds()` | method |
| `ResumeSceneSounds` | `public void ResumeSceneSounds()` | method |
| `FinishSceneSounds` | `public void FinishSceneSounds()` | method |
| `BoxCastOnlyForCamera` | `public bool BoxCastOnlyForCamera(Vec3[]boxPoints, in Vec3 centerPoint, bool castSupportRay, in Vec3 supportRaycastPoint, in Vec3 dir, float distance, WeakGameEntity ignoredEntity, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.Disabled | BodyFlags.Dynamic | BodyFlags.Ladder | BodyFlags.OnlyCollideWithRaycast | BodyFlags.AILimiter | BodyFlags.Barrier | BodyFlags.Barrier3D | BodyFlags.Ragdoll | BodyFlags.RagdollLimiter | BodyFlags.DroppedItem | BodyFlags.DoNotCollideWithRaycast | BodyFlags.DontCollideWithCamera | BodyFlags.WaterBody | BodyFlags.AgentOnly | BodyFlags.MissileOnly | BodyFlags.StealthBox)` | method |
| `BoxCast` | `public bool BoxCast(Vec3 boxMin, Vec3 boxMax, bool castSupportRay, Vec3 supportRaycastPoint, Vec3 dir, float distance, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.CameraCollisionRayCastExludeFlags)` | method |
| `RayCastForClosestEntityOrTerrain` | `public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |
| `RayCastForClosestEntityOrTerrainFixedPhysics` | `public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |
| `FocusRayCastForFixedPhysics` | `public bool FocusRayCastForFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |
| `RayCastForClosestEntityOrTerrain` | `public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |
| `RayCastForClosestEntityOrTerrainFixedPhysics` | `public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |
| `RayCastForRamming` | `public bool RayCastForRamming(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, float rayThickness, out float collisionDistance, out Vec3 intersectionPoint, out WeakGameEntity collidedEntity, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags, BodyFlags includeBodyFlags = BodyFlags.None)` | method |
| `RayCastForClosestEntityOrTerrainIgnoreEntity` | `public bool RayCastForClosestEntityOrTerrainIgnoreEntity(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, out float collisionDistance, out GameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |
| `RayCastForClosestEntityOrTerrain` | `public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |
| `RayCastForClosestEntityOrTerrainFixedPhysics` | `public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |
| `RayCastForClosestEntityOrTerrainFixedPhysics` | `public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |
| `RayCastForClosestEntityOrTerrain` | `public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |
| `ImportNavigationMeshPrefab` | `public void ImportNavigationMeshPrefab(string navMeshPrefabName, int navMeshGroupShift)` | method |
| `ImportNavigationMeshPrefabWithFrame` | `public void ImportNavigationMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)` | method |
| `SaveNavMeshPrefabWithFrame` | `public void SaveNavMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)` | method |
| `SetNavMeshRegionMap` | `public void SetNavMeshRegionMap(bool[]regionMap)` | method |
| `MarkFacesWithIdAsLadder` | `public void MarkFacesWithIdAsLadder(int faceGroupId, bool isLadder)` | method |
| `SetAbilityOfFacesWithId` | `public int SetAbilityOfFacesWithId(int faceGroupId, bool isEnabled)` | method |
| `SetBlockerDirectionForFacesWithId` | `public void SetBlockerDirectionForFacesWithId(int faceGroupId, float rotation)` | method |
| `SwapFaceConnectionsWithID` | `public bool SwapFaceConnectionsWithID(int hubFaceGroupID, int toBeSeparatedFaceGroupId, int toBeMergedFaceGroupId, bool canFail)` | method |
| `MergeFacesWithId` | `public void MergeFacesWithId(int faceGroupId0, int faceGroupId1, int newFaceGroupId)` | method |
| `SeparateFacesWithId` | `public void SeparateFacesWithId(int faceGroupId0, int faceGroupId1)` | method |
| `IsAnyFaceWithId` | `public bool IsAnyFaceWithId(int faceGroupId)` | method |
| `GetNavigationMeshForPosition` | `public UIntPtr GetNavigationMeshForPosition(in Vec3 position)` | method |
| `GetNearestNavigationMeshForPosition` | `public UIntPtr GetNearestNavigationMeshForPosition(in Vec3 position, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)` | method |
| `GetNavigationMeshForPosition` | `public UIntPtr GetNavigationMeshForPosition(in Vec3 position, out int faceGroupId, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)` | method |
| `DoesPathExistBetweenPositions` | `public bool DoesPathExistBetweenPositions(WorldPosition position, WorldPosition destination)` | method |
| `SetLandscapeRainMaskData` | `public void SetLandscapeRainMaskData(byte[]data)` | method |
| `EnsurePostfxSystem` | `public void EnsurePostfxSystem()` | method |
| `SetBloom` | `public void SetBloom(bool mode)` | method |
| `SetDofMode` | `public void SetDofMode(bool mode)` | method |
| `SetOcclusionMode` | `public void SetOcclusionMode(bool mode)` | method |
| `SetExternalInjectionTexture` | `public void SetExternalInjectionTexture(Texture texture)` | method |
| `SetSunshaftMode` | `public void SetSunshaftMode(bool mode)` | method |
| `GetSunDirection` | `public Vec3 GetSunDirection()` | method |
| `GetNorthAngle` | `public float GetNorthAngle()` | method |
| `GetNorthRotation` | `public float GetNorthRotation()` | method |
| `GetTerrainMinMaxHeight` | `public bool GetTerrainMinMaxHeight(out float minHeight, out float maxHeight)` | method |
| `GetPhysicsMinMax` | `public void GetPhysicsMinMax(ref Vec3 min_max)` | method |
| `IsEditorScene` | `public bool IsEditorScene()` | method |
| `SetMotionBlurMode` | `public void SetMotionBlurMode(bool mode)` | method |
| `SetAntialiasingMode` | `public void SetAntialiasingMode(bool mode)` | method |
| `SetDLSSMode` | `public void SetDLSSMode(bool mode)` | method |
| `IEnumerable` | `public IEnumerable<WeakGameEntity>FindWeakEntitiesWithTag(string tag)` | method |
| `FindWeakEntityWithTag` | `public WeakGameEntity FindWeakEntityWithTag(string tag)` | method |
| `IEnumerable` | `public IEnumerable<GameEntity>FindEntitiesWithTag(string tag)` | method |
| `FindEntityWithTag` | `public GameEntity FindEntityWithTag(string tag)` | method |
| `FindEntityWithName` | `public GameEntity FindEntityWithName(string name)` | method |
| `IEnumerable` | `public IEnumerable<WeakGameEntity>FindWeakEntitiesWithTagExpression(string expression)` | method |
| `IEnumerable` | `public IEnumerable<GameEntity>FindEntitiesWithTagExpression(string expression)` | method |
| `GetSoftBoundaryVertexCount` | `public int GetSoftBoundaryVertexCount()` | method |
| `GetHardBoundaryVertexCount` | `public int GetHardBoundaryVertexCount()` | method |
| `GetSoftBoundaryVertex` | `public Vec2 GetSoftBoundaryVertex(int index)` | method |
| `GetHardBoundaryVertex` | `public Vec2 GetHardBoundaryVertex(int index)` | method |
| `GetPathWithName` | `public Path GetPathWithName(string name)` | method |
| `DeletePathWithName` | `public void DeletePathWithName(string name)` | method |
| `AddPath` | `public void AddPath(string name)` | method |
| `AddPathPoint` | `public void AddPathPoint(string name, MatrixFrame frame)` | method |
| `GetBoundingBox` | `public void GetBoundingBox(out Vec3 min, out Vec3 max)` | method |
| `GetSceneLimits` | `public void GetSceneLimits(out Vec3 min, out Vec3 max)` | method |
| `SetName` | `public void SetName(string name)` | method |
| `GetName` | `public string GetName()` | method |
| `GetModulePath` | `public string GetModulePath()` | method |
| `TimeSpeed` | `public float TimeSpeed` | property |
| `SetOwnerThread` | `public void SetOwnerThread()` | method |
| `Path[]GetPathsWithNamePrefix` | `public Path[]GetPathsWithNamePrefix(string prefix)` | method |
| `SetUseConstantTime` | `public void SetUseConstantTime(bool value)` | method |
| `CheckPointCanSeePoint` | `public bool CheckPointCanSeePoint(Vec3 source, Vec3 target, float? distanceToCheck = null)` | method |
| `SetPlaySoundEventsAfterReadyToRender` | `public void SetPlaySoundEventsAfterReadyToRender(bool value)` | method |
| `DisableStaticShadows` | `public void DisableStaticShadows(bool value)` | method |
| `GetSkyboxMesh` | `public Mesh GetSkyboxMesh()` | method |
| `SetAtmosphereWithName` | `public void SetAtmosphereWithName(string name)` | method |
| `FillEntityWithHardBorderPhysicsBarrier` | `public void FillEntityWithHardBorderPhysicsBarrier(GameEntity entity)` | method |
| `ClearDecals` | `public void ClearDecals()` | method |
| `SetPhotoAtmosphereViaTod` | `public void SetPhotoAtmosphereViaTod(float tod, bool withStorm)` | method |
| `IsPositionOnADynamicNavMesh` | `public bool IsPositionOnADynamicNavMesh(Vec3 position)` | method |
| `WaitWaterRendererCPUSimulation` | `public void WaitWaterRendererCPUSimulation()` | method |
| `EnableInclusiveAsyncPhysx` | `public void EnableInclusiveAsyncPhysx()` | method |
| `EnsureWaterWakeRenderer` | `public void EnsureWaterWakeRenderer()` | method |
| `DeleteWaterWakeRenderer` | `public void DeleteWaterWakeRenderer()` | method |
| `SceneHadWaterWakeRenderer` | `public bool SceneHadWaterWakeRenderer()` | method |
| `SetWaterWakeWorldSize` | `public void SetWaterWakeWorldSize(float worldSize, float eraseFactor)` | method |
| `SetWaterWakeCameraOffset` | `public void SetWaterWakeCameraOffset(float cameraOffset)` | method |
| `TickWake` | `public void TickWake(float dt)` | method |
| `SetDoNotAddEntitiesToTickList` | `public void SetDoNotAddEntitiesToTickList(bool value)` | method |
| `SetDontLoadInvisibleEntities` | `public void SetDontLoadInvisibleEntities(bool value)` | method |
| `SetUsesDeleteLaterSystem` | `public void SetUsesDeleteLaterSystem(bool value)` | method |
| `HandleCurrentFrameTickEntities` | `public void HandleCurrentFrameTickEntities()` | method |
| `ClearCurrentFrameTickEntities` | `public void ClearCurrentFrameTickEntities()` | method |
| `SetUseAdvancedWaterRendering` | `public void SetUseAdvancedWaterRendering(bool value)` | method |
| `FindClosestExitPositionForPositionOnABoundaryFace` | `public Vec2 FindClosestExitPositionForPositionOnABoundaryFace(Vec3 position, UIntPtr boundaryFacePointer)` | method |
| `MaximumWindSpeed` | `public static float MaximumWindSpeed` | field |
| `AutoClimbHeight` | `public const float AutoClimbHeight` | field |
| `NavMeshHeightLimit` | `public const float NavMeshHeightLimit` | field |
| `SunRise` | `public const int SunRise` | field |
| `SunSet` | `public const int SunSet` | field |
| `PhysicsAndRayCastLock` | `public static readonly TWSharedMutex PhysicsAndRayCastLock` | field |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
