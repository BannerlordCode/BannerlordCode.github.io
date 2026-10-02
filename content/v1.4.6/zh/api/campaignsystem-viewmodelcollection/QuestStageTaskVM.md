---
title: "QuestStageTaskVM"
description: "QuestStageTaskVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 2、属性 6、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs。"
---
# QuestStageTaskVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestStageTaskVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs`

## 概述

QuestStageTaskVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 QuestStageTaskVM → ViewModel。public/protected 成员共 9 个：2 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：QuestStageTaskVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Quests），继承链 QuestStageTaskVM → ViewModel。成员构成以属性为主（属性 6/9，方法 2/9），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageTaskVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `QuestStageTaskVM` | `public QuestStageTaskVM(TextObject taskName, int currentProgress, int targetProgress, LogType type)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink(string link)` | 方法 |
| `TaskName` | `public string TaskName` | 属性 |
| `IsValid` | `public bool IsValid` | 属性 |
| `CurrentProgress` | `public int CurrentProgress` | 属性 |
| `TargetProgress` | `public int TargetProgress` | 属性 |
| `NegativeTargetProgress` | `public int NegativeTargetProgress` | 属性 |
| `ProgressType` | `public int ProgressType` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 QuestItemSortControllerVM](../QuestItemSortControllerVM)
- [同命名空间 QuestItemVM](../QuestItemVM)
- [同命名空间 QuestMarkerVM](../QuestMarkerVM)
- [同命名空间 QuestStageVM](../QuestStageVM)
