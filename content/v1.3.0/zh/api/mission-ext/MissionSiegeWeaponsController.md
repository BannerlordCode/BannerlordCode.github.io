---
title: "MissionSiegeWeaponsController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSiegeWeaponsController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSiegeWeaponsController

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeWeaponsController : IMissionSiegeWeaponsController`
**Base:** `IMissionSiegeWeaponsController`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs`

## 概述

`MissionSiegeWeaponsController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `MissionSiegeWeaponsController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMaxDeployableWeaponCount
`public int GetMaxDeployableWeaponCount(Type t)`

**用途 / Purpose:** 获取 `max deployable weapon count` 的当前值。

### GetSiegeWeapons
`public IEnumerable<IMissionSiegeWeapon> GetSiegeWeapons()`

**用途 / Purpose:** 获取 `siege weapons` 的当前值。

### OnWeaponDeployed
`public void OnWeaponDeployed(SiegeWeapon missionWeapon)`

**用途 / Purpose:** 当 `weapon deployed` 事件触发时调用此方法。

### OnWeaponUndeployed
`public void OnWeaponUndeployed(SiegeWeapon missionWeapon)`

**用途 / Purpose:** 当 `weapon undeployed` 事件触发时调用此方法。

### GetWeaponType
`public static Type GetWeaponType(ScriptComponentBehavior weapon)`

**用途 / Purpose:** 获取 `weapon type` 的当前值。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<MissionSiegeWeaponsController>();
```

## 参见

- [完整类目录](../catalog)