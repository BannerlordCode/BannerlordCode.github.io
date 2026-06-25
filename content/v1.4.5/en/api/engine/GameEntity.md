---
title: "GameEntity"
description: "Auto-generated class reference for GameEntity."
---
# GameEntity

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class GameEntity : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/GameEntity.cs`

## Overview

`GameEntity` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `EntityFlags` | `public EntityFlags EntityFlags { get; set; }` |
| `EntityVisibilityFlags` | `public EntityVisibilityFlags EntityVisibilityFlags { get; set; }` |
| `BodyFlag` | `public BodyFlags BodyFlag { get; set; }` |
| `Root` | `public GameEntity Root { get; }` |
| `Skeleton` | `public Skeleton Skeleton { get; set; }` |

## Key Methods

### CreateFromWeakEntity
`public static GameEntity CreateFromWeakEntity(WeakGameEntity weakEntity)`

**Purpose:** Constructs a new from weak entity entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntity.CreateFromWeakEntity(weakEntity);
```

### GetScenePointer
`public UIntPtr GetScenePointer()`

**Purpose:** Reads and returns the scene pointer value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetScenePointer();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.ToString();
```

### ClearEntityComponents
`public void ClearEntityComponents(bool resetAll, bool removeScripts, bool deleteChildEntities)`

**Purpose:** Removes all entity components from the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.ClearEntityComponents(false, false, false);
```

### ClearComponents
`public void ClearComponents()`

**Purpose:** Removes all components from the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.ClearComponents();
```

### ClearOnlyOwnComponents
`public void ClearOnlyOwnComponents()`

**Purpose:** Removes all only own components from the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.ClearOnlyOwnComponents();
```

### CheckResources
`public bool CheckResources(bool addToQueue, bool checkFaceResources)`

**Purpose:** Verifies whether resources holds true for the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.CheckResources(false, false);
```

### SetMobility
`public void SetMobility(Mobility mobility)`

**Purpose:** Assigns a new value to mobility and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetMobility(mobility);
```

### GetMobility
`public Mobility GetMobility()`

**Purpose:** Reads and returns the mobility value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetMobility();
```

### AddMesh
`public void AddMesh(Mesh mesh, bool recomputeBoundingBox = true)`

**Purpose:** Adds mesh to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddMesh(mesh, false);
```

### AddMultiMeshToSkeleton
`public void AddMultiMeshToSkeleton(MetaMesh metaMesh)`

**Purpose:** Adds multi mesh to skeleton to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddMultiMeshToSkeleton(metaMesh);
```

### AddMultiMeshToSkeletonBone
`public void AddMultiMeshToSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)`

**Purpose:** Adds multi mesh to skeleton bone to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddMultiMeshToSkeletonBone(metaMesh, 0);
```

### SetColorToAllMeshesWithTagRecursive
`public void SetColorToAllMeshesWithTagRecursive(uint color, string tag)`

**Purpose:** Assigns a new value to color to all meshes with tag recursive and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetColorToAllMeshesWithTagRecursive(0, "example");
```

### GetAllMeshesWithTag
`public IEnumerable<Mesh> GetAllMeshesWithTag(string tag)`

**Purpose:** Reads and returns the all meshes with tag value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetAllMeshesWithTag("example");
```

### SetColor
`public void SetColor(uint color1, uint color2, string meshTag)`

**Purpose:** Assigns a new value to color and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetColor(0, 0, "example");
```

### GetFactorColor
`public uint GetFactorColor()`

**Purpose:** Reads and returns the factor color value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetFactorColor();
```

### SetFactorColor
`public void SetFactorColor(uint color)`

**Purpose:** Assigns a new value to factor color and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetFactorColor(0);
```

### SetAsReplayEntity
`public void SetAsReplayEntity()`

**Purpose:** Assigns a new value to as replay entity and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetAsReplayEntity();
```

### SetClothMaxDistanceMultiplier
`public void SetClothMaxDistanceMultiplier(float multiplier)`

**Purpose:** Assigns a new value to cloth max distance multiplier and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetClothMaxDistanceMultiplier(0);
```

### RemoveMultiMeshFromSkeleton
`public void RemoveMultiMeshFromSkeleton(MetaMesh metaMesh)`

**Purpose:** Removes multi mesh from skeleton from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RemoveMultiMeshFromSkeleton(metaMesh);
```

### RemoveMultiMeshFromSkeletonBone
`public void RemoveMultiMeshFromSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)`

**Purpose:** Removes multi mesh from skeleton bone from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RemoveMultiMeshFromSkeletonBone(metaMesh, 0);
```

### RemoveComponentWithMesh
`public bool RemoveComponentWithMesh(Mesh mesh)`

**Purpose:** Removes component with mesh from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.RemoveComponentWithMesh(mesh);
```

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**Purpose:** Adds component to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddComponent(component);
```

### HasComponent
`public bool HasComponent(GameEntityComponent component)`

**Purpose:** Determines whether the this instance already holds component.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.HasComponent(component);
```

### IsInEditorScene
`public bool IsInEditorScene()`

