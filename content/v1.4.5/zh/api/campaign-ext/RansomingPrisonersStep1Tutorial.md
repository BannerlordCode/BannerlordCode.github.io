---
title: "RansomingPrisonersStep1Tutorial"
description: "RansomingPrisonersStep1Tutorial 的自动生成类参考。"
---
# RansomingPrisonersStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class RansomingPrisonersStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/RansomingPrisonersStep1Tutorial.cs`

## 概述

`RansomingPrisonersStep1Tutorial` 位于 `StoryMode.GauntletUI.Tutorial`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.GauntletUI.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 conditions met for completion 状态或条件。

```csharp
// 先通过子系统 API 拿到 RansomingPrisonersStep1Tutorial 实例
RansomingPrisonersStep1Tutorial ransomingPrisonersStep1Tutorial = ...;
var result = ransomingPrisonersStep1Tutorial.IsConditionsMetForCompletion();
```

### OnGameMenuOpened
`public override void OnGameMenuOpened(MenuCallbackArgs obj)`

**用途 / Purpose:** **用途 / Purpose:** 在 game menu opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RansomingPrisonersStep1Tutorial 实例
RansomingPrisonersStep1Tutorial ransomingPrisonersStep1Tutorial = ...;
ransomingPrisonersStep1Tutorial.OnGameMenuOpened(obj);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 conditions met for activation 状态或条件。

```csharp
// 先通过子系统 API 拿到 RansomingPrisonersStep1Tutorial 实例
RansomingPrisonersStep1Tutorial ransomingPrisonersStep1Tutorial = ...;
var result = ransomingPrisonersStep1Tutorial.IsConditionsMetForActivation();
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tutorials relevant context 的结果。

```csharp
// 先通过子系统 API 拿到 RansomingPrisonersStep1Tutorial 实例
RansomingPrisonersStep1Tutorial ransomingPrisonersStep1Tutorial = ...;
var result = ransomingPrisonersStep1Tutorial.GetTutorialsRelevantContext();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RansomingPrisonersStep1Tutorial ransomingPrisonersStep1Tutorial = ...;
ransomingPrisonersStep1Tutorial.IsConditionsMetForCompletion();
```

## 参见

- [本区域目录](../)