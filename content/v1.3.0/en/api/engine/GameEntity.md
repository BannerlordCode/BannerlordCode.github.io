---
title: "GameEntity"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameEntity`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameEntity

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class GameEntity : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/GameEntity.cs`

## Overview

`GameEntity` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### CreateFromWeakEntity
`public static GameEntity CreateFromWeakEntity(WeakGameEntity weakEntity)`

**Purpose:** Creates a new `from weak entity` instance or object.

### GetScenePointer
`public UIntPtr GetScenePointer()`

**Purpose:** Gets the current value of `scene pointer`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### ClearEntityComponents
`public void ClearEntityComponents(bool resetAll, bool removeScripts, bool deleteChildEntities)`

**Purpose:** Handles logic related to `clear entity components`.

### ClearComponents
`public void ClearComponents()`

**Purpose:** Handles logic related to `clear components`.

### ClearOnlyOwnComponents
`public void ClearOnlyOwnComponents()`

**Purpose:** Handles logic related to `clear only own components`.

### CheckResources
`public bool CheckResources(bool addToQueue, bool checkFaceResources)`

**Purpose:** Handles logic related to `check resources`.

### SetMobility
`public void SetMobility(GameEntity.Mobility mobility)`

**Purpose:** Sets the value or state of `mobility`.

### GetMobility
`public GameEntity.Mobility GetMobility()`

**Purpose:** Gets the current value of `mobility`.

### AddMesh
`public void AddMesh(Mesh mesh, bool recomputeBoundingBox = true)`

**Purpose:** Adds `mesh` to the current collection or state.

### AddMultiMeshToSkeleton
`public void AddMultiMeshToSkeleton(MetaMesh metaMesh)`

**Purpose:** Adds `multi mesh to skeleton` to the current collection or state.

### AddMultiMeshToSkeletonBone
`public void AddMultiMeshToSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)`

**Purpose:** Adds `multi mesh to skeleton bone` to the current collection or state.

### SetColorToAllMeshesWithTagRecursive
`public void SetColorToAllMeshesWithTagRecursive(uint color, string tag)`

**Purpose:** Sets the value or state of `color to all meshes with tag recursive`.

### GetAllMeshesWithTag
`public IEnumerable<Mesh> GetAllMeshesWithTag(string tag)`

**Purpose:** Gets the current value of `all meshes with tag`.

### SetColor
`public void SetColor(uint color1, uint color2, string meshTag)`

**Purpose:** Sets the value or state of `color`.

### GetFactorColor
`public uint GetFactorColor()`

**Purpose:** Gets the current value of `factor color`.

### SetFactorColor
`public void SetFactorColor(uint color)`

**Purpose:** Sets the value or state of `factor color`.

### SetAsReplayEntity
`public void SetAsReplayEntity()`

**Purpose:** Sets the value or state of `as replay entity`.

### SetClothMaxDistanceMultiplier
`public void SetClothMaxDistanceMultiplier(float multiplier)`

**Purpose:** Sets the value or state of `cloth max distance multiplier`.

### RemoveMultiMeshFromSkeleton
`public void RemoveMultiMeshFromSkeleton(MetaMesh metaMesh)`

**Purpose:** Removes `multi mesh from skeleton` from the current collection or state.

### RemoveMultiMeshFromSkeletonBone
`public void RemoveMultiMeshFromSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)`

**Purpose:** Removes `multi mesh from skeleton bone` from the current collection or state.

### RemoveComponentWithMesh
`public bool RemoveComponentWithMesh(Mesh mesh)`

**Purpose:** Removes `component with mesh` from the current collection or state.

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**Purpose:** Adds `component` to the current collection or state.

### HasComponent
`public bool HasComponent(GameEntityComponent component)`

**Purpose:** Checks whether the current object has/contains `component`.

### IsInEditorScene
`public bool IsInEditorScene()`

**Purpose:** Handles logic related to `is in editor scene`.

### RemoveComponent
`public bool RemoveComponent(GameEntityComponent component)`

**Purpose:** Removes `component` from the current collection or state.

### GetGuid
`public string GetGuid()`

**Purpose:** Gets the current value of `guid`.

### IsGuidValid
`public bool IsGuidValid()`

**Purpose:** Handles logic related to `is guid valid`.

