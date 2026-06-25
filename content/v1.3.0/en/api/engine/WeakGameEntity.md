---
title: "WeakGameEntity"
description: "Auto-generated class reference for WeakGameEntity."
---
# WeakGameEntity

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct WeakGameEntity`
**Base:** none
**File:** `TaleWorlds.Engine/WeakGameEntity.cs`

## Overview

`WeakGameEntity` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Pointer` | `public UIntPtr Pointer { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Name` | `public string Name { get; }` |
| `Scene` | `public Scene Scene { get; }` |
| `EntityFlags` | `public EntityFlags EntityFlags { get; }` |
| `EntityVisibilityFlags` | `public EntityVisibilityFlags EntityVisibilityFlags { get; }` |
| `BodyFlag` | `public BodyFlags BodyFlag { get; }` |
| `PhysicsDescBodyFlag` | `public BodyFlags PhysicsDescBodyFlag { get; }` |
| `Mass` | `public float Mass { get; }` |
| `CenterOfMass` | `public Vec3 CenterOfMass { get; }` |
| `GlobalPosition` | `public Vec3 GlobalPosition { get; }` |
| `Tags` | `public string Tags { get; }` |
| `ChildCount` | `public int ChildCount { get; }` |
| `Parent` | `public WeakGameEntity Parent { get; }` |
| `Root` | `public WeakGameEntity Root { get; }` |
| `MultiMeshComponentCount` | `public int MultiMeshComponentCount { get; }` |
| `ClothSimulatorComponentCount` | `public int ClothSimulatorComponentCount { get; }` |
| `GlobalBoxMax` | `public Vec3 GlobalBoxMax { get; }` |
| `PhysicsGlobalBoxMax` | `public Vec3 PhysicsGlobalBoxMax { get; }` |
| `PhysicsGlobalBoxMin` | `public Vec3 PhysicsGlobalBoxMin { get; }` |
| `GlobalBoxMin` | `public Vec3 GlobalBoxMin { get; }` |
| `Skeleton` | `public Skeleton Skeleton { get; set; }` |

## Key Methods

### Invalidate
`public void Invalidate()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.Invalidate();
```

### GetScenePointer
`public UIntPtr GetScenePointer()`

**Purpose:** Reads and returns the `scene pointer` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetScenePointer();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.ToString();
```

### ClearEntityComponents
`public void ClearEntityComponents(bool resetAll, bool removeScripts, bool deleteChildEntities)`

**Purpose:** Removes all `entity components` from the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ClearEntityComponents(false, false, false);
```

### ClearComponents
`public void ClearComponents()`

**Purpose:** Removes all `components` from the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ClearComponents();
```

### ClearOnlyOwnComponents
`public void ClearOnlyOwnComponents()`

**Purpose:** Removes all `only own components` from the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ClearOnlyOwnComponents();
```

### CheckResources
`public bool CheckResources(bool addToQueue, bool checkFaceResources)`

**Purpose:** Verifies whether `resources` holds true for the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.CheckResources(false, false);
```

### SetMobility
`public void SetMobility(GameEntity.Mobility mobility)`

**Purpose:** Assigns a new value to `mobility` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetMobility(mobility);
```

### GetMobility
`public GameEntity.Mobility GetMobility()`

**Purpose:** Reads and returns the `mobility` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetMobility();
```

### AddMesh
`public void AddMesh(Mesh mesh, bool recomputeBoundingBox = true)`

**Purpose:** Adds `mesh` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddMesh(mesh, false);
```

### AddMultiMeshToSkeleton
`public void AddMultiMeshToSkeleton(MetaMesh metaMesh)`

**Purpose:** Adds `multi mesh to skeleton` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddMultiMeshToSkeleton(metaMesh);
```

### AddMultiMeshToSkeletonBone
`public void AddMultiMeshToSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)`

**Purpose:** Adds `multi mesh to skeleton bone` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddMultiMeshToSkeletonBone(metaMesh, 0);
```

### SetColorToAllMeshesWithTagRecursive
`public void SetColorToAllMeshesWithTagRecursive(uint color, string tag)`

**Purpose:** Assigns a new value to `color to all meshes with tag recursive` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetColorToAllMeshesWithTagRecursive(0, "example");
```

### GetAllMeshesWithTag
`public IEnumerable<Mesh> GetAllMeshesWithTag(string tag)`

**Purpose:** Reads and returns the `all meshes with tag` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetAllMeshesWithTag("example");
```

### SetName
`public void SetName(string name)`

**Purpose:** Assigns a new value to `name` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetName("example");
```

### SetEntityFlags
`public void SetEntityFlags(EntityFlags flags)`

**Purpose:** Assigns a new value to `entity flags` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetEntityFlags(flags);
```

### SetEntityVisibilityFlags
`public void SetEntityVisibilityFlags(EntityVisibilityFlags flags)`

**Purpose:** Assigns a new value to `entity visibility flags` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetEntityVisibilityFlags(flags);
```

### GetPhysicsMaterial
`public PhysicsMaterial GetPhysicsMaterial()`

**Purpose:** Reads and returns the `physics material` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetPhysicsMaterial();
```

