---
title: "Scene"
description: "Scene 的自动生成类参考。"
---
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

**用途 / Purpose:** 判断当前对象是否处于 「default editor scene」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.IsDefaultEditorScene();
```

### IsMultiplayerScene
`public bool IsMultiplayerScene()`

**用途 / Purpose:** 判断当前对象是否处于 「multiplayer scene」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.IsMultiplayerScene();
```

### TakePhotoModePicture
`public string TakePhotoModePicture(bool saveAmbientOcclusionPass, bool savingObjectIdPass, bool saveShadowPass)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.TakePhotoModePicture(false, false, false);
```

### GetAllColorGradeNames
`public string GetAllColorGradeNames()`

**用途 / Purpose:** 读取并返回当前对象中 「all color grade names」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetAllColorGradeNames();
```

### GetAllFilterNames
`public string GetAllFilterNames()`

**用途 / Purpose:** 读取并返回当前对象中 「all filter names」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetAllFilterNames();
```

### GetPhotoModeRoll
`public float GetPhotoModeRoll()`

**用途 / Purpose:** 读取并返回当前对象中 「photo mode roll」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPhotoModeRoll();
```

### GetPhotoModeOrbit
`public bool GetPhotoModeOrbit()`

**用途 / Purpose:** 读取并返回当前对象中 「photo mode orbit」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPhotoModeOrbit();
```

### GetPhotoModeOn
`public bool GetPhotoModeOn()`

**用途 / Purpose:** 读取并返回当前对象中 「photo mode on」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPhotoModeOn();
```

### GetPhotoModeFocus
`public void GetPhotoModeFocus(ref float focus, ref float focusStart, ref float focusEnd, ref float exposure, ref bool vignetteOn)`

**用途 / Purpose:** 读取并返回当前对象中 「photo mode focus」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetPhotoModeFocus(focus, focusStart, focusEnd, exposure, vignetteOn);
```

### GetSceneColorGradeIndex
`public int GetSceneColorGradeIndex()`

**用途 / Purpose:** 读取并返回当前对象中 「scene color grade index」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetSceneColorGradeIndex();
```

### GetSceneFilterIndex
`public int GetSceneFilterIndex()`

**用途 / Purpose:** 读取并返回当前对象中 「scene filter index」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetSceneFilterIndex();
```

### EnableFixedTick
`public void EnableFixedTick()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.EnableFixedTick();
```

### GetLoadingStateName
`public string GetLoadingStateName()`

**用途 / Purpose:** 读取并返回当前对象中 「loading state name」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetLoadingStateName();
```

### IsLoadingFinished
`public bool IsLoadingFinished()`

**用途 / Purpose:** 判断当前对象是否处于 「loading finished」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.IsLoadingFinished();
```

### SetPhotoModeRoll
`public void SetPhotoModeRoll(float roll)`

**用途 / Purpose:** 为 「photo mode roll」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetPhotoModeRoll(0);
```

### SetPhotoModeOrbit
`public void SetPhotoModeOrbit(bool orbit)`

**用途 / Purpose:** 为 「photo mode orbit」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetPhotoModeOrbit(false);
```

### GetFallDensity
`public float GetFallDensity()`

**用途 / Purpose:** 读取并返回当前对象中 「fall density」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetFallDensity();
```

### SetPhotoModeOn
`public void SetPhotoModeOn(bool on)`

**用途 / Purpose:** 为 「photo mode on」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetPhotoModeOn(false);
```

### SetPhotoModeFocus
`public void SetPhotoModeFocus(float focusStart, float focusEnd, float focus, float exposure)`

**用途 / Purpose:** 为 「photo mode focus」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetPhotoModeFocus(0, 0, 0, 0);
```

### SetPhotoModeFov
`public void SetPhotoModeFov(float verticalFov)`

**用途 / Purpose:** 为 「photo mode fov」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetPhotoModeFov(0);
```

### GetPhotoModeFov
`public float GetPhotoModeFov()`

**用途 / Purpose:** 读取并返回当前对象中 「photo mode fov」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPhotoModeFov();
```

### HasDecalRenderer
`public bool HasDecalRenderer()`

**用途 / Purpose:** 判断当前对象是否已经持有 「decal renderer」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.HasDecalRenderer();
```

### SetPhotoModeVignette
`public void SetPhotoModeVignette(bool vignetteOn)`

**用途 / Purpose:** 为 「photo mode vignette」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetPhotoModeVignette(false);
```

### SetSceneColorGradeIndex
`public void SetSceneColorGradeIndex(int index)`

**用途 / Purpose:** 为 「scene color grade index」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSceneColorGradeIndex(0);
```

### SetSceneFilterIndex
`public int SetSceneFilterIndex(int index)`

**用途 / Purpose:** 为 「scene filter index」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.SetSceneFilterIndex(0);
```

### SetSceneColorGrade
`public void SetSceneColorGrade(string textureName)`

**用途 / Purpose:** 为 「scene color grade」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSceneColorGrade("example");
```

### SetUpgradeLevel
`public void SetUpgradeLevel(int level)`

**用途 / Purpose:** 为 「upgrade level」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetUpgradeLevel(0);
```

### CreateBurstParticle
`public void CreateBurstParticle(int particleId, MatrixFrame frame)`

**用途 / Purpose:** 构建一个新的 「burst particle」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.CreateBurstParticle(0, frame);
```

### GetTerrainHeightData
`public float GetTerrainHeightData(int nodeXIndex, int nodeYIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「terrain height data」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetTerrainHeightData(0, 0);
```

### GetTerrainPhysicsMaterialIndexData
`public short GetTerrainPhysicsMaterialIndexData(int nodeXIndex, int nodeYIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「terrain physics material index data」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetTerrainPhysicsMaterialIndexData(0, 0);
```

### GetTerrainData
`public void GetTerrainData(out Vec2i nodeDimension, out float nodeSize, out int layerCount, out int layerVersion)`

**用途 / Purpose:** 读取并返回当前对象中 「terrain data」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetTerrainData(nodeDimension, nodeSize, layerCount, layerVersion);
```

### GetTerrainNodeData
`public void GetTerrainNodeData(int xIndex, int yIndex, out int vertexCountAlongAxis, out float quadLength, out float minHeight, out float maxHeight)`

**用途 / Purpose:** 读取并返回当前对象中 「terrain node data」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetTerrainNodeData(0, 0, vertexCountAlongAxis, quadLength, minHeight, maxHeight);
```

### GetTerrainPhysicsMaterialAtLayer
`public PhysicsMaterial GetTerrainPhysicsMaterialAtLayer(int layerIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「terrain physics material at layer」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetTerrainPhysicsMaterialAtLayer(0);
```

### SetSceneColorGrade
`public void SetSceneColorGrade(Scene scene, string textureName)`

**用途 / Purpose:** 为 「scene color grade」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSceneColorGrade(scene, "example");
```

### GetWaterLevel
`public float GetWaterLevel()`

**用途 / Purpose:** 读取并返回当前对象中 「water level」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetWaterLevel();
```

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)`

**用途 / Purpose:** 读取并返回当前对象中 「water level at position」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetWaterLevelAtPosition(position, false, false);
```

### GetWaterSpeedAtPosition
`public Vec3 GetWaterSpeedAtPosition(Vec2 position, bool doChoppinessCorrection)`