### SetEnforcedMaximumLodLevel
`public void SetEnforcedMaximumLodLevel(int lodLevel)`

**Purpose:** Sets the value or state of `enforced maximum lod level`.

### GetLodLevelForDistanceSq
`public float GetLodLevelForDistanceSq(float distSq)`

**Purpose:** Gets the current value of `lod level for distance sq`.

### GetQuickBoneEntitialFrame
`public void GetQuickBoneEntitialFrame(sbyte index, out MatrixFrame frame)`

**Purpose:** Gets the current value of `quick bone entitial frame`.

### UpdateVisibilityMask
`public void UpdateVisibilityMask()`

**Purpose:** Updates the state or data of `visibility mask`.

### CreateEmpty
`public static GameEntity CreateEmpty(Scene scene, bool isModifiableFromEditor = true, bool createPhysics = true, bool callScriptCallbacks = true)`

**Purpose:** Creates a new `empty` instance or object.

### CreateEmptyDynamic
`public static GameEntity CreateEmptyDynamic(Scene scene, bool isModifiableFromEditor = true)`

**Purpose:** Creates a new `empty dynamic` instance or object.

### CreateEmptyWithoutScene
`public static GameEntity CreateEmptyWithoutScene()`

**Purpose:** Creates a new `empty without scene` instance or object.

### CopyFrom
`public static GameEntity CopyFrom(Scene scene, GameEntity entity, bool createPhysics = true, bool callScriptCallbacks = true)`

**Purpose:** Handles logic related to `copy from`.

### CopyFrom
`public static GameEntity CopyFrom(Scene scene, WeakGameEntity entity, bool createPhysics = true, bool callScriptCallbacks = true)`

**Purpose:** Handles logic related to `copy from`.

### Instantiate
`public static GameEntity Instantiate(Scene scene, string prefabName, bool callScriptCallbacks, bool createPhysics = true, string scriptInclusingTag = "")`

**Purpose:** Handles logic related to `instantiate`.

### CallScriptCallbacks
`public void CallScriptCallbacks(bool registerScriptComponents)`

**Purpose:** Handles logic related to `call script callbacks`.

### Instantiate
`public static GameEntity Instantiate(Scene scene, string prefabName, MatrixFrame frame, bool callScriptCallbacks = true, string scriptInclusingTag = "")`

**Purpose:** Handles logic related to `instantiate`.

### IsGhostObject
`public bool IsGhostObject()`

**Purpose:** Handles logic related to `is ghost object`.

### CreateAndAddScriptComponent
`public void CreateAndAddScriptComponent(string name, bool callScriptCallbacks)`

**Purpose:** Creates a new `and add script component` instance or object.

### PrefabExists
`public static bool PrefabExists(string name)`

**Purpose:** Handles logic related to `prefab exists`.

### RemoveScriptComponent
`public void RemoveScriptComponent(UIntPtr scriptComponent, int removeReason)`

**Purpose:** Removes `script component` from the current collection or state.

### SetEntityEnvMapVisibility
`public void SetEntityEnvMapVisibility(bool value)`

**Purpose:** Sets the value or state of `entity env map visibility`.

### HasScene
`public bool HasScene()`

**Purpose:** Checks whether the current object has/contains `scene`.

### HasScriptComponent
`public bool HasScriptComponent(string scName)`

**Purpose:** Checks whether the current object has/contains `script component`.

### GetScriptComponents
`public IEnumerable<ScriptComponentBehavior> GetScriptComponents()`

**Purpose:** Gets the current value of `script components`.

### GetFirstChildEntityWithTag
`public GameEntity GetFirstChildEntityWithTag(string tag)`

**Purpose:** Gets the current value of `first child entity with tag`.

### HasScriptOfType
`public bool HasScriptOfType(Type t)`

**Purpose:** Checks whether the current object has/contains `script of type`.

### SetAlpha
`public void SetAlpha(float alpha)`

**Purpose:** Sets the value or state of `alpha`.

### SetVisibilityExcludeParents
`public void SetVisibilityExcludeParents(bool visible)`

**Purpose:** Sets the value or state of `visibility exclude parents`.

### SetReadyToRender
`public void SetReadyToRender(bool ready)`

**Purpose:** Sets the value or state of `ready to render`.

