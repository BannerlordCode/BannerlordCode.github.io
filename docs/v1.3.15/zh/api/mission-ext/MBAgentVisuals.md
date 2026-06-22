<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBAgentVisuals`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBAgentVisuals

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MBAgentVisuals` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)