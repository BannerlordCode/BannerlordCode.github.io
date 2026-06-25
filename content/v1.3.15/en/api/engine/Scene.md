---
title: "Scene"
description: "Auto-generated class reference for Scene."
---
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

**Purpose:** Determines whether the current object is in the `default editor scene` state or condition.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.IsDefaultEditorScene();
```

### IsMultiplayerScene
`public bool IsMultiplayerScene()`

**Purpose:** Determines whether the current object is in the `multiplayer scene` state or condition.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.IsMultiplayerScene();
```

### TakePhotoModePicture
`public string TakePhotoModePicture(bool saveAmbientOcclusionPass, bool savingObjectIdPass, bool saveShadowPass)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.TakePhotoModePicture(false, false, false);
```

### GetAllColorGradeNames
`public string GetAllColorGradeNames()`

**Purpose:** Reads and returns the `all color grade names` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetAllColorGradeNames();
```

### GetAllFilterNames
`public string GetAllFilterNames()`

**Purpose:** Reads and returns the `all filter names` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetAllFilterNames();
```

### GetPhotoModeRoll
`public float GetPhotoModeRoll()`

**Purpose:** Reads and returns the `photo mode roll` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPhotoModeRoll();
```

### GetPhotoModeOrbit
`public bool GetPhotoModeOrbit()`

**Purpose:** Reads and returns the `photo mode orbit` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPhotoModeOrbit();
```

### GetPhotoModeOn
`public bool GetPhotoModeOn()`

**Purpose:** Reads and returns the `photo mode on` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPhotoModeOn();
```

### GetPhotoModeFocus
`public void GetPhotoModeFocus(ref float focus, ref float focusStart, ref float focusEnd, ref float exposure, ref bool vignetteOn)`

**Purpose:** Reads and returns the `photo mode focus` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetPhotoModeFocus(focus, focusStart, focusEnd, exposure, vignetteOn);
```

### GetSceneColorGradeIndex
`public int GetSceneColorGradeIndex()`

**Purpose:** Reads and returns the `scene color grade index` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetSceneColorGradeIndex();
```

### GetSceneFilterIndex
`public int GetSceneFilterIndex()`

**Purpose:** Reads and returns the `scene filter index` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetSceneFilterIndex();
```

### EnableFixedTick
`public void EnableFixedTick()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.EnableFixedTick();
```

### GetLoadingStateName
`public string GetLoadingStateName()`

**Purpose:** Reads and returns the `loading state name` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetLoadingStateName();
```

### IsLoadingFinished
`public bool IsLoadingFinished()`

**Purpose:** Determines whether the current object is in the `loading finished` state or condition.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.IsLoadingFinished();
```

### SetPhotoModeRoll
`public void SetPhotoModeRoll(float roll)`

**Purpose:** Assigns a new value to `photo mode roll` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetPhotoModeRoll(0);
```

### SetPhotoModeOrbit
`public void SetPhotoModeOrbit(bool orbit)`

**Purpose:** Assigns a new value to `photo mode orbit` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetPhotoModeOrbit(false);
```

### GetFallDensity
`public float GetFallDensity()`

**Purpose:** Reads and returns the `fall density` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetFallDensity();
```

### SetPhotoModeOn
`public void SetPhotoModeOn(bool on)`

**Purpose:** Assigns a new value to `photo mode on` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetPhotoModeOn(false);
```

### SetPhotoModeFocus
`public void SetPhotoModeFocus(float focusStart, float focusEnd, float focus, float exposure)`

**Purpose:** Assigns a new value to `photo mode focus` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetPhotoModeFocus(0, 0, 0, 0);
```

### SetPhotoModeFov
`public void SetPhotoModeFov(float verticalFov)`

**Purpose:** Assigns a new value to `photo mode fov` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetPhotoModeFov(0);
```

### GetPhotoModeFov
`public float GetPhotoModeFov()`

**Purpose:** Reads and returns the `photo mode fov` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPhotoModeFov();
```

### HasDecalRenderer
`public bool HasDecalRenderer()`

**Purpose:** Determines whether the current object already holds `decal renderer`.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.HasDecalRenderer();
```

### SetPhotoModeVignette
`public void SetPhotoModeVignette(bool vignetteOn)`

**Purpose:** Assigns a new value to `photo mode vignette` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetPhotoModeVignette(false);
```

### SetSceneColorGradeIndex
`public void SetSceneColorGradeIndex(int index)`

**Purpose:** Assigns a new value to `scene color grade index` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSceneColorGradeIndex(0);
```

### SetSceneFilterIndex
`public int SetSceneFilterIndex(int index)`

**Purpose:** Assigns a new value to `scene filter index` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.SetSceneFilterIndex(0);
```

### SetSceneColorGrade
`public void SetSceneColorGrade(string textureName)`

**Purpose:** Assigns a new value to `scene color grade` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSceneColorGrade("example");
```

### SetUpgradeLevel
`public void SetUpgradeLevel(int level)`

**Purpose:** Assigns a new value to `upgrade level` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetUpgradeLevel(0);
```

### CreateBurstParticle
`public void CreateBurstParticle(int particleId, MatrixFrame frame)`

**Purpose:** Constructs a new `burst particle` entity and returns it to the caller.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.CreateBurstParticle(0, frame);
```

### GetTerrainHeightData
`public float GetTerrainHeightData(int nodeXIndex, int nodeYIndex)`

**Purpose:** Reads and returns the `terrain height data` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetTerrainHeightData(0, 0);
```

### GetTerrainPhysicsMaterialIndexData
`public short GetTerrainPhysicsMaterialIndexData(int nodeXIndex, int nodeYIndex)`

**Purpose:** Reads and returns the `terrain physics material index data` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetTerrainPhysicsMaterialIndexData(0, 0);
```

### GetTerrainData
`public void GetTerrainData(out Vec2i nodeDimension, out float nodeSize, out int layerCount, out int layerVersion)`

**Purpose:** Reads and returns the `terrain data` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetTerrainData(nodeDimension, nodeSize, layerCount, layerVersion);
```

### GetTerrainNodeData
`public void GetTerrainNodeData(int xIndex, int yIndex, out int vertexCountAlongAxis, out float quadLength, out float minHeight, out float maxHeight)`

**Purpose:** Reads and returns the `terrain node data` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetTerrainNodeData(0, 0, vertexCountAlongAxis, quadLength, minHeight, maxHeight);
```

### GetTerrainPhysicsMaterialAtLayer
`public PhysicsMaterial GetTerrainPhysicsMaterialAtLayer(int layerIndex)`

**Purpose:** Reads and returns the `terrain physics material at layer` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetTerrainPhysicsMaterialAtLayer(0);
```

### SetSceneColorGrade
`public void SetSceneColorGrade(Scene scene, string textureName)`

**Purpose:** Assigns a new value to `scene color grade` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSceneColorGrade(scene, "example");
```

### GetWaterLevel
`public float GetWaterLevel()`

**Purpose:** Reads and returns the `water level` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetWaterLevel();
```

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)`

**Purpose:** Reads and returns the `water level at position` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetWaterLevelAtPosition(position, false, false);
```

### GetWaterSpeedAtPosition
`public Vec3 GetWaterSpeedAtPosition(Vec2 position, bool doChoppinessCorrection)`

**Purpose:** Reads and returns the `water speed at position` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetWaterSpeedAtPosition(position, false);
```

