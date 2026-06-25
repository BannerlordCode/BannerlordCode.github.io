---
title: "GameEntity"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameEntity`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameEntity

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class GameEntity : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/GameEntity.cs`

## 概述

`GameEntity` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Scene` | `public Scene Scene { get; }` |
| `WeakEntity` | `public WeakGameEntity WeakEntity { get; }` |
| `Name` | `public string Name { get; set; }` |
| `EntityFlags` | `public EntityFlags EntityFlags { get; set; }` |
| `EntityVisibilityFlags` | `public EntityVisibilityFlags EntityVisibilityFlags { get; set; }` |
| `BodyFlag` | `public BodyFlags BodyFlag { get; set; }` |
| `PhysicsDescBodyFlag` | `public BodyFlags PhysicsDescBodyFlag { get; }` |
| `Mass` | `public float Mass { get; }` |
| `CenterOfMass` | `public Vec3 CenterOfMass { get; }` |
| `GlobalPosition` | `public Vec3 GlobalPosition { get; }` |
| `Tags` | `public string Tags { get; }` |
| `ChildCount` | `public int ChildCount { get; }` |
| `Parent` | `public GameEntity Parent { get; }` |
| `Root` | `public GameEntity Root { get; }` |
| `MultiMeshComponentCount` | `public int MultiMeshComponentCount { get; }` |
| `ClothSimulatorComponentCount` | `public int ClothSimulatorComponentCount { get; }` |
| `GlobalBoxMax` | `public Vec3 GlobalBoxMax { get; }` |
| `PhysicsGlobalBoxMax` | `public Vec3 PhysicsGlobalBoxMax { get; }` |
| `PhysicsGlobalBoxMin` | `public Vec3 PhysicsGlobalBoxMin { get; }` |
| `GlobalBoxMin` | `public Vec3 GlobalBoxMin { get; }` |
| `Skeleton` | `public Skeleton Skeleton { get; set; }` |

## 主要方法

### CreateFromWeakEntity
`public static GameEntity CreateFromWeakEntity(WeakGameEntity weakEntity)`

**用途 / Purpose:** 创建一个 `from weak entity` 实例或对象。

### GetScenePointer
`public UIntPtr GetScenePointer()`

**用途 / Purpose:** 获取 `scene pointer` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ClearEntityComponents
`public void ClearEntityComponents(bool resetAll, bool removeScripts, bool deleteChildEntities)`

**用途 / Purpose:** 处理 `clear entity components` 相关逻辑。

### ClearComponents
`public void ClearComponents()`

**用途 / Purpose:** 处理 `clear components` 相关逻辑。

### ClearOnlyOwnComponents
`public void ClearOnlyOwnComponents()`

**用途 / Purpose:** 处理 `clear only own components` 相关逻辑。

### CheckResources
`public bool CheckResources(bool addToQueue, bool checkFaceResources)`

**用途 / Purpose:** 处理 `check resources` 相关逻辑。

### SetMobility
`public void SetMobility(GameEntity.Mobility mobility)`

**用途 / Purpose:** 设置 `mobility` 的值或状态。

### GetMobility
`public GameEntity.Mobility GetMobility()`

**用途 / Purpose:** 获取 `mobility` 的当前值。

### AddMesh
`public void AddMesh(Mesh mesh, bool recomputeBoundingBox = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh`。

### AddMultiMeshToSkeleton
`public void AddMultiMeshToSkeleton(MetaMesh metaMesh)`

**用途 / Purpose:** 向当前集合/状态中添加 `multi mesh to skeleton`。

### AddMultiMeshToSkeletonBone
`public void AddMultiMeshToSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `multi mesh to skeleton bone`。

### SetColorToAllMeshesWithTagRecursive
`public void SetColorToAllMeshesWithTagRecursive(uint color, string tag)`

**用途 / Purpose:** 设置 `color to all meshes with tag recursive` 的值或状态。

### GetAllMeshesWithTag
`public IEnumerable<Mesh> GetAllMeshesWithTag(string tag)`

**用途 / Purpose:** 获取 `all meshes with tag` 的当前值。

### SetColor
`public void SetColor(uint color1, uint color2, string meshTag)`

**用途 / Purpose:** 设置 `color` 的值或状态。

### GetFactorColor
`public uint GetFactorColor()`

**用途 / Purpose:** 获取 `factor color` 的当前值。

### SetFactorColor
`public void SetFactorColor(uint color)`

**用途 / Purpose:** 设置 `factor color` 的值或状态。

### SetAsReplayEntity
`public void SetAsReplayEntity()`

**用途 / Purpose:** 设置 `as replay entity` 的值或状态。

### SetClothMaxDistanceMultiplier
`public void SetClothMaxDistanceMultiplier(float multiplier)`

**用途 / Purpose:** 设置 `cloth max distance multiplier` 的值或状态。

### RemoveMultiMeshFromSkeleton
`public void RemoveMultiMeshFromSkeleton(MetaMesh metaMesh)`

**用途 / Purpose:** 从当前集合/状态中移除 `multi mesh from skeleton`。

### RemoveMultiMeshFromSkeletonBone
`public void RemoveMultiMeshFromSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)`

**用途 / Purpose:** 从当前集合/状态中移除 `multi mesh from skeleton bone`。

### RemoveComponentWithMesh
`public bool RemoveComponentWithMesh(Mesh mesh)`

**用途 / Purpose:** 从当前集合/状态中移除 `component with mesh`。

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### HasComponent
`public bool HasComponent(GameEntityComponent component)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `component`。

### IsInEditorScene
`public bool IsInEditorScene()`

**用途 / Purpose:** 处理 `is in editor scene` 相关逻辑。

### RemoveComponent
`public bool RemoveComponent(GameEntityComponent component)`

**用途 / Purpose:** 从当前集合/状态中移除 `component`。

### GetGuid
`public string GetGuid()`

**用途 / Purpose:** 获取 `guid` 的当前值。

### IsGuidValid
`public bool IsGuidValid()`

**用途 / Purpose:** 处理 `is guid valid` 相关逻辑。

### SetEnforcedMaximumLodLevel
`public void SetEnforcedMaximumLodLevel(int lodLevel)`

**用途 / Purpose:** 设置 `enforced maximum lod level` 的值或状态。

### GetLodLevelForDistanceSq
`public float GetLodLevelForDistanceSq(float distSq)`

**用途 / Purpose:** 获取 `lod level for distance sq` 的当前值。

### GetQuickBoneEntitialFrame
`public void GetQuickBoneEntitialFrame(sbyte index, out MatrixFrame frame)`

**用途 / Purpose:** 获取 `quick bone entitial frame` 的当前值。

### UpdateVisibilityMask
`public void UpdateVisibilityMask()`

**用途 / Purpose:** 更新 `visibility mask` 的状态或数据。

### CreateEmpty
`public static GameEntity CreateEmpty(Scene scene, bool isModifiableFromEditor = true, bool createPhysics = true, bool callScriptCallbacks = true)`

**用途 / Purpose:** 创建一个 `empty` 实例或对象。

### CreateEmptyDynamic
`public static GameEntity CreateEmptyDynamic(Scene scene, bool isModifiableFromEditor = true)`

**用途 / Purpose:** 创建一个 `empty dynamic` 实例或对象。

### CreateEmptyWithoutScene
`public static GameEntity CreateEmptyWithoutScene()`

**用途 / Purpose:** 创建一个 `empty without scene` 实例或对象。

### CopyFrom
`public static GameEntity CopyFrom(Scene scene, GameEntity entity, bool createPhysics = true, bool callScriptCallbacks = true)`

**用途 / Purpose:** 处理 `copy from` 相关逻辑。

### CopyFrom
`public static GameEntity CopyFrom(Scene scene, WeakGameEntity entity, bool createPhysics = true, bool callScriptCallbacks = true)`

**用途 / Purpose:** 处理 `copy from` 相关逻辑。

### Instantiate
`public static GameEntity Instantiate(Scene scene, string prefabName, bool callScriptCallbacks, bool createPhysics = true, string scriptInclusingTag = "")`

**用途 / Purpose:** 处理 `instantiate` 相关逻辑。

### CallScriptCallbacks
`public void CallScriptCallbacks(bool registerScriptComponents)`

**用途 / Purpose:** 处理 `call script callbacks` 相关逻辑。

### Instantiate
`public static GameEntity Instantiate(Scene scene, string prefabName, MatrixFrame frame, bool callScriptCallbacks = true, string scriptInclusingTag = "")`

**用途 / Purpose:** 处理 `instantiate` 相关逻辑。

### IsGhostObject
`public bool IsGhostObject()`

**用途 / Purpose:** 处理 `is ghost object` 相关逻辑。

### CreateAndAddScriptComponent
`public void CreateAndAddScriptComponent(string name, bool callScriptCallbacks)`

**用途 / Purpose:** 创建一个 `and add script component` 实例或对象。

### PrefabExists
`public static bool PrefabExists(string name)`

**用途 / Purpose:** 处理 `prefab exists` 相关逻辑。

### RemoveScriptComponent
`public void RemoveScriptComponent(UIntPtr scriptComponent, int removeReason)`

**用途 / Purpose:** 从当前集合/状态中移除 `script component`。

### SetEntityEnvMapVisibility
`public void SetEntityEnvMapVisibility(bool value)`

**用途 / Purpose:** 设置 `entity env map visibility` 的值或状态。

### HasScene
`public bool HasScene()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `scene`。

### HasScriptComponent
`public bool HasScriptComponent(string scName)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `script component`。

### GetScriptComponents
`public IEnumerable<ScriptComponentBehavior> GetScriptComponents()`

**用途 / Purpose:** 获取 `script components` 的当前值。

### GetFirstChildEntityWithTag
`public GameEntity GetFirstChildEntityWithTag(string tag)`

**用途 / Purpose:** 获取 `first child entity with tag` 的当前值。

### HasScriptOfType
`public bool HasScriptOfType(Type t)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `script of type`。

### SetAlpha
`public void SetAlpha(float alpha)`

**用途 / Purpose:** 设置 `alpha` 的值或状态。

### SetVisibilityExcludeParents
`public void SetVisibilityExcludeParents(bool visible)`

**用途 / Purpose:** 设置 `visibility exclude parents` 的值或状态。

### SetReadyToRender
`public void SetReadyToRender(bool ready)`

**用途 / Purpose:** 设置 `ready to render` 的值或状态。

### GetVisibilityExcludeParents
`public bool GetVisibilityExcludeParents()`

**用途 / Purpose:** 获取 `visibility exclude parents` 的当前值。

### IsVisibleIncludeParents
`public bool IsVisibleIncludeParents()`

**用途 / Purpose:** 处理 `is visible include parents` 相关逻辑。

### GetVisibilityLevelMaskIncludingParents
`public uint GetVisibilityLevelMaskIncludingParents()`

**用途 / Purpose:** 获取 `visibility level mask including parents` 的当前值。

### GetEditModeLevelVisibility
`public bool GetEditModeLevelVisibility()`

**用途 / Purpose:** 获取 `edit mode level visibility` 的当前值。

### Remove
`public void Remove(int removeReason)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### CopyFromPrefab
`public static GameEntity CopyFromPrefab(GameEntity prefab)`

**用途 / Purpose:** 处理 `copy from prefab` 相关逻辑。

### CopyFromPrefab
`public static GameEntity CopyFromPrefab(WeakGameEntity prefab)`

**用途 / Purpose:** 处理 `copy from prefab` 相关逻辑。

### SetUpgradeLevelMask
`public void SetUpgradeLevelMask(GameEntity.UpgradeLevelMask mask)`

**用途 / Purpose:** 设置 `upgrade level mask` 的值或状态。

### GetUpgradeLevelMask
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMask()`

**用途 / Purpose:** 获取 `upgrade level mask` 的当前值。

### GetUpgradeLevelMaskCumulative
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMaskCumulative()`

**用途 / Purpose:** 获取 `upgrade level mask cumulative` 的当前值。

### GetUpgradeLevelOfEntity
`public int GetUpgradeLevelOfEntity()`

**用途 / Purpose:** 获取 `upgrade level of entity` 的当前值。

### GetOldPrefabName
`public string GetOldPrefabName()`

**用途 / Purpose:** 获取 `old prefab name` 的当前值。

### GetPrefabName
`public string GetPrefabName()`

**用途 / Purpose:** 获取 `prefab name` 的当前值。

### CopyScriptComponentFromAnotherEntity
`public void CopyScriptComponentFromAnotherEntity(GameEntity otherEntity, string scriptName)`

**用途 / Purpose:** 处理 `copy script component from another entity` 相关逻辑。

### SetFrame
`public void SetFrame(ref MatrixFrame frame, bool isTeleportation = true)`

**用途 / Purpose:** 设置 `frame` 的值或状态。

### SetLocalFrame
`public void SetLocalFrame(ref MatrixFrame frame, bool isTeleportation = true)`

**用途 / Purpose:** 设置 `local frame` 的值或状态。

### SetClothComponentKeepState
`public void SetClothComponentKeepState(MetaMesh metaMesh, bool state)`

**用途 / Purpose:** 设置 `cloth component keep state` 的值或状态。

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool state)`

**用途 / Purpose:** 设置 `cloth component keep state of all meshes` 的值或状态。

### SetPreviousFrameInvalid
`public void SetPreviousFrameInvalid()`

**用途 / Purpose:** 设置 `previous frame invalid` 的值或状态。

### GetFrame
`public MatrixFrame GetFrame()`

**用途 / Purpose:** 获取 `frame` 的当前值。

### GetLocalFrame
`public void GetLocalFrame(out MatrixFrame frame)`

**用途 / Purpose:** 获取 `local frame` 的当前值。

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**用途 / Purpose:** 获取 `local frame` 的当前值。

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame()`

**用途 / Purpose:** 获取 `global frame` 的当前值。

### GetGlobalFrameImpreciseForFixedTick
`public MatrixFrame GetGlobalFrameImpreciseForFixedTick()`

**用途 / Purpose:** 获取 `global frame imprecise for fixed tick` 的当前值。

### ComputePreciseGlobalFrameForFixedTickSlow
`public MatrixFrame ComputePreciseGlobalFrameForFixedTickSlow()`

**用途 / Purpose:** 处理 `compute precise global frame for fixed tick slow` 相关逻辑。

### SetGlobalFrame
`public void SetGlobalFrame(in MatrixFrame frame, bool isTeleportation = true)`

**用途 / Purpose:** 设置 `global frame` 的值或状态。

### GetPreviousGlobalFrame
`public MatrixFrame GetPreviousGlobalFrame()`

**用途 / Purpose:** 获取 `previous global frame` 的当前值。

### GetBodyWorldTransform
`public MatrixFrame GetBodyWorldTransform()`

**用途 / Purpose:** 获取 `body world transform` 的当前值。

### SetLocalPosition
`public void SetLocalPosition(Vec3 position)`

**用途 / Purpose:** 设置 `local position` 的值或状态。

### UpdateTriadFrameForEditor
`public void UpdateTriadFrameForEditor()`

**用途 / Purpose:** 更新 `triad frame for editor` 的状态或数据。

### UpdateTriadFrameForEditorForAllChildren
`public void UpdateTriadFrameForEditorForAllChildren()`

**用途 / Purpose:** 更新 `triad frame for editor for all children` 的状态或数据。

### GetPhysicsMaterial
`public PhysicsMaterial GetPhysicsMaterial()`

**用途 / Purpose:** 获取 `physics material` 的当前值。

### SetBodyFlags
`public void SetBodyFlags(BodyFlags bodyFlags)`

**用途 / Purpose:** 设置 `body flags` 的值或状态。

### SetBodyFlagsRecursive
`public void SetBodyFlagsRecursive(BodyFlags bodyFlags)`

**用途 / Purpose:** 设置 `body flags recursive` 的值或状态。

### AddBodyFlags
`public void AddBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `body flags`。

### RemoveBodyFlags
`public void RemoveBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)`

**用途 / Purpose:** 从当前集合/状态中移除 `body flags`。

### GetGlobalScale
`public Vec3 GetGlobalScale()`

**用途 / Purpose:** 获取 `global scale` 的当前值。

### GetLocalScale
`public Vec3 GetLocalScale()`

**用途 / Purpose:** 获取 `local scale` 的当前值。

### SetAnimationSoundActivation
`public void SetAnimationSoundActivation(bool activate)`

**用途 / Purpose:** 设置 `animation sound activation` 的值或状态。

### CopyComponentsToSkeleton
`public void CopyComponentsToSkeleton()`

**用途 / Purpose:** 处理 `copy components to skeleton` 相关逻辑。

### AddMeshToBone
`public void AddMeshToBone(sbyte boneIndex, Mesh mesh)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh to bone`。

### ActivateRagdoll
`public void ActivateRagdoll()`

**用途 / Purpose:** 处理 `activate ragdoll` 相关逻辑。

### PauseSkeletonAnimation
`public void PauseSkeletonAnimation()`

**用途 / Purpose:** 处理 `pause skeleton animation` 相关逻辑。

### ResumeSkeletonAnimation
`public void ResumeSkeletonAnimation()`

**用途 / Purpose:** 处理 `resume skeleton animation` 相关逻辑。

### IsSkeletonAnimationPaused
`public bool IsSkeletonAnimationPaused()`

**用途 / Purpose:** 处理 `is skeleton animation paused` 相关逻辑。

### GetBoneCount
`public sbyte GetBoneCount()`

**用途 / Purpose:** 获取 `bone count` 的当前值。

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)`

**用途 / Purpose:** 获取 `water level at position` 的当前值。

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)`

