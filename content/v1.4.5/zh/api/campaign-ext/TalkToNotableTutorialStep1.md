---
title: "TalkToNotableTutorialStep1"
description: "TalkToNotableTutorialStep1 的自动生成类参考。"
---
# TalkToNotableTutorialStep1

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class TalkToNotableTutorialStep1 : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/TalkToNotableTutorialStep1.cs`

## 概述

`TalkToNotableTutorialStep1` 位于 `StoryMode.GauntletUI.Tutorial`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.GauntletUI.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**用途 / Purpose:** 读取并返回当前对象中 「tutorials relevant context」 的结果。

```csharp
// 先通过子系统 API 拿到 TalkToNotableTutorialStep1 实例
TalkToNotableTutorialStep1 talkToNotableTutorialStep1 = ...;
var result = talkToNotableTutorialStep1.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**用途 / Purpose:** 判断当前对象是否处于 「conditions met for activation」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TalkToNotableTutorialStep1 实例
TalkToNotableTutorialStep1 talkToNotableTutorialStep1 = ...;
var result = talkToNotableTutorialStep1.IsConditionsMetForActivation();
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**用途 / Purpose:** 判断当前对象是否处于 「conditions met for completion」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TalkToNotableTutorialStep1 实例
TalkToNotableTutorialStep1 talkToNotableTutorialStep1 = ...;
var result = talkToNotableTutorialStep1.IsConditionsMetForCompletion();
```

### OnCharacterPortraitPopUpOpened
`public override void OnCharacterPortraitPopUpOpened(CharacterObject obj)`

**用途 / Purpose:** 在 「character portrait pop up opened」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TalkToNotableTutorialStep1 实例
TalkToNotableTutorialStep1 talkToNotableTutorialStep1 = ...;
talkToNotableTutorialStep1.OnCharacterPortraitPopUpOpened(obj);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TalkToNotableTutorialStep1 talkToNotableTutorialStep1 = ...;
talkToNotableTutorialStep1.GetTutorialsRelevantContext();
```

## 参见

- [本区域目录](../)