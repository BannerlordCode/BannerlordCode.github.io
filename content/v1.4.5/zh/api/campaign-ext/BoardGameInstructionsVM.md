---
title: "BoardGameInstructionsVM"
description: "BoardGameInstructionsVM 的自动生成类参考。"
---
# BoardGameInstructionsVM

**Namespace:** SandBox.ViewModelCollection.BoardGame
**Module:** SandBox.ViewModelCollection
**Type:** `public class BoardGameInstructionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.BoardGame/BoardGameInstructionsVM.cs`

## 概述

`BoardGameInstructionsVM` 位于 `SandBox.ViewModelCollection.BoardGame`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.BoardGame` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPreviousButtonEnabled` | `public bool IsPreviousButtonEnabled { get; set; }` |
| `IsNextButtonEnabled` | `public bool IsNextButtonEnabled { get; set; }` |
| `InstructionsText` | `public string InstructionsText { get; set; }` |
| `PreviousText` | `public string PreviousText { get; set; }` |
| `NextText` | `public string NextText { get; set; }` |
| `CurrentPageText` | `public string CurrentPageText { get; set; }` |
| `InstructionList` | `public MBBindingList<BoardGameInstructionVM> InstructionList { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 BoardGameInstructionsVM 实例
BoardGameInstructionsVM boardGameInstructionsVM = ...;
boardGameInstructionsVM.RefreshValues();
```

### ExecuteShowPrevious
`public void ExecuteShowPrevious()`

**用途 / Purpose:** 执行 「show previous」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BoardGameInstructionsVM 实例
BoardGameInstructionsVM boardGameInstructionsVM = ...;
boardGameInstructionsVM.ExecuteShowPrevious();
```

### ExecuteShowNext
`public void ExecuteShowNext()`

**用途 / Purpose:** 执行 「show next」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BoardGameInstructionsVM 实例
BoardGameInstructionsVM boardGameInstructionsVM = ...;
boardGameInstructionsVM.ExecuteShowNext();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BoardGameInstructionsVM boardGameInstructionsVM = ...;
boardGameInstructionsVM.RefreshValues();
```

## 参见

- [本区域目录](../)