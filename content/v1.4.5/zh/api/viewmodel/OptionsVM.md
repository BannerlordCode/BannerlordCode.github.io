---
title: "OptionsVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OptionsVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OptionsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/OptionsVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteCloseOptions
`public void ExecuteCloseOptions()`

**用途 / Purpose:** 执行 `close options` 操作或流程。

### GetActiveCategory
`public ViewModel GetActiveCategory()`

**用途 / Purpose:** 获取 `active category` 的当前值。

### GetIndexOfCategory
`public int GetIndexOfCategory(ViewModel categoryVM)`

**用途 / Purpose:** 获取 `index of category` 的当前值。

### GetConfig
`public float GetConfig(IOptionData data)`

**用途 / Purpose:** 获取 `config` 的当前值。

### SetConfig
`public void SetConfig(IOptionData data, float val)`

**用途 / Purpose:** 设置 `config` 的值或状态。

### SelectPreviousCategory
`public void SelectPreviousCategory()`

**用途 / Purpose:** 处理 `select previous category` 相关逻辑。

### SelectNextCategory
`public void SelectNextCategory()`

**用途 / Purpose:** 处理 `select next category` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### IsOptionsChanged
`public bool IsOptionsChanged()`

**用途 / Purpose:** 处理 `is options changed` 相关逻辑。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `previous tab input key` 的值或状态。

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `next tab input key` 的值或状态。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

## 使用示例

```csharp
var value = new OptionsVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)