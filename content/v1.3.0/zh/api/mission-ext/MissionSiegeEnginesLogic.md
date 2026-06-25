---
title: "MissionSiegeEnginesLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSiegeEnginesLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `siege weapons controller` 的当前值。

### GetMissionSiegeWeapons
`public void GetMissionSiegeWeapons(out IEnumerable<IMissionSiegeWeapon> defenderSiegeWeapons, out IEnumerable<IMissionSiegeWeapon> attackerSiegeWeapons)`

**用途 / Purpose:** 获取 `mission siege weapons` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionSiegeEnginesLogic());
```

## 参见

- [完整类目录](../catalog)