**用途 / Purpose:** 获取 `bone entitial frame with index` 的当前值。

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName)`

**用途 / Purpose:** 获取 `bone entitial frame with name` 的当前值。

### AddTag
`public void AddTag(string tag)`

**用途 / Purpose:** 向当前集合/状态中添加 `tag`。

### RemoveTag
`public void RemoveTag(string tag)`

**用途 / Purpose:** 从当前集合/状态中移除 `tag`。

### HasTag
`public bool HasTag(string tag)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `tag`。

### AddChild
`public void AddChild(GameEntity gameEntity, bool autoLocalizeFrame = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `child`。

### RemoveChild
`public void RemoveChild(GameEntity childEntity, bool keepPhysics, bool keepScenePointer, bool callScriptCallbacks, int removeReason)`

**用途 / Purpose:** 从当前集合/状态中移除 `child`。

### BreakPrefab
`public void BreakPrefab()`

**用途 / Purpose:** 处理 `break prefab` 相关逻辑。

### GetChild
`public GameEntity GetChild(int index)`

**用途 / Purpose:** 获取 `child` 的当前值。

### HasComplexAnimTree
`public bool HasComplexAnimTree()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `complex anim tree`。

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh, bool updateVisMask = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `multi mesh`。

### RemoveMultiMesh
`public bool RemoveMultiMesh(MetaMesh metaMesh)`