**用途 / Purpose:** 读取并返回当前对象中 「water speed at position」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetWaterSpeedAtPosition(position, false);
```

### GetBulkWaterLevelAtPositions
`public void GetBulkWaterLevelAtPositions(Vec2 waterHeightQueryArray, ref float waterHeightsAtVolumes, ref Vec3 waterSurfaceNormals)`

**用途 / Purpose:** 读取并返回当前对象中 「bulk water level at positions」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetBulkWaterLevelAtPositions(waterHeightQueryArray, waterHeightsAtVolumes, waterSurfaceNormals);
```

### GetInterpolationFactorForBodyWorldTransformSmoothing
`public void GetInterpolationFactorForBodyWorldTransformSmoothing(out float interpolationFactor, out float fixedDt)`

**用途 / Purpose:** 读取并返回当前对象中 「interpolation factor for body world transform smoothing」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetInterpolationFactorForBodyWorldTransformSmoothing(interpolationFactor, fixedDt);
```

### GetBulkWaterLevelAtVolumes
`public void GetBulkWaterLevelAtVolumes(UIntPtr waterHeightQueryArray, int waterHeightQueryArrayCount, in MatrixFrame globalFrame)`

**用途 / Purpose:** 读取并返回当前对象中 「bulk water level at volumes」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetBulkWaterLevelAtVolumes(waterHeightQueryArray, 0, globalFrame);
```

### GetWaterStrength
`public float GetWaterStrength()`

