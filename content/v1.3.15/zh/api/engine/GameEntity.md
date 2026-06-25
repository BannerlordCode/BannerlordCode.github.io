---
title: "GameEntity"
description: "GameEntity 的自动生成类参考。"
---
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
| `GlobalBoxMin` | `public Vec3 GlobalBoxMin { get; }` |
| `Skeleton` | `public Skeleton Skeleton { get; set; }` |

## 主要方法

### CreateFromWeakEntity
`public static GameEntity CreateFromWeakEntity(WeakGameEntity weakEntity)`

**用途 / Purpose:** 构建一个新的 from weak entity 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntity.CreateFromWeakEntity(weakEntity);
```

### GetScenePointer
`public UIntPtr GetScenePointer()`

**用途 / Purpose:** 读取并返回当前对象中 scene pointer 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetScenePointer();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.ToString();
```

### ClearEntityComponents
`public void ClearEntityComponents(bool resetAll, bool removeScripts, bool deleteChildEntities)`

**用途 / Purpose:** 清空当前对象中的entity components。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.ClearEntityComponents(false, false, false);
```

### ClearComponents
`public void ClearComponents()`

**用途 / Purpose:** 清空当前对象中的components。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.ClearComponents();
```

### ClearOnlyOwnComponents
`public void ClearOnlyOwnComponents()`

**用途 / Purpose:** 清空当前对象中的only own components。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.ClearOnlyOwnComponents();
```

### CheckResources
`public bool CheckResources(bool addToQueue, bool checkFaceResources)`

**用途 / Purpose:** 检查resources在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.CheckResources(false, false);
```

### SetMobility
`public void SetMobility(GameEntity.Mobility mobility)`

**用途 / Purpose:** 为 mobility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetMobility(mobility);
```

### GetMobility
`public GameEntity.Mobility GetMobility()`

**用途 / Purpose:** 读取并返回当前对象中 mobility 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetMobility();
```

### AddMesh
`public void AddMesh(Mesh mesh, bool recomputeBoundingBox = true)`

**用途 / Purpose:** 将 mesh 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddMesh(mesh, false);
```

### AddMultiMeshToSkeleton
`public void AddMultiMeshToSkeleton(MetaMesh metaMesh)`

**用途 / Purpose:** 将 multi mesh to skeleton 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddMultiMeshToSkeleton(metaMesh);
```

### AddMultiMeshToSkeletonBone
`public void AddMultiMeshToSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)`

**用途 / Purpose:** 将 multi mesh to skeleton bone 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddMultiMeshToSkeletonBone(metaMesh, 0);
```

### SetColorToAllMeshesWithTagRecursive
`public void SetColorToAllMeshesWithTagRecursive(uint color, string tag)`

**用途 / Purpose:** 为 color to all meshes with tag recursive 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetColorToAllMeshesWithTagRecursive(0, "example");
```

### GetAllMeshesWithTag
`public IEnumerable<Mesh> GetAllMeshesWithTag(string tag)`

**用途 / Purpose:** 读取并返回当前对象中 all meshes with tag 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetAllMeshesWithTag("example");
```

### SetColor
`public void SetColor(uint color1, uint color2, string meshTag)`

**用途 / Purpose:** 为 color 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetColor(0, 0, "example");
```

### GetFactorColor
`public uint GetFactorColor()`

**用途 / Purpose:** 读取并返回当前对象中 factor color 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetFactorColor();
```

### SetFactorColor
`public void SetFactorColor(uint color)`

**用途 / Purpose:** 为 factor color 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetFactorColor(0);
```

### SetAsReplayEntity
`public void SetAsReplayEntity()`

**用途 / Purpose:** 为 as replay entity 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetAsReplayEntity();
```

### SetClothMaxDistanceMultiplier
`public void SetClothMaxDistanceMultiplier(float multiplier)`

**用途 / Purpose:** 为 cloth max distance multiplier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetClothMaxDistanceMultiplier(0);
```

### RemoveMultiMeshFromSkeleton
`public void RemoveMultiMeshFromSkeleton(MetaMesh metaMesh)`

**用途 / Purpose:** 从当前容器或状态中移除 multi mesh from skeleton。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RemoveMultiMeshFromSkeleton(metaMesh);
```

### RemoveMultiMeshFromSkeletonBone
`public void RemoveMultiMeshFromSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)`

**用途 / Purpose:** 从当前容器或状态中移除 multi mesh from skeleton bone。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RemoveMultiMeshFromSkeletonBone(metaMesh, 0);
```

### RemoveComponentWithMesh
`public bool RemoveComponentWithMesh(Mesh mesh)`

**用途 / Purpose:** 从当前容器或状态中移除 component with mesh。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.RemoveComponentWithMesh(mesh);
```

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**用途 / Purpose:** 将 component 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddComponent(component);
```

### HasComponent
`public bool HasComponent(GameEntityComponent component)`

**用途 / Purpose:** 判断当前对象是否已经持有 component。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.HasComponent(component);
```

### IsInEditorScene
`public bool IsInEditorScene()`

**用途 / Purpose:** 判断当前对象是否处于 in editor scene 状态或条件。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.IsInEditorScene();
```

### RemoveComponent
`public bool RemoveComponent(GameEntityComponent component)`

