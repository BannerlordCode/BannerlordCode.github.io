---
title: "StoryModeTutorialBoxCampaignBehavior"
description: "StoryModeTutorialBoxCampaignBehavior：StoryMode 的 public 类，继承 CampaignBehaviorBase；公开成员 5 个（方法 3、属性 1、字段 0）。源文件 StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs。"
---
# StoryModeTutorialBoxCampaignBehavior

**Namespace:** `StoryMode.GameComponents.CampaignBehaviors`
**Module:** `StoryMode`
**Type:** `public class StoryModeTutorialBoxCampaignBehavior : CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs`

## 概述

StoryModeTutorialBoxCampaignBehavior 位于 StoryMode 模块，源文件 StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 StoryModeTutorialBoxCampaignBehavior → CampaignBehaviorBase。public/protected 成员共 5 个：3 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModeTutorialBoxCampaignBehavior 是 StoryMode 的顶层类型，命名空间与模块目录不同（StoryMode.GameComponents.CampaignBehaviors），继承链 StoryModeTutorialBoxCampaignBehavior → CampaignBehaviorBase。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<CampaignTutorial>AvailableTutorials` | 属性 |
| `StoryModeTutorialBoxCampaignBehavior` | `public StoryModeTutorialBoxCampaignBehavior()` | 构造函数 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `OnResetAllTutorials` | `public void OnResetAllTutorials(ResetAllTutorialsEvent obj)` | 方法 |

## 参见

- [↑ storymode 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AchievementsCampaignBehavior](../AchievementsCampaignBehavior)
- [同命名空间 FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior)
- [同命名空间 LordConversationsStoryModeBehavior](../LordConversationsStoryModeBehavior)
- [同命名空间 MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior)