### GetBulkWaterLevelAtPositions
`public void GetBulkWaterLevelAtPositions(Vec2 waterHeightQueryArray, ref float waterHeightsAtVolumes, ref Vec3 waterSurfaceNormals)`

**Purpose:** Reads and returns the `bulk water level at positions` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetBulkWaterLevelAtPositions(waterHeightQueryArray, waterHeightsAtVolumes, waterSurfaceNormals);
```

### GetInterpolationFactorForBodyWorldTransformSmoothing
`public void GetInterpolationFactorForBodyWorldTransformSmoothing(out float interpolationFactor, out float fixedDt)`

**Purpose:** Reads and returns the `interpolation factor for body world transform smoothing` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetInterpolationFactorForBodyWorldTransformSmoothing(interpolationFactor, fixedDt);
```

### GetBulkWaterLevelAtVolumes
`public void GetBulkWaterLevelAtVolumes(UIntPtr waterHeightQueryArray, int waterHeightQueryArrayCount, in MatrixFrame globalFrame)`

**Purpose:** Reads and returns the `bulk water level at volumes` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetBulkWaterLevelAtVolumes(waterHeightQueryArray, 0, globalFrame);
```

### GetWaterStrength
`public float GetWaterStrength()`

**Purpose:** Reads and returns the `water strength` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetWaterStrength();
```

### DeRegisterShipVisual
`public void DeRegisterShipVisual(UIntPtr visualPointer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.DeRegisterShipVisual(visualPointer);
```

### RegisterShipVisualToWaterRenderer
`public UIntPtr RegisterShipVisualToWaterRenderer(WeakGameEntity entity, in Vec3 waterEffectBB)`

**Purpose:** Registers `ship visual to water renderer` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RegisterShipVisualToWaterRenderer(entity, waterEffectBB);
```

### SetWaterStrength
`public void SetWaterStrength(float newWaterStrength)`

**Purpose:** Assigns a new value to `water strength` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetWaterStrength(0);
```

### AddWaterWakeWithSphere
`public void AddWaterWakeWithSphere(Vec3 position, float radius, float wakeVisibility, float foamVisibility)`

**Purpose:** Adds `water wake with sphere` to the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.AddWaterWakeWithSphere(position, 0, 0, 0);
```

### AddWaterWakeWithCapsule
`public void AddWaterWakeWithCapsule(Vec3 positionA, float radiusA, Vec3 positionB, float radiusB, float wakeVisibility, float foamVisibility)`

**Purpose:** Adds `water wake with capsule` to the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.AddWaterWakeWithCapsule(positionA, 0, positionB, 0, 0, 0);
```

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds)`

**Purpose:** Reads and returns the `path between a i faces` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPathBetweenAIFaces(startingFace, endingFace, startingPosition, endingPosition, 0, path, 0);
```

### HasNavmeshFaceUnsharedEdges
`public bool HasNavmeshFaceUnsharedEdges(in PathFaceRecord faceRecord)`

**Purpose:** Determines whether the current object already holds `navmesh face unshared edges`.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.HasNavmeshFaceUnsharedEdges(faceRecord);
```

### GetNavmeshFaceCountBetweenTwoIds
`public int GetNavmeshFaceCountBetweenTwoIds(int firstId, int secondId)`

**Purpose:** Reads and returns the `navmesh face count between two ids` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetNavmeshFaceCountBetweenTwoIds(0, 0);
```

### GetNavmeshFaceRecordsBetweenTwoIds
`public void GetNavmeshFaceRecordsBetweenTwoIds(int firstId, int secondId, PathFaceRecord faceRecords)`

**Purpose:** Reads and returns the `navmesh face records between two ids` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetNavmeshFaceRecordsBetweenTwoIds(0, 0, faceRecords);
```

### SetFixedTickCallbackActive
`public void SetFixedTickCallbackActive(bool isActive)`

**Purpose:** Assigns a new value to `fixed tick callback active` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetFixedTickCallbackActive(false);
```

### SetOnCollisionFilterCallbackActive
`public void SetOnCollisionFilterCallbackActive(bool isActive)`

**Purpose:** Assigns a new value to `on collision filter callback active` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetOnCollisionFilterCallbackActive(false);
```

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**Purpose:** Reads and returns the `path between a i faces` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPathBetweenAIFaces(startingFace, endingFace, startingPosition, endingPosition, 0, path, 0, 0, 0);
```

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier)`

**Purpose:** Reads and returns the `path between a i faces` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPathBetweenAIFaces(0, 0, startingPosition, endingPosition, 0, path, 0, 0);
```

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**Purpose:** Reads and returns the `path between a i faces` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPathBetweenAIFaces(0, 0, startingPosition, endingPosition, 0, path, 0, 0, 0, 0);
```

### GetPathDistanceBetweenAIFaces
`public bool GetPathDistanceBetweenAIFaces(int startingAiFace, int endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**Purpose:** Reads and returns the `path distance between a i faces` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPathDistanceBetweenAIFaces(0, 0, startingPosition, endingPosition, 0, 0, distance, 0, 0, 0);
```

### GetNavMeshFaceIndex
`public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec2 position, bool isRegion1, bool checkIfDisabled, bool ignoreHeight = false)`

**Purpose:** Reads and returns the `nav mesh face index` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetNavMeshFaceIndex(record, position, false, false, false);
```

### GetNavMeshFaceIndex
`public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec3 position, bool checkIfDisabled)`

**Purpose:** Reads and returns the `nav mesh face index` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetNavMeshFaceIndex(record, position, false);
```

### CreateNewScene
`public static Scene CreateNewScene(bool initialize_physics = true, bool enable_decals = true, DecalAtlasGroup atlasGroup = DecalAtlasGroup.All, string sceneName = "mono_renderscene")`

**Purpose:** Constructs a new `new scene` entity and returns it to the caller.

```csharp
// Static call; no instance required
Scene.CreateNewScene(false, false, decalAtlasGroup.All, "example");
```

### AddAlwaysRenderedSkeleton
`public void AddAlwaysRenderedSkeleton(Skeleton skeleton)`

**Purpose:** Adds `always rendered skeleton` to the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.AddAlwaysRenderedSkeleton(skeleton);
```

### RemoveAlwaysRenderedSkeleton
`public void RemoveAlwaysRenderedSkeleton(Skeleton skeleton)`

**Purpose:** Removes `always rendered skeleton` from the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.RemoveAlwaysRenderedSkeleton(skeleton);
```

### CreatePathMesh
`public MetaMesh CreatePathMesh(string baseEntityName, bool isWaterPath)`

**Purpose:** Constructs a new `path mesh` entity and returns it to the caller.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.CreatePathMesh("example", false);
```

### SetActiveVisibilityLevels
`public void SetActiveVisibilityLevels(List<string> levelsToActivate)`

**Purpose:** Assigns a new value to `active visibility levels` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetActiveVisibilityLevels(levelsToActivate);
```

### SetDoNotWaitForLoadingStatesToRender
`public void SetDoNotWaitForLoadingStatesToRender(bool value)`

**Purpose:** Assigns a new value to `do not wait for loading states to render` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetDoNotWaitForLoadingStatesToRender(false);
```

### SetDynamicSnowTexture
`public void SetDynamicSnowTexture(Texture texture)`