### SetBodyFlags
`public void SetBodyFlags(BodyFlags flags)`

**Purpose:** Assigns a new value to `body flags` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetBodyFlags(flags);
```

### SetBodyFlagsRecursive
`public void SetBodyFlagsRecursive(BodyFlags bodyFlags)`

**Purpose:** Assigns a new value to `body flags recursive` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetBodyFlagsRecursive(bodyFlags);
```

### AddBodyFlags
`public void AddBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)`

**Purpose:** Adds `body flags` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddBodyFlags(bodyFlags, false);
```

### RemoveBodyFlags
`public void RemoveBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)`

**Purpose:** Removes `body flags` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RemoveBodyFlags(bodyFlags, false);
```

### SetLocalPosition
`public void SetLocalPosition(Vec3 position)`

**Purpose:** Assigns a new value to `local position` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetLocalPosition(position);
```

### SetGlobalPosition
`public void SetGlobalPosition(Vec3 position)`

**Purpose:** Assigns a new value to `global position` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetGlobalPosition(position);
```

### SetColor
`public void SetColor(uint color1, uint color2, string meshTag)`

**Purpose:** Assigns a new value to `color` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetColor(0, 0, "example");
```

### GetFactorColor
`public uint GetFactorColor()`

**Purpose:** Reads and returns the `factor color` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetFactorColor();
```

### SetFactorColor
`public void SetFactorColor(uint color)`

**Purpose:** Assigns a new value to `factor color` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetFactorColor(0);
```

### SetAsReplayEntity
`public void SetAsReplayEntity()`

**Purpose:** Assigns a new value to `as replay entity` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetAsReplayEntity();
```

### SetClothMaxDistanceMultiplier
`public void SetClothMaxDistanceMultiplier(float multiplier)`

**Purpose:** Assigns a new value to `cloth max distance multiplier` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetClothMaxDistanceMultiplier(0);
```

### RemoveMultiMeshFromSkeleton
`public void RemoveMultiMeshFromSkeleton(MetaMesh metaMesh)`

**Purpose:** Removes `multi mesh from skeleton` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RemoveMultiMeshFromSkeleton(metaMesh);
```

### RemoveMultiMeshFromSkeletonBone
`public void RemoveMultiMeshFromSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)`

**Purpose:** Removes `multi mesh from skeleton bone` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RemoveMultiMeshFromSkeletonBone(metaMesh, 0);
```

### RemoveComponentWithMesh
`public bool RemoveComponentWithMesh(Mesh mesh)`

**Purpose:** Removes `component with mesh` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.RemoveComponentWithMesh(mesh);
```

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**Purpose:** Adds `component` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddComponent(component);
```

### HasComponent
`public bool HasComponent(GameEntityComponent component)`

**Purpose:** Determines whether the current object already holds `component`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.HasComponent(component);
```

### IsInEditorScene
`public bool IsInEditorScene()`

**Purpose:** Determines whether the current object is in the `in editor scene` state or condition.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.IsInEditorScene();
```

### RemoveComponent
`public bool RemoveComponent(GameEntityComponent component)`

**Purpose:** Removes `component` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.RemoveComponent(component);
```

### GetGuid
`public string GetGuid()`

**Purpose:** Reads and returns the `guid` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetGuid();
```

### IsGuidValid
`public bool IsGuidValid()`

**Purpose:** Determines whether the current object is in the `guid valid` state or condition.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.IsGuidValid();
```

### SetEnforcedMaximumLodLevel
`public void SetEnforcedMaximumLodLevel(int lodLevel)`

**Purpose:** Assigns a new value to `enforced maximum lod level` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetEnforcedMaximumLodLevel(0);
```

### GetLodLevelForDistanceSq
`public float GetLodLevelForDistanceSq(float distSq)`

**Purpose:** Reads and returns the `lod level for distance sq` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetLodLevelForDistanceSq(0);
```

### GetQuickBoneEntitialFrame
`public void GetQuickBoneEntitialFrame(sbyte index, out MatrixFrame frame)`

**Purpose:** Reads and returns the `quick bone entitial frame` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.GetQuickBoneEntitialFrame(0, frame);
```

### UpdateVisibilityMask
`public void UpdateVisibilityMask()`

**Purpose:** Recalculates and stores the latest representation of `visibility mask`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.UpdateVisibilityMask();
```

### CallScriptCallbacks
`public void CallScriptCallbacks(bool registerScriptComponents)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.CallScriptCallbacks(false);
```

### IsGhostObject
`public bool IsGhostObject()`

**Purpose:** Determines whether the current object is in the `ghost object` state or condition.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.IsGhostObject();
```

### CreateAndAddScriptComponent
`public void CreateAndAddScriptComponent(string name, bool callScriptCallbacks)`

**Purpose:** Constructs a new `and add script component` entity and returns it to the caller.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.CreateAndAddScriptComponent("example", false);
```

### RemoveScriptComponent
`public void RemoveScriptComponent(UIntPtr scriptComponent, int removeReason)`

