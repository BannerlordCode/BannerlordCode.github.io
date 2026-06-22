<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BaseSynchedMissionObjectReadableRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BaseSynchedMissionObjectReadableRecord

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`BaseSynchedMissionObjectReadableRecord` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

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


## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)