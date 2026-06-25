---
title: "GettingCompanionsStep3Tutorial"
description: "GettingCompanionsStep3Tutorial 的自动生成类参考。"
---
# GettingCompanionsStep3Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class GettingCompanionsStep3Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/GettingCompanionsStep3Tutorial.cs`

## 概述

`GettingCompanionsStep3Tutorial` 位于 `StoryMode.GauntletUI.Tutorial`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.GauntletUI.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**用途 / Purpose:** 判断当前对象是否处于 「conditions met for completion」 状态或条件。

```csharp
// 先通过子系统 API 拿到 GettingCompanionsStep3Tutorial 实例
GettingCompanionsStep3Tutorial gettingCompanionsStep3Tutorial = ...;
var result = gettingCompanionsStep3Tutorial.IsConditionsMetForCompletion();
```

### OnPlayerStartTalkFromMenuOverlay
`public override void OnPlayerStartTalkFromMenuOverlay(Hero hero)`

**用途 / Purpose:** 在 「player start talk from menu overlay」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GettingCompanionsStep3Tutorial 实例
GettingCompanionsStep3Tutorial gettingCompanionsStep3Tutorial = ...;
gettingCompanionsStep3Tutorial.OnPlayerStartTalkFromMenuOverlay(hero);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**用途 / Purpose:** 读取并返回当前对象中 「tutorials relevant context」 的结果。

```csharp
// 先通过子系统 API 拿到 GettingCompanionsStep3Tutorial 实例
GettingCompanionsStep3Tutorial gettingCompanionsStep3Tutorial = ...;
var result = gettingCompanionsStep3Tutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**用途 / Purpose:** 判断当前对象是否处于 「conditions met for activation」 状态或条件。

```csharp
// 先通过子系统 API 拿到 GettingCompanionsStep3Tutorial 实例
GettingCompanionsStep3Tutorial gettingCompanionsStep3Tutorial = ...;
var result = gettingCompanionsStep3Tutorial.IsConditionsMetForActivation();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GettingCompanionsStep3Tutorial gettingCompanionsStep3Tutorial = ...;
gettingCompanionsStep3Tutorial.IsConditionsMetForCompletion();
```

## 参见

- [本区域目录](../)