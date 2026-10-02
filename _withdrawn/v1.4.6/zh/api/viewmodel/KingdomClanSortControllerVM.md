---
title: "KingdomClanSortControllerVM"
description: "KingdomClanSortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans 的 public 类，继承 ViewModel；公开成员 24 个（方法 1、属性 16、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanSortControllerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomClanSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomClanSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

KingdomClanSortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 KingdomClanSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 24 个：1 方法、16 属性、1 构造函数、6 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomClanSortControllerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`，继承链 KingdomClanSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 16/24，方法 1/24），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanSortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomClanSortControllerVM` | `public KingdomClanSortControllerVM(ref MBBindingList<KingdomClanItemVM>listToControl)` | 构造函数 |
| `SortByCurrentState` | `public void SortByCurrentState()` | 方法 |
| `InfluenceState` | `public int InfluenceState` | 属性 |
| `FiefsState` | `public int FiefsState` | 属性 |
| `MembersState` | `public int MembersState` | 属性 |
| `NameState` | `public int NameState` | 属性 |
| `TypeState` | `public int TypeState` | 属性 |
| `IsNameSelected` | `public bool IsNameSelected` | 属性 |
| `IsTypeSelected` | `public bool IsTypeSelected` | 属性 |
| `IsFiefsSelected` | `public bool IsFiefsSelected` | 属性 |
| `IsMembersSelected` | `public bool IsMembersSelected` | 属性 |
| `IsInfluenceSelected` | `public bool IsInfluenceSelected` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomClanItemVM>` | 属性 |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomClanSortControllerVM.ItemComparerBase` | 属性 |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : KingdomClanSortControllerVM.ItemComparerBase` | 属性 |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemInfluenceComparer : KingdomClanSortControllerVM.ItemComparerBase` | 属性 |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemMembersComparer : KingdomClanSortControllerVM.ItemComparerBase` | 属性 |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemFiefsComparer : KingdomClanSortControllerVM.ItemComparerBase` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomClanItemVM>` | 嵌套类型 |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomClanSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : KingdomClanSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemInfluenceComparer : KingdomClanSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemMembersComparer : KingdomClanSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemFiefsComparer : KingdomClanSortControllerVM.ItemComparerBase` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 KingdomClanFiefItemVM](../KingdomClanFiefItemVM/)
- [同命名空间 KingdomClanItemVM](../KingdomClanItemVM/)
- [同命名空间 KingdomClanVM](../KingdomClanVM/)
