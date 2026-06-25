---
title: "DetachmentManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DetachmentManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### ContainsDetachment
`public bool ContainsDetachment(IDetachment detachment)`

**用途 / Purpose:** 处理 `contains detachment` 相关逻辑。

### MakeDetachment
`public void MakeDetachment(IDetachment detachment)`

**用途 / Purpose:** 处理 `make detachment` 相关逻辑。

### DestroyDetachment
`public void DestroyDetachment(IDetachment destroyedDetachment)`

**用途 / Purpose:** 处理 `destroy detachment` 相关逻辑。

### OnFormationJoinDetachment
`public void OnFormationJoinDetachment(Formation formation, IDetachment joinedDetachment)`

**用途 / Purpose:** 当 `formation join detachment` 事件触发时调用此方法。

### OnFormationLeaveDetachment
`public void OnFormationLeaveDetachment(Formation formation, IDetachment leftDetachment)`

**用途 / Purpose:** 当 `formation leave detachment` 事件触发时调用此方法。

### TickDetachments
`public void TickDetachments()`

**用途 / Purpose:** 处理 `tick detachments` 相关逻辑。

### TickAgent
`public void TickAgent(Agent agent)`

**用途 / Purpose:** 处理 `tick agent` 相关逻辑。

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### RemoveScoresOfAgentFromDetachments
`public void RemoveScoresOfAgentFromDetachments(Agent agent)`

**用途 / Purpose:** 从当前集合/状态中移除 `scores of agent from detachments`。

### RemoveScoresOfAgentFromDetachment
`public void RemoveScoresOfAgentFromDetachment(Agent agent, IDetachment detachmentToBeRemovedFrom)`

**用途 / Purpose:** 从当前集合/状态中移除 `scores of agent from detachment`。

### AddAgentAsMovingToDetachment
`public void AddAgentAsMovingToDetachment(Agent agent, IDetachment detachment)`

**用途 / Purpose:** 向当前集合/状态中添加 `agent as moving to detachment`。

### RemoveAgentAsMovingToDetachment
`public void RemoveAgentAsMovingToDetachment(Agent agent)`

**用途 / Purpose:** 从当前集合/状态中移除 `agent as moving to detachment`。

### AddAgentAsDefendingToDetachment
`public void AddAgentAsDefendingToDetachment(Agent agent, IDetachment detachment)`

**用途 / Purpose:** 向当前集合/状态中添加 `agent as defending to detachment`。

### RemoveAgentAsDefendingToDetachment
`public void RemoveAgentAsDefendingToDetachment(Agent agent)`

**用途 / Purpose:** 从当前集合/状态中移除 `agent as defending to detachment`。

### AssertDetachment
`public void AssertDetachment(Team team, IDetachment detachment)`

**用途 / Purpose:** 处理 `assert detachment` 相关逻辑。

## 使用示例

```csharp
var manager = DetachmentManager.Current;
```

## 参见

- [完整类目录](../catalog)