<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VertexAnimatorRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VertexAnimatorRecord

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct VertexAnimatorRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**领域:** mission-ext

## 概述

`VertexAnimatorRecord` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BeginKey` | `public int BeginKey { get; }` |
| `EndKey` | `public int EndKey { get; }` |
| `Speed` | `public float Speed { get; }` |
| `Progress` | `public float Progress { get; }` |

## 主要方法

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### PlayOnce
`public void PlayOnce()`

**用途 / Purpose:** 处理 `play once` 相关逻辑。

### Pause
`public void Pause()`

**用途 / Purpose:** 处理 `pause` 相关逻辑。

### Play
`public void Play()`

**用途 / Purpose:** 处理 `play` 相关逻辑。

### Resume
`public void Resume()`

**用途 / Purpose:** 处理 `resume` 相关逻辑。

### Stop
`public void Stop()`

**用途 / Purpose:** 处理 `stop` 相关逻辑。

### StopAndGoToEnd
`public void StopAndGoToEnd()`

**用途 / Purpose:** 处理 `stop and go to end` 相关逻辑。

### SetAnimation
`public void SetAnimation(int beginKey, int endKey, float speed)`

**用途 / Purpose:** 设置 `animation` 的值或状态。

### SetAnimationSynched
`public void SetAnimationSynched(int beginKey, int endKey, float speed)`

**用途 / Purpose:** 设置 `animation synched` 的值或状态。

### SetProgressSynched
`public void SetProgressSynched(float value)`

**用途 / Purpose:** 设置 `progress synched` 的值或状态。

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 处理 `write to network` 相关逻辑。

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 当 `after read from network` 事件触发时调用此方法。

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read from network` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 VertexAnimatorRecord 实例，再调用它的公开方法
var value = new VertexAnimatorRecord();
value.GetTickRequirement();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