**Purpose:** Assigns a new value to `dynamic snow texture` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetDynamicSnowTexture(texture);
```

### GetWindFlowMapData
`public void GetWindFlowMapData(float flowMapData)`

**Purpose:** Reads and returns the `wind flow map data` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetWindFlowMapData(0);
```

### CreateDynamicRainTexture
`public void CreateDynamicRainTexture(int w, int h)`

**Purpose:** Constructs a new `dynamic rain texture` entity and returns it to the caller.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.CreateDynamicRainTexture(0, 0);
```

### CreatePathMesh
`public MetaMesh CreatePathMesh(IList<GameEntity> pathNodes, bool isWaterPath = false)`

**Purpose:** Constructs a new `path mesh` entity and returns it to the caller.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.CreatePathMesh(pathNodes, false);
```

### GetEntityWithGuid
`public GameEntity GetEntityWithGuid(string guid)`

**Purpose:** Reads and returns the `entity with guid` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetEntityWithGuid("example");
```

### IsEntityFrameChanged
`public bool IsEntityFrameChanged(string containsName)`

**Purpose:** Determines whether the current object is in the `entity frame changed` state or condition.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.IsEntityFrameChanged("example");
```

### GetTerrainHeightAndNormal
`public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)`

**Purpose:** Reads and returns the `terrain height and normal` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetTerrainHeightAndNormal(position, height, normal);
```

### GetFloraInstanceCount
`public int GetFloraInstanceCount()`

**Purpose:** Reads and returns the `flora instance count` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetFloraInstanceCount();
```

### GetFloraRendererTextureUsage
`public int GetFloraRendererTextureUsage()`

**Purpose:** Reads and returns the `flora renderer texture usage` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetFloraRendererTextureUsage();
```

### GetTerrainMemoryUsage
`public int GetTerrainMemoryUsage()`

**Purpose:** Reads and returns the `terrain memory usage` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetTerrainMemoryUsage();
```

### SetFetchCrcInfoOfScene
`public void SetFetchCrcInfoOfScene(bool value)`

**Purpose:** Assigns a new value to `fetch crc info of scene` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetFetchCrcInfoOfScene(false);
```

### GetSceneXMLCRC
`public uint GetSceneXMLCRC()`

**Purpose:** Reads and returns the `scene x m l c r c` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetSceneXMLCRC();
```

### GetNavigationMeshCRC
`public uint GetNavigationMeshCRC()`

**Purpose:** Reads and returns the `navigation mesh c r c` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetNavigationMeshCRC();
```

### SetGlobalWindStrengthVector
`public void SetGlobalWindStrengthVector(in Vec2 windVector)`

**Purpose:** Assigns a new value to `global wind strength vector` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetGlobalWindStrengthVector(windVector);
```

### GetGlobalWindStrengthVector
`public Vec2 GetGlobalWindStrengthVector()`

**Purpose:** Reads and returns the `global wind strength vector` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetGlobalWindStrengthVector();
```

### GetGlobalWindVelocity
`public Vec2 GetGlobalWindVelocity()`

**Purpose:** Reads and returns the `global wind velocity` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetGlobalWindVelocity();
```

### SetGlobalWindVelocity
`public void SetGlobalWindVelocity(in Vec2 windVector)`

**Purpose:** Assigns a new value to `global wind velocity` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetGlobalWindVelocity(windVector);
```

### GetEnginePhysicsEnabled
`public bool GetEnginePhysicsEnabled()`

**Purpose:** Reads and returns the `engine physics enabled` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetEnginePhysicsEnabled();
```

### ClearNavMesh
`public void ClearNavMesh()`

**Purpose:** Removes all `nav mesh` from the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.ClearNavMesh();
```

### StallLoadingRenderingsUntilFurtherNotice
`public void StallLoadingRenderingsUntilFurtherNotice()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.StallLoadingRenderingsUntilFurtherNotice();
```

### GetNavMeshFaceCount
`public int GetNavMeshFaceCount()`

**Purpose:** Reads and returns the `nav mesh face count` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetNavMeshFaceCount();
```

### ResumeLoadingRenderings
`public void ResumeLoadingRenderings()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.ResumeLoadingRenderings();
```

### GetUpgradeLevelMask
`public uint GetUpgradeLevelMask()`

**Purpose:** Reads and returns the `upgrade level mask` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetUpgradeLevelMask();
```

### SetUpgradeLevelVisibility
`public void SetUpgradeLevelVisibility(uint mask)`

**Purpose:** Assigns a new value to `upgrade level visibility` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetUpgradeLevelVisibility(0);
```

### SetUpgradeLevelVisibility
`public void SetUpgradeLevelVisibility(List<string> levels)`

**Purpose:** Assigns a new value to `upgrade level visibility` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetUpgradeLevelVisibility(levels);
```

### GetIdOfNavMeshFace
`public int GetIdOfNavMeshFace(int faceIndex)`

**Purpose:** Reads and returns the `id of nav mesh face` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetIdOfNavMeshFace(0);
```

### SetClothSimulationState
`public void SetClothSimulationState(bool state)`

**Purpose:** Assigns a new value to `cloth simulation state` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetClothSimulationState(false);
```

### GetNavMeshCenterPosition
`public void GetNavMeshCenterPosition(int faceIndex, ref Vec3 centerPosition)`

**Purpose:** Reads and returns the `nav mesh center position` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetNavMeshCenterPosition(0, centerPosition);
```

### GetNavMeshPathFaceRecord
`public PathFaceRecord GetNavMeshPathFaceRecord(int faceIndex)`

**Purpose:** Reads and returns the `nav mesh path face record` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetNavMeshPathFaceRecord(0);
```

### GetPathFaceRecordFromNavMeshFacePointer
`public PathFaceRecord GetPathFaceRecordFromNavMeshFacePointer(UIntPtr navMeshFacePointer)`

**Purpose:** Reads and returns the `path face record from nav mesh face pointer` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPathFaceRecordFromNavMeshFacePointer(navMeshFacePointer);
```

### GetAllNavmeshFaceRecords
`public void GetAllNavmeshFaceRecords(PathFaceRecord faceRecords)`

**Purpose:** Reads and returns the `all navmesh face records` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetAllNavmeshFaceRecords(faceRecords);
```

### GetFirstEntityWithName
`public GameEntity GetFirstEntityWithName(string name)`

**Purpose:** Reads and returns the `first entity with name` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetFirstEntityWithName("example");
```

### GetCampaignEntityWithName
`public GameEntity GetCampaignEntityWithName(string name)`

**Purpose:** Reads and returns the `campaign entity with name` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetCampaignEntityWithName("example");
```

### GetFirstEntityWithScriptComponent
`public GameEntity GetFirstEntityWithScriptComponent(string scriptName)`

**Purpose:** Reads and returns the `first entity with script component` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetFirstEntityWithScriptComponent("example");
```

### GetUpgradeLevelMaskOfLevelName
`public uint GetUpgradeLevelMaskOfLevelName(string levelName)`

**Purpose:** Reads and returns the `upgrade level mask of level name` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetUpgradeLevelMaskOfLevelName("example");
```

### GetUpgradeLevelNameOfIndex
`public string GetUpgradeLevelNameOfIndex(int index)`

**Purpose:** Reads and returns the `upgrade level name of index` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetUpgradeLevelNameOfIndex(0);
```

