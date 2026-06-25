---
title: "MissionObjectiveLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionObjectiveLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionObjectiveLogic

**Namespace:** TaleWorlds.MountAndBlade.Missions.MissionLogics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionObjectiveLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionObjectiveLogic.cs`

## 概述

`MissionObjectiveLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionObjectiveLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentObjective` | `public MissionObjective CurrentObjective { get; }` |

## 主要方法

### EnqueueObjective
`public void EnqueueObjective(MissionObjective objective)`

**用途 / Purpose:** 处理 `enqueue objective` 相关逻辑。

### RemoveObjectiveFromQueue
`public void RemoveObjectiveFromQueue(string objectiveId)`

**用途 / Purpose:** 从当前集合/状态中移除 `objective from queue`。

### RemoveObjectiveFromQueue
`public void RemoveObjectiveFromQueue(MissionObjective objective)`

**用途 / Purpose:** 从当前集合/状态中移除 `objective from queue`。

### GetCurrentObjective
`public MissionObjective GetCurrentObjective()`

**用途 / Purpose:** 获取 `current objective` 的当前值。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionObjectiveLogic());
```

## 参见

- [完整类目录](../catalog)