---
title: "Scene"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Scene`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Scene

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Scene : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/Scene.cs`

## Overview

`Scene` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### IsDefaultEditorScene
`public bool IsDefaultEditorScene()`

**Purpose:** Handles logic related to `is default editor scene`.

### IsMultiplayerScene
`public bool IsMultiplayerScene()`

**Purpose:** Handles logic related to `is multiplayer scene`.

### TakePhotoModePicture
`public string TakePhotoModePicture(bool saveAmbientOcclusionPass, bool savingObjectIdPass, bool saveShadowPass)`

**Purpose:** Handles logic related to `take photo mode picture`.

### GetAllColorGradeNames
`public string GetAllColorGradeNames()`

**Purpose:** Gets the current value of `all color grade names`.

### GetAllFilterNames
`public string GetAllFilterNames()`

**Purpose:** Gets the current value of `all filter names`.

### GetPhotoModeRoll
`public float GetPhotoModeRoll()`

**Purpose:** Gets the current value of `photo mode roll`.

### GetPhotoModeOrbit
`public bool GetPhotoModeOrbit()`

**Purpose:** Gets the current value of `photo mode orbit`.

### GetPhotoModeOn
`public bool GetPhotoModeOn()`

**Purpose:** Gets the current value of `photo mode on`.

### GetPhotoModeFocus
`public void GetPhotoModeFocus(ref float focus, ref float focusStart, ref float focusEnd, ref float exposure, ref bool vignetteOn)`

**Purpose:** Gets the current value of `photo mode focus`.

### GetSceneColorGradeIndex
`public int GetSceneColorGradeIndex()`

**Purpose:** Gets the current value of `scene color grade index`.

### GetSceneFilterIndex
`public int GetSceneFilterIndex()`

**Purpose:** Gets the current value of `scene filter index`.

### EnableFixedTick
`public void EnableFixedTick()`

**Purpose:** Handles logic related to `enable fixed tick`.

### GetLoadingStateName
`public string GetLoadingStateName()`

**Purpose:** Gets the current value of `loading state name`.

### IsLoadingFinished
`public bool IsLoadingFinished()`

**Purpose:** Handles logic related to `is loading finished`.

### SetPhotoModeRoll
`public void SetPhotoModeRoll(float roll)`

**Purpose:** Sets the value or state of `photo mode roll`.

### SetPhotoModeOrbit
`public void SetPhotoModeOrbit(bool orbit)`

**Purpose:** Sets the value or state of `photo mode orbit`.

### GetFallDensity
`public float GetFallDensity()`

**Purpose:** Gets the current value of `fall density`.

### SetPhotoModeOn
`public void SetPhotoModeOn(bool on)`

**Purpose:** Sets the value or state of `photo mode on`.

### SetPhotoModeFocus
`public void SetPhotoModeFocus(float focusStart, float focusEnd, float focus, float exposure)`

**Purpose:** Sets the value or state of `photo mode focus`.

### SetPhotoModeFov
`public void SetPhotoModeFov(float verticalFov)`

**Purpose:** Sets the value or state of `photo mode fov`.

### GetPhotoModeFov
`public float GetPhotoModeFov()`

**Purpose:** Gets the current value of `photo mode fov`.

### HasDecalRenderer
`public bool HasDecalRenderer()`

**Purpose:** Checks whether the current object has/contains `decal renderer`.

### SetPhotoModeVignette
`public void SetPhotoModeVignette(bool vignetteOn)`

**Purpose:** Sets the value or state of `photo mode vignette`.

### SetSceneColorGradeIndex
`public void SetSceneColorGradeIndex(int index)`

**Purpose:** Sets the value or state of `scene color grade index`.

### SetSceneFilterIndex
`public int SetSceneFilterIndex(int index)`

**Purpose:** Sets the value or state of `scene filter index`.

### SetSceneColorGrade
`public void SetSceneColorGrade(string textureName)`

**Purpose:** Sets the value or state of `scene color grade`.

### SetUpgradeLevel
`public void SetUpgradeLevel(int level)`

**Purpose:** Sets the value or state of `upgrade level`.

### CreateBurstParticle
`public void CreateBurstParticle(int particleId, MatrixFrame frame)`

**Purpose:** Creates a new `burst particle` instance or object.

### GetTerrainHeightData
`public float GetTerrainHeightData(int nodeXIndex, int nodeYIndex)`

**Purpose:** Gets the current value of `terrain height data`.

### GetTerrainPhysicsMaterialIndexData
`public short GetTerrainPhysicsMaterialIndexData(int nodeXIndex, int nodeYIndex)`

**Purpose:** Gets the current value of `terrain physics material index data`.

### GetTerrainData
`public void GetTerrainData(out Vec2i nodeDimension, out float nodeSize, out int layerCount, out int layerVersion)`

**Purpose:** Gets the current value of `terrain data`.

### GetTerrainNodeData
`public void GetTerrainNodeData(int xIndex, int yIndex, out int vertexCountAlongAxis, out float quadLength, out float minHeight, out float maxHeight)`

**Purpose:** Gets the current value of `terrain node data`.

### GetTerrainPhysicsMaterialAtLayer
`public PhysicsMaterial GetTerrainPhysicsMaterialAtLayer(int layerIndex)`

**Purpose:** Gets the current value of `terrain physics material at layer`.

### SetSceneColorGrade
`public void SetSceneColorGrade(Scene scene, string textureName)`

**Purpose:** Sets the value or state of `scene color grade`.

### GetWaterLevel
`public float GetWaterLevel()`