**Purpose:** Removes `script component` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RemoveScriptComponent(scriptComponent, 0);
```

### SetEntityEnvMapVisibility
`public void SetEntityEnvMapVisibility(bool value)`

**Purpose:** Assigns a new value to `entity env map visibility` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetEntityEnvMapVisibility(false);
```

### HasScene
`public bool HasScene()`

**Purpose:** Determines whether the current object already holds `scene`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.HasScene();
```

### HasScriptComponent
`public bool HasScriptComponent(string scName)`

**Purpose:** Determines whether the current object already holds `script component`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.HasScriptComponent("example");
```

### GetScriptComponents
`public IEnumerable<ScriptComponentBehavior> GetScriptComponents()`

**Purpose:** Reads and returns the `script components` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetScriptComponents();
```

### HasScriptOfType
`public bool HasScriptOfType(Type t)`

**Purpose:** Determines whether the current object already holds `script of type`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.HasScriptOfType(t);
```

### GetFirstChildEntityWithTag
`public WeakGameEntity GetFirstChildEntityWithTag(string tag)`

**Purpose:** Reads and returns the `first child entity with tag` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetFirstChildEntityWithTag("example");
```

### SetAlpha
`public void SetAlpha(float alpha)`

**Purpose:** Assigns a new value to `alpha` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetAlpha(0);
```

### SetVisibilityExcludeParents
`public void SetVisibilityExcludeParents(bool visible)`

**Purpose:** Assigns a new value to `visibility exclude parents` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetVisibilityExcludeParents(false);
```

### SetReadyToRender
`public void SetReadyToRender(bool ready)`

**Purpose:** Assigns a new value to `ready to render` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetReadyToRender(false);
```

### GetVisibilityExcludeParents
`public bool GetVisibilityExcludeParents()`

**Purpose:** Reads and returns the `visibility exclude parents` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetVisibilityExcludeParents();
```

### IsVisibleIncludeParents
`public bool IsVisibleIncludeParents()`

**Purpose:** Determines whether the current object is in the `visible include parents` state or condition.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.IsVisibleIncludeParents();
```

### GetVisibilityLevelMaskIncludingParents
`public uint GetVisibilityLevelMaskIncludingParents()`

**Purpose:** Reads and returns the `visibility level mask including parents` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetVisibilityLevelMaskIncludingParents();
```

### GetEditModeLevelVisibility
`public bool GetEditModeLevelVisibility()`

**Purpose:** Reads and returns the `edit mode level visibility` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetEditModeLevelVisibility();
```

### Remove
`public void Remove(int removeReason)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.Remove(0);
```

### SetUpgradeLevelMask
`public void SetUpgradeLevelMask(GameEntity.UpgradeLevelMask mask)`

**Purpose:** Assigns a new value to `upgrade level mask` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetUpgradeLevelMask(mask);
```

### GetUpgradeLevelMask
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMask()`

**Purpose:** Reads and returns the `upgrade level mask` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetUpgradeLevelMask();
```

### GetUpgradeLevelMaskCumulative
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMaskCumulative()`

**Purpose:** Reads and returns the `upgrade level mask cumulative` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetUpgradeLevelMaskCumulative();
```

### GetUpgradeLevelOfEntity
`public int GetUpgradeLevelOfEntity()`

**Purpose:** Reads and returns the `upgrade level of entity` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetUpgradeLevelOfEntity();
```

### GetOldPrefabName
`public string GetOldPrefabName()`

**Purpose:** Reads and returns the `old prefab name` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetOldPrefabName();
```

### GetPrefabName
`public string GetPrefabName()`

**Purpose:** Reads and returns the `prefab name` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetPrefabName();
```

### RefreshMeshesToRenderToHullWater
`public void RefreshMeshesToRenderToHullWater(UIntPtr visualRecord, string entityTag)`

**Purpose:** Keeps the display or cache of `meshes to render to hull water` in sync with the underlying state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RefreshMeshesToRenderToHullWater(visualRecord, "example");
```

### SetVisualRecordWakeParams
`public void SetVisualRecordWakeParams(UIntPtr visualRecord, Vec3 wakeParams)`

**Purpose:** Assigns a new value to `visual record wake params` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetVisualRecordWakeParams(visualRecord, wakeParams);
```

### ChangeResolutionMultiplierOfWaterVisual
`public void ChangeResolutionMultiplierOfWaterVisual(UIntPtr visualRecord, float multiplier, in Vec3 waterEffectsBB)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ChangeResolutionMultiplierOfWaterVisual(visualRecord, 0, waterEffectsBB);
```

### ResetHullWater
`public void ResetHullWater(UIntPtr visualRecord)`

**Purpose:** Returns `hull water` to its default or initial condition.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ResetHullWater(visualRecord);
```

### SetWaterVisualRecordFrameAndDt
`public void SetWaterVisualRecordFrameAndDt(UIntPtr visualRecord, MatrixFrame frame, float dt)`

**Purpose:** Assigns a new value to `water visual record frame and dt` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetWaterVisualRecordFrameAndDt(visualRecord, frame, 0);
```

### AddSplashPositionToWaterVisualRecord
`public void AddSplashPositionToWaterVisualRecord(UIntPtr visualRecord, Vec3 position)`

