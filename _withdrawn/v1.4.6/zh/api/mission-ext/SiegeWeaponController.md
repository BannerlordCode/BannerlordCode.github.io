---
title: "SiegeWeaponController"
description: "SiegeWeaponController：TaleWorlds.MountAndBlade 的 public 类；公开成员 16 个（方法 12、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SiegeWeaponController.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeWeaponController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeWeaponController`
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SiegeWeaponController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SiegeWeaponController.cs。它是一个 public 类，继承链为 SiegeWeaponController。public/protected 成员共 16 个：12 方法、1 属性、2 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeWeaponController 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SiegeWeaponController。成员构成以方法为主（方法 12/16，属性 1/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SiegeWeaponController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<SiegeWeapon>SelectedWeapons` | 属性 |
| `IEnumerable` | `public event Action<SiegeWeaponOrderType, IEnumerable<SiegeWeapon>>OnOrderIssued;` | 事件 |
| `OnSelectedSiegeWeaponsChanged;` | `public event Action OnSelectedSiegeWeaponsChanged;` | 事件 |
| `SiegeWeaponController` | `public SiegeWeaponController(Mission mission, Team team)` | 构造函数 |
| `Select` | `public void Select(SiegeWeapon weapon)` | 方法 |
| `ClearSelectedWeapons` | `public void ClearSelectedWeapons()` | 方法 |
| `Deselect` | `public void Deselect(SiegeWeapon weapon)` | 方法 |
| `SelectAll` | `public void SelectAll()` | 方法 |
| `IsWeaponSelectable` | `public static bool IsWeaponSelectable(SiegeWeapon weapon)` | 方法 |
| `GetActiveOrderOf` | `public static SiegeWeaponOrderType GetActiveOrderOf(SiegeWeapon weapon)` | 方法 |
| `GetActiveMovementOrderOf` | `public static SiegeWeaponOrderType GetActiveMovementOrderOf(SiegeWeapon weapon)` | 方法 |
| `GetActiveFacingOrderOf` | `public static SiegeWeaponOrderType GetActiveFacingOrderOf(SiegeWeapon weapon)` | 方法 |
| `GetActiveFiringOrderOf` | `public static SiegeWeaponOrderType GetActiveFiringOrderOf(SiegeWeapon weapon)` | 方法 |
| `GetActiveAIControlOrderOf` | `public static SiegeWeaponOrderType GetActiveAIControlOrderOf(SiegeWeapon weapon)` | 方法 |
| `SetOrder` | `public void SetOrder(SiegeWeaponOrderType order)` | 方法 |
| `GetShortcutIndexOf` | `public int GetShortcutIndexOf(SiegeWeapon weapon)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
