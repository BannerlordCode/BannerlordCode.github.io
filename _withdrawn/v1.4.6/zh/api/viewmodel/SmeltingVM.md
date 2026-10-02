---
title: "SmeltingVM"
description: "SmeltingVM：TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting 的 public 类，继承 ViewModel；公开成员 12 个（方法 4、属性 7、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SmeltingVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SmeltingVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

SmeltingVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SmeltingVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 12 个：4 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SmeltingVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`，继承链 SmeltingVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/12，方法 4/12），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SmeltingVM` | `public SmeltingVM(Action updateValuesOnSelectItemAction, Action updateValuesOnSmeltItemAction)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshList` | `public void RefreshList()` | 方法 |
| `TrySmeltingSelectedItems` | `public void TrySmeltingSelectedItems(Hero currentCraftingHero)` | 方法 |
| `SaveItemLockStates` | `public void SaveItemLockStates()` | 方法 |
| `WeaponTypeName` | `public string WeaponTypeName` | 属性 |
| `WeaponTypeCode` | `public string WeaponTypeCode` | 属性 |
| `CurrentSelectedItem` | `public SmeltingItemVM CurrentSelectedItem` | 属性 |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected` | 属性 |
| `MBBindingList` | `public MBBindingList<SmeltingItemVM>SmeltableItemList` | 属性 |
| `SelectAllHint` | `public HintViewModel SelectAllHint` | 属性 |
| `SortController` | `public SmeltingSortControllerVM SortController` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 SmeltingItemVM](../SmeltingItemVM/)
- [同命名空间 SmeltingSortControllerVM](../SmeltingSortControllerVM/)