**用途 / Purpose:** 读取并返回当前对象中 「water strength」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetWaterStrength();
```

### DeRegisterShipVisual
`public void DeRegisterShipVisual(UIntPtr visualPointer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.DeRegisterShipVisual(visualPointer);
```

### RegisterShipVisualToWaterRenderer
`public UIntPtr RegisterShipVisualToWaterRenderer(WeakGameEntity entity, in Vec3 waterEffectBB)`

**用途 / Purpose:** 将「ship visual to water renderer」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RegisterShipVisualToWaterRenderer(entity, waterEffectBB);
```

### SetWaterStrength
`public void SetWaterStrength(float newWaterStrength)`

**用途 / Purpose:** 为 「water strength」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetWaterStrength(0);
```

### AddWaterWakeWithSphere
`public void AddWaterWakeWithSphere(Vec3 position, float radius, float wakeVisibility, float foamVisibility)`

**用途 / Purpose:** 将 「water wake with sphere」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.AddWaterWakeWithSphere(position, 0, 0, 0);
```

### AddWaterWakeWithCapsule
`public void AddWaterWakeWithCapsule(Vec3 positionA, float radiusA, Vec3 positionB, float radiusB, float wakeVisibility, float foamVisibility)`

**用途 / Purpose:** 将 「water wake with capsule」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.AddWaterWakeWithCapsule(positionA, 0, positionB, 0, 0, 0);
```

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds)`

**用途 / Purpose:** 读取并返回当前对象中 「path between a i faces」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPathBetweenAIFaces(startingFace, endingFace, startingPosition, endingPosition, 0, path, 0);
```

### HasNavmeshFaceUnsharedEdges
`public bool HasNavmeshFaceUnsharedEdges(in PathFaceRecord faceRecord)`

**用途 / Purpose:** 判断当前对象是否已经持有 「navmesh face unshared edges」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.HasNavmeshFaceUnsharedEdges(faceRecord);
```

### GetNavmeshFaceCountBetweenTwoIds
`public int GetNavmeshFaceCountBetweenTwoIds(int firstId, int secondId)`

**用途 / Purpose:** 读取并返回当前对象中 「navmesh face count between two ids」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetNavmeshFaceCountBetweenTwoIds(0, 0);
```

### GetNavmeshFaceRecordsBetweenTwoIds
`public void GetNavmeshFaceRecordsBetweenTwoIds(int firstId, int secondId, PathFaceRecord faceRecords)`

**用途 / Purpose:** 读取并返回当前对象中 「navmesh face records between two ids」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetNavmeshFaceRecordsBetweenTwoIds(0, 0, faceRecords);
```

### SetFixedTickCallbackActive
`public void SetFixedTickCallbackActive(bool isActive)`

**用途 / Purpose:** 为 「fixed tick callback active」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetFixedTickCallbackActive(false);
```

### SetOnCollisionFilterCallbackActive
`public void SetOnCollisionFilterCallbackActive(bool isActive)`

**用途 / Purpose:** 为 「on collision filter callback active」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetOnCollisionFilterCallbackActive(false);
```

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(UIntPtr startingFace, UIntPtr endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**用途 / Purpose:** 读取并返回当前对象中 「path between a i faces」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPathBetweenAIFaces(startingFace, endingFace, startingPosition, endingPosition, 0, path, 0, 0, 0);
```

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier)`

**用途 / Purpose:** 读取并返回当前对象中 「path between a i faces」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPathBetweenAIFaces(0, 0, startingPosition, endingPosition, 0, path, 0, 0);
```

### GetPathBetweenAIFaces
`public bool GetPathBetweenAIFaces(int startingFace, int endingFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, NavigationPath path, int excludedFaceIds, float extraCostMultiplier, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**用途 / Purpose:** 读取并返回当前对象中 「path between a i faces」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPathBetweenAIFaces(0, 0, startingPosition, endingPosition, 0, path, 0, 0, 0, 0);
```

### GetPathDistanceBetweenAIFaces
`public bool GetPathDistanceBetweenAIFaces(int startingAiFace, int endingAiFace, Vec2 startingPosition, Vec2 endingPosition, float agentRadius, float distanceLimit, out float distance, int excludedFaceIds, int regionSwitchCostTo0, int regionSwitchCostTo1)`

**用途 / Purpose:** 读取并返回当前对象中 「path distance between a i faces」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPathDistanceBetweenAIFaces(0, 0, startingPosition, endingPosition, 0, 0, distance, 0, 0, 0);
```

### GetNavMeshFaceIndex
`public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec2 position, bool isRegion1, bool checkIfDisabled, bool ignoreHeight = false)`

**用途 / Purpose:** 读取并返回当前对象中 「nav mesh face index」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetNavMeshFaceIndex(record, position, false, false, false);
```

### GetNavMeshFaceIndex
`public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec3 position, bool checkIfDisabled)`

**用途 / Purpose:** 读取并返回当前对象中 「nav mesh face index」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetNavMeshFaceIndex(record, position, false);
```

### CreateNewScene
`public static Scene CreateNewScene(bool initialize_physics = true, bool enable_decals = true, DecalAtlasGroup atlasGroup = DecalAtlasGroup.All, string sceneName = "mono_renderscene")`

**用途 / Purpose:** 构建一个新的 「new scene」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Scene.CreateNewScene(false, false, decalAtlasGroup.All, "example");
```

### AddAlwaysRenderedSkeleton
`public void AddAlwaysRenderedSkeleton(Skeleton skeleton)`

**用途 / Purpose:** 将 「always rendered skeleton」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.AddAlwaysRenderedSkeleton(skeleton);
```

### RemoveAlwaysRenderedSkeleton
`public void RemoveAlwaysRenderedSkeleton(Skeleton skeleton)`

**用途 / Purpose:** 从当前容器或状态中移除 「always rendered skeleton」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.RemoveAlwaysRenderedSkeleton(skeleton);
```

### CreatePathMesh
`public MetaMesh CreatePathMesh(string baseEntityName, bool isWaterPath)`

**用途 / Purpose:** 构建一个新的 「path mesh」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.CreatePathMesh("example", false);
```

### SetActiveVisibilityLevels
`public void SetActiveVisibilityLevels(List<string> levelsToActivate)`

**用途 / Purpose:** 为 「active visibility levels」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetActiveVisibilityLevels(levelsToActivate);
```

### SetDoNotWaitForLoadingStatesToRender
`public void SetDoNotWaitForLoadingStatesToRender(bool value)`

**用途 / Purpose:** 为 「do not wait for loading states to render」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetDoNotWaitForLoadingStatesToRender(false);
```

### SetDynamicSnowTexture
`public void SetDynamicSnowTexture(Texture texture)`

**用途 / Purpose:** 为 「dynamic snow texture」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetDynamicSnowTexture(texture);
```

### GetWindFlowMapData
`public void GetWindFlowMapData(float flowMapData)`

**用途 / Purpose:** 读取并返回当前对象中 「wind flow map data」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetWindFlowMapData(0);
```

### CreateDynamicRainTexture
`public void CreateDynamicRainTexture(int w, int h)`

**用途 / Purpose:** 构建一个新的 「dynamic rain texture」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.CreateDynamicRainTexture(0, 0);
```

### CreatePathMesh
`public MetaMesh CreatePathMesh(IList<GameEntity> pathNodes, bool isWaterPath = false)`

**用途 / Purpose:** 构建一个新的 「path mesh」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.CreatePathMesh(pathNodes, false);
```

### GetEntityWithGuid
`public GameEntity GetEntityWithGuid(string guid)`

**用途 / Purpose:** 读取并返回当前对象中 「entity with guid」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetEntityWithGuid("example");
```

### IsEntityFrameChanged
`public bool IsEntityFrameChanged(string containsName)`

**用途 / Purpose:** 判断当前对象是否处于 「entity frame changed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.IsEntityFrameChanged("example");
```

### GetTerrainHeightAndNormal
`public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)`

**用途 / Purpose:** 读取并返回当前对象中 「terrain height and normal」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetTerrainHeightAndNormal(position, height, normal);
```

### GetFloraInstanceCount
`public int GetFloraInstanceCount()`

**用途 / Purpose:** 读取并返回当前对象中 「flora instance count」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetFloraInstanceCount();
```

### GetFloraRendererTextureUsage
`public int GetFloraRendererTextureUsage()`

**用途 / Purpose:** 读取并返回当前对象中 「flora renderer texture usage」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetFloraRendererTextureUsage();
```

### GetTerrainMemoryUsage
`public int GetTerrainMemoryUsage()`

**用途 / Purpose:** 读取并返回当前对象中 「terrain memory usage」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetTerrainMemoryUsage();
```

### SetFetchCrcInfoOfScene
`public void SetFetchCrcInfoOfScene(bool value)`

**用途 / Purpose:** 为 「fetch crc info of scene」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetFetchCrcInfoOfScene(false);
```

### GetSceneXMLCRC
`public uint GetSceneXMLCRC()`

**用途 / Purpose:** 读取并返回当前对象中 「scene x m l c r c」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetSceneXMLCRC();
```

### GetNavigationMeshCRC
`public uint GetNavigationMeshCRC()`

**用途 / Purpose:** 读取并返回当前对象中 「navigation mesh c r c」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetNavigationMeshCRC();
```

### SetGlobalWindStrengthVector
`public void SetGlobalWindStrengthVector(in Vec2 windVector)`

**用途 / Purpose:** 为 「global wind strength vector」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetGlobalWindStrengthVector(windVector);
```

### GetGlobalWindStrengthVector
`public Vec2 GetGlobalWindStrengthVector()`

**用途 / Purpose:** 读取并返回当前对象中 「global wind strength vector」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetGlobalWindStrengthVector();
```

### GetGlobalWindVelocity
`public Vec2 GetGlobalWindVelocity()`

**用途 / Purpose:** 读取并返回当前对象中 「global wind velocity」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetGlobalWindVelocity();
```

### SetGlobalWindVelocity
`public void SetGlobalWindVelocity(in Vec2 windVector)`

**用途 / Purpose:** 为 「global wind velocity」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetGlobalWindVelocity(windVector);
```

### GetEnginePhysicsEnabled
`public bool GetEnginePhysicsEnabled()`

**用途 / Purpose:** 读取并返回当前对象中 「engine physics enabled」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetEnginePhysicsEnabled();
```

### ClearNavMesh
`public void ClearNavMesh()`

**用途 / Purpose:** 清空当前对象中的「nav mesh」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.ClearNavMesh();
```

### StallLoadingRenderingsUntilFurtherNotice
`public void StallLoadingRenderingsUntilFurtherNotice()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.StallLoadingRenderingsUntilFurtherNotice();
```

### GetNavMeshFaceCount
`public int GetNavMeshFaceCount()`

**用途 / Purpose:** 读取并返回当前对象中 「nav mesh face count」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetNavMeshFaceCount();
```

### ResumeLoadingRenderings
`public void ResumeLoadingRenderings()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.ResumeLoadingRenderings();
```

### GetUpgradeLevelMask
`public uint GetUpgradeLevelMask()`

**用途 / Purpose:** 读取并返回当前对象中 「upgrade level mask」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetUpgradeLevelMask();
```

### SetUpgradeLevelVisibility
`public void SetUpgradeLevelVisibility(uint mask)`

**用途 / Purpose:** 为 「upgrade level visibility」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetUpgradeLevelVisibility(0);
```

### SetUpgradeLevelVisibility
`public void SetUpgradeLevelVisibility(List<string> levels)`

**用途 / Purpose:** 为 「upgrade level visibility」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetUpgradeLevelVisibility(levels);
```

### GetIdOfNavMeshFace
`public int GetIdOfNavMeshFace(int faceIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「id of nav mesh face」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetIdOfNavMeshFace(0);
```

### SetClothSimulationState
`public void SetClothSimulationState(bool state)`

**用途 / Purpose:** 为 「cloth simulation state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetClothSimulationState(false);
```

### GetNavMeshCenterPosition
`public void GetNavMeshCenterPosition(int faceIndex, ref Vec3 centerPosition)`

**用途 / Purpose:** 读取并返回当前对象中 「nav mesh center position」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetNavMeshCenterPosition(0, centerPosition);
```

### GetNavMeshPathFaceRecord
`public PathFaceRecord GetNavMeshPathFaceRecord(int faceIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「nav mesh path face record」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetNavMeshPathFaceRecord(0);
```

### GetPathFaceRecordFromNavMeshFacePointer
`public PathFaceRecord GetPathFaceRecordFromNavMeshFacePointer(UIntPtr navMeshFacePointer)`

**用途 / Purpose:** 读取并返回当前对象中 「path face record from nav mesh face pointer」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPathFaceRecordFromNavMeshFacePointer(navMeshFacePointer);
```

### GetAllNavmeshFaceRecords
`public void GetAllNavmeshFaceRecords(PathFaceRecord faceRecords)`

**用途 / Purpose:** 读取并返回当前对象中 「all navmesh face records」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetAllNavmeshFaceRecords(faceRecords);
```

### GetFirstEntityWithName
`public GameEntity GetFirstEntityWithName(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「first entity with name」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetFirstEntityWithName("example");
```

### GetCampaignEntityWithName
`public GameEntity GetCampaignEntityWithName(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「campaign entity with name」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetCampaignEntityWithName("example");
```

### GetFirstEntityWithScriptComponent
`public GameEntity GetFirstEntityWithScriptComponent(string scriptName)`

**用途 / Purpose:** 读取并返回当前对象中 「first entity with script component」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetFirstEntityWithScriptComponent("example");
```

### GetUpgradeLevelMaskOfLevelName
`public uint GetUpgradeLevelMaskOfLevelName(string levelName)`

**用途 / Purpose:** 读取并返回当前对象中 「upgrade level mask of level name」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetUpgradeLevelMaskOfLevelName("example");
```

### GetUpgradeLevelNameOfIndex
`public string GetUpgradeLevelNameOfIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「upgrade level name of index」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetUpgradeLevelNameOfIndex(0);
```

### GetUpgradeLevelCount
`public int GetUpgradeLevelCount()`

**用途 / Purpose:** 读取并返回当前对象中 「upgrade level count」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetUpgradeLevelCount();
```

### GetWinterTimeFactor
`public float GetWinterTimeFactor()`

**用途 / Purpose:** 读取并返回当前对象中 「winter time factor」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetWinterTimeFactor();
```

### GetNavMeshFaceFirstVertexZ
`public float GetNavMeshFaceFirstVertexZ(int faceIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「nav mesh face first vertex z」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetNavMeshFaceFirstVertexZ(0);
```

### SetWinterTimeFactor
`public void SetWinterTimeFactor(float winterTimeFactor)`

**用途 / Purpose:** 为 「winter time factor」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetWinterTimeFactor(0);
```

### SetDrynessFactor
`public void SetDrynessFactor(float drynessFactor)`

**用途 / Purpose:** 为 「dryness factor」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetDrynessFactor(0);
```

### GetFog
`public float GetFog()`

**用途 / Purpose:** 读取并返回当前对象中 「fog」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetFog();
```

### SetFog
`public void SetFog(float fogDensity, ref Vec3 fogColor, float fogFalloff)`

**用途 / Purpose:** 为 「fog」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetFog(0, fogColor, 0);
```

### SetFogAdvanced
`public void SetFogAdvanced(float fogFalloffOffset, float fogFalloffMinFog, float fogFalloffStartDist)`

**用途 / Purpose:** 为 「fog advanced」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetFogAdvanced(0, 0, 0);
```

### SetFogAmbientColor
`public void SetFogAmbientColor(ref Vec3 fogAmbientColor)`

**用途 / Purpose:** 为 「fog ambient color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetFogAmbientColor(fogAmbientColor);
```

### SetTemperature
`public void SetTemperature(float temperature)`

**用途 / Purpose:** 为 「temperature」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetTemperature(0);
```

### SetHumidity
`public void SetHumidity(float humidity)`

**用途 / Purpose:** 为 「humidity」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetHumidity(0);
```

### SetDynamicShadowmapCascadesRadiusMultiplier
`public void SetDynamicShadowmapCascadesRadiusMultiplier(float multiplier)`

**用途 / Purpose:** 为 「dynamic shadowmap cascades radius multiplier」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetDynamicShadowmapCascadesRadiusMultiplier(0);
```

### SetEnvironmentMultiplier
`public void SetEnvironmentMultiplier(bool useMultiplier, float multiplier)`

**用途 / Purpose:** 为 「environment multiplier」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetEnvironmentMultiplier(false, 0);
```

### SetSkyRotation
`public void SetSkyRotation(float rotation)`

**用途 / Purpose:** 为 「sky rotation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSkyRotation(0);
```

### SetSkyBrightness
`public void SetSkyBrightness(float brightness)`

**用途 / Purpose:** 为 「sky brightness」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSkyBrightness(0);
```

### SetForcedSnow
`public void SetForcedSnow(bool value)`

**用途 / Purpose:** 为 「forced snow」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetForcedSnow(false);
```

### SetSunLight
`public void SetSunLight(ref Vec3 color, ref Vec3 direction)`

**用途 / Purpose:** 为 「sun light」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSunLight(color, direction);
```

### SetSunDirection
`public void SetSunDirection(ref Vec3 direction)`

**用途 / Purpose:** 为 「sun direction」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSunDirection(direction);
```

### SetSun
`public void SetSun(ref Vec3 color, float altitude, float angle, float intensity)`

**用途 / Purpose:** 为 「sun」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSun(color, 0, 0, 0);
```

### SetSunAngleAltitude
`public void SetSunAngleAltitude(float angle, float altitude)`

**用途 / Purpose:** 为 「sun angle altitude」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSunAngleAltitude(0, 0);
```

### SetSunSize
`public void SetSunSize(float size)`

**用途 / Purpose:** 为 「sun size」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSunSize(0);
```

### SetSunShaftStrength
`public void SetSunShaftStrength(float strength)`

**用途 / Purpose:** 为 「sun shaft strength」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSunShaftStrength(0);
```

### GetRainDensity
`public float GetRainDensity()`

**用途 / Purpose:** 读取并返回当前对象中 「rain density」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetRainDensity();
```

### SetRainDensity
`public void SetRainDensity(float density)`

**用途 / Purpose:** 为 「rain density」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetRainDensity(0);
```

### GetSnowDensity
`public float GetSnowDensity()`

**用途 / Purpose:** 读取并返回当前对象中 「snow density」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetSnowDensity();
```

### SetSnowDensity
`public void SetSnowDensity(float density)`

**用途 / Purpose:** 为 「snow density」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSnowDensity(0);
```

### AddDecalInstance
`public void AddDecalInstance(Decal decal, string decalSetID, bool deletable)`

**用途 / Purpose:** 将 「decal instance」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.AddDecalInstance(decal, "example", false);
```

### RemoveDecalInstance
`public void RemoveDecalInstance(Decal decal, string decalSetID)`

**用途 / Purpose:** 从当前容器或状态中移除 「decal instance」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.RemoveDecalInstance(decal, "example");
```

### SetShadow
`public void SetShadow(bool shadowEnabled)`

**用途 / Purpose:** 为 「shadow」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetShadow(false);
```

### AddPointLight
`public int AddPointLight(ref Vec3 position, float radius)`

**用途 / Purpose:** 将 「point light」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.AddPointLight(position, 0);
```

### AddDirectionalLight
`public int AddDirectionalLight(ref Vec3 position, ref Vec3 direction, float radius)`

**用途 / Purpose:** 将 「directional light」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.AddDirectionalLight(position, direction, 0);
```

### SetLightPosition
`public void SetLightPosition(int lightIndex, ref Vec3 position)`

**用途 / Purpose:** 为 「light position」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetLightPosition(0, position);
```

### SetLightDiffuseColor
`public void SetLightDiffuseColor(int lightIndex, ref Vec3 diffuseColor)`

**用途 / Purpose:** 为 「light diffuse color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetLightDiffuseColor(0, diffuseColor);
```

### SetLightDirection
`public void SetLightDirection(int lightIndex, ref Vec3 direction)`

**用途 / Purpose:** 为 「light direction」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetLightDirection(0, direction);
```

### SetMieScatterFocus
`public void SetMieScatterFocus(float strength)`

**用途 / Purpose:** 为 「mie scatter focus」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetMieScatterFocus(0);
```

### SetMieScatterStrength
`public void SetMieScatterStrength(float strength)`

**用途 / Purpose:** 为 「mie scatter strength」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetMieScatterStrength(0);
```

### SetBrightpassThreshold
`public void SetBrightpassThreshold(float threshold)`

**用途 / Purpose:** 为 「brightpass threshold」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetBrightpassThreshold(0);
```

### SetLensDistortion
`public void SetLensDistortion(float amount)`

**用途 / Purpose:** 为 「lens distortion」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetLensDistortion(0);
```

### SetHexagonVignetteAlpha
`public void SetHexagonVignetteAlpha(float amount)`

**用途 / Purpose:** 为 「hexagon vignette alpha」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetHexagonVignetteAlpha(0);
```

### SetMinExposure
`public void SetMinExposure(float minExposure)`

**用途 / Purpose:** 为 「min exposure」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetMinExposure(0);
```

### SetMaxExposure
`public void SetMaxExposure(float maxExposure)`

**用途 / Purpose:** 为 「max exposure」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetMaxExposure(0);
```

### SetTargetExposure
`public void SetTargetExposure(float targetExposure)`

**用途 / Purpose:** 为 「target exposure」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetTargetExposure(0);
```

### SetMiddleGray
`public void SetMiddleGray(float middleGray)`

**用途 / Purpose:** 为 「middle gray」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetMiddleGray(0);
```

### SetBloomStrength
`public void SetBloomStrength(float bloomStrength)`

**用途 / Purpose:** 为 「bloom strength」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetBloomStrength(0);
```

### SetBloomAmount
`public void SetBloomAmount(float bloomAmount)`

**用途 / Purpose:** 为 「bloom amount」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetBloomAmount(0);
```

### SetGrainAmount
`public void SetGrainAmount(float grainAmount)`

**用途 / Purpose:** 为 「grain amount」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetGrainAmount(0);
```

### AddItemEntity
`public GameEntity AddItemEntity(ref MatrixFrame placementFrame, MetaMesh metaMesh)`

**用途 / Purpose:** 将 「item entity」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.AddItemEntity(placementFrame, metaMesh);
```

### RemoveEntity
`public void RemoveEntity(GameEntity entity, int removeReason)`

**用途 / Purpose:** 从当前容器或状态中移除 「entity」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.RemoveEntity(entity, 0);
```

### RemoveEntity
`public void RemoveEntity(WeakGameEntity entity, int removeReason)`

**用途 / Purpose:** 从当前容器或状态中移除 「entity」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.RemoveEntity(entity, 0);
```

### AttachEntity
`public bool AttachEntity(GameEntity entity, bool showWarnings = false)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.AttachEntity(entity, false);
```

### AttachEntity
`public bool AttachEntity(WeakGameEntity entity, bool showWarnings = false)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.AttachEntity(entity, false);
```

### AddEntityWithMesh
`public void AddEntityWithMesh(Mesh mesh, ref MatrixFrame frame)`

**用途 / Purpose:** 将 「entity with mesh」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.AddEntityWithMesh(mesh, frame);
```

### AddEntityWithMultiMesh
`public void AddEntityWithMultiMesh(MetaMesh mesh, ref MatrixFrame frame)`

**用途 / Purpose:** 将 「entity with multi mesh」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.AddEntityWithMultiMesh(mesh, frame);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.Tick(0);
```

### ClearAll
`public void ClearAll()`

**用途 / Purpose:** 清空当前对象中的「all」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.ClearAll();
```

### SetDefaultLighting
`public void SetDefaultLighting()`

**用途 / Purpose:** 为 「default lighting」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetDefaultLighting();
```

### CalculateEffectiveLighting
`public bool CalculateEffectiveLighting()`

**用途 / Purpose:** 计算「effective lighting」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.CalculateEffectiveLighting();
```

### GetPathDistanceBetweenPositions
`public bool GetPathDistanceBetweenPositions(ref WorldPosition point0, ref WorldPosition point1, float agentRadius, out float pathDistance)`

**用途 / Purpose:** 读取并返回当前对象中 「path distance between positions」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPathDistanceBetweenPositions(point0, point1, 0, pathDistance);
```

### IsLineToPointClear
`public bool IsLineToPointClear(ref WorldPosition position, ref WorldPosition destination, float agentRadius)`

**用途 / Purpose:** 判断当前对象是否处于 「line to point clear」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.IsLineToPointClear(position, destination, 0);
```

### IsLineToPointClear
`public bool IsLineToPointClear(UIntPtr startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**用途 / Purpose:** 判断当前对象是否处于 「line to point clear」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.IsLineToPointClear(startingFace, position, destination, 0);
```

### IsLineToPointClear
`public bool IsLineToPointClear(int startingFace, Vec2 position, Vec2 destination, float agentRadius)`

**用途 / Purpose:** 判断当前对象是否处于 「line to point clear」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.IsLineToPointClear(0, position, destination, 0);
```

### GetLastPointOnNavigationMeshFromPositionToDestination
`public Vec2 GetLastPointOnNavigationMeshFromPositionToDestination(int startingFace, Vec2 position, Vec2 destination, int excludedFaceIds)`

**用途 / Purpose:** 读取并返回当前对象中 「last point on navigation mesh from position to destination」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetLastPointOnNavigationMeshFromPositionToDestination(0, position, destination, 0);
```

### GetLastPositionOnNavMeshFaceForPointAndDirection
`public Vec2 GetLastPositionOnNavMeshFaceForPointAndDirection(PathFaceRecord record, Vec2 position, Vec2 destination)`

**用途 / Purpose:** 读取并返回当前对象中 「last position on nav mesh face for point and direction」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetLastPositionOnNavMeshFaceForPointAndDirection(record, position, destination);
```

### GetLastPointOnNavigationMeshFromWorldPositionToDestination
`public Vec3 GetLastPointOnNavigationMeshFromWorldPositionToDestination(ref WorldPosition position, Vec2 destination)`

**用途 / Purpose:** 读取并返回当前对象中 「last point on navigation mesh from world position to destination」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetLastPointOnNavigationMeshFromWorldPositionToDestination(position, destination);
```

### DoesPathExistBetweenFaces
`public bool DoesPathExistBetweenFaces(int firstNavMeshFace, int secondNavMeshFace, bool ignoreDisabled)`

**用途 / Purpose:** 返回「path exist between faces」对当前对象是否成立的布尔结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.DoesPathExistBetweenFaces(0, 0, false);
```

### GetHeightAtPoint
`public bool GetHeightAtPoint(Vec2 point, BodyFlags excludeBodyFlags, ref float height)`

**用途 / Purpose:** 读取并返回当前对象中 「height at point」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetHeightAtPoint(point, excludeBodyFlags, height);
```

### GetNormalAt
`public Vec3 GetNormalAt(Vec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 「normal at」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetNormalAt(position);
```

### GetEntities
`public void GetEntities(ref List<GameEntity> entities)`

**用途 / Purpose:** 读取并返回当前对象中 「entities」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetEntities(entities);
```

### GetRootEntities
`public void GetRootEntities(NativeObjectArray entities)`

**用途 / Purpose:** 读取并返回当前对象中 「root entities」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetRootEntities(entities);
```

### SelectEntitiesCollidedWith
`public int SelectEntitiesCollidedWith(ref Ray ray, Intersection intersectionsOutput, UIntPtr entityIds)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.SelectEntitiesCollidedWith(ray, intersectionsOutput, entityIds);
```

### RayCastExcludingTwoEntities
`public bool RayCastExcludingTwoEntities(BodyFlags flags, in Ray ray, WeakGameEntity entity1, WeakGameEntity entity2)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RayCastExcludingTwoEntities(flags, ray, entity1, entity2);
```

### GenerateContactsWithCapsule
`public int GenerateContactsWithCapsule(ref CapsuleData capsule, BodyFlags exclude_flags, bool isFixedTick, Intersection intersectionsOutput, WeakGameEntity gameEntities, UIntPtr entityPointers)`

**用途 / Purpose:** 生成「contacts with capsule」的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GenerateContactsWithCapsule(capsule, exclude_flags, false, intersectionsOutput, gameEntities, entityPointers);
```

### GenerateContactsWithCapsuleAgainstEntity
`public int GenerateContactsWithCapsuleAgainstEntity(ref CapsuleData capsule, BodyFlags excludeFlags, WeakGameEntity entity, Intersection intersectionsOutput)`

**用途 / Purpose:** 生成「contacts with capsule against entity」的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GenerateContactsWithCapsuleAgainstEntity(capsule, excludeFlags, entity, intersectionsOutput);
```

### InvalidateTerrainPhysicsMaterials
`public void InvalidateTerrainPhysicsMaterials()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.InvalidateTerrainPhysicsMaterials();
```

### Read
`public void Read(string sceneName)`

**用途 / Purpose:** 读取当前对象的数据或状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.Read("example");
```

### Read
`public void Read(string sceneName, string moduleId, ref SceneInitializationData initData, string forcedAtmoName = "")`

**用途 / Purpose:** 读取当前对象的数据或状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.Read("example", "example", initData, "example");
```

### Read
`public void Read(string sceneName, ref SceneInitializationData initData, string forcedAtmoName = "")`

**用途 / Purpose:** 读取当前对象的数据或状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.Read("example", initData, "example");
```

### ReadAndCalculateInitialCamera
`public MatrixFrame ReadAndCalculateInitialCamera()`

**用途 / Purpose:** 读取「and calculate initial camera」的数据或状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.ReadAndCalculateInitialCamera();
```

### OptimizeScene
`public void OptimizeScene(bool optimizeFlora = true, bool optimizeOro = false)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.OptimizeScene(false, false);
```

### GetTerrainHeight
`public float GetTerrainHeight(Vec2 position, bool checkHoles = true)`

**用途 / Purpose:** 读取并返回当前对象中 「terrain height」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetTerrainHeight(position, false);
```

### CheckResources
`public void CheckResources(bool checkInvisibleEntities)`

**用途 / Purpose:** 检查「resources」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.CheckResources(false);
```

### ForceLoadResources
`public void ForceLoadResources(bool checkInvisibleEntities)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.ForceLoadResources(false);
```

### SetDepthOfFieldParameters
`public void SetDepthOfFieldParameters(float depthOfFieldFocusStart, float depthOfFieldFocusEnd, bool isVignetteOn)`

**用途 / Purpose:** 为 「depth of field parameters」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetDepthOfFieldParameters(0, 0, false);
```

### SetDepthOfFieldFocus
`public void SetDepthOfFieldFocus(float depthOfFieldFocus)`

**用途 / Purpose:** 为 「depth of field focus」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetDepthOfFieldFocus(0);
```

### ResetDepthOfFieldParams
`public void ResetDepthOfFieldParams()`

**用途 / Purpose:** 将 「depth of field params」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.ResetDepthOfFieldParams();
```

### PreloadForRendering
`public void PreloadForRendering()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.PreloadForRendering();
```

### SetColorGradeBlend
`public void SetColorGradeBlend(string texture1, string texture2, float alpha)`

**用途 / Purpose:** 为 「color grade blend」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetColorGradeBlend("example", "example", 0);
```

### GetGroundHeightAtPosition
`public float GetGroundHeightAtPosition(Vec3 position, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**用途 / Purpose:** 读取并返回当前对象中 「ground height at position」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetGroundHeightAtPosition(position, bodyFlags.CommonCollisionExcludeFlags);
```

### GetGroundHeightAndBodyFlagsAtPosition
`public float GetGroundHeightAndBodyFlagsAtPosition(Vec3 position, out BodyFlags contactPointFlags, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**用途 / Purpose:** 读取并返回当前对象中 「ground height and body flags at position」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetGroundHeightAndBodyFlagsAtPosition(position, contactPointFlags, bodyFlags.CommonCollisionExcludeFlags);
```

### GetGroundHeightAtPosition
`public float GetGroundHeightAtPosition(Vec3 position, out Vec3 normal, BodyFlags excludeFlags = BodyFlags.CommonCollisionExcludeFlags)`

**用途 / Purpose:** 读取并返回当前对象中 「ground height at position」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetGroundHeightAtPosition(position, normal, bodyFlags.CommonCollisionExcludeFlags);
```

### PauseSceneSounds
`public void PauseSceneSounds()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.PauseSceneSounds();
```

### ResumeSceneSounds
`public void ResumeSceneSounds()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.ResumeSceneSounds();
```

### FinishSceneSounds
`public void FinishSceneSounds()`

**用途 / Purpose:** 结束「scene sounds」流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.FinishSceneSounds();
```

### BoxCastOnlyForCamera
`public bool BoxCastOnlyForCamera(Vec3 boxPoints, in Vec3 centerPoint, bool castSupportRay, in Vec3 supportRaycastPoint, in Vec3 dir, float distance, WeakGameEntity ignoredEntity, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.Disabled | BodyFlags.Dynamic | BodyFlags.Ladder | BodyFlags.OnlyCollideWithRaycast | BodyFlags.AILimiter | BodyFlags.Barrier | BodyFlags.Barrier3D | BodyFlags.Ragdoll | BodyFlags.RagdollLimiter | BodyFlags.DroppedItem | BodyFlags.DoNotCollideWithRaycast | BodyFlags.DontCollideWithCamera | BodyFlags.WaterBody | BodyFlags.AgentOnly | BodyFlags.MissileOnly | BodyFlags.StealthBox)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.BoxCastOnlyForCamera(boxPoints, centerPoint, false, supportRaycastPoint, dir, 0, ignoredEntity, collisionDistance, closestPoint, collidedEntity, bodyFlags.StealthBox);
```

### BoxCast
`public bool BoxCast(Vec3 boxMin, Vec3 boxMax, bool castSupportRay, Vec3 supportRaycastPoint, Vec3 dir, float distance, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, BodyFlags excludedBodyFlags = BodyFlags.CameraCollisionRayCastExludeFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.BoxCast(boxMin, boxMax, false, supportRaycastPoint, dir, 0, collisionDistance, closestPoint, collidedEntity, bodyFlags.CameraCollisionRayCastExludeFlags);
```

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrain(sourcePoint, targetPoint, collisionDistance, closestPoint, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrainFixedPhysics(sourcePoint, targetPoint, collisionDistance, closestPoint, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### FocusRayCastForFixedPhysics
`public bool FocusRayCastForFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.FocusRayCastForFixedPhysics(sourcePoint, targetPoint, collisionDistance, closestPoint, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrain(sourcePoint, targetPoint, collisionDistance, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out WeakGameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrainFixedPhysics(sourcePoint, targetPoint, collisionDistance, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForRamming
`public bool RayCastForRamming(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, float rayThickness, out float collisionDistance, out Vec3 intersectionPoint, out WeakGameEntity collidedEntity, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags, BodyFlags includeBodyFlags = BodyFlags.None)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RayCastForRamming(sourcePoint, targetPoint, ignoredEntity, 0, collisionDistance, intersectionPoint, collidedEntity, bodyFlags.CommonFocusRayCastExcludeFlags, bodyFlags.None);
```

### RayCastForClosestEntityOrTerrainIgnoreEntity
`public bool RayCastForClosestEntityOrTerrainIgnoreEntity(in Vec3 sourcePoint, in Vec3 targetPoint, WeakGameEntity ignoredEntity, out float collisionDistance, out GameEntity collidedEntity, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrainIgnoreEntity(sourcePoint, targetPoint, ignoredEntity, collisionDistance, collidedEntity, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrain(sourcePoint, targetPoint, collisionDistance, closestPoint, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, out Vec3 closestPoint, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrainFixedPhysics(sourcePoint, targetPoint, collisionDistance, closestPoint, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrainFixedPhysics
`public bool RayCastForClosestEntityOrTerrainFixedPhysics(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrainFixedPhysics(sourcePoint, targetPoint, collisionDistance, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### RayCastForClosestEntityOrTerrain
`public bool RayCastForClosestEntityOrTerrain(Vec3 sourcePoint, Vec3 targetPoint, out float collisionDistance, float rayThickness = 0.01f, BodyFlags excludeBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.RayCastForClosestEntityOrTerrain(sourcePoint, targetPoint, collisionDistance, 0, bodyFlags.CommonFocusRayCastExcludeFlags);
```

### ImportNavigationMeshPrefab
`public void ImportNavigationMeshPrefab(string navMeshPrefabName, int navMeshGroupShift)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.ImportNavigationMeshPrefab("example", 0);
```

### ImportNavigationMeshPrefabWithFrame
`public void ImportNavigationMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.ImportNavigationMeshPrefabWithFrame("example", frame);
```

### SaveNavMeshPrefabWithFrame
`public void SaveNavMeshPrefabWithFrame(string navMeshPrefabName, MatrixFrame frame)`

**用途 / Purpose:** 将 「nav mesh prefab with frame」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SaveNavMeshPrefabWithFrame("example", frame);
```

### SetNavMeshRegionMap
`public void SetNavMeshRegionMap(bool regionMap)`

**用途 / Purpose:** 为 「nav mesh region map」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetNavMeshRegionMap(false);
```

### MarkFacesWithIdAsLadder
`public void MarkFacesWithIdAsLadder(int faceGroupId, bool isLadder)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.MarkFacesWithIdAsLadder(0, false);
```

### SetAbilityOfFacesWithId
`public int SetAbilityOfFacesWithId(int faceGroupId, bool isEnabled)`

**用途 / Purpose:** 为 「ability of faces with id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.SetAbilityOfFacesWithId(0, false);
```

### SwapFaceConnectionsWithID
`public bool SwapFaceConnectionsWithID(int hubFaceGroupID, int toBeSeparatedFaceGroupId, int toBeMergedFaceGroupId, bool canFail)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.SwapFaceConnectionsWithID(0, 0, 0, false);
```

### MergeFacesWithId
`public void MergeFacesWithId(int faceGroupId0, int faceGroupId1, int newFaceGroupId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.MergeFacesWithId(0, 0, 0);
```

### SeparateFacesWithId
`public void SeparateFacesWithId(int faceGroupId0, int faceGroupId1)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SeparateFacesWithId(0, 0);
```

### IsAnyFaceWithId
`public bool IsAnyFaceWithId(int faceGroupId)`

**用途 / Purpose:** 判断当前对象是否处于 「any face with id」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.IsAnyFaceWithId(0);
```

### GetNavigationMeshForPosition
`public UIntPtr GetNavigationMeshForPosition(in Vec3 position)`

**用途 / Purpose:** 读取并返回当前对象中 「navigation mesh for position」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetNavigationMeshForPosition(position);
```

### GetNearestNavigationMeshForPosition
`public UIntPtr GetNearestNavigationMeshForPosition(in Vec3 position, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)`

**用途 / Purpose:** 读取并返回当前对象中 「nearest navigation mesh for position」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetNearestNavigationMeshForPosition(position, 0, false);
```

### GetNavigationMeshForPosition
`public UIntPtr GetNavigationMeshForPosition(in Vec3 position, out int faceGroupId, float heightDifferenceLimit, bool excludeDynamicNavigationMeshes)`

**用途 / Purpose:** 读取并返回当前对象中 「navigation mesh for position」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetNavigationMeshForPosition(position, faceGroupId, 0, false);
```

### DoesPathExistBetweenPositions
`public bool DoesPathExistBetweenPositions(WorldPosition position, WorldPosition destination)`

**用途 / Purpose:** 返回「path exist between positions」对当前对象是否成立的布尔结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.DoesPathExistBetweenPositions(position, destination);
```

### SetLandscapeRainMaskData
`public void SetLandscapeRainMaskData(byte data)`

**用途 / Purpose:** 为 「landscape rain mask data」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetLandscapeRainMaskData(0);
```

### EnsurePostfxSystem
`public void EnsurePostfxSystem()`

**用途 / Purpose:** 确保「postfx system」处于预期状态，必要时进行初始化或修正。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.EnsurePostfxSystem();
```

### SetBloom
`public void SetBloom(bool mode)`

**用途 / Purpose:** 为 「bloom」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetBloom(false);
```

### SetDofMode
`public void SetDofMode(bool mode)`

**用途 / Purpose:** 为 「dof mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetDofMode(false);
```

### SetOcclusionMode
`public void SetOcclusionMode(bool mode)`

**用途 / Purpose:** 为 「occlusion mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetOcclusionMode(false);
```

### SetExternalInjectionTexture
`public void SetExternalInjectionTexture(Texture texture)`

**用途 / Purpose:** 为 「external injection texture」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetExternalInjectionTexture(texture);
```

### SetSunshaftMode
`public void SetSunshaftMode(bool mode)`

**用途 / Purpose:** 为 「sunshaft mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetSunshaftMode(false);
```

### GetSunDirection
`public Vec3 GetSunDirection()`

**用途 / Purpose:** 读取并返回当前对象中 「sun direction」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetSunDirection();
```

### GetNorthAngle
`public float GetNorthAngle()`

**用途 / Purpose:** 读取并返回当前对象中 「north angle」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetNorthAngle();
```

### GetNorthRotation
`public float GetNorthRotation()`

**用途 / Purpose:** 读取并返回当前对象中 「north rotation」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetNorthRotation();
```

### GetTerrainMinMaxHeight
`public bool GetTerrainMinMaxHeight(out float minHeight, out float maxHeight)`

**用途 / Purpose:** 读取并返回当前对象中 「terrain min max height」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetTerrainMinMaxHeight(minHeight, maxHeight);
```

### GetPhysicsMinMax
`public void GetPhysicsMinMax(ref Vec3 min_max)`

**用途 / Purpose:** 读取并返回当前对象中 「physics min max」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetPhysicsMinMax(min_max);
```

### IsEditorScene
`public bool IsEditorScene()`

**用途 / Purpose:** 判断当前对象是否处于 「editor scene」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.IsEditorScene();
```

### SetMotionBlurMode
`public void SetMotionBlurMode(bool mode)`

**用途 / Purpose:** 为 「motion blur mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetMotionBlurMode(false);
```

### SetAntialiasingMode
`public void SetAntialiasingMode(bool mode)`

**用途 / Purpose:** 为 「antialiasing mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetAntialiasingMode(false);
```

### SetDLSSMode
`public void SetDLSSMode(bool mode)`

**用途 / Purpose:** 为 「d l s s mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetDLSSMode(false);
```

### FindWeakEntitiesWithTag
`public IEnumerable<WeakGameEntity> FindWeakEntitiesWithTag(string tag)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「weak entities with tag」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.FindWeakEntitiesWithTag("example");
```

### FindWeakEntityWithTag
`public WeakGameEntity FindWeakEntityWithTag(string tag)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「weak entity with tag」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.FindWeakEntityWithTag("example");
```

### FindEntitiesWithTag
`public IEnumerable<GameEntity> FindEntitiesWithTag(string tag)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「entities with tag」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.FindEntitiesWithTag("example");
```

### FindEntityWithTag
`public GameEntity FindEntityWithTag(string tag)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「entity with tag」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.FindEntityWithTag("example");
```

### FindEntityWithName
`public GameEntity FindEntityWithName(string name)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「entity with name」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.FindEntityWithName("example");
```

### FindWeakEntitiesWithTagExpression
`public IEnumerable<WeakGameEntity> FindWeakEntitiesWithTagExpression(string expression)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「weak entities with tag expression」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.FindWeakEntitiesWithTagExpression("example");
```

### FindEntitiesWithTagExpression
`public IEnumerable<GameEntity> FindEntitiesWithTagExpression(string expression)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「entities with tag expression」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.FindEntitiesWithTagExpression("example");
```

### GetSoftBoundaryVertexCount
`public int GetSoftBoundaryVertexCount()`

**用途 / Purpose:** 读取并返回当前对象中 「soft boundary vertex count」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetSoftBoundaryVertexCount();
```

### GetHardBoundaryVertexCount
`public int GetHardBoundaryVertexCount()`

**用途 / Purpose:** 读取并返回当前对象中 「hard boundary vertex count」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetHardBoundaryVertexCount();
```

### GetSoftBoundaryVertex
`public Vec2 GetSoftBoundaryVertex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「soft boundary vertex」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetSoftBoundaryVertex(0);
```

### GetHardBoundaryVertex
`public Vec2 GetHardBoundaryVertex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「hard boundary vertex」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetHardBoundaryVertex(0);
```

### GetPathWithName
`public Path GetPathWithName(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「path with name」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPathWithName("example");
```

### DeletePathWithName
`public void DeletePathWithName(string name)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.DeletePathWithName("example");
```

### AddPath
`public void AddPath(string name)`

**用途 / Purpose:** 将 「path」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.AddPath("example");
```

### AddPathPoint
`public void AddPathPoint(string name, MatrixFrame frame)`

**用途 / Purpose:** 将 「path point」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.AddPathPoint("example", frame);
```

### GetBoundingBox
`public void GetBoundingBox(out Vec3 min, out Vec3 max)`

**用途 / Purpose:** 读取并返回当前对象中 「bounding box」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetBoundingBox(min, max);
```

### GetSceneLimits
`public void GetSceneLimits(out Vec3 min, out Vec3 max)`

**用途 / Purpose:** 读取并返回当前对象中 「scene limits」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.GetSceneLimits(min, max);
```

### SetName
`public void SetName(string name)`

**用途 / Purpose:** 为 「name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetName("example");
```

### GetName
`public string GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetName();
```

### GetModulePath
`public string GetModulePath()`

**用途 / Purpose:** 读取并返回当前对象中 「module path」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetModulePath();
```

### SetOwnerThread
`public void SetOwnerThread()`

**用途 / Purpose:** 为 「owner thread」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetOwnerThread();
```

### GetPathsWithNamePrefix
`public Path GetPathsWithNamePrefix(string prefix)`

**用途 / Purpose:** 读取并返回当前对象中 「paths with name prefix」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetPathsWithNamePrefix("example");
```

### SetUseConstantTime
`public void SetUseConstantTime(bool value)`

**用途 / Purpose:** 为 「use constant time」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetUseConstantTime(false);
```

### CheckPointCanSeePoint
`public bool CheckPointCanSeePoint(Vec3 source, Vec3 target, float? distanceToCheck = null)`

**用途 / Purpose:** 检查「point can see point」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.CheckPointCanSeePoint(source, target, 0);
```

### SetPlaySoundEventsAfterReadyToRender
`public void SetPlaySoundEventsAfterReadyToRender(bool value)`

**用途 / Purpose:** 为 「play sound events after ready to render」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetPlaySoundEventsAfterReadyToRender(false);
```

### DisableStaticShadows
`public void DisableStaticShadows(bool value)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.DisableStaticShadows(false);
```

### GetSkyboxMesh
`public Mesh GetSkyboxMesh()`

**用途 / Purpose:** 读取并返回当前对象中 「skybox mesh」 的结果。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.GetSkyboxMesh();
```

### SetAtmosphereWithName
`public void SetAtmosphereWithName(string name)`

**用途 / Purpose:** 为 「atmosphere with name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetAtmosphereWithName("example");
```

### FillEntityWithHardBorderPhysicsBarrier
`public void FillEntityWithHardBorderPhysicsBarrier(GameEntity entity)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.FillEntityWithHardBorderPhysicsBarrier(entity);
```

### ClearDecals
`public void ClearDecals()`

**用途 / Purpose:** 清空当前对象中的「decals」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.ClearDecals();
```

### SetPhotoAtmosphereViaTod
`public void SetPhotoAtmosphereViaTod(float tod, bool withStorm)`

**用途 / Purpose:** 为 「photo atmosphere via tod」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetPhotoAtmosphereViaTod(0, false);
```

### IsPositionOnADynamicNavMesh
`public bool IsPositionOnADynamicNavMesh(Vec3 position)`

**用途 / Purpose:** 判断当前对象是否处于 「position on a dynamic nav mesh」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.IsPositionOnADynamicNavMesh(position);
```

### WaitWaterRendererCPUSimulation
`public void WaitWaterRendererCPUSimulation()`

**用途 / Purpose:** 暂停当前流程，直到「water renderer c p u simulation」条件满足。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.WaitWaterRendererCPUSimulation();
```

### EnableInclusiveAsyncPhysx
`public void EnableInclusiveAsyncPhysx()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.EnableInclusiveAsyncPhysx();
```

### EnsureWaterWakeRenderer
`public void EnsureWaterWakeRenderer()`

**用途 / Purpose:** 确保「water wake renderer」处于预期状态，必要时进行初始化或修正。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.EnsureWaterWakeRenderer();
```

### DeleteWaterWakeRenderer
`public void DeleteWaterWakeRenderer()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.DeleteWaterWakeRenderer();
```

### SceneHadWaterWakeRenderer
`public bool SceneHadWaterWakeRenderer()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.SceneHadWaterWakeRenderer();
```

### SetWaterWakeWorldSize
`public void SetWaterWakeWorldSize(float worldSize, float eraseFactor)`

**用途 / Purpose:** 为 「water wake world size」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetWaterWakeWorldSize(0, 0);
```

### SetWaterWakeCameraOffset
`public void SetWaterWakeCameraOffset(float cameraOffset)`

**用途 / Purpose:** 为 「water wake camera offset」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetWaterWakeCameraOffset(0);
```

### TickWake
`public void TickWake(float dt)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「wake」的状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.TickWake(0);
```

### SetDoNotAddEntitiesToTickList
`public void SetDoNotAddEntitiesToTickList(bool value)`

**用途 / Purpose:** 为 「do not add entities to tick list」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetDoNotAddEntitiesToTickList(false);
```

### SetDontLoadInvisibleEntities
`public void SetDontLoadInvisibleEntities(bool value)`

**用途 / Purpose:** 为 「dont load invisible entities」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetDontLoadInvisibleEntities(false);
```

### SetUsesDeleteLaterSystem
`public void SetUsesDeleteLaterSystem(bool value)`

**用途 / Purpose:** 为 「uses delete later system」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.SetUsesDeleteLaterSystem(false);
```

### ClearCurrentFrameTickEntities
`public void ClearCurrentFrameTickEntities()`

**用途 / Purpose:** 清空当前对象中的「current frame tick entities」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
scene.ClearCurrentFrameTickEntities();
```

### FindClosestExitPositionForPositionOnABoundaryFace
`public Vec2 FindClosestExitPositionForPositionOnABoundaryFace(Vec3 position, UIntPtr boundaryFacePointer)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「closest exit position for position on a boundary face」。

```csharp
// 先通过子系统 API 拿到 Scene 实例
Scene scene = ...;
var result = scene.FindClosestExitPositionForPositionOnABoundaryFace(position, boundaryFacePointer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Scene scene = ...;
scene.IsDefaultEditorScene();
```

## 参见

- [本区域目录](../)