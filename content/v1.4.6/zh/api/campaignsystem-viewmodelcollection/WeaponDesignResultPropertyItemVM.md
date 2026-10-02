---
title: "WeaponDesignResultPropertyItemVM"
description: "WeaponDesignResultPropertyItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 14 个（方法 1、属性 11、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs。"
---
# WeaponDesignResultPropertyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponDesignResultPropertyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs`

## 概述

WeaponDesignResultPropertyItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 WeaponDesignResultPropertyItemVM → ViewModel。public/protected 成员共 14 个：1 方法、11 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeaponDesignResultPropertyItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign），继承链 WeaponDesignResultPropertyItemVM → ViewModel。成员构成以属性为主（属性 11/14，方法 1/14），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponDesignResultPropertyItemVM` | `public WeaponDesignResultPropertyItemVM(TextObject description, float value, float changeAmount, bool showFloatingPoint)` | 构造函数 |
| `WeaponDesignResultPropertyItemVM` | `public WeaponDesignResultPropertyItemVM(TextObject description, float craftedValue, float requiredValue, float changeAmount, bool showFloatingPoint, bool isExceedingBeneficial, bool showTooltip = true)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `PropertyLbl` | `public string PropertyLbl` | 属性 |
| `InitialValue` | `public float InitialValue` | 属性 |
| `TargetValue` | `public float TargetValue` | 属性 |
| `RequiredValueText` | `public string RequiredValueText` | 属性 |
| `ChangeAmount` | `public float ChangeAmount` | 属性 |
| `ShowFloatingPoint` | `public bool ShowFloatingPoint` | 属性 |
| `IsOrderResult` | `public bool IsOrderResult` | 属性 |
| `HasBenefit` | `public bool HasBenefit` | 属性 |
| `OrderRequirementTooltip` | `public HintViewModel OrderRequirementTooltip` | 属性 |
| `CraftedValueTooltip` | `public HintViewModel CraftedValueTooltip` | 属性 |
| `BonusPenaltyTooltip` | `public HintViewModel BonusPenaltyTooltip` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CraftingHistoryVM](../CraftingHistoryVM)
- [同命名空间 CraftingItemFlagVM](../CraftingItemFlagVM)
- [同命名空间 CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [同命名空间 CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
