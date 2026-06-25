---
title: "TutorialItemVM"
description: "TutorialItemVM 的自动生成类参考。"
---
# TutorialItemVM

**Namespace:** SandBox.ViewModelCollection.Tutorial
**Module:** SandBox.ViewModelCollection
**Type:** `public class TutorialItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs`

## 概述

`TutorialItemVM` 位于 `SandBox.ViewModelCollection.Tutorial`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SetIsActive` | `public Action<bool> SetIsActive { get; }` |
| `DisableCurrentTutorialHint` | `public HintViewModel DisableCurrentTutorialHint { get; set; }` |
| `AreTutorialsEnabled` | `public bool AreTutorialsEnabled { get; set; }` |
| `TutorialsEnabledText` | `public string TutorialsEnabledText { get; set; }` |
| `TutorialTitleText` | `public string TutorialTitleText { get; set; }` |
| `DisableAllTutorialsHint` | `public HintViewModel DisableAllTutorialsHint { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `StepCountText` | `public string StepCountText { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `SoundId` | `public string SoundId { get; set; }` |
| `CenterImage` | `public ImageIdentifierVM CenterImage { get; set; }` |
| `RequiresMouse` | `public bool RequiresMouse { get; set; }` |

## 主要方法

### Init
`public void Init(string tutorialTypeId, bool requiresMouse, Action onFinishTutorial)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 TutorialItemVM 实例
TutorialItemVM tutorialItemVM = ...;
tutorialItemVM.Init("example", false, onFinishTutorial);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TutorialItemVM 实例
TutorialItemVM tutorialItemVM = ...;
tutorialItemVM.RefreshValues();
```

### CloseTutorialPanel
`public void CloseTutorialPanel()`

**用途 / Purpose:** 关闭tutorial panel对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 TutorialItemVM 实例
TutorialItemVM tutorialItemVM = ...;
tutorialItemVM.CloseTutorialPanel();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TutorialItemVM tutorialItemVM = ...;
tutorialItemVM.Init("example", false, onFinishTutorial);
```

## 参见

- [本区域目录](../)