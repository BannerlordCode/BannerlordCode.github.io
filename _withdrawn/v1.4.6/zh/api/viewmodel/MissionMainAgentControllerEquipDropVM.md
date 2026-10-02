---
title: "MissionMainAgentControllerEquipDropVM"
description: "MissionMainAgentControllerEquipDropVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD 的 public 类，继承 ViewModel；公开成员 16 个（方法 9、属性 6、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMainAgentControllerEquipDropVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentControllerEquipDropVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MissionMainAgentControllerEquipDropVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionMainAgentControllerEquipDropVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 16 个：9 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMainAgentControllerEquipDropVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，继承链 MissionMainAgentControllerEquipDropVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 9/16，属性 6/16），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [同命名空间 ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [同命名空间 CrosshairVM](../CrosshairVM/)
- [同命名空间 EquipmentActionItemVM](../EquipmentActionItemVM/)
