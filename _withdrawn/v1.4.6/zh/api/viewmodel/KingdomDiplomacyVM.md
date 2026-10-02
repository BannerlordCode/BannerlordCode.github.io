---
title: "KingdomDiplomacyVM"
description: "KingdomDiplomacyVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy 的 public 类，继承 KingdomCategoryVM；公开成员 21 个（方法 3、属性 17、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomDiplomacyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomDiplomacyVM : KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

KingdomDiplomacyVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyVM.cs。它是一个 public 类，实现/继承 KingdomCategoryVM，继承链为 KingdomDiplomacyVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 21 个：3 方法、17 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomDiplomacyVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`，继承链 KingdomDiplomacyVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 17/21，方法 3/21），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomDiplomacyVM` | `public KingdomDiplomacyVM(Action<KingdomDecision>forceDecision)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshDiplomacyList` | `public void RefreshDiplomacyList()` | 方法 |
| `SelectKingdom` | `public void SelectKingdom(Kingdom kingdom)` | 方法 |
| `MBBindingList` | `public MBBindingList<KingdomWarItemVM>PlayerWars` | 属性 |
| `IsDisplayingWarLogs` | `public bool IsDisplayingWarLogs` | 属性 |
| `IsDisplayingStatComparisons` | `public bool IsDisplayingStatComparisons` | 属性 |
| `IsWar` | `public bool IsWar` | 属性 |
| `BehaviorSelectionTitle` | `public string BehaviorSelectionTitle` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomTruceItemVM>PlayerTruces` | 属性 |
| `CurrentSelectedDiplomacyItem` | `public KingdomDiplomacyItemVM CurrentSelectedDiplomacyItem` | 属性 |
| `WarsSortController` | `public KingdomWarSortControllerVM WarsSortController` | 属性 |
| `PlayerWarsText` | `public string PlayerWarsText` | 属性 |
| `WarsText` | `public string WarsText` | 属性 |
| `NumOfPlayerWarsText` | `public string NumOfPlayerWarsText` | 属性 |
| `PlayerTrucesText` | `public string PlayerTrucesText` | 属性 |
| `NumOfPlayerTrucesText` | `public string NumOfPlayerTrucesText` | 属性 |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>BehaviorSelection` | 属性 |
| `ShowStatBarsHint` | `public HintViewModel ShowStatBarsHint` | 属性 |
| `ShowWarLogsHint` | `public HintViewModel ShowWarLogsHint` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyProposalActionItemVM>Actions` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 KingdomCategoryVM](../KingdomCategoryVM/)
- [同命名空间 KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM/)
- [同命名空间 KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM/)
- [同命名空间 KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM/)
- [同命名空间 KingdomTruceItemVM](../KingdomTruceItemVM/)
