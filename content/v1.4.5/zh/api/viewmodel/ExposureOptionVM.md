---
title: "ExposureOptionVM"
description: "ExposureOptionVM 的自动生成类参考。"
---
# ExposureOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ExposureOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/ExposureOptionVM.cs`

## 概述

`ExposureOptionVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ExplanationText` | `public string ExplanationText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `AcceptText` | `public string AcceptText { get; set; }` |
| `Value` | `public float Value { get; set; }` |
| `InitialValue` | `public float InitialValue { get; set; }` |
| `Visible` | `public bool Visible { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ConfirmInputKey` | `public InputKeyItemVM ConfirmInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ExposureOptionVM 实例
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.RefreshValues();
```

### ExecuteConfirm
`public void ExecuteConfirm()`

**用途 / Purpose:** **用途 / Purpose:** 执行 confirm 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ExposureOptionVM 实例
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.ExecuteConfirm();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** **用途 / Purpose:** 执行 cancel 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ExposureOptionVM 实例
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.ExecuteCancel();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ExposureOptionVM 实例
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.SetCancelInputKey(hotkey);
```

### SetConfirmInputKey
`public void SetConfirmInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 confirm input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ExposureOptionVM 实例
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.SetConfirmInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ExposureOptionVM exposureOptionVM = ...;
exposureOptionVM.RefreshValues();
```

## 参见

- [本区域目录](../)