**用途 / Purpose:** 从当前容器或状态中移除 component。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.RemoveComponent(component);
```

### GetGuid
`public string GetGuid()`

**用途 / Purpose:** 读取并返回当前对象中 guid 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetGuid();
```

### IsGuidValid
`public bool IsGuidValid()`

**用途 / Purpose:** 判断当前对象是否处于 guid valid 状态或条件。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.IsGuidValid();
```

### SetEnforcedMaximumLodLevel
`public void SetEnforcedMaximumLodLevel(int lodLevel)`

**用途 / Purpose:** 为 enforced maximum lod level 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetEnforcedMaximumLodLevel(0);
```

### GetLodLevelForDistanceSq
`public float GetLodLevelForDistanceSq(float distSq)`

**用途 / Purpose:** 读取并返回当前对象中 lod level for distance sq 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetLodLevelForDistanceSq(0);
```

### GetQuickBoneEntitialFrame
`public void GetQuickBoneEntitialFrame(sbyte index, out MatrixFrame frame)`

**用途 / Purpose:** 读取并返回当前对象中 quick bone entitial frame 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.GetQuickBoneEntitialFrame(0, frame);
```

### UpdateVisibilityMask
`public void UpdateVisibilityMask()`

**用途 / Purpose:** 重新计算并更新 visibility mask 的最新表示。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.UpdateVisibilityMask();
```

### CreateEmpty
`public static GameEntity CreateEmpty(Scene scene, bool isModifiableFromEditor = true, bool createPhysics = true, bool callScriptCallbacks = true)`

**用途 / Purpose:** 构建一个新的 empty 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntity.CreateEmpty(scene, false, false, false);
```

### CreateEmptyDynamic
`public static GameEntity CreateEmptyDynamic(Scene scene, bool isModifiableFromEditor = true)`

**用途 / Purpose:** 构建一个新的 empty dynamic 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntity.CreateEmptyDynamic(scene, false);
```

### CreateEmptyWithoutScene
`public static GameEntity CreateEmptyWithoutScene()`

**用途 / Purpose:** 构建一个新的 empty without scene 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntity.CreateEmptyWithoutScene();
```

### CopyFrom
`public static GameEntity CopyFrom(Scene scene, GameEntity entity, bool createPhysics = true, bool callScriptCallbacks = true)`

**用途 / Purpose:** 把当前对象的from状态复制到目标对象。

```csharp
// 静态调用，不需要实例
GameEntity.CopyFrom(scene, entity, false, false);
```

### CopyFrom
`public static GameEntity CopyFrom(Scene scene, WeakGameEntity entity, bool createPhysics = true, bool callScriptCallbacks = true)`

**用途 / Purpose:** 把当前对象的from状态复制到目标对象。

```csharp
// 静态调用，不需要实例
GameEntity.CopyFrom(scene, entity, false, false);
```

### Instantiate
`public static GameEntity Instantiate(Scene scene, string prefabName, bool callScriptCallbacks, bool createPhysics = true, string scriptInclusingTag = "")`

**用途 / Purpose:** 调用 Instantiate 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntity.Instantiate(scene, "example", false, false, "example");
```

### CallScriptCallbacks
`public void CallScriptCallbacks(bool registerScriptComponents)`

**用途 / Purpose:** 调用 CallScriptCallbacks 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.CallScriptCallbacks(false);
```

### Instantiate
`public static GameEntity Instantiate(Scene scene, string prefabName, MatrixFrame frame, bool callScriptCallbacks = true, string scriptInclusingTag = "")`

**用途 / Purpose:** 调用 Instantiate 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntity.Instantiate(scene, "example", frame, false, "example");
```

### IsGhostObject
`public bool IsGhostObject()`

**用途 / Purpose:** 判断当前对象是否处于 ghost object 状态或条件。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.IsGhostObject();
```

### CreateAndAddScriptComponent
`public void CreateAndAddScriptComponent(string name, bool callScriptCallbacks)`

**用途 / Purpose:** 构建一个新的 and add script component 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.CreateAndAddScriptComponent("example", false);
```

### PrefabExists
`public static bool PrefabExists(string name)`

**用途 / Purpose:** 调用 PrefabExists 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntity.PrefabExists("example");
```

### RemoveScriptComponent
`public void RemoveScriptComponent(UIntPtr scriptComponent, int removeReason)`

**用途 / Purpose:** 从当前容器或状态中移除 script component。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RemoveScriptComponent(scriptComponent, 0);
```

### SetEntityEnvMapVisibility
`public void SetEntityEnvMapVisibility(bool value)`

**用途 / Purpose:** 为 entity env map visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetEntityEnvMapVisibility(false);
```

### HasScene
`public bool HasScene()`

**用途 / Purpose:** 判断当前对象是否已经持有 scene。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.HasScene();
```

### HasScriptComponent
`public bool HasScriptComponent(string scName)`

**用途 / Purpose:** 判断当前对象是否已经持有 script component。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.HasScriptComponent("example");
```

### GetScriptComponents
`public IEnumerable<ScriptComponentBehavior> GetScriptComponents()`

**用途 / Purpose:** 读取并返回当前对象中 script components 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetScriptComponents();
```

### GetFirstChildEntityWithTag
`public GameEntity GetFirstChildEntityWithTag(string tag)`

**用途 / Purpose:** 读取并返回当前对象中 first child entity with tag 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetFirstChildEntityWithTag("example");
```