**用途 / Purpose:** 从当前集合/状态中移除 `multi mesh`。

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType)`

**用途 / Purpose:** 获取 `component count` 的当前值。

### AddAllMeshesOfGameEntity
`public void AddAllMeshesOfGameEntity(GameEntity gameEntity)`

**用途 / Purpose:** 向当前集合/状态中添加 `all meshes of game entity`。

### SetFrameChanged
`public void SetFrameChanged()`

**用途 / Purpose:** 设置 `frame changed` 的值或状态。

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(int index, GameEntity.ComponentType componentType)`

**用途 / Purpose:** 获取 `component at index` 的当前值。

### GetMetaMesh
`public MetaMesh GetMetaMesh(int metaMeshIndex)`

**用途 / Purpose:** 获取 `meta mesh` 的当前值。

### GetClothSimulator
`public ClothSimulatorComponent GetClothSimulator(int clothSimulatorIndex)`

**用途 / Purpose:** 获取 `cloth simulator` 的当前值。

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 设置 `vector argument` 的值或状态。

### SetMaterialForAllMeshes
`public void SetMaterialForAllMeshes(Material material)`

**用途 / Purpose:** 设置 `material for all meshes` 的值或状态。

### AddLight
`public bool AddLight(Light light)`

**用途 / Purpose:** 向当前集合/状态中添加 `light`。

