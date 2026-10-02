---
title: "CraftingOrderItemVM"
description: "CraftingOrderItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 20 个（方法 3、属性 16、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderItemVM.cs。"
---
# CraftingOrderItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingOrderItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderItemVM.cs`

## 概述

CraftingOrderItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CraftingOrderItemVM → ViewModel。public/protected 成员共 20 个：3 方法、16 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftingOrderItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order），继承链 CraftingOrderItemVM → ViewModel。成员构成以属性为主（属性 16/20，方法 3/20），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingOrder` | `public CraftingOrder CraftingOrder` | 属性 |
| `CraftingOrderItemVM` | `public CraftingOrderItemVM(CraftingOrder order, Action<CraftingOrderItemVM>onSelection, Func<CraftingAvailableHeroItemVM>getCurrentCraftingHero, List<CraftingStatData>orderStatDatas, CampaignUIHelper.IssueQuestFlags questFlags = CampaignUIHelper.IssueQuestFlags.None)` | 构造函数 |
| `RefreshStats` | `public void RefreshStats()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteSelectOrder` | `public void ExecuteSelectOrder()` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `HasAvailableHeroes` | `public bool HasAvailableHeroes` | 属性 |
| `IsDifficultySuitableForHero` | `public bool IsDifficultySuitableForHero` | 属性 |
| `IsQuestOrder` | `public bool IsQuestOrder` | 属性 |
| `OrderPrice` | `public int OrderPrice` | 属性 |
| `OrderDifficultyLabelText` | `public string OrderDifficultyLabelText` | 属性 |
| `OrderDifficultyValueText` | `public string OrderDifficultyValueText` | 属性 |
| `OrderNumberText` | `public string OrderNumberText` | 属性 |
| `OrderWeaponType` | `public string OrderWeaponType` | 属性 |
| `OrderWeaponTypeCode` | `public string OrderWeaponTypeCode` | 属性 |
| `OrderOwnerData` | `public HeroVM OrderOwnerData` | 属性 |
| `DisabledReasonHint` | `public BasicTooltipViewModel DisabledReasonHint` | 属性 |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | 属性 |
| `MBBindingList` | `public MBBindingList<WeaponAttributeVM>WeaponAttributes` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CraftingOrderPopupVM](../CraftingOrderPopupVM)
