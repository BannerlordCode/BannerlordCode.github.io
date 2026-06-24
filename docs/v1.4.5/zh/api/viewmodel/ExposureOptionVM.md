<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ExposureOptionVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ExposureOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ExposureOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/ExposureOptionVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteConfirm
`public void ExecuteConfirm()`

**用途 / Purpose:** 执行 `confirm` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetConfirmInputKey
`public void SetConfirmInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `confirm input key` 的值或状态。

## 使用示例

```csharp
var value = new ExposureOptionVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)