### GetLight
`public Light GetLight()`

**用途 / Purpose:** 获取 `light` 的当前值。

### AddParticleSystemComponent
`public void AddParticleSystemComponent(string particleid)`

**用途 / Purpose:** 向当前集合/状态中添加 `particle system component`。

### RemoveAllParticleSystems
`public void RemoveAllParticleSystems()`

**用途 / Purpose:** 从当前集合/状态中移除 `all particle systems`。

### CheckPointWithOrientedBoundingBox
`public bool CheckPointWithOrientedBoundingBox(Vec3 point)`

**用途 / Purpose:** 处理 `check point with oriented bounding box` 相关逻辑。

### PauseParticleSystem
`public void PauseParticleSystem(bool doChildren)`

**用途 / Purpose:** 处理 `pause particle system` 相关逻辑。

### ResumeParticleSystem
`public void ResumeParticleSystem(bool doChildren)`

**用途 / Purpose:** 处理 `resume particle system` 相关逻辑。

### BurstEntityParticle
`public void BurstEntityParticle(bool doChildren)`

**用途 / Purpose:** 处理 `burst entity particle` 相关逻辑。

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float emissionRateMultiplier)`

**用途 / Purpose:** 设置 `runtime emission rate multiplier` 的值或状态。

### GetLocalBoundingBox
`public BoundingBox GetLocalBoundingBox()`

**用途 / Purpose:** 获取 `local bounding box` 的当前值。

### GetGlobalBoundingBox
`public BoundingBox GetGlobalBoundingBox()`

**用途 / Purpose:** 获取 `global bounding box` 的当前值。

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin()`