**Purpose:** Determines whether the this instance is in the in editor scene state or condition.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.IsInEditorScene();
```

### RemoveComponent
`public bool RemoveComponent(GameEntityComponent component)`

**Purpose:** Removes component from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.RemoveComponent(component);
```

### GetGuid
`public string GetGuid()`

**Purpose:** Reads and returns the guid value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetGuid();
```

### IsGuidValid
`public bool IsGuidValid()`

**Purpose:** Determines whether the this instance is in the guid valid state or condition.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.IsGuidValid();
```

### SetEnforcedMaximumLodLevel
`public void SetEnforcedMaximumLodLevel(int lodLevel)`

**Purpose:** Assigns a new value to enforced maximum lod level and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetEnforcedMaximumLodLevel(0);
```

### GetLodLevelForDistanceSq
`public float GetLodLevelForDistanceSq(float distSq)`

**Purpose:** Reads and returns the lod level for distance sq value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetLodLevelForDistanceSq(0);
```

### GetQuickBoneEntitialFrame
`public void GetQuickBoneEntitialFrame(sbyte index, out MatrixFrame frame)`

**Purpose:** Reads and returns the quick bone entitial frame value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.GetQuickBoneEntitialFrame(0, frame);
```

### UpdateVisibilityMask
`public void UpdateVisibilityMask()`

**Purpose:** Recalculates and stores the latest representation of visibility mask.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.UpdateVisibilityMask();
```

### CreateEmpty
`public static GameEntity CreateEmpty(Scene scene, bool isModifiableFromEditor = true, bool createPhysics = true, bool callScriptCallbacks = true)`

**Purpose:** Constructs a new empty entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntity.CreateEmpty(scene, false, false, false);
```

### CreateEmptyDynamic
`public static GameEntity CreateEmptyDynamic(Scene scene, bool isModifiableFromEditor = true)`

**Purpose:** Constructs a new empty dynamic entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntity.CreateEmptyDynamic(scene, false);
```

### CreateEmptyWithoutScene
`public static GameEntity CreateEmptyWithoutScene()`

**Purpose:** Constructs a new empty without scene entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntity.CreateEmptyWithoutScene();
```

### CopyFrom
`public static GameEntity CopyFrom(Scene scene, GameEntity entity, bool createPhysics = true, bool callScriptCallbacks = true)`

**Purpose:** Copies the from state of the this instance to a target.

```csharp
// Static call; no instance required
GameEntity.CopyFrom(scene, entity, false, false);
```

### CopyFrom
`public static GameEntity CopyFrom(Scene scene, WeakGameEntity entity, bool createPhysics = true, bool callScriptCallbacks = true)`

**Purpose:** Copies the from state of the this instance to a target.

```csharp
// Static call; no instance required
GameEntity.CopyFrom(scene, entity, false, false);
```

### Instantiate
`public static GameEntity Instantiate(Scene scene, string prefabName, bool callScriptCallbacks, bool createPhysics = true, string scriptInclusingTag = "")`

**Purpose:** Executes the Instantiate logic.

```csharp
// Static call; no instance required
GameEntity.Instantiate(scene, "example", false, false, "example");
```

### CallScriptCallbacks
`public void CallScriptCallbacks(bool registerScriptComponents)`

**Purpose:** Executes the CallScriptCallbacks logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.CallScriptCallbacks(false);
```

### Instantiate
`public static GameEntity Instantiate(Scene scene, string prefabName, MatrixFrame frame, bool callScriptCallbacks = true)`

**Purpose:** Executes the Instantiate logic.

```csharp
// Static call; no instance required
GameEntity.Instantiate(scene, "example", frame, false);
```

### InstantiateWithRestOffset
`public static GameEntity InstantiateWithRestOffset(Scene scene, string prefabName, bool createPhysics, MatrixFrame frame, float restOffset, bool callScriptCallbacks = true, string scriptInclusingTag = "")`

**Purpose:** Executes the InstantiateWithRestOffset logic.

```csharp
// Static call; no instance required
GameEntity.InstantiateWithRestOffset(scene, "example", false, frame, 0, false, "example");
```

### IsGhostObject
`public bool IsGhostObject()`

**Purpose:** Determines whether the this instance is in the ghost object state or condition.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.IsGhostObject();
```

### CreateAndAddScriptComponent
`public void CreateAndAddScriptComponent(string name, bool callScriptCallbacks)`

**Purpose:** Constructs a new and add script component entity and returns it to the caller.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.CreateAndAddScriptComponent("example", false);
```

### PrefabExists
`public static bool PrefabExists(string name)`

**Purpose:** Executes the PrefabExists logic.

```csharp
// Static call; no instance required
GameEntity.PrefabExists("example");
```

### RemoveScriptComponent
`public void RemoveScriptComponent(UIntPtr scriptComponent, int removeReason)`

**Purpose:** Removes script component from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RemoveScriptComponent(scriptComponent, 0);
```

### SetEntityEnvMapVisibility
`public void SetEntityEnvMapVisibility(bool value)`

**Purpose:** Assigns a new value to entity env map visibility and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetEntityEnvMapVisibility(false);
```

### HasScene
`public bool HasScene()`