### HasScriptOfType
`public bool HasScriptOfType(Type t)`

**用途 / Purpose:** 判断当前对象是否已经持有 script of type。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.HasScriptOfType(t);
```

### SetAlpha
`public void SetAlpha(float alpha)`

**用途 / Purpose:** 为 alpha 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetAlpha(0);
```

### SetVisibilityExcludeParents
`public void SetVisibilityExcludeParents(bool visible)`

**用途 / Purpose:** 为 visibility exclude parents 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetVisibilityExcludeParents(false);
```

### SetReadyToRender
`public void SetReadyToRender(bool ready)`

**用途 / Purpose:** 为 ready to render 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetReadyToRender(false);
```

### GetVisibilityExcludeParents
`public bool GetVisibilityExcludeParents()`

**用途 / Purpose:** 读取并返回当前对象中 visibility exclude parents 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetVisibilityExcludeParents();
```

### IsVisibleIncludeParents
`public bool IsVisibleIncludeParents()`

**用途 / Purpose:** 判断当前对象是否处于 visible include parents 状态或条件。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.IsVisibleIncludeParents();
```

### GetVisibilityLevelMaskIncludingParents
`public uint GetVisibilityLevelMaskIncludingParents()`

**用途 / Purpose:** 读取并返回当前对象中 visibility level mask including parents 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetVisibilityLevelMaskIncludingParents();
```

### GetEditModeLevelVisibility
`public bool GetEditModeLevelVisibility()`

**用途 / Purpose:** 读取并返回当前对象中 edit mode level visibility 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetEditModeLevelVisibility();
```

### Remove
`public void Remove(int removeReason)`

**用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.Remove(0);
```

### CopyFromPrefab
`public static GameEntity CopyFromPrefab(GameEntity prefab)`

**用途 / Purpose:** 把当前对象的from prefab状态复制到目标对象。

```csharp
// 静态调用，不需要实例
GameEntity.CopyFromPrefab(prefab);
```

### CopyFromPrefab
`public static GameEntity CopyFromPrefab(WeakGameEntity prefab)`

**用途 / Purpose:** 把当前对象的from prefab状态复制到目标对象。

```csharp
// 静态调用，不需要实例
GameEntity.CopyFromPrefab(prefab);
```

### SetUpgradeLevelMask
`public void SetUpgradeLevelMask(GameEntity.UpgradeLevelMask mask)`

**用途 / Purpose:** 为 upgrade level mask 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetUpgradeLevelMask(mask);
```

### GetUpgradeLevelMask
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMask()`

**用途 / Purpose:** 读取并返回当前对象中 upgrade level mask 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetUpgradeLevelMask();
```

### GetUpgradeLevelMaskCumulative
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMaskCumulative()`

**用途 / Purpose:** 读取并返回当前对象中 upgrade level mask cumulative 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetUpgradeLevelMaskCumulative();
```

### GetUpgradeLevelOfEntity
`public int GetUpgradeLevelOfEntity()`

**用途 / Purpose:** 读取并返回当前对象中 upgrade level of entity 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetUpgradeLevelOfEntity();
```

### GetOldPrefabName
`public string GetOldPrefabName()`

**用途 / Purpose:** 读取并返回当前对象中 old prefab name 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetOldPrefabName();
```

### GetPrefabName
`public string GetPrefabName()`

**用途 / Purpose:** 读取并返回当前对象中 prefab name 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetPrefabName();
```

### CopyScriptComponentFromAnotherEntity
`public void CopyScriptComponentFromAnotherEntity(GameEntity otherEntity, string scriptName)`

**用途 / Purpose:** 把当前对象的script component from another entity状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.CopyScriptComponentFromAnotherEntity(otherEntity, "example");
```

### SetFrame
`public void SetFrame(ref MatrixFrame frame, bool isTeleportation = true)`

**用途 / Purpose:** 为 frame 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetFrame(frame, false);
```

### SetLocalFrame
`public void SetLocalFrame(ref MatrixFrame frame, bool isTeleportation)`

**用途 / Purpose:** 为 local frame 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetLocalFrame(frame, false);
```

### SetClothComponentKeepState
`public void SetClothComponentKeepState(MetaMesh metaMesh, bool state)`

**用途 / Purpose:** 为 cloth component keep state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetClothComponentKeepState(metaMesh, false);
```

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool state)`

**用途 / Purpose:** 为 cloth component keep state of all meshes 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetClothComponentKeepStateOfAllMeshes(false);
```

### SetPreviousFrameInvalid
`public void SetPreviousFrameInvalid()`

**用途 / Purpose:** 为 previous frame invalid 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetPreviousFrameInvalid();
```

### GetFrame
`public MatrixFrame GetFrame()`

**用途 / Purpose:** 读取并返回当前对象中 frame 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetFrame();
```

### GetLocalFrame
`public void GetLocalFrame(out MatrixFrame frame)`

**用途 / Purpose:** 读取并返回当前对象中 local frame 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.GetLocalFrame(frame);
```

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**用途 / Purpose:** 读取并返回当前对象中 local frame 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetLocalFrame();
```

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame()`

**用途 / Purpose:** 读取并返回当前对象中 global frame 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalFrame();
```

### GetGlobalFrameImpreciseForFixedTick
`public MatrixFrame GetGlobalFrameImpreciseForFixedTick()`

**用途 / Purpose:** 读取并返回当前对象中 global frame imprecise for fixed tick 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalFrameImpreciseForFixedTick();
```

