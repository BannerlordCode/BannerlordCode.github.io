---
title: "KingdomSettlementItemVM"
description: "KingdomSettlementItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements 的 public 类，继承 KingdomItemVM；公开成员 20 个（方法 4、属性 15、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomSettlementItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomSettlementItemVM : KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

KingdomSettlementItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementItemVM.cs。它是一个 public 类，实现/继承 KingdomItemVM，继承链为 KingdomSettlementItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 20 个：4 方法、15 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomSettlementItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`，继承链 KingdomSettlementItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 15/20，方法 4/20），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Garrison` | `public int Garrison` | 属性 |
| `Militia` | `public int Militia` | 属性 |
| `KingdomSettlementItemVM` | `public KingdomSettlementItemVM(Settlement settlement, Action<KingdomSettlementItemVM>onSelect)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateProperties` | `protected virtual void UpdateProperties()` | 方法 |
| `OnSelect` | `protected override void OnSelect()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink()` | 方法 |
| `MBBindingList` | `public MBBindingList<SelectableFiefItemPropertyVM>ItemProperties` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomSettlementVillageItemVM>Villages` | 属性 |
| `IconPath` | `public string IconPath` | 属性 |
| `Defenders` | `public int Defenders` | 属性 |
| `Name` | `public string Name` | 属性 |
| `ImageName` | `public string ImageName` | 属性 |
| `SettlementImagePath` | `public string SettlementImagePath` | 属性 |
| `GovernorName` | `public string GovernorName` | 属性 |
| `OwnerClanBanner` | `public BannerImageIdentifierVM OwnerClanBanner` | 属性 |
| `OwnerClanBanner_9` | `public BannerImageIdentifierVM OwnerClanBanner_9` | 属性 |
| `Owner` | `public HeroVM Owner` | 属性 |
| `WallLevel` | `public int WallLevel` | 属性 |
| `Prosperity` | `public int Prosperity` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 KingdomItemVM](../KingdomItemVM/)
- [同命名空间 KingdomSettlementSortControllerVM](../KingdomSettlementSortControllerVM/)
- [同命名空间 KingdomSettlementVM](../KingdomSettlementVM/)
