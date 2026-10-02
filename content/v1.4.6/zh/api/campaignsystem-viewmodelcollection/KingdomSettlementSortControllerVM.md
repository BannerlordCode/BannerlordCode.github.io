---
title: "KingdomSettlementSortControllerVM"
description: "KingdomSettlementSortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 29 个（方法 0、属性 19、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs。"
---
# KingdomSettlementSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomSettlementSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs`

## 概述

KingdomSettlementSortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 KingdomSettlementSortControllerVM → ViewModel。public/protected 成员共 29 个：19 属性、1 构造函数、9 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomSettlementSortControllerVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements），继承链 KingdomSettlementSortControllerVM → ViewModel。成员构成以属性为主（属性 19/29，方法 0/29），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomSettlementSortControllerVM` | `public KingdomSettlementSortControllerVM(MBBindingList<KingdomSettlementItemVM>listToControl)` | 构造函数 |
| `TypeState` | `public int TypeState` | 属性 |
| `NameState` | `public int NameState` | 属性 |
| `OwnerState` | `public int OwnerState` | 属性 |
| `ProsperityState` | `public int ProsperityState` | 属性 |
| `DefendersState` | `public int DefendersState` | 属性 |
| `IsTypeSelected` | `public bool IsTypeSelected` | 属性 |
| `IsNameSelected` | `public bool IsNameSelected` | 属性 |
| `IsDefendersSelected` | `public bool IsDefendersSelected` | 属性 |
| `IsOwnerSelected` | `public bool IsOwnerSelected` | 属性 |
| `IsProsperitySelected` | `public bool IsProsperitySelected` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomSettlementItemVM>` | 属性 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 属性 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemClanComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 属性 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemOwnerComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 属性 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemVillagesComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 属性 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 属性 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemProsperityComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 属性 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemFoodComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 属性 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemGarrisonComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomSettlementItemVM>` | 嵌套类型 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemClanComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemOwnerComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemVillagesComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemProsperityComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemFoodComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemGarrisonComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 KingdomSettlementItemVM](../KingdomSettlementItemVM)
- [同命名空间 KingdomSettlementVM](../KingdomSettlementVM)