### ComputePreciseGlobalFrameForFixedTickSlow
`public MatrixFrame ComputePreciseGlobalFrameForFixedTickSlow()`

**用途 / Purpose:** 调用 ComputePreciseGlobalFrameForFixedTickSlow 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.ComputePreciseGlobalFrameForFixedTickSlow();
```

### SetGlobalFrame
`public void SetGlobalFrame(in MatrixFrame frame, bool isTeleportation = true)`

**用途 / Purpose:** 为 global frame 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetGlobalFrame(frame, false);
```

### GetPreviousGlobalFrame
`public MatrixFrame GetPreviousGlobalFrame()`

**用途 / Purpose:** 读取并返回当前对象中 previous global frame 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetPreviousGlobalFrame();
```

### GetBodyWorldTransform
`public MatrixFrame GetBodyWorldTransform()`

**用途 / Purpose:** 读取并返回当前对象中 body world transform 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetBodyWorldTransform();
```

### GetBodyVisualWorldTransform
`public MatrixFrame GetBodyVisualWorldTransform()`

**用途 / Purpose:** 读取并返回当前对象中 body visual world transform 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetBodyVisualWorldTransform();
```

### SetLocalPosition
`public void SetLocalPosition(Vec3 position)`

**用途 / Purpose:** 为 local position 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetLocalPosition(position);
```

### UpdateTriadFrameForEditor
`public void UpdateTriadFrameForEditor()`

**用途 / Purpose:** 重新计算并更新 triad frame for editor 的最新表示。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.UpdateTriadFrameForEditor();
```

### UpdateTriadFrameForEditorForAllChildren
`public void UpdateTriadFrameForEditorForAllChildren()`

**用途 / Purpose:** 重新计算并更新 triad frame for editor for all children 的最新表示。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.UpdateTriadFrameForEditorForAllChildren();
```

### GetPhysicsMaterial
`public PhysicsMaterial GetPhysicsMaterial()`

**用途 / Purpose:** 读取并返回当前对象中 physics material 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetPhysicsMaterial();
```

### SetBodyFlags
`public void SetBodyFlags(BodyFlags bodyFlags)`

**用途 / Purpose:** 为 body flags 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetBodyFlags(bodyFlags);
```

### SetBodyFlagsRecursive
`public void SetBodyFlagsRecursive(BodyFlags bodyFlags)`

**用途 / Purpose:** 为 body flags recursive 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetBodyFlagsRecursive(bodyFlags);
```

### AddBodyFlags
`public void AddBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)`

**用途 / Purpose:** 将 body flags 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddBodyFlags(bodyFlags, false);
```

### RemoveBodyFlags
`public void RemoveBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)`

**用途 / Purpose:** 从当前容器或状态中移除 body flags。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RemoveBodyFlags(bodyFlags, false);
```

### GetGlobalScale
`public Vec3 GetGlobalScale()`

**用途 / Purpose:** 读取并返回当前对象中 global scale 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalScale();
```

### GetLocalScale
`public Vec3 GetLocalScale()`

**用途 / Purpose:** 读取并返回当前对象中 local scale 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetLocalScale();
```

### SetAnimationSoundActivation
`public void SetAnimationSoundActivation(bool activate)`

**用途 / Purpose:** 为 animation sound activation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetAnimationSoundActivation(false);
```

### CopyComponentsToSkeleton
`public void CopyComponentsToSkeleton()`

**用途 / Purpose:** 把当前对象的components to skeleton状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.CopyComponentsToSkeleton();
```

### AddMeshToBone
`public void AddMeshToBone(sbyte boneIndex, Mesh mesh)`

**用途 / Purpose:** 将 mesh to bone 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddMeshToBone(0, mesh);
```

### ActivateRagdoll
`public void ActivateRagdoll()`

**用途 / Purpose:** 激活ragdoll对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.ActivateRagdoll();
```

### PauseSkeletonAnimation
`public void PauseSkeletonAnimation()`

**用途 / Purpose:** 调用 PauseSkeletonAnimation 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.PauseSkeletonAnimation();
```

### ResumeSkeletonAnimation
`public void ResumeSkeletonAnimation()`

**用途 / Purpose:** 调用 ResumeSkeletonAnimation 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.ResumeSkeletonAnimation();
```

### IsSkeletonAnimationPaused
`public bool IsSkeletonAnimationPaused()`

**用途 / Purpose:** 判断当前对象是否处于 skeleton animation paused 状态或条件。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.IsSkeletonAnimationPaused();
```

### GetBoneCount
`public sbyte GetBoneCount()`

**用途 / Purpose:** 读取并返回当前对象中 bone count 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetBoneCount();
```

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)`

**用途 / Purpose:** 读取并返回当前对象中 water level at position 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetWaterLevelAtPosition(position, false, false);
```

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 bone entitial frame with index 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetBoneEntitialFrameWithIndex(0);
```

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName)`

**用途 / Purpose:** 读取并返回当前对象中 bone entitial frame with name 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetBoneEntitialFrameWithName("example");
```

### AddTag
`public void AddTag(string tag)`

