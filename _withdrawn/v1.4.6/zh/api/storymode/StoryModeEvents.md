---
title: "StoryModeEvents"
description: "StoryModeEvents：StoryMode 的 public 类，继承 CampaignEventReceiver；公开成员 14 个（方法 7、属性 7、字段 0）。canonical 桶 storymode。源文件 StoryMode/StoryModeEvents.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeEvents

**Namespace:** `StoryMode`
**Module:** `StoryMode`
**Type:** `public class StoryModeEvents : CampaignEventReceiver`
**File:** `StoryMode/StoryModeEvents.cs`
**Bucket:** `storymode` (rule:StoryMode)

## 概述

StoryModeEvents 位于 StoryMode 模块，源文件 StoryMode/StoryModeEvents.cs。它是一个 public 类，实现/继承 CampaignEventReceiver，继承链为 StoryModeEvents → CampaignEventReceiver。public/protected 成员共 14 个：7 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModeEvents 落在 canonical 桶 `storymode`（命中规则 `rule:StoryMode`），命名空间 `StoryMode`，继承链 StoryModeEvents → CampaignEventReceiver。成员构成以方法为主（方法 7/14，属性 7/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/StoryModeEvents.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static StoryModeEvents Instance` | 属性 |
| `RemoveListeners` | `public override void RemoveListeners(object obj)` | 方法 |
| `IMbEvent` | `public static IMbEvent<MainStoryLineSide>OnMainStoryLineSideChosenEvent` | 属性 |
| `OnMainStoryLineSideChosen` | `public void OnMainStoryLineSideChosen(MainStoryLineSide side)` | 方法 |
| `OnStoryModeTutorialEndedEvent` | `public static IMbEvent OnStoryModeTutorialEndedEvent` | 属性 |
| `OnStoryModeTutorialEnded` | `public void OnStoryModeTutorialEnded()` | 方法 |
| `OnStealthTutorialActivatedEvent` | `public static IMbEvent OnStealthTutorialActivatedEvent` | 属性 |
| `OnStealthTutorialActivated` | `public void OnStealthTutorialActivated()` | 方法 |
| `OnBannerPieceCollectedEvent` | `public static IMbEvent OnBannerPieceCollectedEvent` | 属性 |
| `OnBannerPieceCollected` | `public void OnBannerPieceCollected()` | 方法 |
| `OnConspiracyActivatedEvent` | `public static IMbEvent OnConspiracyActivatedEvent` | 属性 |
| `OnConspiracyActivated` | `public void OnConspiracyActivated()` | 方法 |
| `OnTravelToVillageTutorialQuestStartedEvent` | `public static IMbEvent OnTravelToVillageTutorialQuestStartedEvent` | 属性 |
| `OnTravelToVillageTutorialQuestStarted` | `public void OnTravelToVillageTutorialQuestStarted()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignEventReceiver](../../campaign/CampaignEventReceiver/)
- [同命名空间 CampaignStoryMode](../CampaignStoryMode/)
- [同命名空间 ConspiracyQuestMapNotification](../ConspiracyQuestMapNotification/)
- [同命名空间 IsArzagosTag](../IsArzagosTag/)
- [同命名空间 IsIstianaTag](../IsIstianaTag/)
