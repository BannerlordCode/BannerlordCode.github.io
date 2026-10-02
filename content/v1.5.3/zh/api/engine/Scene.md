---
title: "Scene"
description: "Scene 的自动生成类参考。"
---
# Scene

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Scene : NativeObject `
**Base:** NativeObject
**Source:** TaleWorlds.Engine/Scene.cs

## 概述

`Scene` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/Scene.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### IsDefaultEditorScene
`public bool IsDefaultEditorScene() `

### IsMultiplayerScene
`public bool IsMultiplayerScene() `

### TakePhotoModePicture
`public string TakePhotoModePicture(bool saveAmbientOcclusionPass,bool savingObjectIdPass,bool saveShadowPass) `

### GetAllColorGradeNames
`public string GetAllColorGradeNames() `

### GetAllFilterNames
`public string GetAllFilterNames() `

### GetPhotoModeRoll
`public float GetPhotoModeRoll() `

### GetPhotoModeOrbit
`public bool GetPhotoModeOrbit() `

### GetPhotoModeOn
`public bool GetPhotoModeOn() `

### GetPhotoModeFocus
`public void GetPhotoModeFocus(ref float focus,ref float focusStart,ref float focusEnd,ref float exposure,ref bool vignetteOn) `

### GetSceneColorGradeIndex
`public int GetSceneColorGradeIndex() `

### GetSceneFilterIndex
`public int GetSceneFilterIndex() `

### EnableFixedTick
`public void EnableFixedTick() `

### GetLoadingStateName
`public string GetLoadingStateName() `

### IsLoadingFinished
`public bool IsLoadingFinished() `

### SetPhotoModeRoll
`public void SetPhotoModeRoll(float roll) `

### SetPhotoModeOrbit
`public void SetPhotoModeOrbit(bool orbit) `

### GetFallDensity
`public float GetFallDensity() `

### SetPhotoModeOn
`public void SetPhotoModeOn(bool on) `

### SetPhotoModeFocus
`public void SetPhotoModeFocus(float focusStart,float focusEnd,float focus,float exposure) `

### SetPhotoModeFov
`public void SetPhotoModeFov(float verticalFov) `

### GetPhotoModeFov
`public float GetPhotoModeFov() `

### HasDecalRenderer
`public bool HasDecalRenderer() `

### SetPhotoModeVignette
`public void SetPhotoModeVignette(bool vignetteOn) `

### SetSceneColorGradeIndex
`public void SetSceneColorGradeIndex(int index) `

### SetSceneFilterIndex
`public int SetSceneFilterIndex(int index) `

### SetSceneColorGrade
`public void SetSceneColorGrade(string textureName) `
`public void SetSceneColorGrade(Scene scene,string textureName) `

### SetUpgradeLevel
`public void SetUpgradeLevel(int level) `

### CreateBurstParticle
`public void CreateBurstParticle(int particleId,MatrixFrame frame) `

### GetTerrainHeightData
`public float[] GetTerrainHeightData(int nodeXIndex,int nodeYIndex) `

### GetTerrainPhysicsMaterialIndexData
`public short[] GetTerrainPhysicsMaterialIndexData(int nodeXIndex,int nodeYIndex) `

### GetTerrainData
`public void GetTerrainData(out Vec2i nodeDimension,out float nodeSize,out int layerCount,out int layerVersion) `

### GetTerrainNodeData
`public void GetTerrainNodeData(int xIndex,int yIndex,out int vertexCountAlongAxis,out float quadLength,out float minHeight,out float maxHeight) `

### GetTerrainPhysicsMaterialAtLayer
`public PhysicsMaterial GetTerrainPhysicsMaterialAtLayer(int layerIndex) `

### GetWaterLevel
`public float GetWaterLevel() `

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position,bool useWaterRenderer,bool checkWaterBodyEntities) `

### GetWaterSpeedAtPosition
`public Vec3 GetWaterSpeedAtPosition(Vec2 position,bool doChoppinessCorrection) `

### GetBulkWaterLevelAtPositions
`public void GetBulkWaterLevelAtPositions(Vec2[] waterHeightQueryArray,ref float[] waterHeightsAtVolumes,ref Vec3[] waterSurfaceNormals) `

### GetInterpolationFactorForBodyWorldTransformSmoothing
`public void GetInterpolationFactorForBodyWorldTransformSmoothing(out float interpolationFactor,out float fixedDt) `

