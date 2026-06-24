<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SynchedMissionObject`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SynchedMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SynchedMissionObject : MissionObject`
**Base:** `MissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SynchedMissionObject.cs`

## 概述

`SynchedMissionObject` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |

## 主要方法

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### SetLocalPositionSmoothStep
`public void SetLocalPositionSmoothStep(ref Vec3 targetPosition)`

**用途 / Purpose:** 设置 `local position smooth step` 的值或状态。

### SetVisibleSynched
`public virtual void SetVisibleSynched(bool value, bool forceChildrenVisible = false)`

**用途 / Purpose:** 设置 `visible synched` 的值或状态。

### SetPhysicsStateSynched
`public virtual void SetPhysicsStateSynched(bool value, bool setChildren = true)`

**用途 / Purpose:** 设置 `physics state synched` 的值或状态。

### SetDisabledSynched
`public virtual void SetDisabledSynched()`

**用途 / Purpose:** 设置 `disabled synched` 的值或状态。

### SetFrameSynched
`public void SetFrameSynched(ref MatrixFrame frame, bool isClient = false)`

**用途 / Purpose:** 设置 `frame synched` 的值或状态。

### SetGlobalFrameSynched
`public void SetGlobalFrameSynched(ref MatrixFrame frame, bool isClient = false)`

**用途 / Purpose:** 设置 `global frame synched` 的值或状态。

### SetFrameSynchedOverTime
`public void SetFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)`

**用途 / Purpose:** 设置 `frame synched over time` 的值或状态。

### SetGlobalFrameSynchedOverTime
`public void SetGlobalFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)`

**用途 / Purpose:** 设置 `global frame synched over time` 的值或状态。

### SetAnimationAtChannelSynched
`public void SetAnimationAtChannelSynched(string animationName, int channelNo, float animationSpeed = 1f)`

**用途 / Purpose:** 设置 `animation at channel synched` 的值或状态。

### SetAnimationAtChannelSynched
`public void SetAnimationAtChannelSynched(int animationIndex, int channelNo, float animationSpeed = 1f)`

**用途 / Purpose:** 设置 `animation at channel synched` 的值或状态。

### SetAnimationChannelParameterSynched
`public void SetAnimationChannelParameterSynched(int channelNo, float parameter)`

**用途 / Purpose:** 设置 `animation channel parameter synched` 的值或状态。

### PauseSkeletonAnimationSynched
`public void PauseSkeletonAnimationSynched()`

**用途 / Purpose:** 处理 `pause skeleton animation synched` 相关逻辑。

### ResumeSkeletonAnimationSynched
`public void ResumeSkeletonAnimationSynched()`

**用途 / Purpose:** 处理 `resume skeleton animation synched` 相关逻辑。

### BurstParticlesSynched
`public void BurstParticlesSynched(bool doChildren = true)`

**用途 / Purpose:** 处理 `burst particles synched` 相关逻辑。

### ApplyImpulseSynched
`public void ApplyImpulseSynched(Vec3 localPosition, Vec3 impulse)`

**用途 / Purpose:** 将 `impulse synched` 应用到当前对象。

### AddBodyFlagsSynched
`public void AddBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `body flags synched`。

### RemoveBodyFlagsSynched
`public void RemoveBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)`

**用途 / Purpose:** 从当前集合/状态中移除 `body flags synched`。

### SetTeamColors
`public void SetTeamColors(uint color, uint color2)`

**用途 / Purpose:** 设置 `team colors` 的值或状态。

### SetTeamColorsSynched
`public virtual void SetTeamColorsSynched(uint color, uint color2)`

**用途 / Purpose:** 设置 `team colors synched` 的值或状态。

### WriteToNetwork
`public virtual void WriteToNetwork()`

**用途 / Purpose:** 处理 `write to network` 相关逻辑。

### OnAfterReadFromNetwork
`public virtual void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 当 `after read from network` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new SynchedMissionObject();
value.GetTickRequirement();
```

## 参见

- [完整类目录](../catalog)