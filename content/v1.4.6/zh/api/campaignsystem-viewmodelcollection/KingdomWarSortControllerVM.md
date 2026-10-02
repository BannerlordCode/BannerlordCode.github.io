---
title: "KingdomWarSortControllerVM"
description: "KingdomWarSortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 0、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs。"
---
# KingdomWarSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomWarSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs`

## 概述

KingdomWarSortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 KingdomWarSortControllerVM → ViewModel。public/protected 成员共 7 个：4 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomWarSortControllerVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy），继承链 KingdomWarSortControllerVM → ViewModel。成员构成以属性为主（属性 4/7，方法 0/7），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomWarSortControllerVM` | `public KingdomWarSortControllerVM(ref MBBindingList<KingdomWarItemVM>listToControl)` | 构造函数 |
| `ScoreState` | `public int ScoreState` | 属性 |
| `IsScoreSelected` | `public bool IsScoreSelected` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomWarItemVM>` | 属性 |
| `KingdomWarSortControllerVM.ItemComparerBase` | `public class ItemScoreComparer : KingdomWarSortControllerVM.ItemComparerBase` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomWarItemVM>` | 嵌套类型 |
| `KingdomWarSortControllerVM.ItemComparerBase` | `public class ItemScoreComparer : KingdomWarSortControllerVM.ItemComparerBase` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM)
- [同命名空间 KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM)
- [同命名空间 KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM)
- [同命名空间 KingdomDiplomacyVM](../KingdomDiplomacyVM)
