---
title: "DefeatTheConspiracyQuestBehavior"
description: "DefeatTheConspiracyQuestBehavior：StoryMode 的 public 类，继承 CampaignBehaviorBase；公开成员 9 个（方法 4、属性 2、字段 1）。源文件 StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs。"
---
# DefeatTheConspiracyQuestBehavior

**Namespace:** `StoryMode.Quests.ThirdPhase`
**Module:** `StoryMode`
**Type:** `public class DefeatTheConspiracyQuestBehavior : CampaignBehaviorBase`
**File:** `StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs`

## 概述

DefeatTheConspiracyQuestBehavior 位于 StoryMode 模块，源文件 StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 DefeatTheConspiracyQuestBehavior → CampaignBehaviorBase。public/protected 成员共 9 个：4 方法、2 属性、1 字段、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefeatTheConspiracyQuestBehavior 是 StoryMode 的顶层类型，命名空间与模块目录不同（StoryMode.Quests.ThirdPhase），继承链 DefeatTheConspiracyQuestBehavior → CampaignBehaviorBase。成员构成以方法为主（方法 4/9，属性 2/9），对外主要以操作入口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMobilePartyCreatedForQuest` | `public bool IsMobilePartyCreatedForQuest(MobileParty mobileParty)` | 方法 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `InitializeFinalPhase` | `protected void InitializeFinalPhase()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `TroopLimitPerNewClanParty` | `public const int TroopLimitPerNewClanParty` | 字段 |
| `SaveableTypeDefiner` | `public class DefeatTheConspiracyQuestBehaviorTypeDefiner : SaveableTypeDefiner` | 属性 |
| `StoryModeQuestBase` | `public class DefeatTheConspiracyQuest : StoryModeQuestBase` | 属性 |
| `SaveableTypeDefiner` | `public class DefeatTheConspiracyQuestBehaviorTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |
| `StoryModeQuestBase` | `public class DefeatTheConspiracyQuest : StoryModeQuestBase` | 嵌套类型 |

## 参见

- [↑ storymode 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
