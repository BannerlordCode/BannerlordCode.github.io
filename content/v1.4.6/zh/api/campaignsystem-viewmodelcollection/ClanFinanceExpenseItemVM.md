---
title: "ClanFinanceExpenseItemVM"
description: "ClanFinanceExpenseItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 16 个（方法 1、属性 14、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceExpenseItemVM.cs。"
---
# ClanFinanceExpenseItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceExpenseItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceExpenseItemVM.cs`

## 概述

ClanFinanceExpenseItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceExpenseItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanFinanceExpenseItemVM → ViewModel。public/protected 成员共 16 个：1 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanFinanceExpenseItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement），继承链 ClanFinanceExpenseItemVM → ViewModel。成员构成以属性为主（属性 14/16，方法 1/16），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceExpenseItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFinanceExpenseItemVM` | `public ClanFinanceExpenseItemVM(MobileParty mobileParty)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `WageLimitHint` | `public HintViewModel WageLimitHint` | 属性 |
| `CurrentWageTooltip` | `public BasicTooltipViewModel CurrentWageTooltip` | 属性 |
| `CurrentWageText` | `public string CurrentWageText` | 属性 |
| `CurrentWageLimitText` | `public string CurrentWageLimitText` | 属性 |
| `CurrentWageValueText` | `public string CurrentWageValueText` | 属性 |
| `CurrentWageLimitValueText` | `public string CurrentWageLimitValueText` | 属性 |
| `UnlimitedWageText` | `public string UnlimitedWageText` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `CurrentWage` | `public int CurrentWage` | 属性 |
| `CurrentWageLimit` | `public int CurrentWageLimit` | 属性 |
| `MinWage` | `public int MinWage` | 属性 |
| `MaxWage` | `public int MaxWage` | 属性 |
| `IsUnlimitedWage` | `public bool IsUnlimitedWage` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
