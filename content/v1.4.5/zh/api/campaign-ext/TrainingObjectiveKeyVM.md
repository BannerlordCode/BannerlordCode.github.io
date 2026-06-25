---
title: "TrainingObjectiveKeyVM"
description: "TrainingObjectiveKeyVM 的自动生成类参考。"
---
# TrainingObjectiveKeyVM

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public class TrainingObjectiveKeyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Missions/TrainingObjectiveKeyVM.cs`

## 概述

`TrainingObjectiveKeyVM` 位于 `StoryMode.ViewModelCollection.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.ViewModelCollection.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Key` | `public InputKeyItemVM Key { get; set; }` |
| `ForcedKeyId` | `public string ForcedKeyId { get; set; }` |
| `ForcedKeyName` | `public string ForcedKeyName { get; set; }` |
| `MovementType` | `public int MovementType { get; set; }` |
| `MouseClick` | `public int MouseClick { get; set; }` |
| `InputType` | `public int InputType { get; set; }` |

## 主要方法

### MouseAndClickInput
`public struct MouseAndClickInput(MovementTypes movementType, MouseClickTypes mouseClickType)`

**用途 / Purpose:** 调用 MouseAndClickInput 对应的操作。

```csharp
// 先通过子系统 API 拿到 TrainingObjectiveKeyVM 实例
TrainingObjectiveKeyVM trainingObjectiveKeyVM = ...;
var result = trainingObjectiveKeyVM.MouseAndClickInput(movementType, mouseClickType);
```

### ControllerStickInput
`public struct ControllerStickInput(MovementTypes movementType, bool isLeftStick)`

**用途 / Purpose:** 调用 ControllerStickInput 对应的操作。

```csharp
// 先通过子系统 API 拿到 TrainingObjectiveKeyVM 实例
TrainingObjectiveKeyVM trainingObjectiveKeyVM = ...;
var result = trainingObjectiveKeyVM.ControllerStickInput(movementType, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TrainingObjectiveKeyVM trainingObjectiveKeyVM = ...;
trainingObjectiveKeyVM.MouseAndClickInput(movementType, mouseClickType);
```

## 参见

- [本区域目录](../)