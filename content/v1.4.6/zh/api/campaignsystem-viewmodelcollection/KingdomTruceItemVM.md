---
title: "KingdomTruceItemVM"
description: "KingdomTruceItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 KingdomDiplomacyItemVM；公开成员 8 个（方法 2、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomTruceItemVM.cs。"
---
# KingdomTruceItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomTruceItemVM : KingdomDiplomacyItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomTruceItemVM.cs`

## 概述

KingdomTruceItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomTruceItemVM.cs。它是一个 public 类，实现/继承 KingdomDiplomacyItemVM，继承链为 KingdomTruceItemVM → KingdomDiplomacyItemVM → KingdomItemVM → ViewModel。public/protected 成员共 8 个：2 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomTruceItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy），继承链 KingdomTruceItemVM → KingdomDiplomacyItemVM → KingdomItemVM → ViewModel。成员构成以属性为主（属性 5/8，方法 2/8），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomTruceItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomTruceItemVM` | `public KingdomTruceItemVM(IFaction faction1, IFaction faction2, Action<KingdomDiplomacyItemVM>onSelection) : base(faction1, faction2)` | 构造函数 |
| `OnSelect` | `protected override void OnSelect()` | 方法 |
| `UpdateDiplomacyProperties` | `protected override void UpdateDiplomacyProperties()` | 方法 |
| `TributePaid` | `public int TributePaid` | 属性 |
| `HasTradeAgreement` | `public bool HasTradeAgreement` | 属性 |
| `HasAlliance` | `public bool HasAlliance` | 属性 |
| `AllianceEndTimeStr` | `public string AllianceEndTimeStr` | 属性 |
| `TradeAgreementEndTimeStr` | `public string TradeAgreementEndTimeStr` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM)
- [同命名空间 KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM)
- [同命名空间 KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM)
- [同命名空间 KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM)
- [同命名空间 KingdomDiplomacyVM](../KingdomDiplomacyVM)