**Purpose:** Determines whether the this instance already holds scene.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.HasScene();
```

### HasScriptComponent
`public bool HasScriptComponent(string scName)`

**Purpose:** Determines whether the this instance already holds script component.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.HasScriptComponent("example");
```

### GetScriptComponents
`public IEnumerable<ScriptComponentBehavior> GetScriptComponents()`

**Purpose:** Reads and returns the script components value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetScriptComponents();
```

### GetFirstChildEntityWithTag
`public GameEntity GetFirstChildEntityWithTag(string tag)`

**Purpose:** Reads and returns the first child entity with tag value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetFirstChildEntityWithTag("example");
```

### HasScriptOfType
`public bool HasScriptOfType(Type t)`

**Purpose:** Determines whether the this instance already holds script of type.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.HasScriptOfType(t);
```

### SetAlpha
`public void SetAlpha(float alpha)`

**Purpose:** Assigns a new value to alpha and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetAlpha(0);
```

### SetVisibilityExcludeParents
`public void SetVisibilityExcludeParents(bool visible)`

**Purpose:** Assigns a new value to visibility exclude parents and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetVisibilityExcludeParents(false);
```

### SetReadyToRender
`public void SetReadyToRender(bool ready)`

**Purpose:** Assigns a new value to ready to render and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetReadyToRender(false);
```

### GetVisibilityExcludeParents
`public bool GetVisibilityExcludeParents()`

**Purpose:** Reads and returns the visibility exclude parents value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetVisibilityExcludeParents();
```

### IsVisibleIncludeParents
`public bool IsVisibleIncludeParents()`

**Purpose:** Determines whether the this instance is in the visible include parents state or condition.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.IsVisibleIncludeParents();
```

### GetVisibilityLevelMaskIncludingParents
`public uint GetVisibilityLevelMaskIncludingParents()`

**Purpose:** Reads and returns the visibility level mask including parents value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetVisibilityLevelMaskIncludingParents();
```

### GetEditModeLevelVisibility
`public bool GetEditModeLevelVisibility()`

**Purpose:** Reads and returns the edit mode level visibility value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetEditModeLevelVisibility();
```

### Remove
`public void Remove(int removeReason)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.Remove(0);
```

### CopyFromPrefab
`public static GameEntity CopyFromPrefab(GameEntity prefab)`

**Purpose:** Copies the from prefab state of the this instance to a target.

```csharp
// Static call; no instance required
GameEntity.CopyFromPrefab(prefab);
```

### CopyFromPrefab
`public static GameEntity CopyFromPrefab(WeakGameEntity prefab)`

**Purpose:** Copies the from prefab state of the this instance to a target.

```csharp
// Static call; no instance required
GameEntity.CopyFromPrefab(prefab);
```

### SetUpgradeLevelMask
`public void SetUpgradeLevelMask(UpgradeLevelMask mask)`

**Purpose:** Assigns a new value to upgrade level mask and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetUpgradeLevelMask(mask);
```

### GetUpgradeLevelMask
`public UpgradeLevelMask GetUpgradeLevelMask()`

**Purpose:** Reads and returns the upgrade level mask value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetUpgradeLevelMask();
```

### GetUpgradeLevelMaskCumulative
`public UpgradeLevelMask GetUpgradeLevelMaskCumulative()`

**Purpose:** Reads and returns the upgrade level mask cumulative value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetUpgradeLevelMaskCumulative();
```

### GetUpgradeLevelOfEntity
`public int GetUpgradeLevelOfEntity()`

**Purpose:** Reads and returns the upgrade level of entity value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetUpgradeLevelOfEntity();
```

### GetOldPrefabName
`public string GetOldPrefabName()`

**Purpose:** Reads and returns the old prefab name value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetOldPrefabName();
```

### GetPrefabName
`public string GetPrefabName()`

**Purpose:** Reads and returns the prefab name value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetPrefabName();
```

### CopyScriptComponentFromAnotherEntity
`public void CopyScriptComponentFromAnotherEntity(GameEntity otherEntity, string scriptName)`

**Purpose:** Copies the script component from another entity state of the this instance to a target.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.CopyScriptComponentFromAnotherEntity(otherEntity, "example");
```

### SetFrame
`public void SetFrame(ref MatrixFrame frame, bool isTeleportation = true)`

**Purpose:** Assigns a new value to frame and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetFrame(frame, false);
```

### SetLocalFrame
`public void SetLocalFrame(ref MatrixFrame frame, bool isTeleportation)`

**Purpose:** Assigns a new value to local frame and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetLocalFrame(frame, false);
```

### SetClothComponentKeepState
`public void SetClothComponentKeepState(MetaMesh metaMesh, bool state)`

**Purpose:** Assigns a new value to cloth component keep state and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetClothComponentKeepState(metaMesh, false);
```

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool state)`

**Purpose:** Assigns a new value to cloth component keep state of all meshes and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetClothComponentKeepStateOfAllMeshes(false);
```

### SetPreviousFrameInvalid
`public void SetPreviousFrameInvalid()`

**Purpose:** Assigns a new value to previous frame invalid and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetPreviousFrameInvalid();
```

### GetFrame
`public MatrixFrame GetFrame()`

**Purpose:** Reads and returns the frame value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetFrame();
```

