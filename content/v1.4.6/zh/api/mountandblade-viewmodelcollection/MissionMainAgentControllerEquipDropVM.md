---
title: "MissionMainAgentControllerEquipDropVM"
description: "MissionMainAgentControllerEquipDropVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 16 个（方法 9、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs。"
---
# MissionMainAgentControllerEquipDropVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentControllerEquipDropVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs`

## 概述

MissionMainAgentControllerEquipDropVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionMainAgentControllerEquipDropVM → ViewModel。public/protected 成员共 16 个：9 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMainAgentControllerEquipDropVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.HUD），继承链 MissionMainAgentControllerEquipDropVM → ViewModel。成员构成以方法为主（方法 9/16，属性 6/16），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionMainAgentControllerEquipDropVM` | `public MissionMainAgentControllerEquipDropVM(Action<EquipmentIndex>toggleItem)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `InitializeMainAgentPropterties` | `public void InitializeMainAgentPropterties()` | 方法 |
| `OnToggle` | `public void OnToggle(bool isEnabled)` | 方法 |
| `OnCancelHoldController` | `public void OnCancelHoldController()` | 方法 |
| `OnWeaponDroppedAtIndex` | `public void OnWeaponDroppedAtIndex(int droppedWeaponIndex)` | 方法 |
| `OnWeaponEquippedAtIndex` | `public void OnWeaponEquippedAtIndex(int equippedWeaponIndex)` | 方法 |
| `SetDropProgressForIndex` | `public void SetDropProgressForIndex(EquipmentIndex eqIndex, float progress)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OnGamepadActiveChanged` | `public void OnGamepadActiveChanged(bool isActive)` | 方法 |
| `MBBindingList` | `public MBBindingList<ControllerEquippedItemVM>EquippedWeapons` | 属性 |
| `EquippedExtraWeapon` | `public ControllerEquippedItemVM EquippedExtraWeapon` | 属性 |
| `HoldToDropText` | `public string HoldToDropText` | 属性 |
| `PressToEquipText` | `public string PressToEquipText` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `HaveExtraWeapon` | `public bool HaveExtraWeapon` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [同命名空间 ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [同命名空间 CrosshairVM](../CrosshairVM)
- [同命名空间 EquipmentActionItemVM](../EquipmentActionItemVM)
