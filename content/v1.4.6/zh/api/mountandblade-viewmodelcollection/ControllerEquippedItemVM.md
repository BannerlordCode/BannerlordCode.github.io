---
title: "ControllerEquippedItemVM"
description: "ControllerEquippedItemVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 EquipmentActionItemVM；公开成员 4 个（方法 1、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs。"
---
# ControllerEquippedItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class ControllerEquippedItemVM : EquipmentActionItemVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs`

## 概述

ControllerEquippedItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs。它是一个 public 类，实现/继承 EquipmentActionItemVM，继承链为 ControllerEquippedItemVM → EquipmentActionItemVM → ViewModel。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ControllerEquippedItemVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.HUD），继承链 ControllerEquippedItemVM → EquipmentActionItemVM → ViewModel。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ControllerEquippedItemVM` | `public ControllerEquippedItemVM(string item, string itemTypeAsString, object identifier, HotKey key, Action<EquipmentActionItemVM>onSelection) : base(item, itemTypeAsString, identifier, onSelection, false)` | 构造函数 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey` | 属性 |
| `DropProgress` | `public float DropProgress` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 EquipmentActionItemVM](../EquipmentActionItemVM)
- [同命名空间 CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [同命名空间 CrosshairVM](../CrosshairVM)
- [同命名空间 EquipmentActionItemVM](../EquipmentActionItemVM)
- [同命名空间 MissionAgentLockItemVM](../MissionAgentLockItemVM)
