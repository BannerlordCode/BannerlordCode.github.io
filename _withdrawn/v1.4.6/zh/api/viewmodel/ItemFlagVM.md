---
title: "ItemFlagVM"
description: "ItemFlagVM：TaleWorlds.CampaignSystem.ViewModelCollection.Inventory 的 public 类，继承 ViewModel；公开成员 3 个（方法 0、属性 2、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemFlagVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ItemFlagVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ItemFlagVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ItemFlagVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 3 个：2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ItemFlagVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，继承链 ItemFlagVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 2/3，方法 0/3），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemFlagVM` | `public ItemFlagVM(string iconName, TextObject hint)` | 构造函数 |
| `Icon` | `public string Icon` | 属性 |
| `Hint` | `public HintViewModel Hint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM/)
- [同命名空间 InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent/)
- [同命名空间 InventoryFilterChangedEvent](../InventoryFilterChangedEvent/)
- [同命名空间 InventoryItemInspectedEvent](../InventoryItemInspectedEvent/)