**Purpose:** Adds `splash position to water visual record` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddSplashPositionToWaterVisualRecord(visualRecord, position);
```

### UpdateHullWaterEffectFrames
`public void UpdateHullWaterEffectFrames(UIntPtr visualRecord)`

**Purpose:** Recalculates and stores the latest representation of `hull water effect frames`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.UpdateHullWaterEffectFrames(visualRecord);
```

### CopyScriptComponentFromAnotherEntity
`public void CopyScriptComponentFromAnotherEntity(GameEntity otherEntity, string scriptName)`

**Purpose:** Copies the `script component from another entity` state of the current object to a target.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.CopyScriptComponentFromAnotherEntity(otherEntity, "example");
```

### SetFrame
`public void SetFrame(ref MatrixFrame frame, bool isTeleportation = true)`

**Purpose:** Assigns a new value to `frame` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetFrame(frame, false);
```

### SetLocalFrame
`public void SetLocalFrame(ref MatrixFrame frame, bool isTeleportation = true)`

**Purpose:** Assigns a new value to `local frame` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetLocalFrame(frame, false);
```

### SetClothComponentKeepState
`public void SetClothComponentKeepState(MetaMesh metaMesh, bool state)`

**Purpose:** Assigns a new value to `cloth component keep state` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetClothComponentKeepState(metaMesh, false);
```

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool state)`

**Purpose:** Assigns a new value to `cloth component keep state of all meshes` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetClothComponentKeepStateOfAllMeshes(false);
```

### SetPreviousFrameInvalid
`public void SetPreviousFrameInvalid()`

**Purpose:** Assigns a new value to `previous frame invalid` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetPreviousFrameInvalid();
```

### GetFrame
`public MatrixFrame GetFrame()`

**Purpose:** Reads and returns the `frame` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetFrame();
```

### GetLocalFrame
`public void GetLocalFrame(out MatrixFrame frame)`

**Purpose:** Reads and returns the `local frame` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.GetLocalFrame(frame);
```

### HasBatchedKinematicPhysicsFlag
`public bool HasBatchedKinematicPhysicsFlag()`

**Purpose:** Determines whether the current object already holds `batched kinematic physics flag`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.HasBatchedKinematicPhysicsFlag();
```

### HasBatchedRayCastPhysicsFlag
`public bool HasBatchedRayCastPhysicsFlag()`

**Purpose:** Determines whether the current object already holds `batched ray cast physics flag`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.HasBatchedRayCastPhysicsFlag();
```

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**Purpose:** Reads and returns the `local frame` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetLocalFrame();
```

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame()`

**Purpose:** Reads and returns the `global frame` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetGlobalFrame();
```

### SetWaterSDFClipData
`public void SetWaterSDFClipData(int slotIndex, in MatrixFrame frame, bool visibility)`

**Purpose:** Assigns a new value to `water s d f clip data` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetWaterSDFClipData(0, frame, false);
```

### RegisterWaterSDFClip
`public int RegisterWaterSDFClip(Texture sdfTexture)`

**Purpose:** Registers `water s d f clip` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.RegisterWaterSDFClip(sdfTexture);
```

### DeRegisterWaterSDFClip
`public void DeRegisterWaterSDFClip(int slot)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.DeRegisterWaterSDFClip(0);
```

### GetGlobalFrameImpreciseForFixedTick
`public MatrixFrame GetGlobalFrameImpreciseForFixedTick()`

**Purpose:** Reads and returns the `global frame imprecise for fixed tick` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetGlobalFrameImpreciseForFixedTick();
```

### ComputePreciseGlobalFrameForFixedTickSlow
`public MatrixFrame ComputePreciseGlobalFrameForFixedTickSlow()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.ComputePreciseGlobalFrameForFixedTickSlow();
```

### SetGlobalFrame
`public void SetGlobalFrame(in MatrixFrame frame, bool isTeleportation = true)`

**Purpose:** Assigns a new value to `global frame` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetGlobalFrame(frame, false);
```

### GetPreviousGlobalFrame
`public MatrixFrame GetPreviousGlobalFrame()`

**Purpose:** Reads and returns the `previous global frame` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetPreviousGlobalFrame();
```

### GetBodyWorldTransform
`public MatrixFrame GetBodyWorldTransform()`

**Purpose:** Reads and returns the `body world transform` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetBodyWorldTransform();
```

### UpdateTriadFrameForEditor
`public void UpdateTriadFrameForEditor()`

**Purpose:** Recalculates and stores the latest representation of `triad frame for editor`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.UpdateTriadFrameForEditor();
```

### UpdateTriadFrameForEditorForAllChildren
`public void UpdateTriadFrameForEditorForAllChildren()`

**Purpose:** Recalculates and stores the latest representation of `triad frame for editor for all children`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.UpdateTriadFrameForEditorForAllChildren();
```

### GetGlobalScale
`public Vec3 GetGlobalScale()`

**Purpose:** Reads and returns the `global scale` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetGlobalScale();
```

### GetLocalScale
`public Vec3 GetLocalScale()`

**Purpose:** Reads and returns the `local scale` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetLocalScale();
```

