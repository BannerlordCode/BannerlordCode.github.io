---
title: "QuestItemSortControllerVM"
description: "QuestItemSortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 1、属性 3、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemSortControllerVM.cs。"
---
# QuestItemSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestItemSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemSortControllerVM.cs`

## 概述

QuestItemSortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 QuestItemSortControllerVM → ViewModel。public/protected 成员共 7 个：1 方法、3 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：QuestItemSortControllerVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Quests），继承链 QuestItemSortControllerVM → ViewModel。成员构成以属性为主（属性 3/7，方法 1/7），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemSortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentSortOption` | `public QuestItemSortControllerVM.QuestItemSortOption? CurrentSortOption` | 属性 |
| `QuestItemSortControllerVM` | `public QuestItemSortControllerVM(ref MBBindingList<QuestItemVM>listToControl)` | 构造函数 |
| `SortByOption` | `public void SortByOption(QuestItemSortControllerVM.QuestItemSortOption sortOption)` | 方法 |
| `IsThereAnyQuest` | `public bool IsThereAnyQuest` | 属性 |
| `QuestItemSortOption` | `public enum QuestItemSortOption` | 属性 |
| `QuestItemSortOption` | `public enum QuestItemSortOption` | 嵌套类型 |
| `JournalLogIndex` | `protected enum JournalLogIndex` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 QuestItemVM](../QuestItemVM)
- [同命名空间 QuestMarkerVM](../QuestMarkerVM)
- [同命名空间 QuestStageTaskVM](../QuestStageTaskVM)
- [同命名空间 QuestStageVM](../QuestStageVM)
