---
title: "MissionObjectiveLogic"
description: "MissionObjectiveLogic 的自动生成类参考。"
---
# MissionObjectiveLogic

**Namespace:** TaleWorlds.MountAndBlade.Missions.MissionLogics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionObjectiveLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.MissionLogics/MissionObjectiveLogic.cs`

## 概述

`MissionObjectiveLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionObjectiveLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### StartObjective
`public void StartObjective(MissionObjective objective)`

**用途 / Purpose:** **用途 / Purpose:** 启动objective流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionObjectiveLogic 实例
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.StartObjective(objective);
```

### CompleteCurrentObjective
`public void CompleteCurrentObjective()`

**用途 / Purpose:** **用途 / Purpose:** 调用 CompleteCurrentObjective 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionObjectiveLogic 实例
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.CompleteCurrentObjective();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

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