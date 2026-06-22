<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SynchedMissionObject`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SynchedMissionObject

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SynchedMissionObject` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `SynchronizeCompleted` | `public bool SynchronizeCompleted { get; }` |


## 主要方法

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### SetLocalPositionSmoothStep

```csharp
public void SetLocalPositionSmoothStep(ref Vec3 targetPosition)
```

### SetVisibleSynched

```csharp
public virtual void SetVisibleSynched(bool value, bool forceChildrenVisible = false)
```

### SetPhysicsStateSynched

```csharp
public virtual void SetPhysicsStateSynched(bool value, bool setChildren = true)
```

### SetDisabledSynched

```csharp
public virtual void SetDisabledSynched()
```

### SetFrameSynched

```csharp
public void SetFrameSynched(ref MatrixFrame frame, bool isClient = false)
```

### SetGlobalFrameSynched

```csharp
public void SetGlobalFrameSynched(ref MatrixFrame frame, bool isClient = false)
```

### SetFrameSynchedOverTime

```csharp
public void SetFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)
```

### SetGlobalFrameSynchedOverTime

```csharp
public void SetGlobalFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)
```

### SetAnimationAtChannelSynched

```csharp
public void SetAnimationAtChannelSynched(string animationName, int channelNo, float animationSpeed = 1f)
```

### SetAnimationAtChannelSynched

```csharp
public void SetAnimationAtChannelSynched(int animationIndex, int channelNo, float animationSpeed = 1f)
```

### SetAnimationChannelParameterSynched

```csharp
public void SetAnimationChannelParameterSynched(int channelNo, float parameter)
```

### PauseSkeletonAnimationSynched

```csharp
public void PauseSkeletonAnimationSynched()
```

### ResumeSkeletonAnimationSynched

```csharp
public void ResumeSkeletonAnimationSynched()
```

### BurstParticlesSynched

```csharp
public void BurstParticlesSynched(bool doChildren = true)
```

### ApplyImpulseSynched

```csharp
public void ApplyImpulseSynched(Vec3 localPosition, Vec3 impulse)
```

### AddBodyFlagsSynched

```csharp
public void AddBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)
```

### RemoveBodyFlagsSynched

```csharp
public void RemoveBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)
```

### SetTeamColors

```csharp
public void SetTeamColors(uint color, uint color2)
```

### SetTeamColorsSynched

```csharp
public virtual void SetTeamColorsSynched(uint color, uint color2)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)