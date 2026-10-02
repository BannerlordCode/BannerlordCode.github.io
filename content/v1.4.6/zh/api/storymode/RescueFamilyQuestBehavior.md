---
title: "RescueFamilyQuestBehavior"
description: "RescueFamilyQuestBehavior：StoryMode 的 public 类，继承 CampaignBehaviorBase；公开成员 5 个（方法 2、属性 1、字段 0）。源文件 StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs。"
---
# RescueFamilyQuestBehavior

**Namespace:** `StoryMode.Quests.PlayerClanQuests`
**Module:** `StoryMode`
**Type:** `public class RescueFamilyQuestBehavior : CampaignBehaviorBase`
**File:** `StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs`

## 概述

RescueFamilyQuestBehavior 位于 StoryMode 模块，源文件 StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 RescueFamilyQuestBehavior → CampaignBehaviorBase。public/protected 成员共 5 个：2 方法、1 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RescueFamilyQuestBehavior 是 StoryMode 的顶层类型，命名空间与模块目录不同（StoryMode.Quests.PlayerClanQuests），继承链 RescueFamilyQuestBehavior → CampaignBehaviorBase。成员构成以方法为主（方法 2/5，属性 1/5），对外主要以操作入口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `StoryModeQuestBase` | `public class RescueFamilyQuest : StoryModeQuestBase` | 属性 |
| `StoryModeQuestBase` | `public class RescueFamilyQuest : StoryModeQuestBase` | 嵌套类型 |
| `SaveableTypeDefiner` | `public class RebuildPlayerClanQuestBehaviorTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |

## 参见

- [↑ storymode 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 RebuildPlayerClanQuest](../RebuildPlayerClanQuest)