### GetVisibilityExcludeParents
`public bool GetVisibilityExcludeParents()`

**Purpose:** Gets the current value of `visibility exclude parents`.

### IsVisibleIncludeParents
`public bool IsVisibleIncludeParents()`

**Purpose:** Handles logic related to `is visible include parents`.

### GetVisibilityLevelMaskIncludingParents
`public uint GetVisibilityLevelMaskIncludingParents()`

**Purpose:** Gets the current value of `visibility level mask including parents`.

### GetEditModeLevelVisibility
`public bool GetEditModeLevelVisibility()`

**Purpose:** Gets the current value of `edit mode level visibility`.

### Remove
`public void Remove(int removeReason)`

**Purpose:** Removes `remove` from the current collection or state.

### CopyFromPrefab
`public static GameEntity CopyFromPrefab(GameEntity prefab)`

**Purpose:** Handles logic related to `copy from prefab`.

### CopyFromPrefab
`public static GameEntity CopyFromPrefab(WeakGameEntity prefab)`

**Purpose:** Handles logic related to `copy from prefab`.

### SetUpgradeLevelMask
`public void SetUpgradeLevelMask(GameEntity.UpgradeLevelMask mask)`

**Purpose:** Sets the value or state of `upgrade level mask`.

### GetUpgradeLevelMask
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMask()`

**Purpose:** Gets the current value of `upgrade level mask`.

### GetUpgradeLevelMaskCumulative
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMaskCumulative()`

**Purpose:** Gets the current value of `upgrade level mask cumulative`.

### GetUpgradeLevelOfEntity
`public int GetUpgradeLevelOfEntity()`

**Purpose:** Gets the current value of `upgrade level of entity`.

### GetOldPrefabName
`public string GetOldPrefabName()`

**Purpose:** Gets the current value of `old prefab name`.

### GetPrefabName
`public string GetPrefabName()`

**Purpose:** Gets the current value of `prefab name`.

### CopyScriptComponentFromAnotherEntity
`public void CopyScriptComponentFromAnotherEntity(GameEntity otherEntity, string scriptName)`

**Purpose:** Handles logic related to `copy script component from another entity`.

### SetFrame
`public void SetFrame(ref MatrixFrame frame, bool isTeleportation = true)`

**Purpose:** Sets the value or state of `frame`.

### SetLocalFrame
`public void SetLocalFrame(ref MatrixFrame frame, bool isTeleportation = true)`

**Purpose:** Sets the value or state of `local frame`.

### SetClothComponentKeepState
`public void SetClothComponentKeepState(MetaMesh metaMesh, bool state)`

**Purpose:** Sets the value or state of `cloth component keep state`.

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool state)`

**Purpose:** Sets the value or state of `cloth component keep state of all meshes`.

### SetPreviousFrameInvalid
`public void SetPreviousFrameInvalid()`

**Purpose:** Sets the value or state of `previous frame invalid`.

### GetFrame
`public MatrixFrame GetFrame()`

**Purpose:** Gets the current value of `frame`.

### GetLocalFrame
`public void GetLocalFrame(out MatrixFrame frame)`

**Purpose:** Gets the current value of `local frame`.

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**Purpose:** Gets the current value of `local frame`.

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame()`

**Purpose:** Gets the current value of `global frame`.

### GetGlobalFrameImpreciseForFixedTick
`public MatrixFrame GetGlobalFrameImpreciseForFixedTick()`

**Purpose:** Gets the current value of `global frame imprecise for fixed tick`.

### ComputePreciseGlobalFrameForFixedTickSlow
`public MatrixFrame ComputePreciseGlobalFrameForFixedTickSlow()`

**Purpose:** Handles logic related to `compute precise global frame for fixed tick slow`.

### SetGlobalFrame
`public void SetGlobalFrame(in MatrixFrame frame, bool isTeleportation = true)`

**Purpose:** Sets the value or state of `global frame`.

### GetPreviousGlobalFrame
`public MatrixFrame GetPreviousGlobalFrame()`

**Purpose:** Gets the current value of `previous global frame`.

### GetBodyWorldTransform
`public MatrixFrame GetBodyWorldTransform()`

**Purpose:** Gets the current value of `body world transform`.