### GetBulkWaterLevelAtVolumes
`public void GetBulkWaterLevelAtVolumes(UIntPtr waterHeightQueryArray,int waterHeightQueryArrayCount,in MatrixFrame globalFrame) `

### GetWaterStrength
`public float GetWaterStrength() `

### DeRegisterShipVisual
`public void DeRegisterShipVisual(UIntPtr visualPointer) `

### RegisterShipVisualToWaterRenderer
`public UIntPtr RegisterShipVisualToWaterRenderer(WeakGameEntity entity,in Vec3 waterEffectBB) `

### SetWaterStrength
`public void SetWaterStrength(float newWaterStrength) `

### AddWaterWakeWithSphere
`public void AddWaterWakeWithSphere(Vec3 position,float radius,float wakeVisibility,float foamVisibility) `

### AddWaterWakeWithCapsule
`public void AddWaterWakeWithCapsule(Vec3 positionA,float radiusA,Vec3 positionB,float radiusB,float wakeVisibility,float foamVisibility) `

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(UIntPtr startingFace,UIntPtr endingFace,Vec2 startingPosition,Vec2 endingPosition,float agentRadius,NavigationPath path,int[] excludedFaceIds) `
`public bool GetPathBetweenAIFaces(UIntPtr startingFace,UIntPtr endingFace,Vec2 startingPosition,Vec2 endingPosition,float agentRadius,NavigationPath path,int[] excludedFaceIds,int excludedFaceIndex) `
`public bool GetPathBetweenAIFaces(UIntPtr startingFace,UIntPtr endingFace,Vec2 startingPosition,Vec2 endingPosition,float agentRadius,NavigationPath path,int[] excludedFaceIds,int regionSwitchCostTo0,int regionSwitchCostTo1) `
`public bool GetPathBetweenAIFaces(UIntPtr startingFace,UIntPtr endingFace,Vec2 startingPosition,Vec2 endingPosition,float agentRadius,NavigationPath path,int[] excludedFaceIds,int regionSwitchCostTo0,int regionSwitchCostTo1,int excludedFaceIndex) `
`public bool GetPathBetweenAIFaces(int startingFace,int endingFace,Vec2 startingPosition,Vec2 endingPosition,float agentRadius,NavigationPath path,int[] excludedFaceIds,float extraCostMultiplier) `
`public bool GetPathBetweenAIFaces(int startingFace,int endingFace,Vec2 startingPosition,Vec2 endingPosition,float agentRadius,NavigationPath path,int[] excludedFaceIds,float extraCostMultiplier,int excludedFaceIndex) `
`public bool GetPathBetweenAIFaces(int startingFace,int endingFace,Vec2 startingPosition,Vec2 endingPosition,float agentRadius,NavigationPath path,int[] excludedFaceIds,float extraCostMultiplier,int regionSwitchCostTo0,int regionSwitchCostTo1) `
`public bool GetPathBetweenAIFaces(int startingFace,int endingFace,Vec2 startingPosition,Vec2 endingPosition,float agentRadius,NavigationPath path,int[] excludedFaceIds,float extraCostMultiplier,int regionSwitchCostTo0,int regionSwitchCostTo1,int excludedFaceIndex) `

### HasNavmeshFaceUnsharedEdges
`public bool HasNavmeshFaceUnsharedEdges(in PathFaceRecord faceRecord) `

### GetNavmeshFaceCountBetweenTwoIds
`public int GetNavmeshFaceCountBetweenTwoIds(int firstId,int secondId) `

### GetNavmeshFaceRecordsBetweenTwoIds
`public void GetNavmeshFaceRecordsBetweenTwoIds(int firstId,int secondId,PathFaceRecord[] faceRecords) `

### SetFixedTickCallbackActive
`public void SetFixedTickCallbackActive(bool isActive) `

### SetOnCollisionFilterCallbackActive
`public void SetOnCollisionFilterCallbackActive(bool isActive) `

### GetPathDistanceBetweenAIFaces
`public bool GetPathDistanceBetweenAIFaces(int startingAiFace,int endingAiFace,Vec2 startingPosition,Vec2 endingPosition,float agentRadius,float distanceLimit,out float distance,int[] excludedFaceIds,int regionSwitchCostTo0,int regionSwitchCostTo1) `

### GetNavMeshFaceIndex
`public void GetNavMeshFaceIndex(ref PathFaceRecord record,Vec2 position,bool isRegion1,bool checkIfDisabled,bool ignoreHeight = false) `
`public void GetNavMeshFaceIndex(ref PathFaceRecord record,Vec3 position,bool checkIfDisabled) `

### CreateNewScene
`public static Scene CreateNewScene(bool initialize_physics = true,bool enable_decals = true,DecalAtlasGroup atlasGroup = DecalAtlasGroup.All,string sceneName = "mono_renderscene") `

### AddAlwaysRenderedSkeleton
`public void AddAlwaysRenderedSkeleton(Skeleton skeleton) `

### RemoveAlwaysRenderedSkeleton
`public void RemoveAlwaysRenderedSkeleton(Skeleton skeleton) `

### CreatePathMesh
`public MetaMesh CreatePathMesh(string baseEntityName,bool isWaterPath) `
`public MetaMesh CreatePathMesh(IList<GameEntity> pathNodes,bool isWaterPath = false) `

### SetActiveVisibilityLevels
`public void SetActiveVisibilityLevels(List<string> levelsToActivate) `

### SetDoNotWaitForLoadingStatesToRender
`public void SetDoNotWaitForLoadingStatesToRender(bool value) `

### SetDynamicSnowTexture
`public void SetDynamicSnowTexture(Texture texture) `

### GetWindFlowMapData
`public void GetWindFlowMapData(float[] flowMapData) `

### CreateDynamicRainTexture
`public void CreateDynamicRainTexture(int w,int h) `

### GetEntityWithGuid
`public GameEntity GetEntityWithGuid(string guid) `

### IsEntityFrameChanged
`public bool IsEntityFrameChanged(string containsName) `

### GetTerrainHeightAndNormal
`public void GetTerrainHeightAndNormal(Vec2 position,out float height,out Vec3 normal) `

### GetFloraInstanceCount
`public int GetFloraInstanceCount() `

### GetFloraRendererTextureUsage
`public int GetFloraRendererTextureUsage() `

### GetTerrainMemoryUsage
`public int GetTerrainMemoryUsage() `

### SetFetchCrcInfoOfScene
`public void SetFetchCrcInfoOfScene(bool value) `

### GetSceneXMLCRC
`public uint GetSceneXMLCRC() `

### GetNavigationMeshCRC
`public uint GetNavigationMeshCRC() `

### SetGlobalWindStrengthVector
`public void SetGlobalWindStrengthVector(in Vec2 windVector) `

### GetGlobalWindStrengthVector
`public Vec2 GetGlobalWindStrengthVector() `

### GetGlobalWindVelocity
`public Vec2 GetGlobalWindVelocity() `

### SetGlobalWindVelocity
`public void SetGlobalWindVelocity(in Vec2 windVector) `

### GetEnginePhysicsEnabled
`public bool GetEnginePhysicsEnabled() `

### ClearNavMesh
`public void ClearNavMesh() `

### StallLoadingRenderingsUntilFurtherNotice
`public void StallLoadingRenderingsUntilFurtherNotice() `

### GetNavMeshFaceCount
`public int GetNavMeshFaceCount() `

### ResumeLoadingRenderings
`public void ResumeLoadingRenderings() `

### GetUpgradeLevelMask
`public uint GetUpgradeLevelMask() `

### SetUpgradeLevelVisibility
`public void SetUpgradeLevelVisibility(uint mask) `
`public void SetUpgradeLevelVisibility(List<string> levels) `

### GetIdOfNavMeshFace
`public int GetIdOfNavMeshFace(int faceIndex) `

### SetClothSimulationState
`public void SetClothSimulationState(bool state) `

### GetNavMeshCenterPosition
`public void GetNavMeshCenterPosition(int faceIndex,ref Vec3 centerPosition) `

### GetNavMeshPathFaceRecord
`public PathFaceRecord GetNavMeshPathFaceRecord(int faceIndex) `

### GetPathFaceRecordFromNavMeshFacePointer
`public PathFaceRecord GetPathFaceRecordFromNavMeshFacePointer(UIntPtr navMeshFacePointer) `

### GetAllNavmeshFaceRecords
`public void GetAllNavmeshFaceRecords(PathFaceRecord[] faceRecords) `

### GetFirstEntityWithName
`public GameEntity GetFirstEntityWithName(string name) `

### GetCampaignEntityWithName
`public GameEntity GetCampaignEntityWithName(string name) `

### GetFirstEntityWithScriptComponent
`public GameEntity GetFirstEntityWithScriptComponent(string scriptName) `

### GetUpgradeLevelMaskOfLevelName
`public uint GetUpgradeLevelMaskOfLevelName(string levelName) `

### GetUpgradeLevelNameOfIndex
`public string GetUpgradeLevelNameOfIndex(int index) `

### GetUpgradeLevelCount
`public int GetUpgradeLevelCount() `

### GetWinterTimeFactor
`public float GetWinterTimeFactor() `

### GetNavMeshFaceFirstVertexZ
`public float GetNavMeshFaceFirstVertexZ(int faceIndex) `

### SetWinterTimeFactor
`public void SetWinterTimeFactor(float winterTimeFactor) `

### SetDrynessFactor
`public void SetDrynessFactor(float drynessFactor) `

### GetFog
`public float GetFog() `

### SetFog
`public void SetFog(float fogDensity,ref Vec3 fogColor,float fogFalloff) `

### SetFogAdvanced
`public void SetFogAdvanced(float fogFalloffOffset,float fogFalloffMinFog,float fogFalloffStartDist) `

### SetFogAmbientColor
`public void SetFogAmbientColor(ref Vec3 fogAmbientColor) `

### SetTemperature
`public void SetTemperature(float temperature) `

### SetHumidity
`public void SetHumidity(float humidity) `

### SetDynamicShadowmapCascadesRadiusMultiplier
`public void SetDynamicShadowmapCascadesRadiusMultiplier(float multiplier) `

### SetEnvironmentMultiplier
`public void SetEnvironmentMultiplier(bool useMultiplier,float multiplier) `

### SetSkyRotation
`public void SetSkyRotation(float rotation) `

### SetSkyBrightness
`public void SetSkyBrightness(float brightness) `

### SetForcedSnow
`public void SetForcedSnow(bool value) `

### SetSunLight
`public void SetSunLight(ref Vec3 color,ref Vec3 direction) `

### SetSunDirection
`public void SetSunDirection(ref Vec3 direction) `

### SetSun
`public void SetSun(ref Vec3 color,float altitude,float angle,float intensity) `

### SetSunAngleAltitude
`public void SetSunAngleAltitude(float angle,float altitude) `

### SetSunSize
`public void SetSunSize(float size) `

### SetSunShaftStrength
`public void SetSunShaftStrength(float strength) `

### GetRainDensity
`public float GetRainDensity() `

### SetRainDensity
`public void SetRainDensity(float density) `

### GetSnowDensity
`public float GetSnowDensity() `

### SetSnowDensity
`public void SetSnowDensity(float density) `

### AddDecalInstance
`public void AddDecalInstance(Decal decal,string decalSetID,bool deletable) `

### RemoveDecalInstance
`public void RemoveDecalInstance(Decal decal,string decalSetID) `

### SetShadow
`public void SetShadow(bool shadowEnabled) `

### AddPointLight
`public int AddPointLight(ref Vec3 position,float radius) `

### AddDirectionalLight
`public int AddDirectionalLight(ref Vec3 position,ref Vec3 direction,float radius) `

### SetLightPosition
`public void SetLightPosition(int lightIndex,ref Vec3 position) `

### SetLightDiffuseColor
`public void SetLightDiffuseColor(int lightIndex,ref Vec3 diffuseColor) `

### SetLightDirection
`public void SetLightDirection(int lightIndex,ref Vec3 direction) `

### SetMieScatterFocus
`public void SetMieScatterFocus(float strength) `

### SetMieScatterStrength
`public void SetMieScatterStrength(float strength) `

### SetBrightpassThreshold
`public void SetBrightpassThreshold(float threshold) `

### SetLensDistortion
`public void SetLensDistortion(float amount) `

### SetHexagonVignetteAlpha
`public void SetHexagonVignetteAlpha(float amount) `

### SetMinExposure
`public void SetMinExposure(float minExposure) `

### SetMaxExposure
`public void SetMaxExposure(float maxExposure) `

### SetTargetExposure
`public void SetTargetExposure(float targetExposure) `

### SetMiddleGray
`public void SetMiddleGray(float middleGray) `

### SetBloomStrength
`public void SetBloomStrength(float bloomStrength) `

### SetBloomAmount
`public void SetBloomAmount(float bloomAmount) `

### SetGrainAmount
`public void SetGrainAmount(float grainAmount) `

### AddItemEntity
`public GameEntity AddItemEntity(ref MatrixFrame placementFrame,MetaMesh metaMesh) `

### RemoveEntity
`public void RemoveEntity(GameEntity entity,int removeReason) `
`public void RemoveEntity(WeakGameEntity entity,int removeReason) `

### AttachEntity
`public bool AttachEntity(GameEntity entity,bool showWarnings = false) `
`public bool AttachEntity(WeakGameEntity entity,bool showWarnings = false) `

### AddEntityWithMesh
`public void AddEntityWithMesh(Mesh mesh,ref MatrixFrame frame) `

### AddEntityWithMultiMesh
`public void AddEntityWithMultiMesh(MetaMesh mesh,ref MatrixFrame frame) `

### Tick
`public void Tick(float dt) `

### ClearAll
`public void ClearAll() `

### SetDefaultLighting
`public void SetDefaultLighting() `

### CalculateEffectiveLighting
`public bool CalculateEffectiveLighting() `

### GetPathDistanceBetweenPositions
`public bool GetPathDistanceBetweenPositions(ref WorldPosition point0,ref WorldPosition point1,float agentRadius,out float pathDistance) `

### IsLineToPointClear
`public bool IsLineToPointClear(ref WorldPosition position,ref WorldPosition destination,float agentRadius) `
`public bool IsLineToPointClear(UIntPtr startingFace,Vec2 position,Vec2 destination,float agentRadius) `
`public bool IsLineToPointClear(int startingFace,Vec2 position,Vec2 destination,float agentRadius) `

### GetLastPointOnNavigationMeshFromPositionToDestination
`public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(int startingFace,Vec2 position,Vec2 destination,int[] excludedFaceIds) `

### GetLastPositionOnNavMeshFaceForPointAndDirection
`public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord record,Vec2 position,Vec2 destination) `

### GetLastPointOnNavigationMeshFromWorldPositionToDestination
`public Vec3 GetLastPointOnNavigationMeshFromWorldPositionToDestination(ref WorldPosition position,Vec2 destination) `

### DoesPathExistBetweenFaces
`public bool DoesPathExistBetweenFaces(int firstNavMeshFace,int secondNavMeshFace,bool ignoreDisabled) `

### GetHeightAtPoint
`public bool GetHeightAtPoint(Vec2 point,BodyFlags excludeBodyFlags,ref float height) `

### GetNormalAt
`public Vec3 GetNormalAt(Vec2 position) `

### GetEntities
`public void GetEntities(ref List<GameEntity> entities) `

### GetEntitiesAsWeak
`public void GetEntitiesAsWeak(ref List<WeakGameEntity> entities) `

### GetRootEntities
`public void GetRootEntities(NativeObjectArray entities) `

### SelectEntitiesCollidedWith
`public int SelectEntitiesCollidedWith(ref Ray ray,Intersection[] intersectionsOutput,UIntPtr[] entityIds) `

### RayCastExcludingTwoEntities
`public bool RayCastExcludingTwoEntities(BodyFlags flags,in Ray ray,WeakGameEntity entity1,WeakGameEntity entity2) `

### GenerateContactsWithCapsule
`public int GenerateContactsWithCapsule(ref CapsuleData capsule,BodyFlags exclude_flags,bool isFixedTick,Intersection[] intersectionsOutput,WeakGameEntity[] gameEntities,UIntPtr[] entityPointers) `

### GenerateContactsWithCapsuleAgainstEntity
`public int GenerateContactsWithCapsuleAgainstEntity(ref CapsuleData capsule,BodyFlags excludeFlags,WeakGameEntity entity,Intersection[] intersectionsOutput) `

### InvalidateTerrainPhysicsMaterials
`public void InvalidateTerrainPhysicsMaterials() `

### Read
`public void Read(string sceneName) `
`public void Read(string sceneName,string moduleId,ref SceneInitializationData initData,string forcedAtmoName = "") `
`public void Read(string sceneName,ref SceneInitializationData initData,string forcedAtmoName = "") `

### ReadAndCalculateInitialCamera
`public MatrixFrame ReadAndCalculateInitialCamera() `

### OptimizeScene
`public void OptimizeScene(bool optimizeFlora = true,bool optimizeOro = false) `

### GetTerrainHeight
`public float GetTerrainHeight(Vec2 position,bool checkHoles = true) `

### CheckResources
`public void CheckResources(bool checkInvisibleEntities) `

### ForceLoadResources
`public void ForceLoadResources(bool checkInvisibleEntities) `

### SetDepthOfFieldParameters
`public void SetDepthOfFieldParameters(float depthOfFieldFocusStart,float depthOfFieldFocusEnd,bool isVignetteOn) `

### SetDepthOfFieldFocus
`public void SetDepthOfFieldFocus(float depthOfFieldFocus) `

### ResetDepthOfFieldParams
`public void ResetDepthOfFieldParams() `

### PreloadForRendering
`public void PreloadForRendering() `

### SetColorGradeBlend
`public void SetColorGradeBlend(string texture1,string texture2,float alpha) `

### GetGroundHeightAtPosition
`public float GetGroundHeightAtPosition(Vec3 position,BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags) `
`public float GetGroundHeightAtPosition(Vec3 position,out Vec3 normal,BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags) `

### GetGroundHeightAndBodyFlagsAtPosition
`public float GetGroundHeightAndBodyFlagsAtPosition(Vec3 position,out BodyFlags contactPointFlags,BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags) `

### PauseSceneSounds
`public void PauseSceneSounds() `

### ResumeSceneSounds
`public void ResumeSceneSounds() `

### FinishSceneSounds
`public void FinishSceneSounds() `

### BoxCastOnlyForCamera
`public bool BoxCastOnlyForCamera(Vec3[] boxPoints,in Vec3 centerPoint,bool castSupportRay,in Vec3 supportRaycastPoint,in Vec3 dir,float distance,WeakGameEntity ignoredEntity,out float collisionDistance,out Vec3 closestPoint,out WeakGameEntity collidedEntity,BodyFlags excludedBodyFlags = BodyFlags.Disabled | BodyFlags.Dynamic | BodyFlags.Ladder | BodyFlags.OnlyCollideWithRaycast | BodyFlags.AILimiter | BodyFlags.Barrier | BodyFlags.Barrier3D | BodyFlags.Ragdoll | BodyFlags.RagdollLimiter | BodyFlags.DroppedItem | BodyFlags.DoNotCollideWithRaycast | BodyFlags.DontCollideWithCamera |`

### BoxCast
`public bool BoxCast(Vec3 boxMin,Vec3 boxMax,bool castSupportRay,Vec3 supportRaycastPoint,Vec3 dir,float distance,out float collisionDistance,out Vec3 closestPoint,out WeakGameEntity collidedEntity,BodyFlags excludedBodyFlags = BodyFlags.CameraCollisionRayCastExludeFlags) `

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint,Vec3 targetPoint,out float collisionDistance,out Vec3 closestPoint,out WeakGameEntity collidedEntity,float rayThickness = 0.01f,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint,Vec3 targetPoint,out float collisionDistance,out WeakGameEntity collidedEntity,float rayThickness = 0.01f,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint,Vec3 targetPoint,out float collisionDistance,out Vec3 closestPoint,float rayThickness = 0.01f,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint,Vec3 targetPoint,out float collisionDistance,float rayThickness = 0.01f,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint,Vec3 targetPoint,out float collisionDistance,out Vec3 closestPoint,out WeakGameEntity collidedEntity,float rayThickness = 0.01f,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint,Vec3 targetPoint,out float collisionDistance,out WeakGameEntity collidedEntity,float rayThickness = 0.01f,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint,Vec3 targetPoint,out float collisionDistance,out Vec3 closestPoint,float rayThickness = 0.01f,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint,Vec3 targetPoint,out float collisionDistance,float rayThickness = 0.01f,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `

### FocusRayCastForFixedPhysics
`public bool FocusRayCastForFixedPhysics(Vec3 sourcePoint,Vec3 targetPoint,out float collisionDistance,out Vec3 closestPoint,out WeakGameEntity collidedEntity,float rayThickness = 0.01f,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `

### RayCastForRamming
`public bool RayCastForRamming(in Vec3 sourcePoint,in Vec3 targetPoint,WeakGameEntity ignoredEntity,float rayThickness,out float collisionDistance,out Vec3 intersectionPoint,out WeakGameEntity collidedEntity,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags,BodyFlags includeBodyFlags = BodyFlags.None) `

### RayCastForClosestEntityOrTerrainIgnoreEntity
`public bool RayCastForClosestEntityOrTerrainIgnoreEntity(in Vec3 sourcePoint,in Vec3 targetPoint,WeakGameEntity ignoredEntity,out float collisionDistance,out GameEntity collidedEntity,float rayThickness = 0.01f,BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `

### ImportNavigationMeshPrefab
`public void ImportNavigationMeshPrefab(string navMeshPrefabName,int navMeshGroupShift) `

### ImportNavigationMeshPrefabWithFrame
`public void ImportNavigationMeshPrefabWithFrame(string navMeshPrefabName,MatrixFrame frame) `

### SaveNavMeshPrefabWithFrame
`public void SaveNavMeshPrefabWithFrame(string navMeshPrefabName,MatrixFrame frame) `

### SetNavMeshRegionMap
`public void SetNavMeshRegionMap(bool[] regionMap) `

### MarkFacesWithIdAsLadder
`public void MarkFacesWithIdAsLadder(int faceGroupId,bool isLadder) `

### SetAbilityOfFacesWithId
`public int SetAbilityOfFacesWithId(int faceGroupId,bool isEnabled) `

### SetBlockerDirectionForFacesWithId
`public void SetBlockerDirectionForFacesWithId(int faceGroupId,float rotation) `

### SetAbilityOfFaceWithIndex
`public bool SetAbilityOfFaceWithIndex(int faceIndex,bool isEnabled,bool updateIslandIndices) `

### SwapFaceConnectionsWithID
`public bool SwapFaceConnectionsWithID(int hubFaceGroupID,int toBeSeparatedFaceGroupId,int toBeMergedFaceGroupId,bool canFail) `

### MergeFacesWithId
`public void MergeFacesWithId(int faceGroupId0,int faceGroupId1,int newFaceGroupId) `

### SeparateFacesWithId
`public void SeparateFacesWithId(int faceGroupId0,int faceGroupId1) `

### IsAnyFaceWithId
`public bool IsAnyFaceWithId(int faceGroupId) `

### GetNavigationMeshForPosition
`public UIntPtr GetNavigationMeshForPosition(in Vec3 position) `
`public UIntPtr GetNavigationMeshForPosition(in Vec3 position,out int faceGroupId,float heightDifferenceLimit,bool excludeDynamicNavigationMeshes) `

### GetNearestNavigationMeshForPosition
`public UIntPtr GetNearestNavigationMeshForPosition(in Vec3 position,float heightDifferenceLimit,bool excludeDynamicNavigationMeshes) `

### DoesPathExistBetweenPositions
`public bool DoesPathExistBetweenPositions(WorldPosition position,WorldPosition destination) `

### SetLandscapeRainMaskData
`public void SetLandscapeRainMaskData(byte[] data) `

### EnsurePostfxSystem
`public void EnsurePostfxSystem() `

### SetBloom
`public void SetBloom(bool mode) `

### SetDofMode
`public void SetDofMode(bool mode) `

### SetOcclusionMode
`public void SetOcclusionMode(bool mode) `

### SetExternalInjectionTexture
`public void SetExternalInjectionTexture(Texture texture) `

### SetSunshaftMode
`public void SetSunshaftMode(bool mode) `

### GetSunDirection
`public Vec3 GetSunDirection() `

### GetNorthAngle
`public float GetNorthAngle() `

### GetNorthRotation
`public float GetNorthRotation() `

### GetTerrainMinMaxHeight
`public bool GetTerrainMinMaxHeight(out float minHeight,out float maxHeight) `

### GetPhysicsMinMax
`public void GetPhysicsMinMax(ref Vec3 min_max) `

### IsEditorScene
`public bool IsEditorScene() `

### SetMotionBlurMode
`public void SetMotionBlurMode(bool mode) `

### SetAntialiasingMode
`public void SetAntialiasingMode(bool mode) `

### SetDLSSMode
`public void SetDLSSMode(bool mode) `

### FindWeakEntitiesWithTag
`public IEnumerable<WeakGameEntity> FindWeakEntitiesWithTag(string tag) `

### FindWeakEntityWithTag
`public WeakGameEntity FindWeakEntityWithTag(string tag) `

### FindEntitiesWithTag
`public IEnumerable<GameEntity> FindEntitiesWithTag(string tag) `

### FindEntityWithTag
`public GameEntity FindEntityWithTag(string tag) `

### FindEntityWithName
`public GameEntity FindEntityWithName(string name) `

### FindWeakEntitiesWithTagExpression
`public IEnumerable<WeakGameEntity> FindWeakEntitiesWithTagExpression(string expression) `

### FindEntitiesWithTagExpression
`public IEnumerable<GameEntity> FindEntitiesWithTagExpression(string expression) `

### GetSoftBoundaryVertexCount
`public int GetSoftBoundaryVertexCount() `

### GetHardBoundaryVertexCount
`public int GetHardBoundaryVertexCount() `

### GetSoftBoundaryVertex
`public Vec2 GetSoftBoundaryVertex(int index) `

### GetHardBoundaryVertex
`public Vec2 GetHardBoundaryVertex(int index) `

### GetPathWithName
`public Path GetPathWithName(string name) `

### DeletePathWithName
`public void DeletePathWithName(string name) `

### AddPath
`public void AddPath(string name) `

### AddPathPoint
`public void AddPathPoint(string name,MatrixFrame frame) `

### GetBoundingBox
`public void GetBoundingBox(out Vec3 min,out Vec3 max) `

### GetSceneLimits
`public void GetSceneLimits(out Vec3 min,out Vec3 max) `

### SetName
`public void SetName(string name) `

### GetName
`public string GetName() `

### GetModulePath
`public string GetModulePath() `

### SetOwnerThread
`public void SetOwnerThread() `

### GetPathsWithNamePrefix
`public Path[] GetPathsWithNamePrefix(string prefix) `

### SetUseConstantTime
`public void SetUseConstantTime(bool value) `

### CheckPointCanSeePoint
`public bool CheckPointCanSeePoint(Vec3 source,Vec3 target,float? distanceToCheck = null) `

### SetPlaySoundEventsAfterReadyToRender
`public void SetPlaySoundEventsAfterReadyToRender(bool value) `

### DisableStaticShadows
`public void DisableStaticShadows(bool value) `

### GetSkyboxMesh
`public Mesh GetSkyboxMesh() `

### SetAtmosphereWithName
`public void SetAtmosphereWithName(string name) `

### FillEntityWithHardBorderPhysicsBarrier
`public void FillEntityWithHardBorderPhysicsBarrier(GameEntity entity) `

### ClearDecals
`public void ClearDecals() `

### ClearRuntimeDecals
`public void ClearRuntimeDecals() `

### SetPhotoAtmosphereViaTod
`public void SetPhotoAtmosphereViaTod(float tod,bool withStorm) `

### IsPositionOnADynamicNavMesh
`public bool IsPositionOnADynamicNavMesh(Vec3 position) `

### WaitWaterRendererCPUSimulation
`public void WaitWaterRendererCPUSimulation() `

### EnableInclusiveAsyncPhysx
`public void EnableInclusiveAsyncPhysx() `

### EnsureWaterWakeRenderer
`public void EnsureWaterWakeRenderer() `

### DeleteWaterWakeRenderer
`public void DeleteWaterWakeRenderer() `

### SceneHadWaterWakeRenderer
`public bool SceneHadWaterWakeRenderer() `

### SetWaterWakeWorldSize
`public void SetWaterWakeWorldSize(float worldSize,float eraseFactor) `

### SetWaterWakeCameraOffset
`public void SetWaterWakeCameraOffset(float cameraOffset) `

### TickWake
`public void TickWake(float dt) `

### SetDoNotAddEntitiesToTickList
`public void SetDoNotAddEntitiesToTickList(bool value) `

### SetDontLoadInvisibleEntities
`public void SetDontLoadInvisibleEntities(bool value) `

### SetUsesDeleteLaterSystem
`public void SetUsesDeleteLaterSystem(bool value) `

### HandleCurrentFrameTickEntities
`public void HandleCurrentFrameTickEntities() `

### ClearCurrentFrameTickEntities
`public void ClearCurrentFrameTickEntities() `

### SetUseAdvancedWaterRendering
`public void SetUseAdvancedWaterRendering(bool value) `

### FindClosestExitPositionForPositionOnABoundaryFace
`public Vec2 FindClosestExitPositionForPositionOnABoundaryFace(Vec3 position,UIntPtr boundaryFacePointer) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
