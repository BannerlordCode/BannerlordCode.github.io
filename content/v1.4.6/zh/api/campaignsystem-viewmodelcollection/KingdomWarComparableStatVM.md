---
title: "KingdomWarComparableStatVM"
description: "KingdomWarComparableStatVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 11 个（方法 1、属性 9、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarComparableStatVM.cs。"
---
# KingdomWarComparableStatVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomWarComparableStatVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarComparableStatVM.cs`

## 概述

KingdomWarComparableStatVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarComparableStatVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 KingdomWarComparableStatVM → ViewModel。public/protected 成员共 11 个：1 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomWarComparableStatVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy），继承链 KingdomWarComparableStatVM → ViewModel。成员构成以属性为主（属性 9/11，方法 1/11），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarComparableStatVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomWarComparableStatVM` | `public KingdomWarComparableStatVM(int faction1Stat, int faction2Stat, TextObject name, string faction1Color, string faction2Color, int defaultRange, BasicTooltipViewModel faction1Hint = null, BasicTooltipViewModel faction2Hint = null)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Faction1Hint` | `public BasicTooltipViewModel Faction1Hint` | 属性 |
| `Faction2Hint` | `public BasicTooltipViewModel Faction2Hint` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Faction1Color` | `public string Faction1Color` | 属性 |
| `Faction2Color` | `public string Faction2Color` | 属性 |
| `Faction1Percentage` | `public int Faction1Percentage` | 属性 |
| `Faction1Value` | `public int Faction1Value` | 属性 |
| `Faction2Percentage` | `public int Faction2Percentage` | 属性 |
| `Faction2Value` | `public int Faction2Value` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM)
- [同命名空间 KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM)
- [同命名空间 KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM)
- [同命名空间 KingdomDiplomacyVM](../KingdomDiplomacyVM)
