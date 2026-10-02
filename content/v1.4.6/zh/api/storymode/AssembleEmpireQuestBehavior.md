---
title: "AssembleEmpireQuestBehavior"
description: "AssembleEmpireQuestBehavior：StoryMode 的 public 类，继承 CampaignBehaviorBase；公开成员 6 个（方法 2、属性 2、字段 0）。源文件 StoryMode/Quests/SecondPhase/AssembleEmpireQuestBehavior.cs。"
---
# AssembleEmpireQuestBehavior

**Namespace:** `StoryMode.Quests.SecondPhase`
**Module:** `StoryMode`
**Type:** `public class AssembleEmpireQuestBehavior : CampaignBehaviorBase`
**File:** `StoryMode/Quests/SecondPhase/AssembleEmpireQuestBehavior.cs`

## 概述

AssembleEmpireQuestBehavior 位于 StoryMode 模块，源文件 StoryMode/Quests/SecondPhase/AssembleEmpireQuestBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 AssembleEmpireQuestBehavior → CampaignBehaviorBase。public/protected 成员共 6 个：2 方法、2 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AssembleEmpireQuestBehavior 是 StoryMode 的顶层类型，命名空间与模块目录不同（StoryMode.Quests.SecondPhase），继承链 AssembleEmpireQuestBehavior → CampaignBehaviorBase。成员构成以方法为主（方法 2/6，属性 2/6），对外主要以操作入口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/Quests/SecondPhase/AssembleEmpireQuestBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `SaveableTypeDefiner` | `public class AssembleEmpireQuestBehaviorTypeDefiner : SaveableTypeDefiner` | 属性 |
| `StoryModeQuestBase` | `public class AssembleEmpireQuest : StoryModeQuestBase` | 属性 |
| `SaveableTypeDefiner` | `public class AssembleEmpireQuestBehaviorTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |
| `StoryModeQuestBase` | `public class AssembleEmpireQuest : StoryModeQuestBase` | 嵌套类型 |

## 参见

- [↑ storymode 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConspiracyProgressQuest](../ConspiracyProgressQuest)
- [同命名空间 ConspiracyQuestBase](../ConspiracyQuestBase)
- [同命名空间 WeakenEmpireQuestBehavior](../WeakenEmpireQuestBehavior)
