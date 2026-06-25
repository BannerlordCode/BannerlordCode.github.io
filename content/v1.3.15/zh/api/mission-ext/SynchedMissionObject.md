---
title: "SynchedMissionObject"
description: "SynchedMissionObject 的自动生成类参考。"
---
# SynchedMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SynchedMissionObject : MissionObject`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/SynchedMissionObject.cs`

## 概述

`SynchedMissionObject` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `SynchronizeCompleted` | `public bool SynchronizeCompleted { get; }` |

## 主要方法

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
var result = synchedMissionObject.GetTickRequirement();
```

### SetLocalPositionSmoothStep
`public void SetLocalPositionSmoothStep(ref Vec3 targetPosition)`

**用途 / Purpose:** **用途 / Purpose:** 为 local position smooth step 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetLocalPositionSmoothStep(targetPosition);
```

### SetVisibleSynched
`public virtual void SetVisibleSynched(bool value, bool forceChildrenVisible = false)`

**用途 / Purpose:** **用途 / Purpose:** 为 visible synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetVisibleSynched(false, false);
```

### SetPhysicsStateSynched
`public virtual void SetPhysicsStateSynched(bool value, bool setChildren = true)`

**用途 / Purpose:** **用途 / Purpose:** 为 physics state synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetPhysicsStateSynched(false, false);
```

### SetDisabledSynched
`public virtual void SetDisabledSynched()`

**用途 / Purpose:** **用途 / Purpose:** 为 disabled synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetDisabledSynched();
```

### SetFrameSynched
`public void SetFrameSynched(ref MatrixFrame frame, bool isClient = false)`

**用途 / Purpose:** **用途 / Purpose:** 为 frame synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetFrameSynched(frame, false);
```

### SetGlobalFrameSynched
`public void SetGlobalFrameSynched(ref MatrixFrame frame, bool isClient = false)`

**用途 / Purpose:** **用途 / Purpose:** 为 global frame synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetGlobalFrameSynched(frame, false);
```

### SetFrameSynchedOverTime
`public void SetFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)`

**用途 / Purpose:** **用途 / Purpose:** 为 frame synched over time 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetFrameSynchedOverTime(frame, 0, false);
```

### SetGlobalFrameSynchedOverTime
`public void SetGlobalFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)`

**用途 / Purpose:** **用途 / Purpose:** 为 global frame synched over time 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetGlobalFrameSynchedOverTime(frame, 0, false);
```

### SetAnimationAtChannelSynched
`public void SetAnimationAtChannelSynched(string animationName, int channelNo, float animationSpeed = 1f)`

**用途 / Purpose:** **用途 / Purpose:** 为 animation at channel synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetAnimationAtChannelSynched("example", 0, 0);
```

### SetAnimationAtChannelSynched
`public void SetAnimationAtChannelSynched(int animationIndex, int channelNo, float animationSpeed = 1f)`

**用途 / Purpose:** **用途 / Purpose:** 为 animation at channel synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetAnimationAtChannelSynched(0, 0, 0);
```

### SetAnimationChannelParameterSynched
`public void SetAnimationChannelParameterSynched(int channelNo, float parameter)`

**用途 / Purpose:** **用途 / Purpose:** 为 animation channel parameter synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetAnimationChannelParameterSynched(0, 0);
```

### PauseSkeletonAnimationSynched
`public void PauseSkeletonAnimationSynched()`

**用途 / Purpose:** **用途 / Purpose:** 调用 PauseSkeletonAnimationSynched 对应的操作。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.PauseSkeletonAnimationSynched();
```

### ResumeSkeletonAnimationSynched
`public void ResumeSkeletonAnimationSynched()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ResumeSkeletonAnimationSynched 对应的操作。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.ResumeSkeletonAnimationSynched();
```

### BurstParticlesSynched
`public void BurstParticlesSynched(bool doChildren = true)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BurstParticlesSynched 对应的操作。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.BurstParticlesSynched(false);
```

### ApplyImpulseSynched
`public void ApplyImpulseSynched(Vec3 localPosition, Vec3 impulse)`

**用途 / Purpose:** **用途 / Purpose:** 将 impulse synched 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.ApplyImpulseSynched(localPosition, impulse);
```

### AddBodyFlagsSynched
`public void AddBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)`

**用途 / Purpose:** **用途 / Purpose:** 将 body flags synched 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.AddBodyFlagsSynched(flags, false);
```

### RemoveBodyFlagsSynched
`public void RemoveBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 body flags synched。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.RemoveBodyFlagsSynched(flags, false);
```

### SetTeamColors
`public void SetTeamColors(uint color, uint color2)`

**用途 / Purpose:** **用途 / Purpose:** 为 team colors 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetTeamColors(0, 0);
```

### SetTeamColorsSynched
`public virtual void SetTeamColorsSynched(uint color, uint color2)`

**用途 / Purpose:** **用途 / Purpose:** 为 team colors synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.SetTeamColorsSynched(0, 0);
```

### WriteToNetwork
`public virtual void WriteToNetwork()`

**用途 / Purpose:** **用途 / Purpose:** 将to network写入目标位置。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.WriteToNetwork();
```

### OnAfterReadFromNetwork
`public virtual void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** **用途 / Purpose:** 在 after read from network 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SynchedMissionObject 实例
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SynchedMissionObject synchedMissionObject = ...;
synchedMissionObject.GetTickRequirement();
```

## 参见

- [本区域目录](../)