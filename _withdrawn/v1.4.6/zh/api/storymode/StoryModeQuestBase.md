---
title: "StoryModeQuestBase"
description: "StoryModeQuestBase：StoryMode 的 public 类，继承 QuestBase；公开成员 4 个（方法 1、属性 2、字段 0）。canonical 桶 storymode。源文件 StoryMode/StoryModeQuestBase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeQuestBase

**Namespace:** `StoryMode`
**Module:** `StoryMode`
**Type:** `public abstract class StoryModeQuestBase : QuestBase`
**File:** `StoryMode/StoryModeQuestBase.cs`
**Bucket:** `storymode` (rule:StoryMode)

## 概述

StoryModeQuestBase 位于 StoryMode 模块，源文件 StoryMode/StoryModeQuestBase.cs。它是一个 public 类（abstract），实现/继承 QuestBase，继承链为 StoryModeQuestBase → QuestBase → MBObjectBase。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModeQuestBase 落在 canonical 桶 `storymode`（命中规则 `rule:StoryMode`），命名空间 `StoryMode`，继承链 StoryModeQuestBase → QuestBase → MBObjectBase。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/StoryModeQuestBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SpecialQuestType` | `public override string SpecialQuestType` | 属性 |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden` | 属性 |
| `StoryModeQuestBase` | `protected StoryModeQuestBase(string questId, Hero questGiver, CampaignTime duration) : base(questId, questGiver, duration, 0)` | 构造函数 |
| `OnTimedOut` | `protected override void OnTimedOut()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 QuestBase](../../campaign/QuestBase/)
- [同命名空间 CampaignStoryMode](../CampaignStoryMode/)
- [同命名空间 ConspiracyQuestMapNotification](../ConspiracyQuestMapNotification/)
- [同命名空间 IsArzagosTag](../IsArzagosTag/)
- [同命名空间 IsIstianaTag](../IsIstianaTag/)
