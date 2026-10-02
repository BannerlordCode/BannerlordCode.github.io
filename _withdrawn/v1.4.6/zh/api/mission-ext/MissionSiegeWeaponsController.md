---
title: "MissionSiegeWeaponsController"
description: "MissionSiegeWeaponsController：TaleWorlds.MountAndBlade.Missions 的 public 类，继承 IMissionSiegeWeaponsController；公开成员 6 个（方法 5、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionSiegeWeaponsController

**Namespace:** `TaleWorlds.MountAndBlade.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionSiegeWeaponsController : IMissionSiegeWeaponsController`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionSiegeWeaponsController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs。它是一个 public 类，实现/继承 IMissionSiegeWeaponsController，继承链为 MissionSiegeWeaponsController → IMissionSiegeWeaponsController。public/protected 成员共 6 个：5 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionSiegeWeaponsController 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Missions`，继承链 MissionSiegeWeaponsController → IMissionSiegeWeaponsController。成员构成以方法为主（方法 5/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionSiegeWeaponsController` | `public MissionSiegeWeaponsController(BattleSideEnum side, List<MissionSiegeWeapon>weapons)` | 构造函数 |
| `GetMaxDeployableWeaponCount` | `public int GetMaxDeployableWeaponCount(Type t)` | 方法 |
| `IEnumerable` | `public IEnumerable<IMissionSiegeWeapon>GetSiegeWeapons()` | 方法 |
| `OnWeaponDeployed` | `public void OnWeaponDeployed(SiegeWeapon missionWeapon)` | 方法 |
| `OnWeaponUndeployed` | `public void OnWeaponUndeployed(SiegeWeapon missionWeapon)` | 方法 |
| `GetWeaponType` | `public static Type GetWeaponType(ScriptComponentBehavior weapon)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IMissionSiegeWeaponsController](../IMissionSiegeWeaponsController/)
- [同命名空间 AgentList](../AgentList/)
- [同命名空间 AgentReadOnlyList](../AgentReadOnlyList/)
- [同命名空间 IMissionSiegeWeaponsController](../IMissionSiegeWeaponsController/)