### SetLocalPosition
`public void SetLocalPosition(Vec3 position)`

**Purpose:** Sets the value or state of `local position`.

### UpdateTriadFrameForEditor
`public void UpdateTriadFrameForEditor()`

**Purpose:** Updates the state or data of `triad frame for editor`.

### UpdateTriadFrameForEditorForAllChildren
`public void UpdateTriadFrameForEditorForAllChildren()`

**Purpose:** Updates the state or data of `triad frame for editor for all children`.

### GetPhysicsMaterial
`public PhysicsMaterial GetPhysicsMaterial()`

**Purpose:** Gets the current value of `physics material`.

### SetBodyFlags
`public void SetBodyFlags(BodyFlags bodyFlags)`

**Purpose:** Sets the value or state of `body flags`.

### SetBodyFlagsRecursive
`public void SetBodyFlagsRecursive(BodyFlags bodyFlags)`

**Purpose:** Sets the value or state of `body flags recursive`.

### AddBodyFlags
`public void AddBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)`

**Purpose:** Adds `body flags` to the current collection or state.

### RemoveBodyFlags
`public void RemoveBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)`

**Purpose:** Removes `body flags` from the current collection or state.

### GetGlobalScale
`public Vec3 GetGlobalScale()`

**Purpose:** Gets the current value of `global scale`.

### GetLocalScale
`public Vec3 GetLocalScale()`

**Purpose:** Gets the current value of `local scale`.

### SetAnimationSoundActivation
`public void SetAnimationSoundActivation(bool activate)`

**Purpose:** Sets the value or state of `animation sound activation`.

### CopyComponentsToSkeleton
`public void CopyComponentsToSkeleton()`

**Purpose:** Handles logic related to `copy components to skeleton`.

### AddMeshToBone
`public void AddMeshToBone(sbyte boneIndex, Mesh mesh)`

**Purpose:** Adds `mesh to bone` to the current collection or state.

### ActivateRagdoll
`public void ActivateRagdoll()`

**Purpose:** Handles logic related to `activate ragdoll`.

### PauseSkeletonAnimation
`public void PauseSkeletonAnimation()`

**Purpose:** Handles logic related to `pause skeleton animation`.

### ResumeSkeletonAnimation
`public void ResumeSkeletonAnimation()`

**Purpose:** Handles logic related to `resume skeleton animation`.

### IsSkeletonAnimationPaused
`public bool IsSkeletonAnimationPaused()`

**Purpose:** Handles logic related to `is skeleton animation paused`.

### GetBoneCount
`public sbyte GetBoneCount()`

**Purpose:** Gets the current value of `bone count`.

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)`

**Purpose:** Gets the current value of `water level at position`.

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)`

**Purpose:** Gets the current value of `bone entitial frame with index`.

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName)`

**Purpose:** Gets the current value of `bone entitial frame with name`.

### AddTag
`public void AddTag(string tag)`

**Purpose:** Adds `tag` to the current collection or state.

### RemoveTag
`public void RemoveTag(string tag)`

**Purpose:** Removes `tag` from the current collection or state.

### HasTag
`public bool HasTag(string tag)`

**Purpose:** Checks whether the current object has/contains `tag`.

### AddChild
`public void AddChild(GameEntity gameEntity, bool autoLocalizeFrame = false)`

**Purpose:** Adds `child` to the current collection or state.

### RemoveChild
`public void RemoveChild(GameEntity childEntity, bool keepPhysics, bool keepScenePointer, bool callScriptCallbacks, int removeReason)`

**Purpose:** Removes `child` from the current collection or state.

### BreakPrefab
`public void BreakPrefab()`

**Purpose:** Handles logic related to `break prefab`.

### GetChild
`public GameEntity GetChild(int index)`

**Purpose:** Gets the current value of `child`.

### HasComplexAnimTree
`public bool HasComplexAnimTree()`

**Purpose:** Checks whether the current object has/contains `complex anim tree`.

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh, bool updateVisMask = true)`

**Purpose:** Adds `multi mesh` to the current collection or state.

### RemoveMultiMesh
`public bool RemoveMultiMesh(MetaMesh metaMesh)`

