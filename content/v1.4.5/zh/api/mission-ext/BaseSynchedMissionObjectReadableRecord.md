---
title: "BaseSynchedMissionObjectReadableRecord"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BaseSynchedMissionObjectReadableRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BaseSynchedMissionObjectReadableRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BaseSynchedMissionObjectReadableRecord`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BaseSynchedMissionObjectReadableRecord.cs`

## 概述

`BaseSynchedMissionObjectReadableRecord` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read from network` 相关逻辑。

### SetSetVisibilityExcludeParents
`public void SetSetVisibilityExcludeParents(bool visible)`

**用途 / Purpose:** 设置 `set visibility exclude parents` 的值或状态。

## 使用示例

```csharp
var value = new BaseSynchedMissionObjectReadableRecord();
value.ReadFromNetwork(bufferReadValid);
```

## 参见

- [完整类目录](../catalog)