### GetLocalFrame
`public void GetLocalFrame(out MatrixFrame frame)`

**Purpose:** Reads and returns the local frame value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.GetLocalFrame(frame);
```

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**Purpose:** Reads and returns the local frame value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetLocalFrame();
```

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame()`

**Purpose:** Reads and returns the global frame value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalFrame();
```

### GetGlobalFrameImpreciseForFixedTick
`public MatrixFrame GetGlobalFrameImpreciseForFixedTick()`

**Purpose:** Reads and returns the global frame imprecise for fixed tick value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalFrameImpreciseForFixedTick();
```

### ComputePreciseGlobalFrameForFixedTickSlow
`public MatrixFrame ComputePreciseGlobalFrameForFixedTickSlow()`

**Purpose:** Executes the ComputePreciseGlobalFrameForFixedTickSlow logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.ComputePreciseGlobalFrameForFixedTickSlow();
```

### SetGlobalFrame
`public void SetGlobalFrame(in MatrixFrame frame, bool isTeleportation = true)`

**Purpose:** Assigns a new value to global frame and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetGlobalFrame(frame, false);
```

### GetPreviousGlobalFrame
`public MatrixFrame GetPreviousGlobalFrame()`

**Purpose:** Reads and returns the previous global frame value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetPreviousGlobalFrame();
```

### GetBodyWorldTransform
`public MatrixFrame GetBodyWorldTransform()`

**Purpose:** Reads and returns the body world transform value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetBodyWorldTransform();
```

### GetBodyVisualWorldTransform
`public MatrixFrame GetBodyVisualWorldTransform()`

**Purpose:** Reads and returns the body visual world transform value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetBodyVisualWorldTransform();
```

### SetLocalPosition
`public void SetLocalPosition(Vec3 position)`

**Purpose:** Assigns a new value to local position and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetLocalPosition(position);
```

### UpdateTriadFrameForEditor
`public void UpdateTriadFrameForEditor()`

**Purpose:** Recalculates and stores the latest representation of triad frame for editor.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.UpdateTriadFrameForEditor();
```

### UpdateTriadFrameForEditorForAllChildren
`public void UpdateTriadFrameForEditorForAllChildren()`

**Purpose:** Recalculates and stores the latest representation of triad frame for editor for all children.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.UpdateTriadFrameForEditorForAllChildren();
```

### GetPhysicsMaterial
`public PhysicsMaterial GetPhysicsMaterial()`

**Purpose:** Reads and returns the physics material value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetPhysicsMaterial();
```

### SetBodyFlags
`public void SetBodyFlags(BodyFlags bodyFlags)`

**Purpose:** Assigns a new value to body flags and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetBodyFlags(bodyFlags);
```

### SetBodyFlagsRecursive
`public void SetBodyFlagsRecursive(BodyFlags bodyFlags)`

**Purpose:** Assigns a new value to body flags recursive and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetBodyFlagsRecursive(bodyFlags);
```

### AddBodyFlags
`public void AddBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)`

**Purpose:** Adds body flags to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddBodyFlags(bodyFlags, false);
```

### RemoveBodyFlags
`public void RemoveBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)`

**Purpose:** Removes body flags from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RemoveBodyFlags(bodyFlags, false);
```

### GetGlobalScale
`public Vec3 GetGlobalScale()`

**Purpose:** Reads and returns the global scale value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalScale();
```

### GetLocalScale
`public Vec3 GetLocalScale()`

**Purpose:** Reads and returns the local scale value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetLocalScale();
```

### SetAnimationSoundActivation
`public void SetAnimationSoundActivation(bool activate)`

**Purpose:** Assigns a new value to animation sound activation and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetAnimationSoundActivation(false);
```

### CopyComponentsToSkeleton
`public void CopyComponentsToSkeleton()`

**Purpose:** Copies the components to skeleton state of the this instance to a target.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.CopyComponentsToSkeleton();
```

### AddMeshToBone
`public void AddMeshToBone(sbyte boneIndex, Mesh mesh)`

**Purpose:** Adds mesh to bone to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddMeshToBone(0, mesh);
```

### ActivateRagdoll
`public void ActivateRagdoll()`

**Purpose:** Activates the resource, state, or feature associated with ragdoll.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.ActivateRagdoll();
```

### PauseSkeletonAnimation
`public void PauseSkeletonAnimation()`

**Purpose:** Executes the PauseSkeletonAnimation logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.PauseSkeletonAnimation();
```

### ResumeSkeletonAnimation
`public void ResumeSkeletonAnimation()`

**Purpose:** Executes the ResumeSkeletonAnimation logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.ResumeSkeletonAnimation();
```

### IsSkeletonAnimationPaused
`public bool IsSkeletonAnimationPaused()`

**Purpose:** Determines whether the this instance is in the skeleton animation paused state or condition.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.IsSkeletonAnimationPaused();
```

### GetBoneCount
`public sbyte GetBoneCount()`

**Purpose:** Reads and returns the bone count value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetBoneCount();
```

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)`

**Purpose:** Reads and returns the water level at position value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetWaterLevelAtPosition(position, false, false);
```

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)`

**Purpose:** Reads and returns the bone entitial frame with index value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetBoneEntitialFrameWithIndex(0);
```

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName)`

**Purpose:** Reads and returns the bone entitial frame with name value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetBoneEntitialFrameWithName("example");
```