**Purpose:** Gets the current value of `water level`.

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)`

**Purpose:** Gets the current value of `water level at position`.

### GetWaterSpeedAtPosition
`public Vec3 GetWaterSpeedAtPosition(Vec2 position, bool doChoppinessCorrection)`

**Purpose:** Gets the current value of `water speed at position`.

### GetBulkWaterLevelAtPositions
`public void GetBulkWaterLevelAtPositions(Vec2 waterHeightQueryArray, ref float waterHeightsAtVolumes, ref Vec3 waterSurfaceNormals)`

**Purpose:** Gets the current value of `bulk water level at positions`.

### GetInterpolationFactorForBodyWorldTransformSmoothing
`public void GetInterpolationFactorForBodyWorldTransformSmoothing(out float interpolationFactor, out float fixedDt)`

**Purpose:** Gets the current value of `interpolation factor for body world transform smoothing`.

### GetBulkWaterLevelAtVolumes
`public void GetBulkWaterLevelAtVolumes(UIntPtr waterHeightQueryArray, int waterHeightQueryArrayCount, in MatrixFrame globalFrame)`

**Purpose:** Gets the current value of `bulk water level at volumes`.

### GetWaterStrength
`public float GetWaterStrength()`

**Purpose:** Gets the current value of `water strength`.

### DeRegisterShipVisual
`public void DeRegisterShipVisual(UIntPtr visualPointer)`

**Purpose:** Handles logic related to `de register ship visual`.

### RegisterShipVisualToWaterRenderer
`public UIntPtr RegisterShipVisualToWaterRenderer(WeakGameEntity entity, in Vec3 waterEffectBB)`

**Purpose:** Handles logic related to `register ship visual to water renderer`.

### SetWaterStrength
`public void SetWaterStrength(float newWaterStrength)`

**Purpose:** Sets the value or state of `water strength`.

### AddWaterWakeWithSphere
`public void AddWaterWakeWithSphere(Vec3 position, float radius, float wakeVisibility, float foamVisibility)`

**Purpose:** Adds `water wake with sphere` to the current collection or state.

### AddWaterWakeWithCapsule
`public void AddWaterWakeWithCapsule(Vec3 positionA, float radiusA, Vec3 positionB, float radiusB, float wakeVisibility, float foamVisibility)`

**Purpose:** Adds `water wake with capsule` to the current collection or state.

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds)`

**Purpose:** Gets the current value of `path between a i faces`.

### HasNavmeshFaceUnsharedEdges
`public bool HasNavmeshFaceUnsharedEdges(in PathFaceRecord faceRecord)`

**Purpose:** Checks whether the current object has/contains `navmesh face unshared edges`.

### GetNavmeshFaceCountBetweenTwoIds
`public int GetNavmeshFaceCountBetweenTwoIds(int firstId, int secondId)`

**Purpose:** Gets the current value of `navmesh face count between two ids`.

### GetNavmeshFaceRecordsBetweenTwoIds
`public void GetNavmeshFaceRecordsBetweenTwoIds(int firstId, int secondId, PathFaceRecord faceRecords)`

**Purpose:** Gets the current value of `navmesh face records between two ids`.

### SetFixedTickCallbackActive
`public void SetFixedTickCallbackActive(bool isActive)`

**Purpose:** Sets the value or state of `fixed tick callback active`.

### SetOnCollisionFilterCallbackActive
`public void SetOnCollisionFilterCallbackActive(bool isActive)`

