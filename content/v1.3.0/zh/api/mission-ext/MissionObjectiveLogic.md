---
title: "MissionObjectiveLogic"
description: "MissionObjectiveLogic 的自动生成类参考。"
---
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

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionObjectiveLogic 实例
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.EnqueueObjective(objective);
```

### RemoveObjectiveFromQueue
`public void RemoveObjectiveFromQueue(string objectiveId)`

**用途 / Purpose:** 从当前容器或状态中移除 「objective from queue」。

```csharp
// 先通过子系统 API 拿到 MissionObjectiveLogic 实例
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.RemoveObjectiveFromQueue("example");
```

### RemoveObjectiveFromQueue
`public void RemoveObjectiveFromQueue(MissionObjective objective)`

**用途 / Purpose:** 从当前容器或状态中移除 「objective from queue」。

```csharp
// 先通过子系统 API 拿到 MissionObjectiveLogic 实例
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.RemoveObjectiveFromQueue(objective);
```

### GetCurrentObjective
`public MissionObjective GetCurrentObjective()`

**用途 / Purpose:** 读取并返回当前对象中 「current objective」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionObjectiveLogic 实例
MissionObjectiveLogic missionObjectiveLogic = ...;
var result = missionObjectiveLogic.GetCurrentObjective();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionObjectiveLogic 实例
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionObjectiveLogic>();
```

## 参见

- [本区域目录](../)