### GetUpgradeLevelCount
`public int GetUpgradeLevelCount()`

**Purpose:** Reads and returns the `upgrade level count` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetUpgradeLevelCount();
```

### GetWinterTimeFactor
`public float GetWinterTimeFactor()`

**Purpose:** Reads and returns the `winter time factor` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetWinterTimeFactor();
```

### GetNavMeshFaceFirstVertexZ
`public float GetNavMeshFaceFirstVertexZ(int faceIndex)`

**Purpose:** Reads and returns the `nav mesh face first vertex z` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetNavMeshFaceFirstVertexZ(0);
```

### SetWinterTimeFactor
`public void SetWinterTimeFactor(float winterTimeFactor)`

**Purpose:** Assigns a new value to `winter time factor` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetWinterTimeFactor(0);
```

### SetDrynessFactor
`public void SetDrynessFactor(float drynessFactor)`

**Purpose:** Assigns a new value to `dryness factor` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetDrynessFactor(0);
```

### GetFog
`public float GetFog()`

**Purpose:** Reads and returns the `fog` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetFog();
```

### SetFog
`public void SetFog(float fogDensity, ref Vec3 fogColor, float fogFalloff)`

**Purpose:** Assigns a new value to `fog` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetFog(0, fogColor, 0);
```

### SetFogAdvanced
`public void SetFogAdvanced(float fogFalloffOffset, float fogFalloffMinFog, float fogFalloffStartDist)`

**Purpose:** Assigns a new value to `fog advanced` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetFogAdvanced(0, 0, 0);
```

### SetFogAmbientColor
`public void SetFogAmbientColor(ref Vec3 fogAmbientColor)`

**Purpose:** Assigns a new value to `fog ambient color` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetFogAmbientColor(fogAmbientColor);
```

### SetTemperature
`public void SetTemperature(float temperature)`

**Purpose:** Assigns a new value to `temperature` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetTemperature(0);
```

### SetHumidity
`public void SetHumidity(float humidity)`

**Purpose:** Assigns a new value to `humidity` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetHumidity(0);
```

### SetDynamicShadowmapCascadesRadiusMultiplier
`public void SetDynamicShadowmapCascadesRadiusMultiplier(float multiplier)`

**Purpose:** Assigns a new value to `dynamic shadowmap cascades radius multiplier` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetDynamicShadowmapCascadesRadiusMultiplier(0);
```

### SetEnvironmentMultiplier
`public void SetEnvironmentMultiplier(bool useMultiplier, float multiplier)`

**Purpose:** Assigns a new value to `environment multiplier` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetEnvironmentMultiplier(false, 0);
```

### SetSkyRotation
`public void SetSkyRotation(float rotation)`

**Purpose:** Assigns a new value to `sky rotation` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSkyRotation(0);
```

### SetSkyBrightness
`public void SetSkyBrightness(float brightness)`

**Purpose:** Assigns a new value to `sky brightness` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSkyBrightness(0);
```

### SetForcedSnow
`public void SetForcedSnow(bool value)`

**Purpose:** Assigns a new value to `forced snow` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetForcedSnow(false);
```

### SetSunLight
`public void SetSunLight(ref Vec3 color, ref Vec3 direction)`

**Purpose:** Assigns a new value to `sun light` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSunLight(color, direction);
```

### SetSunDirection
`public void SetSunDirection(ref Vec3 direction)`

**Purpose:** Assigns a new value to `sun direction` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSunDirection(direction);
```

### SetSun
`public void SetSun(ref Vec3 color, float altitude, float angle, float intensity)`

**Purpose:** Assigns a new value to `sun` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSun(color, 0, 0, 0);
```

### SetSunAngleAltitude
`public void SetSunAngleAltitude(float angle, float altitude)`

**Purpose:** Assigns a new value to `sun angle altitude` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSunAngleAltitude(0, 0);
```

### SetSunSize
`public void SetSunSize(float size)`

**Purpose:** Assigns a new value to `sun size` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSunSize(0);
```

### SetSunShaftStrength
`public void SetSunShaftStrength(float strength)`

**Purpose:** Assigns a new value to `sun shaft strength` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSunShaftStrength(0);
```

### GetRainDensity
`public float GetRainDensity()`

**Purpose:** Reads and returns the `rain density` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetRainDensity();
```

### SetRainDensity
`public void SetRainDensity(float density)`

**Purpose:** Assigns a new value to `rain density` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetRainDensity(0);
```

### GetSnowDensity
`public float GetSnowDensity()`

**Purpose:** Reads and returns the `snow density` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetSnowDensity();
```

### SetSnowDensity
`public void SetSnowDensity(float density)`

**Purpose:** Assigns a new value to `snow density` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSnowDensity(0);
```

### AddDecalInstance
`public void AddDecalInstance(Decal decal, string decalSetID, bool deletable)`

**Purpose:** Adds `decal instance` to the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.AddDecalInstance(decal, "example", false);
```

### RemoveDecalInstance
`public void RemoveDecalInstance(Decal decal, string decalSetID)`

**Purpose:** Removes `decal instance` from the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.RemoveDecalInstance(decal, "example");
```

### SetShadow
`public void SetShadow(bool shadowEnabled)`

**Purpose:** Assigns a new value to `shadow` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetShadow(false);
```

### AddPointLight
`public int AddPointLight(ref Vec3 position, float radius)`

**Purpose:** Adds `point light` to the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.AddPointLight(position, 0);
```

### AddDirectionalLight
`public int AddDirectionalLight(ref Vec3 position, ref Vec3 direction, float radius)`

**Purpose:** Adds `directional light` to the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.AddDirectionalLight(position, direction, 0);
```

### SetLightPosition
`public void SetLightPosition(int lightIndex, ref Vec3 position)`

**Purpose:** Assigns a new value to `light position` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetLightPosition(0, position);
```

### SetLightDiffuseColor
`public void SetLightDiffuseColor(int lightIndex, ref Vec3 diffuseColor)`

**Purpose:** Assigns a new value to `light diffuse color` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetLightDiffuseColor(0, diffuseColor);
```

### SetLightDirection
`public void SetLightDirection(int lightIndex, ref Vec3 direction)`

**Purpose:** Assigns a new value to `light direction` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetLightDirection(0, direction);
```

### SetMieScatterFocus
`public void SetMieScatterFocus(float strength)`

**Purpose:** Assigns a new value to `mie scatter focus` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetMieScatterFocus(0);
```

### SetMieScatterStrength
`public void SetMieScatterStrength(float strength)`

**Purpose:** Assigns a new value to `mie scatter strength` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetMieScatterStrength(0);
```

### SetBrightpassThreshold
`public void SetBrightpassThreshold(float threshold)`

**Purpose:** Assigns a new value to `brightpass threshold` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetBrightpassThreshold(0);
```

### SetLensDistortion
`public void SetLensDistortion(float amount)`

**Purpose:** Assigns a new value to `lens distortion` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetLensDistortion(0);
```

### SetHexagonVignetteAlpha
`public void SetHexagonVignetteAlpha(float amount)`

**Purpose:** Assigns a new value to `hexagon vignette alpha` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetHexagonVignetteAlpha(0);
```

### SetMinExposure
`public void SetMinExposure(float minExposure)`

**Purpose:** Assigns a new value to `min exposure` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetMinExposure(0);
```

