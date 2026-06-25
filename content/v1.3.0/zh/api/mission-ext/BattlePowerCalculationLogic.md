---
title: "BattlePowerCalculationLogic"
description: "BattlePowerCalculationLogic 的自动生成类参考。"
---
# BattlePowerCalculationLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePowerCalculationLogic : MissionLogic, IBattlePowerCalculationLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattlePowerCalculationLogic.cs`

## 概述

`BattlePowerCalculationLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BattlePowerCalculationLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTeamPowersCalculated` | `public bool IsTeamPowersCalculated { get; }` |

## 主要方法

### GetTotalTeamPower
`public float GetTotalTeamPower(Team team)`

**用途 / Purpose:** 读取并返回当前对象中 total team power 的结果。

```csharp
// 先通过子系统 API 拿到 BattlePowerCalculationLogic 实例
BattlePowerCalculationLogic battlePowerCalculationLogic = ...;
var result = battlePowerCalculationLogic.GetTotalTeamPower(team);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattlePowerCalculationLogic>();
```

## 参见

- [本区域目录](../)