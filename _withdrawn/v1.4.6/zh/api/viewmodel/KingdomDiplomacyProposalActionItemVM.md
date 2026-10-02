---
title: "KingdomDiplomacyProposalActionItemVM"
description: "KingdomDiplomacyProposalActionItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy 的 public 类，继承 ViewModel；公开成员 8 个（方法 2、属性 5、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyProposalActionItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomDiplomacyProposalActionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomDiplomacyProposalActionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyProposalActionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

KingdomDiplomacyProposalActionItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyProposalActionItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 KingdomDiplomacyProposalActionItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 8 个：2 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomDiplomacyProposalActionItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`，继承链 KingdomDiplomacyProposalActionItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 5/8，方法 2/8），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyProposalActionItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomDiplomacyProposalActionItemVM` | `public KingdomDiplomacyProposalActionItemVM(TextObject nameText, TextObject explanationText, int influenceCost, bool isEnabled, TextObject hintText, Action action)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `Name` | `public string Name` | 属性 |
| `Explanation` | `public string Explanation` | 属性 |
| `InfluenceCost` | `public int InfluenceCost` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `Hint` | `public HintViewModel Hint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM/)
- [同命名空间 KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM/)
- [同命名空间 KingdomDiplomacyVM](../KingdomDiplomacyVM/)
- [同命名空间 KingdomTruceItemVM](../KingdomTruceItemVM/)