**用途 / Purpose:** 将 tag 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddTag("example");
```

### RemoveTag
`public void RemoveTag(string tag)`

**用途 / Purpose:** 从当前容器或状态中移除 tag。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RemoveTag("example");
```

### HasTag
`public bool HasTag(string tag)`

**用途 / Purpose:** 判断当前对象是否已经持有 tag。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.HasTag("example");
```

### AddChild
`public void AddChild(GameEntity gameEntity, bool autoLocalizeFrame = false)`

**用途 / Purpose:** 将 child 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddChild(gameEntity, false);
```

### RemoveChild
`public void RemoveChild(GameEntity childEntity, bool keepPhysics, bool keepScenePointer, bool callScriptCallbacks, int removeReason)`

**用途 / Purpose:** 从当前容器或状态中移除 child。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RemoveChild(childEntity, false, false, false, 0);
```

### BreakPrefab
`public void BreakPrefab()`

**用途 / Purpose:** 调用 BreakPrefab 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.BreakPrefab();
```

### GetChild
`public GameEntity GetChild(int index)`

**用途 / Purpose:** 读取并返回当前对象中 child 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetChild(0);
```

### HasComplexAnimTree
`public bool HasComplexAnimTree()`

**用途 / Purpose:** 判断当前对象是否已经持有 complex anim tree。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.HasComplexAnimTree();
```

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh, bool updateVisMask = true)`

**用途 / Purpose:** 将 multi mesh 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddMultiMesh(metaMesh, false);
```

### RemoveMultiMesh
`public bool RemoveMultiMesh(MetaMesh metaMesh)`

**用途 / Purpose:** 从当前容器或状态中移除 multi mesh。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.RemoveMultiMesh(metaMesh);
```

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType)`

**用途 / Purpose:** 读取并返回当前对象中 component count 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetComponentCount(componentType);
```

### AddAllMeshesOfGameEntity
`public void AddAllMeshesOfGameEntity(GameEntity gameEntity)`

**用途 / Purpose:** 将 all meshes of game entity 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddAllMeshesOfGameEntity(gameEntity);
```

### SetFrameChanged
`public void SetFrameChanged()`

**用途 / Purpose:** 为 frame changed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetFrameChanged();
```

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(int index, GameEntity.ComponentType componentType)`

**用途 / Purpose:** 读取并返回当前对象中 component at index 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetComponentAtIndex(0, componentType);
```

### GetMetaMesh
`public MetaMesh GetMetaMesh(int metaMeshIndex)`

**用途 / Purpose:** 读取并返回当前对象中 meta mesh 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetMetaMesh(0);
```

### GetClothSimulator
`public ClothSimulatorComponent GetClothSimulator(int clothSimulatorIndex)`

**用途 / Purpose:** 读取并返回当前对象中 cloth simulator 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetClothSimulator(0);
```

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 为 vector argument 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetVectorArgument(0, 0, 0, 0);
```

### SetMaterialForAllMeshes
`public void SetMaterialForAllMeshes(Material material)`

**用途 / Purpose:** 为 material for all meshes 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetMaterialForAllMeshes(material);
```

### AddLight
`public bool AddLight(Light light)`

**用途 / Purpose:** 将 light 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.AddLight(light);
```

### GetLight
`public Light GetLight()`

**用途 / Purpose:** 读取并返回当前对象中 light 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetLight();
```

### AddParticleSystemComponent
`public void AddParticleSystemComponent(string particleid)`

**用途 / Purpose:** 将 particle system component 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddParticleSystemComponent("example");
```

### RemoveAllParticleSystems
`public void RemoveAllParticleSystems()`

**用途 / Purpose:** 从当前容器或状态中移除 all particle systems。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RemoveAllParticleSystems();
```

### CheckPointWithOrientedBoundingBox
`public bool CheckPointWithOrientedBoundingBox(Vec3 point)`

**用途 / Purpose:** 检查point with oriented bounding box在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.CheckPointWithOrientedBoundingBox(point);
```

### PauseParticleSystem
`public void PauseParticleSystem(bool doChildren)`

**用途 / Purpose:** 调用 PauseParticleSystem 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.PauseParticleSystem(false);
```

### ResumeParticleSystem
`public void ResumeParticleSystem(bool doChildren)`

**用途 / Purpose:** 调用 ResumeParticleSystem 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.ResumeParticleSystem(false);
```

### BurstEntityParticle
`public void BurstEntityParticle(bool doChildren)`

**用途 / Purpose:** 调用 BurstEntityParticle 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.BurstEntityParticle(false);
```

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float emissionRateMultiplier)`

**用途 / Purpose:** 为 runtime emission rate multiplier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetRuntimeEmissionRateMultiplier(0);
```

### GetLocalBoundingBox
`public BoundingBox GetLocalBoundingBox()`

**用途 / Purpose:** 读取并返回当前对象中 local bounding box 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetLocalBoundingBox();
```

### GetGlobalBoundingBox
`public BoundingBox GetGlobalBoundingBox()`

**用途 / Purpose:** 读取并返回当前对象中 global bounding box 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalBoundingBox();
```

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin()`

**用途 / Purpose:** 读取并返回当前对象中 bounding box min 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetBoundingBoxMin();
```

### SetHasCustomBoundingBoxValidationSystem
`public void SetHasCustomBoundingBoxValidationSystem(bool hasCustomBoundingBox)`

**用途 / Purpose:** 为 has custom bounding box validation system 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetHasCustomBoundingBoxValidationSystem(false);
```

