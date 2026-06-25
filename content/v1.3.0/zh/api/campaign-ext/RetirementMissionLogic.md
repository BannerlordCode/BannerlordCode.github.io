---
title: "RetirementMissionLogic"
description: "RetirementMissionLogic 的自动生成类参考。"
---
# RetirementMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class RetirementMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/RetirementMissionLogic.cs`

## 概述

`RetirementMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `RetirementMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 RetirementMissionLogic 实例
RetirementMissionLogic retirementMissionLogic = ...;
retirementMissionLogic.AfterStart();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<RetirementMissionLogic>();
```

## 参见

- [本区域目录](../)