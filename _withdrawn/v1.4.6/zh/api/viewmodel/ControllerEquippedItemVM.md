---
title: "ControllerEquippedItemVM"
description: "ControllerEquippedItemVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD 的 public 类，继承 EquipmentActionItemVM；公开成员 4 个（方法 1、属性 2、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ControllerEquippedItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class ControllerEquippedItemVM : EquipmentActionItemVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

ControllerEquippedItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs。它是一个 public 类，实现/继承 EquipmentActionItemVM，继承链为 ControllerEquippedItemVM → EquipmentActionItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ControllerEquippedItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，继承链 ControllerEquippedItemVM → EquipmentActionItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ControllerEquippedItemVM` | `public ControllerEquippedItemVM(string item, string itemTypeAsString, object identifier, HotKey key, Action<EquipmentActionItemVM>onSelection) : base(item, itemTypeAsString, identifier, onSelection, false)` | 构造函数 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey` | 属性 |
| `DropProgress` | `public float DropProgress` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 EquipmentActionItemVM](../EquipmentActionItemVM/)
- [同命名空间 CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [同命名空间 CrosshairVM](../CrosshairVM/)
- [同命名空间 EquipmentActionItemVM](../EquipmentActionItemVM/)
- [同命名空间 MissionAgentLockItemVM](../MissionAgentLockItemVM/)
