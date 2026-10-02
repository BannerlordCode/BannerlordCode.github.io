---
title: "MissionMainAgentEquipmentControllerVM"
description: "MissionMainAgentEquipmentControllerVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD 的 public 类，继承 ViewModel；公开成员 18 个（方法 7、属性 9、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMainAgentEquipmentControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentEquipmentControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MissionMainAgentEquipmentControllerVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionMainAgentEquipmentControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 18 个：7 方法、9 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMainAgentEquipmentControllerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，继承链 MissionMainAgentEquipmentControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 9/18，方法 7/18），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionMainAgentEquipmentControllerVM` | `public MissionMainAgentEquipmentControllerVM(Action<EquipmentIndex>onDropEquipment, Action<SpawnedItemEntity, EquipmentIndex>onEquipItem)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnDropControllerToggle` | `public void OnDropControllerToggle(bool isActive)` | 方法 |
| `SetCurrentFocusedWeaponEntity` | `public void SetCurrentFocusedWeaponEntity(SpawnedItemEntity weaponEntity)` | 方法 |
| `OnEquipControllerToggle` | `public void OnEquipControllerToggle(bool isActive)` | 方法 |
| `OnCancelEquipController` | `public void OnCancelEquipController()` | 方法 |
| `OnCancelDropController` | `public void OnCancelDropController()` | 方法 |
| `IsDropControllerActive` | `public bool IsDropControllerActive` | 属性 |
| `IsEquipControllerActive` | `public bool IsEquipControllerActive` | 属性 |
| `DropText` | `public string DropText` | 属性 |
| `EquipText` | `public string EquipText` | 属性 |
| `FocusedItemText` | `public string FocusedItemText` | 属性 |
| `SelectedItemText` | `public string SelectedItemText` | 属性 |
| `MBBindingList` | `public MBBindingList<EquipmentActionItemVM>DropActions` | 属性 |
| `MBBindingList` | `public MBBindingList<EquipmentActionItemVM>EquipActions` | 属性 |
| `GetItemTypeAsString` | `public static string GetItemTypeAsString(ItemObject item)` | 方法 |
| `ItemGroup` | `public enum ItemGroup` | 属性 |
| `ItemGroup` | `public enum ItemGroup` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [同命名空间 ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [同命名空间 CrosshairVM](../CrosshairVM/)
- [同命名空间 EquipmentActionItemVM](../EquipmentActionItemVM/)
