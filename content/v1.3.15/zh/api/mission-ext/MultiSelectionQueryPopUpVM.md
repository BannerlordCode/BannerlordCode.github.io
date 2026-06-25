---
title: "MultiSelectionQueryPopUpVM"
description: "MultiSelectionQueryPopUpVM 的自动生成类参考。"
---
# MultiSelectionQueryPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiSelectionQueryPopUpVM : PopUpBaseVM`
**Base:** `PopUpBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs`

## 概述

`MultiSelectionQueryPopUpVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InquiryElements` | `public MBBindingList<InquiryElementVM> InquiryElements { get; set; }` |
| `MaxSelectableOptionCount` | `public int MaxSelectableOptionCount { get; set; }` |
| `MinSelectableOptionCount` | `public int MinSelectableOptionCount { get; set; }` |
| `IsSearchAvailable` | `public bool IsSearchAvailable { get; set; }` |
| `SearchText` | `public string SearchText { get; set; }` |
| `SearchPlaceholderText` | `public string SearchPlaceholderText { get; set; }` |

## 主要方法

### SetData
`public void SetData(MultiSelectionInquiryData data)`

**用途 / Purpose:** 为 data 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MultiSelectionQueryPopUpVM 实例
MultiSelectionQueryPopUpVM multiSelectionQueryPopUpVM = ...;
multiSelectionQueryPopUpVM.SetData(data);
```

### ExecuteAffirmativeAction
`public override void ExecuteAffirmativeAction()`

**用途 / Purpose:** 执行 affirmative action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiSelectionQueryPopUpVM 实例
MultiSelectionQueryPopUpVM multiSelectionQueryPopUpVM = ...;
multiSelectionQueryPopUpVM.ExecuteAffirmativeAction();
```

### ExecuteNegativeAction
`public override void ExecuteNegativeAction()`

**用途 / Purpose:** 执行 negative action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiSelectionQueryPopUpVM 实例
MultiSelectionQueryPopUpVM multiSelectionQueryPopUpVM = ...;
multiSelectionQueryPopUpVM.ExecuteNegativeAction();
```

### OnClearData
`public override void OnClearData()`

**用途 / Purpose:** 在 clear data 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiSelectionQueryPopUpVM 实例
MultiSelectionQueryPopUpVM multiSelectionQueryPopUpVM = ...;
multiSelectionQueryPopUpVM.OnClearData();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiSelectionQueryPopUpVM multiSelectionQueryPopUpVM = ...;
multiSelectionQueryPopUpVM.SetData(data);
```

## 参见

- [本区域目录](../)