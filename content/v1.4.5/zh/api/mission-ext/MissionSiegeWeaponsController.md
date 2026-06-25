---
title: "MissionSiegeWeaponsController"
description: "MissionSiegeWeaponsController 的自动生成类参考。"
---
# MissionSiegeWeaponsController

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeWeaponsController : IMissionSiegeWeaponsController`
**Base:** `IMissionSiegeWeaponsController`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions/MissionSiegeWeaponsController.cs`

## 概述

`MissionSiegeWeaponsController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `MissionSiegeWeaponsController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMaxDeployableWeaponCount
`public int GetMaxDeployableWeaponCount(Type t)`

**用途 / Purpose:** 读取并返回当前对象中 「max deployable weapon count」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionSiegeWeaponsController 实例
MissionSiegeWeaponsController missionSiegeWeaponsController = ...;
var result = missionSiegeWeaponsController.GetMaxDeployableWeaponCount(t);
```

### GetSiegeWeapons
`public IEnumerable<IMissionSiegeWeapon> GetSiegeWeapons()`

**用途 / Purpose:** 读取并返回当前对象中 「siege weapons」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionSiegeWeaponsController 实例
MissionSiegeWeaponsController missionSiegeWeaponsController = ...;
var result = missionSiegeWeaponsController.GetSiegeWeapons();
```

### OnWeaponDeployed
`public void OnWeaponDeployed(SiegeWeapon missionWeapon)`

**用途 / Purpose:** 在 「weapon deployed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionSiegeWeaponsController 实例
MissionSiegeWeaponsController missionSiegeWeaponsController = ...;
missionSiegeWeaponsController.OnWeaponDeployed(missionWeapon);
```

### OnWeaponUndeployed
`public void OnWeaponUndeployed(SiegeWeapon missionWeapon)`

**用途 / Purpose:** 在 「weapon undeployed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionSiegeWeaponsController 实例
MissionSiegeWeaponsController missionSiegeWeaponsController = ...;
missionSiegeWeaponsController.OnWeaponUndeployed(missionWeapon);
```

### GetWeaponType
`public static Type GetWeaponType(ScriptComponentBehavior weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon type」 的结果。

```csharp
// 静态调用，不需要实例
MissionSiegeWeaponsController.GetWeaponType(weapon);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<MissionSiegeWeaponsController>();
```

## 参见

- [本区域目录](../)