### AddTag
`public void AddTag(string tag)`

**Purpose:** Adds tag to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddTag("example");
```

### RemoveTag
`public void RemoveTag(string tag)`

**Purpose:** Removes tag from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RemoveTag("example");
```

### HasTag
`public bool HasTag(string tag)`

**Purpose:** Determines whether the this instance already holds tag.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.HasTag("example");
```

### AddChild
`public void AddChild(GameEntity gameEntity, bool autoLocalizeFrame = false)`

**Purpose:** Adds child to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddChild(gameEntity, false);
```

### RemoveChild
`public void RemoveChild(GameEntity childEntity, bool keepPhysics, bool keepScenePointer, bool callScriptCallbacks, int removeReason)`

**Purpose:** Removes child from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RemoveChild(childEntity, false, false, false, 0);
```

### BreakPrefab
`public void BreakPrefab()`

**Purpose:** Executes the BreakPrefab logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.BreakPrefab();
```

### GetChild
`public GameEntity GetChild(int index)`

**Purpose:** Reads and returns the child value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetChild(0);
```

### HasComplexAnimTree
`public bool HasComplexAnimTree()`

**Purpose:** Determines whether the this instance already holds complex anim tree.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.HasComplexAnimTree();
```

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh, bool updateVisMask = true)`

**Purpose:** Adds multi mesh to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddMultiMesh(metaMesh, false);
```

### RemoveMultiMesh
`public bool RemoveMultiMesh(MetaMesh metaMesh)`

**Purpose:** Removes multi mesh from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.RemoveMultiMesh(metaMesh);
```

### GetComponentCount
`public int GetComponentCount(ComponentType componentType)`

**Purpose:** Reads and returns the component count value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetComponentCount(componentType);
```

### AddAllMeshesOfGameEntity
`public void AddAllMeshesOfGameEntity(GameEntity gameEntity)`

**Purpose:** Adds all meshes of game entity to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddAllMeshesOfGameEntity(gameEntity);
```

### SetFrameChanged
`public void SetFrameChanged()`

**Purpose:** Assigns a new value to frame changed and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetFrameChanged();
```

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(int index, ComponentType componentType)`

**Purpose:** Reads and returns the component at index value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetComponentAtIndex(0, componentType);
```

### GetMetaMesh
`public MetaMesh GetMetaMesh(int metaMeshIndex)`

**Purpose:** Reads and returns the meta mesh value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetMetaMesh(0);
```

### GetClothSimulator
`public ClothSimulatorComponent GetClothSimulator(int clothSimulatorIndex)`

**Purpose:** Reads and returns the cloth simulator value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetClothSimulator(0);
```

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Assigns a new value to vector argument and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetVectorArgument(0, 0, 0, 0);
```

### SetMaterialForAllMeshes
`public void SetMaterialForAllMeshes(Material material)`

**Purpose:** Assigns a new value to material for all meshes and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetMaterialForAllMeshes(material);
```

### AddLight
`public bool AddLight(Light light)`

**Purpose:** Adds light to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.AddLight(light);
```

### GetLight
`public Light GetLight()`

**Purpose:** Reads and returns the light value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetLight();
```

### AddParticleSystemComponent
`public void AddParticleSystemComponent(string particleid)`

**Purpose:** Adds particle system component to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddParticleSystemComponent("example");
```

### RemoveAllParticleSystems
`public void RemoveAllParticleSystems()`

**Purpose:** Removes all particle systems from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RemoveAllParticleSystems();
```

### CheckPointWithOrientedBoundingBox
`public bool CheckPointWithOrientedBoundingBox(Vec3 point)`

**Purpose:** Verifies whether point with oriented bounding box holds true for the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.CheckPointWithOrientedBoundingBox(point);
```

### PauseParticleSystem
`public void PauseParticleSystem(bool doChildren)`

**Purpose:** Executes the PauseParticleSystem logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.PauseParticleSystem(false);
```

### ResumeParticleSystem
`public void ResumeParticleSystem(bool doChildren)`

**Purpose:** Executes the ResumeParticleSystem logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.ResumeParticleSystem(false);
```

### BurstEntityParticle
`public void BurstEntityParticle(bool doChildren)`

**Purpose:** Executes the BurstEntityParticle logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.BurstEntityParticle(false);
```

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float emissionRateMultiplier)`

**Purpose:** Assigns a new value to runtime emission rate multiplier and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetRuntimeEmissionRateMultiplier(0);
```

### GetLocalBoundingBox
`public BoundingBox GetLocalBoundingBox()`

**Purpose:** Reads and returns the local bounding box value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetLocalBoundingBox();
```

### GetGlobalBoundingBox
`public BoundingBox GetGlobalBoundingBox()`

**Purpose:** Reads and returns the global bounding box value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalBoundingBox();
```

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin()`

**Purpose:** Reads and returns the bounding box min value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetBoundingBoxMin();
```