### SetAnimationSoundActivation
`public void SetAnimationSoundActivation(bool activate)`

**Purpose:** Assigns a new value to `animation sound activation` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetAnimationSoundActivation(false);
```

### CopyComponentsToSkeleton
`public void CopyComponentsToSkeleton()`

**Purpose:** Copies the `components to skeleton` state of the current object to a target.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.CopyComponentsToSkeleton();
```

### AddMeshToBone
`public void AddMeshToBone(sbyte boneIndex, Mesh mesh)`

**Purpose:** Adds `mesh to bone` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddMeshToBone(0, mesh);
```

### ActivateRagdoll
`public void ActivateRagdoll()`

**Purpose:** Activates the resource, state, or feature associated with `ragdoll`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ActivateRagdoll();
```

### PauseSkeletonAnimation
`public void PauseSkeletonAnimation()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.PauseSkeletonAnimation();
```

### ResumeSkeletonAnimation
`public void ResumeSkeletonAnimation()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ResumeSkeletonAnimation();
```

### IsSkeletonAnimationPaused
`public bool IsSkeletonAnimationPaused()`

**Purpose:** Determines whether the current object is in the `skeleton animation paused` state or condition.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.IsSkeletonAnimationPaused();
```

### GetBoneCount
`public sbyte GetBoneCount()`

**Purpose:** Reads and returns the `bone count` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetBoneCount();
```

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)`

**Purpose:** Reads and returns the `water level at position` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetWaterLevelAtPosition(position, false, false);
```

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)`

**Purpose:** Reads and returns the `bone entitial frame with index` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetBoneEntitialFrameWithIndex(0);
```

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName)`

**Purpose:** Reads and returns the `bone entitial frame with name` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetBoneEntitialFrameWithName("example");
```

### AddTag
`public void AddTag(string tag)`

**Purpose:** Adds `tag` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddTag("example");
```

### RemoveTag
`public void RemoveTag(string tag)`

**Purpose:** Removes `tag` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RemoveTag("example");
```

### HasTag
`public bool HasTag(string tag)`

**Purpose:** Determines whether the current object already holds `tag`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.HasTag("example");
```

### AddChild
`public void AddChild(WeakGameEntity gameEntity, bool autoLocalizeFrame = false)`

**Purpose:** Adds `child` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddChild(gameEntity, false);
```

### RemoveChild
`public void RemoveChild(WeakGameEntity childEntity, bool keepPhysics, bool keepScenePointer, bool callScriptCallbacks, int removeReason)`

**Purpose:** Removes `child` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RemoveChild(childEntity, false, false, false, 0);
```

### BreakPrefab
`public void BreakPrefab()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.BreakPrefab();
```

### GetChild
`public WeakGameEntity GetChild(int index)`

**Purpose:** Reads and returns the `child` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetChild(0);
```

### HasComplexAnimTree
`public bool HasComplexAnimTree()`

**Purpose:** Determines whether the current object already holds `complex anim tree`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.HasComplexAnimTree();
```

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh, bool updateVisMask = true)`

**Purpose:** Adds `multi mesh` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddMultiMesh(metaMesh, false);
```

### RemoveMultiMesh
`public bool RemoveMultiMesh(MetaMesh metaMesh)`

**Purpose:** Removes `multi mesh` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.RemoveMultiMesh(metaMesh);
```

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType)`

**Purpose:** Reads and returns the `component count` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetComponentCount(componentType);
```

### AddAllMeshesOfGameEntity
`public void AddAllMeshesOfGameEntity(GameEntity gameEntity)`

**Purpose:** Adds `all meshes of game entity` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddAllMeshesOfGameEntity(gameEntity);
```

### SetFrameChanged
`public void SetFrameChanged()`

**Purpose:** Assigns a new value to `frame changed` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetFrameChanged();
```

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(int index, GameEntity.ComponentType componentType)`

**Purpose:** Reads and returns the `component at index` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetComponentAtIndex(0, componentType);
```

### GetMetaMesh
`public MetaMesh GetMetaMesh(int metaMeshIndex)`

**Purpose:** Reads and returns the `meta mesh` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetMetaMesh(0);
```

### GetClothSimulator
`public ClothSimulatorComponent GetClothSimulator(int clothSimulatorIndex)`

**Purpose:** Reads and returns the `cloth simulator` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetClothSimulator(0);
```

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Assigns a new value to `vector argument` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetVectorArgument(0, 0, 0, 0);
```

### SetMaterialForAllMeshes
`public void SetMaterialForAllMeshes(Material material)`

**Purpose:** Assigns a new value to `material for all meshes` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetMaterialForAllMeshes(material);
```

### AddLight
`public bool AddLight(Light light)`

**Purpose:** Adds `light` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.AddLight(light);
```

### GetLight
`public Light GetLight()`

**Purpose:** Reads and returns the `light` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetLight();
```

### AddParticleSystemComponent
`public void AddParticleSystemComponent(string particleid)`

