---
title: "KingdomDecisionsVM"
description: "KingdomDecisionsVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 15 个（方法 7、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs。"
---
# KingdomDecisionsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomDecisionsVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs`

## 概述

KingdomDecisionsVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 KingdomDecisionsVM → ViewModel。public/protected 成员共 15 个：7 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomDecisionsVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions），继承链 KingdomDecisionsVM → ViewModel。成员构成以方法为主（方法 7/15，属性 7/15），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsCurrentDecisionActive` | `public bool IsCurrentDecisionActive` | 属性 |
| `KingdomDecisionsVM` | `public KingdomDecisionsVM(Action refreshKingdomManagement)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFrameTick` | `public void OnFrameTick()` | 方法 |
| `HandleNextDecision` | `public void HandleNextDecision()` | 方法 |
| `HandleDecision` | `public void HandleDecision(KingdomDecision curDecision)` | 方法 |
| `RefreshWith` | `public void RefreshWith(KingdomDecision decision)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CurrentDecision` | `public DecisionItemBaseVM CurrentDecision` | 属性 |
| `NotificationCount` | `public int NotificationCount` | 属性 |
| `IsRefreshed` | `public bool IsRefreshed` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DecisionOptionVM](../DecisionOptionVM)
- [同命名空间 DecisionSupporterVM](../DecisionSupporterVM)
- [同命名空间 PlayerSelectedAKingdomDecisionOptionEvent](../PlayerSelectedAKingdomDecisionOptionEvent)