### SetHasCustomBoundingBoxValidationSystem
`public void SetHasCustomBoundingBoxValidationSystem(bool hasCustomBoundingBox)`

**Purpose:** Assigns a new value to has custom bounding box validation system and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetHasCustomBoundingBoxValidationSystem(false);
```

### ValidateBoundingBox
`public void ValidateBoundingBox()`

**Purpose:** Checks whether bounding box satisfies the required constraints, usually returning a boolean.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.ValidateBoundingBox();
```

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax()`

**Purpose:** Reads and returns the bounding box max value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetBoundingBoxMax();
```

### UpdateGlobalBounds
`public void UpdateGlobalBounds()`

**Purpose:** Recalculates and stores the latest representation of global bounds.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.UpdateGlobalBounds();
```

### RecomputeBoundingBox
`public void RecomputeBoundingBox()`

**Purpose:** Recomputes bounding box and returns the result.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RecomputeBoundingBox();
```

### GetBoundingBoxRadius
`public float GetBoundingBoxRadius()`

**Purpose:** Reads and returns the bounding box radius value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetBoundingBoxRadius();
```

### SetBoundingboxDirty
`public void SetBoundingboxDirty()`

**Purpose:** Assigns a new value to boundingbox dirty and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetBoundingboxDirty();
```

### SetContourColor
`public void SetContourColor(uint? color, bool alwaysVisible = true)`

**Purpose:** Assigns a new value to contour color and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetContourColor(0, false);
```

### GetHasFrameChanged
`public bool GetHasFrameChanged()`

**Purpose:** Reads and returns the has frame changed value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetHasFrameChanged();
```

### GetFirstMesh
`public Mesh GetFirstMesh()`

**Purpose:** Reads and returns the first mesh value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetFirstMesh();
```

### GetAttachedNavmeshFaceCount
`public int GetAttachedNavmeshFaceCount()`

**Purpose:** Reads and returns the attached navmesh face count value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetAttachedNavmeshFaceCount();
```

### GetAttachedNavmeshFaceRecords
`public void GetAttachedNavmeshFaceRecords(PathFaceRecord faceRecords)`

**Purpose:** Reads and returns the attached navmesh face records value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.GetAttachedNavmeshFaceRecords(faceRecords);
```

### SetExternalReferencesUsage
`public void SetExternalReferencesUsage(bool value)`

**Purpose:** Assigns a new value to external references usage and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetExternalReferencesUsage(false);
```

### SetMorphFrameOfComponents
`public void SetMorphFrameOfComponents(float value)`

**Purpose:** Assigns a new value to morph frame of components and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetMorphFrameOfComponents(0);
```

### AddEditDataUserToAllMeshes
`public void AddEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)`

**Purpose:** Adds edit data user to all meshes to the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AddEditDataUserToAllMeshes(false, false);
```

### ReleaseEditDataUserToAllMeshes
`public void ReleaseEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)`

**Purpose:** Executes the ReleaseEditDataUserToAllMeshes logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.ReleaseEditDataUserToAllMeshes(false, false);
```

### GetCameraParamsFromCameraScript
`public void GetCameraParamsFromCameraScript(Camera cam, ref Vec3 dofParams)`

**Purpose:** Reads and returns the camera params from camera script value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.GetCameraParamsFromCameraScript(cam, dofParams);
```

### GetMeshBendedFrame
`public void GetMeshBendedFrame(MatrixFrame worldSpacePosition, ref MatrixFrame output)`

**Purpose:** Reads and returns the mesh bended frame value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.GetMeshBendedFrame(worldSpacePosition, output);
```

### ComputeTrajectoryVolume
`public void ComputeTrajectoryVolume(float missileSpeed, float verticalAngleMaxInDegrees, float verticalAngleMinInDegrees, float horizontalAngleRangeInDegrees, float airFrictionConstant)`

**Purpose:** Executes the ComputeTrajectoryVolume logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.ComputeTrajectoryVolume(0, 0, 0, 0, 0);
```

### SetAnimTreeChannelParameterForceUpdate
`public void SetAnimTreeChannelParameterForceUpdate(float phase, int channelNo)`

**Purpose:** Assigns a new value to anim tree channel parameter force update and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetAnimTreeChannelParameterForceUpdate(0, 0);
```

### ChangeMetaMeshOrRemoveItIfNotExists
`public void ChangeMetaMeshOrRemoveItIfNotExists(MetaMesh entityMetaMesh, MetaMesh newMetaMesh)`

**Purpose:** Executes the ChangeMetaMeshOrRemoveItIfNotExists logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.ChangeMetaMeshOrRemoveItIfNotExists(entityMetaMesh, newMetaMesh);
```

### SetUpdateValidtyOnFrameChangedOfFacesWithId
`public void SetUpdateValidtyOnFrameChangedOfFacesWithId(int faceGroupId, bool updateValidity)`

