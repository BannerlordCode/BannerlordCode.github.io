---
title: "OptionsVM"
description: "OptionsVM 的自动生成类参考。"
---
# OptionsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/OptionsVM.cs`

## 概述

`OptionsVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentOptionsMode` | `public OptionsMode CurrentOptionsMode { get; }` |
| `CategoryIndex` | `public int CategoryIndex { get; set; }` |
| `OptionsLbl` | `public string OptionsLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `IsConsole` | `public bool IsConsole { get; set; }` |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode { get; set; }` |
| `VideoMemoryUsageName` | `public string VideoMemoryUsageName { get; set; }` |
| `VideoMemoryUsageText` | `public string VideoMemoryUsageText { get; set; }` |
| `VideoMemoryUsageNormalized` | `public float VideoMemoryUsageNormalized { get; set; }` |
| `BrightnessPopUp` | `public BrightnessOptionVM BrightnessPopUp { get; set; }` |
| `ExposurePopUp` | `public ExposureOptionVM ExposurePopUp { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.RefreshValues();
```

### ExecuteCloseOptions
`public void ExecuteCloseOptions()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close options 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.ExecuteCloseOptions();
```

### GetActiveCategory
`public ViewModel GetActiveCategory()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active category 的结果。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
var result = optionsVM.GetActiveCategory();
```

### GetIndexOfCategory
`public int GetIndexOfCategory(ViewModel categoryVM)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 index of category 的结果。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
var result = optionsVM.GetIndexOfCategory(categoryVM);
```

### GetConfig
`public float GetConfig(IOptionData data)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 config 的结果。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
var result = optionsVM.GetConfig(data);
```

### SetConfig
`public void SetConfig(IOptionData data, float val)`

**用途 / Purpose:** **用途 / Purpose:** 为 config 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.SetConfig(data, 0);
```

### SelectPreviousCategory
`public void SelectPreviousCategory()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SelectPreviousCategory 对应的操作。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.SelectPreviousCategory();
```

### SelectNextCategory
`public void SelectNextCategory()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SelectNextCategory 对应的操作。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.SelectNextCategory();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.OnFinalize();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** **用途 / Purpose:** 执行 cancel 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.ExecuteCancel();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** **用途 / Purpose:** 执行 done 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.ExecuteDone();
```

### IsOptionsChanged
`public bool IsOptionsChanged()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 options changed 状态或条件。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
var result = optionsVM.IsOptionsChanged();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.SetCancelInputKey(hotkey);
```

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 previous tab input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.SetPreviousTabInputKey(hotkey);
```

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 next tab input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.SetNextTabInputKey(hotkey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 reset input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OptionsVM 实例
OptionsVM optionsVM = ...;
optionsVM.SetResetInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
OptionsVM optionsVM = ...;
optionsVM.RefreshValues();
```

## 参见

- [本区域目录](../)