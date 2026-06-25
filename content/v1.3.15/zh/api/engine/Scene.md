---
title: "Scene"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Scene`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Scene

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Scene : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/Scene.cs`

## 概述

`Scene` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RootEntityCount` | `public int RootEntityCount { get; }` |
| `HasTerrainHeightmap` | `public bool HasTerrainHeightmap { get; }` |
| `ContainsTerrain` | `public bool ContainsTerrain { get; }` |
| `TimeOfDay` | `public float TimeOfDay { get; set; }` |
| `IsDayTime` | `public bool IsDayTime { get; }` |
| `IsAtmosphereIndoor` | `public bool IsAtmosphereIndoor { get; }` |
| `LastFinalRenderCameraPosition` | `public Vec3 LastFinalRenderCameraPosition { get; }` |
| `LastFinalRenderCameraFrame` | `public MatrixFrame LastFinalRenderCameraFrame { get; }` |
| `TimeSpeed` | `public float TimeSpeed { get; set; }` |

## 主要方法

### IsDefaultEditorScene
`public bool IsDefaultEditorScene()`

**用途 / Purpose:** 处理 `is default editor scene` 相关逻辑。

### IsMultiplayerScene
`public bool IsMultiplayerScene()`

**用途 / Purpose:** 处理 `is multiplayer scene` 相关逻辑。

### TakePhotoModePicture
`public string TakePhotoModePicture(bool saveAmbientOcclusionPass, bool savingObjectIdPass, bool saveShadowPass)`

**用途 / Purpose:** 处理 `take photo mode picture` 相关逻辑。

### GetAllColorGradeNames
`public string GetAllColorGradeNames()`

**用途 / Purpose:** 获取 `all color grade names` 的当前值。

### GetAllFilterNames
`public string GetAllFilterNames()`

**用途 / Purpose:** 获取 `all filter names` 的当前值。

### GetPhotoModeRoll
`public float GetPhotoModeRoll()`

**用途 / Purpose:** 获取 `photo mode roll` 的当前值。

### GetPhotoModeOrbit
`public bool GetPhotoModeOrbit()`

**用途 / Purpose:** 获取 `photo mode orbit` 的当前值。

### GetPhotoModeOn
`public bool GetPhotoModeOn()`

**用途 / Purpose:** 获取 `photo mode on` 的当前值。

### GetPhotoModeFocus
`public void GetPhotoModeFocus(ref float focus, ref float focusStart, ref float focusEnd, ref float exposure, ref bool vignetteOn)`

**用途 / Purpose:** 获取 `photo mode focus` 的当前值。

### GetSceneColorGradeIndex
`public int GetSceneColorGradeIndex()`

**用途 / Purpose:** 获取 `scene color grade index` 的当前值。

### GetSceneFilterIndex
`public int GetSceneFilterIndex()`

**用途 / Purpose:** 获取 `scene filter index` 的当前值。

### EnableFixedTick
`public void EnableFixedTick()`

**用途 / Purpose:** 处理 `enable fixed tick` 相关逻辑。

### GetLoadingStateName
`public string GetLoadingStateName()`

**用途 / Purpose:** 获取 `loading state name` 的当前值。

### IsLoadingFinished
`public bool IsLoadingFinished()`

**用途 / Purpose:** 处理 `is loading finished` 相关逻辑。

### SetPhotoModeRoll
`public void SetPhotoModeRoll(float roll)`

**用途 / Purpose:** 设置 `photo mode roll` 的值或状态。

### SetPhotoModeOrbit
`public void SetPhotoModeOrbit(bool orbit)`

**用途 / Purpose:** 设置 `photo mode orbit` 的值或状态。

### GetFallDensity
`public float GetFallDensity()`

**用途 / Purpose:** 获取 `fall density` 的当前值。

### SetPhotoModeOn
`public void SetPhotoModeOn(bool on)`

**用途 / Purpose:** 设置 `photo mode on` 的值或状态。

### SetPhotoModeFocus
`public void SetPhotoModeFocus(float focusStart, float focusEnd, float focus, float exposure)`

**用途 / Purpose:** 设置 `photo mode focus` 的值或状态。

### SetPhotoModeFov
`public void SetPhotoModeFov(float verticalFov)`

**用途 / Purpose:** 设置 `photo mode fov` 的值或状态。

### GetPhotoModeFov
`public float GetPhotoModeFov()`

**用途 / Purpose:** 获取 `photo mode fov` 的当前值。

### HasDecalRenderer
`public bool HasDecalRenderer()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `decal renderer`。

### SetPhotoModeVignette
`public void SetPhotoModeVignette(bool vignetteOn)`

**用途 / Purpose:** 设置 `photo mode vignette` 的值或状态。

### SetSceneColorGradeIndex
`public void SetSceneColorGradeIndex(int index)`

**用途 / Purpose:** 设置 `scene color grade index` 的值或状态。

### SetSceneFilterIndex
`public int SetSceneFilterIndex(int index)`

**用途 / Purpose:** 设置 `scene filter index` 的值或状态。

### SetSceneColorGrade
`public void SetSceneColorGrade(string textureName)`

**用途 / Purpose:** 设置 `scene color grade` 的值或状态。

### SetUpgradeLevel
`public void SetUpgradeLevel(int level)`

**用途 / Purpose:** 设置 `upgrade level` 的值或状态。

### CreateBurstParticle
`public void CreateBurstParticle(int particleId, MatrixFrame frame)`

**用途 / Purpose:** 创建一个 `burst particle` 实例或对象。

### GetTerrainHeightData
`public float GetTerrainHeightData(int nodeXIndex, int nodeYIndex)`

**用途 / Purpose:** 获取 `terrain height data` 的当前值。

### GetTerrainPhysicsMaterialIndexData
`public short GetTerrainPhysicsMaterialIndexData(int nodeXIndex, int nodeYIndex)`

**用途 / Purpose:** 获取 `terrain physics material index data` 的当前值。

### GetTerrainData
`public void GetTerrainData(out Vec2i nodeDimension, out float nodeSize, out int layerCount, out int layerVersion)`

**用途 / Purpose:** 获取 `terrain data` 的当前值。

### GetTerrainNodeData
`public void GetTerrainNodeData(int xIndex, int yIndex, out int vertexCountAlongAxis, out float quadLength, out float minHeight, out float maxHeight)`

**用途 / Purpose:** 获取 `terrain node data` 的当前值。