**Purpose:** Removes `multi mesh` from the current collection or state.

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType)`

**Purpose:** Gets the current value of `component count`.

### AddAllMeshesOfGameEntity
`public void AddAllMeshesOfGameEntity(GameEntity gameEntity)`

**Purpose:** Adds `all meshes of game entity` to the current collection or state.

### SetFrameChanged
`public void SetFrameChanged()`

**Purpose:** Sets the value or state of `frame changed`.

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(int index, GameEntity.ComponentType componentType)`

**Purpose:** Gets the current value of `component at index`.

### GetMetaMesh
`public MetaMesh GetMetaMesh(int metaMeshIndex)`

**Purpose:** Gets the current value of `meta mesh`.

### GetClothSimulator
`public ClothSimulatorComponent GetClothSimulator(int clothSimulatorIndex)`

**Purpose:** Gets the current value of `cloth simulator`.

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Sets the value or state of `vector argument`.

### SetMaterialForAllMeshes
`public void SetMaterialForAllMeshes(Material material)`

**Purpose:** Sets the value or state of `material for all meshes`.

### AddLight
`public bool AddLight(Light light)`

**Purpose:** Adds `light` to the current collection or state.

### GetLight
`public Light GetLight()`

**Purpose:** Gets the current value of `light`.

### AddParticleSystemComponent
`public void AddParticleSystemComponent(string particleid)`

**Purpose:** Adds `particle system component` to the current collection or state.

### RemoveAllParticleSystems
`public void RemoveAllParticleSystems()`

**Purpose:** Removes `all particle systems` from the current collection or state.

### CheckPointWithOrientedBoundingBox
`public bool CheckPointWithOrientedBoundingBox(Vec3 point)`

**Purpose:** Handles logic related to `check point with oriented bounding box`.

### PauseParticleSystem
`public void PauseParticleSystem(bool doChildren)`

**Purpose:** Handles logic related to `pause particle system`.

### ResumeParticleSystem
`public void ResumeParticleSystem(bool doChildren)`

**Purpose:** Handles logic related to `resume particle system`.

### BurstEntityParticle
`public void BurstEntityParticle(bool doChildren)`

**Purpose:** Handles logic related to `burst entity particle`.

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float emissionRateMultiplier)`

**Purpose:** Sets the value or state of `runtime emission rate multiplier`.

### GetLocalBoundingBox
`public BoundingBox GetLocalBoundingBox()`

**Purpose:** Gets the current value of `local bounding box`.

### GetGlobalBoundingBox
`public BoundingBox GetGlobalBoundingBox()`

**Purpose:** Gets the current value of `global bounding box`.

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin()`

**Purpose:** Gets the current value of `bounding box min`.

### SetHasCustomBoundingBoxValidationSystem
`public void SetHasCustomBoundingBoxValidationSystem(bool hasCustomBoundingBox)`

**Purpose:** Sets the value or state of `has custom bounding box validation system`.

### ValidateBoundingBox
`public void ValidateBoundingBox()`

