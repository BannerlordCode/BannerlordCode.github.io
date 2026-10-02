---
title: "QuestMarkerVM"
description: "QuestMarkerVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 2、属性 6、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestMarkerVM.cs。"
---
# QuestMarkerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestMarkerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestMarkerVM.cs`

## 概述

QuestMarkerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestMarkerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 QuestMarkerVM → ViewModel。public/protected 成员共 9 个：2 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：QuestMarkerVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Quests），继承链 QuestMarkerVM → ViewModel。成员构成以属性为主（属性 6/9，方法 2/9），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestMarkerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `QuestTitle` | `public TextObject QuestTitle` | 属性 |
| `QuestHintText` | `public TextObject QuestHintText` | 属性 |
| `IssueQuestFlag` | `public CampaignUIHelper.IssueQuestFlags IssueQuestFlag` | 属性 |
| `QuestMarkerVM` | `public QuestMarkerVM(CampaignUIHelper.IssueQuestFlags issueQuestFlag, TextObject questTitle = null, TextObject questHintText = null)` | 构造函数 |
| `RefreshWith` | `public void RefreshWith(CampaignUIHelper.IssueQuestFlags issueQuestFlag, TextObject questTitle = null, TextObject questHintText = null)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `IsTrackMarker` | `public bool IsTrackMarker` | 属性 |
| `QuestMarkerType` | `public int QuestMarkerType` | 属性 |
| `QuestHint` | `public HintViewModel QuestHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 QuestItemSortControllerVM](../QuestItemSortControllerVM)
- [同命名空间 QuestItemVM](../QuestItemVM)
- [同命名空间 QuestStageTaskVM](../QuestStageTaskVM)
- [同命名空间 QuestStageVM](../QuestStageVM)