**用途 / Purpose:** 获取 `bounding box min` 的当前值。

### SetHasCustomBoundingBoxValidationSystem
`public void SetHasCustomBoundingBoxValidationSystem(bool hasCustomBoundingBox)`

**用途 / Purpose:** 设置 `has custom bounding box validation system` 的值或状态。

### ValidateBoundingBox
`public void ValidateBoundingBox()`

**用途 / Purpose:** 处理 `validate bounding box` 相关逻辑。

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax()`

**用途 / Purpose:** 获取 `bounding box max` 的当前值。

### UpdateGlobalBounds
`public void UpdateGlobalBounds()`

**用途 / Purpose:** 更新 `global bounds` 的状态或数据。

### RecomputeBoundingBox
`public void RecomputeBoundingBox()`

**用途 / Purpose:** 处理 `recompute bounding box` 相关逻辑。

### GetBoundingBoxRadius
`public float GetBoundingBoxRadius()`

**用途 / Purpose:** 获取 `bounding box radius` 的当前值。

### SetBoundingboxDirty
`public void SetBoundingboxDirty()`

**用途 / Purpose:** 设置 `boundingbox dirty` 的值或状态。

### SetContourColor
`public void SetContourColor(uint? color, bool alwaysVisible = true)`

**用途 / Purpose:** 设置 `contour color` 的值或状态。

### GetPhysicsBoundingBoxMax
`public Vec3 GetPhysicsBoundingBoxMax()`

**用途 / Purpose:** 获取 `physics bounding box max` 的当前值。

### GetPhysicsBoundingBoxMin
`public Vec3 GetPhysicsBoundingBoxMin()`

**用途 / Purpose:** 获取 `physics bounding box min` 的当前值。

### GetHasFrameChanged
`public bool GetHasFrameChanged()`

**用途 / Purpose:** 获取 `has frame changed` 的当前值。

### GetFirstMesh
`public Mesh GetFirstMesh()`

**用途 / Purpose:** 获取 `first mesh` 的当前值。

### GetAttachedNavmeshFaceCount
`public int GetAttachedNavmeshFaceCount()`

**用途 / Purpose:** 获取 `attached navmesh face count` 的当前值。

### GetAttachedNavmeshFaceRecords
`public void GetAttachedNavmeshFaceRecords(PathFaceRecord faceRecords)`

**用途 / Purpose:** 获取 `attached navmesh face records` 的当前值。

### SetExternalReferencesUsage
`public void SetExternalReferencesUsage(bool value)`

**用途 / Purpose:** 设置 `external references usage` 的值或状态。

### SetMorphFrameOfComponents
`public void SetMorphFrameOfComponents(float value)`

**用途 / Purpose:** 设置 `morph frame of components` 的值或状态。

### AddEditDataUserToAllMeshes
`public void AddEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)`

**用途 / Purpose:** 向当前集合/状态中添加 `edit data user to all meshes`。

### ReleaseEditDataUserToAllMeshes
`public void ReleaseEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)`

**用途 / Purpose:** 处理 `release edit data user to all meshes` 相关逻辑。

### GetCameraParamsFromCameraScript
`public void GetCameraParamsFromCameraScript(Camera cam, ref Vec3 dofParams)`

**用途 / Purpose:** 获取 `camera params from camera script` 的当前值。

### GetMeshBendedFrame
`public void GetMeshBendedFrame(MatrixFrame worldSpacePosition, ref MatrixFrame output)`

**用途 / Purpose:** 获取 `mesh bended frame` 的当前值。

### ComputeTrajectoryVolume
`public void ComputeTrajectoryVolume(float missileSpeed, float verticalAngleMaxInDegrees, float verticalAngleMinInDegrees, float horizontalAngleRangeInDegrees, float airFrictionConstant)`

**用途 / Purpose:** 处理 `compute trajectory volume` 相关逻辑。

### SetAnimTreeChannelParameterForceUpdate
`public void SetAnimTreeChannelParameterForceUpdate(float phase, int channelNo)`

**用途 / Purpose:** 设置 `anim tree channel parameter force update` 的值或状态。

### ChangeMetaMeshOrRemoveItIfNotExists
`public void ChangeMetaMeshOrRemoveItIfNotExists(MetaMesh entityMetaMesh, MetaMesh newMetaMesh)`

**用途 / Purpose:** 处理 `change meta mesh or remove it if not exists` 相关逻辑。

### SetUpdateValidtyOnFrameChangedOfFacesWithId
`public void SetUpdateValidtyOnFrameChangedOfFacesWithId(int faceGroupId, bool updateValidity)`

**用途 / Purpose:** 设置 `update validty on frame changed of faces with id` 的值或状态。

### AttachNavigationMeshFaces
`public void AttachNavigationMeshFaces(int faceGroupId, bool isConnected, bool isBlocker = false, bool autoLocalize = false, bool finalizeBlockerConvexHullComputation = false, bool updateEntityFrame = true)`

**用途 / Purpose:** 处理 `attach navigation mesh faces` 相关逻辑。

### DetachAllAttachedNavigationMeshFaces
`public void DetachAllAttachedNavigationMeshFaces()`

**用途 / Purpose:** 处理 `detach all attached navigation mesh faces` 相关逻辑。

### UpdateAttachedNavigationMeshFaces
`public void UpdateAttachedNavigationMeshFaces()`

**用途 / Purpose:** 更新 `attached navigation mesh faces` 的状态或数据。

### RemoveSkeleton
`public void RemoveSkeleton()`

**用途 / Purpose:** 从当前集合/状态中移除 `skeleton`。

### RemoveAllChildren
`public void RemoveAllChildren()`

**用途 / Purpose:** 从当前集合/状态中移除 `all children`。

### GetChildren
`public IEnumerable<GameEntity> GetChildren()`

**用途 / Purpose:** 获取 `children` 的当前值。

### GetEntityAndChildren
`public IEnumerable<GameEntity> GetEntityAndChildren()`

**用途 / Purpose:** 获取 `entity and children` 的当前值。

### GetChildrenRecursive
`public void GetChildrenRecursive(ref List<GameEntity> children)`

**用途 / Purpose:** 获取 `children recursive` 的当前值。

### GetChildrenWithTagRecursive
`public void GetChildrenWithTagRecursive(List<GameEntity> children, string tag)`

**用途 / Purpose:** 获取 `children with tag recursive` 的当前值。

### IsSelectedOnEditor
`public bool IsSelectedOnEditor()`

**用途 / Purpose:** 处理 `is selected on editor` 相关逻辑。

### SelectEntityOnEditor
`public void SelectEntityOnEditor()`

**用途 / Purpose:** 处理 `select entity on editor` 相关逻辑。

### DeselectEntityOnEditor
`public void DeselectEntityOnEditor()`

**用途 / Purpose:** 处理 `deselect entity on editor` 相关逻辑。

### SetAsPredisplayEntity
`public void SetAsPredisplayEntity()`

**用途 / Purpose:** 设置 `as predisplay entity` 的值或状态。

### RemoveFromPredisplayEntity
`public void RemoveFromPredisplayEntity()`

**用途 / Purpose:** 从当前集合/状态中移除 `from predisplay entity`。

### SetNativeScriptComponentVariable
`public void SetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)`

**用途 / Purpose:** 设置 `native script component variable` 的值或状态。

### SetManualGlobalBoundingBox
`public void SetManualGlobalBoundingBox(Vec3 boundingBoxStartGlobal, Vec3 boundingBoxEndGlobal)`

**用途 / Purpose:** 设置 `manual global bounding box` 的值或状态。

### RayHitEntity
`public bool RayHitEntity(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref float resultLength)`

**用途 / Purpose:** 处理 `ray hit entity` 相关逻辑。

### RayHitEntityWithNormal
`public bool RayHitEntityWithNormal(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref Vec3 resultNormal, ref float resultLength)`

**用途 / Purpose:** 处理 `ray hit entity with normal` 相关逻辑。

### GetNativeScriptComponentVariable
`public void GetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)`

**用途 / Purpose:** 获取 `native script component variable` 的当前值。

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPosition, Vec3 clipNormal)`