**Purpose:** Sets the value or state of `on collision filter callback active`.

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**Purpose:** Gets the current value of `path between a i faces`.

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier)`

**Purpose:** Gets the current value of `path between a i faces`.

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**Purpose:** Gets the current value of `path between a i faces`.

### GetPathDistanceBetweenAIFaces
`public bool GetPathDistanceBetweenAIFaces(int startingAiFace, int endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**Purpose:** Gets the current value of `path distance between a i faces`.

### GetNavMeshFaceIndex
`public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec2 position, bool isRegion1, bool checkIfDisabled, bool ignoreHeight = false)`

**Purpose:** Gets the current value of `nav mesh face index`.

### GetNavMeshFaceIndex
`public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec3 position, bool checkIfDisabled)`

**Purpose:** Gets the current value of `nav mesh face index`.

### CreateNewScene
`public static Scene CreateNewScene(bool initialize_physics = true, bool enable_decals = true, DecalAtlasGroup atlasGroup = DecalAtlasGroup.All, string sceneName = "mono_renderscene")`

**Purpose:** Creates a new `new scene` instance or object.

### AddAlwaysRenderedSkeleton
`public void AddAlwaysRenderedSkeleton(Skeleton skeleton)`

**Purpose:** Adds `always rendered skeleton` to the current collection or state.

### RemoveAlwaysRenderedSkeleton
`public void RemoveAlwaysRenderedSkeleton(Skeleton skeleton)`

**Purpose:** Removes `always rendered skeleton` from the current collection or state.

### CreatePathMesh
`public MetaMesh CreatePathMesh(string baseEntityName, bool isWaterPath)`

**Purpose:** Creates a new `path mesh` instance or object.

### SetActiveVisibilityLevels
`public void SetActiveVisibilityLevels(List<string> levelsToActivate)`

**Purpose:** Sets the value or state of `active visibility levels`.

### SetDoNotWaitForLoadingStatesToRender
`public void SetDoNotWaitForLoadingStatesToRender(bool value)`

**Purpose:** Sets the value or state of `do not wait for loading states to render`.

### SetDynamicSnowTexture
`public void SetDynamicSnowTexture(Texture texture)`

**Purpose:** Sets the value or state of `dynamic snow texture`.

### GetWindFlowMapData
`public void GetWindFlowMapData(float flowMapData)`

**Purpose:** Gets the current value of `wind flow map data`.

### CreateDynamicRainTexture
`public void CreateDynamicRainTexture(int w, int h)`

**Purpose:** Creates a new `dynamic rain texture` instance or object.

### CreatePathMesh
`public MetaMesh CreatePathMesh(IList<GameEntity> pathNodes, bool isWaterPath = false)`

**Purpose:** Creates a new `path mesh` instance or object.

### GetEntityWithGuid
`public GameEntity GetEntityWithGuid(string guid)`

**Purpose:** Gets the current value of `entity with guid`.

### IsEntityFrameChanged
`public bool IsEntityFrameChanged(string containsName)`

**Purpose:** Handles logic related to `is entity frame changed`.

### GetTerrainHeightAndNormal
`public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)`

**Purpose:** Gets the current value of `terrain height and normal`.

### GetFloraInstanceCount
`public int GetFloraInstanceCount()`

**Purpose:** Gets the current value of `flora instance count`.

### GetFloraRendererTextureUsage
`public int GetFloraRendererTextureUsage()`

**Purpose:** Gets the current value of `flora renderer texture usage`.

### GetTerrainMemoryUsage
`public int GetTerrainMemoryUsage()`

**Purpose:** Gets the current value of `terrain memory usage`.

### SetFetchCrcInfoOfScene
`public void SetFetchCrcInfoOfScene(bool value)`

**Purpose:** Sets the value or state of `fetch crc info of scene`.

### GetSceneXMLCRC
`public uint GetSceneXMLCRC()`

**Purpose:** Gets the current value of `scene x m l c r c`.

### GetNavigationMeshCRC
`public uint GetNavigationMeshCRC()`

**Purpose:** Gets the current value of `navigation mesh c r c`.

### SetGlobalWindStrengthVector
`public void SetGlobalWindStrengthVector(in Vec2 windVector)`

**Purpose:** Sets the value or state of `global wind strength vector`.

### GetGlobalWindStrengthVector
`public Vec2 GetGlobalWindStrengthVector()`

**Purpose:** Gets the current value of `global wind strength vector`.

### GetGlobalWindVelocity
`public Vec2 GetGlobalWindVelocity()`

**Purpose:** Gets the current value of `global wind velocity`.

### SetGlobalWindVelocity
`public void SetGlobalWindVelocity(in Vec2 windVector)`

**Purpose:** Sets the value or state of `global wind velocity`.

### GetEnginePhysicsEnabled
`public bool GetEnginePhysicsEnabled()`

**Purpose:** Gets the current value of `engine physics enabled`.

### ClearNavMesh
`public void ClearNavMesh()`

**Purpose:** Handles logic related to `clear nav mesh`.

### StallLoadingRenderingsUntilFurtherNotice
`public void StallLoadingRenderingsUntilFurtherNotice()`

**Purpose:** Handles logic related to `stall loading renderings until further notice`.

### GetNavMeshFaceCount
`public int GetNavMeshFaceCount()`

**Purpose:** Gets the current value of `nav mesh face count`.

### ResumeLoadingRenderings
`public void ResumeLoadingRenderings()`

**Purpose:** Handles logic related to `resume loading renderings`.

### GetUpgradeLevelMask
`public uint GetUpgradeLevelMask()`

**Purpose:** Gets the current value of `upgrade level mask`.

### SetUpgradeLevelVisibility
`public void SetUpgradeLevelVisibility(uint mask)`

**Purpose:** Sets the value or state of `upgrade level visibility`.

### SetUpgradeLevelVisibility
`public void SetUpgradeLevelVisibility(List<string> levels)`

**Purpose:** Sets the value or state of `upgrade level visibility`.

### GetIdOfNavMeshFace
`public int GetIdOfNavMeshFace(int faceIndex)`

**Purpose:** Gets the current value of `id of nav mesh face`.

### SetClothSimulationState
`public void SetClothSimulationState(bool state)`

**Purpose:** Sets the value or state of `cloth simulation state`.

### GetNavMeshCenterPosition
`public void GetNavMeshCenterPosition(int faceIndex, ref Vec3 centerPosition)`

**Purpose:** Gets the current value of `nav mesh center position`.

### GetNavMeshPathFaceRecord
`public PathFaceRecord GetNavMeshPathFaceRecord(int faceIndex)`

**Purpose:** Gets the current value of `nav mesh path face record`.

### GetPathFaceRecordFromNavMeshFacePointer
`public PathFaceRecord GetPathFaceRecordFromNavMeshFacePointer(UIntPtr navMeshFacePointer)`

**Purpose:** Gets the current value of `path face record from nav mesh face pointer`.

### GetAllNavmeshFaceRecords
`public void GetAllNavmeshFaceRecords(PathFaceRecord faceRecords)`

**Purpose:** Gets the current value of `all navmesh face records`.

### GetFirstEntityWithName
`public GameEntity GetFirstEntityWithName(string name)`

**Purpose:** Gets the current value of `first entity with name`.

### GetCampaignEntityWithName
`public GameEntity GetCampaignEntityWithName(string name)`

**Purpose:** Gets the current value of `campaign entity with name`.

### GetFirstEntityWithScriptComponent
`public GameEntity GetFirstEntityWithScriptComponent(string scriptName)`

**Purpose:** Gets the current value of `first entity with script component`.

### GetUpgradeLevelMaskOfLevelName
`public uint GetUpgradeLevelMaskOfLevelName(string levelName)`

**Purpose:** Gets the current value of `upgrade level mask of level name`.

### GetUpgradeLevelNameOfIndex
`public string GetUpgradeLevelNameOfIndex(int index)`

**Purpose:** Gets the current value of `upgrade level name of index`.

### GetUpgradeLevelCount
`public int GetUpgradeLevelCount()`

**Purpose:** Gets the current value of `upgrade level count`.

### GetWinterTimeFactor
`public float GetWinterTimeFactor()`

**Purpose:** Gets the current value of `winter time factor`.

### GetNavMeshFaceFirstVertexZ
`public float GetNavMeshFaceFirstVertexZ(int faceIndex)`

**Purpose:** Gets the current value of `nav mesh face first vertex z`.

### SetWinterTimeFactor
`public void SetWinterTimeFactor(float winterTimeFactor)`

**Purpose:** Sets the value or state of `winter time factor`.

### SetDrynessFactor
`public void SetDrynessFactor(float drynessFactor)`

**Purpose:** Sets the value or state of `dryness factor`.

### GetFog
`public float GetFog()`

**Purpose:** Gets the current value of `fog`.

### SetFog
`public void SetFog(float fogDensity, ref Vec3 fogColor, float fogFalloff)`

**Purpose:** Sets the value or state of `fog`.

### SetFogAdvanced
`public void SetFogAdvanced(float fogFalloffOffset, float fogFalloffMinFog, float fogFalloffStartDist)`

**Purpose:** Sets the value or state of `fog advanced`.

### SetFogAmbientColor
`public void SetFogAmbientColor(ref Vec3 fogAmbientColor)`

**Purpose:** Sets the value or state of `fog ambient color`.

### SetTemperature
`public void SetTemperature(float temperature)`

**Purpose:** Sets the value or state of `temperature`.

### SetHumidity
`public void SetHumidity(float humidity)`

**Purpose:** Sets the value or state of `humidity`.

### SetDynamicShadowmapCascadesRadiusMultiplier
`public void SetDynamicShadowmapCascadesRadiusMultiplier(float multiplier)`

**Purpose:** Sets the value or state of `dynamic shadowmap cascades radius multiplier`.

### SetEnvironmentMultiplier
`public void SetEnvironmentMultiplier(bool useMultiplier, float multiplier)`

**Purpose:** Sets the value or state of `environment multiplier`.

### SetSkyRotation
`public void SetSkyRotation(float rotation)`

**Purpose:** Sets the value or state of `sky rotation`.

### SetSkyBrightness
`public void SetSkyBrightness(float brightness)`

**Purpose:** Sets the value or state of `sky brightness`.

### SetForcedSnow
`public void SetForcedSnow(bool value)`

**Purpose:** Sets the value or state of `forced snow`.

### SetSunLight
`public void SetSunLight(ref Vec3 color, ref Vec3 direction)`

**Purpose:** Sets the value or state of `sun light`.

### SetSunDirection
`public void SetSunDirection(ref Vec3 direction)`

**Purpose:** Sets the value or state of `sun direction`.

### SetSun
`public void SetSun(ref Vec3 color, float altitude, float angle, float intensity)`

**Purpose:** Sets the value or state of `sun`.

### SetSunAngleAltitude
`public void SetSunAngleAltitude(float angle, float altitude)`

**Purpose:** Sets the value or state of `sun angle altitude`.

### SetSunSize
`public void SetSunSize(float size)`

**Purpose:** Sets the value or state of `sun size`.

### SetSunShaftStrength
`public void SetSunShaftStrength(float strength)`

**Purpose:** Sets the value or state of `sun shaft strength`.

### GetRainDensity
`public float GetRainDensity()`

**Purpose:** Gets the current value of `rain density`.

### SetRainDensity
`public void SetRainDensity(float density)`

**Purpose:** Sets the value or state of `rain density`.

### GetSnowDensity
`public float GetSnowDensity()`

**Purpose:** Gets the current value of `snow density`.

### SetSnowDensity
`public void SetSnowDensity(float density)`

**Purpose:** Sets the value or state of `snow density`.

### AddDecalInstance
`public void AddDecalInstance(Decal decal, string decalSetID, bool deletable)`

**Purpose:** Adds `decal instance` to the current collection or state.

### RemoveDecalInstance
`public void RemoveDecalInstance(Decal decal, string decalSetID)`

**Purpose:** Removes `decal instance` from the current collection or state.

### SetShadow
`public void SetShadow(bool shadowEnabled)`

**Purpose:** Sets the value or state of `shadow`.

### AddPointLight
`public int AddPointLight(ref Vec3 position, float radius)`

**Purpose:** Adds `point light` to the current collection or state.

### AddDirectionalLight
`public int AddDirectionalLight(ref Vec3 position, ref Vec3 direction, float radius)`

**Purpose:** Adds `directional light` to the current collection or state.

### SetLightPosition
`public void SetLightPosition(int lightIndex, ref Vec3 position)`

**Purpose:** Sets the value or state of `light position`.

### SetLightDiffuseColor
`public void SetLightDiffuseColor(int lightIndex, ref Vec3 diffuseColor)`

**Purpose:** Sets the value or state of `light diffuse color`.

### SetLightDirection
`public void SetLightDirection(int lightIndex, ref Vec3 direction)`

**Purpose:** Sets the value or state of `light direction`.

### SetMieScatterFocus
`public void SetMieScatterFocus(float strength)`

**Purpose:** Sets the value or state of `mie scatter focus`.

### SetMieScatterStrength
`public void SetMieScatterStrength(float strength)`

**Purpose:** Sets the value or state of `mie scatter strength`.

### SetBrightpassThreshold
`public void SetBrightpassThreshold(float threshold)`

**Purpose:** Sets the value or state of `brightpass threshold`.

### SetLensDistortion
`public void SetLensDistortion(float amount)`

**Purpose:** Sets the value or state of `lens distortion`.

### SetHexagonVignetteAlpha
`public void SetHexagonVignetteAlpha(float amount)`

**Purpose:** Sets the value or state of `hexagon vignette alpha`.

### SetMinExposure
`public void SetMinExposure(float minExposure)`

**Purpose:** Sets the value or state of `min exposure`.

### SetMaxExposure
`public void SetMaxExposure(float maxExposure)`

**Purpose:** Sets the value or state of `max exposure`.

### SetTargetExposure
`public void SetTargetExposure(float targetExposure)`

**Purpose:** Sets the value or state of `target exposure`.

### SetMiddleGray
`public void SetMiddleGray(float middleGray)`

**Purpose:** Sets the value or state of `middle gray`.

### SetBloomStrength
`public void SetBloomStrength(float bloomStrength)`

**Purpose:** Sets the value or state of `bloom strength`.

### SetBloomAmount
`public void SetBloomAmount(float bloomAmount)`

**Purpose:** Sets the value or state of `bloom amount`.

### SetGrainAmount
`public void SetGrainAmount(float grainAmount)`

**Purpose:** Sets the value or state of `grain amount`.

### AddItemEntity
`public GameEntity AddItemEntity(ref MatrixFrame placementFrame, MetaMesh metaMesh)`

**Purpose:** Adds `item entity` to the current collection or state.

### RemoveEntity
`public void RemoveEntity(GameEntity entity, int removeReason)`

**Purpose:** Removes `entity` from the current collection or state.

### RemoveEntity
`public void RemoveEntity(WeakGameEntity entity, int removeReason)`

**Purpose:** Removes `entity` from the current collection or state.

### AttachEntity
`public bool AttachEntity(GameEntity entity, bool showWarnings = false)`

**Purpose:** Handles logic related to `attach entity`.

### AttachEntity
`public bool AttachEntity(WeakGameEntity entity, bool showWarnings = false)`

**Purpose:** Handles logic related to `attach entity`.

### AddEntityWithMesh
`public void AddEntityWithMesh(Mesh mesh, ref MatrixFrame frame)`

**Purpose:** Adds `entity with mesh` to the current collection or state.

### AddEntityWithMultiMesh
`public void AddEntityWithMultiMesh(MetaMesh mesh, ref MatrixFrame frame)`

**Purpose:** Adds `entity with multi mesh` to the current collection or state.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### ClearAll
`public void ClearAll()`

**Purpose:** Handles logic related to `clear all`.

### SetDefaultLighting
`public void SetDefaultLighting()`

**Purpose:** Sets the value or state of `default lighting`.

### CalculateEffectiveLighting
`public bool CalculateEffectiveLighting()`

**Purpose:** Handles logic related to `calculate effective lighting`.

### GetPathDistanceBetweenPositions
`public bool GetPathDistanceBetweenPositions(ref WorldPosition point0, ref WorldPosition point1, float agentRadius, out float pathDistance)`

**Purpose:** Gets the current value of `path distance between positions`.

### IsLineToPointClear
`public bool IsLineToPointClear(ref WorldPosition position, ref WorldPosition destination, float agentRadius)`

**Purpose:** Handles logic related to `is line to point clear`.

### IsLineToPointClear
`public bool IsLineToPointClear(UIntPtr startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**Purpose:** Handles logic related to `is line to point clear`.

### IsLineToPointClear
`public bool IsLineToPointClear(int startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**Purpose:** Handles logic related to `is line to point clear`.

### GetLastPointOnNavigationMeshFromPositionToDestination
`public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(int startingFace, Vec2 position, Vec2 destination, int excludedFaceIds)`

**Purpose:** Gets the current value of `last point on navigation mesh from position to destination`.

### GetLastPositionOnNavMeshFaceForPointAndDirection
`public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord record, Vec2 position, Vec2 destination)`

**Purpose:** Gets the current value of `last position on nav mesh face for point and direction`.

### GetLastPointOnNavigationMeshFromWorldPositionToDestination
`public Vec3 GetLastPointOnNavigationMeshFromWorldPositionToDestination(ref WorldPosition position, Vec2 destination)`

**Purpose:** Gets the current value of `last point on navigation mesh from world position to destination`.

### DoesPathExistBetweenFaces
`public bool DoesPathExistBetweenFaces(int firstNavMeshFace, int secondNavMeshFace, bool ignoreDisabled)`

**Purpose:** Handles logic related to `does path exist between faces`.

### GetHeightAtPoint
`public bool GetHeightAtPoint(Vec2 point, BodyFlags excludeBodyFlags, ref float height)`

**Purpose:** Gets the current value of `height at point`.

### GetNormalAt
`public Vec3 GetNormalAt(Vec2 position)`

**Purpose:** Gets the current value of `normal at`.

### GetEntities
`public void GetEntities(ref List<GameEntity> entities)`

**Purpose:** Gets the current value of `entities`.

### GetRootEntities
`public void GetRootEntities(NativeObjectArray entities)`

**Purpose:** Gets the current value of `root entities`.

### SelectEntitiesCollidedWith
`public int SelectEntitiesCollidedWith(ref Ray ray, Intersection intersectionsOutput, UIntPtr entityIds)`

**Purpose:** Handles logic related to `select entities collided with`.

### RayCastExcludingTwoEntities
`public bool RayCastExcludingTwoEntities(BodyFlags flags, in Ray ray, WeakGameEntity entity1, WeakGameEntity entity2)`

**Purpose:** Handles logic related to `ray cast excluding two entities`.

### GenerateContactsWithCapsule
`public int GenerateContactsWithCapsule(ref CapsuleData capsule, BodyFlags exclude_flags, bool isFixedTick, Intersection intersectionsOutput, WeakGameEntity gameEntities, UIntPtr entityPointers)`

**Purpose:** Handles logic related to `generate contacts with capsule`.

### GenerateContactsWithCapsuleAgainstEntity
`public int GenerateContactsWithCapsuleAgainstEntity(ref CapsuleData capsule, BodyFlags excludeFlags, WeakGameEntity entity, Intersection intersectionsOutput)`

**Purpose:** Handles logic related to `generate contacts with capsule against entity`.

### InvalidateTerrainPhysicsMaterials
`public void InvalidateTerrainPhysicsMaterials()`

**Purpose:** Handles logic related to `invalidate terrain physics materials`.

### Read
`public void Read(string sceneName)`

**Purpose:** Handles logic related to `read`.

### Read
`public void Read(string sceneName, string moduleId, ref SceneInitializationData initData, string forcedAtmoName = "")`

**Purpose:** Handles logic related to `read`.

### Read
`public void Read(string sceneName, ref SceneInitializationData initData, string forcedAtmoName = "")`

**Purpose:** Handles logic related to `read`.

### ReadAndCalculateInitialCamera
`public MatrixFrame ReadAndCalculateInitialCamera()`

**Purpose:** Handles logic related to `read and calculate initial camera`.

### OptimizeScene
`public void OptimizeScene(bool optimizeFlora = true, bool optimizeOro = false)`

**Purpose:** Handles logic related to `optimize scene`.

### GetTerrainHeight
`public float GetTerrainHeight(Vec2 position, bool checkHoles = true)`

**Purpose:** Gets the current value of `terrain height`.

### CheckResources
`public void CheckResources(bool checkInvisibleEntities)`

**Purpose:** Handles logic related to `check resources`.

### ForceLoadResources
`public void ForceLoadResources(bool checkInvisibleEntities)`

**Purpose:** Handles logic related to `force load resources`.

### SetDepthOfFieldParameters
`public void SetDepthOfFieldParameters(float depthOfFieldFocusStart, float depthOfFieldFocusEnd, bool isVignetteOn)`

**Purpose:** Sets the value or state of `depth of field parameters`.

### SetDepthOfFieldFocus
`public void SetDepthOfFieldFocus(float depthOfFieldFocus)`

**Purpose:** Sets the value or state of `depth of field focus`.

### ResetDepthOfFieldParams
`public void ResetDepthOfFieldParams()`

**Purpose:** Resets `depth of field params` to its initial state.

### PreloadForRendering
`public void PreloadForRendering()`

**Purpose:** Handles logic related to `preload for rendering`.

### SetColorGradeBlend
`public void SetColorGradeBlend(string texture1, string texture2, float alpha)`

**Purpose:** Sets the value or state of `color grade blend`.

### GetGroundHeightAtPosition
`public float GetGroundHeightAtPosition(Vec3 position, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**Purpose:** Gets the current value of `ground height at position`.

### GetGroundHeightAndBodyFlagsAtPosition
`public float GetGroundHeightAndBodyFlagsAtPosition(Vec3 position, out BodyFlags contactPointFlags, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**Purpose:** Gets the current value of `ground height and body flags at position`.

### GetGroundHeightAtPosition
`public float GetGroundHeightAtPosition(Vec3 position, out Vec3 normal, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**Purpose:** Gets the current value of `ground height at position`.

### PauseSceneSounds
`public void PauseSceneSounds()`

**Purpose:** Handles logic related to `pause scene sounds`.

### ResumeSceneSounds
`public void ResumeSceneSounds()`

**Purpose:** Handles logic related to `resume scene sounds`.

### FinishSceneSounds
`public void FinishSceneSounds()`

**Purpose:** Handles logic related to `finish scene sounds`.

### BoxCastOnlyForCamera
`public bool BoxCastOnlyForCamera(Vec3 boxPoints, in Vec3 centerPoint, bool castSupportRay, in Vec3 supportRaycastPoint, in Vec3 dir, float distance, WeakGameEntity ignoredEntity, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.Disabled | BodyFlags.Dynamic | BodyFlags.Ladder | BodyFlags.OnlyCollideWithRaycast | BodyFlags.AILimiter | BodyFlags.Barrier | BodyFlags.Barrier3D | BodyFlags.Ragdoll | BodyFlags.RagdollLimiter | BodyFlags.DroppedItem | BodyFlags.DoNotCollideWithRaycast | BodyFlags.DontCollideWithCamera | BodyFlags.WaterBody | BodyFlags.AgentOnly | BodyFlags.MissileOnly | BodyFlags.StealthBox)`

**Purpose:** Handles logic related to `box cast only for camera`.

### BoxCast
`public bool BoxCast(Vec3 boxMin, Vec3 boxMax, bool castSupportRay, Vec3 supportRaycastPoint, Vec3 dir, float distance, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.CameraCollisionRayCastExludeFlags)`

**Purpose:** Handles logic related to `box cast`.

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Handles logic related to `ray cast for closest entity or terrain`.

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Handles logic related to `ray cast for closest entity or terrain fixed physics`.

### FocusRayCastForFixedPhysics
`public bool FocusRayCastForFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Handles logic related to `focus ray cast for fixed physics`.

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Handles logic related to `ray cast for closest entity or terrain`.

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Handles logic related to `ray cast for closest entity or terrain fixed physics`.

### RayCastForRamming
`public bool RayCastForRamming(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, float rayThickness, out float collisionDistance, out Vec3 intersectionPoint, out WeakGameEntity collidedEntity, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags, BodyFlags includeBodyFlags = BodyFlags.None)`

**Purpose:** Handles logic related to `ray cast for ramming`.

### RayCastForClosestEntityOrTerrainIgnoreEntity
`public bool RayCastForClosestEntityOrTerrainIgnoreEntity(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, out float collisionDistance, out GameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Handles logic related to `ray cast for closest entity or terrain ignore entity`.

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Handles logic related to `ray cast for closest entity or terrain`.

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Handles logic related to `ray cast for closest entity or terrain fixed physics`.

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Handles logic related to `ray cast for closest entity or terrain fixed physics`.

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Handles logic related to `ray cast for closest entity or terrain`.

### ImportNavigationMeshPrefab
`public void ImportNavigationMeshPrefab(string navMeshPrefabName, int navMeshGroupShift)`

**Purpose:** Handles logic related to `import navigation mesh prefab`.

### ImportNavigationMeshPrefabWithFrame
`public void ImportNavigationMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)`

**Purpose:** Handles logic related to `import navigation mesh prefab with frame`.

### SaveNavMeshPrefabWithFrame
`public void SaveNavMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)`

**Purpose:** Saves `nav mesh prefab with frame` data.

### SetNavMeshRegionMap
`public void SetNavMeshRegionMap(bool regionMap)`

**Purpose:** Sets the value or state of `nav mesh region map`.

### MarkFacesWithIdAsLadder
`public void MarkFacesWithIdAsLadder(int faceGroupId, bool isLadder)`

**Purpose:** Handles logic related to `mark faces with id as ladder`.

### SetAbilityOfFacesWithId
`public int SetAbilityOfFacesWithId(int faceGroupId, bool isEnabled)`

**Purpose:** Sets the value or state of `ability of faces with id`.

### SwapFaceConnectionsWithID
`public bool SwapFaceConnectionsWithID(int hubFaceGroupID, int toBeSeparatedFaceGroupId, int toBeMergedFaceGroupId, bool canFail)`

**Purpose:** Handles logic related to `swap face connections with i d`.

### MergeFacesWithId
`public void MergeFacesWithId(int faceGroupId0, int faceGroupId1, int newFaceGroupId)`

**Purpose:** Handles logic related to `merge faces with id`.

### SeparateFacesWithId
`public void SeparateFacesWithId(int faceGroupId0, int faceGroupId1)`

**Purpose:** Handles logic related to `separate faces with id`.

### IsAnyFaceWithId
`public bool IsAnyFaceWithId(int faceGroupId)`

**Purpose:** Handles logic related to `is any face with id`.

### GetNavigationMeshForPosition
`public UIntPtr GetNavigationMeshForPosition(in Vec3 position)`

**Purpose:** Gets the current value of `navigation mesh for position`.

### GetNearestNavigationMeshForPosition
`public UIntPtr GetNearestNavigationMeshForPosition(in Vec3 position, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)`

**Purpose:** Gets the current value of `nearest navigation mesh for position`.

### GetNavigationMeshForPosition
`public UIntPtr GetNavigationMeshForPosition(in Vec3 position, out int faceGroupId, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)`

**Purpose:** Gets the current value of `navigation mesh for position`.

### DoesPathExistBetweenPositions
`public bool DoesPathExistBetweenPositions(WorldPosition position, WorldPosition destination)`

**Purpose:** Handles logic related to `does path exist between positions`.

### SetLandscapeRainMaskData
`public void SetLandscapeRainMaskData(byte data)`

**Purpose:** Sets the value or state of `landscape rain mask data`.

### EnsurePostfxSystem
`public void EnsurePostfxSystem()`

**Purpose:** Handles logic related to `ensure postfx system`.

### SetBloom
`public void SetBloom(bool mode)`

**Purpose:** Sets the value or state of `bloom`.

### SetDofMode
`public void SetDofMode(bool mode)`

**Purpose:** Sets the value or state of `dof mode`.

### SetOcclusionMode
`public void SetOcclusionMode(bool mode)`

**Purpose:** Sets the value or state of `occlusion mode`.

### SetExternalInjectionTexture
`public void SetExternalInjectionTexture(Texture texture)`

**Purpose:** Sets the value or state of `external injection texture`.

### SetSunshaftMode
`public void SetSunshaftMode(bool mode)`

**Purpose:** Sets the value or state of `sunshaft mode`.

### GetSunDirection
`public Vec3 GetSunDirection()`

**Purpose:** Gets the current value of `sun direction`.

### GetNorthAngle
`public float GetNorthAngle()`

**Purpose:** Gets the current value of `north angle`.

### GetNorthRotation
`public float GetNorthRotation()`

**Purpose:** Gets the current value of `north rotation`.

### GetTerrainMinMaxHeight
`public bool GetTerrainMinMaxHeight(out float minHeight, out float maxHeight)`

**Purpose:** Gets the current value of `terrain min max height`.

### GetPhysicsMinMax
`public void GetPhysicsMinMax(ref Vec3 min_max)`

**Purpose:** Gets the current value of `physics min max`.

### IsEditorScene
`public bool IsEditorScene()`

**Purpose:** Handles logic related to `is editor scene`.

### SetMotionBlurMode
`public void SetMotionBlurMode(bool mode)`

**Purpose:** Sets the value or state of `motion blur mode`.

### SetAntialiasingMode
`public void SetAntialiasingMode(bool mode)`

**Purpose:** Sets the value or state of `antialiasing mode`.

### SetDLSSMode
`public void SetDLSSMode(bool mode)`

**Purpose:** Sets the value or state of `d l s s mode`.

### FindWeakEntitiesWithTag
`public IEnumerable<WeakGameEntity> FindWeakEntitiesWithTag(string tag)`

**Purpose:** Handles logic related to `find weak entities with tag`.

### FindWeakEntityWithTag
`public WeakGameEntity FindWeakEntityWithTag(string tag)`

**Purpose:** Handles logic related to `find weak entity with tag`.

### FindEntitiesWithTag
`public IEnumerable<GameEntity> FindEntitiesWithTag(string tag)`

**Purpose:** Handles logic related to `find entities with tag`.

### FindEntityWithTag
`public GameEntity FindEntityWithTag(string tag)`

**Purpose:** Handles logic related to `find entity with tag`.

### FindEntityWithName
`public GameEntity FindEntityWithName(string name)`

**Purpose:** Handles logic related to `find entity with name`.

### FindWeakEntitiesWithTagExpression
`public IEnumerable<WeakGameEntity> FindWeakEntitiesWithTagExpression(string expression)`

**Purpose:** Handles logic related to `find weak entities with tag expression`.

### FindEntitiesWithTagExpression
`public IEnumerable<GameEntity> FindEntitiesWithTagExpression(string expression)`

**Purpose:** Handles logic related to `find entities with tag expression`.

### GetSoftBoundaryVertexCount
`public int GetSoftBoundaryVertexCount()`

**Purpose:** Gets the current value of `soft boundary vertex count`.

### GetHardBoundaryVertexCount
`public int GetHardBoundaryVertexCount()`

**Purpose:** Gets the current value of `hard boundary vertex count`.

### GetSoftBoundaryVertex
`public Vec2 GetSoftBoundaryVertex(int index)`

**Purpose:** Gets the current value of `soft boundary vertex`.

### GetHardBoundaryVertex
`public Vec2 GetHardBoundaryVertex(int index)`

**Purpose:** Gets the current value of `hard boundary vertex`.

### GetPathWithName
`public Path GetPathWithName(string name)`

**Purpose:** Gets the current value of `path with name`.

### DeletePathWithName
`public void DeletePathWithName(string name)`

**Purpose:** Handles logic related to `delete path with name`.

### AddPath
`public void AddPath(string name)`

**Purpose:** Adds `path` to the current collection or state.

### AddPathPoint
`public void AddPathPoint(string name, MatrixFrame frame)`

**Purpose:** Adds `path point` to the current collection or state.

### GetBoundingBox
`public void GetBoundingBox(out Vec3 min, out Vec3 max)`

**Purpose:** Gets the current value of `bounding box`.

### GetSceneLimits
`public void GetSceneLimits(out Vec3 min, out Vec3 max)`

**Purpose:** Gets the current value of `scene limits`.

### SetName
`public void SetName(string name)`

**Purpose:** Sets the value or state of `name`.

### GetName
`public string GetName()`

**Purpose:** Gets the current value of `name`.

### GetModulePath
`public string GetModulePath()`

**Purpose:** Gets the current value of `module path`.

### SetOwnerThread
`public void SetOwnerThread()`

**Purpose:** Sets the value or state of `owner thread`.

### GetPathsWithNamePrefix
`public Path GetPathsWithNamePrefix(string prefix)`

**Purpose:** Gets the current value of `paths with name prefix`.

### SetUseConstantTime
`public void SetUseConstantTime(bool value)`

**Purpose:** Sets the value or state of `use constant time`.

### CheckPointCanSeePoint
`public bool CheckPointCanSeePoint(Vec3 source, Vec3 target, float? distanceToCheck = null)`

**Purpose:** Handles logic related to `check point can see point`.

### SetPlaySoundEventsAfterReadyToRender
`public void SetPlaySoundEventsAfterReadyToRender(bool value)`

**Purpose:** Sets the value or state of `play sound events after ready to render`.

### DisableStaticShadows
`public void DisableStaticShadows(bool value)`

**Purpose:** Handles logic related to `disable static shadows`.

### GetSkyboxMesh
`public Mesh GetSkyboxMesh()`

**Purpose:** Gets the current value of `skybox mesh`.

### SetAtmosphereWithName
`public void SetAtmosphereWithName(string name)`

**Purpose:** Sets the value or state of `atmosphere with name`.

### FillEntityWithHardBorderPhysicsBarrier
`public void FillEntityWithHardBorderPhysicsBarrier(GameEntity entity)`

**Purpose:** Handles logic related to `fill entity with hard border physics barrier`.

### ClearDecals
`public void ClearDecals()`

**Purpose:** Handles logic related to `clear decals`.

### SetPhotoAtmosphereViaTod
`public void SetPhotoAtmosphereViaTod(float tod, bool withStorm)`

**Purpose:** Sets the value or state of `photo atmosphere via tod`.

### IsPositionOnADynamicNavMesh
`public bool IsPositionOnADynamicNavMesh(Vec3 position)`

**Purpose:** Handles logic related to `is position on a dynamic nav mesh`.

### WaitWaterRendererCPUSimulation
`public void WaitWaterRendererCPUSimulation()`

**Purpose:** Handles logic related to `wait water renderer c p u simulation`.

### EnableInclusiveAsyncPhysx
`public void EnableInclusiveAsyncPhysx()`

**Purpose:** Handles logic related to `enable inclusive async physx`.

### EnsureWaterWakeRenderer
`public void EnsureWaterWakeRenderer()`

**Purpose:** Handles logic related to `ensure water wake renderer`.

### DeleteWaterWakeRenderer
`public void DeleteWaterWakeRenderer()`

**Purpose:** Handles logic related to `delete water wake renderer`.

### SceneHadWaterWakeRenderer
`public bool SceneHadWaterWakeRenderer()`

**Purpose:** Handles logic related to `scene had water wake renderer`.

### SetWaterWakeWorldSize
`public void SetWaterWakeWorldSize(float worldSize, float eraseFactor)`

**Purpose:** Sets the value or state of `water wake world size`.

### SetWaterWakeCameraOffset
`public void SetWaterWakeCameraOffset(float cameraOffset)`

**Purpose:** Sets the value or state of `water wake camera offset`.

### TickWake
`public void TickWake(float dt)`

**Purpose:** Handles logic related to `tick wake`.

### SetDoNotAddEntitiesToTickList
`public void SetDoNotAddEntitiesToTickList(bool value)`

**Purpose:** Sets the value or state of `do not add entities to tick list`.

### SetDontLoadInvisibleEntities
`public void SetDontLoadInvisibleEntities(bool value)`

**Purpose:** Sets the value or state of `dont load invisible entities`.

### SetUsesDeleteLaterSystem
`public void SetUsesDeleteLaterSystem(bool value)`

**Purpose:** Sets the value or state of `uses delete later system`.

### ClearCurrentFrameTickEntities
`public void ClearCurrentFrameTickEntities()`

**Purpose:** Handles logic related to `clear current frame tick entities`.

### FindClosestExitPositionForPositionOnABoundaryFace
`public Vec2 FindClosestExitPositionForPositionOnABoundaryFace(Vec3 position, UIntPtr boundaryFacePointer)`

**Purpose:** Handles logic related to `find closest exit position for position on a boundary face`.

## Usage Example

```csharp
var value = new Scene();
value.IsDefaultEditorScene();
```

## See Also

- [Complete Class Catalog](../catalog)