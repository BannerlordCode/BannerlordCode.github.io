---
title: "TutorialVM"
description: "TutorialVM 的自动生成类参考。"
---
# TutorialVM

**Namespace:** SandBox.ViewModelCollection.Tutorial
**Module:** SandBox.ViewModelCollection
**Type:** `public class TutorialVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Tutorial/TutorialVM.cs`

## 概述

`TutorialVM` 位于 `SandBox.ViewModelCollection.Tutorial`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static TutorialVM Instance { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `LeftItem` | `public TutorialItemVM LeftItem { get; set; }` |
| `RightItem` | `public TutorialItemVM RightItem { get; set; }` |
| `BottomItem` | `public TutorialItemVM BottomItem { get; set; }` |
| `TopItem` | `public TutorialItemVM TopItem { get; set; }` |
| `LeftBottomItem` | `public TutorialItemVM LeftBottomItem { get; set; }` |
| `LeftTopItem` | `public TutorialItemVM LeftTopItem { get; set; }` |
| `RightBottomItem` | `public TutorialItemVM RightBottomItem { get; set; }` |
| `RightTopItem` | `public TutorialItemVM RightTopItem { get; set; }` |
| `CenterItem` | `public TutorialItemVM CenterItem { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TutorialVM 实例
TutorialVM tutorialVM = ...;
tutorialVM.RefreshValues();
```

### SetCurrentTutorial
`public void SetCurrentTutorial(TutorialItemVM.ItemPlacements placement, string tutorialTypeId, bool requiresMouse)`

**用途 / Purpose:** **用途 / Purpose:** 为 current tutorial 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TutorialVM 实例
TutorialVM tutorialVM = ...;
tutorialVM.SetCurrentTutorial(placement, "example", false);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 TutorialVM 实例
TutorialVM tutorialVM = ...;
tutorialVM.Tick(0);
```

### CloseTutorialStep
`public void CloseTutorialStep(bool finalizeAllSteps = false)`

**用途 / Purpose:** **用途 / Purpose:** 关闭tutorial step对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 TutorialVM 实例
TutorialVM tutorialVM = ...;
tutorialVM.CloseTutorialStep(false);
```

### FinalizeTutorial
`public void FinalizeTutorial()`

**用途 / Purpose:** **用途 / Purpose:** 调用 FinalizeTutorial 对应的操作。

```csharp
// 先通过子系统 API 拿到 TutorialVM 实例
TutorialVM tutorialVM = ...;
tutorialVM.FinalizeTutorial();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TutorialVM tutorialVM = ...;
tutorialVM.RefreshValues();
```

## 参见

- [本区域目录](../)