### ValidateBoundingBox
`public void ValidateBoundingBox()`

**用途 / Purpose:** 检查bounding box是否满足约束条件，通常返回布尔值。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.ValidateBoundingBox();
```

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax()`

**用途 / Purpose:** 读取并返回当前对象中 bounding box max 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetBoundingBoxMax();
```

### UpdateGlobalBounds
`public void UpdateGlobalBounds()`

**用途 / Purpose:** 重新计算并更新 global bounds 的最新表示。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.UpdateGlobalBounds();
```

### RecomputeBoundingBox
`public void RecomputeBoundingBox()`

**用途 / Purpose:** 重新执行bounding box相关的计算并返回结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RecomputeBoundingBox();
```

### GetBoundingBoxRadius
`public float GetBoundingBoxRadius()`

**用途 / Purpose:** 读取并返回当前对象中 bounding box radius 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetBoundingBoxRadius();
```

### SetBoundingboxDirty
`public void SetBoundingboxDirty()`

**用途 / Purpose:** 为 boundingbox dirty 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetBoundingboxDirty();
```

### ComputeGlobalPhysicsBoundingBoxMinMax
`public ValueTuple<Vec3, Vec3> ComputeGlobalPhysicsBoundingBoxMinMax()`

**用途 / Purpose:** 调用 ComputeGlobalPhysicsBoundingBoxMinMax 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.ComputeGlobalPhysicsBoundingBoxMinMax();
```

### SetContourColor
`public void SetContourColor(uint? color, bool alwaysVisible = true)`

**用途 / Purpose:** 为 contour color 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetContourColor(0, false);
```

### GetHasFrameChanged
`public bool GetHasFrameChanged()`

**用途 / Purpose:** 读取并返回当前对象中 has frame changed 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetHasFrameChanged();
```

### GetFirstMesh
`public Mesh GetFirstMesh()`

**用途 / Purpose:** 读取并返回当前对象中 first mesh 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetFirstMesh();
```

### GetAttachedNavmeshFaceCount
`public int GetAttachedNavmeshFaceCount()`

**用途 / Purpose:** 读取并返回当前对象中 attached navmesh face count 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetAttachedNavmeshFaceCount();
```

### GetAttachedNavmeshFaceRecords
`public void GetAttachedNavmeshFaceRecords(PathFaceRecord faceRecords)`

**用途 / Purpose:** 读取并返回当前对象中 attached navmesh face records 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.GetAttachedNavmeshFaceRecords(faceRecords);
```

### SetExternalReferencesUsage
`public void SetExternalReferencesUsage(bool value)`

**用途 / Purpose:** 为 external references usage 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetExternalReferencesUsage(false);
```

### SetMorphFrameOfComponents
`public void SetMorphFrameOfComponents(float value)`

**用途 / Purpose:** 为 morph frame of components 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetMorphFrameOfComponents(0);
```

### AddEditDataUserToAllMeshes
`public void AddEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)`

**用途 / Purpose:** 将 edit data user to all meshes 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AddEditDataUserToAllMeshes(false, false);
```

### ReleaseEditDataUserToAllMeshes
`public void ReleaseEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)`

**用途 / Purpose:** 调用 ReleaseEditDataUserToAllMeshes 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.ReleaseEditDataUserToAllMeshes(false, false);
```

### GetCameraParamsFromCameraScript
`public void GetCameraParamsFromCameraScript(Camera cam, ref Vec3 dofParams)`

**用途 / Purpose:** 读取并返回当前对象中 camera params from camera script 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.GetCameraParamsFromCameraScript(cam, dofParams);
```

### GetMeshBendedFrame
`public void GetMeshBendedFrame(MatrixFrame worldSpacePosition, ref MatrixFrame output)`

**用途 / Purpose:** 读取并返回当前对象中 mesh bended frame 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.GetMeshBendedFrame(worldSpacePosition, output);
```

### ComputeTrajectoryVolume
`public void ComputeTrajectoryVolume(float missileSpeed, float verticalAngleMaxInDegrees, float verticalAngleMinInDegrees, float horizontalAngleRangeInDegrees, float airFrictionConstant)`

**用途 / Purpose:** 调用 ComputeTrajectoryVolume 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.ComputeTrajectoryVolume(0, 0, 0, 0, 0);
```

### SetAnimTreeChannelParameterForceUpdate
`public void SetAnimTreeChannelParameterForceUpdate(float phase, int channelNo)`

**用途 / Purpose:** 为 anim tree channel parameter force update 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetAnimTreeChannelParameterForceUpdate(0, 0);
```

### ChangeMetaMeshOrRemoveItIfNotExists
`public void ChangeMetaMeshOrRemoveItIfNotExists(MetaMesh entityMetaMesh, MetaMesh newMetaMesh)`

**用途 / Purpose:** 调用 ChangeMetaMeshOrRemoveItIfNotExists 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.ChangeMetaMeshOrRemoveItIfNotExists(entityMetaMesh, newMetaMesh);
```

### SetUpdateValidtyOnFrameChangedOfFacesWithId
`public void SetUpdateValidtyOnFrameChangedOfFacesWithId(int faceGroupId, bool updateValidity)`

