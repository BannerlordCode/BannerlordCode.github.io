---
title: "MissionSettlementPrepareLogic"
description: "MissionSettlementPrepareLogic 的自动生成类参考。"
---
# MissionSettlementPrepareLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionSettlementPrepareLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionSettlementPrepareLogic.cs`

## 概述

`MissionSettlementPrepareLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionSettlementPrepareLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionSettlementPrepareLogic 实例
MissionSettlementPrepareLogic missionSettlementPrepareLogic = ...;
missionSettlementPrepareLogic.AfterStart();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionSettlementPrepareLogic>();
```

## 参见

- [本区域目录](../)