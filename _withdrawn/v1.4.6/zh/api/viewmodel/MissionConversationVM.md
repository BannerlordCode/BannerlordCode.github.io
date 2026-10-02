---
title: "MissionConversationVM"
description: "MissionConversationVM：TaleWorlds.CampaignSystem.ViewModelCollection.Conversation 的 public 类，继承 ViewModel；公开成员 42 个（方法 11、属性 30、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/MissionConversationVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionConversationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MissionConversationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/MissionConversationVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

MissionConversationVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/MissionConversationVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionConversationVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 42 个：11 方法、30 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionConversationVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`，继承链 MissionConversationVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 30/42，方法 11/42），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/MissionConversationVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectedAnOptionOrLinkThisFrame` | `public bool SelectedAnOptionOrLinkThisFrame` | 属性 |
| `MissionConversationVM` | `public MissionConversationVM(Func<string>getContinueInputText, bool isLinksDisabled = false)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `OnConversationContinue` | `public void OnConversationContinue()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink(string link)` | 方法 |
| `ExecuteConversedHeroLink` | `public void ExecuteConversedHeroLink()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `ExecuteCloseTooltip` | `public void ExecuteCloseTooltip()` | 方法 |
| `ExecuteHeroTooltip` | `public void ExecuteHeroTooltip()` | 方法 |
| `ExecuteFinalizeSelection` | `public void ExecuteFinalizeSelection()` | 方法 |
| `ExecuteContinue` | `public void ExecuteContinue()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Persuasion` | `public PersuasionVM Persuasion` | 属性 |
| `PowerComparer` | `public PowerLevelComparer PowerComparer` | 属性 |
| `Relation` | `public int Relation` | 属性 |
| `MinRelation` | `public int MinRelation` | 属性 |
| `MaxRelation` | `public int MaxRelation` | 属性 |
| `DefenderLeader` | `public ConversationAggressivePartyItemVM DefenderLeader` | 属性 |
| `AttackerLeader` | `public ConversationAggressivePartyItemVM AttackerLeader` | 属性 |
| `MBBindingList` | `public MBBindingList<ConversationAggressivePartyItemVM>AttackerParties` | 属性 |
| `MBBindingList` | `public MBBindingList<ConversationAggressivePartyItemVM>DefenderParties` | 属性 |
| `MoreOptionText` | `public string MoreOptionText` | 属性 |
| `GoldText` | `public string GoldText` | 属性 |
| `PersuasionText` | `public string PersuasionText` | 属性 |
| `IsCurrentCharacterValidInEncyclopedia` | `public bool IsCurrentCharacterValidInEncyclopedia` | 属性 |
| `IsLoadingOver` | `public bool IsLoadingOver` | 属性 |
| `IsPersuading` | `public bool IsPersuading` | 属性 |
| `ContinueText` | `public string ContinueText` | 属性 |
| `CurrentCharacterNameLbl` | `public string CurrentCharacterNameLbl` | 属性 |
| `MBBindingList` | `public MBBindingList<ConversationItemVM>AnswerList` | 属性 |
| `DialogText` | `public string DialogText` | 属性 |
| `IsAggressive` | `public bool IsAggressive` | 属性 |
| `SelectedSide` | `public int SelectedSide` | 属性 |
| `RelationText` | `public string RelationText` | 属性 |
| `IsRelationEnabled` | `public bool IsRelationEnabled` | 属性 |
| `IsBannerEnabled` | `public bool IsBannerEnabled` | 属性 |
| `CurrentSelectedAnswer` | `public ConversationItemVM CurrentSelectedAnswer` | 属性 |
| `ConversedHeroBanner` | `public BannerImageIdentifierVM ConversedHeroBanner` | 属性 |
| `RelationHint` | `public HintViewModel RelationHint` | 属性 |
| `FactionHint` | `public HintViewModel FactionHint` | 属性 |
| `GoldHint` | `public HintViewModel GoldHint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ConversationAggressivePartyItemVM](../ConversationAggressivePartyItemVM/)
- [同命名空间 ConversationItemVM](../ConversationItemVM/)
- [同命名空间 PersuasionOptionVM](../PersuasionOptionVM/)
- [同命名空间 PersuasionVM](../PersuasionVM/)