**用途 / Purpose:** 为 update validty on frame changed of faces with id 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetUpdateValidtyOnFrameChangedOfFacesWithId(0, false);
```

### AttachNavigationMeshFaces
`public void AttachNavigationMeshFaces(int faceGroupId, bool isConnected, bool isBlocker = false, bool autoLocalize = false, bool finalizeBlockerConvexHullComputation = false, bool updateEntityFrame = true)`

**用途 / Purpose:** 调用 AttachNavigationMeshFaces 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.AttachNavigationMeshFaces(0, false, false, false, false, false);
```

### DetachAllAttachedNavigationMeshFaces
`public void DetachAllAttachedNavigationMeshFaces()`

**用途 / Purpose:** 调用 DetachAllAttachedNavigationMeshFaces 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.DetachAllAttachedNavigationMeshFaces();
```

### UpdateAttachedNavigationMeshFaces
`public void UpdateAttachedNavigationMeshFaces()`

**用途 / Purpose:** 重新计算并更新 attached navigation mesh faces 的最新表示。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.UpdateAttachedNavigationMeshFaces();
```

### RemoveSkeleton
`public void RemoveSkeleton()`

**用途 / Purpose:** 从当前容器或状态中移除 skeleton。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RemoveSkeleton();
```

### RemoveAllChildren
`public void RemoveAllChildren()`

**用途 / Purpose:** 从当前容器或状态中移除 all children。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RemoveAllChildren();
```

### GetChildren
`public IEnumerable<GameEntity> GetChildren()`

**用途 / Purpose:** 读取并返回当前对象中 children 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetChildren();
```

### GetEntityAndChildren
`public IEnumerable<GameEntity> GetEntityAndChildren()`

**用途 / Purpose:** 读取并返回当前对象中 entity and children 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetEntityAndChildren();
```

### GetChildrenRecursive
`public void GetChildrenRecursive(ref List<GameEntity> children)`

**用途 / Purpose:** 读取并返回当前对象中 children recursive 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.GetChildrenRecursive(children);
```

### GetChildrenWithTagRecursive
`public void GetChildrenWithTagRecursive(List<GameEntity> children, string tag)`

**用途 / Purpose:** 读取并返回当前对象中 children with tag recursive 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.GetChildrenWithTagRecursive(children, "example");
```

### IsSelectedOnEditor
`public bool IsSelectedOnEditor()`

**用途 / Purpose:** 判断当前对象是否处于 selected on editor 状态或条件。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.IsSelectedOnEditor();
```

### SelectEntityOnEditor
`public void SelectEntityOnEditor()`

**用途 / Purpose:** 调用 SelectEntityOnEditor 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SelectEntityOnEditor();
```

### DeselectEntityOnEditor
`public void DeselectEntityOnEditor()`

**用途 / Purpose:** 调用 DeselectEntityOnEditor 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.DeselectEntityOnEditor();
```

### SetAsPredisplayEntity
`public void SetAsPredisplayEntity()`

**用途 / Purpose:** 为 as predisplay entity 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetAsPredisplayEntity();
```

### RemoveFromPredisplayEntity
`public void RemoveFromPredisplayEntity()`

**用途 / Purpose:** 从当前容器或状态中移除 from predisplay entity。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RemoveFromPredisplayEntity();
```

### SetNativeScriptComponentVariable
`public void SetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)`

**用途 / Purpose:** 为 native script component variable 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetNativeScriptComponentVariable("example", "example", data, variableType);
```

### SetManualGlobalBoundingBox
`public void SetManualGlobalBoundingBox(Vec3 boundingBoxStartGlobal, Vec3 boundingBoxEndGlobal)`

**用途 / Purpose:** 为 manual global bounding box 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetManualGlobalBoundingBox(boundingBoxStartGlobal, boundingBoxEndGlobal);
```

### RayHitEntity
`public bool RayHitEntity(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref float resultLength)`

**用途 / Purpose:** 调用 RayHitEntity 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.RayHitEntity(rayOrigin, rayDirection, 0, resultLength);
```

### RayHitEntityWithNormal
`public bool RayHitEntityWithNormal(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref Vec3 resultNormal, ref float resultLength)`

**用途 / Purpose:** 调用 RayHitEntityWithNormal 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.RayHitEntityWithNormal(rayOrigin, rayDirection, 0, resultNormal, resultLength);
```

### GetNativeScriptComponentVariable
`public void GetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)`

**用途 / Purpose:** 读取并返回当前对象中 native script component variable 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.GetNativeScriptComponentVariable("example", "example", data, variableType);
```

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPosition, Vec3 clipNormal, bool setForChildren)`

**用途 / Purpose:** 为 custom clip plane 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetCustomClipPlane(clipPosition, clipNormal, false);
```

### GetBoundingBoxLongestHalfDimension
`public float GetBoundingBoxLongestHalfDimension()`

**用途 / Purpose:** 读取并返回当前对象中 bounding box longest half dimension 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetBoundingBoxLongestHalfDimension();
```

### ComputeBoundingBoxFromLongestHalfDimension
`public BoundingBox ComputeBoundingBoxFromLongestHalfDimension(float longestHalfDimensionCoefficient)`

**用途 / Purpose:** 调用 ComputeBoundingBoxFromLongestHalfDimension 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.ComputeBoundingBoxFromLongestHalfDimension(0);
```

### ComputeBoundingBoxIncludeChildren
`public BoundingBox ComputeBoundingBoxIncludeChildren()`

