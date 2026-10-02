---
title: "QuestStageVM"
description: "QuestStageVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 12 个（方法 3、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs。"
---
# QuestStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestStageVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs`

## 概述

QuestStageVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 QuestStageVM → ViewModel。public/protected 成员共 12 个：3 方法、7 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：QuestStageVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Quests），继承链 QuestStageVM → ViewModel。成员构成以属性为主（属性 7/12，方法 3/12），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `QuestStageVM` | `public QuestStageVM(JournalLog log, string dateString, bool isLastStage, Action onLogNotified, QuestStageTaskVM stageTask = null)` | 构造函数 |
| `QuestStageVM` | `public QuestStageVM(JournalLog log, string description, string dateString, bool isLastStage, Action onLogNotified)` | 构造函数 |
| `ExecuteResetUpdated` | `public void ExecuteResetUpdated()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink(string link)` | 方法 |
| `UpdateIsNew` | `public void UpdateIsNew()` | 方法 |
| `DateText` | `public string DateText` | 属性 |
| `DescriptionText` | `public string DescriptionText` | 属性 |
| `HasATask` | `public bool HasATask` | 属性 |
| `IsNew` | `public bool IsNew` | 属性 |
| `IsLastStage` | `public bool IsLastStage` | 属性 |
| `IsTaskCompleted` | `public bool IsTaskCompleted` | 属性 |
| `StageTask` | `public QuestStageTaskVM StageTask` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 QuestItemSortControllerVM](../QuestItemSortControllerVM)
- [同命名空间 QuestItemVM](../QuestItemVM)
- [同命名空间 QuestMarkerVM](../QuestMarkerVM)
- [同命名空间 QuestStageTaskVM](../QuestStageTaskVM)