### SetMaxExposure
`public void SetMaxExposure(float maxExposure)`

**Purpose:** Assigns a new value to `max exposure` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetMaxExposure(0);
```

### SetTargetExposure
`public void SetTargetExposure(float targetExposure)`

**Purpose:** Assigns a new value to `target exposure` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetTargetExposure(0);
```

### SetMiddleGray
`public void SetMiddleGray(float middleGray)`

**Purpose:** Assigns a new value to `middle gray` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetMiddleGray(0);
```

### SetBloomStrength
`public void SetBloomStrength(float bloomStrength)`

**Purpose:** Assigns a new value to `bloom strength` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetBloomStrength(0);
```

### SetBloomAmount
`public void SetBloomAmount(float bloomAmount)`

**Purpose:** Assigns a new value to `bloom amount` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetBloomAmount(0);
```

### SetGrainAmount
`public void SetGrainAmount(float grainAmount)`

**Purpose:** Assigns a new value to `grain amount` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetGrainAmount(0);
```

### AddItemEntity
`public GameEntity AddItemEntity(ref MatrixFrame placementFrame, MetaMesh metaMesh)`

**Purpose:** Adds `item entity` to the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.AddItemEntity(placementFrame, metaMesh);
```

### RemoveEntity
`public void RemoveEntity(GameEntity entity, int removeReason)`

**Purpose:** Removes `entity` from the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.RemoveEntity(entity, 0);
```

### RemoveEntity
`public void RemoveEntity(WeakGameEntity entity, int removeReason)`

