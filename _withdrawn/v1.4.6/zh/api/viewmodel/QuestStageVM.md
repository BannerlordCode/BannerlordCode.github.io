---
title: "QuestStageVM"
description: "QuestStageVM：TaleWorlds.CampaignSystem.ViewModelCollection.Quests 的 public 类，继承 ViewModel；公开成员 12 个（方法 3、属性 7、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# QuestStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestStageVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

QuestStageVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 QuestStageVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 12 个：3 方法、7 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：QuestStageVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`，继承链 QuestStageVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/12，方法 3/12），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 QuestItemSortControllerVM](../QuestItemSortControllerVM/)
- [同命名空间 QuestItemVM](../QuestItemVM/)
- [同命名空间 QuestMarkerVM](../QuestMarkerVM/)
- [同命名空间 QuestStageTaskVM](../QuestStageTaskVM/)
