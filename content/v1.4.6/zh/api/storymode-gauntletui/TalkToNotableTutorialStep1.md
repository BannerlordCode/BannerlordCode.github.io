---
title: "TalkToNotableTutorialStep1"
description: "TalkToNotableTutorialStep1：StoryMode.GauntletUI 的 public 类，继承 TutorialItemBase；公开成员 5 个（方法 4、属性 0、字段 0）。源文件 StoryMode.GauntletUI/Tutorial/TalkToNotableTutorialStep1.cs。"
---
# TalkToNotableTutorialStep1

**Namespace:** `StoryMode.GauntletUI.Tutorial`
**Module:** `StoryMode.GauntletUI`
**Type:** `public class TalkToNotableTutorialStep1 : TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/TalkToNotableTutorialStep1.cs`

## 概述

TalkToNotableTutorialStep1 位于 StoryMode.GauntletUI 模块，源文件 StoryMode.GauntletUI/Tutorial/TalkToNotableTutorialStep1.cs。它是一个 public 类，实现/继承 TutorialItemBase，继承链为 TalkToNotableTutorialStep1 → TutorialItemBase。public/protected 成员共 5 个：4 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TalkToNotableTutorialStep1 是 StoryMode.GauntletUI 的顶层类型，命名空间与模块目录不同（StoryMode.GauntletUI.Tutorial），继承链 TalkToNotableTutorialStep1 → TutorialItemBase。成员构成以方法为主（方法 4/5，属性 0/5），对外主要以操作入口暴露。继承链上的 TutorialItemBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode.GauntletUI/Tutorial/TalkToNotableTutorialStep1.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TalkToNotableTutorialStep1` | `public TalkToNotableTutorialStep1()` | 构造函数 |
| `GetTutorialsRelevantContext` | `public override TutorialContexts GetTutorialsRelevantContext()` | 方法 |
| `IsConditionsMetForActivation` | `public override bool IsConditionsMetForActivation()` | 方法 |
| `IsConditionsMetForCompletion` | `public override bool IsConditionsMetForCompletion()` | 方法 |
| `OnCharacterPortraitPopUpOpened` | `public override void OnCharacterPortraitPopUpOpened(CharacterObject obj)` | 方法 |

## 参见

- [↑ storymode-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyCohesionStep1Tutorial](../ArmyCohesionStep1Tutorial)
- [同命名空间 ArmyCohesionStep2Tutorial](../ArmyCohesionStep2Tutorial)
- [同命名空间 AssignRolesTutorial](../AssignRolesTutorial)
- [同命名空间 BombardmentStep1Tutorial](../BombardmentStep1Tutorial)
