<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BaseSynchedMissionObjectReadableRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BaseSynchedMissionObjectReadableRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BaseSynchedMissionObjectReadableRecord` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `SetVisibilityExcludeParents` | `public bool SetVisibilityExcludeParents { get; }` |
| `SynchTransform` | `public bool SynchTransform { get; }` |
| `GameObjectFrame` | `public MatrixFrame GameObjectFrame { get; }` |
| `SynchronizeFrameOverTime` | `public bool SynchronizeFrameOverTime { get; }` |
| `LastSynchedFrame` | `public MatrixFrame LastSynchedFrame { get; }` |
| `Duration` | `public float Duration { get; }` |
| `HasSkeleton` | `public bool HasSkeleton { get; }` |
| `SynchAnimation` | `public bool SynchAnimation { get; }` |
| `AnimationIndex` | `public int AnimationIndex { get; }` |
| `AnimationSpeed` | `public float AnimationSpeed { get; }` |
| `AnimationParameter` | `public float AnimationParameter { get; }` |
| `IsSkeletonAnimationPaused` | `public bool IsSkeletonAnimationPaused { get; }` |
| `SynchColors` | `public bool SynchColors { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; }` |


## Key Methods

### ReadFromNetwork

```csharp
public bool ReadFromNetwork(ref bool bufferReadValid)
```

### SetSetVisibilityExcludeParents

```csharp
public void SetSetVisibilityExcludeParents(bool visible)
```

### CreateFromNetworkWithTypeIndex

```csharp
public static ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> CreateFromNetworkWithTypeIndex(int typeIndex)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)