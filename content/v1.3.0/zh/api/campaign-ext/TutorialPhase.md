---
title: "TutorialPhase"
description: "TutorialPhase 的自动生成类参考。"
---
# TutorialPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class TutorialPhase`
**Base:** 无
**File:** `StoryMode/StoryModePhases/TutorialPhase.cs`

## 概述

`TutorialPhase` 位于 `StoryMode.StoryModePhases`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.StoryModePhases` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static TutorialPhase Instance { get; }` |
| `TutorialFocusSettlement` | `public Settlement TutorialFocusSettlement { get; }` |
| `TutorialFocusMobileParty` | `public MobileParty TutorialFocusMobileParty { get; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `TalkedWithBrotherForTheFirstTime` | `public bool TalkedWithBrotherForTheFirstTime { get; }` |
| `LockTutorialVillageEnter` | `public bool LockTutorialVillageEnter { get; }` |
| `TutorialQuestPhase` | `public TutorialQuestPhase TutorialQuestPhase { get; }` |
| `IsSkipped` | `public bool IsSkipped { get; }` |
| `TutorialVillageHeadman` | `public Hero TutorialVillageHeadman { get; set; }` |

## 主要方法

### PlayerTalkedWithBrotherForTheFirstTime
`public void PlayerTalkedWithBrotherForTheFirstTime()`

**用途 / Purpose:** **用途 / Purpose:** 调用 PlayerTalkedWithBrotherForTheFirstTime 对应的操作。

```csharp
// 先通过子系统 API 拿到 TutorialPhase 实例
TutorialPhase tutorialPhase = ...;
tutorialPhase.PlayerTalkedWithBrotherForTheFirstTime();
```

### SetLockTutorialVillageEnter
`public void SetLockTutorialVillageEnter(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 lock tutorial village enter 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TutorialPhase 实例
TutorialPhase tutorialPhase = ...;
tutorialPhase.SetLockTutorialVillageEnter(false);
```

### CompleteTutorial
`public void CompleteTutorial(bool isSkipped)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CompleteTutorial 对应的操作。

```csharp
// 先通过子系统 API 拿到 TutorialPhase 实例
TutorialPhase tutorialPhase = ...;
tutorialPhase.CompleteTutorial(false);
```

### SetTutorialFocusSettlement
`public void SetTutorialFocusSettlement(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 为 tutorial focus settlement 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TutorialPhase 实例
TutorialPhase tutorialPhase = ...;
tutorialPhase.SetTutorialFocusSettlement(settlement);
```

### RemoveTutorialFocusSettlement
`public void RemoveTutorialFocusSettlement()`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 tutorial focus settlement。

```csharp
// 先通过子系统 API 拿到 TutorialPhase 实例
TutorialPhase tutorialPhase = ...;
tutorialPhase.RemoveTutorialFocusSettlement();
```

### RemoveTutorialFocusMobileParty
`public void RemoveTutorialFocusMobileParty()`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 tutorial focus mobile party。

```csharp
// 先通过子系统 API 拿到 TutorialPhase 实例
TutorialPhase tutorialPhase = ...;
tutorialPhase.RemoveTutorialFocusMobileParty();
```

### PrepareRecruitOptionForTutorial
`public void PrepareRecruitOptionForTutorial()`

**用途 / Purpose:** **用途 / Purpose:** 为即将执行的recruit option for tutorial操作完成前置准备工作。

```csharp
// 先通过子系统 API 拿到 TutorialPhase 实例
TutorialPhase tutorialPhase = ...;
tutorialPhase.PrepareRecruitOptionForTutorial();
```

### GetAndPrepareBuyProductsOptionForTutorial
`public ItemRoster GetAndPrepareBuyProductsOptionForTutorial(Village village)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 and prepare buy products option for tutorial 的结果。

```csharp
// 先通过子系统 API 拿到 TutorialPhase 实例
TutorialPhase tutorialPhase = ...;
var result = tutorialPhase.GetAndPrepareBuyProductsOptionForTutorial(village);
```

### SetTutorialQuestPhase
`public void SetTutorialQuestPhase(TutorialQuestPhase tutorialQuestPhase)`

**用途 / Purpose:** **用途 / Purpose:** 为 tutorial quest phase 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TutorialPhase 实例
TutorialPhase tutorialPhase = ...;
tutorialPhase.SetTutorialQuestPhase(tutorialQuestPhase);
```

### InitializeTutorialVillageItemRoster
`public void InitializeTutorialVillageItemRoster()`

**用途 / Purpose:** **用途 / Purpose:** 为 tutorial village item roster 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 TutorialPhase 实例
TutorialPhase tutorialPhase = ...;
tutorialPhase.InitializeTutorialVillageItemRoster();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TutorialPhase tutorialPhase = ...;
tutorialPhase.PlayerTalkedWithBrotherForTheFirstTime();
```

## 参见

- [本区域目录](../)