**Purpose:** Assigns a new value to update validty on frame changed of faces with id and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetUpdateValidtyOnFrameChangedOfFacesWithId(0, false);
```

### AttachNavigationMeshFaces
`public void AttachNavigationMeshFaces(int faceGroupId, bool isConnected, bool isBlocker = false, bool autoLocalize = false, bool finalizeBlockerConvexHullComputation = false, bool updateEntityFrame = true)`

**Purpose:** Executes the AttachNavigationMeshFaces logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.AttachNavigationMeshFaces(0, false, false, false, false, false);
```

### DetachAllAttachedNavigationMeshFaces
`public void DetachAllAttachedNavigationMeshFaces()`

**Purpose:** Executes the DetachAllAttachedNavigationMeshFaces logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.DetachAllAttachedNavigationMeshFaces();
```

### UpdateAttachedNavigationMeshFaces
`public void UpdateAttachedNavigationMeshFaces()`

**Purpose:** Recalculates and stores the latest representation of attached navigation mesh faces.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.UpdateAttachedNavigationMeshFaces();
```

### RemoveSkeleton
`public void RemoveSkeleton()`

**Purpose:** Removes skeleton from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RemoveSkeleton();
```

### RemoveAllChildren
`public void RemoveAllChildren()`

**Purpose:** Removes all children from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RemoveAllChildren();
```

### GetChildren
`public IEnumerable<GameEntity> GetChildren()`

**Purpose:** Reads and returns the children value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetChildren();
```

### GetEntityAndChildren
`public IEnumerable<GameEntity> GetEntityAndChildren()`

**Purpose:** Reads and returns the entity and children value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetEntityAndChildren();
```

### GetChildrenRecursive
`public void GetChildrenRecursive(ref List<GameEntity> children)`

**Purpose:** Reads and returns the children recursive value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.GetChildrenRecursive(children);
```

### GetChildrenWithTagRecursive
`public void GetChildrenWithTagRecursive(List<GameEntity> children, string tag)`

**Purpose:** Reads and returns the children with tag recursive value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.GetChildrenWithTagRecursive(children, "example");
```

### IsSelectedOnEditor
`public bool IsSelectedOnEditor()`

**Purpose:** Determines whether the this instance is in the selected on editor state or condition.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.IsSelectedOnEditor();
```

### SelectEntityOnEditor
`public void SelectEntityOnEditor()`

**Purpose:** Executes the SelectEntityOnEditor logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SelectEntityOnEditor();
```

### DeselectEntityOnEditor
`public void DeselectEntityOnEditor()`

**Purpose:** Executes the DeselectEntityOnEditor logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.DeselectEntityOnEditor();
```

### SetAsPredisplayEntity
`public void SetAsPredisplayEntity()`

**Purpose:** Assigns a new value to as predisplay entity and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetAsPredisplayEntity();
```

### RemoveFromPredisplayEntity
`public void RemoveFromPredisplayEntity()`

**Purpose:** Removes from predisplay entity from the current collection or state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RemoveFromPredisplayEntity();
```

### SetNativeScriptComponentVariable
`public void SetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)`

**Purpose:** Assigns a new value to native script component variable and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetNativeScriptComponentVariable("example", "example", data, variableType);
```

### SetManualGlobalBoundingBox
`public void SetManualGlobalBoundingBox(Vec3 boundingBoxStartGlobal, Vec3 boundingBoxEndGlobal)`

**Purpose:** Assigns a new value to manual global bounding box and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetManualGlobalBoundingBox(boundingBoxStartGlobal, boundingBoxEndGlobal);
```

### RayHitEntity
`public bool RayHitEntity(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref float resultLength)`

**Purpose:** Executes the RayHitEntity logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.RayHitEntity(rayOrigin, rayDirection, 0, resultLength);
```

### RayHitEntityWithNormal
`public bool RayHitEntityWithNormal(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref Vec3 resultNormal, ref float resultLength)`

**Purpose:** Executes the RayHitEntityWithNormal logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.RayHitEntityWithNormal(rayOrigin, rayDirection, 0, resultNormal, resultLength);
```

### GetNativeScriptComponentVariable
`public void GetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)`

**Purpose:** Reads and returns the native script component variable value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.GetNativeScriptComponentVariable("example", "example", data, variableType);
```

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPosition, Vec3 clipNormal, bool setForChildren)`

**Purpose:** Assigns a new value to custom clip plane and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetCustomClipPlane(clipPosition, clipNormal, false);
```

### GetBoundingBoxLongestHalfDimension
`public float GetBoundingBoxLongestHalfDimension()`

**Purpose:** Reads and returns the bounding box longest half dimension value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetBoundingBoxLongestHalfDimension();
```

### ComputeBoundingBoxFromLongestHalfDimension
`public BoundingBox ComputeBoundingBoxFromLongestHalfDimension(float longestHalfDimensionCoefficient)`

**Purpose:** Executes the ComputeBoundingBoxFromLongestHalfDimension logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.ComputeBoundingBoxFromLongestHalfDimension(0);
```

### ComputeBoundingBoxIncludeChildren
`public BoundingBox ComputeBoundingBoxIncludeChildren()`

**Purpose:** Executes the ComputeBoundingBoxIncludeChildren logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.ComputeBoundingBoxIncludeChildren();
```

### SetManualLocalBoundingBox
`public void SetManualLocalBoundingBox(in BoundingBox boundingBox)`

**Purpose:** Assigns a new value to manual local bounding box and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetManualLocalBoundingBox(boundingBox);
```