### GetTerrainPhysicsMaterialAtLayer
`public PhysicsMaterial GetTerrainPhysicsMaterialAtLayer(int layerIndex)`

**用途 / Purpose:** 获取 `terrain physics material at layer` 的当前值。

### SetSceneColorGrade
`public void SetSceneColorGrade(Scene scene, string textureName)`

**用途 / Purpose:** 设置 `scene color grade` 的值或状态。

### GetWaterLevel
`public float GetWaterLevel()`

**用途 / Purpose:** 获取 `water level` 的当前值。

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)`

**用途 / Purpose:** 获取 `water level at position` 的当前值。

### GetWaterSpeedAtPosition
`public Vec3 GetWaterSpeedAtPosition(Vec2 position, bool doChoppinessCorrection)`

**用途 / Purpose:** 获取 `water speed at position` 的当前值。

### GetBulkWaterLevelAtPositions
`public void GetBulkWaterLevelAtPositions(Vec2 waterHeightQueryArray, ref float waterHeightsAtVolumes, ref Vec3 waterSurfaceNormals)`

**用途 / Purpose:** 获取 `bulk water level at positions` 的当前值。

### GetInterpolationFactorForBodyWorldTransformSmoothing
`public void GetInterpolationFactorForBodyWorldTransformSmoothing(out float interpolationFactor, out float fixedDt)`

**用途 / Purpose:** 获取 `interpolation factor for body world transform smoothing` 的当前值。

### GetBulkWaterLevelAtVolumes
`public void GetBulkWaterLevelAtVolumes(UIntPtr waterHeightQueryArray, int waterHeightQueryArrayCount, in MatrixFrame globalFrame)`

**用途 / Purpose:** 获取 `bulk water level at volumes` 的当前值。

### GetWaterStrength
`public float GetWaterStrength()`

**用途 / Purpose:** 获取 `water strength` 的当前值。

### DeRegisterShipVisual
`public void DeRegisterShipVisual(UIntPtr visualPointer)`

**用途 / Purpose:** 处理 `de register ship visual` 相关逻辑。

### RegisterShipVisualToWaterRenderer
`public UIntPtr RegisterShipVisualToWaterRenderer(WeakGameEntity entity, in Vec3 waterEffectBB)`

**用途 / Purpose:** 处理 `register ship visual to water renderer` 相关逻辑。

### SetWaterStrength
`public void SetWaterStrength(float newWaterStrength)`

**用途 / Purpose:** 设置 `water strength` 的值或状态。

### AddWaterWakeWithSphere
`public void AddWaterWakeWithSphere(Vec3 position, float radius, float wakeVisibility, float foamVisibility)`

**用途 / Purpose:** 向当前集合/状态中添加 `water wake with sphere`。

### AddWaterWakeWithCapsule
`public void AddWaterWakeWithCapsule(Vec3 positionA, float radiusA, Vec3 positionB, float radiusB, float wakeVisibility, float foamVisibility)`

**用途 / Purpose:** 向当前集合/状态中添加 `water wake with capsule`。

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds)`

**用途 / Purpose:** 获取 `path between a i faces` 的当前值。

### HasNavmeshFaceUnsharedEdges
`public bool HasNavmeshFaceUnsharedEdges(in PathFaceRecord faceRecord)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `navmesh face unshared edges`。

### GetNavmeshFaceCountBetweenTwoIds
`public int GetNavmeshFaceCountBetweenTwoIds(int firstId, int secondId)`

**用途 / Purpose:** 获取 `navmesh face count between two ids` 的当前值。

### GetNavmeshFaceRecordsBetweenTwoIds
`public void GetNavmeshFaceRecordsBetweenTwoIds(int firstId, int secondId, PathFaceRecord faceRecords)`

**用途 / Purpose:** 获取 `navmesh face records between two ids` 的当前值。

### SetFixedTickCallbackActive
`public void SetFixedTickCallbackActive(bool isActive)`

**用途 / Purpose:** 设置 `fixed tick callback active` 的值或状态。

### SetOnCollisionFilterCallbackActive
`public void SetOnCollisionFilterCallbackActive(bool isActive)`

**用途 / Purpose:** 设置 `on collision filter callback active` 的值或状态。

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**用途 / Purpose:** 获取 `path between a i faces` 的当前值。

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier)`

**用途 / Purpose:** 获取 `path between a i faces` 的当前值。

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**用途 / Purpose:** 获取 `path between a i faces` 的当前值。