**Purpose:** Adds `particle system component` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddParticleSystemComponent("example");
```

### RemoveAllParticleSystems
`public void RemoveAllParticleSystems()`

**Purpose:** Removes `all particle systems` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RemoveAllParticleSystems();
```

### CheckPointWithOrientedBoundingBox
`public bool CheckPointWithOrientedBoundingBox(Vec3 point)`

**Purpose:** Verifies whether `point with oriented bounding box` holds true for the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.CheckPointWithOrientedBoundingBox(point);
```

### PauseParticleSystem
`public void PauseParticleSystem(bool doChildren)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.PauseParticleSystem(false);
```

### ResumeParticleSystem
`public void ResumeParticleSystem(bool doChildren)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ResumeParticleSystem(false);
```

### BurstEntityParticle
`public void BurstEntityParticle(bool doChildren)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.BurstEntityParticle(false);
```

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float emissionRateMultiplier)`

**Purpose:** Assigns a new value to `runtime emission rate multiplier` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetRuntimeEmissionRateMultiplier(0);
```

### GetLocalBoundingBox
`public BoundingBox GetLocalBoundingBox()`

**Purpose:** Reads and returns the `local bounding box` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetLocalBoundingBox();
```

### GetGlobalBoundingBox
`public BoundingBox GetGlobalBoundingBox()`

**Purpose:** Reads and returns the `global bounding box` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetGlobalBoundingBox();
```

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin()`

**Purpose:** Reads and returns the `bounding box min` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetBoundingBoxMin();
```

### SetHasCustomBoundingBoxValidationSystem
`public void SetHasCustomBoundingBoxValidationSystem(bool hasCustomBoundingBox)`

**Purpose:** Assigns a new value to `has custom bounding box validation system` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetHasCustomBoundingBoxValidationSystem(false);
```

### ValidateBoundingBox
`public void ValidateBoundingBox()`

**Purpose:** Checks whether `bounding box` satisfies the required constraints, usually returning a boolean.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ValidateBoundingBox();
```

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax()`

**Purpose:** Reads and returns the `bounding box max` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetBoundingBoxMax();
```

### UpdateGlobalBounds
`public void UpdateGlobalBounds()`

**Purpose:** Recalculates and stores the latest representation of `global bounds`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.UpdateGlobalBounds();
```

### RecomputeBoundingBox
`public void RecomputeBoundingBox()`

**Purpose:** Recomputes `bounding box` and returns the result.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RecomputeBoundingBox();
```

### GetBoundingBoxRadius
`public float GetBoundingBoxRadius()`

**Purpose:** Reads and returns the `bounding box radius` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetBoundingBoxRadius();
```

### SetBoundingboxDirty
`public void SetBoundingboxDirty()`

**Purpose:** Assigns a new value to `boundingbox dirty` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetBoundingboxDirty();
```

### SetContourColor
`public void SetContourColor(uint? color, bool alwaysVisible = true)`

**Purpose:** Assigns a new value to `contour color` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetContourColor(0, false);
```

### GetPhysicsBoundingBoxMax
`public Vec3 GetPhysicsBoundingBoxMax()`

**Purpose:** Reads and returns the `physics bounding box max` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetPhysicsBoundingBoxMax();
```

### GetPhysicsBoundingBoxMin
`public Vec3 GetPhysicsBoundingBoxMin()`

**Purpose:** Reads and returns the `physics bounding box min` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetPhysicsBoundingBoxMin();
```

### GetHasFrameChanged
`public bool GetHasFrameChanged()`

**Purpose:** Reads and returns the `has frame changed` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetHasFrameChanged();
```

### GetFirstMesh
`public Mesh GetFirstMesh()`

**Purpose:** Reads and returns the `first mesh` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetFirstMesh();
```

### GetAttachedNavmeshFaceCount
`public int GetAttachedNavmeshFaceCount()`

**Purpose:** Reads and returns the `attached navmesh face count` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetAttachedNavmeshFaceCount();
```

### GetAttachedNavmeshFaceRecords
`public void GetAttachedNavmeshFaceRecords(PathFaceRecord faceRecords)`

**Purpose:** Reads and returns the `attached navmesh face records` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.GetAttachedNavmeshFaceRecords(faceRecords);
```

### GetAttachedNavmeshFaceVertexIndices
`public void GetAttachedNavmeshFaceVertexIndices(in PathFaceRecord faceRecord, int indices)`

**Purpose:** Reads and returns the `attached navmesh face vertex indices` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.GetAttachedNavmeshFaceVertexIndices(faceRecord, 0);
```

### SetCustomVertexPositionEnabled
`public void SetCustomVertexPositionEnabled(bool customVertexPositionEnabled)`

**Purpose:** Assigns a new value to `custom vertex position enabled` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetCustomVertexPositionEnabled(false);
```

### SetPositionsForAttachedNavmeshVertices
`public void SetPositionsForAttachedNavmeshVertices(int vertices, int indexCount, Vec3 positions)`

**Purpose:** Assigns a new value to `positions for attached navmesh vertices` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetPositionsForAttachedNavmeshVertices(0, 0, positions);
```

### SetExternalReferencesUsage
`public void SetExternalReferencesUsage(bool value)`

**Purpose:** Assigns a new value to `external references usage` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetExternalReferencesUsage(false);
```

