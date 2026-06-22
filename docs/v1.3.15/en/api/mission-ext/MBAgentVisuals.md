<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBAgentVisuals`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBAgentVisuals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MBAgentVisuals` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### CreateAgentVisuals

```csharp
public static MBAgentVisuals CreateAgentVisuals(Scene scene, string ownerName, Vec3 eyeOffset)
```

### Tick

```csharp
public void Tick(MBAgentVisuals parentAgentVisuals, float dt, bool entityMoving, float speed)
```

### GetGlobalFrame

```csharp
public MatrixFrame GetGlobalFrame()
```

### GetFrame

```csharp
public MatrixFrame GetFrame()
```

### GetEntity

```csharp
public GameEntity GetEntity()
```

### GetWeakEntity

```csharp
public WeakGameEntity GetWeakEntity()
```

### IsValid

```csharp
public bool IsValid()
```

### GetGlobalStableEyePoint

```csharp
public Vec3 GetGlobalStableEyePoint(bool isHumanoid)
```

### GetGlobalStableNeckPoint

```csharp
public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)
```

### GetBoneEntitialFrame

```csharp
public MatrixFrame GetBoneEntitialFrame(sbyte bone, bool useBoneMapping)
```

### SetAttachedPositionForMeshAfterAnimationPostIntegrate

```csharp
public void SetAttachedPositionForMeshAfterAnimationPostIntegrate(WeakGameEntity ropeEntity, sbyte bone)
```

### GetCurrentHeadLookDirection

```csharp
public Vec3 GetCurrentHeadLookDirection()
```

### GetMovementMode

```csharp
public HumanWalkingMovementMode GetMovementMode()
```

### GetVisualStrengthOfAgentVisual

```csharp
public float GetVisualStrengthOfAgentVisual(MBAgentVisuals targetAgentVisual, Mission mission, float ambientLightStrength, float sunMoonLightStrength, int agentIndexToIgnore)
```

### GetCurrentRagdollState

```csharp
public RagdollState GetCurrentRagdollState()
```

### GetRealBoneIndex

```csharp
public sbyte GetRealBoneIndex(HumanBone boneType)
```

### AddPrefabToAgentVisualBoneByBoneType

```csharp
public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)
```

### AddPrefabToAgentVisualBoneByRealBoneIndex

```csharp
public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)
```

### GetAttachedWeaponEntity

```csharp
public GameEntity GetAttachedWeaponEntity(int attachedWeaponIndex)
```

### SetFrame

```csharp
public void SetFrame(ref MatrixFrame frame)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)