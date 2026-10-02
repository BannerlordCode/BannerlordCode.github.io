---
title: "WeakGameEntity"
description: "WeakGameEntity：TaleWorlds.Engine 的 public 结构体；公开成员 244 个（方法 223、属性 20、字段 1）。canonical 桶 engine。源文件 TaleWorlds.Engine/WeakGameEntity.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WeakGameEntity

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct WeakGameEntity`
**File:** `TaleWorlds.Engine/WeakGameEntity.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

WeakGameEntity 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/WeakGameEntity.cs。它是一个 public 结构体，继承链为 WeakGameEntity。public/protected 成员共 244 个：223 方法、20 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeakGameEntity 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 WeakGameEntity。成员构成以方法为主（方法 223/244，属性 20/244），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/WeakGameEntity.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Pointer` | `public UIntPtr Pointer` | 属性 |
| `IsValid` | `public bool IsValid` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Scene` | `public Scene Scene` | 属性 |
| `EntityFlags` | `public EntityFlags EntityFlags` | 属性 |
| `EntityVisibilityFlags` | `public EntityVisibilityFlags EntityVisibilityFlags` | 属性 |
| `BodyFlag` | `public BodyFlags BodyFlag` | 属性 |
| `PhysicsDescBodyFlag` | `public BodyFlags PhysicsDescBodyFlag` | 属性 |
| `Mass` | `public float Mass` | 属性 |
| `CenterOfMass` | `public Vec3 CenterOfMass` | 属性 |
| `Invalidate` | `public void Invalidate()` | 方法 |
| `GetScenePointer` | `public UIntPtr GetScenePointer()` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `ClearEntityComponents` | `public void ClearEntityComponents(bool resetAll, bool removeScripts, bool deleteChildEntities)` | 方法 |
| `ClearComponents` | `public void ClearComponents()` | 方法 |
| `ClearOnlyOwnComponents` | `public void ClearOnlyOwnComponents()` | 方法 |
| `CheckResources` | `public bool CheckResources(bool addToQueue, bool checkFaceResources)` | 方法 |
| `SetMobility` | `public void SetMobility(GameEntity.Mobility mobility)` | 方法 |
| `GetMobility` | `public GameEntity.Mobility GetMobility()` | 方法 |
| `AddMesh` | `public void AddMesh(Mesh mesh, bool recomputeBoundingBox = true)` | 方法 |
| `AddMultiMeshToSkeleton` | `public void AddMultiMeshToSkeleton(MetaMesh metaMesh)` | 方法 |
| `AddMultiMeshToSkeletonBone` | `public void AddMultiMeshToSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)` | 方法 |
| `SetColorToAllMeshesWithTagRecursive` | `public void SetColorToAllMeshesWithTagRecursive(uint color, string tag)` | 方法 |
| `IEnumerable` | `public IEnumerable<Mesh>GetAllMeshesWithTag(string tag)` | 方法 |
| `SetName` | `public void SetName(string name)` | 方法 |
| `SetEntityFlags` | `public void SetEntityFlags(EntityFlags flags)` | 方法 |
| `SetEntityVisibilityFlags` | `public void SetEntityVisibilityFlags(EntityVisibilityFlags flags)` | 方法 |
| `GetPhysicsMaterial` | `public PhysicsMaterial GetPhysicsMaterial()` | 方法 |
| `SetBodyFlags` | `public void SetBodyFlags(BodyFlags flags)` | 方法 |
| `SetBodyFlagsRecursive` | `public void SetBodyFlagsRecursive(BodyFlags bodyFlags)` | 方法 |
| `AddBodyFlags` | `public void AddBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)` | 方法 |
| `RemoveBodyFlags` | `public void RemoveBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)` | 方法 |
| `SetLocalPosition` | `public void SetLocalPosition(Vec3 position)` | 方法 |
| `SetGlobalPosition` | `public void SetGlobalPosition(Vec3 position)` | 方法 |
| `SetColor` | `public void SetColor(uint color1, uint color2, string meshTag)` | 方法 |
| `GetFactorColor` | `public uint GetFactorColor()` | 方法 |
| `SetFactorColor` | `public void SetFactorColor(uint color)` | 方法 |
| `SetAsReplayEntity` | `public void SetAsReplayEntity()` | 方法 |
| `SetClothMaxDistanceMultiplier` | `public void SetClothMaxDistanceMultiplier(float multiplier)` | 方法 |
| `RemoveMultiMeshFromSkeleton` | `public void RemoveMultiMeshFromSkeleton(MetaMesh metaMesh)` | 方法 |
| `RemoveMultiMeshFromSkeletonBone` | `public void RemoveMultiMeshFromSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)` | 方法 |
| `RemoveComponentWithMesh` | `public bool RemoveComponentWithMesh(Mesh mesh)` | 方法 |
| `AddComponent` | `public void AddComponent(GameEntityComponent component)` | 方法 |
| `HasComponent` | `public bool HasComponent(GameEntityComponent component)` | 方法 |
| `IsInEditorScene` | `public bool IsInEditorScene()` | 方法 |
| `RemoveComponent` | `public bool RemoveComponent(GameEntityComponent component)` | 方法 |
| `GetGuid` | `public string GetGuid()` | 方法 |
| `IsGuidValid` | `public bool IsGuidValid()` | 方法 |
| `SetEnforcedMaximumLodLevel` | `public void SetEnforcedMaximumLodLevel(int lodLevel)` | 方法 |
| `GetLodLevelForDistanceSq` | `public float GetLodLevelForDistanceSq(float distSq)` | 方法 |
| `GetQuickBoneEntitialFrame` | `public void GetQuickBoneEntitialFrame(sbyte index, out MatrixFrame frame)` | 方法 |
| `UpdateVisibilityMask` | `public void UpdateVisibilityMask()` | 方法 |
| `CallScriptCallbacks` | `public void CallScriptCallbacks(bool registerScriptComponents)` | 方法 |
| `GetScriptCount` | `public int GetScriptCount()` | 方法 |
| `IsGhostObject` | `public bool IsGhostObject()` | 方法 |
| `CreateAndAddScriptComponent` | `public void CreateAndAddScriptComponent(string name, bool callScriptCallbacks)` | 方法 |
| `RemoveScriptComponent` | `public void RemoveScriptComponent(UIntPtr scriptComponent, int removeReason)` | 方法 |
| `SetEntityEnvMapVisibility` | `public void SetEntityEnvMapVisibility(bool value)` | 方法 |
| `GetScriptAtIndex` | `public ScriptComponentBehavior GetScriptAtIndex(int index)` | 方法 |
| `HasScene` | `public bool HasScene()` | 方法 |
| `HasScriptComponent` | `public bool HasScriptComponent(string scName)` | 方法 |
| `HasScriptComponent` | `public bool HasScriptComponent(uint scNameHash)` | 方法 |
| `IEnumerable` | `public IEnumerable<ScriptComponentBehavior>GetScriptComponents()` | 方法 |
| `IEnumerable` | `public IEnumerable<T>GetScriptComponents<T>() where T : ScriptComponentBehavior` | 方法 |
| `HasScriptOfType` | `public bool HasScriptOfType<T>() where T : ScriptComponentBehavior` | 方法 |
| `HasScriptWithInterfaceOfType` | `public bool HasScriptWithInterfaceOfType<T>()` | 方法 |
| `GetFirstScriptOfTypeInFamily` | `public T GetFirstScriptOfTypeInFamily<T>() where T : ScriptComponentBehavior` | 方法 |
| `GetFirstScriptWithNameHash` | `public ScriptComponentBehavior GetFirstScriptWithNameHash(uint nameHash)` | 方法 |
| `GetFirstScriptOfType` | `public T GetFirstScriptOfType<T>() where T : ScriptComponentBehavior` | 方法 |
| `GetFirstScriptWithInterfaceOfType` | `public T GetFirstScriptWithInterfaceOfType<T>() where T : class` | 方法 |
| `GetFirstScriptOfTypeRecursive` | `public T GetFirstScriptOfTypeRecursive<T>() where T : ScriptComponentBehavior` | 方法 |
| `GetFirstChildEntityWithTag` | `public WeakGameEntity GetFirstChildEntityWithTag(string tag)` | 方法 |
| `GetScriptCountOfType` | `public int GetScriptCountOfType<T>() where T : ScriptComponentBehavior` | 方法 |
| `GetScriptCountOfTypeRecursive` | `public int GetScriptCountOfTypeRecursive<T>() where T : ScriptComponentBehavior` | 方法 |
| `SetAlpha` | `public void SetAlpha(float alpha)` | 方法 |
| `SetVisibilityExcludeParents` | `public void SetVisibilityExcludeParents(bool visible)` | 方法 |
| `SetReadyToRender` | `public void SetReadyToRender(bool ready)` | 方法 |
| `GetVisibilityExcludeParents` | `public bool GetVisibilityExcludeParents()` | 方法 |
| `IsVisibleIncludeParents` | `public bool IsVisibleIncludeParents()` | 方法 |
| `GetVisibilityLevelMaskIncludingParents` | `public uint GetVisibilityLevelMaskIncludingParents()` | 方法 |
| `GetEditModeLevelVisibility` | `public bool GetEditModeLevelVisibility()` | 方法 |
| `Remove` | `public void Remove(int removeReason)` | 方法 |
| `SetUpgradeLevelMask` | `public void SetUpgradeLevelMask(GameEntity.UpgradeLevelMask mask)` | 方法 |
| `GetUpgradeLevelMask` | `public GameEntity.UpgradeLevelMask GetUpgradeLevelMask()` | 方法 |
| `GetUpgradeLevelMaskCumulative` | `public GameEntity.UpgradeLevelMask GetUpgradeLevelMaskCumulative()` | 方法 |
| `GetUpgradeLevelOfEntity` | `public int GetUpgradeLevelOfEntity()` | 方法 |
| `GetOldPrefabName` | `public string GetOldPrefabName()` | 方法 |
| `GetPrefabName` | `public string GetPrefabName()` | 方法 |
| `RefreshMeshesToRenderToHullWater` | `public void RefreshMeshesToRenderToHullWater(UIntPtr visualRecord, string entityTag)` | 方法 |
| `DeRegisterWaterMeshMaterials` | `public void DeRegisterWaterMeshMaterials(UIntPtr visualRecord)` | 方法 |
| `SetVisualRecordWakeParams` | `public void SetVisualRecordWakeParams(UIntPtr visualRecord, Vec3 wakeParams)` | 方法 |
| `ChangeResolutionMultiplierOfWaterVisual` | `public void ChangeResolutionMultiplierOfWaterVisual(UIntPtr visualRecord, float multiplier, in Vec3 waterEffectsBB)` | 方法 |
| `ResetHullWater` | `public void ResetHullWater(UIntPtr visualRecord)` | 方法 |
| `SetWaterVisualRecordFrameAndDt` | `public void SetWaterVisualRecordFrameAndDt(UIntPtr visualRecord, MatrixFrame frame, float dt)` | 方法 |
| `AddSplashPositionToWaterVisualRecord` | `public void AddSplashPositionToWaterVisualRecord(UIntPtr visualRecord, Vec3 position)` | 方法 |
| `UpdateHullWaterEffectFrames` | `public void UpdateHullWaterEffectFrames(UIntPtr visualRecord)` | 方法 |
| `CopyScriptComponentFromAnotherEntity` | `public void CopyScriptComponentFromAnotherEntity(GameEntity otherEntity, string scriptName)` | 方法 |
| `SetFrame` | `public void SetFrame(ref MatrixFrame frame, bool isTeleportation = true)` | 方法 |
| `SetLocalFrame` | `public void SetLocalFrame(ref MatrixFrame frame, bool isTeleportation)` | 方法 |
| `SetClothComponentKeepState` | `public void SetClothComponentKeepState(MetaMesh metaMesh, bool state)` | 方法 |
| `SetClothComponentKeepStateOfAllMeshes` | `public void SetClothComponentKeepStateOfAllMeshes(bool state)` | 方法 |
| `SetPreviousFrameInvalid` | `public void SetPreviousFrameInvalid()` | 方法 |
| `GetFrame` | `public MatrixFrame GetFrame()` | 方法 |
| `GetLocalFrame` | `public void GetLocalFrame(out MatrixFrame frame)` | 方法 |
| `HasBatchedKinematicPhysicsFlag` | `public bool HasBatchedKinematicPhysicsFlag()` | 方法 |
| `HasBatchedRayCastPhysicsFlag` | `public bool HasBatchedRayCastPhysicsFlag()` | 方法 |
| `GetLocalFrame` | `public MatrixFrame GetLocalFrame()` | 方法 |
| `GetGlobalFrame` | `public MatrixFrame GetGlobalFrame()` | 方法 |
| `SetWaterSDFClipData` | `public void SetWaterSDFClipData(int slotIndex, in MatrixFrame frame, bool visibility)` | 方法 |
| `RegisterWaterSDFClip` | `public int RegisterWaterSDFClip(Texture sdfTexture)` | 方法 |
| `DeRegisterWaterSDFClip` | `public void DeRegisterWaterSDFClip(int slot)` | 方法 |
| `GetGlobalFrameImpreciseForFixedTick` | `public MatrixFrame GetGlobalFrameImpreciseForFixedTick()` | 方法 |
| `ComputePreciseGlobalFrameForFixedTickSlow` | `public MatrixFrame ComputePreciseGlobalFrameForFixedTickSlow()` | 方法 |
| `SetGlobalFrame` | `public void SetGlobalFrame(in MatrixFrame frame, bool isTeleportation = true)` | 方法 |
| `GetPreviousGlobalFrame` | `public MatrixFrame GetPreviousGlobalFrame()` | 方法 |
| `GetBodyWorldTransform` | `public MatrixFrame GetBodyWorldTransform()` | 方法 |
| `GetBodyVisualWorldTransform` | `public MatrixFrame GetBodyVisualWorldTransform()` | 方法 |
| `UpdateTriadFrameForEditor` | `public void UpdateTriadFrameForEditor()` | 方法 |
| `UpdateTriadFrameForEditorForAllChildren` | `public void UpdateTriadFrameForEditorForAllChildren()` | 方法 |
| `GetGlobalScale` | `public Vec3 GetGlobalScale()` | 方法 |
| `GetLocalScale` | `public Vec3 GetLocalScale()` | 方法 |
| `GlobalPosition` | `public Vec3 GlobalPosition` | 属性 |
| `SetAnimationSoundActivation` | `public void SetAnimationSoundActivation(bool activate)` | 方法 |
| `CopyComponentsToSkeleton` | `public void CopyComponentsToSkeleton()` | 方法 |
| `AddMeshToBone` | `public void AddMeshToBone(sbyte boneIndex, Mesh mesh)` | 方法 |
| `ActivateRagdoll` | `public void ActivateRagdoll()` | 方法 |
| `PauseSkeletonAnimation` | `public void PauseSkeletonAnimation()` | 方法 |
| `ResumeSkeletonAnimation` | `public void ResumeSkeletonAnimation()` | 方法 |
| `IsSkeletonAnimationPaused` | `public bool IsSkeletonAnimationPaused()` | 方法 |
| `GetBoneCount` | `public sbyte GetBoneCount()` | 方法 |
| `GetWaterLevelAtPosition` | `public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)` | 方法 |
| `GetBoneEntitialFrameWithIndex` | `public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)` | 方法 |
| `GetBoneEntitialFrameWithName` | `public MatrixFrame GetBoneEntitialFrameWithName(string boneName)` | 方法 |
| `string[]Tags` | `public string[]Tags` | 属性 |
| `AddTag` | `public void AddTag(string tag)` | 方法 |
| `RemoveTag` | `public void RemoveTag(string tag)` | 方法 |
| `HasTag` | `public bool HasTag(string tag)` | 方法 |
| `AddChild` | `public void AddChild(WeakGameEntity gameEntity, bool autoLocalizeFrame = false)` | 方法 |
| `RemoveChild` | `public void RemoveChild(WeakGameEntity childEntity, bool keepPhysics, bool keepScenePointer, bool callScriptCallbacks, int removeReason)` | 方法 |
| `BreakPrefab` | `public void BreakPrefab()` | 方法 |
| `ChildCount` | `public int ChildCount` | 属性 |
| `GetChild` | `public WeakGameEntity GetChild(int index)` | 方法 |
| `Parent` | `public WeakGameEntity Parent` | 属性 |
| `HasComplexAnimTree` | `public bool HasComplexAnimTree()` | 方法 |
| `Root` | `public WeakGameEntity Root` | 属性 |
| `AddMultiMesh` | `public void AddMultiMesh(MetaMesh metaMesh, bool updateVisMask = true)` | 方法 |
| `RemoveMultiMesh` | `public bool RemoveMultiMesh(MetaMesh metaMesh)` | 方法 |
| `MultiMeshComponentCount` | `public int MultiMeshComponentCount` | 属性 |
| `ClothSimulatorComponentCount` | `public int ClothSimulatorComponentCount` | 属性 |
| `GetComponentCount` | `public int GetComponentCount(GameEntity.ComponentType componentType)` | 方法 |
| `AddAllMeshesOfGameEntity` | `public void AddAllMeshesOfGameEntity(GameEntity gameEntity)` | 方法 |
| `SetFrameChanged` | `public void SetFrameChanged()` | 方法 |
| `GetComponentAtIndex` | `public GameEntityComponent GetComponentAtIndex(int index, GameEntity.ComponentType componentType)` | 方法 |
| `GetMetaMesh` | `public MetaMesh GetMetaMesh(int metaMeshIndex)` | 方法 |
| `GetClothSimulator` | `public ClothSimulatorComponent GetClothSimulator(int clothSimulatorIndex)` | 方法 |
| `SetVectorArgument` | `public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | 方法 |
| `SetMaterialForAllMeshes` | `public void SetMaterialForAllMeshes(Material material)` | 方法 |
| `AddLight` | `public bool AddLight(Light light)` | 方法 |
| `GetLight` | `public Light GetLight()` | 方法 |
| `AddParticleSystemComponent` | `public void AddParticleSystemComponent(string particleid)` | 方法 |
| `RemoveAllParticleSystems` | `public void RemoveAllParticleSystems()` | 方法 |
| `CheckPointWithOrientedBoundingBox` | `public bool CheckPointWithOrientedBoundingBox(Vec3 point)` | 方法 |
| `PauseParticleSystem` | `public void PauseParticleSystem(bool doChildren)` | 方法 |
| `ResumeParticleSystem` | `public void ResumeParticleSystem(bool doChildren)` | 方法 |
| `BurstEntityParticle` | `public void BurstEntityParticle(bool doChildren)` | 方法 |
| `SetRuntimeEmissionRateMultiplier` | `public void SetRuntimeEmissionRateMultiplier(float emissionRateMultiplier)` | 方法 |
| `GetLocalBoundingBox` | `public BoundingBox GetLocalBoundingBox()` | 方法 |
| `GetGlobalBoundingBox` | `public BoundingBox GetGlobalBoundingBox()` | 方法 |
| `GetBoundingBoxMin` | `public Vec3 GetBoundingBoxMin()` | 方法 |
| `SetHasCustomBoundingBoxValidationSystem` | `public void SetHasCustomBoundingBoxValidationSystem(bool hasCustomBoundingBox)` | 方法 |
| `ValidateBoundingBox` | `public void ValidateBoundingBox()` | 方法 |
| `GetBoundingBoxMax` | `public Vec3 GetBoundingBoxMax()` | 方法 |
| `UpdateGlobalBounds` | `public void UpdateGlobalBounds()` | 方法 |
| `RecomputeBoundingBox` | `public void RecomputeBoundingBox()` | 方法 |
| `GetBoundingBoxRadius` | `public float GetBoundingBoxRadius()` | 方法 |
| `SetBoundingboxDirty` | `public void SetBoundingboxDirty()` | 方法 |
| `GlobalBoxMax` | `public Vec3 GlobalBoxMax` | 属性 |
| `Vec3>ComputeGlobalPhysicsBoundingBoxMinMax` | `public ValueTuple<Vec3, Vec3>ComputeGlobalPhysicsBoundingBoxMinMax()` | 方法 |
| `ComputeGlobalPhysicsBoundingBoxCenter` | `public Vec3 ComputeGlobalPhysicsBoundingBoxCenter()` | 方法 |
| `SetContourColor` | `public void SetContourColor(uint? color, bool alwaysVisible = true)` | 方法 |
| `GlobalBoxMin` | `public Vec3 GlobalBoxMin` | 属性 |
| `GetHasFrameChanged` | `public bool GetHasFrameChanged()` | 方法 |
| `GetFirstMesh` | `public Mesh GetFirstMesh()` | 方法 |
| `GetAttachedNavmeshFaceCount` | `public int GetAttachedNavmeshFaceCount()` | 方法 |
| `GetAttachedNavmeshFaceRecords` | `public void GetAttachedNavmeshFaceRecords(PathFaceRecord[]faceRecords)` | 方法 |
| `GetAttachedNavmeshFaceVertexIndices` | `public void GetAttachedNavmeshFaceVertexIndices(in PathFaceRecord faceRecord, int[]indices)` | 方法 |
| `SetCustomVertexPositionEnabled` | `public void SetCustomVertexPositionEnabled(bool customVertexPositionEnabled)` | 方法 |
| `SetPositionsForAttachedNavmeshVertices` | `public void SetPositionsForAttachedNavmeshVertices(int[]vertices, int indexCount, Vec3[]positions)` | 方法 |
| `SetCostAdderForAttachedFaces` | `public void SetCostAdderForAttachedFaces(float costs)` | 方法 |
| `SetExternalReferencesUsage` | `public void SetExternalReferencesUsage(bool value)` | 方法 |
| `SetMorphFrameOfComponents` | `public void SetMorphFrameOfComponents(float value)` | 方法 |
| `AddEditDataUserToAllMeshes` | `public void AddEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)` | 方法 |
| `ReleaseEditDataUserToAllMeshes` | `public void ReleaseEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)` | 方法 |
| `GetCameraParamsFromCameraScript` | `public void GetCameraParamsFromCameraScript(Camera cam, ref Vec3 dofParams)` | 方法 |
| `GetMeshBendedFrame` | `public void GetMeshBendedFrame(MatrixFrame worldSpacePosition, ref MatrixFrame output)` | 方法 |
| `ComputeTrajectoryVolume` | `public void ComputeTrajectoryVolume(float missileSpeed, float verticalAngleMaxInDegrees, float verticalAngleMinInDegrees, float horizontalAngleRangeInDegrees, float airFrictionConstant)` | 方法 |
| `SetAnimTreeChannelParameterForceUpdate` | `public void SetAnimTreeChannelParameterForceUpdate(float phase, int channelNo)` | 方法 |
| `ChangeMetaMeshOrRemoveItIfNotExists` | `public void ChangeMetaMeshOrRemoveItIfNotExists(MetaMesh entityMetaMesh, MetaMesh newMetaMesh)` | 方法 |
| `SetUpdateValidtyOnFrameChangedOfFacesWithId` | `public void SetUpdateValidtyOnFrameChangedOfFacesWithId(int faceGroupId, bool updateValidity)` | 方法 |
| `AttachNavigationMeshFaces` | `public void AttachNavigationMeshFaces(int faceGroupId, bool isConnected, bool isBlocker = false, bool autoLocalize = false, bool finalizeBlockerConvexHullComputation = false, bool updateEntityFrame = true)` | 方法 |
| `DetachAllAttachedNavigationMeshFaces` | `public void DetachAllAttachedNavigationMeshFaces()` | 方法 |
| `UpdateAttachedNavigationMeshFaces` | `public void UpdateAttachedNavigationMeshFaces()` | 方法 |
| `RemoveSkeleton` | `public void RemoveSkeleton()` | 方法 |
| `Skeleton` | `public Skeleton Skeleton` | 属性 |
| `RemoveAllChildren` | `public void RemoveAllChildren()` | 方法 |
| `IEnumerable` | `public IEnumerable<WeakGameEntity>GetChildren()` | 方法 |
| `IEnumerable` | `public IEnumerable<WeakGameEntity>GetEntityAndChildren()` | 方法 |
| `GetChildrenRecursive` | `public void GetChildrenRecursive(ref List<WeakGameEntity>children)` | 方法 |
| `GetChildrenWithTagRecursive` | `public void GetChildrenWithTagRecursive(List<WeakGameEntity>children, string tag)` | 方法 |
| `IsSelectedOnEditor` | `public bool IsSelectedOnEditor()` | 方法 |
| `SelectEntityOnEditor` | `public void SelectEntityOnEditor()` | 方法 |
| `DeselectEntityOnEditor` | `public void DeselectEntityOnEditor()` | 方法 |
| `SetAsPredisplayEntity` | `public void SetAsPredisplayEntity()` | 方法 |
| `RemoveFromPredisplayEntity` | `public void RemoveFromPredisplayEntity()` | 方法 |
| `SetNativeScriptComponentVariable` | `public void SetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)` | 方法 |
| `SetManualGlobalBoundingBox` | `public void SetManualGlobalBoundingBox(Vec3 boundingBoxStartGlobal, Vec3 boundingBoxEndGlobal)` | 方法 |
| `RayHitEntityWithNormal` | `public bool RayHitEntityWithNormal(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref Vec3 resultNormal, ref float resultLength)` | 方法 |
| `RayHitEntity` | `public bool RayHitEntity(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref float resultLength)` | 方法 |
| `GetNativeScriptComponentVariable` | `public void GetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)` | 方法 |
| `SetCustomClipPlane` | `public void SetCustomClipPlane(Vec3 clipPosition, Vec3 clipNormal, bool setForChildren)` | 方法 |
| `GetBoundingBoxLongestHalfDimension` | `public float GetBoundingBoxLongestHalfDimension()` | 方法 |
| `ComputeBoundingBoxFromLongestHalfDimension` | `public BoundingBox ComputeBoundingBoxFromLongestHalfDimension(float longestHalfDimensionCoefficient)` | 方法 |
| `ComputeBoundingBoxIncludeChildren` | `public BoundingBox ComputeBoundingBoxIncludeChildren()` | 方法 |
| `SetManualLocalBoundingBox` | `public void SetManualLocalBoundingBox(in BoundingBox boundingBox)` | 方法 |
| `RelaxLocalBoundingBox` | `public void RelaxLocalBoundingBox(in BoundingBox boundingBox)` | 方法 |
| `SetCullMode` | `public void SetCullMode(MBMeshCullingMode cullMode)` | 方法 |
| `GetFirstChildEntityWithTagRecursive` | `public WeakGameEntity GetFirstChildEntityWithTagRecursive(string tag)` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `List` | `public List<WeakGameEntity>CollectChildrenEntitiesWithTag(string tag)` | 方法 |
| `IEnumerable` | `public IEnumerable<WeakGameEntity>CollectChildrenEntitiesWithTagAsEnumarable(string tag)` | 方法 |
| `SetDoNotCheckVisibility` | `public void SetDoNotCheckVisibility(bool value)` | 方法 |
| `SetBoneFrameToAllMeshes` | `public void SetBoneFrameToAllMeshes(int boneIndex, in MatrixFrame frame)` | 方法 |
| `GetGlobalWindStrengthVectorOfScene` | `public Vec2 GetGlobalWindStrengthVectorOfScene()` | 方法 |
| `GetGlobalWindVelocityOfScene` | `public Vec2 GetGlobalWindVelocityOfScene()` | 方法 |
| `GetLastFinalRenderCameraPositionOfScene` | `public Vec3 GetLastFinalRenderCameraPositionOfScene()` | 方法 |
| `GetGlobalWindVelocityWithGustNoiseOfScene` | `public Vec2 GetGlobalWindVelocityWithGustNoiseOfScene(float globalTime)` | 方法 |
| `SetForceDecalsToRender` | `public void SetForceDecalsToRender(bool value)` | 方法 |
| `CreateEmptyPhysxShape` | `public UIntPtr CreateEmptyPhysxShape(bool isVariable, int physxMaterialIndex)` | 方法 |
| `SetForceNotAffectedBySeason` | `public void SetForceNotAffectedBySeason(bool value)` | 方法 |
| `CheckIsPrefabLinkRootPrefab` | `public bool CheckIsPrefabLinkRootPrefab(int depth)` | 方法 |
| `Invalid` | `public static readonly WeakGameEntity Invalid` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
