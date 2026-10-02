---
title: "IMissionSiegeWeaponsController"
description: "IMissionSiegeWeaponsController：TaleWorlds.MountAndBlade 的 public 接口；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs。"
---
# IMissionSiegeWeaponsController

**Namespace:** `TaleWorlds.MountAndBlade.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IMissionSiegeWeaponsController`
**File:** `TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs`

## 概述

IMissionSiegeWeaponsController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs。它是一个 public 接口，继承链为 IMissionSiegeWeaponsController。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMissionSiegeWeaponsController 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Missions），继承链 IMissionSiegeWeaponsController。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMaxDeployableWeaponCount` | `int GetMaxDeployableWeaponCount(Type t);` | 方法 |
| `IEnumerable` | `IEnumerable<IMissionSiegeWeapon>GetSiegeWeapons();` | 方法 |
| `OnWeaponDeployed` | `void OnWeaponDeployed(SiegeWeapon missionWeapon);` | 方法 |
| `OnWeaponUndeployed` | `void OnWeaponUndeployed(SiegeWeapon missionWeapon);` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentList](../AgentList)
- [同命名空间 AgentReadOnlyList](../AgentReadOnlyList)
- [同命名空间 MissionSiegeWeaponsController](../MissionSiegeWeaponsController)
