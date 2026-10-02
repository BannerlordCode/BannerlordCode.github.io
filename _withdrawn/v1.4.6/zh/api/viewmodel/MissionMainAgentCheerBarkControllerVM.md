---
title: "MissionMainAgentCheerBarkControllerVM"
description: "MissionMainAgentCheerBarkControllerVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD 的 public 类，继承 ViewModel；公开成员 12 个（方法 6、属性 5、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMainAgentCheerBarkControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentCheerBarkControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MissionMainAgentCheerBarkControllerVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionMainAgentCheerBarkControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 12 个：6 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMainAgentCheerBarkControllerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，继承链 MissionMainAgentCheerBarkControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 6/12，属性 5/12），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionMainAgentCheerBarkControllerVM` | `public MissionMainAgentCheerBarkControllerVM(Action<int>onSelectCheer, Action<int>onSelectBark)` | 构造函数 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SelectItem` | `public void SelectItem(int itemIndex, int subNodeIndex = -1)` | 方法 |
| `ExecuteActivate` | `public void ExecuteActivate()` | 方法 |
| `ExecuteDeactivate` | `public void ExecuteDeactivate(bool applySelection)` | 方法 |
| `OnNodeFocused` | `public void OnNodeFocused(CheerBarkNodeItemVM focusedNode)` | 方法 |
| `OnNodeTooltipToggled` | `public void OnNodeTooltipToggled(CheerBarkNodeItemVM node)` | 方法 |
| `IsActive` | `public bool IsActive` | 属性 |
| `DisabledReasonText` | `public string DisabledReasonText` | 属性 |
| `SelectedNodeText` | `public string SelectedNodeText` | 属性 |
| `IsNodesCategories` | `public bool IsNodesCategories` | 属性 |
| `MBBindingList` | `public MBBindingList<CheerBarkNodeItemVM>Nodes` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [同命名空间 ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [同命名空间 CrosshairVM](../CrosshairVM/)
- [同命名空间 EquipmentActionItemVM](../EquipmentActionItemVM/)
