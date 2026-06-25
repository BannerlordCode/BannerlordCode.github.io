---
title: "MBAgentVisuals"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBAgentVisuals`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBAgentVisuals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MBAgentVisuals : NativeObject`
**Base:** `NativeObject`
**Area:** mission-ext

## Overview

`MBAgentVisuals` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateAgentVisuals
`public static MBAgentVisuals CreateAgentVisuals(Scene scene, string ownerName, Vec3 eyeOffset)`

**Purpose:** Creates a new `agent visuals` instance or object.

### Tick
`public void Tick(MBAgentVisuals parentAgentVisuals, float dt, bool entityMoving, float speed)`

**Purpose:** Handles logic related to `tick`.

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame()`

**Purpose:** Gets the current value of `global frame`.

### GetFrame
`public MatrixFrame GetFrame()`

**Purpose:** Gets the current value of `frame`.

### GetEntity
`public GameEntity GetEntity()`

**Purpose:** Gets the current value of `entity`.

### GetWeakEntity
`public WeakGameEntity GetWeakEntity()`

**Purpose:** Gets the current value of `weak entity`.

### IsValid
`public bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

### GetGlobalStableEyePoint
`public Vec3 GetGlobalStableEyePoint(bool isHumanoid)`

**Purpose:** Gets the current value of `global stable eye point`.

### GetGlobalStableNeckPoint
`public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)`

**Purpose:** Gets the current value of `global stable neck point`.

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte bone, bool useBoneMapping)`

**Purpose:** Gets the current value of `bone entitial frame`.

### SetAttachedPositionForMeshAfterAnimationPostIntegrate
`public void SetAttachedPositionForMeshAfterAnimationPostIntegrate(WeakGameEntity ropeEntity, sbyte bone)`

**Purpose:** Sets the value or state of `attached position for mesh after animation post integrate`.

### GetCurrentHeadLookDirection
`public Vec3 GetCurrentHeadLookDirection()`

**Purpose:** Gets the current value of `current head look direction`.

### GetMovementMode
`public HumanWalkingMovementMode GetMovementMode()`

**Purpose:** Gets the current value of `movement mode`.

### GetVisualStrengthOfAgentVisual
`public float GetVisualStrengthOfAgentVisual(MBAgentVisuals targetAgentVisual, Mission mission, float ambientLightStrength, float sunMoonLightStrength, int agentIndexToIgnore)`

**Purpose:** Gets the current value of `visual strength of agent visual`.

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState()`

**Purpose:** Gets the current value of `current ragdoll state`.

### GetRealBoneIndex
`public sbyte GetRealBoneIndex(HumanBone boneType)`

**Purpose:** Gets the current value of `real bone index`.

### AddPrefabToAgentVisualBoneByBoneType
`public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)`

**Purpose:** Adds `prefab to agent visual bone by bone type` to the current collection or state.

### AddPrefabToAgentVisualBoneByRealBoneIndex
`public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)`

**Purpose:** Adds `prefab to agent visual bone by real bone index` to the current collection or state.

### GetAttachedWeaponEntity
`public GameEntity GetAttachedWeaponEntity(int attachedWeaponIndex)`

**Purpose:** Gets the current value of `attached weapon entity`.

### SetFrame
`public void SetFrame(ref MatrixFrame frame)`

**Purpose:** Sets the value or state of `frame`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBAgentVisuals.CreateAgentVisuals(scene, "example", eyeOffset);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