**用途 / Purpose:** 设置 `custom clip plane` 的值或状态。

### GetBoundingBoxLongestHalfDimension
`public float GetBoundingBoxLongestHalfDimension()`

**用途 / Purpose:** 获取 `bounding box longest half dimension` 的当前值。

### ComputeBoundingBoxFromLongestHalfDimension
`public BoundingBox ComputeBoundingBoxFromLongestHalfDimension(float longestHalfDimensionCoefficient)`

**用途 / Purpose:** 处理 `compute bounding box from longest half dimension` 相关逻辑。

### ComputeBoundingBoxIncludeChildren
`public BoundingBox ComputeBoundingBoxIncludeChildren()`

**用途 / Purpose:** 处理 `compute bounding box include children` 相关逻辑。

### SetManualLocalBoundingBox
`public void SetManualLocalBoundingBox(in BoundingBox boundingBox)`

**用途 / Purpose:** 设置 `manual local bounding box` 的值或状态。

### RelaxLocalBoundingBox
`public void RelaxLocalBoundingBox(in BoundingBox boundingBox)`

**用途 / Purpose:** 处理 `relax local bounding box` 相关逻辑。

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode)`

**用途 / Purpose:** 设置 `cull mode` 的值或状态。

### GetFirstChildEntityWithTagRecursive
`public GameEntity GetFirstChildEntityWithTagRecursive(string tag)`

**用途 / Purpose:** 获取 `first child entity with tag recursive` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### SetDoNotCheckVisibility
`public void SetDoNotCheckVisibility(bool value)`

**用途 / Purpose:** 设置 `do not check visibility` 的值或状态。

### SetBoneFrameToAllMeshes
`public void SetBoneFrameToAllMeshes(int boneIndex, in MatrixFrame frame)`

**用途 / Purpose:** 设置 `bone frame to all meshes` 的值或状态。

### GetGlobalWindStrengthVectorOfScene
`public Vec2 GetGlobalWindStrengthVectorOfScene()`

**用途 / Purpose:** 获取 `global wind strength vector of scene` 的当前值。

### GetGlobalWindVelocityOfScene
`public Vec2 GetGlobalWindVelocityOfScene()`

**用途 / Purpose:** 获取 `global wind velocity of scene` 的当前值。

### GetLastFinalRenderCameraPositionOfScene
`public Vec3 GetLastFinalRenderCameraPositionOfScene()`

**用途 / Purpose:** 获取 `last final render camera position of scene` 的当前值。

### SetForceDecalsToRender
`public void SetForceDecalsToRender(bool value)`

**用途 / Purpose:** 设置 `force decals to render` 的值或状态。

### SetForceNotAffectedBySeason
`public void SetForceNotAffectedBySeason(bool value)`

**用途 / Purpose:** 设置 `force not affected by season` 的值或状态。

## 使用示例

```csharp
GameEntity.CreateFromWeakEntity(weakEntity);
```

## 参见

- [完整类目录](../catalog)