### SetMorphFrameOfComponents
`public void SetMorphFrameOfComponents(float value)`

**Purpose:** Assigns a new value to `morph frame of components` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetMorphFrameOfComponents(0);
```

### AddEditDataUserToAllMeshes
`public void AddEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)`

**Purpose:** Adds `edit data user to all meshes` to the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AddEditDataUserToAllMeshes(false, false);
```

### ReleaseEditDataUserToAllMeshes
`public void ReleaseEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ReleaseEditDataUserToAllMeshes(false, false);
```

### GetCameraParamsFromCameraScript
`public void GetCameraParamsFromCameraScript(Camera cam, ref Vec3 dofParams)`

**Purpose:** Reads and returns the `camera params from camera script` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.GetCameraParamsFromCameraScript(cam, dofParams);
```

### GetMeshBendedFrame
`public void GetMeshBendedFrame(MatrixFrame worldSpacePosition, ref MatrixFrame output)`

**Purpose:** Reads and returns the `mesh bended frame` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.GetMeshBendedFrame(worldSpacePosition, output);
```

### ComputeTrajectoryVolume
`public void ComputeTrajectoryVolume(float missileSpeed, float verticalAngleMaxInDegrees, float verticalAngleMinInDegrees, float horizontalAngleRangeInDegrees, float airFrictionConstant)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ComputeTrajectoryVolume(0, 0, 0, 0, 0);
```

### SetAnimTreeChannelParameterForceUpdate
`public void SetAnimTreeChannelParameterForceUpdate(float phase, int channelNo)`

**Purpose:** Assigns a new value to `anim tree channel parameter force update` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetAnimTreeChannelParameterForceUpdate(0, 0);
```

### ChangeMetaMeshOrRemoveItIfNotExists
`public void ChangeMetaMeshOrRemoveItIfNotExists(MetaMesh entityMetaMesh, MetaMesh newMetaMesh)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.ChangeMetaMeshOrRemoveItIfNotExists(entityMetaMesh, newMetaMesh);
```

### SetUpdateValidtyOnFrameChangedOfFacesWithId
`public void SetUpdateValidtyOnFrameChangedOfFacesWithId(int faceGroupId, bool updateValidity)`

**Purpose:** Assigns a new value to `update validty on frame changed of faces with id` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetUpdateValidtyOnFrameChangedOfFacesWithId(0, false);
```

### AttachNavigationMeshFaces
`public void AttachNavigationMeshFaces(int faceGroupId, bool isConnected, bool isBlocker = false, bool autoLocalize = false, bool finalizeBlockerConvexHullComputation = false, bool updateEntityFrame = true)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.AttachNavigationMeshFaces(0, false, false, false, false, false);
```

### DetachAllAttachedNavigationMeshFaces
`public void DetachAllAttachedNavigationMeshFaces()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.DetachAllAttachedNavigationMeshFaces();
```

### UpdateAttachedNavigationMeshFaces
`public void UpdateAttachedNavigationMeshFaces()`

**Purpose:** Recalculates and stores the latest representation of `attached navigation mesh faces`.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.UpdateAttachedNavigationMeshFaces();
```

### RemoveSkeleton
`public void RemoveSkeleton()`

**Purpose:** Removes `skeleton` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RemoveSkeleton();
```

### RemoveAllChildren
`public void RemoveAllChildren()`

**Purpose:** Removes `all children` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RemoveAllChildren();
```

### GetChildren
`public IEnumerable<WeakGameEntity> GetChildren()`

**Purpose:** Reads and returns the `children` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetChildren();
```

### GetEntityAndChildren
`public IEnumerable<WeakGameEntity> GetEntityAndChildren()`

**Purpose:** Reads and returns the `entity and children` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetEntityAndChildren();
```

### GetChildrenRecursive
`public void GetChildrenRecursive(ref List<WeakGameEntity> children)`

**Purpose:** Reads and returns the `children recursive` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.GetChildrenRecursive(children);
```

### GetChildrenWithTagRecursive
`public void GetChildrenWithTagRecursive(List<WeakGameEntity> children, string tag)`

**Purpose:** Reads and returns the `children with tag recursive` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.GetChildrenWithTagRecursive(children, "example");
```

### IsSelectedOnEditor
`public bool IsSelectedOnEditor()`

**Purpose:** Determines whether the current object is in the `selected on editor` state or condition.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.IsSelectedOnEditor();
```

### SelectEntityOnEditor
`public void SelectEntityOnEditor()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SelectEntityOnEditor();
```

### DeselectEntityOnEditor
`public void DeselectEntityOnEditor()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.DeselectEntityOnEditor();
```

### SetAsPredisplayEntity
`public void SetAsPredisplayEntity()`

**Purpose:** Assigns a new value to `as predisplay entity` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetAsPredisplayEntity();
```

### RemoveFromPredisplayEntity
`public void RemoveFromPredisplayEntity()`

**Purpose:** Removes `from predisplay entity` from the current collection or state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RemoveFromPredisplayEntity();
```