**Purpose:** Handles logic related to `validate bounding box`.

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax()`

**Purpose:** Gets the current value of `bounding box max`.

### UpdateGlobalBounds
`public void UpdateGlobalBounds()`

**Purpose:** Updates the state or data of `global bounds`.

### RecomputeBoundingBox
`public void RecomputeBoundingBox()`

**Purpose:** Handles logic related to `recompute bounding box`.

### GetBoundingBoxRadius
`public float GetBoundingBoxRadius()`

**Purpose:** Gets the current value of `bounding box radius`.

### SetBoundingboxDirty
`public void SetBoundingboxDirty()`

**Purpose:** Sets the value or state of `boundingbox dirty`.

### SetContourColor
`public void SetContourColor(uint? color, bool alwaysVisible = true)`

**Purpose:** Sets the value or state of `contour color`.

### GetPhysicsBoundingBoxMax
`public Vec3 GetPhysicsBoundingBoxMax()`

**Purpose:** Gets the current value of `physics bounding box max`.

### GetPhysicsBoundingBoxMin
`public Vec3 GetPhysicsBoundingBoxMin()`

**Purpose:** Gets the current value of `physics bounding box min`.

### GetHasFrameChanged
`public bool GetHasFrameChanged()`

**Purpose:** Gets the current value of `has frame changed`.

### GetFirstMesh
`public Mesh GetFirstMesh()`

**Purpose:** Gets the current value of `first mesh`.

### GetAttachedNavmeshFaceCount
`public int GetAttachedNavmeshFaceCount()`

**Purpose:** Gets the current value of `attached navmesh face count`.

### GetAttachedNavmeshFaceRecords
`public void GetAttachedNavmeshFaceRecords(PathFaceRecord faceRecords)`

**Purpose:** Gets the current value of `attached navmesh face records`.

### SetExternalReferencesUsage
`public void SetExternalReferencesUsage(bool value)`

**Purpose:** Sets the value or state of `external references usage`.

### SetMorphFrameOfComponents
`public void SetMorphFrameOfComponents(float value)`

**Purpose:** Sets the value or state of `morph frame of components`.

### AddEditDataUserToAllMeshes
`public void AddEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)`

**Purpose:** Adds `edit data user to all meshes` to the current collection or state.

### ReleaseEditDataUserToAllMeshes
`public void ReleaseEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)`

**Purpose:** Handles logic related to `release edit data user to all meshes`.

### GetCameraParamsFromCameraScript
`public void GetCameraParamsFromCameraScript(Camera cam, ref Vec3 dofParams)`

**Purpose:** Gets the current value of `camera params from camera script`.

### GetMeshBendedFrame
`public void GetMeshBendedFrame(MatrixFrame worldSpacePosition, ref MatrixFrame output)`

**Purpose:** Gets the current value of `mesh bended frame`.

### ComputeTrajectoryVolume
`public void ComputeTrajectoryVolume(float missileSpeed, float verticalAngleMaxInDegrees, float verticalAngleMinInDegrees, float horizontalAngleRangeInDegrees, float airFrictionConstant)`

**Purpose:** Handles logic related to `compute trajectory volume`.

### SetAnimTreeChannelParameterForceUpdate
`public void SetAnimTreeChannelParameterForceUpdate(float phase, int channelNo)`

**Purpose:** Sets the value or state of `anim tree channel parameter force update`.

### ChangeMetaMeshOrRemoveItIfNotExists
`public void ChangeMetaMeshOrRemoveItIfNotExists(MetaMesh entityMetaMesh, MetaMesh newMetaMesh)`

**Purpose:** Handles logic related to `change meta mesh or remove it if not exists`.

### SetUpdateValidtyOnFrameChangedOfFacesWithId
`public void SetUpdateValidtyOnFrameChangedOfFacesWithId(int faceGroupId, bool updateValidity)`

**Purpose:** Sets the value or state of `update validty on frame changed of faces with id`.

### AttachNavigationMeshFaces
`public void AttachNavigationMeshFaces(int faceGroupId, bool isConnected, bool isBlocker = false, bool autoLocalize = false, bool finalizeBlockerConvexHullComputation = false, bool updateEntityFrame = true)`

**Purpose:** Handles logic related to `attach navigation mesh faces`.

### DetachAllAttachedNavigationMeshFaces
`public void DetachAllAttachedNavigationMeshFaces()`

**Purpose:** Handles logic related to `detach all attached navigation mesh faces`.

### UpdateAttachedNavigationMeshFaces
`public void UpdateAttachedNavigationMeshFaces()`

**Purpose:** Updates the state or data of `attached navigation mesh faces`.

### RemoveSkeleton
`public void RemoveSkeleton()`

**Purpose:** Removes `skeleton` from the current collection or state.

### RemoveAllChildren
`public void RemoveAllChildren()`

**Purpose:** Removes `all children` from the current collection or state.

### GetChildren
`public IEnumerable<GameEntity> GetChildren()`

**Purpose:** Gets the current value of `children`.

### GetEntityAndChildren
`public IEnumerable<GameEntity> GetEntityAndChildren()`

**Purpose:** Gets the current value of `entity and children`.

### GetChildrenRecursive
`public void GetChildrenRecursive(ref List<GameEntity> children)`

**Purpose:** Gets the current value of `children recursive`.

### GetChildrenWithTagRecursive
`public void GetChildrenWithTagRecursive(List<GameEntity> children, string tag)`

**Purpose:** Gets the current value of `children with tag recursive`.

### IsSelectedOnEditor
`public bool IsSelectedOnEditor()`

**Purpose:** Handles logic related to `is selected on editor`.

### SelectEntityOnEditor
`public void SelectEntityOnEditor()`

**Purpose:** Handles logic related to `select entity on editor`.

### DeselectEntityOnEditor
`public void DeselectEntityOnEditor()`

**Purpose:** Handles logic related to `deselect entity on editor`.

### SetAsPredisplayEntity
`public void SetAsPredisplayEntity()`

**Purpose:** Sets the value or state of `as predisplay entity`.

### RemoveFromPredisplayEntity
`public void RemoveFromPredisplayEntity()`

**Purpose:** Removes `from predisplay entity` from the current collection or state.

### SetNativeScriptComponentVariable
`public void SetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)`

**Purpose:** Sets the value or state of `native script component variable`.

### SetManualGlobalBoundingBox
`public void SetManualGlobalBoundingBox(Vec3 boundingBoxStartGlobal, Vec3 boundingBoxEndGlobal)`

**Purpose:** Sets the value or state of `manual global bounding box`.

### RayHitEntity
`public bool RayHitEntity(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref float resultLength)`

**Purpose:** Handles logic related to `ray hit entity`.

### RayHitEntityWithNormal
`public bool RayHitEntityWithNormal(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref Vec3 resultNormal, ref float resultLength)`

**Purpose:** Handles logic related to `ray hit entity with normal`.

### GetNativeScriptComponentVariable
`public void GetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)`

**Purpose:** Gets the current value of `native script component variable`.

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPosition, Vec3 clipNormal)`

