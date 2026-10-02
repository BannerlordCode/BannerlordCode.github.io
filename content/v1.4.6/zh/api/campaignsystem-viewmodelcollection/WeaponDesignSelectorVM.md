---
title: "WeaponDesignSelectorVM"
description: "WeaponDesignSelectorVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 2、属性 6、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignSelectorVM.cs。"
---
# WeaponDesignSelectorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponDesignSelectorVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignSelectorVM.cs`

## 概述

WeaponDesignSelectorVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignSelectorVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 WeaponDesignSelectorVM → ViewModel。public/protected 成员共 9 个：2 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeaponDesignSelectorVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign），继承链 WeaponDesignSelectorVM → ViewModel。成员构成以属性为主（属性 6/9，方法 2/9），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignSelectorVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Design` | `public WeaponDesign Design` | 属性 |
| `WeaponDesignSelectorVM` | `public WeaponDesignSelectorVM(WeaponDesign design, Action<WeaponDesignSelectorVM>onSelection)` | 构造函数 |
| `ExecuteSelect` | `public void ExecuteSelect()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `Name` | `public string Name` | 属性 |
| `WeaponTypeCode` | `public string WeaponTypeCode` | 属性 |
| `Visual` | `public ItemImageIdentifierVM Visual` | 属性 |
| `Hint` | `public BasicTooltipViewModel Hint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CraftingHistoryVM](../CraftingHistoryVM)
- [同命名空间 CraftingItemFlagVM](../CraftingItemFlagVM)
- [同命名空间 CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [同命名空间 CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