**Purpose:** Removes `entity` from the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.RemoveEntity(entity, 0);
```

### AttachEntity
`public bool AttachEntity(GameEntity entity, bool showWarnings = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.AttachEntity(entity, false);
```

### AttachEntity
`public bool AttachEntity(WeakGameEntity entity, bool showWarnings = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.AttachEntity(entity, false);
```

### AddEntityWithMesh
`public void AddEntityWithMesh(Mesh mesh, ref MatrixFrame frame)`

**Purpose:** Adds `entity with mesh` to the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.AddEntityWithMesh(mesh, frame);
```

### AddEntityWithMultiMesh
`public void AddEntityWithMultiMesh(MetaMesh mesh, ref MatrixFrame frame)`

**Purpose:** Adds `entity with multi mesh` to the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.AddEntityWithMultiMesh(mesh, frame);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.Tick(0);
```

### ClearAll
`public void ClearAll()`

**Purpose:** Removes all `all` from the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.ClearAll();
```

### SetDefaultLighting
`public void SetDefaultLighting()`

**Purpose:** Assigns a new value to `default lighting` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetDefaultLighting();
```

### CalculateEffectiveLighting
`public bool CalculateEffectiveLighting()`

**Purpose:** Calculates the current value or result of `effective lighting`.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.CalculateEffectiveLighting();
```

### GetPathDistanceBetweenPositions
`public bool GetPathDistanceBetweenPositions(ref WorldPosition point0, ref WorldPosition point1, float agentRadius, out float pathDistance)`

**Purpose:** Reads and returns the `path distance between positions` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPathDistanceBetweenPositions(point0, point1, 0, pathDistance);
```

### IsLineToPointClear
`public bool IsLineToPointClear(ref WorldPosition position, ref WorldPosition destination, float agentRadius)`

**Purpose:** Determines whether the current object is in the `line to point clear` state or condition.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.IsLineToPointClear(position, destination, 0);
```

### IsLineToPointClear
`public bool IsLineToPointClear(UIntPtr startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**Purpose:** Determines whether the current object is in the `line to point clear` state or condition.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.IsLineToPointClear(startingFace, position, destination, 0);
```

### IsLineToPointClear
`public bool IsLineToPointClear(int startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**Purpose:** Determines whether the current object is in the `line to point clear` state or condition.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.IsLineToPointClear(0, position, destination, 0);
```

### GetLastPointOnNavigationMeshFromPositionToDestination
`public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(int startingFace, Vec2 position, Vec2 destination, int excludedFaceIds)`

**Purpose:** Reads and returns the `last point on navigation mesh from position to destination` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetLastPointOnNavigationMeshFromPositionToDestination(0, position, destination, 0);
```

### GetLastPositionOnNavMeshFaceForPointAndDirection
`public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord record, Vec2 position, Vec2 destination)`

**Purpose:** Reads and returns the `last position on nav mesh face for point and direction` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetLastPositionOnNavMeshFaceForPointAndDirection(record, position, destination);
```

### GetLastPointOnNavigationMeshFromWorldPositionToDestination
`public Vec3 GetLastPointOnNavigationMeshFromWorldPositionToDestination(ref WorldPosition position, Vec2 destination)`

**Purpose:** Reads and returns the `last point on navigation mesh from world position to destination` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetLastPointOnNavigationMeshFromWorldPositionToDestination(position, destination);
```

### DoesPathExistBetweenFaces
`public bool DoesPathExistBetweenFaces(int firstNavMeshFace, int secondNavMeshFace, bool ignoreDisabled)`

**Purpose:** Returns a boolean answer to whether `path exist between faces` is true for the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.DoesPathExistBetweenFaces(0, 0, false);
```

### GetHeightAtPoint
`public bool GetHeightAtPoint(Vec2 point, BodyFlags excludeBodyFlags, ref float height)`

**Purpose:** Reads and returns the `height at point` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetHeightAtPoint(point, excludeBodyFlags, height);
```

### GetNormalAt
`public Vec3 GetNormalAt(Vec2 position)`

**Purpose:** Reads and returns the `normal at` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetNormalAt(position);
```

### GetEntities
`public void GetEntities(ref List<GameEntity> entities)`

**Purpose:** Reads and returns the `entities` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetEntities(entities);
```

### GetRootEntities
`public void GetRootEntities(NativeObjectArray entities)`

**Purpose:** Reads and returns the `root entities` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetRootEntities(entities);
```

### SelectEntitiesCollidedWith
`public int SelectEntitiesCollidedWith(ref Ray ray, Intersection intersectionsOutput, UIntPtr entityIds)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.SelectEntitiesCollidedWith(ray, intersectionsOutput, entityIds);
```

### RayCastExcludingTwoEntities
`public bool RayCastExcludingTwoEntities(BodyFlags flags, in Ray ray, WeakGameEntity entity1, WeakGameEntity entity2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RayCastExcludingTwoEntities(flags, ray, entity1, entity2);
```

### GenerateContactsWithCapsule
`public int GenerateContactsWithCapsule(ref CapsuleData capsule, BodyFlags exclude_flags, bool isFixedTick, Intersection intersectionsOutput, WeakGameEntity gameEntities, UIntPtr entityPointers)`

**Purpose:** Generates an instance, data, or representation of `contacts with capsule`.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GenerateContactsWithCapsule(capsule, exclude_flags, false, intersectionsOutput, gameEntities, entityPointers);
```

### GenerateContactsWithCapsuleAgainstEntity
`public int GenerateContactsWithCapsuleAgainstEntity(ref CapsuleData capsule, BodyFlags excludeFlags, WeakGameEntity entity, Intersection intersectionsOutput)`

**Purpose:** Generates an instance, data, or representation of `contacts with capsule against entity`.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GenerateContactsWithCapsuleAgainstEntity(capsule, excludeFlags, entity, intersectionsOutput);
```

### InvalidateTerrainPhysicsMaterials
`public void InvalidateTerrainPhysicsMaterials()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.InvalidateTerrainPhysicsMaterials();
```

### Read
`public void Read(string sceneName)`

**Purpose:** Reads the data or state of the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.Read("example");
```

### Read
`public void Read(string sceneName, string moduleId, ref SceneInitializationData initData, string forcedAtmoName = "")`

**Purpose:** Reads the data or state of the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.Read("example", "example", initData, "example");
```

### Read
`public void Read(string sceneName, ref SceneInitializationData initData, string forcedAtmoName = "")`

**Purpose:** Reads the data or state of the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.Read("example", initData, "example");
```

### ReadAndCalculateInitialCamera
`public MatrixFrame ReadAndCalculateInitialCamera()`

**Purpose:** Reads the data or state of `and calculate initial camera`.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.ReadAndCalculateInitialCamera();
```

### OptimizeScene
`public void OptimizeScene(bool optimizeFlora = true, bool optimizeOro = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.OptimizeScene(false, false);
```

### GetTerrainHeight
`public float GetTerrainHeight(Vec2 position, bool checkHoles = true)`

**Purpose:** Reads and returns the `terrain height` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetTerrainHeight(position, false);
```

### CheckResources
`public void CheckResources(bool checkInvisibleEntities)`

**Purpose:** Verifies whether `resources` holds true for the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.CheckResources(false);
```

### ForceLoadResources
`public void ForceLoadResources(bool checkInvisibleEntities)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.ForceLoadResources(false);
```

### SetDepthOfFieldParameters
`public void SetDepthOfFieldParameters(float depthOfFieldFocusStart, float depthOfFieldFocusEnd, bool isVignetteOn)`

**Purpose:** Assigns a new value to `depth of field parameters` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetDepthOfFieldParameters(0, 0, false);
```

### SetDepthOfFieldFocus
`public void SetDepthOfFieldFocus(float depthOfFieldFocus)`

**Purpose:** Assigns a new value to `depth of field focus` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetDepthOfFieldFocus(0);
```

### ResetDepthOfFieldParams
`public void ResetDepthOfFieldParams()`

**Purpose:** Returns `depth of field params` to its default or initial condition.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.ResetDepthOfFieldParams();
```

### PreloadForRendering
`public void PreloadForRendering()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.PreloadForRendering();
```

### SetColorGradeBlend
`public void SetColorGradeBlend(string texture1, string texture2, float alpha)`

**Purpose:** Assigns a new value to `color grade blend` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetColorGradeBlend("example", "example", 0);
```

### GetGroundHeightAtPosition
`public float GetGroundHeightAtPosition(Vec3 position, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**Purpose:** Reads and returns the `ground height at position` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetGroundHeightAtPosition(position, bodyFlags.CommonCollisionExcludeFlags);
```

### GetGroundHeightAndBodyFlagsAtPosition
`public float GetGroundHeightAndBodyFlagsAtPosition(Vec3 position, out BodyFlags contactPointFlags, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**Purpose:** Reads and returns the `ground height and body flags at position` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetGroundHeightAndBodyFlagsAtPosition(position, contactPointFlags, bodyFlags.CommonCollisionExcludeFlags);
```

### GetGroundHeightAtPosition
`public float GetGroundHeightAtPosition(Vec3 position, out Vec3 normal, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**Purpose:** Reads and returns the `ground height at position` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetGroundHeightAtPosition(position, normal, bodyFlags.CommonCollisionExcludeFlags);
```

### PauseSceneSounds
`public void PauseSceneSounds()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.PauseSceneSounds();
```

### ResumeSceneSounds
`public void ResumeSceneSounds()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.ResumeSceneSounds();
```

### FinishSceneSounds
`public void FinishSceneSounds()`

**Purpose:** Concludes the `scene sounds` flow and performs any cleanup.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.FinishSceneSounds();
```

### BoxCastOnlyForCamera
`public bool BoxCastOnlyForCamera(Vec3 boxPoints, in Vec3 centerPoint, bool castSupportRay, in Vec3 supportRaycastPoint, in Vec3 dir, float distance, WeakGameEntity ignoredEntity, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.Disabled | BodyFlags.Dynamic | BodyFlags.Ladder | BodyFlags.OnlyCollideWithRaycast | BodyFlags.AILimiter | BodyFlags.Barrier | BodyFlags.Barrier3D | BodyFlags.Ragdoll | BodyFlags.RagdollLimiter | BodyFlags.DroppedItem | BodyFlags.DoNotCollideWithRaycast | BodyFlags.DontCollideWithCamera | BodyFlags.WaterBody | BodyFlags.AgentOnly | BodyFlags.MissileOnly | BodyFlags.StealthBox)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.BoxCastOnlyForCamera(boxPoints, centerPoint, false, supportRaycastPoint, dir, 0, ignoredEntity, collisionDistance, closestPoint, collidedEntity, bodyFlags.StealthBox);
```

### BoxCast
`public bool BoxCast(Vec3 boxMin, Vec3 boxMax, bool castSupportRay, Vec3 supportRaycastPoint, Vec3 dir, float distance, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.CameraCollisionRayCastExludeFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.BoxCast(boxMin, boxMax, false, supportRaycastPoint, dir, 0, collisionDistance, closestPoint, collidedEntity, bodyFlags.CameraCollisionRayCastExludeFlags);
```

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrain(sourcePoint, targetPoint, collisionDistance, closestPoint, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrainFixedPhysics(sourcePoint, targetPoint, collisionDistance, closestPoint, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### FocusRayCastForFixedPhysics
`public bool FocusRayCastForFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.FocusRayCastForFixedPhysics(sourcePoint, targetPoint, collisionDistance, closestPoint, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrain(sourcePoint, targetPoint, collisionDistance, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrainFixedPhysics(sourcePoint, targetPoint, collisionDistance, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForRamming
`public bool RayCastForRamming(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, float rayThickness, out float collisionDistance, out Vec3 intersectionPoint, out WeakGameEntity collidedEntity, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags, BodyFlags includeBodyFlags = BodyFlags.None)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RayCastForRamming(sourcePoint, targetPoint, ignoredEntity, 0, collisionDistance, intersectionPoint, collidedEntity, bodyFlags.CommonFocusRayCastExcludeFlags, bodyFlags.None);
```

### RayCastForClosestEntityOrTerrainIgnoreEntity
`public bool RayCastForClosestEntityOrTerrainIgnoreEntity(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, out float collisionDistance, out GameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrainIgnoreEntity(sourcePoint, targetPoint, ignoredEntity, collisionDistance, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrain(sourcePoint, targetPoint, collisionDistance, closestPoint, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrainFixedPhysics(sourcePoint, targetPoint, collisionDistance, closestPoint, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrainFixedPhysics(sourcePoint, targetPoint, collisionDistance, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrain(sourcePoint, targetPoint, collisionDistance, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### ImportNavigationMeshPrefab
`public void ImportNavigationMeshPrefab(string navMeshPrefabName, int navMeshGroupShift)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.ImportNavigationMeshPrefab("example", 0);
```

### ImportNavigationMeshPrefabWithFrame
`public void ImportNavigationMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.ImportNavigationMeshPrefabWithFrame("example", frame);
```

### SaveNavMeshPrefabWithFrame
`public void SaveNavMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)`

**Purpose:** Writes `nav mesh prefab with frame` to persistent storage or a stream.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SaveNavMeshPrefabWithFrame("example", frame);
```

### SetNavMeshRegionMap
`public void SetNavMeshRegionMap(bool regionMap)`

**Purpose:** Assigns a new value to `nav mesh region map` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetNavMeshRegionMap(false);
```

### MarkFacesWithIdAsLadder
`public void MarkFacesWithIdAsLadder(int faceGroupId, bool isLadder)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.MarkFacesWithIdAsLadder(0, false);
```

### SetAbilityOfFacesWithId
`public int SetAbilityOfFacesWithId(int faceGroupId, bool isEnabled)`

**Purpose:** Assigns a new value to `ability of faces with id` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.SetAbilityOfFacesWithId(0, false);
```

### SwapFaceConnectionsWithID
`public bool SwapFaceConnectionsWithID(int hubFaceGroupID, int toBeSeparatedFaceGroupId, int toBeMergedFaceGroupId, bool canFail)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.SwapFaceConnectionsWithID(0, 0, 0, false);
```

### MergeFacesWithId
`public void MergeFacesWithId(int faceGroupId0, int faceGroupId1, int newFaceGroupId)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.MergeFacesWithId(0, 0, 0);
```

### SeparateFacesWithId
`public void SeparateFacesWithId(int faceGroupId0, int faceGroupId1)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SeparateFacesWithId(0, 0);
```

### IsAnyFaceWithId
`public bool IsAnyFaceWithId(int faceGroupId)`

**Purpose:** Determines whether the current object is in the `any face with id` state or condition.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.IsAnyFaceWithId(0);
```

### GetNavigationMeshForPosition
`public UIntPtr GetNavigationMeshForPosition(in Vec3 position)`

**Purpose:** Reads and returns the `navigation mesh for position` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetNavigationMeshForPosition(position);
```

### GetNearestNavigationMeshForPosition
`public UIntPtr GetNearestNavigationMeshForPosition(in Vec3 position, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)`

**Purpose:** Reads and returns the `nearest navigation mesh for position` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetNearestNavigationMeshForPosition(position, 0, false);
```

### GetNavigationMeshForPosition
`public UIntPtr GetNavigationMeshForPosition(in Vec3 position, out int faceGroupId, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)`

**Purpose:** Reads and returns the `navigation mesh for position` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetNavigationMeshForPosition(position, faceGroupId, 0, false);
```

### DoesPathExistBetweenPositions
`public bool DoesPathExistBetweenPositions(WorldPosition position, WorldPosition destination)`

**Purpose:** Returns a boolean answer to whether `path exist between positions` is true for the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.DoesPathExistBetweenPositions(position, destination);
```

### SetLandscapeRainMaskData
`public void SetLandscapeRainMaskData(byte data)`

**Purpose:** Assigns a new value to `landscape rain mask data` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetLandscapeRainMaskData(0);
```

### EnsurePostfxSystem
`public void EnsurePostfxSystem()`

**Purpose:** Ensures `postfx system` is in the expected state, initializing or correcting it if necessary.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.EnsurePostfxSystem();
```

### SetBloom
`public void SetBloom(bool mode)`

**Purpose:** Assigns a new value to `bloom` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetBloom(false);
```

### SetDofMode
`public void SetDofMode(bool mode)`

**Purpose:** Assigns a new value to `dof mode` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetDofMode(false);
```

### SetOcclusionMode
`public void SetOcclusionMode(bool mode)`

**Purpose:** Assigns a new value to `occlusion mode` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetOcclusionMode(false);
```

### SetExternalInjectionTexture
`public void SetExternalInjectionTexture(Texture texture)`

**Purpose:** Assigns a new value to `external injection texture` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetExternalInjectionTexture(texture);
```

### SetSunshaftMode
`public void SetSunshaftMode(bool mode)`

**Purpose:** Assigns a new value to `sunshaft mode` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetSunshaftMode(false);
```

### GetSunDirection
`public Vec3 GetSunDirection()`

**Purpose:** Reads and returns the `sun direction` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetSunDirection();
```

### GetNorthAngle
`public float GetNorthAngle()`

**Purpose:** Reads and returns the `north angle` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetNorthAngle();
```

### GetNorthRotation
`public float GetNorthRotation()`

**Purpose:** Reads and returns the `north rotation` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetNorthRotation();
```

### GetTerrainMinMaxHeight
`public bool GetTerrainMinMaxHeight(out float minHeight, out float maxHeight)`

**Purpose:** Reads and returns the `terrain min max height` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetTerrainMinMaxHeight(minHeight, maxHeight);
```

### GetPhysicsMinMax
`public void GetPhysicsMinMax(ref Vec3 min_max)`

**Purpose:** Reads and returns the `physics min max` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetPhysicsMinMax(min_max);
```

### IsEditorScene
`public bool IsEditorScene()`

**Purpose:** Determines whether the current object is in the `editor scene` state or condition.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.IsEditorScene();
```

### SetMotionBlurMode
`public void SetMotionBlurMode(bool mode)`

**Purpose:** Assigns a new value to `motion blur mode` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetMotionBlurMode(false);
```

### SetAntialiasingMode
`public void SetAntialiasingMode(bool mode)`

**Purpose:** Assigns a new value to `antialiasing mode` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetAntialiasingMode(false);
```

### SetDLSSMode
`public void SetDLSSMode(bool mode)`

**Purpose:** Assigns a new value to `d l s s mode` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetDLSSMode(false);
```

### FindWeakEntitiesWithTag
`public IEnumerable<WeakGameEntity> FindWeakEntitiesWithTag(string tag)`

**Purpose:** Looks up the matching `weak entities with tag` in the current collection or scope.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.FindWeakEntitiesWithTag("example");
```

### FindWeakEntityWithTag
`public WeakGameEntity FindWeakEntityWithTag(string tag)`

**Purpose:** Looks up the matching `weak entity with tag` in the current collection or scope.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.FindWeakEntityWithTag("example");
```

### FindEntitiesWithTag
`public IEnumerable<GameEntity> FindEntitiesWithTag(string tag)`

**Purpose:** Looks up the matching `entities with tag` in the current collection or scope.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.FindEntitiesWithTag("example");
```

### FindEntityWithTag
`public GameEntity FindEntityWithTag(string tag)`

**Purpose:** Looks up the matching `entity with tag` in the current collection or scope.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.FindEntityWithTag("example");
```

### FindEntityWithName
`public GameEntity FindEntityWithName(string name)`

**Purpose:** Looks up the matching `entity with name` in the current collection or scope.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.FindEntityWithName("example");
```

### FindWeakEntitiesWithTagExpression
`public IEnumerable<WeakGameEntity> FindWeakEntitiesWithTagExpression(string expression)`

**Purpose:** Looks up the matching `weak entities with tag expression` in the current collection or scope.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.FindWeakEntitiesWithTagExpression("example");
```

### FindEntitiesWithTagExpression
`public IEnumerable<GameEntity> FindEntitiesWithTagExpression(string expression)`

**Purpose:** Looks up the matching `entities with tag expression` in the current collection or scope.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.FindEntitiesWithTagExpression("example");
```

### GetSoftBoundaryVertexCount
`public int GetSoftBoundaryVertexCount()`

**Purpose:** Reads and returns the `soft boundary vertex count` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetSoftBoundaryVertexCount();
```

### GetHardBoundaryVertexCount
`public int GetHardBoundaryVertexCount()`

**Purpose:** Reads and returns the `hard boundary vertex count` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetHardBoundaryVertexCount();
```

### GetSoftBoundaryVertex
`public Vec2 GetSoftBoundaryVertex(int index)`

**Purpose:** Reads and returns the `soft boundary vertex` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetSoftBoundaryVertex(0);
```

### GetHardBoundaryVertex
`public Vec2 GetHardBoundaryVertex(int index)`

**Purpose:** Reads and returns the `hard boundary vertex` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetHardBoundaryVertex(0);
```

### GetPathWithName
`public Path GetPathWithName(string name)`

**Purpose:** Reads and returns the `path with name` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPathWithName("example");
```

### DeletePathWithName
`public void DeletePathWithName(string name)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.DeletePathWithName("example");
```

### AddPath
`public void AddPath(string name)`

**Purpose:** Adds `path` to the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.AddPath("example");
```

### AddPathPoint
`public void AddPathPoint(string name, MatrixFrame frame)`

**Purpose:** Adds `path point` to the current collection or state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.AddPathPoint("example", frame);
```

### GetBoundingBox
`public void GetBoundingBox(out Vec3 min, out Vec3 max)`

**Purpose:** Reads and returns the `bounding box` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetBoundingBox(min, max);
```

### GetSceneLimits
`public void GetSceneLimits(out Vec3 min, out Vec3 max)`

**Purpose:** Reads and returns the `scene limits` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.GetSceneLimits(min, max);
```

### SetName
`public void SetName(string name)`

**Purpose:** Assigns a new value to `name` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetName("example");
```

### GetName
`public string GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetName();
```

### GetModulePath
`public string GetModulePath()`

**Purpose:** Reads and returns the `module path` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetModulePath();
```

### SetOwnerThread
`public void SetOwnerThread()`

**Purpose:** Assigns a new value to `owner thread` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetOwnerThread();
```

### GetPathsWithNamePrefix
`public Path GetPathsWithNamePrefix(string prefix)`

**Purpose:** Reads and returns the `paths with name prefix` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetPathsWithNamePrefix("example");
```

### SetUseConstantTime
`public void SetUseConstantTime(bool value)`

**Purpose:** Assigns a new value to `use constant time` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetUseConstantTime(false);
```

### CheckPointCanSeePoint
`public bool CheckPointCanSeePoint(Vec3 source, Vec3 target, float? distanceToCheck = null)`

**Purpose:** Verifies whether `point can see point` holds true for the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.CheckPointCanSeePoint(source, target, 0);
```

### SetPlaySoundEventsAfterReadyToRender
`public void SetPlaySoundEventsAfterReadyToRender(bool value)`

**Purpose:** Assigns a new value to `play sound events after ready to render` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetPlaySoundEventsAfterReadyToRender(false);
```

### DisableStaticShadows
`public void DisableStaticShadows(bool value)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.DisableStaticShadows(false);
```

### GetSkyboxMesh
`public Mesh GetSkyboxMesh()`

**Purpose:** Reads and returns the `skybox mesh` value held by the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.GetSkyboxMesh();
```

### SetAtmosphereWithName
`public void SetAtmosphereWithName(string name)`

**Purpose:** Assigns a new value to `atmosphere with name` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetAtmosphereWithName("example");
```

### FillEntityWithHardBorderPhysicsBarrier
`public void FillEntityWithHardBorderPhysicsBarrier(GameEntity entity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.FillEntityWithHardBorderPhysicsBarrier(entity);
```

### ClearDecals
`public void ClearDecals()`

**Purpose:** Removes all `decals` from the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.ClearDecals();
```

### SetPhotoAtmosphereViaTod
`public void SetPhotoAtmosphereViaTod(float tod, bool withStorm)`

**Purpose:** Assigns a new value to `photo atmosphere via tod` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetPhotoAtmosphereViaTod(0, false);
```

### IsPositionOnADynamicNavMesh
`public bool IsPositionOnADynamicNavMesh(Vec3 position)`

**Purpose:** Determines whether the current object is in the `position on a dynamic nav mesh` state or condition.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.IsPositionOnADynamicNavMesh(position);
```

### WaitWaterRendererCPUSimulation
`public void WaitWaterRendererCPUSimulation()`

**Purpose:** Pauses the current flow until the `water renderer c p u simulation` condition is met.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.WaitWaterRendererCPUSimulation();
```

### EnableInclusiveAsyncPhysx
`public void EnableInclusiveAsyncPhysx()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.EnableInclusiveAsyncPhysx();
```

### EnsureWaterWakeRenderer
`public void EnsureWaterWakeRenderer()`

**Purpose:** Ensures `water wake renderer` is in the expected state, initializing or correcting it if necessary.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.EnsureWaterWakeRenderer();
```

### DeleteWaterWakeRenderer
`public void DeleteWaterWakeRenderer()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.DeleteWaterWakeRenderer();
```

### SceneHadWaterWakeRenderer
`public bool SceneHadWaterWakeRenderer()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.SceneHadWaterWakeRenderer();
```

### SetWaterWakeWorldSize
`public void SetWaterWakeWorldSize(float worldSize, float eraseFactor)`

**Purpose:** Assigns a new value to `water wake world size` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetWaterWakeWorldSize(0, 0);
```

### SetWaterWakeCameraOffset
`public void SetWaterWakeCameraOffset(float cameraOffset)`

**Purpose:** Assigns a new value to `water wake camera offset` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetWaterWakeCameraOffset(0);
```

### TickWake
`public void TickWake(float dt)`

**Purpose:** Advances the `wake` state each frame or update cycle.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.TickWake(0);
```

### SetDoNotAddEntitiesToTickList
`public void SetDoNotAddEntitiesToTickList(bool value)`

**Purpose:** Assigns a new value to `do not add entities to tick list` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetDoNotAddEntitiesToTickList(false);
```

### SetDontLoadInvisibleEntities
`public void SetDontLoadInvisibleEntities(bool value)`

**Purpose:** Assigns a new value to `dont load invisible entities` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetDontLoadInvisibleEntities(false);
```

### SetUsesDeleteLaterSystem
`public void SetUsesDeleteLaterSystem(bool value)`

**Purpose:** Assigns a new value to `uses delete later system` and updates the object's internal state.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.SetUsesDeleteLaterSystem(false);
```

### ClearCurrentFrameTickEntities
`public void ClearCurrentFrameTickEntities()`

**Purpose:** Removes all `current frame tick entities` from the current object.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
scene.ClearCurrentFrameTickEntities();
```

### FindClosestExitPositionForPositionOnABoundaryFace
`public Vec2 FindClosestExitPositionForPositionOnABoundaryFace(Vec3 position, UIntPtr boundaryFacePointer)`

**Purpose:** Looks up the matching `closest exit position for position on a boundary face` in the current collection or scope.

```csharp
// Obtain an instance of Scene from the subsystem API first
Scene scene = ...;
var result = scene.FindClosestExitPositionForPositionOnABoundaryFace(position, boundaryFacePointer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Scene scene = ...;
scene.IsDefaultEditorScene();
```

## See Also

- [Area Index](../)