**Purpose:** Sets the value or state of `custom clip plane`.

### GetBoundingBoxLongestHalfDimension
`public float GetBoundingBoxLongestHalfDimension()`

**Purpose:** Gets the current value of `bounding box longest half dimension`.

### ComputeBoundingBoxFromLongestHalfDimension
`public BoundingBox ComputeBoundingBoxFromLongestHalfDimension(float longestHalfDimensionCoefficient)`

**Purpose:** Handles logic related to `compute bounding box from longest half dimension`.

### ComputeBoundingBoxIncludeChildren
`public BoundingBox ComputeBoundingBoxIncludeChildren()`

**Purpose:** Handles logic related to `compute bounding box include children`.

### SetManualLocalBoundingBox
`public void SetManualLocalBoundingBox(in BoundingBox boundingBox)`

**Purpose:** Sets the value or state of `manual local bounding box`.

### RelaxLocalBoundingBox
`public void RelaxLocalBoundingBox(in BoundingBox boundingBox)`

**Purpose:** Handles logic related to `relax local bounding box`.

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode)`

**Purpose:** Sets the value or state of `cull mode`.

### GetFirstChildEntityWithTagRecursive
`public GameEntity GetFirstChildEntityWithTagRecursive(string tag)`

**Purpose:** Gets the current value of `first child entity with tag recursive`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### SetDoNotCheckVisibility
`public void SetDoNotCheckVisibility(bool value)`

**Purpose:** Sets the value or state of `do not check visibility`.

### SetBoneFrameToAllMeshes
`public void SetBoneFrameToAllMeshes(int boneIndex, in MatrixFrame frame)`

**Purpose:** Sets the value or state of `bone frame to all meshes`.

### GetGlobalWindStrengthVectorOfScene
`public Vec2 GetGlobalWindStrengthVectorOfScene()`

**Purpose:** Gets the current value of `global wind strength vector of scene`.

### GetGlobalWindVelocityOfScene
`public Vec2 GetGlobalWindVelocityOfScene()`

**Purpose:** Gets the current value of `global wind velocity of scene`.

### GetLastFinalRenderCameraPositionOfScene
`public Vec3 GetLastFinalRenderCameraPositionOfScene()`

**Purpose:** Gets the current value of `last final render camera position of scene`.

### SetForceDecalsToRender
`public void SetForceDecalsToRender(bool value)`

**Purpose:** Sets the value or state of `force decals to render`.

### SetForceNotAffectedBySeason
`public void SetForceNotAffectedBySeason(bool value)`

**Purpose:** Sets the value or state of `force not affected by season`.

## Usage Example

```csharp
GameEntity.CreateFromWeakEntity(weakEntity);
```

## See Also

- [Complete Class Catalog](../catalog)