### SetNativeScriptComponentVariable
`public void SetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)`

**Purpose:** Assigns a new value to `native script component variable` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetNativeScriptComponentVariable("example", "example", data, variableType);
```

### SetManualGlobalBoundingBox
`public void SetManualGlobalBoundingBox(Vec3 boundingBoxStartGlobal, Vec3 boundingBoxEndGlobal)`

**Purpose:** Assigns a new value to `manual global bounding box` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetManualGlobalBoundingBox(boundingBoxStartGlobal, boundingBoxEndGlobal);
```

### RayHitEntityWithNormal
`public bool RayHitEntityWithNormal(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref Vec3 resultNormal, ref float resultLength)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.RayHitEntityWithNormal(rayOrigin, rayDirection, 0, resultNormal, resultLength);
```

### RayHitEntity
`public bool RayHitEntity(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref float resultLength)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.RayHitEntity(rayOrigin, rayDirection, 0, resultLength);
```

### GetNativeScriptComponentVariable
`public void GetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)`

**Purpose:** Reads and returns the `native script component variable` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.GetNativeScriptComponentVariable("example", "example", data, variableType);
```

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPosition, Vec3 clipNormal)`

**Purpose:** Assigns a new value to `custom clip plane` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetCustomClipPlane(clipPosition, clipNormal);
```

### GetBoundingBoxLongestHalfDimension
`public float GetBoundingBoxLongestHalfDimension()`

**Purpose:** Reads and returns the `bounding box longest half dimension` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetBoundingBoxLongestHalfDimension();
```

### ComputeBoundingBoxFromLongestHalfDimension
`public BoundingBox ComputeBoundingBoxFromLongestHalfDimension(float longestHalfDimensionCoefficient)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.ComputeBoundingBoxFromLongestHalfDimension(0);
```

### ComputeBoundingBoxIncludeChildren
`public BoundingBox ComputeBoundingBoxIncludeChildren()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.ComputeBoundingBoxIncludeChildren();
```

### SetManualLocalBoundingBox
`public void SetManualLocalBoundingBox(in BoundingBox boundingBox)`

**Purpose:** Assigns a new value to `manual local bounding box` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetManualLocalBoundingBox(boundingBox);
```

### RelaxLocalBoundingBox
`public void RelaxLocalBoundingBox(in BoundingBox boundingBox)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.RelaxLocalBoundingBox(boundingBox);
```

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode)`

**Purpose:** Assigns a new value to `cull mode` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetCullMode(cullMode);
```

### GetFirstChildEntityWithTagRecursive
`public WeakGameEntity GetFirstChildEntityWithTagRecursive(string tag)`

**Purpose:** Reads and returns the `first child entity with tag recursive` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetFirstChildEntityWithTagRecursive("example");
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetHashCode();
```

### CollectChildrenEntitiesWithTag
`public List<WeakGameEntity> CollectChildrenEntitiesWithTag(string tag)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.CollectChildrenEntitiesWithTag("example");
```

### CollectChildrenEntitiesWithTagAsEnumarable
`public IEnumerable<WeakGameEntity> CollectChildrenEntitiesWithTagAsEnumarable(string tag)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.CollectChildrenEntitiesWithTagAsEnumarable("example");
```

### SetDoNotCheckVisibility
`public void SetDoNotCheckVisibility(bool value)`

**Purpose:** Assigns a new value to `do not check visibility` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetDoNotCheckVisibility(false);
```

### SetBoneFrameToAllMeshes
`public void SetBoneFrameToAllMeshes(int boneIndex, in MatrixFrame frame)`

**Purpose:** Assigns a new value to `bone frame to all meshes` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetBoneFrameToAllMeshes(0, frame);
```

### GetGlobalWindStrengthVectorOfScene
`public Vec2 GetGlobalWindStrengthVectorOfScene()`

**Purpose:** Reads and returns the `global wind strength vector of scene` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetGlobalWindStrengthVectorOfScene();
```

### GetGlobalWindVelocityOfScene
`public Vec2 GetGlobalWindVelocityOfScene()`

**Purpose:** Reads and returns the `global wind velocity of scene` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetGlobalWindVelocityOfScene();
```

### GetLastFinalRenderCameraPositionOfScene
`public Vec3 GetLastFinalRenderCameraPositionOfScene()`

**Purpose:** Reads and returns the `last final render camera position of scene` value held by the current object.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
var result = weakGameEntity.GetLastFinalRenderCameraPositionOfScene();
```

### SetForceDecalsToRender
`public void SetForceDecalsToRender(bool value)`

**Purpose:** Assigns a new value to `force decals to render` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetForceDecalsToRender(false);
```

### SetForceNotAffectedBySeason
`public void SetForceNotAffectedBySeason(bool value)`

**Purpose:** Assigns a new value to `force not affected by season` and updates the object's internal state.

```csharp
// Obtain an instance of WeakGameEntity from the subsystem API first
WeakGameEntity weakGameEntity = ...;
weakGameEntity.SetForceNotAffectedBySeason(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeakGameEntity weakGameEntity = ...;
weakGameEntity.Invalidate();
```

## See Also

- [Area Index](../)