**用途 / Purpose:** 调用 ComputeBoundingBoxIncludeChildren 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.ComputeBoundingBoxIncludeChildren();
```

### SetManualLocalBoundingBox
`public void SetManualLocalBoundingBox(in BoundingBox boundingBox)`

**用途 / Purpose:** 为 manual local bounding box 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetManualLocalBoundingBox(boundingBox);
```

### RelaxLocalBoundingBox
`public void RelaxLocalBoundingBox(in BoundingBox boundingBox)`

**用途 / Purpose:** 调用 RelaxLocalBoundingBox 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.RelaxLocalBoundingBox(boundingBox);
```

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode)`

**用途 / Purpose:** 为 cull mode 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetCullMode(cullMode);
```

### GetFirstChildEntityWithTagRecursive
`public GameEntity GetFirstChildEntityWithTagRecursive(string tag)`

**用途 / Purpose:** 读取并返回当前对象中 first child entity with tag recursive 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetFirstChildEntityWithTagRecursive("example");
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetHashCode();
```

### SetDoNotCheckVisibility
`public void SetDoNotCheckVisibility(bool value)`

**用途 / Purpose:** 为 do not check visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetDoNotCheckVisibility(false);
```

### SetBoneFrameToAllMeshes
`public void SetBoneFrameToAllMeshes(int boneIndex, in MatrixFrame frame)`

**用途 / Purpose:** 为 bone frame to all meshes 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetBoneFrameToAllMeshes(0, frame);
```

### GetGlobalWindStrengthVectorOfScene
`public Vec2 GetGlobalWindStrengthVectorOfScene()`

**用途 / Purpose:** 读取并返回当前对象中 global wind strength vector of scene 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalWindStrengthVectorOfScene();
```

### GetGlobalWindVelocityOfScene
`public Vec2 GetGlobalWindVelocityOfScene()`

**用途 / Purpose:** 读取并返回当前对象中 global wind velocity of scene 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalWindVelocityOfScene();
```

### GetLastFinalRenderCameraPositionOfScene
`public Vec3 GetLastFinalRenderCameraPositionOfScene()`

**用途 / Purpose:** 读取并返回当前对象中 last final render camera position of scene 的结果。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.GetLastFinalRenderCameraPositionOfScene();
```

### SetForceDecalsToRender
`public void SetForceDecalsToRender(bool value)`

**用途 / Purpose:** 为 force decals to render 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetForceDecalsToRender(false);
```

### SetForceNotAffectedBySeason
`public void SetForceNotAffectedBySeason(bool value)`

**用途 / Purpose:** 为 force not affected by season 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetForceNotAffectedBySeason(false);
```

### CheckIsPrefabLinkRootPrefab
`public bool CheckIsPrefabLinkRootPrefab(int depth)`

**用途 / Purpose:** 检查is prefab link root prefab在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.CheckIsPrefabLinkRootPrefab(0);
```

### SetupAdditionalBoneBufferForMeshes
`public void SetupAdditionalBoneBufferForMeshes(int boneCount)`

**用途 / Purpose:** 为 up additional bone buffer for meshes 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SetupAdditionalBoneBufferForMeshes(0);
```

### CreatePhysxCookingInstance
`public static UIntPtr CreatePhysxCookingInstance()`

**用途 / Purpose:** 构建一个新的 physx cooking instance 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameEntity.CreatePhysxCookingInstance();
```

### DeletePhysxCookingInstance
`public static void DeletePhysxCookingInstance(UIntPtr pointer)`

**用途 / Purpose:** 调用 DeletePhysxCookingInstance 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntity.DeletePhysxCookingInstance(pointer);
```

### DeleteEmptyShape
`public void DeleteEmptyShape(UIntPtr shape1, UIntPtr shape2)`

**用途 / Purpose:** 调用 DeleteEmptyShape 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.DeleteEmptyShape(shape1, shape2);
```

### CreateEmptyPhysxShape
`public UIntPtr CreateEmptyPhysxShape(bool isVariable, int physxMaterialIndex)`

**用途 / Purpose:** 构建一个新的 empty physx shape 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
var result = gameEntity.CreateEmptyPhysxShape(false, 0);
```

### SwapPhysxShapeInEntity
`public void SwapPhysxShapeInEntity(UIntPtr oldShape, UIntPtr newShape, bool isVariable)`

**用途 / Purpose:** 调用 SwapPhysxShapeInEntity 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameEntity 实例
GameEntity gameEntity = ...;
gameEntity.SwapPhysxShapeInEntity(oldShape, newShape, false);
```

### CookTrianglePhysxMesh
`public static void CookTrianglePhysxMesh(UIntPtr cookingInstancePointer, UIntPtr shapePointer, UIntPtr quadPinnedPointer, int physicsMaterial, int numberOfVertices, UIntPtr indicesPinnedPointer, int numberOfIndices)`

**用途 / Purpose:** 调用 CookTrianglePhysxMesh 对应的操作。

```csharp
// 静态调用，不需要实例
GameEntity.CookTrianglePhysxMesh(cookingInstancePointer, shapePointer, quadPinnedPointer, 0, 0, indicesPinnedPointer, 0);
```

## 使用示例

```csharp
GameEntity.CreateFromWeakEntity(weakEntity);
```

## 参见

- [本区域目录](../)