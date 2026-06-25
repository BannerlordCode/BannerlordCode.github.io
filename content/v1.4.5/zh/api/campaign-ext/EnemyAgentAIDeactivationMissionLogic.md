---
title: "EnemyAgentAIDeactivationMissionLogic"
description: "EnemyAgentAIDeactivationMissionLogic 的自动生成类参考。"
---
# EnemyAgentAIDeactivationMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class EnemyAgentAIDeactivationMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/EnemyAgentAIDeactivationMissionLogic.cs`

## 概述

`EnemyAgentAIDeactivationMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `EnemyAgentAIDeactivationMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<EnemyAgentAIDeactivationMissionLogic>();
```

## 参见

- [本区域目录](../)