### GetPathDistanceBetweenAIFaces
`public bool GetPathDistanceBetweenAIFaces(int startingAiFace, int endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**用途 / Purpose:** 获取 `path distance between a i faces` 的当前值。

### GetNavMeshFaceIndex
`public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec2 position, bool isRegion1, bool checkIfDisabled, bool ignoreHeight = false)`

**用途 / Purpose:** 获取 `nav mesh face index` 的当前值。

### GetNavMeshFaceIndex
`public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec3 position, bool checkIfDisabled)`

**用途 / Purpose:** 获取 `nav mesh face index` 的当前值。

### CreateNewScene
`public static Scene CreateNewScene(bool initialize_physics = true, bool enable_decals = true, DecalAtlasGroup atlasGroup = DecalAtlasGroup.All, string sceneName = "mono_renderscene")`

**用途 / Purpose:** 创建一个 `new scene` 实例或对象。

### AddAlwaysRenderedSkeleton
`public void AddAlwaysRenderedSkeleton(Skeleton skeleton)`

**用途 / Purpose:** 向当前集合/状态中添加 `always rendered skeleton`。

### RemoveAlwaysRenderedSkeleton
`public void RemoveAlwaysRenderedSkeleton(Skeleton skeleton)`

**用途 / Purpose:** 从当前集合/状态中移除 `always rendered skeleton`。

### CreatePathMesh
`public MetaMesh CreatePathMesh(string baseEntityName, bool isWaterPath)`

**用途 / Purpose:** 创建一个 `path mesh` 实例或对象。

### SetActiveVisibilityLevels
`public void SetActiveVisibilityLevels(List<string> levelsToActivate)`

**用途 / Purpose:** 设置 `active visibility levels` 的值或状态。

### SetDoNotWaitForLoadingStatesToRender
`public void SetDoNotWaitForLoadingStatesToRender(bool value)`

**用途 / Purpose:** 设置 `do not wait for loading states to render` 的值或状态。

### SetDynamicSnowTexture
`public void SetDynamicSnowTexture(Texture texture)`

**用途 / Purpose:** 设置 `dynamic snow texture` 的值或状态。

### GetWindFlowMapData
`public void GetWindFlowMapData(float flowMapData)`

**用途 / Purpose:** 获取 `wind flow map data` 的当前值。

### CreateDynamicRainTexture
`public void CreateDynamicRainTexture(int w, int h)`

**用途 / Purpose:** 创建一个 `dynamic rain texture` 实例或对象。

### CreatePathMesh
`public MetaMesh CreatePathMesh(IList<GameEntity> pathNodes, bool isWaterPath = false)`

**用途 / Purpose:** 创建一个 `path mesh` 实例或对象。

### GetEntityWithGuid
`public GameEntity GetEntityWithGuid(string guid)`

**用途 / Purpose:** 获取 `entity with guid` 的当前值。

### IsEntityFrameChanged
`public bool IsEntityFrameChanged(string containsName)`

**用途 / Purpose:** 处理 `is entity frame changed` 相关逻辑。

### GetTerrainHeightAndNormal
`public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)`

**用途 / Purpose:** 获取 `terrain height and normal` 的当前值。

### GetFloraInstanceCount
`public int GetFloraInstanceCount()`

**用途 / Purpose:** 获取 `flora instance count` 的当前值。

### GetFloraRendererTextureUsage
`public int GetFloraRendererTextureUsage()`

**用途 / Purpose:** 获取 `flora renderer texture usage` 的当前值。

### GetTerrainMemoryUsage
`public int GetTerrainMemoryUsage()`

**用途 / Purpose:** 获取 `terrain memory usage` 的当前值。

### SetFetchCrcInfoOfScene
`public void SetFetchCrcInfoOfScene(bool value)`

**用途 / Purpose:** 设置 `fetch crc info of scene` 的值或状态。

### GetSceneXMLCRC
`public uint GetSceneXMLCRC()`

**用途 / Purpose:** 获取 `scene x m l c r c` 的当前值。

### GetNavigationMeshCRC
`public uint GetNavigationMeshCRC()`

**用途 / Purpose:** 获取 `navigation mesh c r c` 的当前值。

### SetGlobalWindStrengthVector
`public void SetGlobalWindStrengthVector(in Vec2 windVector)`

**用途 / Purpose:** 设置 `global wind strength vector` 的值或状态。

### GetGlobalWindStrengthVector
`public Vec2 GetGlobalWindStrengthVector()`

**用途 / Purpose:** 获取 `global wind strength vector` 的当前值。

### GetGlobalWindVelocity
`public Vec2 GetGlobalWindVelocity()`

**用途 / Purpose:** 获取 `global wind velocity` 的当前值。

### SetGlobalWindVelocity
`public void SetGlobalWindVelocity(in Vec2 windVector)`

**用途 / Purpose:** 设置 `global wind velocity` 的值或状态。

### GetEnginePhysicsEnabled
`public bool GetEnginePhysicsEnabled()`

**用途 / Purpose:** 获取 `engine physics enabled` 的当前值。

### ClearNavMesh
`public void ClearNavMesh()`

**用途 / Purpose:** 处理 `clear nav mesh` 相关逻辑。

### StallLoadingRenderingsUntilFurtherNotice
`public void StallLoadingRenderingsUntilFurtherNotice()`

**用途 / Purpose:** 处理 `stall loading renderings until further notice` 相关逻辑。

### GetNavMeshFaceCount
`public int GetNavMeshFaceCount()`

**用途 / Purpose:** 获取 `nav mesh face count` 的当前值。

### ResumeLoadingRenderings
`public void ResumeLoadingRenderings()`

**用途 / Purpose:** 处理 `resume loading renderings` 相关逻辑。

### GetUpgradeLevelMask
`public uint GetUpgradeLevelMask()`

**用途 / Purpose:** 获取 `upgrade level mask` 的当前值。

### SetUpgradeLevelVisibility
`public void SetUpgradeLevelVisibility(uint mask)`

**用途 / Purpose:** 设置 `upgrade level visibility` 的值或状态。

### SetUpgradeLevelVisibility
`public void SetUpgradeLevelVisibility(List<string> levels)`

**用途 / Purpose:** 设置 `upgrade level visibility` 的值或状态。

### GetIdOfNavMeshFace
`public int GetIdOfNavMeshFace(int faceIndex)`

**用途 / Purpose:** 获取 `id of nav mesh face` 的当前值。

### SetClothSimulationState
`public void SetClothSimulationState(bool state)`

**用途 / Purpose:** 设置 `cloth simulation state` 的值或状态。

### GetNavMeshCenterPosition
`public void GetNavMeshCenterPosition(int faceIndex, ref Vec3 centerPosition)`

**用途 / Purpose:** 获取 `nav mesh center position` 的当前值。

### GetNavMeshPathFaceRecord
`public PathFaceRecord GetNavMeshPathFaceRecord(int faceIndex)`

**用途 / Purpose:** 获取 `nav mesh path face record` 的当前值。

### GetPathFaceRecordFromNavMeshFacePointer
`public PathFaceRecord GetPathFaceRecordFromNavMeshFacePointer(UIntPtr navMeshFacePointer)`

**用途 / Purpose:** 获取 `path face record from nav mesh face pointer` 的当前值。

### GetAllNavmeshFaceRecords
`public void GetAllNavmeshFaceRecords(PathFaceRecord faceRecords)`

**用途 / Purpose:** 获取 `all navmesh face records` 的当前值。

### GetFirstEntityWithName
`public GameEntity GetFirstEntityWithName(string name)`

**用途 / Purpose:** 获取 `first entity with name` 的当前值。

### GetCampaignEntityWithName
`public GameEntity GetCampaignEntityWithName(string name)`

**用途 / Purpose:** 获取 `campaign entity with name` 的当前值。

### GetFirstEntityWithScriptComponent
`public GameEntity GetFirstEntityWithScriptComponent(string scriptName)`

**用途 / Purpose:** 获取 `first entity with script component` 的当前值。

### GetUpgradeLevelMaskOfLevelName
`public uint GetUpgradeLevelMaskOfLevelName(string levelName)`

**用途 / Purpose:** 获取 `upgrade level mask of level name` 的当前值。

### GetUpgradeLevelNameOfIndex
`public string GetUpgradeLevelNameOfIndex(int index)`

**用途 / Purpose:** 获取 `upgrade level name of index` 的当前值。

### GetUpgradeLevelCount
`public int GetUpgradeLevelCount()`

**用途 / Purpose:** 获取 `upgrade level count` 的当前值。

### GetWinterTimeFactor
`public float GetWinterTimeFactor()`

**用途 / Purpose:** 获取 `winter time factor` 的当前值。

### GetNavMeshFaceFirstVertexZ
`public float GetNavMeshFaceFirstVertexZ(int faceIndex)`

**用途 / Purpose:** 获取 `nav mesh face first vertex z` 的当前值。

### SetWinterTimeFactor
`public void SetWinterTimeFactor(float winterTimeFactor)`

**用途 / Purpose:** 设置 `winter time factor` 的值或状态。

### SetDrynessFactor
`public void SetDrynessFactor(float drynessFactor)`

**用途 / Purpose:** 设置 `dryness factor` 的值或状态。

### GetFog
`public float GetFog()`

**用途 / Purpose:** 获取 `fog` 的当前值。

### SetFog
`public void SetFog(float fogDensity, ref Vec3 fogColor, float fogFalloff)`

**用途 / Purpose:** 设置 `fog` 的值或状态。

### SetFogAdvanced
`public void SetFogAdvanced(float fogFalloffOffset, float fogFalloffMinFog, float fogFalloffStartDist)`

**用途 / Purpose:** 设置 `fog advanced` 的值或状态。

### SetFogAmbientColor
`public void SetFogAmbientColor(ref Vec3 fogAmbientColor)`

**用途 / Purpose:** 设置 `fog ambient color` 的值或状态。

### SetTemperature
`public void SetTemperature(float temperature)`

**用途 / Purpose:** 设置 `temperature` 的值或状态。

### SetHumidity
`public void SetHumidity(float humidity)`

**用途 / Purpose:** 设置 `humidity` 的值或状态。

### SetDynamicShadowmapCascadesRadiusMultiplier
`public void SetDynamicShadowmapCascadesRadiusMultiplier(float multiplier)`

**用途 / Purpose:** 设置 `dynamic shadowmap cascades radius multiplier` 的值或状态。

### SetEnvironmentMultiplier
`public void SetEnvironmentMultiplier(bool useMultiplier, float multiplier)`

**用途 / Purpose:** 设置 `environment multiplier` 的值或状态。

### SetSkyRotation
`public void SetSkyRotation(float rotation)`

**用途 / Purpose:** 设置 `sky rotation` 的值或状态。

### SetSkyBrightness
`public void SetSkyBrightness(float brightness)`

**用途 / Purpose:** 设置 `sky brightness` 的值或状态。

### SetForcedSnow
`public void SetForcedSnow(bool value)`

**用途 / Purpose:** 设置 `forced snow` 的值或状态。

### SetSunLight
`public void SetSunLight(ref Vec3 color, ref Vec3 direction)`

**用途 / Purpose:** 设置 `sun light` 的值或状态。

### SetSunDirection
`public void SetSunDirection(ref Vec3 direction)`

**用途 / Purpose:** 设置 `sun direction` 的值或状态。

### SetSun
`public void SetSun(ref Vec3 color, float altitude, float angle, float intensity)`

**用途 / Purpose:** 设置 `sun` 的值或状态。

### SetSunAngleAltitude
`public void SetSunAngleAltitude(float angle, float altitude)`

**用途 / Purpose:** 设置 `sun angle altitude` 的值或状态。

### SetSunSize
`public void SetSunSize(float size)`

**用途 / Purpose:** 设置 `sun size` 的值或状态。

### SetSunShaftStrength
`public void SetSunShaftStrength(float strength)`

**用途 / Purpose:** 设置 `sun shaft strength` 的值或状态。

### GetRainDensity
`public float GetRainDensity()`

**用途 / Purpose:** 获取 `rain density` 的当前值。

### SetRainDensity
`public void SetRainDensity(float density)`

**用途 / Purpose:** 设置 `rain density` 的值或状态。

### GetSnowDensity
`public float GetSnowDensity()`

**用途 / Purpose:** 获取 `snow density` 的当前值。

### SetSnowDensity
`public void SetSnowDensity(float density)`

**用途 / Purpose:** 设置 `snow density` 的值或状态。

### AddDecalInstance
`public void AddDecalInstance(Decal decal, string decalSetID, bool deletable)`

**用途 / Purpose:** 向当前集合/状态中添加 `decal instance`。

### RemoveDecalInstance
`public void RemoveDecalInstance(Decal decal, string decalSetID)`

**用途 / Purpose:** 从当前集合/状态中移除 `decal instance`。

### SetShadow
`public void SetShadow(bool shadowEnabled)`

**用途 / Purpose:** 设置 `shadow` 的值或状态。

### AddPointLight
`public int AddPointLight(ref Vec3 position, float radius)`

**用途 / Purpose:** 向当前集合/状态中添加 `point light`。

### AddDirectionalLight
`public int AddDirectionalLight(ref Vec3 position, ref Vec3 direction, float radius)`

**用途 / Purpose:** 向当前集合/状态中添加 `directional light`。

### SetLightPosition
`public void SetLightPosition(int lightIndex, ref Vec3 position)`

**用途 / Purpose:** 设置 `light position` 的值或状态。

### SetLightDiffuseColor
`public void SetLightDiffuseColor(int lightIndex, ref Vec3 diffuseColor)`

**用途 / Purpose:** 设置 `light diffuse color` 的值或状态。

### SetLightDirection
`public void SetLightDirection(int lightIndex, ref Vec3 direction)`

**用途 / Purpose:** 设置 `light direction` 的值或状态。

### SetMieScatterFocus
`public void SetMieScatterFocus(float strength)`

**用途 / Purpose:** 设置 `mie scatter focus` 的值或状态。

### SetMieScatterStrength
`public void SetMieScatterStrength(float strength)`

**用途 / Purpose:** 设置 `mie scatter strength` 的值或状态。

### SetBrightpassThreshold
`public void SetBrightpassThreshold(float threshold)`

**用途 / Purpose:** 设置 `brightpass threshold` 的值或状态。

### SetLensDistortion
`public void SetLensDistortion(float amount)`

**用途 / Purpose:** 设置 `lens distortion` 的值或状态。

### SetHexagonVignetteAlpha
`public void SetHexagonVignetteAlpha(float amount)`

**用途 / Purpose:** 设置 `hexagon vignette alpha` 的值或状态。

### SetMinExposure
`public void SetMinExposure(float minExposure)`

**用途 / Purpose:** 设置 `min exposure` 的值或状态。

### SetMaxExposure
`public void SetMaxExposure(float maxExposure)`

**用途 / Purpose:** 设置 `max exposure` 的值或状态。

### SetTargetExposure
`public void SetTargetExposure(float targetExposure)`

**用途 / Purpose:** 设置 `target exposure` 的值或状态。

### SetMiddleGray
`public void SetMiddleGray(float middleGray)`

**用途 / Purpose:** 设置 `middle gray` 的值或状态。

### SetBloomStrength
`public void SetBloomStrength(float bloomStrength)`

**用途 / Purpose:** 设置 `bloom strength` 的值或状态。

### SetBloomAmount
`public void SetBloomAmount(float bloomAmount)`

**用途 / Purpose:** 设置 `bloom amount` 的值或状态。

### SetGrainAmount
`public void SetGrainAmount(float grainAmount)`

**用途 / Purpose:** 设置 `grain amount` 的值或状态。

### AddItemEntity
`public GameEntity AddItemEntity(ref MatrixFrame placementFrame, MetaMesh metaMesh)`

**用途 / Purpose:** 向当前集合/状态中添加 `item entity`。

### RemoveEntity
`public void RemoveEntity(GameEntity entity, int removeReason)`

**用途 / Purpose:** 从当前集合/状态中移除 `entity`。

### RemoveEntity
`public void RemoveEntity(WeakGameEntity entity, int removeReason)`

**用途 / Purpose:** 从当前集合/状态中移除 `entity`。

### AttachEntity
`public bool AttachEntity(GameEntity entity, bool showWarnings = false)`

**用途 / Purpose:** 处理 `attach entity` 相关逻辑。

### AttachEntity
`public bool AttachEntity(WeakGameEntity entity, bool showWarnings = false)`

**用途 / Purpose:** 处理 `attach entity` 相关逻辑。

### AddEntityWithMesh
`public void AddEntityWithMesh(Mesh mesh, ref MatrixFrame frame)`

**用途 / Purpose:** 向当前集合/状态中添加 `entity with mesh`。

### AddEntityWithMultiMesh
`public void AddEntityWithMultiMesh(MetaMesh mesh, ref MatrixFrame frame)`

**用途 / Purpose:** 向当前集合/状态中添加 `entity with multi mesh`。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### ClearAll
`public void ClearAll()`

**用途 / Purpose:** 处理 `clear all` 相关逻辑。

### SetDefaultLighting
`public void SetDefaultLighting()`

**用途 / Purpose:** 设置 `default lighting` 的值或状态。

### CalculateEffectiveLighting
`public bool CalculateEffectiveLighting()`

**用途 / Purpose:** 处理 `calculate effective lighting` 相关逻辑。

### GetPathDistanceBetweenPositions
`public bool GetPathDistanceBetweenPositions(ref WorldPosition point0, ref WorldPosition point1, float agentRadius, out float pathDistance)`

**用途 / Purpose:** 获取 `path distance between positions` 的当前值。

### IsLineToPointClear
`public bool IsLineToPointClear(ref WorldPosition position, ref WorldPosition destination, float agentRadius)`

**用途 / Purpose:** 处理 `is line to point clear` 相关逻辑。

### IsLineToPointClear
`public bool IsLineToPointClear(UIntPtr startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**用途 / Purpose:** 处理 `is line to point clear` 相关逻辑。

### IsLineToPointClear
`public bool IsLineToPointClear(int startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**用途 / Purpose:** 处理 `is line to point clear` 相关逻辑。

### GetLastPointOnNavigationMeshFromPositionToDestination
`public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(int startingFace, Vec2 position, Vec2 destination, int excludedFaceIds)`

**用途 / Purpose:** 获取 `last point on navigation mesh from position to destination` 的当前值。

### GetLastPositionOnNavMeshFaceForPointAndDirection
`public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord record, Vec2 position, Vec2 destination)`

**用途 / Purpose:** 获取 `last position on nav mesh face for point and direction` 的当前值。

### GetLastPointOnNavigationMeshFromWorldPositionToDestination
`public Vec3 GetLastPointOnNavigationMeshFromWorldPositionToDestination(ref WorldPosition position, Vec2 destination)`

**用途 / Purpose:** 获取 `last point on navigation mesh from world position to destination` 的当前值。

### DoesPathExistBetweenFaces
`public bool DoesPathExistBetweenFaces(int firstNavMeshFace, int secondNavMeshFace, bool ignoreDisabled)`

**用途 / Purpose:** 处理 `does path exist between faces` 相关逻辑。

### GetHeightAtPoint
`public bool GetHeightAtPoint(Vec2 point, BodyFlags excludeBodyFlags, ref float height)`

**用途 / Purpose:** 获取 `height at point` 的当前值。

### GetNormalAt
`public Vec3 GetNormalAt(Vec2 position)`

**用途 / Purpose:** 获取 `normal at` 的当前值。

### GetEntities
`public void GetEntities(ref List<GameEntity> entities)`

**用途 / Purpose:** 获取 `entities` 的当前值。

### GetRootEntities
`public void GetRootEntities(NativeObjectArray entities)`

**用途 / Purpose:** 获取 `root entities` 的当前值。

### SelectEntitiesCollidedWith
`public int SelectEntitiesCollidedWith(ref Ray ray, Intersection intersectionsOutput, UIntPtr entityIds)`

**用途 / Purpose:** 处理 `select entities collided with` 相关逻辑。

### RayCastExcludingTwoEntities
`public bool RayCastExcludingTwoEntities(BodyFlags flags, in Ray ray, WeakGameEntity entity1, WeakGameEntity entity2)`

**用途 / Purpose:** 处理 `ray cast excluding two entities` 相关逻辑。

### GenerateContactsWithCapsule
`public int GenerateContactsWithCapsule(ref CapsuleData capsule, BodyFlags exclude_flags, bool isFixedTick, Intersection intersectionsOutput, WeakGameEntity gameEntities, UIntPtr entityPointers)`

**用途 / Purpose:** 处理 `generate contacts with capsule` 相关逻辑。

### GenerateContactsWithCapsuleAgainstEntity
`public int GenerateContactsWithCapsuleAgainstEntity(ref CapsuleData capsule, BodyFlags excludeFlags, WeakGameEntity entity, Intersection intersectionsOutput)`

**用途 / Purpose:** 处理 `generate contacts with capsule against entity` 相关逻辑。

### InvalidateTerrainPhysicsMaterials
`public void InvalidateTerrainPhysicsMaterials()`

**用途 / Purpose:** 处理 `invalidate terrain physics materials` 相关逻辑。

### Read
`public void Read(string sceneName)`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### Read
`public void Read(string sceneName, string moduleId, ref SceneInitializationData initData, string forcedAtmoName = "")`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### Read
`public void Read(string sceneName, ref SceneInitializationData initData, string forcedAtmoName = "")`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### ReadAndCalculateInitialCamera
`public MatrixFrame ReadAndCalculateInitialCamera()`

**用途 / Purpose:** 处理 `read and calculate initial camera` 相关逻辑。

### OptimizeScene
`public void OptimizeScene(bool optimizeFlora = true, bool optimizeOro = false)`

**用途 / Purpose:** 处理 `optimize scene` 相关逻辑。

### GetTerrainHeight
`public float GetTerrainHeight(Vec2 position, bool checkHoles = true)`

**用途 / Purpose:** 获取 `terrain height` 的当前值。

### CheckResources
`public void CheckResources(bool checkInvisibleEntities)`

**用途 / Purpose:** 处理 `check resources` 相关逻辑。

### ForceLoadResources
`public void ForceLoadResources(bool checkInvisibleEntities)`

**用途 / Purpose:** 处理 `force load resources` 相关逻辑。

### SetDepthOfFieldParameters
`public void SetDepthOfFieldParameters(float depthOfFieldFocusStart, float depthOfFieldFocusEnd, bool isVignetteOn)`

**用途 / Purpose:** 设置 `depth of field parameters` 的值或状态。

### SetDepthOfFieldFocus
`public void SetDepthOfFieldFocus(float depthOfFieldFocus)`

**用途 / Purpose:** 设置 `depth of field focus` 的值或状态。

### ResetDepthOfFieldParams
`public void ResetDepthOfFieldParams()`

**用途 / Purpose:** 将 `depth of field params` 重置为初始状态。

### PreloadForRendering
`public void PreloadForRendering()`

**用途 / Purpose:** 处理 `preload for rendering` 相关逻辑。

### SetColorGradeBlend
`public void SetColorGradeBlend(string texture1, string texture2, float alpha)`

**用途 / Purpose:** 设置 `color grade blend` 的值或状态。

### GetGroundHeightAtPosition
`public float GetGroundHeightAtPosition(Vec3 position, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**用途 / Purpose:** 获取 `ground height at position` 的当前值。

### GetGroundHeightAndBodyFlagsAtPosition
`public float GetGroundHeightAndBodyFlagsAtPosition(Vec3 position, out BodyFlags contactPointFlags, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**用途 / Purpose:** 获取 `ground height and body flags at position` 的当前值。

### GetGroundHeightAtPosition
`public float GetGroundHeightAtPosition(Vec3 position, out Vec3 normal, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**用途 / Purpose:** 获取 `ground height at position` 的当前值。

### PauseSceneSounds
`public void PauseSceneSounds()`

**用途 / Purpose:** 处理 `pause scene sounds` 相关逻辑。

### ResumeSceneSounds
`public void ResumeSceneSounds()`

**用途 / Purpose:** 处理 `resume scene sounds` 相关逻辑。

### FinishSceneSounds
`public void FinishSceneSounds()`

**用途 / Purpose:** 处理 `finish scene sounds` 相关逻辑。

### BoxCastOnlyForCamera
`public bool BoxCastOnlyForCamera(Vec3 boxPoints, in Vec3 centerPoint, bool castSupportRay, in Vec3 supportRaycastPoint, in Vec3 dir, float distance, WeakGameEntity ignoredEntity, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.Disabled | BodyFlags.Dynamic | BodyFlags.Ladder | BodyFlags.OnlyCollideWithRaycast | BodyFlags.AILimiter | BodyFlags.Barrier | BodyFlags.Barrier3D | BodyFlags.Ragdoll | BodyFlags.RagdollLimiter | BodyFlags.DroppedItem | BodyFlags.DoNotCollideWithRaycast | BodyFlags.DontCollideWithCamera | BodyFlags.WaterBody | BodyFlags.AgentOnly | BodyFlags.MissileOnly | BodyFlags.StealthBox)`

**用途 / Purpose:** 处理 `box cast only for camera` 相关逻辑。

### BoxCast
`public bool BoxCast(Vec3 boxMin, Vec3 boxMax, bool castSupportRay, Vec3 supportRaycastPoint, Vec3 dir, float distance, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.CameraCollisionRayCastExludeFlags)`

**用途 / Purpose:** 处理 `box cast` 相关逻辑。

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 处理 `ray cast for closest entity or terrain` 相关逻辑。

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 处理 `ray cast for closest entity or terrain fixed physics` 相关逻辑。

### FocusRayCastForFixedPhysics
`public bool FocusRayCastForFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 处理 `focus ray cast for fixed physics` 相关逻辑。

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 处理 `ray cast for closest entity or terrain` 相关逻辑。

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 处理 `ray cast for closest entity or terrain fixed physics` 相关逻辑。

### RayCastForRamming
`public bool RayCastForRamming(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, float rayThickness, out float collisionDistance, out Vec3 intersectionPoint, out WeakGameEntity collidedEntity, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags, BodyFlags includeBodyFlags = BodyFlags.None)`

**用途 / Purpose:** 处理 `ray cast for ramming` 相关逻辑。

### RayCastForClosestEntityOrTerrainIgnoreEntity
`public bool RayCastForClosestEntityOrTerrainIgnoreEntity(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, out float collisionDistance, out GameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 处理 `ray cast for closest entity or terrain ignore entity` 相关逻辑。

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 处理 `ray cast for closest entity or terrain` 相关逻辑。

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 处理 `ray cast for closest entity or terrain fixed physics` 相关逻辑。

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 处理 `ray cast for closest entity or terrain fixed physics` 相关逻辑。

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 处理 `ray cast for closest entity or terrain` 相关逻辑。

### ImportNavigationMeshPrefab
`public void ImportNavigationMeshPrefab(string navMeshPrefabName, int navMeshGroupShift)`

**用途 / Purpose:** 处理 `import navigation mesh prefab` 相关逻辑。

### ImportNavigationMeshPrefabWithFrame
`public void ImportNavigationMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)`

**用途 / Purpose:** 处理 `import navigation mesh prefab with frame` 相关逻辑。

### SaveNavMeshPrefabWithFrame
`public void SaveNavMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)`

**用途 / Purpose:** 保存 `nav mesh prefab with frame` 数据。

### SetNavMeshRegionMap
`public void SetNavMeshRegionMap(bool regionMap)`

**用途 / Purpose:** 设置 `nav mesh region map` 的值或状态。

### MarkFacesWithIdAsLadder
`public void MarkFacesWithIdAsLadder(int faceGroupId, bool isLadder)`

**用途 / Purpose:** 处理 `mark faces with id as ladder` 相关逻辑。

### SetAbilityOfFacesWithId
`public int SetAbilityOfFacesWithId(int faceGroupId, bool isEnabled)`

**用途 / Purpose:** 设置 `ability of faces with id` 的值或状态。

### SwapFaceConnectionsWithID
`public bool SwapFaceConnectionsWithID(int hubFaceGroupID, int toBeSeparatedFaceGroupId, int toBeMergedFaceGroupId, bool canFail)`

**用途 / Purpose:** 处理 `swap face connections with i d` 相关逻辑。

### MergeFacesWithId
`public void MergeFacesWithId(int faceGroupId0, int faceGroupId1, int newFaceGroupId)`

**用途 / Purpose:** 处理 `merge faces with id` 相关逻辑。

### SeparateFacesWithId
`public void SeparateFacesWithId(int faceGroupId0, int faceGroupId1)`

**用途 / Purpose:** 处理 `separate faces with id` 相关逻辑。

### IsAnyFaceWithId
`public bool IsAnyFaceWithId(int faceGroupId)`

**用途 / Purpose:** 处理 `is any face with id` 相关逻辑。

### GetNavigationMeshForPosition
`public UIntPtr GetNavigationMeshForPosition(in Vec3 position)`

**用途 / Purpose:** 获取 `navigation mesh for position` 的当前值。

### GetNearestNavigationMeshForPosition
`public UIntPtr GetNearestNavigationMeshForPosition(in Vec3 position, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)`

**用途 / Purpose:** 获取 `nearest navigation mesh for position` 的当前值。

### GetNavigationMeshForPosition
`public UIntPtr GetNavigationMeshForPosition(in Vec3 position, out int faceGroupId, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)`

**用途 / Purpose:** 获取 `navigation mesh for position` 的当前值。

### DoesPathExistBetweenPositions
`public bool DoesPathExistBetweenPositions(WorldPosition position, WorldPosition destination)`

**用途 / Purpose:** 处理 `does path exist between positions` 相关逻辑。

### SetLandscapeRainMaskData
`public void SetLandscapeRainMaskData(byte data)`

**用途 / Purpose:** 设置 `landscape rain mask data` 的值或状态。

### EnsurePostfxSystem
`public void EnsurePostfxSystem()`

**用途 / Purpose:** 处理 `ensure postfx system` 相关逻辑。

### SetBloom
`public void SetBloom(bool mode)`

**用途 / Purpose:** 设置 `bloom` 的值或状态。

### SetDofMode
`public void SetDofMode(bool mode)`

**用途 / Purpose:** 设置 `dof mode` 的值或状态。

### SetOcclusionMode
`public void SetOcclusionMode(bool mode)`

**用途 / Purpose:** 设置 `occlusion mode` 的值或状态。

### SetExternalInjectionTexture
`public void SetExternalInjectionTexture(Texture texture)`

**用途 / Purpose:** 设置 `external injection texture` 的值或状态。

### SetSunshaftMode
`public void SetSunshaftMode(bool mode)`

**用途 / Purpose:** 设置 `sunshaft mode` 的值或状态。

### GetSunDirection
`public Vec3 GetSunDirection()`

**用途 / Purpose:** 获取 `sun direction` 的当前值。

### GetNorthAngle
`public float GetNorthAngle()`

**用途 / Purpose:** 获取 `north angle` 的当前值。

### GetNorthRotation
`public float GetNorthRotation()`

**用途 / Purpose:** 获取 `north rotation` 的当前值。

### GetTerrainMinMaxHeight
`public bool GetTerrainMinMaxHeight(out float minHeight, out float maxHeight)`

**用途 / Purpose:** 获取 `terrain min max height` 的当前值。

### GetPhysicsMinMax
`public void GetPhysicsMinMax(ref Vec3 min_max)`

**用途 / Purpose:** 获取 `physics min max` 的当前值。

### IsEditorScene
`public bool IsEditorScene()`

**用途 / Purpose:** 处理 `is editor scene` 相关逻辑。

### SetMotionBlurMode
`public void SetMotionBlurMode(bool mode)`

**用途 / Purpose:** 设置 `motion blur mode` 的值或状态。

### SetAntialiasingMode
`public void SetAntialiasingMode(bool mode)`

**用途 / Purpose:** 设置 `antialiasing mode` 的值或状态。

### SetDLSSMode
`public void SetDLSSMode(bool mode)`

**用途 / Purpose:** 设置 `d l s s mode` 的值或状态。

### FindWeakEntitiesWithTag
`public IEnumerable<WeakGameEntity> FindWeakEntitiesWithTag(string tag)`

**用途 / Purpose:** 处理 `find weak entities with tag` 相关逻辑。

### FindWeakEntityWithTag
`public WeakGameEntity FindWeakEntityWithTag(string tag)`

**用途 / Purpose:** 处理 `find weak entity with tag` 相关逻辑。

### FindEntitiesWithTag
`public IEnumerable<GameEntity> FindEntitiesWithTag(string tag)`

**用途 / Purpose:** 处理 `find entities with tag` 相关逻辑。

### FindEntityWithTag
`public GameEntity FindEntityWithTag(string tag)`

**用途 / Purpose:** 处理 `find entity with tag` 相关逻辑。

### FindEntityWithName
`public GameEntity FindEntityWithName(string name)`

**用途 / Purpose:** 处理 `find entity with name` 相关逻辑。

### FindWeakEntitiesWithTagExpression
`public IEnumerable<WeakGameEntity> FindWeakEntitiesWithTagExpression(string expression)`

**用途 / Purpose:** 处理 `find weak entities with tag expression` 相关逻辑。

### FindEntitiesWithTagExpression
`public IEnumerable<GameEntity> FindEntitiesWithTagExpression(string expression)`

**用途 / Purpose:** 处理 `find entities with tag expression` 相关逻辑。

### GetSoftBoundaryVertexCount
`public int GetSoftBoundaryVertexCount()`

**用途 / Purpose:** 获取 `soft boundary vertex count` 的当前值。

### GetHardBoundaryVertexCount
`public int GetHardBoundaryVertexCount()`

**用途 / Purpose:** 获取 `hard boundary vertex count` 的当前值。

### GetSoftBoundaryVertex
`public Vec2 GetSoftBoundaryVertex(int index)`

**用途 / Purpose:** 获取 `soft boundary vertex` 的当前值。

### GetHardBoundaryVertex
`public Vec2 GetHardBoundaryVertex(int index)`

**用途 / Purpose:** 获取 `hard boundary vertex` 的当前值。

### GetPathWithName
`public Path GetPathWithName(string name)`

**用途 / Purpose:** 获取 `path with name` 的当前值。

### DeletePathWithName
`public void DeletePathWithName(string name)`

**用途 / Purpose:** 处理 `delete path with name` 相关逻辑。

### AddPath
`public void AddPath(string name)`

**用途 / Purpose:** 向当前集合/状态中添加 `path`。

### AddPathPoint
`public void AddPathPoint(string name, MatrixFrame frame)`

**用途 / Purpose:** 向当前集合/状态中添加 `path point`。

### GetBoundingBox
`public void GetBoundingBox(out Vec3 min, out Vec3 max)`

**用途 / Purpose:** 获取 `bounding box` 的当前值。

### GetSceneLimits
`public void GetSceneLimits(out Vec3 min, out Vec3 max)`

**用途 / Purpose:** 获取 `scene limits` 的当前值。

### SetName
`public void SetName(string name)`

**用途 / Purpose:** 设置 `name` 的值或状态。

### GetName
`public string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetModulePath
`public string GetModulePath()`

**用途 / Purpose:** 获取 `module path` 的当前值。

### SetOwnerThread
`public void SetOwnerThread()`

**用途 / Purpose:** 设置 `owner thread` 的值或状态。

### GetPathsWithNamePrefix
`public Path GetPathsWithNamePrefix(string prefix)`

**用途 / Purpose:** 获取 `paths with name prefix` 的当前值。

### SetUseConstantTime
`public void SetUseConstantTime(bool value)`

**用途 / Purpose:** 设置 `use constant time` 的值或状态。

### CheckPointCanSeePoint
`public bool CheckPointCanSeePoint(Vec3 source, Vec3 target, float? distanceToCheck = null)`

**用途 / Purpose:** 处理 `check point can see point` 相关逻辑。

### SetPlaySoundEventsAfterReadyToRender
`public void SetPlaySoundEventsAfterReadyToRender(bool value)`

**用途 / Purpose:** 设置 `play sound events after ready to render` 的值或状态。

### DisableStaticShadows
`public void DisableStaticShadows(bool value)`

**用途 / Purpose:** 处理 `disable static shadows` 相关逻辑。

### GetSkyboxMesh
`public Mesh GetSkyboxMesh()`

**用途 / Purpose:** 获取 `skybox mesh` 的当前值。

### SetAtmosphereWithName
`public void SetAtmosphereWithName(string name)`

**用途 / Purpose:** 设置 `atmosphere with name` 的值或状态。

### FillEntityWithHardBorderPhysicsBarrier
`public void FillEntityWithHardBorderPhysicsBarrier(GameEntity entity)`

**用途 / Purpose:** 处理 `fill entity with hard border physics barrier` 相关逻辑。

### ClearDecals
`public void ClearDecals()`

**用途 / Purpose:** 处理 `clear decals` 相关逻辑。

### SetPhotoAtmosphereViaTod
`public void SetPhotoAtmosphereViaTod(float tod, bool withStorm)`

**用途 / Purpose:** 设置 `photo atmosphere via tod` 的值或状态。

### IsPositionOnADynamicNavMesh
`public bool IsPositionOnADynamicNavMesh(Vec3 position)`

**用途 / Purpose:** 处理 `is position on a dynamic nav mesh` 相关逻辑。

### WaitWaterRendererCPUSimulation
`public void WaitWaterRendererCPUSimulation()`

**用途 / Purpose:** 处理 `wait water renderer c p u simulation` 相关逻辑。

### EnableInclusiveAsyncPhysx
`public void EnableInclusiveAsyncPhysx()`

**用途 / Purpose:** 处理 `enable inclusive async physx` 相关逻辑。

### EnsureWaterWakeRenderer
`public void EnsureWaterWakeRenderer()`

**用途 / Purpose:** 处理 `ensure water wake renderer` 相关逻辑。

### DeleteWaterWakeRenderer
`public void DeleteWaterWakeRenderer()`

**用途 / Purpose:** 处理 `delete water wake renderer` 相关逻辑。

### SceneHadWaterWakeRenderer
`public bool SceneHadWaterWakeRenderer()`

**用途 / Purpose:** 处理 `scene had water wake renderer` 相关逻辑。

### SetWaterWakeWorldSize
`public void SetWaterWakeWorldSize(float worldSize, float eraseFactor)`

**用途 / Purpose:** 设置 `water wake world size` 的值或状态。

### SetWaterWakeCameraOffset
`public void SetWaterWakeCameraOffset(float cameraOffset)`

**用途 / Purpose:** 设置 `water wake camera offset` 的值或状态。

### TickWake
`public void TickWake(float dt)`

**用途 / Purpose:** 处理 `tick wake` 相关逻辑。

### SetDoNotAddEntitiesToTickList
`public void SetDoNotAddEntitiesToTickList(bool value)`

**用途 / Purpose:** 设置 `do not add entities to tick list` 的值或状态。

### SetDontLoadInvisibleEntities
`public void SetDontLoadInvisibleEntities(bool value)`

**用途 / Purpose:** 设置 `dont load invisible entities` 的值或状态。

### SetUsesDeleteLaterSystem
`public void SetUsesDeleteLaterSystem(bool value)`

**用途 / Purpose:** 设置 `uses delete later system` 的值或状态。

### ClearCurrentFrameTickEntities
`public void ClearCurrentFrameTickEntities()`

**用途 / Purpose:** 处理 `clear current frame tick entities` 相关逻辑。

### FindClosestExitPositionForPositionOnABoundaryFace
`public Vec2 FindClosestExitPositionForPositionOnABoundaryFace(Vec3 position, UIntPtr boundaryFacePointer)`

**用途 / Purpose:** 处理 `find closest exit position for position on a boundary face` 相关逻辑。

## 使用示例

```csharp
var value = new Scene();
value.IsDefaultEditorScene();
```

## 参见

- [完整类目录](../catalog)