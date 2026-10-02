---
title: "KingdomSettlementSortControllerVM"
description: "KingdomSettlementSortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements 的 public 类，继承 ViewModel；公开成员 29 个（方法 0、属性 19、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomSettlementSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomSettlementSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

KingdomSettlementSortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 KingdomSettlementSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 29 个：19 属性、1 构造函数、9 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomSettlementSortControllerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`，继承链 KingdomSettlementSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 19/29，方法 0/29），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 KingdomSettlementItemVM](../KingdomSettlementItemVM/)
- [同命名空间 KingdomSettlementVM](../KingdomSettlementVM/)
