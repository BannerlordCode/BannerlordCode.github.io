---
title: "KingdomArmySortControllerVM"
description: "KingdomArmySortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies 的 public 类，继承 ViewModel；公开成员 23 个（方法 0、属性 16、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomArmySortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomArmySortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

KingdomArmySortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 KingdomArmySortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 23 个：16 属性、1 构造函数、6 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomArmySortControllerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`，继承链 KingdomArmySortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 16/23，方法 0/23），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomArmySortControllerVM` | `public KingdomArmySortControllerVM(ref MBBindingList<KingdomArmyItemVM>listToControl)` | 构造函数 |
| `OwnerState` | `public int OwnerState` | 属性 |
| `PartiesState` | `public int PartiesState` | 属性 |
| `StrengthState` | `public int StrengthState` | 属性 |
| `NameState` | `public int NameState` | 属性 |
| `DistanceState` | `public int DistanceState` | 属性 |
| `IsNameSelected` | `public bool IsNameSelected` | 属性 |
| `IsPartiesSelected` | `public bool IsPartiesSelected` | 属性 |
| `IsStrengthSelected` | `public bool IsStrengthSelected` | 属性 |
| `IsOwnerSelected` | `public bool IsOwnerSelected` | 属性 |
| `IsDistanceSelected` | `public bool IsDistanceSelected` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomArmyItemVM>` | 属性 |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomArmySortControllerVM.ItemComparerBase` | 属性 |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemOwnerComparer : KingdomArmySortControllerVM.ItemComparerBase` | 属性 |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemStrengthComparer : KingdomArmySortControllerVM.ItemComparerBase` | 属性 |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemPartiesComparer : KingdomArmySortControllerVM.ItemComparerBase` | 属性 |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemDistanceComparer : KingdomArmySortControllerVM.ItemComparerBase` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomArmyItemVM>` | 嵌套类型 |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomArmySortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemOwnerComparer : KingdomArmySortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemStrengthComparer : KingdomArmySortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemPartiesComparer : KingdomArmySortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemDistanceComparer : KingdomArmySortControllerVM.ItemComparerBase` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 KingdomArmyItemVM](../KingdomArmyItemVM/)
- [同命名空间 KingdomArmyPartyItemVM](../KingdomArmyPartyItemVM/)
- [同命名空间 KingdomArmyVM](../KingdomArmyVM/)
- [同命名空间 KingdomSettlementVillageItemVM](../KingdomSettlementVillageItemVM/)
