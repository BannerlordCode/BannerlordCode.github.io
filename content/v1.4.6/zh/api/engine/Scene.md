---
title: "Scene"
description: "Scene：TaleWorlds.Engine 的 public 类，继承 NativeObject；公开成员 302 个（方法 287、属性 9、字段 6）。源文件 TaleWorlds.Engine/Scene.cs。"
---
# Scene

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Scene : NativeObject`
**File:** `TaleWorlds.Engine/Scene.cs`

## 概述

Scene 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Scene.cs。它是一个 public 类（sealed），实现/继承 NativeObject，继承链为 Scene → NativeObject。public/protected 成员共 302 个：287 方法、9 属性、6 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Scene 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 Scene → NativeObject。成员构成以方法为主（方法 287/302，属性 9/302），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Scene.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDefaultEditorScene` | `public bool IsDefaultEditorScene()` | 方法 |
| `IsMultiplayerScene` | `public bool IsMultiplayerScene()` | 方法 |
| `TakePhotoModePicture` | `public string TakePhotoModePicture(bool saveAmbientOcclusionPass, bool savingObjectIdPass, bool saveShadowPass)` | 方法 |
| `GetAllColorGradeNames` | `public string GetAllColorGradeNames()` | 方法 |
| `GetAllFilterNames` | `public string GetAllFilterNames()` | 方法 |
| `GetPhotoModeRoll` | `public float GetPhotoModeRoll()` | 方法 |
| `GetPhotoModeOrbit` | `public bool GetPhotoModeOrbit()` | 方法 |
| `GetPhotoModeOn` | `public bool GetPhotoModeOn()` | 方法 |
| `GetPhotoModeFocus` | `public void GetPhotoModeFocus(ref float focus, ref float focusStart, ref float focusEnd, ref float exposure, ref bool vignetteOn)` | 方法 |
| `GetSceneColorGradeIndex` | `public int GetSceneColorGradeIndex()` | 方法 |
| `GetSceneFilterIndex` | `public int GetSceneFilterIndex()` | 方法 |
| `EnableFixedTick` | `public void EnableFixedTick()` | 方法 |
| `GetLoadingStateName` | `public string GetLoadingStateName()` | 方法 |
| `IsLoadingFinished` | `public bool IsLoadingFinished()` | 方法 |
| `SetPhotoModeRoll` | `public void SetPhotoModeRoll(float roll)` | 方法 |
| `SetPhotoModeOrbit` | `public void SetPhotoModeOrbit(bool orbit)` | 方法 |
| `GetFallDensity` | `public float GetFallDensity()` | 方法 |
| `SetPhotoModeOn` | `public void SetPhotoModeOn(bool on)` | 方法 |
| `SetPhotoModeFocus` | `public void SetPhotoModeFocus(float focusStart, float focusEnd, float focus, float exposure)` | 方法 |
| `SetPhotoModeFov` | `public void SetPhotoModeFov(float verticalFov)` | 方法 |
| `GetPhotoModeFov` | `public float GetPhotoModeFov()` | 方法 |
| `HasDecalRenderer` | `public bool HasDecalRenderer()` | 方法 |
| `SetPhotoModeVignette` | `public void SetPhotoModeVignette(bool vignetteOn)` | 方法 |
| `SetSceneColorGradeIndex` | `public void SetSceneColorGradeIndex(int index)` | 方法 |
| `SetSceneFilterIndex` | `public int SetSceneFilterIndex(int index)` | 方法 |
| `SetSceneColorGrade` | `public void SetSceneColorGrade(string textureName)` | 方法 |
| `SetUpgradeLevel` | `public void SetUpgradeLevel(int level)` | 方法 |
| `CreateBurstParticle` | `public void CreateBurstParticle(int particleId, MatrixFrame frame)` | 方法 |
| `float[]GetTerrainHeightData` | `public float[]GetTerrainHeightData(int nodeXIndex, int nodeYIndex)` | 方法 |
| `short[]GetTerrainPhysicsMaterialIndexData` | `public short[]GetTerrainPhysicsMaterialIndexData(int nodeXIndex, int nodeYIndex)` | 方法 |
| `GetTerrainData` | `public void GetTerrainData(out Vec2i nodeDimension, out float nodeSize, out int layerCount, out int layerVersion)` | 方法 |
| `GetTerrainNodeData` | `public void GetTerrainNodeData(int xIndex, int yIndex, out int vertexCountAlongAxis, out float quadLength, out float minHeight, out float maxHeight)` | 方法 |
| `GetTerrainPhysicsMaterialAtLayer` | `public PhysicsMaterial GetTerrainPhysicsMaterialAtLayer(int layerIndex)` | 方法 |
| `SetSceneColorGrade` | `public void SetSceneColorGrade(Scene scene, string textureName)` | 方法 |
| `GetWaterLevel` | `public float GetWaterLevel()` | 方法 |
| `GetWaterLevelAtPosition` | `public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)` | 方法 |
| `GetWaterSpeedAtPosition` | `public Vec3 GetWaterSpeedAtPosition(Vec2 position, bool doChoppinessCorrection)` | 方法 |
| `GetBulkWaterLevelAtPositions` | `public void GetBulkWaterLevelAtPositions(Vec2[]waterHeightQueryArray, ref float[]waterHeightsAtVolumes, ref Vec3[]waterSurfaceNormals)` | 方法 |
| `GetInterpolationFactorForBodyWorldTransformSmoothing` | `public void GetInterpolationFactorForBodyWorldTransformSmoothing(out float interpolationFactor, out float fixedDt)` | 方法 |
| `GetBulkWaterLevelAtVolumes` | `public void GetBulkWaterLevelAtVolumes(UIntPtr waterHeightQueryArray, int waterHeightQueryArrayCount, in MatrixFrame globalFrame)` | 方法 |
| `GetWaterStrength` | `public float GetWaterStrength()` | 方法 |
| `DeRegisterShipVisual` | `public void DeRegisterShipVisual(UIntPtr visualPointer)` | 方法 |
| `RegisterShipVisualToWaterRenderer` | `public UIntPtr RegisterShipVisualToWaterRenderer(WeakGameEntity entity, in Vec3 waterEffectBB)` | 方法 |
| `SetWaterStrength` | `public void SetWaterStrength(float newWaterStrength)` | 方法 |
| `AddWaterWakeWithSphere` | `public void AddWaterWakeWithSphere(Vec3 position, float radius, float wakeVisibility, float foamVisibility)` | 方法 |
| `AddWaterWakeWithCapsule` | `public void AddWaterWakeWithCapsule(Vec3 positionA, float radiusA, Vec3 positionB, float radiusB, float wakeVisibility, float foamVisibility)` | 方法 |
| `GetPathBetweenAIFaces` | `public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds)` | 方法 |
| `HasNavmeshFaceUnsharedEdges` | `public bool HasNavmeshFaceUnsharedEdges(in PathFaceRecord faceRecord)` | 方法 |
| `GetNavmeshFaceCountBetweenTwoIds` | `public int GetNavmeshFaceCountBetweenTwoIds(int firstId, int secondId)` | 方法 |
| `GetNavmeshFaceRecordsBetweenTwoIds` | `public void GetNavmeshFaceRecordsBetweenTwoIds(int firstId, int secondId, PathFaceRecord[]faceRecords)` | 方法 |
| `SetFixedTickCallbackActive` | `public void SetFixedTickCallbackActive(bool isActive)` | 方法 |
| `SetOnCollisionFilterCallbackActive` | `public void SetOnCollisionFilterCallbackActive(bool isActive)` | 方法 |
| `GetPathBetweenAIFaces` | `public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)` | 方法 |
| `GetPathBetweenAIFaces` | `public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds, float extraCostMultiplier)` | 方法 |
| `GetPathBetweenAIFaces` | `public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int[]excludedFaceIds, float extraCostMultiplier, int regionSwitchCostTo0, int regionSwitchCostTo1)` | 方法 |
| `GetPathDistanceBetweenAIFaces` | `public bool GetPathDistanceBetweenAIFaces(int startingAiFace, int endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int[]excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)` | 方法 |
| `GetNavMeshFaceIndex` | `public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec2 position, bool isRegion1, bool checkIfDisabled, bool ignoreHeight = false)` | 方法 |
| `GetNavMeshFaceIndex` | `public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec3 position, bool checkIfDisabled)` | 方法 |
| `CreateNewScene` | `public static Scene CreateNewScene(bool initialize_physics = true, bool enable_decals = true, DecalAtlasGroup atlasGroup = DecalAtlasGroup.All, string sceneName = " ")` | 方法 |
| `AddAlwaysRenderedSkeleton` | `public void AddAlwaysRenderedSkeleton(Skeleton skeleton)` | 方法 |
| `RemoveAlwaysRenderedSkeleton` | `public void RemoveAlwaysRenderedSkeleton(Skeleton skeleton)` | 方法 |
| `CreatePathMesh` | `public MetaMesh CreatePathMesh(string baseEntityName, bool isWaterPath)` | 方法 |
| `SetActiveVisibilityLevels` | `public void SetActiveVisibilityLevels(List<string>levelsToActivate)` | 方法 |
| `SetDoNotWaitForLoadingStatesToRender` | `public void SetDoNotWaitForLoadingStatesToRender(bool value)` | 方法 |
| `SetDynamicSnowTexture` | `public void SetDynamicSnowTexture(Texture texture)` | 方法 |
| `GetWindFlowMapData` | `public void GetWindFlowMapData(float[]flowMapData)` | 方法 |
| `CreateDynamicRainTexture` | `public void CreateDynamicRainTexture(int w, int h)` | 方法 |
| `CreatePathMesh` | `public MetaMesh CreatePathMesh(IList<GameEntity>pathNodes, bool isWaterPath = false)` | 方法 |
| `GetEntityWithGuid` | `public GameEntity GetEntityWithGuid(string guid)` | 方法 |
| `IsEntityFrameChanged` | `public bool IsEntityFrameChanged(string containsName)` | 方法 |
| `GetTerrainHeightAndNormal` | `public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)` | 方法 |
| `GetFloraInstanceCount` | `public int GetFloraInstanceCount()` | 方法 |
| `GetFloraRendererTextureUsage` | `public int GetFloraRendererTextureUsage()` | 方法 |
| `GetTerrainMemoryUsage` | `public int GetTerrainMemoryUsage()` | 方法 |
| `SetFetchCrcInfoOfScene` | `public void SetFetchCrcInfoOfScene(bool value)` | 方法 |
| `GetSceneXMLCRC` | `public uint GetSceneXMLCRC()` | 方法 |
| `GetNavigationMeshCRC` | `public uint GetNavigationMeshCRC()` | 方法 |
| `SetGlobalWindStrengthVector` | `public void SetGlobalWindStrengthVector(in Vec2 windVector)` | 方法 |
| `GetGlobalWindStrengthVector` | `public Vec2 GetGlobalWindStrengthVector()` | 方法 |
| `GetGlobalWindVelocity` | `public Vec2 GetGlobalWindVelocity()` | 方法 |
| `SetGlobalWindVelocity` | `public void SetGlobalWindVelocity(in Vec2 windVector)` | 方法 |
| `GetEnginePhysicsEnabled` | `public bool GetEnginePhysicsEnabled()` | 方法 |
| `ClearNavMesh` | `public void ClearNavMesh()` | 方法 |
| `StallLoadingRenderingsUntilFurtherNotice` | `public void StallLoadingRenderingsUntilFurtherNotice()` | 方法 |
| `GetNavMeshFaceCount` | `public int GetNavMeshFaceCount()` | 方法 |
| `ResumeLoadingRenderings` | `public void ResumeLoadingRenderings()` | 方法 |
| `GetUpgradeLevelMask` | `public uint GetUpgradeLevelMask()` | 方法 |
| `SetUpgradeLevelVisibility` | `public void SetUpgradeLevelVisibility(uint mask)` | 方法 |
| `SetUpgradeLevelVisibility` | `public void SetUpgradeLevelVisibility(List<string>levels)` | 方法 |
| `GetIdOfNavMeshFace` | `public int GetIdOfNavMeshFace(int faceIndex)` | 方法 |
| `SetClothSimulationState` | `public void SetClothSimulationState(bool state)` | 方法 |
| `GetNavMeshCenterPosition` | `public void GetNavMeshCenterPosition(int faceIndex, ref Vec3 centerPosition)` | 方法 |
| `GetNavMeshPathFaceRecord` | `public PathFaceRecord GetNavMeshPathFaceRecord(int faceIndex)` | 方法 |
| `GetPathFaceRecordFromNavMeshFacePointer` | `public PathFaceRecord GetPathFaceRecordFromNavMeshFacePointer(UIntPtr navMeshFacePointer)` | 方法 |
| `GetAllNavmeshFaceRecords` | `public void GetAllNavmeshFaceRecords(PathFaceRecord[]faceRecords)` | 方法 |
| `GetFirstEntityWithName` | `public GameEntity GetFirstEntityWithName(string name)` | 方法 |
| `GetCampaignEntityWithName` | `public GameEntity GetCampaignEntityWithName(string name)` | 方法 |
| `GetAllEntitiesWithScriptComponent` | `public void GetAllEntitiesWithScriptComponent<T>(ref List<GameEntity>entities) where T : ScriptComponentBehavior` | 方法 |
| `GetFirstEntityWithScriptComponent` | `public GameEntity GetFirstEntityWithScriptComponent<T>() where T : ScriptComponentBehavior` | 方法 |
| `GetFirstEntityWithScriptComponent` | `public GameEntity GetFirstEntityWithScriptComponent(string scriptName)` | 方法 |
| `GetUpgradeLevelMaskOfLevelName` | `public uint GetUpgradeLevelMaskOfLevelName(string levelName)` | 方法 |
| `GetUpgradeLevelNameOfIndex` | `public string GetUpgradeLevelNameOfIndex(int index)` | 方法 |
| `GetUpgradeLevelCount` | `public int GetUpgradeLevelCount()` | 方法 |
| `GetWinterTimeFactor` | `public float GetWinterTimeFactor()` | 方法 |
| `GetNavMeshFaceFirstVertexZ` | `public float GetNavMeshFaceFirstVertexZ(int faceIndex)` | 方法 |
| `SetWinterTimeFactor` | `public void SetWinterTimeFactor(float winterTimeFactor)` | 方法 |
| `SetDrynessFactor` | `public void SetDrynessFactor(float drynessFactor)` | 方法 |
| `GetFog` | `public float GetFog()` | 方法 |
| `SetFog` | `public void SetFog(float fogDensity, ref Vec3 fogColor, float fogFalloff)` | 方法 |
| `SetFogAdvanced` | `public void SetFogAdvanced(float fogFalloffOffset, float fogFalloffMinFog, float fogFalloffStartDist)` | 方法 |
| `SetFogAmbientColor` | `public void SetFogAmbientColor(ref Vec3 fogAmbientColor)` | 方法 |
| `SetTemperature` | `public void SetTemperature(float temperature)` | 方法 |
| `SetHumidity` | `public void SetHumidity(float humidity)` | 方法 |
| `SetDynamicShadowmapCascadesRadiusMultiplier` | `public void SetDynamicShadowmapCascadesRadiusMultiplier(float multiplier)` | 方法 |
| `SetEnvironmentMultiplier` | `public void SetEnvironmentMultiplier(bool useMultiplier, float multiplier)` | 方法 |
| `SetSkyRotation` | `public void SetSkyRotation(float rotation)` | 方法 |
| `SetSkyBrightness` | `public void SetSkyBrightness(float brightness)` | 方法 |
| `SetForcedSnow` | `public void SetForcedSnow(bool value)` | 方法 |
| `SetSunLight` | `public void SetSunLight(ref Vec3 color, ref Vec3 direction)` | 方法 |
| `SetSunDirection` | `public void SetSunDirection(ref Vec3 direction)` | 方法 |
| `SetSun` | `public void SetSun(ref Vec3 color, float altitude, float angle, float intensity)` | 方法 |
| `SetSunAngleAltitude` | `public void SetSunAngleAltitude(float angle, float altitude)` | 方法 |
| `SetSunSize` | `public void SetSunSize(float size)` | 方法 |
| `SetSunShaftStrength` | `public void SetSunShaftStrength(float strength)` | 方法 |
| `GetRainDensity` | `public float GetRainDensity()` | 方法 |
| `SetRainDensity` | `public void SetRainDensity(float density)` | 方法 |
| `GetSnowDensity` | `public float GetSnowDensity()` | 方法 |
| `SetSnowDensity` | `public void SetSnowDensity(float density)` | 方法 |
| `AddDecalInstance` | `public void AddDecalInstance(Decal decal, string decalSetID, bool deletable)` | 方法 |
| `RemoveDecalInstance` | `public void RemoveDecalInstance(Decal decal, string decalSetID)` | 方法 |
| `SetShadow` | `public void SetShadow(bool shadowEnabled)` | 方法 |
| `AddPointLight` | `public int AddPointLight(ref Vec3 position, float radius)` | 方法 |
| `AddDirectionalLight` | `public int AddDirectionalLight(ref Vec3 position, ref Vec3 direction, float radius)` | 方法 |
| `SetLightPosition` | `public void SetLightPosition(int lightIndex, ref Vec3 position)` | 方法 |
| `SetLightDiffuseColor` | `public void SetLightDiffuseColor(int lightIndex, ref Vec3 diffuseColor)` | 方法 |
| `SetLightDirection` | `public void SetLightDirection(int lightIndex, ref Vec3 direction)` | 方法 |
| `SetMieScatterFocus` | `public void SetMieScatterFocus(float strength)` | 方法 |
| `SetMieScatterStrength` | `public void SetMieScatterStrength(float strength)` | 方法 |
| `SetBrightpassThreshold` | `public void SetBrightpassThreshold(float threshold)` | 方法 |
| `SetLensDistortion` | `public void SetLensDistortion(float amount)` | 方法 |
| `SetHexagonVignetteAlpha` | `public void SetHexagonVignetteAlpha(float amount)` | 方法 |
| `SetMinExposure` | `public void SetMinExposure(float minExposure)` | 方法 |
| `SetMaxExposure` | `public void SetMaxExposure(float maxExposure)` | 方法 |
| `SetTargetExposure` | `public void SetTargetExposure(float targetExposure)` | 方法 |
| `SetMiddleGray` | `public void SetMiddleGray(float middleGray)` | 方法 |
| `SetBloomStrength` | `public void SetBloomStrength(float bloomStrength)` | 方法 |
| `SetBloomAmount` | `public void SetBloomAmount(float bloomAmount)` | 方法 |
| `SetGrainAmount` | `public void SetGrainAmount(float grainAmount)` | 方法 |
| `AddItemEntity` | `public GameEntity AddItemEntity(ref MatrixFrame placementFrame, MetaMesh metaMesh)` | 方法 |
| `RemoveEntity` | `public void RemoveEntity(GameEntity entity, int removeReason)` | 方法 |
| `RemoveEntity` | `public void RemoveEntity(WeakGameEntity entity, int removeReason)` | 方法 |
| `AttachEntity` | `public bool AttachEntity(GameEntity entity, bool showWarnings = false)` | 方法 |
| `AttachEntity` | `public bool AttachEntity(WeakGameEntity entity, bool showWarnings = false)` | 方法 |
| `AddEntityWithMesh` | `public void AddEntityWithMesh(Mesh mesh, ref MatrixFrame frame)` | 方法 |
| `AddEntityWithMultiMesh` | `public void AddEntityWithMultiMesh(MetaMesh mesh, ref MatrixFrame frame)` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `ClearAll` | `public void ClearAll()` | 方法 |
| `SetDefaultLighting` | `public void SetDefaultLighting()` | 方法 |
| `CalculateEffectiveLighting` | `public bool CalculateEffectiveLighting()` | 方法 |
| `GetPathDistanceBetweenPositions` | `public bool GetPathDistanceBetweenPositions(ref WorldPosition point0, ref WorldPosition point1, float agentRadius, out float pathDistance)` | 方法 |
| `IsLineToPointClear` | `public bool IsLineToPointClear(ref WorldPosition position, ref WorldPosition destination, float agentRadius)` | 方法 |
| `IsLineToPointClear` | `public bool IsLineToPointClear(UIntPtr startingFace, Vec2 position, Vec2 destination, float agentRadius)` | 方法 |
| `IsLineToPointClear` | `public bool IsLineToPointClear(int startingFace, Vec2 position, Vec2 destination, float agentRadius)` | 方法 |
| `GetLastPointOnNavigationMeshFromPositionToDestination` | `public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(int startingFace, Vec2 position, Vec2 destination, int[]excludedFaceIds)` | 方法 |
| `GetLastPositionOnNavMeshFaceForPointAndDirection` | `public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord record, Vec2 position, Vec2 destination)` | 方法 |
| `GetLastPointOnNavigationMeshFromWorldPositionToDestination` | `public Vec3 GetLastPointOnNavigationMeshFromWorldPositionToDestination(ref WorldPosition position, Vec2 destination)` | 方法 |
| `DoesPathExistBetweenFaces` | `public bool DoesPathExistBetweenFaces(int firstNavMeshFace, int secondNavMeshFace, bool ignoreDisabled)` | 方法 |
| `GetHeightAtPoint` | `public bool GetHeightAtPoint(Vec2 point, BodyFlags excludeBodyFlags, ref float height)` | 方法 |
| `GetNormalAt` | `public Vec3 GetNormalAt(Vec2 position)` | 方法 |
| `GetEntities` | `public void GetEntities(ref List<GameEntity>entities)` | 方法 |
| `GetRootEntities` | `public void GetRootEntities(NativeObjectArray entities)` | 方法 |
| `RootEntityCount` | `public int RootEntityCount` | 属性 |
| `SelectEntitiesInBoxWithScriptComponent` | `public int SelectEntitiesInBoxWithScriptComponent<T>(ref Vec3 boundingBoxMin, ref Vec3 boundingBoxMax, WeakGameEntity[]entitiesOutput, UIntPtr[]entityIds, bool isFixedTick) where T : ScriptComponentBehavior` | 方法 |
| `SelectEntitiesCollidedWith` | `public int SelectEntitiesCollidedWith(ref Ray ray, Intersection[]intersectionsOutput, UIntPtr[]entityIds)` | 方法 |
| `RayCastExcludingTwoEntities` | `public bool RayCastExcludingTwoEntities(BodyFlags flags, in Ray ray, WeakGameEntity entity1, WeakGameEntity entity2)` | 方法 |
| `GenerateContactsWithCapsule` | `public int GenerateContactsWithCapsule(ref CapsuleData capsule, BodyFlags exclude_flags, bool isFixedTick, Intersection[]intersectionsOutput, WeakGameEntity[]gameEntities, UIntPtr[]entityPointers)` | 方法 |
| `GenerateContactsWithCapsuleAgainstEntity` | `public int GenerateContactsWithCapsuleAgainstEntity(ref CapsuleData capsule, BodyFlags excludeFlags, WeakGameEntity entity, Intersection[]intersectionsOutput)` | 方法 |
| `InvalidateTerrainPhysicsMaterials` | `public void InvalidateTerrainPhysicsMaterials()` | 方法 |
| `Read` | `public void Read(string sceneName)` | 方法 |
| `Read` | `public void Read(string sceneName, string moduleId, ref SceneInitializationData initData, string forcedAtmoName = "")` | 方法 |
| `Read` | `public void Read(string sceneName, ref SceneInitializationData initData, string forcedAtmoName = "")` | 方法 |
| `ReadAndCalculateInitialCamera` | `public MatrixFrame ReadAndCalculateInitialCamera()` | 方法 |
| `OptimizeScene` | `public void OptimizeScene(bool optimizeFlora = true, bool optimizeOro = false)` | 方法 |
| `GetTerrainHeight` | `public float GetTerrainHeight(Vec2 position, bool checkHoles = true)` | 方法 |
| `CheckResources` | `public void CheckResources(bool checkInvisibleEntities)` | 方法 |
| `ForceLoadResources` | `public void ForceLoadResources(bool checkInvisibleEntities)` | 方法 |
| `SetDepthOfFieldParameters` | `public void SetDepthOfFieldParameters(float depthOfFieldFocusStart, float depthOfFieldFocusEnd, bool isVignetteOn)` | 方法 |
| `SetDepthOfFieldFocus` | `public void SetDepthOfFieldFocus(float depthOfFieldFocus)` | 方法 |
| `ResetDepthOfFieldParams` | `public void ResetDepthOfFieldParams()` | 方法 |
| `HasTerrainHeightmap` | `public bool HasTerrainHeightmap` | 属性 |
| `ContainsTerrain` | `public bool ContainsTerrain` | 属性 |
| `TimeOfDay` | `public float TimeOfDay` | 属性 |
| `IsDayTime` | `public bool IsDayTime` | 属性 |
| `IsAtmosphereIndoor` | `public bool IsAtmosphereIndoor` | 属性 |
| `PreloadForRendering` | `public void PreloadForRendering()` | 方法 |
| `LastFinalRenderCameraPosition` | `public Vec3 LastFinalRenderCameraPosition` | 属性 |
| `LastFinalRenderCameraFrame` | `public MatrixFrame LastFinalRenderCameraFrame` | 属性 |
| `SetColorGradeBlend` | `public void SetColorGradeBlend(string texture1, string texture2, float alpha)` | 方法 |
| `GetGroundHeightAtPosition` | `public float GetGroundHeightAtPosition(Vec3 position, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)` | 方法 |
| `GetGroundHeightAndBodyFlagsAtPosition` | `public float GetGroundHeightAndBodyFlagsAtPosition(Vec3 position, out BodyFlags contactPointFlags, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)` | 方法 |
| `GetGroundHeightAtPosition` | `public float GetGroundHeightAtPosition(Vec3 position, out Vec3 normal, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)` | 方法 |
| `PauseSceneSounds` | `public void PauseSceneSounds()` | 方法 |
| `ResumeSceneSounds` | `public void ResumeSceneSounds()` | 方法 |
| `FinishSceneSounds` | `public void FinishSceneSounds()` | 方法 |
| `BoxCastOnlyForCamera` | `public bool BoxCastOnlyForCamera(Vec3[]boxPoints, in Vec3 centerPoint, bool castSupportRay, in Vec3 supportRaycastPoint, in Vec3 dir, float distance, WeakGameEntity ignoredEntity, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.Disabled | BodyFlags.Dynamic | BodyFlags.Ladder | BodyFlags.OnlyCollideWithRaycast | BodyFlags.AILimiter | BodyFlags.Barrier | BodyFlags.Barrier3D | BodyFlags.Ragdoll | BodyFlags.RagdollLimiter | BodyFlags.DroppedItem | BodyFlags.DoNotCollideWithRaycast | BodyFlags.DontCollideWithCamera | BodyFlags.WaterBody | BodyFlags.AgentOnly | BodyFlags.MissileOnly | BodyFlags.StealthBox)` | 方法 |
| `BoxCast` | `public bool BoxCast(Vec3 boxMin, Vec3 boxMax, bool castSupportRay, Vec3 supportRaycastPoint, Vec3 dir, float distance, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.CameraCollisionRayCastExludeFlags)` | 方法 |
| `RayCastForClosestEntityOrTerrain` | `public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |
| `RayCastForClosestEntityOrTerrainFixedPhysics` | `public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |
| `FocusRayCastForFixedPhysics` | `public bool FocusRayCastForFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |
| `RayCastForClosestEntityOrTerrain` | `public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |
| `RayCastForClosestEntityOrTerrainFixedPhysics` | `public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |
| `RayCastForRamming` | `public bool RayCastForRamming(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, float rayThickness, out float collisionDistance, out Vec3 intersectionPoint, out WeakGameEntity collidedEntity, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags, BodyFlags includeBodyFlags = BodyFlags.None)` | 方法 |
| `RayCastForClosestEntityOrTerrainIgnoreEntity` | `public bool RayCastForClosestEntityOrTerrainIgnoreEntity(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, out float collisionDistance, out GameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |
| `RayCastForClosestEntityOrTerrain` | `public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |
| `RayCastForClosestEntityOrTerrainFixedPhysics` | `public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |
| `RayCastForClosestEntityOrTerrainFixedPhysics` | `public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |
| `RayCastForClosestEntityOrTerrain` | `public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |
| `ImportNavigationMeshPrefab` | `public void ImportNavigationMeshPrefab(string navMeshPrefabName, int navMeshGroupShift)` | 方法 |
| `ImportNavigationMeshPrefabWithFrame` | `public void ImportNavigationMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)` | 方法 |
| `SaveNavMeshPrefabWithFrame` | `public void SaveNavMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)` | 方法 |
| `SetNavMeshRegionMap` | `public void SetNavMeshRegionMap(bool[]regionMap)` | 方法 |
| `MarkFacesWithIdAsLadder` | `public void MarkFacesWithIdAsLadder(int faceGroupId, bool isLadder)` | 方法 |
| `SetAbilityOfFacesWithId` | `public int SetAbilityOfFacesWithId(int faceGroupId, bool isEnabled)` | 方法 |
| `SetBlockerDirectionForFacesWithId` | `public void SetBlockerDirectionForFacesWithId(int faceGroupId, float rotation)` | 方法 |
| `SwapFaceConnectionsWithID` | `public bool SwapFaceConnectionsWithID(int hubFaceGroupID, int toBeSeparatedFaceGroupId, int toBeMergedFaceGroupId, bool canFail)` | 方法 |
| `MergeFacesWithId` | `public void MergeFacesWithId(int faceGroupId0, int faceGroupId1, int newFaceGroupId)` | 方法 |
| `SeparateFacesWithId` | `public void SeparateFacesWithId(int faceGroupId0, int faceGroupId1)` | 方法 |
| `IsAnyFaceWithId` | `public bool IsAnyFaceWithId(int faceGroupId)` | 方法 |
| `GetNavigationMeshForPosition` | `public UIntPtr GetNavigationMeshForPosition(in Vec3 position)` | 方法 |
| `GetNearestNavigationMeshForPosition` | `public UIntPtr GetNearestNavigationMeshForPosition(in Vec3 position, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)` | 方法 |
| `GetNavigationMeshForPosition` | `public UIntPtr GetNavigationMeshForPosition(in Vec3 position, out int faceGroupId, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)` | 方法 |
| `DoesPathExistBetweenPositions` | `public bool DoesPathExistBetweenPositions(WorldPosition position, WorldPosition destination)` | 方法 |
| `SetLandscapeRainMaskData` | `public void SetLandscapeRainMaskData(byte[]data)` | 方法 |
| `EnsurePostfxSystem` | `public void EnsurePostfxSystem()` | 方法 |
| `SetBloom` | `public void SetBloom(bool mode)` | 方法 |
| `SetDofMode` | `public void SetDofMode(bool mode)` | 方法 |
| `SetOcclusionMode` | `public void SetOcclusionMode(bool mode)` | 方法 |
| `SetExternalInjectionTexture` | `public void SetExternalInjectionTexture(Texture texture)` | 方法 |
| `SetSunshaftMode` | `public void SetSunshaftMode(bool mode)` | 方法 |
| `GetSunDirection` | `public Vec3 GetSunDirection()` | 方法 |
| `GetNorthAngle` | `public float GetNorthAngle()` | 方法 |
| `GetNorthRotation` | `public float GetNorthRotation()` | 方法 |
| `GetTerrainMinMaxHeight` | `public bool GetTerrainMinMaxHeight(out float minHeight, out float maxHeight)` | 方法 |
| `GetPhysicsMinMax` | `public void GetPhysicsMinMax(ref Vec3 min_max)` | 方法 |
| `IsEditorScene` | `public bool IsEditorScene()` | 方法 |
| `SetMotionBlurMode` | `public void SetMotionBlurMode(bool mode)` | 方法 |
| `SetAntialiasingMode` | `public void SetAntialiasingMode(bool mode)` | 方法 |
| `SetDLSSMode` | `public void SetDLSSMode(bool mode)` | 方法 |
| `IEnumerable` | `public IEnumerable<WeakGameEntity>FindWeakEntitiesWithTag(string tag)` | 方法 |
| `FindWeakEntityWithTag` | `public WeakGameEntity FindWeakEntityWithTag(string tag)` | 方法 |
| `IEnumerable` | `public IEnumerable<GameEntity>FindEntitiesWithTag(string tag)` | 方法 |
| `FindEntityWithTag` | `public GameEntity FindEntityWithTag(string tag)` | 方法 |
| `FindEntityWithName` | `public GameEntity FindEntityWithName(string name)` | 方法 |
| `IEnumerable` | `public IEnumerable<WeakGameEntity>FindWeakEntitiesWithTagExpression(string expression)` | 方法 |
| `IEnumerable` | `public IEnumerable<GameEntity>FindEntitiesWithTagExpression(string expression)` | 方法 |
| `GetSoftBoundaryVertexCount` | `public int GetSoftBoundaryVertexCount()` | 方法 |
| `GetHardBoundaryVertexCount` | `public int GetHardBoundaryVertexCount()` | 方法 |
| `GetSoftBoundaryVertex` | `public Vec2 GetSoftBoundaryVertex(int index)` | 方法 |
| `GetHardBoundaryVertex` | `public Vec2 GetHardBoundaryVertex(int index)` | 方法 |
| `GetPathWithName` | `public Path GetPathWithName(string name)` | 方法 |
| `DeletePathWithName` | `public void DeletePathWithName(string name)` | 方法 |
| `AddPath` | `public void AddPath(string name)` | 方法 |
| `AddPathPoint` | `public void AddPathPoint(string name, MatrixFrame frame)` | 方法 |
| `GetBoundingBox` | `public void GetBoundingBox(out Vec3 min, out Vec3 max)` | 方法 |
| `GetSceneLimits` | `public void GetSceneLimits(out Vec3 min, out Vec3 max)` | 方法 |
| `SetName` | `public void SetName(string name)` | 方法 |
| `GetName` | `public string GetName()` | 方法 |
| `GetModulePath` | `public string GetModulePath()` | 方法 |
| `TimeSpeed` | `public float TimeSpeed` | 属性 |
| `SetOwnerThread` | `public void SetOwnerThread()` | 方法 |
| `Path[]GetPathsWithNamePrefix` | `public Path[]GetPathsWithNamePrefix(string prefix)` | 方法 |
| `SetUseConstantTime` | `public void SetUseConstantTime(bool value)` | 方法 |
| `CheckPointCanSeePoint` | `public bool CheckPointCanSeePoint(Vec3 source, Vec3 target, float? distanceToCheck = null)` | 方法 |
| `SetPlaySoundEventsAfterReadyToRender` | `public void SetPlaySoundEventsAfterReadyToRender(bool value)` | 方法 |
| `DisableStaticShadows` | `public void DisableStaticShadows(bool value)` | 方法 |
| `GetSkyboxMesh` | `public Mesh GetSkyboxMesh()` | 方法 |
| `SetAtmosphereWithName` | `public void SetAtmosphereWithName(string name)` | 方法 |
| `FillEntityWithHardBorderPhysicsBarrier` | `public void FillEntityWithHardBorderPhysicsBarrier(GameEntity entity)` | 方法 |
| `ClearDecals` | `public void ClearDecals()` | 方法 |
| `SetPhotoAtmosphereViaTod` | `public void SetPhotoAtmosphereViaTod(float tod, bool withStorm)` | 方法 |
| `IsPositionOnADynamicNavMesh` | `public bool IsPositionOnADynamicNavMesh(Vec3 position)` | 方法 |
| `WaitWaterRendererCPUSimulation` | `public void WaitWaterRendererCPUSimulation()` | 方法 |
| `EnableInclusiveAsyncPhysx` | `public void EnableInclusiveAsyncPhysx()` | 方法 |
| `EnsureWaterWakeRenderer` | `public void EnsureWaterWakeRenderer()` | 方法 |
| `DeleteWaterWakeRenderer` | `public void DeleteWaterWakeRenderer()` | 方法 |
| `SceneHadWaterWakeRenderer` | `public bool SceneHadWaterWakeRenderer()` | 方法 |
| `SetWaterWakeWorldSize` | `public void SetWaterWakeWorldSize(float worldSize, float eraseFactor)` | 方法 |
| `SetWaterWakeCameraOffset` | `public void SetWaterWakeCameraOffset(float cameraOffset)` | 方法 |
| `TickWake` | `public void TickWake(float dt)` | 方法 |
| `SetDoNotAddEntitiesToTickList` | `public void SetDoNotAddEntitiesToTickList(bool value)` | 方法 |
| `SetDontLoadInvisibleEntities` | `public void SetDontLoadInvisibleEntities(bool value)` | 方法 |
| `SetUsesDeleteLaterSystem` | `public void SetUsesDeleteLaterSystem(bool value)` | 方法 |
| `HandleCurrentFrameTickEntities` | `public void HandleCurrentFrameTickEntities()` | 方法 |
| `ClearCurrentFrameTickEntities` | `public void ClearCurrentFrameTickEntities()` | 方法 |
| `SetUseAdvancedWaterRendering` | `public void SetUseAdvancedWaterRendering(bool value)` | 方法 |
| `FindClosestExitPositionForPositionOnABoundaryFace` | `public Vec2 FindClosestExitPositionForPositionOnABoundaryFace(Vec3 position, UIntPtr boundaryFacePointer)` | 方法 |
| `MaximumWindSpeed` | `public static float MaximumWindSpeed` | 字段 |
| `AutoClimbHeight` | `public const float AutoClimbHeight` | 字段 |
| `NavMeshHeightLimit` | `public const float NavMeshHeightLimit` | 字段 |
| `SunRise` | `public const int SunRise` | 字段 |
| `SunSet` | `public const int SunSet` | 字段 |
| `PhysicsAndRayCastLock` | `public static readonly TWSharedMutex PhysicsAndRayCastLock` | 字段 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