### RelaxLocalBoundingBox
`public void RelaxLocalBoundingBox(in BoundingBox boundingBox)`

**Purpose:** Executes the RelaxLocalBoundingBox logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.RelaxLocalBoundingBox(boundingBox);
```

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode)`

**Purpose:** Assigns a new value to cull mode and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetCullMode(cullMode);
```

### GetFirstChildEntityWithTagRecursive
`public GameEntity GetFirstChildEntityWithTagRecursive(string tag)`

**Purpose:** Reads and returns the first child entity with tag recursive value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetFirstChildEntityWithTagRecursive("example");
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetHashCode();
```

### SetDoNotCheckVisibility
`public void SetDoNotCheckVisibility(bool value)`

**Purpose:** Assigns a new value to do not check visibility and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetDoNotCheckVisibility(false);
```

### SetBoneFrameToAllMeshes
`public void SetBoneFrameToAllMeshes(int boneIndex, in MatrixFrame frame)`

**Purpose:** Assigns a new value to bone frame to all meshes and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetBoneFrameToAllMeshes(0, frame);
```

### GetGlobalWindStrengthVectorOfScene
`public Vec2 GetGlobalWindStrengthVectorOfScene()`

**Purpose:** Reads and returns the global wind strength vector of scene value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalWindStrengthVectorOfScene();
```

### GetGlobalWindVelocityOfScene
`public Vec2 GetGlobalWindVelocityOfScene()`

**Purpose:** Reads and returns the global wind velocity of scene value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetGlobalWindVelocityOfScene();
```

### GetLastFinalRenderCameraPositionOfScene
`public Vec3 GetLastFinalRenderCameraPositionOfScene()`

**Purpose:** Reads and returns the last final render camera position of scene value held by the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.GetLastFinalRenderCameraPositionOfScene();
```

### SetForceDecalsToRender
`public void SetForceDecalsToRender(bool value)`

**Purpose:** Assigns a new value to force decals to render and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetForceDecalsToRender(false);
```

### SetForceNotAffectedBySeason
`public void SetForceNotAffectedBySeason(bool value)`

**Purpose:** Assigns a new value to force not affected by season and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetForceNotAffectedBySeason(false);
```

### CheckIsPrefabLinkRootPrefab
`public bool CheckIsPrefabLinkRootPrefab(int depth)`

**Purpose:** Verifies whether is prefab link root prefab holds true for the this instance.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.CheckIsPrefabLinkRootPrefab(0);
```

### SetupAdditionalBoneBufferForMeshes
`public void SetupAdditionalBoneBufferForMeshes(int boneCount)`

**Purpose:** Assigns a new value to up additional bone buffer for meshes and updates the object's internal state.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SetupAdditionalBoneBufferForMeshes(0);
```

### CreatePhysxCookingInstance
`public static UIntPtr CreatePhysxCookingInstance()`

**Purpose:** Constructs a new physx cooking instance entity and returns it to the caller.

```csharp
// Static call; no instance required
GameEntity.CreatePhysxCookingInstance();
```

### DeletePhysxCookingInstance
`public static void DeletePhysxCookingInstance(UIntPtr pointer)`

**Purpose:** Executes the DeletePhysxCookingInstance logic.

```csharp
// Static call; no instance required
GameEntity.DeletePhysxCookingInstance(pointer);
```

### DeleteEmptyShape
`public void DeleteEmptyShape(UIntPtr shape1, UIntPtr shape2)`

**Purpose:** Executes the DeleteEmptyShape logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.DeleteEmptyShape(shape1, shape2);
```

### CreateEmptyPhysxShape
`public UIntPtr CreateEmptyPhysxShape(bool isVariable, int physxMaterialIndex)`

**Purpose:** Constructs a new empty physx shape entity and returns it to the caller.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
var result = gameEntity.CreateEmptyPhysxShape(false, 0);
```

### SwapPhysxShapeInEntity
`public void SwapPhysxShapeInEntity(UIntPtr oldShape, UIntPtr newShape, bool isVariable)`

**Purpose:** Executes the SwapPhysxShapeInEntity logic.

```csharp
// Obtain an instance of GameEntity from the subsystem API first
GameEntity gameEntity = ...;
gameEntity.SwapPhysxShapeInEntity(oldShape, newShape, false);
```

### CookTrianglePhysxMesh
`public static void CookTrianglePhysxMesh(UIntPtr cookingInstancePointer, UIntPtr shapePointer, UIntPtr quadPinnedPointer, int physicsMaterial, int numberOfVertices, UIntPtr indicesPinnedPointer, int numberOfIndices)`

**Purpose:** Executes the CookTrianglePhysxMesh logic.

```csharp
// Static call; no instance required
GameEntity.CookTrianglePhysxMesh(cookingInstancePointer, shapePointer, quadPinnedPointer, 0, 0, indicesPinnedPointer, 0);
```

## Usage Example

```csharp
GameEntity.CreateFromWeakEntity(weakEntity);
```

## See Also

- [Area Index](../)