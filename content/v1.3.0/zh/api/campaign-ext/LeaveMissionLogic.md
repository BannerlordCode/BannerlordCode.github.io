---
title: "LeaveMissionLogic"
description: "LeaveMissionLogic 的自动生成类参考。"
---
# LeaveMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class LeaveMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/LeaveMissionLogic.cs`

## 概述

`LeaveMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `LeaveMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MissionEnded 对应的操作。

```csharp
// 先通过子系统 API 拿到 LeaveMissionLogic 实例
LeaveMissionLogic leaveMissionLogic = ...;
var result = leaveMissionLogic.MissionEnded(missionResult);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LeaveMissionLogic 实例
LeaveMissionLogic leaveMissionLogic = ...;
leaveMissionLogic.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<LeaveMissionLogic>();
```

## 参见

- [本区域目录](../)