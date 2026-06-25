---
title: "DetachmentManager"
description: "DetachmentManager 的自动生成类参考。"
---
# DetachmentManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DetachmentManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/DetachmentManager.cs`

## 概述

`DetachmentManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `DetachmentManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Detachments` | `public MBReadOnlyList<ValueTuple<IDetachment, DetachmentData>> Detachments { get; }` |

## 主要方法

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.Clear();
```

### ContainsDetachment
`public bool ContainsDetachment(IDetachment detachment)`

**用途 / Purpose:** 判断当前对象是否包含「detachment」。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
var result = detachmentManager.ContainsDetachment(detachment);
```

### MakeDetachment
`public void MakeDetachment(IDetachment detachment)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.MakeDetachment(detachment);
```

### DestroyDetachment
`public void DestroyDetachment(IDetachment destroyedDetachment)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.DestroyDetachment(destroyedDetachment);
```

### OnFormationJoinDetachment
`public void OnFormationJoinDetachment(Formation formation, IDetachment joinedDetachment)`

**用途 / Purpose:** 在 「formation join detachment」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.OnFormationJoinDetachment(formation, joinedDetachment);
```

### OnFormationLeaveDetachment
`public void OnFormationLeaveDetachment(Formation formation, IDetachment leftDetachment)`

**用途 / Purpose:** 在 「formation leave detachment」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.OnFormationLeaveDetachment(formation, leftDetachment);
```

### TickDetachments
`public void TickDetachments()`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「detachments」的状态。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.TickDetachments();
```

### TickAgent
`public void TickAgent(Agent agent)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「agent」的状态。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.TickAgent(agent);
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.OnAgentRemoved(agent);
```

### RemoveScoresOfAgentFromDetachments
`public void RemoveScoresOfAgentFromDetachments(Agent agent)`

**用途 / Purpose:** 从当前容器或状态中移除 「scores of agent from detachments」。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveScoresOfAgentFromDetachments(agent);
```

### RemoveScoresOfAgentFromDetachment
`public void RemoveScoresOfAgentFromDetachment(Agent agent, IDetachment detachmentToBeRemovedFrom)`

**用途 / Purpose:** 从当前容器或状态中移除 「scores of agent from detachment」。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveScoresOfAgentFromDetachment(agent, detachmentToBeRemovedFrom);
```

### AddAgentAsMovingToDetachment
`public void AddAgentAsMovingToDetachment(Agent agent, IDetachment detachment)`

**用途 / Purpose:** 将 「agent as moving to detachment」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.AddAgentAsMovingToDetachment(agent, detachment);
```

### RemoveAgentAsMovingToDetachment
`public void RemoveAgentAsMovingToDetachment(Agent agent)`

**用途 / Purpose:** 从当前容器或状态中移除 「agent as moving to detachment」。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveAgentAsMovingToDetachment(agent);
```

### AddAgentAsDefendingToDetachment
`public void AddAgentAsDefendingToDetachment(Agent agent, IDetachment detachment)`

**用途 / Purpose:** 将 「agent as defending to detachment」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.AddAgentAsDefendingToDetachment(agent, detachment);
```

### RemoveAgentAsDefendingToDetachment
`public void RemoveAgentAsDefendingToDetachment(Agent agent)`

**用途 / Purpose:** 从当前容器或状态中移除 「agent as defending to detachment」。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveAgentAsDefendingToDetachment(agent);
```

### AssertDetachment
`public void AssertDetachment(Team team, IDetachment detachment)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DetachmentManager 实例
DetachmentManager detachmentManager = ...;
detachmentManager.AssertDetachment(team, detachment);
```

## 使用示例

```csharp
var manager = DetachmentManager.Current;
```

## 参见

- [本区域目录](../)