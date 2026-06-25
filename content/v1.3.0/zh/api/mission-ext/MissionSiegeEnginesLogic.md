---
title: "MissionSiegeEnginesLogic"
description: "MissionSiegeEnginesLogic 的自动生成类参考。"
---
# MissionSiegeEnginesLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEnginesLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionSiegeEnginesLogic.cs`

## 概述

`MissionSiegeEnginesLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionSiegeEnginesLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSiegeWeaponsController
`public IMissionSiegeWeaponsController GetSiegeWeaponsController(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「siege weapons controller」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionSiegeEnginesLogic 实例
MissionSiegeEnginesLogic missionSiegeEnginesLogic = ...;
var result = missionSiegeEnginesLogic.GetSiegeWeaponsController(side);
```

### GetMissionSiegeWeapons
`public void GetMissionSiegeWeapons(out IEnumerable<IMissionSiegeWeapon> defenderSiegeWeapons, out IEnumerable<IMissionSiegeWeapon> attackerSiegeWeapons)`

**用途 / Purpose:** 读取并返回当前对象中 「mission siege weapons」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionSiegeEnginesLogic 实例
MissionSiegeEnginesLogic missionSiegeEnginesLogic = ...;
missionSiegeEnginesLogic.GetMissionSiegeWeapons(defenderSiegeWeapons, attackerSiegeWeapons);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionSiegeEnginesLogic>();
```

## 参见

- [本区域目录](../)