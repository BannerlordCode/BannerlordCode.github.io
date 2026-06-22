<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SynchedMissionObject`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SynchedMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SynchedMissionObject` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `SynchronizeCompleted` | `public bool SynchronizeCompleted { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)