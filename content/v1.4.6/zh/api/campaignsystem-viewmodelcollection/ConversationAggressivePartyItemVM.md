---
title: "ConversationAggressivePartyItemVM"
description: "ConversationAggressivePartyItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 6 个（方法 2、属性 3、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs。"
---
# ConversationAggressivePartyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ConversationAggressivePartyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs`

## 概述

ConversationAggressivePartyItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ConversationAggressivePartyItemVM → ViewModel。public/protected 成员共 6 个：2 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ConversationAggressivePartyItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Conversation），继承链 ConversationAggressivePartyItemVM → ViewModel。成员构成以属性为主（属性 3/6，方法 2/6），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConversationAggressivePartyItemVM` | `public ConversationAggressivePartyItemVM(MobileParty party, CharacterObject leader = null)` | 构造函数 |
| `ExecuteShowPartyTooltip` | `public void ExecuteShowPartyTooltip()` | 方法 |
| `ExecuteHideTooltip` | `public void ExecuteHideTooltip()` | 方法 |
| `LeaderVisual` | `public CharacterImageIdentifierVM LeaderVisual` | 属性 |
| `HealthyAmount` | `public int HealthyAmount` | 属性 |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConversationItemVM](../ConversationItemVM)
- [同命名空间 MissionConversationVM](../MissionConversationVM)
- [同命名空间 PersuasionOptionVM](../PersuasionOptionVM)
- [同命名空间 PersuasionVM](../PersuasionVM)
