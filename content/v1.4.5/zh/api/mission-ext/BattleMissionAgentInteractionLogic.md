---
title: "BattleMissionAgentInteractionLogic"
description: "BattleMissionAgentInteractionLogic 的自动生成类参考。"
---
# BattleMissionAgentInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionAgentInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic/BattleMissionAgentInteractionLogic.cs`

## 概述

`BattleMissionAgentInteractionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BattleMissionAgentInteractionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 there agent action 状态或条件。

```csharp
// 先通过子系统 API 拿到 BattleMissionAgentInteractionLogic 实例
BattleMissionAgentInteractionLogic battleMissionAgentInteractionLogic = ...;
var result = battleMissionAgentInteractionLogic.IsThereAgentAction(userAgent, otherAgent);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleMissionAgentInteractionLogic>();
```

## 参见

- [本区域目录](../)