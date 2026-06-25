---
title: "VertexAnimator"
description: "VertexAnimator 的自动生成类参考。"
---
# VertexAnimator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VertexAnimator : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/VertexAnimator.cs`

## 概述

`VertexAnimator` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
var result = vertexAnimator.GetTickRequirement();
```

### PlayOnce
`public void PlayOnce()`

**用途 / Purpose:** 处理与 「play once」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
vertexAnimator.PlayOnce();
```

### Pause
`public void Pause()`

**用途 / Purpose:** 处理与 「pause」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
vertexAnimator.Pause();
```

### Play
`public void Play()`

**用途 / Purpose:** 处理与 「play」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
vertexAnimator.Play();
```

### Resume
`public void Resume()`

**用途 / Purpose:** 处理与 「resume」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
vertexAnimator.Resume();
```

### Stop
`public void Stop()`

**用途 / Purpose:** 停止当前对象的流程或状态机。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
vertexAnimator.Stop();
```

### StopAndGoToEnd
`public void StopAndGoToEnd()`

**用途 / Purpose:** 停止「and go to end」流程或状态机。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
vertexAnimator.StopAndGoToEnd();
```

### SetAnimation
`public void SetAnimation(int beginKey, int endKey, float speed)`

**用途 / Purpose:** 为 「animation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
vertexAnimator.SetAnimation(0, 0, 0);
```

### SetAnimationSynched
`public void SetAnimationSynched(int beginKey, int endKey, float speed)`

**用途 / Purpose:** 为 「animation synched」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
vertexAnimator.SetAnimationSynched(0, 0, 0);
```

### SetProgressSynched
`public void SetProgressSynched(float value)`

**用途 / Purpose:** 为 「progress synched」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
vertexAnimator.SetProgressSynched(0);
```

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 将「to network」写入目标位置。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
vertexAnimator.WriteToNetwork();
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 在 「after read from network」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
vertexAnimator.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「from network」的数据或状态。

```csharp
// 先通过子系统 API 拿到 VertexAnimator 实例
VertexAnimator vertexAnimator = ...;
var result = vertexAnimator.ReadFromNetwork(bufferReadValid);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VertexAnimator vertexAnimator = ...;
vertexAnimator.GetTickRequirement();
```

## 参见

- [本区域目录](../)